import { Metadata } from "next"
import Link from "next/link"
import { ShoppingCart, Search, Filter, Truck, RotateCcw, Shield } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { formatPrice } from "@/lib/utils"

export const metadata: Metadata = {
  title: "Shop",
  description: "Shop genuine printer consumables - toners, inks, drums and parts. NZ-wide delivery.",
}

const products = [
  { id: "1", name: "HP 206A Black Toner", slug: "hp-206a-black", price: 89.99, compareAtPrice: 129.99, brand: "HP", category: "toner", stock: 15 },
  { id: "2", name: "HP 206A Cyan Toner", slug: "hp-206a-cyan", price: 99.99, compareAtPrice: 139.99, brand: "HP", category: "toner", stock: 8 },
  { id: "3", name: "HP 206A Magenta Toner", slug: "hp-206a-magenta", price: 99.99, compareAtPrice: 139.99, brand: "HP", category: "toner", stock: 12 },
  { id: "4", name: "HP 206A Yellow Toner", slug: "hp-206a-yellow", price: 99.99, compareAtPrice: 139.99, brand: "HP", category: "toner", stock: 10 },
  { id: "5", name: "Brother TN-2450 Toner", slug: "brother-tn2450", price: 79.99, compareAtPrice: 99.99, brand: "Brother", category: "toner", stock: 20 },
  { id: "6", name: "Brother TN-253BK Toner", slug: "brother-tn253bk", price: 69.99, compareAtPrice: 89.99, brand: "Brother", category: "toner", stock: 18 },
  { id: "7", name: "Canon PG-645XL Black Ink", slug: "canon-pg645xl", price: 34.99, compareAtPrice: 44.99, brand: "Canon", category: "ink", stock: 25 },
  { id: "8", name: "Canon CL-646XL Colour Ink", slug: "canon-cl646xl", price: 39.99, compareAtPrice: 49.99, brand: "Canon", category: "ink", stock: 22 },
  { id: "9", name: "Epson 212XL Black Ink", slug: "epson-212xl-black", price: 29.99, compareAtPrice: 39.99, brand: "Epson", category: "ink", stock: 30 },
  { id: "10", name: "Epson 212XL Multipack", slug: "epson-212xl-multi", price: 89.99, compareAtPrice: 119.99, brand: "Epson", category: "ink", stock: 15 },
  { id: "11", name: "Brother DR-2425 Drum", slug: "brother-dr2425", price: 129.99, compareAtPrice: 159.99, brand: "Brother", category: "drum", stock: 8 },
  { id: "12", name: "HP 32A Imaging Drum", slug: "hp-32a-drum", price: 149.99, compareAtPrice: 189.99, brand: "HP", category: "drum", stock: 5 },
]

const categories = [
  { id: "all", name: "All Products", count: products.length },
  { id: "toner", name: "Toner Cartridges", count: products.filter(p => p.category === "toner").length },
  { id: "ink", name: "Ink Cartridges", count: products.filter(p => p.category === "ink").length },
  { id: "drum", name: "Drums & Parts", count: products.filter(p => p.category === "drum").length },
]

const brands = ["HP", "Brother", "Canon", "Epson", "Kyocera", "Lexmark"]

export default function ShopPage() {
  return (
    <div className="min-h-screen bg-secondary/30">
      {/* Hero */}
      <section className="py-12 bg-white border-b">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row justify-between gap-6">
            <div>
              <h1 className="text-3xl md:text-4xl font-bold mb-2">
                Shop <span className="text-gradient">Consumables</span>
              </h1>
              <p className="text-muted-foreground">
                Genuine toners, inks, and parts for all major brands
              </p>
            </div>
            <div className="flex gap-4">
              <div className="relative flex-1 lg:w-80">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                <Input placeholder="Search products..." className="pl-10" />
              </div>
              <Button variant="secondary">
                <Filter className="w-4 h-4 mr-2" />
                Filter
              </Button>
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
            {/* Categories */}
            <Card>
              <CardContent className="p-4">
                <h3 className="font-semibold mb-4">Categories</h3>
                <div className="space-y-2">
                  {categories.map((cat) => (
                    <button
                      key={cat.id}
                      className="w-full flex justify-between items-center px-3 py-2 rounded-lg hover:bg-secondary transition-colors text-left"
                    >
                      <span className="text-sm">{cat.name}</span>
                      <span className="text-xs text-muted-foreground bg-secondary px-2 py-0.5 rounded-full">
                        {cat.count}
                      </span>
                    </button>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Brands */}
            <Card>
              <CardContent className="p-4">
                <h3 className="font-semibold mb-4">Brands</h3>
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
          </aside>

          {/* Products Grid */}
          <div className="flex-1">
            <div className="flex justify-between items-center mb-6">
              <p className="text-sm text-muted-foreground">
                Showing <strong>{products.length}</strong> products
              </p>
              <select className="text-sm border rounded-lg px-3 py-2">
                <option>Sort by: Featured</option>
                <option>Price: Low to High</option>
                <option>Price: High to Low</option>
                <option>Newest</option>
              </select>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
              {products.map((product) => (
                <Link key={product.id} href={`/shop/${product.slug}`}>
                  <Card className="group h-full overflow-hidden hover:border-primary-300">
                    <div className="aspect-square bg-gradient-to-br from-secondary to-primary-50 relative">
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
                      {product.stock < 10 && (
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
