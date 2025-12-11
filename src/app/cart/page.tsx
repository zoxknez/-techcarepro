"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import Link from "next/link"
import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"
import { 
  ShoppingCart, 
  Trash2, 
  Plus, 
  Minus, 
  ArrowRight, 
  ShoppingBag,
  ChevronLeft 
} from "lucide-react"
import { Header, Footer } from "@/components/layout"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { useCartStore } from "@/store"

export default function CartPage() {
  const router = useRouter()
  const { items, removeItem, updateQuantity, getTotal, clearCart } = useCartStore()

  const subtotal = getTotal()
  const shipping = subtotal > 100 ? 0 : 9.95
  const tax = subtotal * 0.15 // GST 15%
  const total = subtotal + shipping + tax

  if (items.length === 0) {
    return (
      <>
        <Header />
        <main className="min-h-screen bg-secondary/30 py-20">
          <div className="container max-w-4xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center py-16"
            >
              <div className="w-24 h-24 mx-auto mb-6 rounded-full bg-secondary flex items-center justify-center">
                <ShoppingCart className="w-12 h-12 text-muted-foreground" />
              </div>
              <h1 className="text-3xl font-bold mb-4">Your Cart is Empty</h1>
              <p className="text-muted-foreground mb-8">
                Looks like you haven&apos;t added anything to your cart yet.
              </p>
              <Button asChild size="lg">
                <Link href="/shop">
                  <ShoppingBag className="w-5 h-5 mr-2" />
                  Browse Products
                </Link>
              </Button>
            </motion.div>
          </div>
        </main>
        <Footer />
      </>
    )
  }

  return (
    <>
      <Header />
      <main className="min-h-screen bg-secondary/30 py-6 sm:py-12 pb-32 lg:pb-12">
        <div className="container px-4">
          {/* Back Button */}
          <Button variant="ghost" asChild className="mb-4 sm:mb-6 -ml-2">
            <Link href="/shop">
              <ChevronLeft className="w-4 h-4 mr-1 sm:mr-2" />
              <span className="hidden sm:inline">Continue Shopping</span>
              <span className="sm:hidden">Back</span>
            </Link>
          </Button>

          <div className="grid lg:grid-cols-3 gap-6 lg:gap-8">
            {/* Cart Items */}
            <div className="lg:col-span-2">
              <Card>
                <CardContent className="p-4 sm:p-6">
                  <div className="flex items-center justify-between mb-4 sm:mb-6">
                    <h1 className="text-xl sm:text-2xl font-bold">Shopping Cart</h1>
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={clearCart}
                      className="text-red-600 hover:text-red-700 hover:bg-red-50"
                    >
                      Clear All
                    </Button>
                  </div>

                  <AnimatePresence>
                    <div className="space-y-4">
                      {items.map((item) => (
                        <motion.div
                          key={item.id}
                          layout
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, x: -100 }}
                          className="flex gap-4 p-4 rounded-xl bg-secondary/50"
                        >
                          <div className="w-20 h-20 rounded-lg bg-white flex items-center justify-center overflow-hidden shrink-0">
                            {item.image ? (
                              <Image
                                src={item.image}
                                alt={item.name}
                                width={80}
                                height={80}
                                className="object-contain"
                              />
                            ) : (
                              <ShoppingBag className="w-8 h-8 text-muted-foreground" />
                            )}
                          </div>
                          <div className="flex-1 min-w-0">
                            <h3 className="font-semibold truncate">{item.name}</h3>
                            <p className="text-sm text-muted-foreground">${item.price.toFixed(2)}</p>
                            
                            <div className="flex items-center gap-3 mt-3">
                              <div className="flex items-center gap-1 bg-white rounded-lg border">
                                <button
                                  onClick={() => updateQuantity(item.id, Math.max(1, item.quantity - 1))}
                                  className="w-8 h-8 flex items-center justify-center hover:bg-secondary rounded-l-lg transition-colors"
                                >
                                  <Minus className="w-4 h-4" />
                                </button>
                                <span className="w-8 text-center font-medium">{item.quantity}</span>
                                <button
                                  onClick={() => updateQuantity(item.id, item.quantity + 1)}
                                  className="w-8 h-8 flex items-center justify-center hover:bg-secondary rounded-r-lg transition-colors"
                                >
                                  <Plus className="w-4 h-4" />
                                </button>
                              </div>
                              <button
                                onClick={() => removeItem(item.id)}
                                className="text-red-600 hover:text-red-700 p-2 hover:bg-red-50 rounded-lg transition-colors"
                              >
                                <Trash2 className="w-4 h-4" />
                              </button>
                            </div>
                          </div>
                          <div className="text-right">
                            <p className="font-semibold">${(item.price * item.quantity).toFixed(2)}</p>
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </AnimatePresence>
                </CardContent>
              </Card>
            </div>

            {/* Order Summary - Desktop */}
            <div className="hidden lg:block lg:col-span-1">
              <Card className="sticky top-24">
                <CardContent className="p-6">
                  <h2 className="text-xl font-bold mb-6">Order Summary</h2>

                  <div className="space-y-3 mb-6">
                    <div className="flex justify-between text-muted-foreground">
                      <span>Subtotal</span>
                      <span>${subtotal.toFixed(2)}</span>
                    </div>
                    <div className="flex justify-between text-muted-foreground">
                      <span>Shipping</span>
                      <span>{shipping === 0 ? "Free" : `$${shipping.toFixed(2)}`}</span>
                    </div>
                    <div className="flex justify-between text-muted-foreground">
                      <span>GST (15%)</span>
                      <span>${tax.toFixed(2)}</span>
                    </div>
                    <div className="border-t pt-3">
                      <div className="flex justify-between font-bold text-lg">
                        <span>Total</span>
                        <span>${total.toFixed(2)}</span>
                      </div>
                    </div>
                  </div>

                  {shipping > 0 && (
                    <p className="text-sm text-muted-foreground mb-6 p-3 bg-secondary rounded-lg">
                      Add ${(100 - subtotal).toFixed(2)} more for free shipping!
                    </p>
                  )}

                  <Button 
                    className="w-full" 
                    size="lg"
                    onClick={() => router.push("/checkout")}
                  >
                    Proceed to Checkout
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Button>

                  <p className="text-xs text-muted-foreground text-center mt-4">
                    Secure checkout powered by Stripe
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>

        {/* Mobile Fixed Bottom Bar */}
        <div className="lg:hidden fixed bottom-0 left-0 right-0 bg-white border-t shadow-lg p-4 z-50">
          <div className="flex items-center justify-between mb-3">
            <div>
              <p className="text-sm text-muted-foreground">Total</p>
              <p className="text-xl font-bold">${total.toFixed(2)}</p>
            </div>
            <Button 
              size="lg"
              onClick={() => router.push("/checkout")}
              className="px-8"
            >
              Checkout
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </div>
          {shipping > 0 && (
            <p className="text-xs text-center text-muted-foreground">
              Add ${(100 - subtotal).toFixed(2)} more for free shipping
            </p>
          )}
        </div>
      </main>
      <Footer />
    </>
  )
}
