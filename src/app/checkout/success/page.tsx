"use client"

import Link from "next/link"
import { useSearchParams } from "next/navigation"
import { motion } from "framer-motion"
import { 
  CheckCircle2, 
  Package, 
  Mail, 
  ArrowRight,
  Printer,
  Download,
  Phone
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Suspense } from "react"

function OrderSuccessContent() {
  const searchParams = useSearchParams()
  const orderId = searchParams.get("order_id") || "ORD-" + Math.random().toString(36).substring(2, 10).toUpperCase()
  
  return (
    <div className="min-h-screen bg-gradient-to-br from-primary-50 via-white to-accent-50 py-12 md:py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <Card className="overflow-hidden">
              <div className="bg-gradient-to-r from-green-500 to-emerald-500 p-8 text-center text-white">
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
                >
                  <CheckCircle2 className="w-20 h-20 mx-auto mb-4" />
                </motion.div>
                <h1 className="text-3xl font-bold mb-2">Order Confirmed!</h1>
                <p className="text-green-100">Thank you for your purchase</p>
              </div>
              
              <CardContent className="p-6 md:p-8">
                <div className="text-center mb-8">
                  <p className="text-muted-foreground mb-2">Order Number</p>
                  <p className="text-2xl font-bold font-mono">{orderId}</p>
                </div>
                
                <div className="bg-gray-50 rounded-xl p-6 mb-8">
                  <h3 className="font-semibold mb-4 flex items-center gap-2">
                    <Mail className="w-5 h-5 text-primary-500" />
                    What happens next?
                  </h3>
                  <ul className="space-y-3 text-sm text-muted-foreground">
                    <li className="flex items-start gap-3">
                      <span className="w-6 h-6 rounded-full bg-primary-100 text-primary-600 flex items-center justify-center flex-shrink-0 text-xs font-bold">1</span>
                      <span>You&apos;ll receive an order confirmation email shortly</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="w-6 h-6 rounded-full bg-primary-100 text-primary-600 flex items-center justify-center flex-shrink-0 text-xs font-bold">2</span>
                      <span>We&apos;ll prepare your items for dispatch (usually within 24 hours)</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="w-6 h-6 rounded-full bg-primary-100 text-primary-600 flex items-center justify-center flex-shrink-0 text-xs font-bold">3</span>
                      <span>You&apos;ll receive tracking information once shipped</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="w-6 h-6 rounded-full bg-primary-100 text-primary-600 flex items-center justify-center flex-shrink-0 text-xs font-bold">4</span>
                      <span>Delivery typically takes 2-5 business days</span>
                    </li>
                  </ul>
                </div>
                
                <div className="grid grid-cols-2 gap-4 mb-8">
                  <Card className="bg-blue-50 border-blue-100">
                    <CardContent className="p-4 text-center">
                      <Package className="w-8 h-8 mx-auto mb-2 text-blue-500" />
                      <p className="text-sm font-medium">Free Shipping</p>
                      <p className="text-xs text-muted-foreground">On orders over $99</p>
                    </CardContent>
                  </Card>
                  <Card className="bg-purple-50 border-purple-100">
                    <CardContent className="p-4 text-center">
                      <Printer className="w-8 h-8 mx-auto mb-2 text-purple-500" />
                      <p className="text-sm font-medium">Genuine Parts</p>
                      <p className="text-xs text-muted-foreground">100% authentic</p>
                    </CardContent>
                  </Card>
                </div>
                
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button asChild className="flex-1">
                    <Link href="/shop">
                      Continue Shopping
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Link>
                  </Button>
                  <Button variant="outline" asChild className="flex-1">
                    <Link href="/portal">
                      <Download className="w-4 h-4 mr-2" />
                      View Orders
                    </Link>
                  </Button>
                </div>
                
                <div className="mt-8 pt-6 border-t text-center">
                  <p className="text-sm text-muted-foreground mb-2">Questions about your order?</p>
                  <Button variant="ghost" size="sm" asChild>
                    <Link href="/contact">
                      <Phone className="w-4 h-4 mr-2" />
                      Contact Support
                    </Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </div>
  )
}

export default function CheckoutSuccessPage() {
  return (
    <Suspense fallback={
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin w-8 h-8 border-4 border-primary-500 border-t-transparent rounded-full" />
      </div>
    }>
      <OrderSuccessContent />
    </Suspense>
  )
}
