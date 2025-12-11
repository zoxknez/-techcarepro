"use client"

import { motion } from "framer-motion"
import { Shield, Award, Recycle, Clock, MapPin, ThumbsUp } from "lucide-react"
import { TRUST_BADGES } from "@/lib/constants"

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Shield,
  Award,
  Recycle,
  Clock,
  MapPin,
  ThumbsUp,
}

export function TrustSection() {
  return (
    <section className="py-20 bg-gradient-to-br from-primary-900 via-primary-950 to-primary-900 text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 pattern-dots" />
      </div>
      
      {/* Glowing Orbs */}
      <div className="absolute top-0 left-1/4 w-64 h-64 bg-primary-500/20 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-accent-500/20 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Why Choose TechCare Pro?
          </h2>
          <p className="text-white/70 max-w-2xl mx-auto">
            We&apos;re not just technicians – we&apos;re your partners in keeping your business running smoothly.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {TRUST_BADGES.map((badge, index) => {
            const Icon = iconMap[badge.icon]
            return (
              <motion.div
                key={badge.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-white/10 backdrop-blur flex items-center justify-center group-hover:bg-white/20 transition-colors">
                  {Icon && <Icon className="w-8 h-8 text-primary-400" />}
                </div>
                <h3 className="font-semibold mb-1">{badge.label}</h3>
                <p className="text-sm text-white/60">{badge.sublabel}</p>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
