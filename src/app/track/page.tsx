"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Search, Package, Clock, CheckCircle2, Truck, Wrench, AlertCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { cn } from "@/lib/utils"

const statusSteps = [
  { status: "PENDING", label: "Received", icon: Package },
  { status: "CONFIRMED", label: "Confirmed", icon: CheckCircle2 },
  { status: "IN_PROGRESS", label: "Repairing", icon: Wrench },
  { status: "COMPLETED", label: "Ready", icon: Truck },
]

const statusColors: Record<string, string> = {
  PENDING: "bg-amber-100 text-amber-700",
  CONFIRMED: "bg-blue-100 text-blue-700",
  IN_PROGRESS: "bg-purple-100 text-purple-700",
  WAITING_PARTS: "bg-orange-100 text-orange-700",
  COMPLETED: "bg-green-100 text-green-700",
  CANCELLED: "bg-red-100 text-red-700",
}

interface TrackingResult {
  id: string
  trackingCode: string
  status: string
  service: string
  category: string
  deviceBrand: string
  deviceModel: string
  preferredDate: string
  serviceType: string
  quotedPrice: number | null
  finalPrice: number | null
  createdAt: string
  completedAt: string | null
}

export default function TrackPage() {
  const [code, setCode] = useState("")
  const [loading, setLoading] = useState(false)
  const [result, setResult] = useState<TrackingResult | null>(null)
  const [error, setError] = useState("")

  const handleTrack = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!code.trim()) return

    setLoading(true)
    setError("")
    setResult(null)

    try {
      const res = await fetch(`/api/bookings/track/${code}`)
      if (!res.ok) {
        if (res.status === 404) {
          setError("No repair found with this tracking code. Please check and try again.")
        } else {
          setError("Something went wrong. Please try again later.")
        }
        return
      }
      const data = await res.json()
      setResult(data)
    } catch {
      setError("Failed to fetch tracking info. Please try again.")
    } finally {
      setLoading(false)
    }
  }

  const currentStepIndex = result 
    ? statusSteps.findIndex(s => s.status === result.status)
    : -1

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary-50 via-white to-accent-50">
      <div className="container mx-auto px-4 py-20">
        <div className="max-w-2xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <Badge className="mb-4">Track Your Repair</Badge>
            <h1 className="text-3xl md:text-4xl font-bold mb-4">
              Repair <span className="text-gradient">Status</span>
            </h1>
            <p className="text-muted-foreground">
              Enter your tracking code to see the current status of your repair
            </p>
          </div>

          {/* Search Form */}
          <Card className="mb-8">
            <CardContent className="p-6">
              <form onSubmit={handleTrack} className="flex gap-3">
                <div className="relative flex-1">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                  <Input
                    placeholder="Enter tracking code"
                    value={code}
                    onChange={(e) => setCode(e.target.value)}
                    className="pl-10"
                  />
                </div>
                <Button type="submit" disabled={loading}>
                  {loading ? "Searching..." : "Track"}
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Error */}
          {error && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
            >
              <Card className="border-red-200 bg-red-50 mb-8">
                <CardContent className="p-6 flex items-center gap-3">
                  <AlertCircle className="w-5 h-5 text-red-600" />
                  <p className="text-red-700">{error}</p>
                </CardContent>
              </Card>
            </motion.div>
          )}

          {/* Result */}
          {result && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="space-y-6"
            >
              {/* Status Progress */}
              <Card>
                <CardContent className="p-6">
                  <div className="flex justify-between items-center mb-8">
                    <h3 className="font-semibold">Repair Progress</h3>
                    <Badge className={statusColors[result.status] || "bg-gray-100"}>
                      {result.status.replace("_", " ")}
                    </Badge>
                  </div>

                  <div className="relative">
                    <div className="absolute top-5 left-0 right-0 h-0.5 bg-border" />
                    <div 
                      className="absolute top-5 left-0 h-0.5 bg-primary-500 transition-all duration-500"
                      style={{ width: `${Math.max(0, (currentStepIndex / (statusSteps.length - 1)) * 100)}%` }}
                    />
                    
                    <div className="flex justify-between">
                      {statusSteps.map((step, index) => (
                        <div key={step.status} className="relative z-10 flex flex-col items-center">
                          <div className={cn(
                            "w-10 h-10 rounded-full flex items-center justify-center transition-all",
                            index <= currentStepIndex
                              ? "bg-primary-500 text-white"
                              : "bg-white border-2 border-border text-muted-foreground"
                          )}>
                            <step.icon className="w-5 h-5" />
                          </div>
                          <span className={cn(
                            "mt-2 text-xs font-medium",
                            index <= currentStepIndex ? "text-primary-600" : "text-muted-foreground"
                          )}>
                            {step.label}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Details */}
              <Card>
                <CardContent className="p-6 space-y-4">
                  <h3 className="font-semibold mb-4">Repair Details</h3>
                  
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div className="p-4 rounded-xl bg-secondary/50">
                      <p className="text-xs text-muted-foreground mb-1">Tracking Code</p>
                      <p className="font-mono font-semibold">{result.trackingCode}</p>
                    </div>
                    <div className="p-4 rounded-xl bg-secondary/50">
                      <p className="text-xs text-muted-foreground mb-1">Service</p>
                      <p className="font-semibold">{result.service}</p>
                    </div>
                    <div className="p-4 rounded-xl bg-secondary/50">
                      <p className="text-xs text-muted-foreground mb-1">Device</p>
                      <p className="font-semibold">{result.deviceBrand} {result.deviceModel}</p>
                    </div>
                    <div className="p-4 rounded-xl bg-secondary/50">
                      <p className="text-xs text-muted-foreground mb-1">Service Type</p>
                      <p className="font-semibold capitalize">{result.serviceType.toLowerCase()}</p>
                    </div>
                  </div>

                  {(result.quotedPrice || result.finalPrice) && (
                    <div className="p-4 rounded-xl bg-primary-50 border border-primary-200">
                      <div className="flex justify-between items-center">
                        <span className="font-medium">
                          {result.finalPrice ? "Final Price" : "Quoted Price"}
                        </span>
                        <span className="text-2xl font-bold text-primary-600">
                          ${(result.finalPrice || result.quotedPrice)?.toFixed(2)}
                        </span>
                      </div>
                    </div>
                  )}

                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Clock className="w-4 h-4" />
                    <span>
                      Submitted on {new Date(result.createdAt).toLocaleDateString("en-NZ", {
                        dateStyle: "long"
                      })}
                    </span>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          )}

          {/* Help */}
          <div className="text-center mt-12 text-sm text-muted-foreground">
            <p>
              Can&apos;t find your tracking code? Check your confirmation email or{" "}
              <a href="/contact" className="text-primary-600 hover:underline">
                contact us
              </a>{" "}
              for assistance.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
