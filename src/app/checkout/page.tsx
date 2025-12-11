"use client"

import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import Link from "next/link"
import Image from "next/image"
import { motion } from "framer-motion"
import { 
  CreditCard, 
  Truck, 
  ShieldCheck, 
  ChevronLeft,
  ShoppingBag,
  Loader2,
  Check
} from "lucide-react"
import { Header, Footer } from "@/components/layout"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { useCartStore } from "@/store"

export default function CheckoutPage() {
  const router = useRouter()
  const { items, getTotal, clearCart } = useCartStore()
  const [isLoading, setIsLoading] = useState(false)
  const [step, setStep] = useState<"details" | "payment" | "success">("details")

  const [formData, setFormData] = useState({
    email: "",
    firstName: "",
    lastName: "",
    phone: "",
    address: "",
    city: "",
    postcode: "",
    country: "New Zealand",
  })

  const subtotal = getTotal()
  const shipping = subtotal > 100 ? 0 : 9.95
  const tax = subtotal * 0.15
  const total = subtotal + shipping + tax

  // Redirect if cart is empty
  useEffect(() => {
    if (items.length === 0 && step !== "success") {
      router.push("/cart")
    }
  }, [items.length, router, step])

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmitDetails = (e: React.FormEvent) => {
    e.preventDefault()
    setStep("payment")
  }

  const handlePayment = async () => {
    setIsLoading(true)
    
    try {
      // Create payment intent
      const response = await fetch("/api/stripe/create-payment-intent", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          amount: total,
          currency: "nzd",
          metadata: {
            email: formData.email,
            customerName: `${formData.firstName} ${formData.lastName}`,
          },
        }),
      })

      const data = await response.json()

      if (data.error) {
        alert("Payment failed. Please try again.")
        setIsLoading(false)
        return
      }

      // In real implementation, use Stripe Elements here
      // For now, simulate success
      setTimeout(() => {
        setStep("success")
        clearCart()
        setIsLoading(false)
      }, 2000)
    } catch (error) {
      console.error("Payment error:", error)
      setIsLoading(false)
    }
  }

  if (step === "success") {
    return (
      <>
        <Header />
        <main className="min-h-screen bg-secondary/30 py-20">
          <div className="container max-w-lg">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="text-center"
            >
              <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-green-100 flex items-center justify-center">
                <Check className="w-10 h-10 text-green-600" />
              </div>
              <h1 className="text-3xl font-bold mb-4">Order Confirmed!</h1>
              <p className="text-muted-foreground mb-8">
                Thank you for your order. We&apos;ve sent a confirmation email to {formData.email}
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild size="lg" className="w-full sm:w-auto">
                  <Link href="/shop">Continue Shopping</Link>
                </Button>
                <Button variant="outline" asChild size="lg" className="w-full sm:w-auto">
                  <Link href="/track">Track Order</Link>
                </Button>
              </div>
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
      <main className="min-h-screen bg-secondary/30 py-6 sm:py-12">
        <div className="container px-4">
          {/* Back Button */}
          <Button variant="ghost" asChild className="mb-4 sm:mb-6 -ml-2">
            <Link href="/cart">
              <ChevronLeft className="w-4 h-4 mr-1 sm:mr-2" />
              <span className="hidden sm:inline">Back to Cart</span>
              <span className="sm:hidden">Back</span>
            </Link>
          </Button>

          <div className="grid lg:grid-cols-2 gap-6 lg:gap-8">
            {/* Checkout Form */}
            <div className="order-2 lg:order-1">
              <Card>
                <CardContent className="p-4 sm:p-6">
                  {/* Steps */}
                  <div className="flex items-center gap-2 sm:gap-4 mb-6 sm:mb-8">
                    <div className={`flex items-center gap-1 sm:gap-2 ${step === "details" ? "text-primary-600" : "text-green-600"}`}>
                      <div className={`w-7 h-7 sm:w-8 sm:h-8 rounded-full flex items-center justify-center text-sm ${step === "details" ? "bg-primary-100" : "bg-green-100"}`}>
                        {step === "details" ? "1" : <Check className="w-4 h-4" />}
                      </div>
                      <span className="font-medium text-sm sm:text-base">Details</span>
                    </div>
                    <div className="flex-1 h-px bg-secondary" />
                    <div className={`flex items-center gap-1 sm:gap-2 ${step === "payment" ? "text-primary-600" : "text-muted-foreground"}`}>
                      <div className={`w-7 h-7 sm:w-8 sm:h-8 rounded-full flex items-center justify-center text-sm ${step === "payment" ? "bg-primary-100" : "bg-secondary"}`}>
                        2
                      </div>
                      <span className="font-medium text-sm sm:text-base">Payment</span>
                    </div>
                  </div>

                  {step === "details" ? (
                    <form onSubmit={handleSubmitDetails}>
                      <h2 className="text-xl font-bold mb-6">Contact Information</h2>
                      
                      <div className="space-y-4">
                        <div>
                          <Label htmlFor="email">Email</Label>
                          <Input
                            id="email"
                            name="email"
                            type="email"
                            value={formData.email}
                            onChange={handleInputChange}
                            required
                          />
                        </div>

                        <div className="grid grid-cols-2 gap-4">
                          <div>
                            <Label htmlFor="firstName">First Name</Label>
                            <Input
                              id="firstName"
                              name="firstName"
                              value={formData.firstName}
                              onChange={handleInputChange}
                              required
                            />
                          </div>
                          <div>
                            <Label htmlFor="lastName">Last Name</Label>
                            <Input
                              id="lastName"
                              name="lastName"
                              value={formData.lastName}
                              onChange={handleInputChange}
                              required
                            />
                          </div>
                        </div>

                        <div>
                          <Label htmlFor="phone">Phone</Label>
                          <Input
                            id="phone"
                            name="phone"
                            type="tel"
                            value={formData.phone}
                            onChange={handleInputChange}
                            required
                          />
                        </div>
                      </div>

                      <h2 className="text-xl font-bold mt-8 mb-6">Shipping Address</h2>

                      <div className="space-y-4">
                        <div>
                          <Label htmlFor="address">Street Address</Label>
                          <Input
                            id="address"
                            name="address"
                            value={formData.address}
                            onChange={handleInputChange}
                            required
                          />
                        </div>

                        <div className="grid grid-cols-2 gap-4">
                          <div>
                            <Label htmlFor="city">City</Label>
                            <Input
                              id="city"
                              name="city"
                              value={formData.city}
                              onChange={handleInputChange}
                              required
                            />
                          </div>
                          <div>
                            <Label htmlFor="postcode">Postcode</Label>
                            <Input
                              id="postcode"
                              name="postcode"
                              value={formData.postcode}
                              onChange={handleInputChange}
                              required
                            />
                          </div>
                        </div>
                      </div>

                      <Button type="submit" className="w-full mt-8" size="lg">
                        Continue to Payment
                      </Button>
                    </form>
                  ) : (
                    <div>
                      <h2 className="text-xl font-bold mb-6">Payment</h2>
                      
                      <div className="p-4 rounded-xl border mb-6">
                        <div className="flex items-center gap-3 mb-4">
                          <CreditCard className="w-5 h-5 text-primary-600" />
                          <span className="font-medium">Credit / Debit Card</span>
                        </div>
                        
                        {/* Stripe Elements would go here */}
                        <div className="space-y-4">
                          <div>
                            <Label>Card Number</Label>
                            <Input placeholder="4242 4242 4242 4242" />
                          </div>
                          <div className="grid grid-cols-2 gap-4">
                            <div>
                              <Label>Expiry</Label>
                              <Input placeholder="MM/YY" />
                            </div>
                            <div>
                              <Label>CVC</Label>
                              <Input placeholder="123" />
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="flex items-center gap-2 text-sm text-muted-foreground mb-6">
                        <ShieldCheck className="w-4 h-4" />
                        <span>Your payment is secure and encrypted</span>
                      </div>

                      <div className="flex gap-4">
                        <Button 
                          variant="outline" 
                          onClick={() => setStep("details")}
                          disabled={isLoading}
                        >
                          Back
                        </Button>
                        <Button 
                          className="flex-1" 
                          size="lg"
                          onClick={handlePayment}
                          disabled={isLoading}
                        >
                          {isLoading ? (
                            <>
                              <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                              Processing...
                            </>
                          ) : (
                            `Pay $${total.toFixed(2)}`
                          )}
                        </Button>
                      </div>
                    </div>
                  )}
                </CardContent>
              </Card>
            </div>

            {/* Order Summary - Mobile first, desktop on right */}
            <div className="order-1 lg:order-2">
              <Card className="lg:sticky lg:top-24">
                <CardContent className="p-4 sm:p-6">
                  <h2 className="text-lg sm:text-xl font-bold mb-4 sm:mb-6">Order Summary</h2>

                  <div className="space-y-3 sm:space-y-4 mb-4 sm:mb-6">
                    {items.map((item) => (
                      <div key={item.id} className="flex gap-3">
                        <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-lg bg-secondary flex items-center justify-center overflow-hidden shrink-0">
                          {item.image ? (
                            <Image
                              src={item.image}
                              alt={item.name}
                              width={64}
                              height={64}
                              className="object-contain"
                            />
                          ) : (
                            <ShoppingBag className="w-6 h-6 text-muted-foreground" />
                          )}
                        </div>
                        <div className="flex-1 min-w-0">
                          <h4 className="font-medium text-sm truncate">{item.name}</h4>
                          <p className="text-sm text-muted-foreground">Qty: {item.quantity}</p>
                        </div>
                        <div className="font-medium">
                          ${(item.price * item.quantity).toFixed(2)}
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="border-t pt-4 space-y-3">
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

                  <div className="mt-6 p-4 rounded-xl bg-secondary/50 flex items-center gap-3">
                    <Truck className="w-5 h-5 text-primary-600 shrink-0" />
                    <div>
                      <p className="font-medium text-sm">Estimated Delivery</p>
                      <p className="text-sm text-muted-foreground">2-4 business days</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
