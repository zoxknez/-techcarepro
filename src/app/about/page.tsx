import { Metadata } from "next"
import Link from "next/link"
import { ArrowRight, Award, Users, Recycle, Heart, CheckCircle2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { BRAND } from "@/lib/constants"

export const metadata: Metadata = {
  title: "About Us",
  description: "Learn about TechCare Pro - Auckland's trusted device repair experts since 1999.",
}

const timeline = [
  { year: "1999", title: "Founded", description: "Started as a small printer repair shop in Auckland" },
  { year: "2005", title: "Expansion", description: "Added computer repairs and opened second workshop" },
  { year: "2010", title: "Certification", description: "Became authorized warranty repairer for major brands" },
  { year: "2015", title: "Growth", description: "Reached 10,000 device repairs milestone" },
  { year: "2020", title: "Digital", description: "Launched online booking and e-commerce platform" },
  { year: "2024", title: "Today", description: "25+ years strong, serving 15,000+ customers" },
]

const values = [
  { icon: Award, title: "Excellence", description: "We deliver the highest quality repairs using genuine parts and expert techniques." },
  { icon: Users, title: "Customer First", description: "Your satisfaction is our priority. We go above and beyond to exceed expectations." },
  { icon: Recycle, title: "Sustainability", description: "We're committed to eco-friendly practices and responsible recycling." },
  { icon: Heart, title: "Integrity", description: "Honest pricing, transparent communication, and ethical business practices." },
]

const certifications = [
  "Brother Authorized Service Provider",
  "Epson Authorized Warranty Repairer",
  "Sharp Service Partner",
  "Konica Minolta Certified",
  "ACCO Brands Authorized",
  "Rexel Service Partner",
]

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="py-20 bg-gradient-to-br from-primary-50 via-white to-accent-50 relative overflow-hidden">
        <div className="absolute inset-0 pattern-grid opacity-50" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="mb-4">About Us</Badge>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                25+ Years of <span className="text-gradient">Excellence</span>
              </h1>
              <p className="text-lg text-muted-foreground mb-8">
                TechCare Pro is Auckland&apos;s premier device repair service. Since 1999, we&apos;ve been 
                helping businesses and individuals keep their technology running smoothly. Our team 
                of certified technicians combines decades of experience with cutting-edge expertise.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button size="lg" asChild>
                  <Link href="/contact">Contact Us <ArrowRight className="w-4 h-4 ml-2" /></Link>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <Link href="/services">Our Services</Link>
                </Button>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-square rounded-3xl bg-gradient-to-br from-primary-500 to-accent-500 shadow-2xl overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center text-white p-8">
                    <div className="text-7xl font-bold mb-2">{BRAND.stats.yearsInBusiness}+</div>
                    <div className="text-xl opacity-90">Years in Business</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 bg-primary-900 text-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl md:text-5xl font-bold mb-2">{BRAND.stats.yearsInBusiness}+</div>
              <div className="text-white/70">Years Experience</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold mb-2">{(BRAND.stats.devicesRepaired / 1000).toFixed(0)}K+</div>
              <div className="text-white/70">Devices Repaired</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold mb-2">{(BRAND.stats.happyCustomers / 1000).toFixed(0)}K+</div>
              <div className="text-white/70">Happy Customers</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold mb-2">{BRAND.stats.certifications}</div>
              <div className="text-white/70">Certifications</div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="mb-4">Our Values</Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">What We Stand For</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Our core values guide everything we do, from how we repair devices to how we treat our customers.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value) => (
              <Card key={value.title} className="text-center">
                <CardContent className="p-6">
                  <div className="w-14 h-14 mx-auto mb-4 rounded-2xl bg-primary-100 flex items-center justify-center">
                    <value.icon className="w-7 h-7 text-primary-600" />
                  </div>
                  <h3 className="font-semibold text-lg mb-2">{value.title}</h3>
                  <p className="text-sm text-muted-foreground">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="mb-4">Our Journey</Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">25 Years of Growth</h2>
          </div>

          <div className="max-w-3xl mx-auto">
            <div className="relative">
              <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-primary-200 -translate-x-1/2" />
              
              {timeline.map((item, index) => (
                <div key={item.year} className={`relative flex items-center gap-8 mb-8 ${index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"}`}>
                  <div className={`flex-1 ${index % 2 === 0 ? "md:text-right" : "md:text-left"} pl-12 md:pl-0`}>
                    <Card>
                      <CardContent className="p-4">
                        <div className="text-primary-600 font-bold text-lg mb-1">{item.year}</div>
                        <div className="font-semibold mb-1">{item.title}</div>
                        <div className="text-sm text-muted-foreground">{item.description}</div>
                      </CardContent>
                    </Card>
                  </div>
                  <div className="absolute left-4 md:left-1/2 w-4 h-4 rounded-full bg-primary-500 border-4 border-white -translate-x-1/2 z-10" />
                  <div className="flex-1 hidden md:block" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <Badge className="mb-4">Certifications</Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Authorized Service Provider</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              We&apos;re officially certified by major manufacturers to perform warranty repairs.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-4xl mx-auto">
            {certifications.map((cert) => (
              <div key={cert} className="flex items-center gap-3 p-4 rounded-xl bg-primary-50">
                <CheckCircle2 className="w-5 h-5 text-primary-600 shrink-0" />
                <span className="font-medium text-sm">{cert}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-br from-primary-500 to-accent-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Work With Us?</h2>
          <p className="text-white/80 mb-8 max-w-2xl mx-auto">
            Join thousands of satisfied customers who trust TechCare Pro for their device repairs.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button size="lg" variant="secondary" className="bg-white text-primary-600 hover:bg-white/90" asChild>
              <Link href="/booking">Book a Repair</Link>
            </Button>
            <Button size="lg" variant="outline" className="border-white/30 text-white hover:bg-white/10" asChild>
              <Link href="/contact">Get in Touch</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
