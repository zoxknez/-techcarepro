import { Suspense } from "react"
import Link from "next/link"
import { 
  Wrench, 
  ShoppingBag, 
  Package, 
  MessageSquare,
  TrendingUp,
  Users,
  Calendar,
  DollarSign,
  ArrowUpRight,
  ArrowDownRight,
  Clock
} from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { prisma } from "@/lib/db"

interface RecentBooking {
  id: string
  trackingCode: string
  customerName: string
  deviceBrand: string
  deviceModel: string
  status: string
  createdAt: Date
}

interface RecentOrder {
  id: string
  total: number
  status: string
  createdAt: Date
  user: { name: string | null; email: string } | null
}

async function getStats(): Promise<{
  totalBookings: number
  pendingBookings: number
  totalOrders: number
  pendingOrders: number
  totalProducts: number
  unreadMessages: number
  recentBookings: RecentBooking[]
  recentOrders: RecentOrder[]
}> {
  const [
    totalBookings,
    pendingBookings,
    totalOrders,
    pendingOrders,
    totalProducts,
    unreadMessages,
    recentBookings,
    recentOrders,
  ] = await Promise.all([
    prisma.booking.count(),
    prisma.booking.count({ where: { status: "PENDING" } }),
    prisma.order.count(),
    prisma.order.count({ where: { status: "PENDING" } }),
    prisma.product.count({ where: { active: true } }),
    prisma.contactMessage.count({ where: { read: false } }),
    prisma.booking.findMany({
      take: 5,
      orderBy: { createdAt: "desc" },
      select: {
        id: true,
        trackingCode: true,
        customerName: true,
        deviceBrand: true,
        deviceModel: true,
        status: true,
        createdAt: true,
      },
    }),
    prisma.order.findMany({
      take: 5,
      orderBy: { createdAt: "desc" },
      include: {
        user: { select: { name: true, email: true } },
      },
    }),
  ])

  return {
    totalBookings,
    pendingBookings,
    totalOrders,
    pendingOrders,
    totalProducts,
    unreadMessages,
    recentBookings,
    recentOrders,
  }
}

const statusColors: Record<string, string> = {
  PENDING: "bg-amber-100 text-amber-700",
  CONFIRMED: "bg-blue-100 text-blue-700",
  IN_PROGRESS: "bg-purple-100 text-purple-700",
  WAITING_PARTS: "bg-orange-100 text-orange-700",
  COMPLETED: "bg-green-100 text-green-700",
  CANCELLED: "bg-red-100 text-red-700",
  PAID: "bg-green-100 text-green-700",
  PROCESSING: "bg-blue-100 text-blue-700",
  SHIPPED: "bg-purple-100 text-purple-700",
  DELIVERED: "bg-green-100 text-green-700",
}

export default async function AdminDashboard() {
  const stats = await getStats()

  return (
    <div className="space-y-8">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold">Dashboard</h1>
        <p className="text-muted-foreground">Welcome back! Here&apos;s what&apos;s happening today.</p>
      </div>

      {/* Stats Grid */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Total Bookings</p>
                <p className="text-3xl font-bold">{stats.totalBookings}</p>
                <p className="text-xs text-amber-600 mt-1">
                  {stats.pendingBookings} pending
                </p>
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
                <p className="text-sm text-muted-foreground">Total Orders</p>
                <p className="text-3xl font-bold">{stats.totalOrders}</p>
                <p className="text-xs text-amber-600 mt-1">
                  {stats.pendingOrders} pending
                </p>
              </div>
              <div className="w-12 h-12 rounded-xl bg-blue-100 flex items-center justify-center">
                <ShoppingBag className="w-6 h-6 text-blue-600" />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Products</p>
                <p className="text-3xl font-bold">{stats.totalProducts}</p>
                <p className="text-xs text-green-600 mt-1">
                  Active in shop
                </p>
              </div>
              <div className="w-12 h-12 rounded-xl bg-green-100 flex items-center justify-center">
                <Package className="w-6 h-6 text-green-600" />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Messages</p>
                <p className="text-3xl font-bold">{stats.unreadMessages}</p>
                <p className="text-xs text-red-600 mt-1">
                  Unread
                </p>
              </div>
              <div className="w-12 h-12 rounded-xl bg-red-100 flex items-center justify-center">
                <MessageSquare className="w-6 h-6 text-red-600" />
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Recent Activity */}
      <div className="grid lg:grid-cols-2 gap-6">
        {/* Recent Bookings */}
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-lg">Recent Bookings</CardTitle>
            <Button variant="ghost" size="sm" asChild>
              <Link href="/admin/bookings">View All</Link>
            </Button>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {stats.recentBookings.length === 0 ? (
                <p className="text-sm text-muted-foreground text-center py-8">
                  No bookings yet
                </p>
              ) : (
                stats.recentBookings.map((booking) => (
                  <div key={booking.id} className="flex items-center justify-between p-3 rounded-xl bg-secondary/50">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-lg bg-white flex items-center justify-center">
                        <Wrench className="w-5 h-5 text-primary-600" />
                      </div>
                      <div>
                        <p className="font-medium text-sm">{booking.deviceBrand} {booking.deviceModel}</p>
                        <p className="text-xs text-muted-foreground">{booking.customerName}</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <Badge className={statusColors[booking.status] || "bg-gray-100"} variant="secondary">
                        {booking.status.replace("_", " ")}
                      </Badge>
                      <p className="text-xs text-muted-foreground mt-1">
                        {new Date(booking.createdAt).toLocaleDateString()}
                      </p>
                    </div>
                  </div>
                ))
              )}
            </div>
          </CardContent>
        </Card>

        {/* Recent Orders */}
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-lg">Recent Orders</CardTitle>
            <Button variant="ghost" size="sm" asChild>
              <Link href="/admin/orders">View All</Link>
            </Button>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {stats.recentOrders.length === 0 ? (
                <p className="text-sm text-muted-foreground text-center py-8">
                  No orders yet
                </p>
              ) : (
                stats.recentOrders.map((order) => (
                  <div key={order.id} className="flex items-center justify-between p-3 rounded-xl bg-secondary/50">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-lg bg-white flex items-center justify-center">
                        <ShoppingBag className="w-5 h-5 text-primary-600" />
                      </div>
                      <div>
                        <p className="font-medium text-sm">${order.total.toFixed(2)}</p>
                        <p className="text-xs text-muted-foreground">{order.user?.name || order.user?.email}</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <Badge className={statusColors[order.status] || "bg-gray-100"} variant="secondary">
                        {order.status}
                      </Badge>
                      <p className="text-xs text-muted-foreground mt-1">
                        {new Date(order.createdAt).toLocaleDateString()}
                      </p>
                    </div>
                  </div>
                ))
              )}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Quick Actions */}
      <Card>
        <CardHeader>
          <CardTitle className="text-lg">Quick Actions</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <Link href="/admin/bookings" className="p-4 rounded-xl border hover:border-primary-300 hover:bg-primary-50 transition-colors group">
              <Wrench className="w-8 h-8 text-primary-600 mb-2" />
              <h3 className="font-semibold group-hover:text-primary-600">Manage Bookings</h3>
              <p className="text-sm text-muted-foreground">View and update repairs</p>
            </Link>
            <Link href="/admin/orders" className="p-4 rounded-xl border hover:border-primary-300 hover:bg-primary-50 transition-colors group">
              <ShoppingBag className="w-8 h-8 text-primary-600 mb-2" />
              <h3 className="font-semibold group-hover:text-primary-600">Process Orders</h3>
              <p className="text-sm text-muted-foreground">Ship and track orders</p>
            </Link>
            <Link href="/admin/products" className="p-4 rounded-xl border hover:border-primary-300 hover:bg-primary-50 transition-colors group">
              <Package className="w-8 h-8 text-primary-600 mb-2" />
              <h3 className="font-semibold group-hover:text-primary-600">Add Products</h3>
              <p className="text-sm text-muted-foreground">Manage inventory</p>
            </Link>
            <Link href="/admin/messages" className="p-4 rounded-xl border hover:border-primary-300 hover:bg-primary-50 transition-colors group">
              <MessageSquare className="w-8 h-8 text-primary-600 mb-2" />
              <h3 className="font-semibold group-hover:text-primary-600">View Messages</h3>
              <p className="text-sm text-muted-foreground">Reply to inquiries</p>
            </Link>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
