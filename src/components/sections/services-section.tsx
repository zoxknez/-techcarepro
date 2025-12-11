"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { ArrowRight, Printer, Laptop, Copy, Building, Smartphone, Zap } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { SERVICE_CATEGORIES } from "@/lib/constants"

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Printer,
  Laptop,
  Copy,
  Building,
  Smartphone,
  Zap,
}

export function ServicesSection() {
  return (
    <section className="py-24 bg-white relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-border to-transparent" />
      
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <Badge className="mb-4">Our Services</Badge>
          <h2 className="section-title mb-4">
            Expert Repairs for
            <span className="text-gradient"> Every Device</span>
          </h2>
          <p className="section-subtitle mx-auto">
            From printers to computers, we fix it all with precision and care.
            Authorized warranty repairs for major brands.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SERVICE_CATEGORIES.map((category, index) => {
            const Icon = iconMap[category.icon]
            return (
              <motion.div
                key={category.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Link href={`/services/${category.id}`}>
                  <Card className="group h-full hover:border-primary-300 cursor-pointer">
                    <CardContent className="p-6">
                      <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${category.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                        {Icon && <Icon className="w-7 h-7 text-white" />}
                      </div>
                      
                      <h3 className="text-xl font-semibold mb-2 group-hover:text-primary-600 transition-colors">
                        {category.name}
                      </h3>
                      
                      <p className="text-muted-foreground text-sm mb-4">
                        {category.description}
                      </p>
                      
                      {"brands" in category && category.brands && (
                        <div className="flex flex-wrap gap-1 mb-4">
                          {category.brands.slice(0, 4).map((brand: string) => (
                            <span key={brand} className="text-xs px-2 py-1 bg-secondary rounded-md">
                              {brand}
                            </span>
                          ))}
                          {category.brands.length > 4 && (
                            <span className="text-xs px-2 py-1 bg-secondary rounded-md">
                              +{category.brands.length - 4} more
                            </span>
                          )}
                        </div>
                      )}
                      
                      <div className="flex items-center justify-between pt-4 border-t border-border">
                        <span className="text-sm text-muted-foreground">
                          From <span className="font-semibold text-foreground">${category.services[0].priceFrom}</span>
                        </span>
                        <span className="flex items-center text-sm font-medium text-primary-600 group-hover:translate-x-1 transition-transform">
                          View Details
                          <ArrowRight className="w-4 h-4 ml-1" />
                        </span>
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
