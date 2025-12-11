"use client"

import { useParams } from "next/navigation"
import Link from "next/link"
import { motion } from "framer-motion"
import { 
  ArrowLeft, 
  Check, 
  Clock, 
  Phone, 
  Calendar,
  Star,
  Shield,
  Award
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { SERVICE_CATEGORIES, BRAND } from "@/lib/constants"

export default function ServiceDetailPage() {
  const params = useParams()
  const slug = params.slug as string
  
  const service = SERVICE_CATEGORIES.find(s => s.id === slug)
  
  if (!service) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Service Not Found</h1>
          <Button asChild>
            <Link href="/services">View All Services</Link>
          </Button>
        </div>
      </div>
    )
  }

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-24 bg-gradient-to-br from-primary-50 to-accent-50 overflow-hidden">
        <div className="absolute inset-0 pattern-dots opacity-50" />
        <div className="container mx-auto px-4 relative">
          <Link 
            href="/services" 
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary-600 mb-8 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Services
          </Link>
          
          <div className="max-w-3xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className={`inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r ${service.color} text-white text-sm font-medium mb-6`}
            >
              Expert Service
            </motion.div>
            
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6"
            >
              {service.name}
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-xl text-muted-foreground mb-8"
            >
              {service.description}
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="flex flex-wrap gap-4"
            >
              <Button size="lg" asChild>
                <Link href="/booking">
                  <Calendar className="w-5 h-5 mr-2" />
                  Book Repair
                </Link>
              </Button>
              <Button variant="secondary" size="lg" asChild>
                <a href={`tel:${BRAND.phone}`}>
                  <Phone className="w-5 h-5 mr-2" />
                  Call Now
                </a>
              </Button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services & Pricing */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Services List */}
            <div className="lg:col-span-2">
              <h2 className="text-3xl font-bold mb-8">Our {service.name} Services</h2>
              
              <div className="space-y-4">
                {service.services.map((item, index) => (
                  <motion.div
                    key={item.name}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <Card className="p-6 hover:shadow-lg transition-shadow">
                      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                        <div>
                          <h3 className="text-lg font-semibold mb-2">{item.name}</h3>
                          <div className="flex items-center gap-4 text-sm text-muted-foreground">
                            <span className="flex items-center gap-1">
                              <Clock className="w-4 h-4" />
                              {item.time}
                            </span>
                          </div>
                        </div>
                        <div className="flex items-center gap-4">
                          <div className="text-right">
                            <span className="text-sm text-muted-foreground">From</span>
                            <p className="text-2xl font-bold text-primary-600">${item.priceFrom}</p>
                          </div>
                          <Button asChild>
                            <Link href={`/booking?service=${slug}&type=${encodeURIComponent(item.name)}`}>
                              Book Now
                            </Link>
                          </Button>
                        </div>
                      </div>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Brands We Service */}
              {'brands' in service && service.brands && (
                <Card className="p-6">
                  <h3 className="text-lg font-semibold mb-4">Brands We Service</h3>
                  <div className="flex flex-wrap gap-2">
                    {service.brands.map((brand: string) => (
                      <span
                        key={brand}
                        className="px-3 py-1 bg-primary-50 text-primary-700 rounded-full text-sm"
                      >
                        {brand}
                      </span>
                    ))}
                  </div>
                </Card>
              )}

              {/* Why Choose Us */}
              <Card className="p-6 bg-gradient-to-br from-primary-50 to-accent-50">
                <h3 className="text-lg font-semibold mb-4">Why Choose Us?</h3>
                <ul className="space-y-3">
                  {[
                    "25+ Years Experience",
                    "Certified Technicians",
                    "90-Day Warranty",
                    "Same-Day Service Available",
                    "Genuine Parts Only",
                    "Free Diagnostics"
                  ].map((item) => (
                    <li key={item} className="flex items-center gap-3">
                      <Check className="w-5 h-5 text-primary-600 shrink-0" />
                      <span className="text-sm">{item}</span>
                    </li>
                  ))}
                </ul>
              </Card>

              {/* Trust Badges */}
              <Card className="p-6">
                <div className="grid grid-cols-3 gap-4 text-center">
                  <div>
                    <Star className="w-8 h-8 mx-auto text-yellow-500 mb-2" />
                    <p className="text-2xl font-bold">4.9</p>
                    <p className="text-xs text-muted-foreground">Rating</p>
                  </div>
                  <div>
                    <Shield className="w-8 h-8 mx-auto text-primary-600 mb-2" />
                    <p className="text-2xl font-bold">90</p>
                    <p className="text-xs text-muted-foreground">Day Warranty</p>
                  </div>
                  <div>
                    <Award className="w-8 h-8 mx-auto text-accent-600 mb-2" />
                    <p className="text-2xl font-bold">25+</p>
                    <p className="text-xs text-muted-foreground">Years</p>
                  </div>
                </div>
              </Card>

              {/* Contact Card */}
              <Card className="p-6 bg-primary-900 text-white">
                <h3 className="text-lg font-semibold mb-2">Need Help?</h3>
                <p className="text-primary-100 text-sm mb-4">
                  Our experts are ready to assist you with any questions.
                </p>
                <Button variant="secondary" className="w-full" asChild>
                  <a href={`tel:${BRAND.phone}`}>
                    <Phone className="w-4 h-4 mr-2" />
                    {BRAND.phone}
                  </a>
                </Button>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary-600 to-accent-600">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Get Your Device Fixed?
          </h2>
          <p className="text-xl text-white/80 mb-8 max-w-2xl mx-auto">
            Book your repair online and get a free diagnostic assessment.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button size="lg" variant="secondary" asChild>
              <Link href="/booking">Book Online Now</Link>
            </Button>
            <Button 
              size="lg" 
              className="bg-white/10 hover:bg-white/20 text-white border-white/20"
              asChild
            >
              <a href={`tel:${BRAND.phone}`}>
                <Phone className="w-5 h-5 mr-2" />
                Call {BRAND.phone}
              </a>
            </Button>
          </div>
        </div>
      </section>
    </main>
  )
}
