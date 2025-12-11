"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { ArrowRight, Phone, Calendar, Upload, Wrench, CheckCircle2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { BRAND } from "@/lib/constants"

const steps = [
  {
    icon: Calendar,
    title: "Book Online",
    description: "Choose your service and select a convenient time slot",
  },
  {
    icon: Upload,
    title: "Describe Issue",
    description: "Tell us what's wrong and upload photos if needed",
  },
  {
    icon: Wrench,
    title: "Expert Repair",
    description: "Our certified technicians diagnose and fix your device",
  },
  {
    icon: CheckCircle2,
    title: "Device Returned",
    description: "Collect your device or we deliver it back to you",
  },
]

export function CTASection() {
  return (
    <section className="py-24 bg-gradient-to-br from-primary-500 to-accent-600 text-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-full h-full bg-[url('/hero-pattern.svg')]" />
      </div>
      <div className="absolute -top-24 -right-24 w-96 h-96 bg-white/10 rounded-full blur-3xl" />
      <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-white/10 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-4 relative z-10">
        {/* How It Works */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <Badge variant="secondary" className="mb-4 bg-white/20 text-white border-0">
            Simple Process
          </Badge>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            How It Works
          </h2>
          <p className="text-white/80 max-w-2xl mx-auto text-lg">
            Getting your device repaired has never been easier
          </p>
        </motion.div>
        
        <div className="grid md:grid-cols-4 gap-8 mb-16">
          {steps.map((step, index) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="text-center relative"
            >
              {/* Connector Line */}
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-8 left-[60%] w-[80%] h-0.5 bg-white/20" />
              )}
              
              <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-white/20 backdrop-blur flex items-center justify-center relative">
                <step.icon className="w-8 h-8" />
                <span className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-white text-primary-600 text-sm font-bold flex items-center justify-center">
                  {index + 1}
                </span>
              </div>
              <h3 className="font-semibold text-lg mb-2">{step.title}</h3>
              <p className="text-white/70 text-sm">{step.description}</p>
            </motion.div>
          ))}
        </div>
        
        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <div className="bg-white/10 backdrop-blur-xl rounded-3xl p-8 md:p-12 max-w-3xl mx-auto">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              Ready to Get Your Device Fixed?
            </h3>
            <p className="text-white/80 mb-8 max-w-lg mx-auto">
              Book online for the fastest service, or call us directly for immediate assistance.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="xl" variant="secondary" className="bg-white text-primary-600 hover:bg-white/90" asChild>
                <Link href="/booking">
                  Book a Repair
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
              </Button>
              <Button size="xl" variant="outline" className="border-white/30 text-white hover:bg-white/10" asChild>
                <a href={`tel:${BRAND.phone}`}>
                  <Phone className="w-5 h-5 mr-2" />
                  {BRAND.phone}
                </a>
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
