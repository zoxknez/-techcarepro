import { NextRequest, NextResponse } from "next/server"
import Stripe from "stripe"

function getStripe() {
  const key = process.env.STRIPE_SECRET_KEY
  if (!key) {
    throw new Error("STRIPE_SECRET_KEY is not configured")
  }
  return new Stripe(key)
}

export async function POST(request: NextRequest) {
  try {
    const stripe = getStripe()
    const body = await request.json()
    const { amount, currency = "nzd", metadata } = body

    if (!amount || amount <= 0) {
      return NextResponse.json(
        { error: "Invalid amount" },
        { status: 400 }
      )
    }

    // Create a PaymentIntent with the order amount and currency
    const paymentIntent = await stripe.paymentIntents.create({
      amount: Math.round(amount * 100), // Stripe expects cents
      currency,
      automatic_payment_methods: {
        enabled: true,
      },
      metadata: metadata || {},
    })

    return NextResponse.json({
      clientSecret: paymentIntent.client_secret,
      paymentIntentId: paymentIntent.id,
    })
  } catch (error) {
    console.error("Error creating payment intent:", error)
    return NextResponse.json(
      { error: "Failed to create payment intent" },
      { status: 500 }
    )
  }
}
