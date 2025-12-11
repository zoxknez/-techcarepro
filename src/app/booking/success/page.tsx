"use client"

import Link from "next/link"
import { useSearchParams } from "next/navigation"
import { motion } from "framer-motion"
import { 
  CheckCircle2, 
  Calendar, 
  Mail, 
  ArrowRight,
  Clock,
  MapPin,
  Phone,
  FileText,
  Copy,
  Check
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Suspense, useState } from "react"
import { BRAND } from "@/lib/constants"

function BookingSuccessContent() {
  const searchParams = useSearchParams()
  const bookingCode = searchParams.get("code") || "REP-" + Math.random().toString(36).substring(2, 8).toUpperCase()
  const [copied, setCopied] = useState(false)
  
  const handleCopy = () => {
    navigator.clipboard.writeText(bookingCode)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }
  
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
              <div className="bg-gradient-to-r from-primary-500 to-accent-500 p-8 text-center text-white">
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
                >
                  <CheckCircle2 className="w-20 h-20 mx-auto mb-4" />
                </motion.div>
                <h1 className="text-3xl font-bold mb-2">Booking Confirmed!</h1>
                <p className="text-primary-100">We&apos;ll be in touch shortly</p>
              </div>
              
              <CardContent className="p-6 md:p-8">
                <div className="text-center mb-8">
                  <p className="text-muted-foreground mb-2">Your Booking Reference</p>
                  <div className="flex items-center justify-center gap-2">
                    <p className="text-3xl font-bold font-mono">{bookingCode}</p>
                    <Button 
                      variant="ghost" 
                      size="icon" 
                      onClick={handleCopy}
                      className="text-muted-foreground hover:text-foreground"
                    >
                      {copied ? <Check className="w-5 h-5 text-green-500" /> : <Copy className="w-5 h-5" />}
                    </Button>
                  </div>
                  <p className="text-sm text-muted-foreground mt-2">Save this code to track your repair</p>
                </div>
                
                <div className="bg-gray-50 rounded-xl p-6 mb-8">
                  <h3 className="font-semibold mb-4 flex items-center gap-2">
                    <Mail className="w-5 h-5 text-primary-500" />
                    What happens next?
                  </h3>
                  <ul className="space-y-3 text-sm text-muted-foreground">
                    <li className="flex items-start gap-3">
                      <span className="w-6 h-6 rounded-full bg-primary-100 text-primary-600 flex items-center justify-center flex-shrink-0 text-xs font-bold">1</span>
                      <span>You&apos;ll receive a confirmation email with your booking details</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="w-6 h-6 rounded-full bg-primary-100 text-primary-600 flex items-center justify-center flex-shrink-0 text-xs font-bold">2</span>
                      <span>Our team will review your request and may contact you for additional info</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="w-6 h-6 rounded-full bg-primary-100 text-primary-600 flex items-center justify-center flex-shrink-0 text-xs font-bold">3</span>
                      <span>Bring your device to our workshop or arrange a pickup</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="w-6 h-6 rounded-full bg-primary-100 text-primary-600 flex items-center justify-center flex-shrink-0 text-xs font-bold">4</span>
                      <span>Track your repair status online using your booking code</span>
                    </li>
                  </ul>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                  <Card className="bg-blue-50 border-blue-100">
                    <CardContent className="p-4">
                      <div className="flex items-start gap-3">
                        <MapPin className="w-5 h-5 text-blue-500 mt-0.5" />
                        <div>
                          <p className="font-medium text-sm">Drop-off Location</p>
                          <p className="text-xs text-muted-foreground">{BRAND.address.primary.street}</p>
                          <p className="text-xs text-muted-foreground">{BRAND.address.primary.suburb}, {BRAND.address.primary.city}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                  <Card className="bg-green-50 border-green-100">
                    <CardContent className="p-4">
                      <div className="flex items-start gap-3">
                        <Clock className="w-5 h-5 text-green-500 mt-0.5" />
                        <div>
                          <p className="font-medium text-sm">Opening Hours</p>
                          <p className="text-xs text-muted-foreground">Mon-Fri: {BRAND.hours.weekday}</p>
                          <p className="text-xs text-muted-foreground">Weekend: {BRAND.hours.weekend}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
                
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button asChild className="flex-1">
                    <Link href={`/track?code=${bookingCode}`}>
                      <FileText className="w-4 h-4 mr-2" />
                      Track Repair Status
                    </Link>
                  </Button>
                  <Button variant="outline" asChild className="flex-1">
                    <Link href="/">
                      Back to Home
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Link>
                  </Button>
                </div>
                
                <div className="mt-8 pt-6 border-t text-center">
                  <p className="text-sm text-muted-foreground mb-2">Need to change your booking?</p>
                  <div className="flex items-center justify-center gap-4">
                    <Button variant="ghost" size="sm" asChild>
                      <a href={`tel:${BRAND.phone.replace(/\s/g, "")}`}>
                        <Phone className="w-4 h-4 mr-2" />
                        {BRAND.phone}
                      </a>
                    </Button>
                    <Button variant="ghost" size="sm" asChild>
                      <a href={`mailto:${BRAND.email}`}>
                        <Mail className="w-4 h-4 mr-2" />
                        Email Us
                      </a>
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
          
          {/* Additional Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="mt-8"
          >
            <Card>
              <CardContent className="p-6">
                <h3 className="font-semibold mb-4 flex items-center gap-2">
                  <Calendar className="w-5 h-5 text-primary-500" />
                  Preparing Your Device
                </h3>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Back up any important data before bringing your device</li>
                  <li>• Remove any personal accessories (cases, screen protectors)</li>
                  <li>• Note down your passwords if relevant to the repair</li>
                  <li>• Bring your charger if it&apos;s a laptop or mobile device</li>
                  <li>• Have proof of purchase ready if it&apos;s a warranty repair</li>
                </ul>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </div>
  )
}

export default function BookingSuccessPage() {
  return (
    <Suspense fallback={
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin w-8 h-8 border-4 border-primary-500 border-t-transparent rounded-full" />
      </div>
    }>
      <BookingSuccessContent />
    </Suspense>
  )
}
