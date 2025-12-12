"use client"

import { useState } from "react"
import Link from "next/link"
import { motion, AnimatePresence } from "framer-motion"
import { 
  ArrowLeft, ArrowRight, Upload, Calendar, MapPin, 
  Printer, Laptop, Copy, Building, Smartphone, Zap,
  CheckCircle2, Clock, Camera
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { SERVICE_CATEGORIES, BRAND } from "@/lib/constants"
import { cn } from "@/lib/utils"

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Printer, Laptop, Copy, Building, Smartphone, Zap,
}

const steps = [
  { id: 1, title: "Service", icon: Printer },
  { id: 2, title: "Details", icon: Camera },
  { id: 3, title: "Schedule", icon: Calendar },
  { id: 4, title: "Confirm", icon: CheckCircle2 },
]

const timeSlots = [
  "9:00 AM", "10:00 AM", "11:00 AM", "12:00 PM",
  "1:00 PM", "2:00 PM", "3:00 PM", "4:00 PM"
]

export default function BookingPage() {
  const [currentStep, setCurrentStep] = useState(1)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [trackingCode, setTrackingCode] = useState<string | null>(null)
  const [formData, setFormData] = useState({
    service: "",
    deviceType: "",
    brand: "",
    model: "",
    issue: "",
    images: [] as string[],
    serviceType: "workshop" as "workshop" | "onsite",
    date: "",
    time: "",
    name: "",
    email: "",
    phone: "",
    address: "",
  })

  const selectedCategory = SERVICE_CATEGORIES.find(c => c.id === formData.service)

  const handleNext = () => {
    if (currentStep < 4) setCurrentStep(currentStep + 1)
  }

  const handleBack = () => {
    if (currentStep > 1) setCurrentStep(currentStep - 1)
  }

  const handleSubmit = async () => {
    setIsSubmitting(true)
    try {
      const response = await fetch('/api/bookings', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          service: formData.service,
          deviceBrand: formData.brand,
          deviceModel: formData.model,
          issueDescription: formData.issue,
          serviceType: formData.serviceType.toUpperCase(),
          preferredDate: formData.date,
          preferredTime: formData.time,
          customerName: formData.name,
          customerEmail: formData.email,
          customerPhone: formData.phone,
          customerAddress: formData.address,
        }),
      })
      const data = await response.json()
      if (data.trackingCode) {
        setTrackingCode(data.trackingCode)
        setCurrentStep(5) // Success step
      }
    } catch (error) {
      console.error('Booking error:', error)
      alert('Something went wrong. Please try again.')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary-50 via-white to-accent-50">
      <div className="container mx-auto px-4 py-8 sm:py-12">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-8 sm:mb-12">
            <Badge className="mb-3 sm:mb-4">Online Booking</Badge>
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4">
              Book Your <span className="text-gradient">Repair</span>
            </h1>
            <p className="text-sm sm:text-base text-muted-foreground">
              Schedule your device repair in just a few steps
            </p>
          </div>

          {/* Progress Steps */}
          <div className="flex justify-between mb-8 sm:mb-12 relative px-2">
            <div className="absolute top-4 sm:top-5 left-0 right-0 h-0.5 bg-border" />
            <div 
              className="absolute top-4 sm:top-5 left-0 h-0.5 bg-primary-500 transition-all duration-500"
              style={{ width: `${((currentStep - 1) / 3) * 100}%` }}
            />
            {steps.map((step) => (
              <div key={step.id} className="relative z-10 flex flex-col items-center">
                <div className={cn(
                  "w-8 h-8 sm:w-10 sm:h-10 rounded-full flex items-center justify-center transition-all",
                  currentStep >= step.id 
                    ? "bg-primary-500 text-white" 
                    : "bg-white border-2 border-border text-muted-foreground"
                )}>
                  <step.icon className="w-4 h-4 sm:w-5 sm:h-5" />
                </div>
                <span className={cn(
                  "mt-1 sm:mt-2 text-xs sm:text-sm font-medium hidden sm:block",
                  currentStep >= step.id ? "text-primary-600" : "text-muted-foreground"
                )}>
                  {step.title}
                </span>
              </div>
            ))}
          </div>

          {/* Step Content */}
          <Card className="mb-6 sm:mb-8">
            <CardContent className="p-4 sm:p-8">
              <AnimatePresence mode="wait">
                {/* Step 1: Select Service */}
                {currentStep === 1 && (
                  <motion.div
                    key="step1"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                  >
                    <h2 className="text-xl font-semibold mb-6">What needs repair?</h2>
                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                      {SERVICE_CATEGORIES.map((category) => {
                        const Icon = iconMap[category.icon]
                        return (
                          <button
                            key={category.id}
                            onClick={() => setFormData({ ...formData, service: category.id })}
                            className={cn(
                              "p-6 rounded-2xl border-2 text-left transition-all hover:border-primary-300",
                              formData.service === category.id
                                ? "border-primary-500 bg-primary-50"
                                : "border-border"
                            )}
                          >
                            <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${category.color} flex items-center justify-center mb-4`}>
                              {Icon && <Icon className="w-6 h-6 text-white" />}
                            </div>
                            <h3 className="font-semibold mb-1">{category.name}</h3>
                            <p className="text-sm text-muted-foreground line-clamp-2">
                              {category.description}
                            </p>
                          </button>
                        )
                      })}
                    </div>
                  </motion.div>
                )}

                {/* Step 2: Device Details */}
                {currentStep === 2 && (
                  <motion.div
                    key="step2"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    className="space-y-6"
                  >
                    <h2 className="text-xl font-semibold mb-6">Tell us about your device</h2>
                    
                    <div className="grid sm:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="brand">Brand</Label>
                        <Input
                          id="brand"
                          placeholder="e.g. HP, Brother, Dell"
                          value={formData.brand}
                          onChange={(e) => setFormData({ ...formData, brand: e.target.value })}
                        />
                      </div>
                      <div>
                        <Label htmlFor="model">Model</Label>
                        <Input
                          id="model"
                          placeholder="e.g. LaserJet Pro M404n"
                          value={formData.model}
                          onChange={(e) => setFormData({ ...formData, model: e.target.value })}
                        />
                      </div>
                    </div>
                    
                    <div>
                      <Label htmlFor="issue">Describe the issue</Label>
                      <Textarea
                        id="issue"
                        placeholder="What's wrong with your device? Be as detailed as possible..."
                        value={formData.issue}
                        onChange={(e) => setFormData({ ...formData, issue: e.target.value })}
                        className="min-h-[120px]"
                      />
                    </div>
                    
                    <div>
                      <Label>Upload photos (optional)</Label>
                      <div className="mt-2 border-2 border-dashed border-border rounded-xl p-8 text-center hover:border-primary-300 transition-colors cursor-pointer">
                        <Upload className="w-10 h-10 mx-auto text-muted-foreground mb-4" />
                        <p className="text-sm text-muted-foreground">
                          Drag & drop images here, or click to browse
                        </p>
                        <p className="text-xs text-muted-foreground mt-1">
                          PNG, JPG up to 10MB
                        </p>
                      </div>
                    </div>
                  </motion.div>
                )}

                {/* Step 3: Schedule */}
                {currentStep === 3 && (
                  <motion.div
                    key="step3"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    className="space-y-6"
                  >
                    <h2 className="text-xl font-semibold mb-6">Schedule your appointment</h2>
                    
                    {/* Service Type */}
                    <div>
                      <Label className="mb-3 block">Service type</Label>
                      <div className="grid sm:grid-cols-2 gap-4">
                        <button
                          onClick={() => setFormData({ ...formData, serviceType: "workshop" })}
                          className={cn(
                            "p-4 rounded-xl border-2 text-left transition-all",
                            formData.serviceType === "workshop"
                              ? "border-primary-500 bg-primary-50"
                              : "border-border hover:border-primary-300"
                          )}
                        >
                          <MapPin className="w-6 h-6 text-primary-500 mb-2" />
                          <h4 className="font-semibold">Drop-off at Workshop</h4>
                          <p className="text-sm text-muted-foreground">Bring your device to us</p>
                        </button>
                        <button
                          onClick={() => setFormData({ ...formData, serviceType: "onsite" })}
                          className={cn(
                            "p-4 rounded-xl border-2 text-left transition-all",
                            formData.serviceType === "onsite"
                              ? "border-primary-500 bg-primary-50"
                              : "border-border hover:border-primary-300"
                          )}
                        >
                          <Clock className="w-6 h-6 text-primary-500 mb-2" />
                          <h4 className="font-semibold">Onsite Service</h4>
                          <p className="text-sm text-muted-foreground">We come to you (+$49)</p>
                        </button>
                      </div>
                    </div>
                    
                    {/* Date Selection */}
                    <div>
                      <Label htmlFor="date">Preferred date</Label>
                      <Input
                        id="date"
                        type="date"
                        value={formData.date}
                        onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                        min={new Date().toISOString().split('T')[0]}
                      />
                    </div>
                    
                    {/* Time Slots */}
                    <div>
                      <Label className="mb-3 block">Preferred time</Label>
                      <div className="grid grid-cols-4 gap-2">
                        {timeSlots.map((time) => (
                          <button
                            key={time}
                            onClick={() => setFormData({ ...formData, time })}
                            className={cn(
                              "p-3 rounded-lg text-sm font-medium transition-all",
                              formData.time === time
                                ? "bg-primary-500 text-white"
                                : "bg-secondary hover:bg-secondary/80"
                            )}
                          >
                            {time}
                          </button>
                        ))}
                      </div>
                    </div>
                    
                    {/* Contact Info */}
                    <div className="grid sm:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="name">Full name</Label>
                        <Input
                          id="name"
                          placeholder="John Smith"
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        />
                      </div>
                      <div>
                        <Label htmlFor="phone">Phone</Label>
                        <Input
                          id="phone"
                          type="tel"
                          placeholder="021 123 4567"
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        />
                      </div>
                    </div>
                    <div>
                      <Label htmlFor="email">Email</Label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="john@example.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      />
                    </div>
                    
                    {formData.serviceType === "onsite" && (
                      <div>
                        <Label htmlFor="address">Service address</Label>
                        <Textarea
                          id="address"
                          placeholder="Full address for onsite service"
                          value={formData.address}
                          onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                        />
                      </div>
                    )}
                  </motion.div>
                )}

                {/* Step 4: Confirmation */}
                {currentStep === 4 && (
                  <motion.div
                    key="step4"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                  >
                    <h2 className="text-xl font-semibold mb-6">Confirm your booking</h2>
                    
                    <div className="space-y-4">
                      <div className="p-4 rounded-xl bg-secondary/50">
                        <h4 className="font-medium text-sm text-muted-foreground mb-1">Service</h4>
                        <p className="font-semibold">{selectedCategory?.name}</p>
                      </div>
                      
                      <div className="p-4 rounded-xl bg-secondary/50">
                        <h4 className="font-medium text-sm text-muted-foreground mb-1">Device</h4>
                        <p className="font-semibold">{formData.brand} {formData.model}</p>
                        <p className="text-sm text-muted-foreground mt-1">{formData.issue}</p>
                      </div>
                      
                      <div className="grid sm:grid-cols-2 gap-4">
                        <div className="p-4 rounded-xl bg-secondary/50">
                          <h4 className="font-medium text-sm text-muted-foreground mb-1">Date & Time</h4>
                          <p className="font-semibold">{formData.date} at {formData.time}</p>
                        </div>
                        <div className="p-4 rounded-xl bg-secondary/50">
                          <h4 className="font-medium text-sm text-muted-foreground mb-1">Service Type</h4>
                          <p className="font-semibold capitalize">{formData.serviceType}</p>
                        </div>
                      </div>
                      
                      <div className="p-4 rounded-xl bg-secondary/50">
                        <h4 className="font-medium text-sm text-muted-foreground mb-1">Contact</h4>
                        <p className="font-semibold">{formData.name}</p>
                        <p className="text-sm text-muted-foreground">{formData.email} • {formData.phone}</p>
                      </div>
                      
                      <div className="p-4 rounded-xl bg-primary-50 border border-primary-200">
                        <div className="flex items-start gap-3">
                          <CheckCircle2 className="w-5 h-5 text-primary-600 mt-0.5" />
                          <div>
                            <p className="font-medium text-primary-900">No payment required now</p>
                            <p className="text-sm text-primary-700">
                              You&apos;ll receive a quote after we diagnose your device
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </CardContent>
          </Card>

          {/* Navigation Buttons */}
          <div className="flex justify-between">
            <Button
              variant="secondary"
              onClick={handleBack}
              disabled={currentStep === 1}
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back
            </Button>
            
            {currentStep < 4 ? (
              <Button onClick={handleNext} disabled={currentStep === 1 && !formData.service}>
                Continue
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            ) : currentStep === 4 ? (
              <Button onClick={handleSubmit} disabled={isSubmitting}>
                {isSubmitting ? 'Submitting...' : 'Confirm Booking'}
                <CheckCircle2 className="w-4 h-4 ml-2" />
              </Button>
            ) : null}
          </div>
        </div>

        {/* Success Step */}
        {currentStep === 5 && trackingCode && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="max-w-lg mx-auto text-center py-12"
          >
            <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-green-100 flex items-center justify-center">
              <CheckCircle2 className="w-10 h-10 text-green-600" />
            </div>
            <h2 className="text-2xl font-bold mb-4">Booking Confirmed!</h2>
            <p className="text-muted-foreground mb-6">
              Your tracking code is:
            </p>
            <div className="bg-primary-50 rounded-xl p-4 mb-6">
              <p className="text-2xl font-mono font-bold text-primary-600">{trackingCode}</p>
            </div>
            <p className="text-sm text-muted-foreground mb-8">
              We&apos;ve sent a confirmation email with all the details. Use your tracking code to check the status of your repair.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild>
                <Link href={`/track?code=${trackingCode}`}>Track Repair</Link>
              </Button>
              <Button variant="outline" asChild>
                <Link href="/">Back to Home</Link>
              </Button>
            </div>
          </motion.div>
        )}
      </div>
    </div>
  )
}
