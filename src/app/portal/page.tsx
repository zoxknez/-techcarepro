"use client"

import { useState } from "react"
import Link from "next/link"
import { motion } from "framer-motion"
import { 
  User, 
  Package, 
  Clock, 
  FileText, 
  Settings, 
  LogOut,
  Wrench,
  ShoppingBag,
  Calendar,
  ChevronRight,
  Search,
  Bell,
  CheckCircle2,
  AlertCircle,
  ArrowRight
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { cn } from "@/lib/utils"

const sidebarItems = [
  { icon: Package, label: "Dashboard", href: "/portal", active: true },
  { icon: Wrench, label: "My Repairs", href: "/portal/repairs" },
  { icon: ShoppingBag, label: "Orders", href: "/portal/orders" },
  { icon: FileText, label: "Invoices", href: "/portal/invoices" },
  { icon: Calendar, label: "Appointments", href: "/portal/appointments" },
  { icon: Settings, label: "Settings", href: "/portal/settings" },
]

const recentRepairs = [
  { id: "REP-2024-1234", device: "HP LaserJet Pro M404", status: "IN_PROGRESS", date: "Dec 8, 2024" },
  { id: "REP-2024-1198", device: "Brother MFC-L2750DW", status: "COMPLETED", date: "Dec 2, 2024" },
  { id: "REP-2024-1156", device: "Dell Latitude 5520", status: "COMPLETED", date: "Nov 25, 2024" },
]

const recentOrders = [
  { id: "ORD-2024-0089", items: "HP 206A Toner Set (4)", total: 389.96, status: "Shipped", date: "Dec 5, 2024" },
  { id: "ORD-2024-0076", items: "Brother DR-2425 Drum", total: 129.99, status: "Delivered", date: "Nov 28, 2024" },
]

const statusColors: Record<string, string> = {
  PENDING: "bg-amber-100 text-amber-700",
  CONFIRMED: "bg-blue-100 text-blue-700",
  IN_PROGRESS: "bg-purple-100 text-purple-700",
  COMPLETED: "bg-green-100 text-green-700",
  Shipped: "bg-blue-100 text-blue-700",
  Delivered: "bg-green-100 text-green-700",
}

export default function PortalPage() {
  const [isLoggedIn] = useState(false)

  if (!isLoggedIn) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-primary-50 via-white to-accent-50 flex items-center justify-center p-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="w-full max-w-md"
        >
          <Card>
            <CardContent className="p-8">
              <div className="text-center mb-8">
                <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-br from-primary-500 to-accent-500 flex items-center justify-center">
                  <User className="w-8 h-8 text-white" />
                </div>
                <h1 className="text-2xl font-bold mb-2">Customer Portal</h1>
                <p className="text-muted-foreground">
                  Sign in to manage your repairs, orders, and account
                </p>
              </div>

              <form className="space-y-4">
                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2">
                    Email Address
                  </label>
                  <Input id="email" type="email" placeholder="john@example.com" />
                </div>
                <div>
                  <label htmlFor="password" className="block text-sm font-medium mb-2">
                    Password
                  </label>
                  <Input id="password" type="password" placeholder="••••••••" />
                </div>
                <div className="flex items-center justify-between text-sm">
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input type="checkbox" className="rounded" />
                    <span>Remember me</span>
                  </label>
                  <a href="#" className="text-primary-600 hover:underline">
                    Forgot password?
                  </a>
                </div>
                <Button type="submit" className="w-full">
                  Sign In
                </Button>
              </form>

              <div className="mt-6 text-center text-sm text-muted-foreground">
                Don&apos;t have an account?{" "}
                <a href="#" className="text-primary-600 hover:underline font-medium">
                  Create one
                </a>
              </div>

              <div className="mt-8 pt-6 border-t">
                <p className="text-sm text-muted-foreground text-center mb-4">
                  Or track your repair without signing in
                </p>
                <Button variant="outline" className="w-full" asChild>
                  <Link href="/track">
                    <Search className="w-4 h-4 mr-2" />
                    Track Repair Status
                  </Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    )
  }

  // Dashboard view for logged-in users
  return (
    <div className="min-h-screen bg-secondary/30">
      <div className="flex">
        {/* Sidebar */}
        <aside className="hidden lg:flex flex-col w-64 bg-white border-r min-h-screen">
          <div className="p-6 border-b">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-primary-100 flex items-center justify-center">
                <User className="w-5 h-5 text-primary-600" />
              </div>
              <div>
                <p className="font-semibold">John Smith</p>
                <p className="text-xs text-muted-foreground">john@company.co.nz</p>
              </div>
            </div>
          </div>
          
          <nav className="flex-1 p-4">
            <ul className="space-y-1">
              {sidebarItems.map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className={cn(
                      "flex items-center gap-3 px-4 py-3 rounded-xl transition-colors",
                      item.active
                        ? "bg-primary-50 text-primary-600"
                        : "hover:bg-secondary"
                    )}
                  >
                    <item.icon className="w-5 h-5" />
                    <span className="font-medium">{item.label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className="p-4 border-t">
            <button className="flex items-center gap-3 px-4 py-3 w-full rounded-xl hover:bg-secondary transition-colors text-muted-foreground">
              <LogOut className="w-5 h-5" />
              <span className="font-medium">Sign Out</span>
            </button>
          </div>
        </aside>

        {/* Main Content */}
        <main className="flex-1">
          {/* Header */}
          <header className="bg-white border-b px-6 py-4">
            <div className="flex items-center justify-between">
              <div>
                <h1 className="text-2xl font-bold">Welcome back, John</h1>
                <p className="text-muted-foreground">Here&apos;s what&apos;s happening with your account</p>
              </div>
              <div className="flex items-center gap-4">
                <button className="relative p-2 rounded-xl hover:bg-secondary transition-colors">
                  <Bell className="w-5 h-5" />
                  <span className="absolute top-1 right-1 w-2 h-2 rounded-full bg-red-500" />
                </button>
                <Button asChild>
                  <Link href="/booking">
                    <Wrench className="w-4 h-4 mr-2" />
                    Book Repair
                  </Link>
                </Button>
              </div>
            </div>
          </header>

          <div className="p-6">
            {/* Quick Stats */}
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-muted-foreground">Active Repairs</p>
                      <p className="text-3xl font-bold">1</p>
                    </div>
                    <div className="w-12 h-12 rounded-xl bg-purple-100 flex items-center justify-center">
                      <Wrench className="w-6 h-6 text-purple-600" />
                    </div>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-muted-foreground">Total Repairs</p>
                      <p className="text-3xl font-bold">12</p>
                    </div>
                    <div className="w-12 h-12 rounded-xl bg-green-100 flex items-center justify-center">
                      <CheckCircle2 className="w-6 h-6 text-green-600" />
                    </div>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-muted-foreground">Pending Orders</p>
                      <p className="text-3xl font-bold">1</p>
                    </div>
                    <div className="w-12 h-12 rounded-xl bg-blue-100 flex items-center justify-center">
                      <Package className="w-6 h-6 text-blue-600" />
                    </div>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-muted-foreground">Next Appointment</p>
                      <p className="text-lg font-bold">Dec 15</p>
                    </div>
                    <div className="w-12 h-12 rounded-xl bg-amber-100 flex items-center justify-center">
                      <Calendar className="w-6 h-6 text-amber-600" />
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="grid lg:grid-cols-2 gap-6">
              {/* Recent Repairs */}
              <Card>
                <CardHeader className="flex flex-row items-center justify-between">
                  <CardTitle>Recent Repairs</CardTitle>
                  <Button variant="ghost" size="sm">
                    View All <ChevronRight className="w-4 h-4 ml-1" />
                  </Button>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {recentRepairs.map((repair) => (
                      <div key={repair.id} className="flex items-center justify-between p-4 rounded-xl bg-secondary/50">
                        <div className="flex items-center gap-4">
                          <div className="w-10 h-10 rounded-xl bg-white flex items-center justify-center">
                            <Wrench className="w-5 h-5 text-primary-600" />
                          </div>
                          <div>
                            <p className="font-medium">{repair.device}</p>
                            <p className="text-sm text-muted-foreground">{repair.id}</p>
                          </div>
                        </div>
                        <div className="text-right">
                          <Badge className={statusColors[repair.status]}>
                            {repair.status.replace("_", " ")}
                          </Badge>
                          <p className="text-xs text-muted-foreground mt-1">{repair.date}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Recent Orders */}
              <Card>
                <CardHeader className="flex flex-row items-center justify-between">
                  <CardTitle>Recent Orders</CardTitle>
                  <Button variant="ghost" size="sm">
                    View All <ChevronRight className="w-4 h-4 ml-1" />
                  </Button>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {recentOrders.map((order) => (
                      <div key={order.id} className="flex items-center justify-between p-4 rounded-xl bg-secondary/50">
                        <div className="flex items-center gap-4">
                          <div className="w-10 h-10 rounded-xl bg-white flex items-center justify-center">
                            <ShoppingBag className="w-5 h-5 text-primary-600" />
                          </div>
                          <div>
                            <p className="font-medium">{order.items}</p>
                            <p className="text-sm text-muted-foreground">{order.id}</p>
                          </div>
                        </div>
                        <div className="text-right">
                          <Badge className={statusColors[order.status]}>
                            {order.status}
                          </Badge>
                          <p className="text-sm font-semibold mt-1">${order.total.toFixed(2)}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Quick Actions */}
            <Card className="mt-6">
              <CardHeader>
                <CardTitle>Quick Actions</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
                  <Link href="/booking" className="p-4 rounded-xl border hover:border-primary-300 hover:bg-primary-50 transition-colors group">
                    <Wrench className="w-8 h-8 text-primary-600 mb-3" />
                    <h3 className="font-semibold mb-1 group-hover:text-primary-600">Book Repair</h3>
                    <p className="text-sm text-muted-foreground">Schedule a new repair</p>
                  </Link>
                  <Link href="/shop" className="p-4 rounded-xl border hover:border-primary-300 hover:bg-primary-50 transition-colors group">
                    <ShoppingBag className="w-8 h-8 text-primary-600 mb-3" />
                    <h3 className="font-semibold mb-1 group-hover:text-primary-600">Shop Supplies</h3>
                    <p className="text-sm text-muted-foreground">Order consumables</p>
                  </Link>
                  <Link href="/track" className="p-4 rounded-xl border hover:border-primary-300 hover:bg-primary-50 transition-colors group">
                    <Clock className="w-8 h-8 text-primary-600 mb-3" />
                    <h3 className="font-semibold mb-1 group-hover:text-primary-600">Track Repair</h3>
                    <p className="text-sm text-muted-foreground">Check repair status</p>
                  </Link>
                  <Link href="/contact" className="p-4 rounded-xl border hover:border-primary-300 hover:bg-primary-50 transition-colors group">
                    <AlertCircle className="w-8 h-8 text-primary-600 mb-3" />
                    <h3 className="font-semibold mb-1 group-hover:text-primary-600">Get Support</h3>
                    <p className="text-sm text-muted-foreground">Contact our team</p>
                  </Link>
                </div>
              </CardContent>
            </Card>
          </div>
        </main>
      </div>
    </div>
  )
}
