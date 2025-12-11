import { NextRequest, NextResponse } from "next/server"
import { prisma } from "@/lib/db"

export async function GET() {
  try {
    const bookings = await prisma.booking.findMany({
      include: {
        service: true,
        user: {
          select: { id: true, name: true, email: true }
        }
      },
      orderBy: { createdAt: "desc" },
      take: 50
    })

    return NextResponse.json(bookings)
  } catch (error) {
    console.error("Error fetching bookings:", error)
    return NextResponse.json(
      { error: "Failed to fetch bookings" },
      { status: 500 }
    )
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()

    const {
      serviceId,
      deviceBrand,
      deviceModel,
      issueDescription,
      images = [],
      serviceType,
      preferredDate,
      preferredTime,
      customerName,
      customerEmail,
      customerPhone,
      serviceAddress,
      userId
    } = body

    // Validate required fields
    if (!serviceId || !deviceBrand || !issueDescription || !preferredDate || !customerName || !customerEmail) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      )
    }

    const booking = await prisma.booking.create({
      data: {
        serviceId,
        deviceBrand,
        deviceModel: deviceModel || "",
        issueDescription,
        images,
        serviceType: serviceType === "onsite" ? "ONSITE" : "WORKSHOP",
        preferredDate: new Date(preferredDate),
        preferredTime,
        customerName,
        customerEmail,
        customerPhone: customerPhone || "",
        serviceAddress,
        userId: userId || null,
      },
      include: {
        service: true
      }
    })

    // TODO: Send confirmation email via Resend
    // await sendBookingConfirmation(booking)

    return NextResponse.json(booking, { status: 201 })
  } catch (error) {
    console.error("Error creating booking:", error)
    return NextResponse.json(
      { error: "Failed to create booking" },
      { status: 500 }
    )
  }
}
