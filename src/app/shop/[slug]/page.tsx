"use client"

import { useParams, notFound } from "next/navigation"
import Link from "next/link"
import { motion } from "framer-motion"
import { 
  ArrowLeft, 
  ShoppingCart, 
  Truck, 
  Shield, 
  RotateCcw, 
  Check,
  Minus,
  Plus,
  Package,
  Star
} from "lucide-react"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { formatPrice } from "@/lib/utils"
import { useCartStore } from "@/store"

const allProducts = [
  { id: "1", name: "HP 206A Black Toner", slug: "hp-206a-black", price: 89.99, compareAtPrice: 129.99, brand: "HP", category: "toner", stock: 15, sku: "HP-206A-BK", description: "Original HP 206A Black Toner Cartridge for HP Color LaserJet Pro M255, M282, M283 Series. Yields approximately 1,350 pages.", compatibility: ["HP Color LaserJet Pro M255", "HP Color LaserJet Pro MFP M282", "HP Color LaserJet Pro MFP M283"] },
  { id: "2", name: "HP 206A Cyan Toner", slug: "hp-206a-cyan", price: 99.99, compareAtPrice: 139.99, brand: "HP", category: "toner", stock: 8, sku: "HP-206A-CY", description: "Original HP 206A Cyan Toner Cartridge for HP Color LaserJet Pro M255, M282, M283 Series. Yields approximately 1,250 pages.", compatibility: ["HP Color LaserJet Pro M255", "HP Color LaserJet Pro MFP M282", "HP Color LaserJet Pro MFP M283"] },
  { id: "3", name: "HP 206A Magenta Toner", slug: "hp-206a-magenta", price: 99.99, compareAtPrice: 139.99, brand: "HP", category: "toner", stock: 12, sku: "HP-206A-MG", description: "Original HP 206A Magenta Toner Cartridge for HP Color LaserJet Pro M255, M282, M283 Series. Yields approximately 1,250 pages.", compatibility: ["HP Color LaserJet Pro M255", "HP Color LaserJet Pro MFP M282", "HP Color LaserJet Pro MFP M283"] },
  { id: "4", name: "HP 206A Yellow Toner", slug: "hp-206a-yellow", price: 99.99, compareAtPrice: 139.99, brand: "HP", category: "toner", stock: 10, sku: "HP-206A-YL", description: "Original HP 206A Yellow Toner Cartridge for HP Color LaserJet Pro M255, M282, M283 Series. Yields approximately 1,250 pages.", compatibility: ["HP Color LaserJet Pro M255", "HP Color LaserJet Pro MFP M282", "HP Color LaserJet Pro MFP M283"] },
  { id: "5", name: "Brother TN-2450 Toner", slug: "brother-tn2450", price: 79.99, compareAtPrice: 99.99, brand: "Brother", category: "toner", stock: 20, sku: "BR-TN2450", description: "Genuine Brother TN-2450 High Yield Black Toner Cartridge. Yields approximately 3,000 pages. Compatible with various Brother laser printers.", compatibility: ["Brother HL-L2350DW", "Brother HL-L2375DW", "Brother MFC-L2710DW", "Brother MFC-L2750DW"] },
  { id: "6", name: "Brother TN-253BK Toner", slug: "brother-tn253bk", price: 69.99, compareAtPrice: 89.99, brand: "Brother", category: "toner", stock: 18, sku: "BR-TN253BK", description: "Genuine Brother TN-253BK Black Toner Cartridge. Yields approximately 2,500 pages. Compatible with Brother colour laser printers.", compatibility: ["Brother HL-L3230CDW", "Brother HL-L3270CDW", "Brother MFC-L3745CDW", "Brother MFC-L3770CDW"] },
  { id: "7", name: "Canon PG-645XL Black Ink", slug: "canon-pg645xl", price: 34.99, compareAtPrice: 44.99, brand: "Canon", category: "ink", stock: 25, sku: "CN-PG645XL", description: "Genuine Canon PG-645XL High Yield Black Ink Cartridge. Yields approximately 400 pages. Perfect for everyday home printing.", compatibility: ["Canon PIXMA MG2560", "Canon PIXMA MG2960", "Canon PIXMA MG3060", "Canon PIXMA TS3160"] },
  { id: "8", name: "Canon CL-646XL Colour Ink", slug: "canon-cl646xl", price: 39.99, compareAtPrice: 49.99, brand: "Canon", category: "ink", stock: 22, sku: "CN-CL646XL", description: "Genuine Canon CL-646XL High Yield Colour Ink Cartridge. Tri-colour (Cyan, Magenta, Yellow). Yields approximately 300 colour pages.", compatibility: ["Canon PIXMA MG2560", "Canon PIXMA MG2960", "Canon PIXMA MG3060", "Canon PIXMA TS3160"] },
  { id: "9", name: "Epson 212XL Black Ink", slug: "epson-212xl-black", price: 29.99, compareAtPrice: 39.99, brand: "Epson", category: "ink", stock: 30, sku: "EP-212XLBK", description: "Genuine Epson 212XL High Capacity Black Ink Cartridge. Yields approximately 500 pages. Claria ink for vibrant prints.", compatibility: ["Epson Expression Home XP-4100", "Epson WorkForce WF-2830", "Epson WorkForce WF-2850"] },
  { id: "10", name: "Epson 212XL Multipack", slug: "epson-212xl-multi", price: 89.99, compareAtPrice: 119.99, brand: "Epson", category: "ink", stock: 15, sku: "EP-212XLMP", description: "Genuine Epson 212XL High Capacity 4-Colour Multipack (Black, Cyan, Magenta, Yellow). Best value for complete cartridge replacement.", compatibility: ["Epson Expression Home XP-4100", "Epson WorkForce WF-2830", "Epson WorkForce WF-2850"] },
  { id: "11", name: "Brother DR-2425 Drum", slug: "brother-dr2425", price: 129.99, compareAtPrice: 159.99, brand: "Brother", category: "drum", stock: 8, sku: "BR-DR2425", description: "Genuine Brother DR-2425 Drum Unit. Yields approximately 12,000 pages. Essential for maintaining print quality.", compatibility: ["Brother HL-L2350DW", "Brother HL-L2375DW", "Brother MFC-L2710DW", "Brother MFC-L2750DW"] },
  { id: "12", name: "HP 32A Imaging Drum", slug: "hp-32a-drum", price: 149.99, compareAtPrice: 189.99, brand: "HP", category: "drum", stock: 5, sku: "HP-CF232A", description: "Original HP 32A (CF232A) Imaging Drum Unit. Yields approximately 23,000 pages. For HP LaserJet Pro M203, M227 Series.", compatibility: ["HP LaserJet Pro M203", "HP LaserJet Pro MFP M227"] },
]

export default function ProductDetailPage() {
  const params = useParams()
  const slug = params.slug as string
  const [quantity, setQuantity] = useState(1)
  const addItem = useCartStore((state) => state.addItem)
  
  const product = allProducts.find(p => p.slug === slug)
  
  if (!product) {
    notFound()
  }

  const relatedProducts = allProducts
    .filter(p => p.category === product.category && p.slug !== product.slug)
    .slice(0, 4)

  const handleAddToCart = () => {
    addItem({
      id: product.id,
      name: product.name,
      slug: product.slug,
      brand: product.brand,
      price: product.price,
      image: `/products/${product.slug}.jpg`
    })
  }

  return (
    <div className="min-h-screen bg-secondary/30">
      <div className="container mx-auto px-4 py-8">
        {/* Breadcrumb */}
        <Link 
          href="/shop" 
          className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary-600 mb-8 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Shop
        </Link>

        {/* Product Detail */}
        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          {/* Product Image */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
          >
            <div className="aspect-square bg-white rounded-3xl shadow-lg overflow-hidden relative">
              <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-secondary to-primary-50">
                <div className="w-48 h-48 rounded-2xl bg-white shadow-xl flex items-center justify-center">
                  <span className="text-7xl font-bold text-gradient">{product.brand[0]}</span>
                </div>
              </div>
              {product.compareAtPrice && (
                <Badge variant="destructive" className="absolute top-4 left-4">
                  -{Math.round((1 - product.price / product.compareAtPrice) * 100)}% OFF
                </Badge>
              )}
              {product.stock < 10 && (
                <Badge variant="warning" className="absolute top-4 right-4">
                  Low Stock
                </Badge>
              )}
            </div>
          </motion.div>

          {/* Product Info */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="space-y-6"
          >
            <div>
              <p className="text-sm text-muted-foreground mb-2">{product.brand}</p>
              <h1 className="text-3xl md:text-4xl font-bold mb-4">{product.name}</h1>
              <div className="flex items-center gap-2 mb-4">
                <div className="flex">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star key={star} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <span className="text-sm text-muted-foreground">(24 reviews)</span>
              </div>
            </div>

            <div className="flex items-baseline gap-4">
              <span className="text-4xl font-bold text-primary-600">{formatPrice(product.price)}</span>
              {product.compareAtPrice && (
                <span className="text-xl text-muted-foreground line-through">
                  {formatPrice(product.compareAtPrice)}
                </span>
              )}
            </div>

            <p className="text-muted-foreground">{product.description}</p>

            <div className="flex items-center gap-2 text-sm">
              <Package className="w-4 h-4 text-primary-600" />
              <span>SKU: <strong>{product.sku}</strong></span>
              <span className="mx-2">|</span>
              <span className={product.stock > 10 ? "text-green-600" : "text-orange-600"}>
                {product.stock > 10 ? "In Stock" : `Only ${product.stock} left`}
              </span>
            </div>

            {/* Quantity & Add to Cart */}
            <div className="flex items-center gap-4">
              <div className="flex items-center border rounded-xl">
                <button 
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="p-3 hover:bg-secondary transition-colors rounded-l-xl"
                >
                  <Minus className="w-5 h-5" />
                </button>
                <span className="w-16 text-center font-semibold">{quantity}</span>
                <button 
                  onClick={() => setQuantity(Math.min(product.stock, quantity + 1))}
                  className="p-3 hover:bg-secondary transition-colors rounded-r-xl"
                >
                  <Plus className="w-5 h-5" />
                </button>
              </div>
              <Button size="lg" className="flex-1" onClick={handleAddToCart}>
                <ShoppingCart className="w-5 h-5 mr-2" />
                Add to Cart - {formatPrice(product.price * quantity)}
              </Button>
            </div>

            {/* Benefits */}
            <div className="grid grid-cols-3 gap-4 pt-6 border-t">
              <div className="text-center">
                <Truck className="w-6 h-6 mx-auto text-primary-600 mb-2" />
                <p className="text-sm font-medium">Free Shipping</p>
                <p className="text-xs text-muted-foreground">Over $100</p>
              </div>
              <div className="text-center">
                <RotateCcw className="w-6 h-6 mx-auto text-primary-600 mb-2" />
                <p className="text-sm font-medium">30-Day Returns</p>
                <p className="text-xs text-muted-foreground">Easy returns</p>
              </div>
              <div className="text-center">
                <Shield className="w-6 h-6 mx-auto text-primary-600 mb-2" />
                <p className="text-sm font-medium">Genuine</p>
                <p className="text-xs text-muted-foreground">100% authentic</p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Compatibility */}
        <Card className="mb-12">
          <CardContent className="p-6">
            <h3 className="text-xl font-semibold mb-4">Compatible Printers</h3>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-3">
              {product.compatibility.map((printer) => (
                <div key={printer} className="flex items-center gap-2 p-3 rounded-xl bg-secondary/50">
                  <Check className="w-4 h-4 text-primary-600" />
                  <span className="text-sm">{printer}</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Related Products */}
        {relatedProducts.length > 0 && (
          <section>
            <h2 className="text-2xl font-bold mb-6">Related Products</h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {relatedProducts.map((relProduct) => (
                <Link key={relProduct.id} href={`/shop/${relProduct.slug}`}>
                  <Card className="group h-full overflow-hidden hover:border-primary-300 transition-colors">
                    <div className="aspect-square bg-gradient-to-br from-secondary to-primary-50 relative">
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="w-20 h-20 rounded-xl bg-white shadow-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                          <span className="text-2xl font-bold text-gradient">{relProduct.brand[0]}</span>
                        </div>
                      </div>
                    </div>
                    <CardContent className="p-4">
                      <p className="text-xs text-muted-foreground mb-1">{relProduct.brand}</p>
                      <h3 className="font-medium text-sm mb-2 group-hover:text-primary-600 transition-colors line-clamp-2">
                        {relProduct.name}
                      </h3>
                      <div className="flex items-center gap-2">
                        <span className="font-bold text-primary-600">{formatPrice(relProduct.price)}</span>
                        {relProduct.compareAtPrice && (
                          <span className="text-xs text-muted-foreground line-through">
                            {formatPrice(relProduct.compareAtPrice)}
                          </span>
                        )}
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>
          </section>
        )}
      </div>
    </div>
  )
}
