"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { motion, AnimatePresence } from "framer-motion"
import { 
  Menu, 
  X, 
  Phone, 
  ChevronDown,
  Printer,
  Laptop,
  Copy,
  Building,
  Smartphone,
  Zap,
  Package,
  Droplet,
  Settings,
  ShoppingBag
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { BRAND, NAV_ITEMS, type NavChild } from "@/lib/constants"
import { cn } from "@/lib/utils"

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Printer,
  Laptop,
  Copy,
  Building,
  Smartphone,
  Zap,
  Package,
  Droplet,
  Settings,
  ShoppingBag,
}

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <>
      {/* Top Bar */}
      <div className="hidden lg:block bg-primary-900 text-white py-2">
        <div className="container mx-auto px-4 flex justify-between items-center text-sm">
          <div className="flex items-center gap-6">
            <span className="flex items-center gap-2">
              <Phone className="w-4 h-4" />
              <a href={`tel:${BRAND.phone}`} className="hover:text-primary-300 transition-colors">
                {BRAND.phone}
              </a>
              <span className="text-white/40 mx-1">|</span>
              <a href={`tel:${BRAND.mobile}`} className="hover:text-primary-300 transition-colors">
                {BRAND.mobile}
              </a>
            </span>
            <span className="text-white/60">{BRAND.hours.weekday}</span>
          </div>
          <div className="flex items-center gap-4">
            <Link href="/track" className="hover:text-primary-300 transition-colors">
              Track Repair
            </Link>
            <Link href="/portal" className="hover:text-primary-300 transition-colors">
              Customer Portal
            </Link>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <header
        className={cn(
          "sticky top-0 z-50 transition-all duration-300",
          isScrolled
            ? "bg-white/90 backdrop-blur-xl shadow-lg shadow-black/5"
            : "bg-white"
        )}
      >
        <div className="container mx-auto px-4">
          <nav className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-3 group">
              <div className="relative w-12 h-12 rounded-xl bg-gradient-to-br from-primary-500 to-accent-500 flex items-center justify-center shadow-lg shadow-primary-500/25 group-hover:shadow-xl group-hover:shadow-primary-500/30 transition-all duration-300">
                <Zap className="w-6 h-6 text-white" />
                <div className="absolute -top-1 -right-1 w-3 h-3 rounded-full bg-accent-400 animate-pulse" />
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-bold text-gradient">{BRAND.name}</span>
                <span className="text-xs text-muted-foreground hidden sm:block">
                  Expert Device Repair
                </span>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-1">
              {NAV_ITEMS.map((item) => (
                <div
                  key={item.label}
                  className="relative"
                  onMouseEnter={() => item.children && setActiveDropdown(item.label)}
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  <Link
                    href={item.href}
                    className={cn(
                      "flex items-center gap-1.5 px-4 py-2 text-sm font-medium rounded-xl transition-all duration-200",
                      "text-foreground hover:text-primary-600 hover:bg-primary-50"
                    )}
                  >
                    {item.label}
                    {item.children && (
                      <ChevronDown className={cn(
                        "w-4 h-4 transition-transform duration-200",
                        activeDropdown === item.label && "rotate-180"
                      )} />
                    )}
                  </Link>

                  {/* Dropdown Menu */}
                  <AnimatePresence>
                    {item.children && activeDropdown === item.label && (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}
                        transition={{ duration: 0.2 }}
                        className="absolute top-full left-0 pt-2 w-64"
                      >
                        <div className="bg-white rounded-2xl shadow-xl shadow-black/10 border border-border overflow-hidden">
                          <div className="p-2">
                            {item.children.map((child: NavChild) => {
                              const Icon = child.icon ? iconMap[child.icon] : null
                              return (
                                <Link
                                  key={child.label}
                                  href={child.href}
                                  className="flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-primary-50 transition-colors group"
                                >
                                  {Icon && (
                                    <div className="w-10 h-10 rounded-xl bg-primary-100 flex items-center justify-center group-hover:bg-primary-200 transition-colors">
                                      <Icon className="w-5 h-5 text-primary-600" />
                                    </div>
                                  )}
                                  <span className="font-medium text-sm">{child.label}</span>
                                </Link>
                              )
                            })}
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="hidden lg:flex items-center gap-3">
              <Button variant="ghost" size="sm" asChild>
                <Link href="/shop">
                  <ShoppingBag className="w-4 h-4 mr-2" />
                  Shop
                </Link>
              </Button>
              <Button asChild>
                <Link href="/booking">Book Repair</Link>
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden p-2 rounded-xl hover:bg-secondary transition-colors"
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </nav>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="lg:hidden border-t border-border bg-white overflow-hidden"
            >
              <div className="container mx-auto px-4 py-6 space-y-4">
                {NAV_ITEMS.map((item) => (
                  <div key={item.label}>
                    <Link
                      href={item.href}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="block py-3 text-lg font-medium hover:text-primary-600 transition-colors"
                    >
                      {item.label}
                    </Link>
                    {item.children && (
                      <div className="ml-4 space-y-2 mt-2">
                        {item.children.map((child: NavChild) => (
                          <Link
                            key={child.label}
                            href={child.href}
                            onClick={() => setIsMobileMenuOpen(false)}
                            className="block py-2 text-muted-foreground hover:text-primary-600 transition-colors"
                          >
                            {child.label}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
                <div className="pt-4 space-y-3">
                  <Button className="w-full" asChild>
                    <Link href="/booking">Book Repair</Link>
                  </Button>
                  <Button variant="secondary" className="w-full" asChild>
                    <Link href="/shop">Shop Consumables</Link>
                  </Button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>
    </>
  )
}
