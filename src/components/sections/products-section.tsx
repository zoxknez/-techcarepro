"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { ArrowRight, ShoppingCart, Truck, RotateCcw } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { FEATURED_PRODUCTS } from "@/lib/constants"
import { formatPrice } from "@/lib/utils"

export function ProductsSection() {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col lg:flex-row justify-between items-start lg:items-end gap-4 mb-12"
        >
          <div>
            <Badge className="mb-4">Shop Online</Badge>
            <h2 className="section-title mb-4">
              Genuine <span className="text-gradient">Consumables</span>
            </h2>
            <p className="section-subtitle">
              Toners, inks, and parts delivered to your door. Same-day dispatch available.
            </p>
          </div>
          <Button variant="outline" size="lg" asChild>
            <Link href="/shop">
              View All Products
              <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
          </Button>
        </motion.div>

        {/* Benefits Bar */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-12">
          <div className="flex items-center gap-3 p-4 rounded-xl bg-primary-50">
            <div className="w-10 h-10 rounded-lg bg-primary-100 flex items-center justify-center">
              <Truck className="w-5 h-5 text-primary-600" />
            </div>
            <div>
              <p className="font-semibold text-sm">Free Shipping</p>
              <p className="text-xs text-muted-foreground">On orders over $100</p>
            </div>
          </div>
          <div className="flex items-center gap-3 p-4 rounded-xl bg-primary-50">
            <div className="w-10 h-10 rounded-lg bg-primary-100 flex items-center justify-center">
              <RotateCcw className="w-5 h-5 text-primary-600" />
            </div>
            <div>
              <p className="font-semibold text-sm">Easy Returns</p>
              <p className="text-xs text-muted-foreground">30-day return policy</p>
            </div>
          </div>
          <div className="flex items-center gap-3 p-4 rounded-xl bg-primary-50">
            <div className="w-10 h-10 rounded-lg bg-primary-100 flex items-center justify-center">
              <ShoppingCart className="w-5 h-5 text-primary-600" />
            </div>
            <div>
              <p className="font-semibold text-sm">Subscribe & Save</p>
              <p className="text-xs text-muted-foreground">10% off auto-replenish</p>
            </div>
          </div>
        </div>

        {/* Products Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {FEATURED_PRODUCTS.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Link href={`/shop/${product.slug}`}>
                <Card className="group h-full overflow-hidden">
                  <div className="aspect-square bg-gradient-to-br from-secondary to-primary-50 relative overflow-hidden">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-32 h-32 rounded-2xl bg-white shadow-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                        <span className="text-4xl font-bold text-gradient">{product.brand[0]}</span>
                      </div>
                    </div>
                    {product.compareAtPrice && (
                      <Badge variant="destructive" className="absolute top-3 left-3">
                        Save {Math.round((1 - product.price / product.compareAtPrice) * 100)}%
                      </Badge>
                    )}
                  </div>
                  <CardContent className="p-4">
                    <p className="text-xs text-muted-foreground mb-1">{product.brand}</p>
                    <h3 className="font-semibold mb-2 group-hover:text-primary-600 transition-colors">
                      {product.name}
                    </h3>
                    <div className="flex items-center gap-2">
                      <span className="text-lg font-bold text-primary-600">
                        {formatPrice(product.price)}
                      </span>
                      {product.compareAtPrice && (
                        <span className="text-sm text-muted-foreground line-through">
                          {formatPrice(product.compareAtPrice)}
                        </span>
                      )}
                    </div>
                  </CardContent>
                </Card>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
