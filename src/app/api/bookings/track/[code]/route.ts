import { NextRequest, NextResponse } from "next/server"
import { prisma } from "@/lib/db"

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ code: string }> }
) {
  try {
    const { code } = await params

    const booking = await prisma.booking.findUnique({
      where: { trackingCode: code },
      include: {
        service: {
          include: { category: true }
        }
      }
    })

    if (!booking) {
      return NextResponse.json(
        { error: "Booking not found" },
        { status: 404 }
      )
    }

    // Return public-safe booking info
    return NextResponse.json({
      id: booking.id,
      trackingCode: booking.trackingCode,
      status: booking.status,
      service: booking.service.name,
      category: booking.service.category.name,
      deviceBrand: booking.deviceBrand,
      deviceModel: booking.deviceModel,
      preferredDate: booking.preferredDate,
      preferredTime: booking.preferredTime,
      serviceType: booking.serviceType,
      quotedPrice: booking.quotedPrice,
      finalPrice: booking.finalPrice,
      createdAt: booking.createdAt,
      completedAt: booking.completedAt,
    })
  } catch (error) {
    console.error("Error fetching booking:", error)
    return NextResponse.json(
      { error: "Failed to fetch booking" },
      { status: 500 }
    )
  }
}
