import { NextRequest, NextResponse } from "next/server"
import { prisma } from "@/lib/db"

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url)
    const category = searchParams.get("category")
    const brand = searchParams.get("brand")
    const featured = searchParams.get("featured")
    const limit = parseInt(searchParams.get("limit") || "50")

    const where: Record<string, unknown> = { active: true }

    if (category && category !== "all") {
      where.category = category.toUpperCase()
    }

    if (brand) {
      where.brand = brand
    }

    if (featured === "true") {
      where.featured = true
    }

    const products = await prisma.product.findMany({
      where,
      orderBy: [
        { featured: "desc" },
        { createdAt: "desc" }
      ],
      take: limit
    })

    return NextResponse.json(products)
  } catch (error) {
    console.error("Error fetching products:", error)
    return NextResponse.json(
      { error: "Failed to fetch products" },
      { status: 500 }
    )
  }
}
