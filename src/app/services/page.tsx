import { Metadata } from "next"
import Link from "next/link"
import { ArrowRight, Printer, Laptop, Copy, Building, Smartphone, Zap, CheckCircle2 } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { SERVICE_CATEGORIES } from "@/lib/constants"

export const metadata: Metadata = {
  title: "Services",
  description: "Expert repair services for printers, computers, copiers, and office equipment in Auckland.",
}

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Printer, Laptop, Copy, Building, Smartphone, Zap,
}

export default function ServicesPage() {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="py-20 bg-gradient-to-br from-primary-50 via-white to-accent-50 relative overflow-hidden">
        <div className="absolute inset-0 pattern-grid opacity-50" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl">
            <Badge className="mb-4">Our Services</Badge>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Expert Repairs for <span className="text-gradient">Every Device</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              From printers to computers, we deliver fast, reliable repairs with genuine parts 
              and a satisfaction guarantee. Authorized warranty service for major brands.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button size="lg" asChild>
                <Link href="/booking">Book a Repair <ArrowRight className="w-4 h-4 ml-2" /></Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="/contact">Get a Quote</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="space-y-16">
            {SERVICE_CATEGORIES.map((category, index) => {
              const Icon = iconMap[category.icon]
              return (
                <div key={category.id} id={category.id} className="scroll-mt-24">
                  <div className="grid lg:grid-cols-2 gap-12 items-start">
                    {/* Info */}
                    <div className={index % 2 === 1 ? "lg:order-2" : ""}>
                      <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${category.color} flex items-center justify-center mb-6`}>
                        {Icon && <Icon className="w-8 h-8 text-white" />}
                      </div>
                      <h2 className="text-3xl font-bold mb-4">{category.name}</h2>
                      <p className="text-lg text-muted-foreground mb-6">{category.description}</p>
                      
                      {"brands" in category && category.brands && (
                        <div className="mb-6">
                          <h4 className="font-semibold mb-3">Brands We Service</h4>
                          <div className="flex flex-wrap gap-2">
                            {category.brands.map((brand: string) => (
                              <span key={brand} className="px-3 py-1 bg-secondary rounded-lg text-sm">
                                {brand}
                              </span>
                            ))}
                          </div>
                        </div>
                      )}
                      
                      <Button asChild>
                        <Link href={`/booking?service=${category.id}`}>
                          Book {category.name} <ArrowRight className="w-4 h-4 ml-2" />
                        </Link>
                      </Button>
                    </div>
                    
                    {/* Services List */}
                    <div className={index % 2 === 1 ? "lg:order-1" : ""}>
                      <Card>
                        <CardContent className="p-6">
                          <h4 className="font-semibold mb-4">Available Services</h4>
                          <div className="space-y-4">
                            {category.services.map((service) => (
                              <div key={service.name} className="flex items-center justify-between p-4 rounded-xl bg-secondary/50 hover:bg-secondary transition-colors">
                                <div className="flex items-center gap-3">
                                  <CheckCircle2 className="w-5 h-5 text-primary-500" />
                                  <div>
                                    <p className="font-medium">{service.name}</p>
                                    <p className="text-sm text-muted-foreground">{service.time}</p>
                                  </div>
                                </div>
                                <div className="text-right">
                                  <p className="font-semibold text-primary-600">From ${service.priceFrom}</p>
                                </div>
                              </div>
                            ))}
                          </div>
                        </CardContent>
                      </Card>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-primary-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Not Sure What You Need?</h2>
          <p className="text-white/70 mb-8 max-w-2xl mx-auto">
            Contact us for a free consultation. Our experts will diagnose your issue and provide an honest quote.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button size="lg" variant="secondary" className="bg-white text-primary-900 hover:bg-white/90" asChild>
              <Link href="/contact">Contact Us</Link>
            </Button>
            <Button size="lg" variant="outline" className="border-white/30 text-white hover:bg-white/10" asChild>
              <a href="tel:09 630 5579">Call 09 630 5579</a>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
