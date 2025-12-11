"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { motion } from "framer-motion"
import {
  LayoutDashboard,
  Wrench,
  ShoppingBag,
  Package,
  MessageSquare,
  Settings,
  Users,
  BarChart3,
  Zap,
  LogOut
} from "lucide-react"
import { signOut } from "next-auth/react"
import { BRAND } from "@/lib/constants"
import { cn } from "@/lib/utils"

const navigation = [
  { name: "Dashboard", href: "/admin", icon: LayoutDashboard },
  { name: "Bookings", href: "/admin/bookings", icon: Wrench },
  { name: "Orders", href: "/admin/orders", icon: ShoppingBag },
  { name: "Products", href: "/admin/products", icon: Package },
  { name: "Customers", href: "/admin/customers", icon: Users },
  { name: "Messages", href: "/admin/messages", icon: MessageSquare },
  { name: "Analytics", href: "/admin/analytics", icon: BarChart3 },
  { name: "Settings", href: "/admin/settings", icon: Settings },
]

export function AdminSidebar() {
  const pathname = usePathname()

  return (
    <>
      {/* Desktop Sidebar */}
      <aside className="hidden lg:fixed lg:inset-y-0 lg:flex lg:w-64 lg:flex-col">
        <div className="flex flex-col flex-1 min-h-0 bg-primary-950 text-white">
          {/* Logo */}
          <div className="flex items-center h-16 px-6 border-b border-primary-800">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-primary-500 to-accent-500 flex items-center justify-center">
                <Zap className="w-5 h-5 text-white" />
              </div>
              <div>
                <span className="font-bold">{BRAND.name}</span>
                <span className="text-xs text-primary-300 block">Admin Panel</span>
              </div>
            </div>
          </div>

          {/* Navigation */}
          <nav className="flex-1 px-3 py-4 space-y-1 overflow-y-auto">
            {navigation.map((item) => {
              const isActive = pathname === item.href || 
                (item.href !== "/admin" && pathname.startsWith(item.href))

              return (
                <Link
                  key={item.name}
                  href={item.href}
                  className={cn(
                    "flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium transition-colors relative",
                    isActive
                      ? "bg-primary-800/50 text-white"
                      : "text-primary-300 hover:text-white hover:bg-primary-800/30"
                  )}
                >
                  {isActive && (
                    <motion.div
                      layoutId="activeNav"
                      className="absolute inset-0 bg-primary-700/50 rounded-xl"
                      transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                    />
                  )}
                  <item.icon className="w-5 h-5 relative z-10" />
                  <span className="relative z-10">{item.name}</span>
                </Link>
              )
            })}
          </nav>

          {/* Logout */}
          <div className="p-3 border-t border-primary-800">
            <button
              onClick={() => signOut({ callbackUrl: "/admin/login" })}
              className="flex items-center gap-3 w-full px-3 py-2.5 rounded-xl text-sm font-medium text-primary-300 hover:text-white hover:bg-primary-800/30 transition-colors"
            >
              <LogOut className="w-5 h-5" />
              Sign Out
            </button>
          </div>
        </div>
      </aside>

      {/* Mobile Bottom Nav */}
      <div className="lg:hidden fixed bottom-0 left-0 right-0 bg-primary-950 border-t border-primary-800 z-50">
        <nav className="flex justify-around py-2">
          {navigation.slice(0, 5).map((item) => {
            const isActive = pathname === item.href || 
              (item.href !== "/admin" && pathname.startsWith(item.href))

            return (
              <Link
                key={item.name}
                href={item.href}
                className={cn(
                  "flex flex-col items-center gap-1 px-3 py-2 rounded-lg text-xs transition-colors",
                  isActive
                    ? "text-white"
                    : "text-primary-400"
                )}
              >
                <item.icon className="w-5 h-5" />
                <span>{item.name}</span>
              </Link>
            )
          })}
        </nav>
      </div>
    </>
  )
}
