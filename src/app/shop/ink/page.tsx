import { Metadata } from "next"
import Link from "next/link"
import { ShoppingCart, ArrowLeft, Truck, RotateCcw, Shield } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { formatPrice } from "@/lib/utils"

export const metadata: Metadata = {
  title: "Ink Cartridges",
  description: "Shop genuine ink cartridges for Canon, Epson, HP and more. NZ-wide delivery.",
}

const products = [
  { id: "7", name: "Canon PG-645XL Black Ink", slug: "canon-pg645xl", price: 34.99, compareAtPrice: 44.99, brand: "Canon", stock: 25 },
  { id: "8", name: "Canon CL-646XL Colour Ink", slug: "canon-cl646xl", price: 39.99, compareAtPrice: 49.99, brand: "Canon", stock: 22 },
  { id: "9", name: "Epson 212XL Black Ink", slug: "epson-212xl-black", price: 29.99, compareAtPrice: 39.99, brand: "Epson", stock: 30 },
  { id: "10", name: "Epson 212XL Multipack", slug: "epson-212xl-multi", price: 89.99, compareAtPrice: 119.99, brand: "Epson", stock: 15 },
  { id: "17", name: "HP 67XL Black Ink", slug: "hp-67xl-black", price: 44.99, compareAtPrice: 54.99, brand: "HP", stock: 20 },
  { id: "18", name: "HP 67XL Tri-colour Ink", slug: "hp-67xl-colour", price: 49.99, compareAtPrice: 59.99, brand: "HP", stock: 18 },
  { id: "19", name: "Brother LC-3317BK Black", slug: "brother-lc3317bk", price: 24.99, compareAtPrice: 34.99, brand: "Brother", stock: 28 },
  { id: "20", name: "Brother LC-3317 Multipack", slug: "brother-lc3317mp", price: 69.99, compareAtPrice: 89.99, brand: "Brother", stock: 12 },
  { id: "21", name: "Canon PG-510 Black Ink", slug: "canon-pg510", price: 29.99, compareAtPrice: 39.99, brand: "Canon", stock: 16 },
  { id: "22", name: "Epson 502 EcoTank Black", slug: "epson-502-black", price: 19.99, compareAtPrice: 29.99, brand: "Epson", stock: 35 },
  { id: "23", name: "Epson 502 EcoTank Multipack", slug: "epson-502-multi", price: 59.99, compareAtPrice: 79.99, brand: "Epson", stock: 20 },
  { id: "24", name: "HP 804XL Black Ink", slug: "hp-804xl-black", price: 39.99, compareAtPrice: 49.99, brand: "HP", stock: 14 },
]

const brands = ["Canon", "Epson", "HP", "Brother"]

export default function InkPage() {
  return (
    <div className="min-h-screen bg-secondary/30">
      {/* Header */}
      <section className="py-12 bg-white border-b">
        <div className="container mx-auto px-4">
          <Link 
            href="/shop" 
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary-600 mb-6 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Shop
          </Link>
          
          <div className="flex flex-col lg:flex-row justify-between gap-6">
            <div>
              <Badge className="mb-3">Ink Cartridges</Badge>
              <h1 className="text-3xl md:text-4xl font-bold mb-2">
                <span className="text-gradient">Ink</span> Cartridges
              </h1>
              <p className="text-muted-foreground">
                Genuine and compatible ink cartridges for inkjet printers
              </p>
            </div>
          </div>
          
          {/* Benefits */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8">
            <div className="flex items-center gap-3 p-4 rounded-xl bg-primary-50">
              <Truck className="w-6 h-6 text-primary-600" />
              <div>
                <p className="font-semibold text-sm">Free Shipping</p>
                <p className="text-xs text-muted-foreground">On orders over $100</p>
              </div>
            </div>
            <div className="flex items-center gap-3 p-4 rounded-xl bg-primary-50">
              <RotateCcw className="w-6 h-6 text-primary-600" />
              <div>
                <p className="font-semibold text-sm">30-Day Returns</p>
                <p className="text-xs text-muted-foreground">Hassle-free returns</p>
              </div>
            </div>
            <div className="flex items-center gap-3 p-4 rounded-xl bg-primary-50">
              <Shield className="w-6 h-6 text-primary-600" />
              <div>
                <p className="font-semibold text-sm">Genuine Products</p>
                <p className="text-xs text-muted-foreground">100% authentic guaranteed</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar */}
          <aside className="lg:w-64 space-y-6">
            <Card>
              <CardContent className="p-4">
                <h3 className="font-semibold mb-4">Filter by Brand</h3>
                <div className="space-y-2">
                  {brands.map((brand) => (
                    <label key={brand} className="flex items-center gap-2 cursor-pointer">
                      <input type="checkbox" className="rounded border-border" />
                      <span className="text-sm">{brand}</span>
                    </label>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-4">
                <h3 className="font-semibold mb-4">Ink Type</h3>
                <div className="space-y-2">
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input type="checkbox" className="rounded border-border" />
                    <span className="text-sm">Black</span>
                  </label>
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input type="checkbox" className="rounded border-border" />
                    <span className="text-sm">Colour</span>
                  </label>
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input type="checkbox" className="rounded border-border" />
                    <span className="text-sm">Multipack</span>
                  </label>
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input type="checkbox" className="rounded border-border" />
                    <span className="text-sm">EcoTank/Refill</span>
                  </label>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-4">
                <h3 className="font-semibold mb-4">Price Range</h3>
                <div className="space-y-2">
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input type="radio" name="price" className="border-border" />
                    <span className="text-sm">Under $30</span>
                  </label>
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input type="radio" name="price" className="border-border" />
                    <span className="text-sm">$30 - $50</span>
                  </label>
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input type="radio" name="price" className="border-border" />
                    <span className="text-sm">$50 - $80</span>
                  </label>
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input type="radio" name="price" className="border-border" />
                    <span className="text-sm">Over $80</span>
                  </label>
                </div>
              </CardContent>
            </Card>
          </aside>

          {/* Products Grid */}
          <div className="flex-1">
            <div className="flex justify-between items-center mb-6">
              <p className="text-sm text-muted-foreground">
                Showing <strong>{products.length}</strong> ink cartridges
              </p>
              <select className="text-sm border rounded-lg px-3 py-2">
                <option>Sort by: Featured</option>
                <option>Price: Low to High</option>
                <option>Price: High to Low</option>
                <option>Brand: A-Z</option>
              </select>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
              {products.map((product) => (
                <Link key={product.id} href={`/shop/${product.slug}`}>
                  <Card className="group h-full overflow-hidden hover:border-primary-300">
                    <div className="aspect-square bg-gradient-to-br from-secondary to-accent-50 relative">
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="w-24 h-24 rounded-xl bg-white shadow-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                          <span className="text-3xl font-bold text-gradient">{product.brand[0]}</span>
                        </div>
                      </div>
                      {product.compareAtPrice && (
                        <Badge variant="destructive" className="absolute top-2 left-2 text-xs">
                          -{Math.round((1 - product.price / product.compareAtPrice) * 100)}%
                        </Badge>
                      )}
                      {product.stock < 15 && (
                        <Badge variant="warning" className="absolute top-2 right-2 text-xs">
                          Low Stock
                        </Badge>
                      )}
                    </div>
                    <CardContent className="p-4">
                      <p className="text-xs text-muted-foreground mb-1">{product.brand}</p>
                      <h3 className="font-medium text-sm mb-2 group-hover:text-primary-600 transition-colors line-clamp-2">
                        {product.name}
                      </h3>
                      <div className="flex items-center gap-2">
                        <span className="font-bold text-primary-600">{formatPrice(product.price)}</span>
                        {product.compareAtPrice && (
                          <span className="text-xs text-muted-foreground line-through">
                            {formatPrice(product.compareAtPrice)}
                          </span>
                        )}
                      </div>
                      <Button size="sm" className="w-full mt-3">
                        <ShoppingCart className="w-4 h-4 mr-2" />
                        Add to Cart
                      </Button>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
