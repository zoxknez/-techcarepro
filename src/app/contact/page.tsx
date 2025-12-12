"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { 
  Phone, Mail, MapPin, Clock, Send, 
  MessageSquare, CheckCircle2 
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { BRAND } from "@/lib/constants"

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.id]: e.target.value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      })
      
      if (response.ok) {
        setSubmitted(true)
        setFormData({ firstName: "", lastName: "", email: "", phone: "", subject: "", message: "" })
      } else {
        alert('Failed to send message. Please try again.')
      }
    } catch (error) {
      console.error('Contact form error:', error)
      alert('Something went wrong. Please try again.')
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="py-20 bg-gradient-to-br from-primary-50 via-white to-accent-50 relative overflow-hidden">
        <div className="absolute inset-0 pattern-grid opacity-50" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <Badge className="mb-4">Get in Touch</Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Contact <span className="text-gradient">Us</span>
            </h1>
            <p className="text-xl text-muted-foreground">
              Have a question or need a quote? We&apos;re here to help.
              Reach out and we&apos;ll respond as soon as possible.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Contact Info */}
            <div className="space-y-6">
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-primary-100 flex items-center justify-center shrink-0">
                      <Phone className="w-6 h-6 text-primary-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">Phone</h3>
                      <p className="text-muted-foreground text-sm mb-2">24/7 support available</p>
                      <a href={`tel:${BRAND.phone}`} className="text-primary-600 font-medium hover:underline">
                        {BRAND.phone}
                      </a>
                      <br />
                      <a href={`tel:${BRAND.mobile}`} className="text-primary-600 font-medium hover:underline">
                        {BRAND.mobile}
                      </a>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-primary-100 flex items-center justify-center shrink-0">
                      <Mail className="w-6 h-6 text-primary-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">Email</h3>
                      <p className="text-muted-foreground text-sm mb-2">We reply within 24 hours</p>
                      <a href={`mailto:${BRAND.email}`} className="text-primary-600 font-medium hover:underline">
                        {BRAND.email}
                      </a>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-primary-100 flex items-center justify-center shrink-0">
                      <MapPin className="w-6 h-6 text-primary-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">Main Workshop</h3>
                      <p className="text-muted-foreground text-sm">
                        {BRAND.address.primary.street}<br />
                        {BRAND.address.primary.suburb}, {BRAND.address.primary.city} {BRAND.address.primary.postcode}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-primary-100 flex items-center justify-center shrink-0">
                      <Clock className="w-6 h-6 text-primary-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">Business Hours</h3>
                      <p className="text-muted-foreground text-sm">
                        Monday - Friday: {BRAND.hours.weekday}<br />
                        Weekend: {BRAND.hours.weekend}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              <Card>
                <CardContent className="p-8">
                  {submitted ? (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      className="text-center py-12"
                    >
                      <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-primary-100 flex items-center justify-center">
                        <CheckCircle2 className="w-10 h-10 text-primary-600" />
                      </div>
                      <h2 className="text-2xl font-bold mb-2">Message Sent!</h2>
                      <p className="text-muted-foreground mb-6">
                        Thanks for reaching out. We&apos;ll get back to you within 24 hours.
                      </p>
                      <Button onClick={() => setSubmitted(false)}>
                        Send Another Message
                      </Button>
                    </motion.div>
                  ) : (
                    <>
                      <div className="flex items-center gap-3 mb-6">
                        <MessageSquare className="w-6 h-6 text-primary-600" />
                        <h2 className="text-xl font-semibold">Send us a message</h2>
                      </div>

                      <form onSubmit={handleSubmit} className="space-y-6">
                        <div className="grid sm:grid-cols-2 gap-4">
                          <div>
                            <Label htmlFor="firstName">First name</Label>
                            <Input id="firstName" placeholder="John" required value={formData.firstName} onChange={handleChange} />
                          </div>
                          <div>
                            <Label htmlFor="lastName">Last name</Label>
                            <Input id="lastName" placeholder="Smith" required value={formData.lastName} onChange={handleChange} />
                          </div>
                        </div>

                        <div className="grid sm:grid-cols-2 gap-4">
                          <div>
                            <Label htmlFor="email">Email</Label>
                            <Input id="email" type="email" placeholder="john@example.com" required value={formData.email} onChange={handleChange} />
                          </div>
                          <div>
                            <Label htmlFor="phone">Phone (optional)</Label>
                            <Input id="phone" type="tel" placeholder="021 123 4567" value={formData.phone} onChange={handleChange} />
                          </div>
                        </div>

                        <div>
                          <Label htmlFor="subject">Subject</Label>
                          <Input id="subject" placeholder="How can we help?" required value={formData.subject} onChange={handleChange} />
                        </div>

                        <div>
                          <Label htmlFor="message">Message</Label>
                          <Textarea 
                            id="message" 
                            placeholder="Tell us more about your inquiry..." 
                            className="min-h-[150px]"
                            required
                            value={formData.message}
                            onChange={handleChange}
                          />
                        </div>

                        <Button type="submit" size="lg" className="w-full sm:w-auto" disabled={isLoading}>
                          <Send className="w-4 h-4 mr-2" />
                          {isLoading ? 'Sending...' : 'Send Message'}
                        </Button>
                      </form>
                    </>
                  )}
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Map */}
      <section className="h-96 bg-secondary">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3192.5!2d174.75!3d-36.87!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzbCsDUyJzEyLjAiUyAxNzTCsDQ1JzAwLjAiRQ!5e0!3m2!1sen!2snz!4v1234567890"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </section>
    </div>
  )
}
