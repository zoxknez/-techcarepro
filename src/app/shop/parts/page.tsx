import { Metadata } from "next"
import Link from "next/link"
import { ShoppingCart, ArrowLeft, Truck, RotateCcw, Shield, Wrench } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { formatPrice } from "@/lib/utils"

export const metadata: Metadata = {
  title: "Drums & Parts",
  description: "Shop genuine drums, fusers, and printer parts. NZ-wide delivery.",
}

const products = [
  { id: "11", name: "Brother DR-2425 Drum", slug: "brother-dr2425", price: 129.99, compareAtPrice: 159.99, brand: "Brother", stock: 8, type: "Drum" },
  { id: "12", name: "HP 32A Imaging Drum", slug: "hp-32a-drum", price: 149.99, compareAtPrice: 189.99, brand: "HP", stock: 5, type: "Drum" },
  { id: "25", name: "Brother DR-253CL Drum", slug: "brother-dr253cl", price: 199.99, compareAtPrice: 249.99, brand: "Brother", stock: 6, type: "Drum" },
  { id: "26", name: "Canon 049 Imaging Drum", slug: "canon-049-drum", price: 139.99, compareAtPrice: 179.99, brand: "Canon", stock: 7, type: "Drum" },
  { id: "27", name: "HP 126A Drum Unit", slug: "hp-126a-drum", price: 169.99, compareAtPrice: 209.99, brand: "HP", stock: 4, type: "Drum" },
  { id: "28", name: "Kyocera DK-1150 Drum", slug: "kyocera-dk1150", price: 179.99, compareAtPrice: 229.99, brand: "Kyocera", stock: 3, type: "Drum" },
  { id: "29", name: "HP LaserJet Fuser Kit", slug: "hp-fuser-kit", price: 299.99, compareAtPrice: 379.99, brand: "HP", stock: 4, type: "Fuser" },
  { id: "30", name: "Brother Fuser Unit", slug: "brother-fuser", price: 249.99, compareAtPrice: 319.99, brand: "Brother", stock: 3, type: "Fuser" },
  { id: "31", name: "HP Paper Feed Roller Kit", slug: "hp-feed-roller", price: 89.99, compareAtPrice: 119.99, brand: "HP", stock: 10, type: "Roller" },
  { id: "32", name: "Canon Pickup Roller Kit", slug: "canon-pickup-roller", price: 79.99, compareAtPrice: 99.99, brand: "Canon", stock: 8, type: "Roller" },
  { id: "33", name: "HP Transfer Belt", slug: "hp-transfer-belt", price: 349.99, compareAtPrice: 429.99, brand: "HP", stock: 2, type: "Belt" },
  { id: "34", name: "Brother Waste Toner Box", slug: "brother-waste-toner", price: 39.99, compareAtPrice: 49.99, brand: "Brother", stock: 15, type: "Waste Box" },
]

const brands = ["HP", "Brother", "Canon", "Kyocera"]
const partTypes = ["Drum", "Fuser", "Roller", "Belt", "Waste Box"]

export default function PartsPage() {
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
              <Badge className="mb-3">Drums & Parts</Badge>
              <h1 className="text-3xl md:text-4xl font-bold mb-2">
                <span className="text-gradient">Drums</span> & Parts
              </h1>
              <p className="text-muted-foreground">
                Genuine drums, fusers, rollers and replacement parts
              </p>
            </div>
          </div>
          
          {/* Benefits */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mt-8">
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
                <p className="font-semibold text-sm">Genuine Parts</p>
                <p className="text-xs text-muted-foreground">OEM quality guaranteed</p>
              </div>
            </div>
            <div className="flex items-center gap-3 p-4 rounded-xl bg-primary-50">
              <Wrench className="w-6 h-6 text-primary-600" />
              <div>
                <p className="font-semibold text-sm">Expert Support</p>
                <p className="text-xs text-muted-foreground">Installation help</p>
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
                <h3 className="font-semibold mb-4">Part Type</h3>
                <div className="space-y-2">
                  {partTypes.map((type) => (
                    <label key={type} className="flex items-center gap-2 cursor-pointer">
                      <input type="checkbox" className="rounded border-border" />
                      <span className="text-sm">{type}</span>
                    </label>
                  ))}
                </div>
              </CardContent>
            </Card>

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
                <h3 className="font-semibold mb-4">Price Range</h3>
                <div className="space-y-2">
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input type="radio" name="price" className="border-border" />
                    <span className="text-sm">Under $100</span>
                  </label>
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input type="radio" name="price" className="border-border" />
                    <span className="text-sm">$100 - $200</span>
                  </label>
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input type="radio" name="price" className="border-border" />
                    <span className="text-sm">$200 - $300</span>
                  </label>
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input type="radio" name="price" className="border-border" />
                    <span className="text-sm">Over $300</span>
                  </label>
                </div>
              </CardContent>
            </Card>

            {/* Help Card */}
            <Card className="bg-gradient-to-br from-primary-50 to-accent-50">
              <CardContent className="p-4">
                <Wrench className="w-8 h-8 text-primary-600 mb-3" />
                <h3 className="font-semibold mb-2">Need Help?</h3>
                <p className="text-sm text-muted-foreground mb-3">
                  Not sure which part you need? Our experts can help identify the right replacement.
                </p>
                <Button size="sm" variant="secondary" asChild className="w-full">
                  <Link href="/contact">Contact Us</Link>
                </Button>
              </CardContent>
            </Card>
          </aside>

          {/* Products Grid */}
          <div className="flex-1">
            <div className="flex justify-between items-center mb-6">
              <p className="text-sm text-muted-foreground">
                Showing <strong>{products.length}</strong> drums & parts
              </p>
              <select className="text-sm border rounded-lg px-3 py-2">
                <option>Sort by: Featured</option>
                <option>Price: Low to High</option>
                <option>Price: High to Low</option>
                <option>Part Type</option>
              </select>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
              {products.map((product) => (
                <Link key={product.id} href={`/shop/${product.slug}`}>
                  <Card className="group h-full overflow-hidden hover:border-primary-300">
                    <div className="aspect-square bg-gradient-to-br from-secondary to-orange-50 relative">
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="w-24 h-24 rounded-xl bg-white shadow-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                          <span className="text-3xl font-bold text-gradient">{product.brand[0]}</span>
                        </div>
                      </div>
                      <Badge variant="secondary" className="absolute top-2 left-2 text-xs">
                        {product.type}
                      </Badge>
                      {product.compareAtPrice && (
                        <Badge variant="destructive" className="absolute top-2 right-2 text-xs">
                          -{Math.round((1 - product.price / product.compareAtPrice) * 100)}%
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
                      {product.stock < 5 && (
                        <p className="text-xs text-orange-600 mt-2">Only {product.stock} left</p>
                      )}
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
