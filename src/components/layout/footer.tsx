import Link from "next/link"
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock,
  Facebook,
  Instagram,
  Linkedin,
  Zap,
  Recycle,
  Shield,
  Award
} from "lucide-react"
import { BRAND, NAV_ITEMS, SERVICE_CATEGORIES } from "@/lib/constants"

export function Footer() {
  return (
    <footer className="bg-primary-950 text-white">
      {/* Trust Bar */}
      <div className="border-b border-white/10">
        <div className="container mx-auto px-4 py-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-xl bg-primary-500/20 flex items-center justify-center">
                <Shield className="w-6 h-6 text-primary-400" />
              </div>
              <div>
                <p className="font-semibold">Authorized Repairer</p>
                <p className="text-sm text-white/60">Brother, Epson, Sharp</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-xl bg-primary-500/20 flex items-center justify-center">
                <Award className="w-6 h-6 text-primary-400" />
              </div>
              <div>
                <p className="font-semibold">25+ Years</p>
                <p className="text-sm text-white/60">Trusted Experience</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-xl bg-primary-500/20 flex items-center justify-center">
                <Recycle className="w-6 h-6 text-primary-400" />
              </div>
              <div>
                <p className="font-semibold">Eco-Friendly</p>
                <p className="text-sm text-white/60">Recycling Partner</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-xl bg-primary-500/20 flex items-center justify-center">
                <Clock className="w-6 h-6 text-primary-400" />
              </div>
              <div>
                <p className="font-semibold">24/7 Support</p>
                <p className="text-sm text-white/60">Always Available</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary-500 to-accent-500 flex items-center justify-center">
                <Zap className="w-6 h-6 text-white" />
              </div>
              <div>
                <span className="text-xl font-bold">{BRAND.name}</span>
                <p className="text-sm text-white/60">Expert Device Repair</p>
              </div>
            </Link>
            <p className="text-white/70 mb-6 max-w-sm">
              Auckland&apos;s trusted experts in printer, computer, and office equipment repairs. 
              Serving businesses and homes across New Zealand since 1999.
            </p>
            <div className="space-y-3">
              <a 
                href={`tel:${BRAND.phone}`}
                className="flex items-center gap-3 text-white/70 hover:text-primary-400 transition-colors"
              >
                <Phone className="w-5 h-5" />
                <span>{BRAND.phone}</span>
              </a>
              <a 
                href={`mailto:${BRAND.email}`}
                className="flex items-center gap-3 text-white/70 hover:text-primary-400 transition-colors"
              >
                <Mail className="w-5 h-5" />
                <span>{BRAND.email}</span>
              </a>
              <div className="flex items-start gap-3 text-white/70">
                <MapPin className="w-5 h-5 mt-0.5" />
                <span>
                  {BRAND.address.primary.street}, {BRAND.address.primary.suburb}<br />
                  {BRAND.address.primary.city} {BRAND.address.primary.postcode}
                </span>
              </div>
            </div>
          </div>

          {/* Services Column */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Services</h4>
            <ul className="space-y-3">
              {SERVICE_CATEGORIES.slice(0, 6).map((category) => (
                <li key={category.id}>
                  <Link 
                    href={`/services/${category.id}`}
                    className="text-white/70 hover:text-primary-400 transition-colors"
                  >
                    {category.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Shop Column */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Shop</h4>
            <ul className="space-y-3">
              <li>
                <Link href="/shop/toner" className="text-white/70 hover:text-primary-400 transition-colors">
                  Toner Cartridges
                </Link>
              </li>
              <li>
                <Link href="/shop/ink" className="text-white/70 hover:text-primary-400 transition-colors">
                  Ink Cartridges
                </Link>
              </li>
              <li>
                <Link href="/shop/parts" className="text-white/70 hover:text-primary-400 transition-colors">
                  Drums & Parts
                </Link>
              </li>
              <li>
                <Link href="/shop" className="text-white/70 hover:text-primary-400 transition-colors">
                  All Products
                </Link>
              </li>
            </ul>
            <h4 className="font-semibold text-lg mb-4 mt-8">Support</h4>
            <ul className="space-y-3">
              <li>
                <Link href="/track" className="text-white/70 hover:text-primary-400 transition-colors">
                  Track Repair
                </Link>
              </li>
              <li>
                <Link href="/portal" className="text-white/70 hover:text-primary-400 transition-colors">
                  Customer Portal
                </Link>
              </li>
              <li>
                <Link href="/faq" className="text-white/70 hover:text-primary-400 transition-colors">
                  FAQ
                </Link>
              </li>
            </ul>
          </div>

          {/* Company Column */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Company</h4>
            <ul className="space-y-3">
              <li>
                <Link href="/about" className="text-white/70 hover:text-primary-400 transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-white/70 hover:text-primary-400 transition-colors">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="/careers" className="text-white/70 hover:text-primary-400 transition-colors">
                  Careers
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-white/70 hover:text-primary-400 transition-colors">
                  Blog
                </Link>
              </li>
            </ul>
            <h4 className="font-semibold text-lg mb-4 mt-8">Legal</h4>
            <ul className="space-y-3">
              <li>
                <Link href="/privacy" className="text-white/70 hover:text-primary-400 transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="text-white/70 hover:text-primary-400 transition-colors">
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-white/60 text-sm">
              © {new Date().getFullYear()} {BRAND.name}. All rights reserved. NZ Owned & Operated.
            </p>
            <div className="flex items-center gap-4">
              <a 
                href={BRAND.social.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center hover:bg-primary-500 transition-colors"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a 
                href={BRAND.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center hover:bg-primary-500 transition-colors"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a 
                href={BRAND.social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center hover:bg-primary-500 transition-colors"
              >
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
