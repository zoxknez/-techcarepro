import { NextRequest, NextResponse } from "next/server"
import { headers } from "next/headers"
import Stripe from "stripe"
import { prisma } from "@/lib/db"

function getStripe() {
  const key = process.env.STRIPE_SECRET_KEY
  if (!key) {
    throw new Error("STRIPE_SECRET_KEY is not configured")
  }
  return new Stripe(key)
}

export async function POST(request: NextRequest) {
  const webhookSecret = process.env.STRIPE_WEBHOOK_SECRET
  if (!webhookSecret) {
    return NextResponse.json(
      { error: "Webhook secret not configured" },
      { status: 500 }
    )
  }

  const stripe = getStripe()
  const body = await request.text()
  const headersList = await headers()
  const signature = headersList.get("stripe-signature")

  if (!signature) {
    return NextResponse.json(
      { error: "Missing signature" },
      { status: 400 }
    )
  }

  let event: Stripe.Event

  try {
    event = stripe.webhooks.constructEvent(body, signature, webhookSecret)
  } catch (err) {
    console.error("Webhook signature verification failed:", err)
    return NextResponse.json(
      { error: "Invalid signature" },
      { status: 400 }
    )
  }

  // Handle the event
  switch (event.type) {
    case "payment_intent.succeeded": {
      const paymentIntent = event.data.object as Stripe.PaymentIntent
      
      // Update order status to PAID
      if (paymentIntent.metadata.orderId) {
        await prisma.order.update({
          where: { id: paymentIntent.metadata.orderId },
          data: { status: "PAID" },
        })
      }
      
      console.log(`PaymentIntent ${paymentIntent.id} succeeded`)
      break
    }

    case "payment_intent.payment_failed": {
      const paymentIntent = event.data.object as Stripe.PaymentIntent
      console.log(`PaymentIntent ${paymentIntent.id} failed`)
      break
    }

    case "checkout.session.completed": {
      const session = event.data.object as Stripe.Checkout.Session
      
      // Handle checkout completion
      if (session.metadata?.orderId) {
        await prisma.order.update({
          where: { id: session.metadata.orderId },
          data: { status: "PAID" },
        })
      }
      
      console.log(`Checkout session ${session.id} completed`)
      break
    }

    default:
      console.log(`Unhandled event type: ${event.type}`)
  }

  return NextResponse.json({ received: true })
}
