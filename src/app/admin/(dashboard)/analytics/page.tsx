"use client"

import { useState } from "react"
import { 
  BarChart3, 
  TrendingUp, 
  TrendingDown,
  DollarSign,
  Package,
  Wrench,
  Users,
  Calendar,
  ArrowUpRight,
  ArrowDownRight,
  Eye,
  ShoppingCart,
  Clock
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { formatPrice } from "@/lib/utils"

// Mock analytics data
const overviewStats = {
  revenue: {
    value: 24850.00,
    change: 12.5,
    trend: "up",
  },
  orders: {
    value: 156,
    change: 8.2,
    trend: "up",
  },
  repairs: {
    value: 89,
    change: -3.1,
    trend: "down",
  },
  customers: {
    value: 42,
    change: 15.7,
    trend: "up",
  },
}

const revenueByCategory = [
  { category: "Toner Cartridges", revenue: 12450, percentage: 50 },
  { category: "Ink Cartridges", revenue: 5680, percentage: 23 },
  { category: "Printer Repairs", revenue: 4200, percentage: 17 },
  { category: "Computer Repairs", revenue: 1820, percentage: 7 },
  { category: "Other Services", revenue: 700, percentage: 3 },
]

const topProducts = [
  { name: "HP 206A Black Toner", sold: 45, revenue: 4050 },
  { name: "Brother TN-2450 Toner", sold: 38, revenue: 3040 },
  { name: "Canon PG-645XL Black Ink", sold: 52, revenue: 1820 },
  { name: "Epson 212XL Multipack", sold: 22, revenue: 1980 },
  { name: "HP 206A Cyan Toner", sold: 18, revenue: 1800 },
]

const topServices = [
  { name: "Laser Printer Repair", count: 24, revenue: 2880 },
  { name: "Virus Removal", count: 18, revenue: 1782 },
  { name: "Screen Replacement", count: 15, revenue: 2235 },
  { name: "Copier Service", count: 12, revenue: 1788 },
  { name: "Data Recovery", count: 8, revenue: 1192 },
]

const recentActivity = [
  { type: "order", message: "New order #ORD-1234 from John Smith", time: "5 min ago" },
  { type: "booking", message: "Booking #REP-5678 completed", time: "15 min ago" },
  { type: "customer", message: "New customer registered", time: "1 hour ago" },
  { type: "order", message: "Order #ORD-1230 shipped", time: "2 hours ago" },
  { type: "booking", message: "New booking #REP-5680 received", time: "3 hours ago" },
]

const weeklyData = [
  { day: "Mon", orders: 12, revenue: 1850 },
  { day: "Tue", orders: 18, revenue: 2420 },
  { day: "Wed", orders: 15, revenue: 2100 },
  { day: "Thu", orders: 22, revenue: 3200 },
  { day: "Fri", orders: 28, revenue: 4100 },
  { day: "Sat", orders: 8, revenue: 980 },
  { day: "Sun", orders: 5, revenue: 650 },
]

export default function AdminAnalyticsPage() {
  const [dateRange, setDateRange] = useState("7d")
  
  const maxRevenue = Math.max(...weeklyData.map(d => d.revenue))

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold">Analytics</h1>
          <p className="text-muted-foreground">Track your business performance</p>
        </div>
        <div className="flex gap-2">
          <Select value={dateRange} onValueChange={setDateRange}>
            <SelectTrigger className="w-40">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="7d">Last 7 days</SelectItem>
              <SelectItem value="30d">Last 30 days</SelectItem>
              <SelectItem value="90d">Last 90 days</SelectItem>
              <SelectItem value="12m">Last 12 months</SelectItem>
            </SelectContent>
          </Select>
          <Button variant="outline">
            <Calendar className="w-4 h-4 mr-2" />
            Custom Range
          </Button>
        </div>
      </div>
      
      {/* Overview Stats */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div className="p-2 rounded-lg bg-green-100">
                <DollarSign className="w-5 h-5 text-green-600" />
              </div>
              <Badge 
                variant="secondary" 
                className={overviewStats.revenue.trend === "up" ? "bg-green-100 text-green-700" : "bg-red-100 text-red-700"}
              >
                {overviewStats.revenue.trend === "up" ? <ArrowUpRight className="w-3 h-3 mr-1" /> : <ArrowDownRight className="w-3 h-3 mr-1" />}
                {overviewStats.revenue.change}%
              </Badge>
            </div>
            <div className="mt-3">
              <p className="text-2xl font-bold">{formatPrice(overviewStats.revenue.value)}</p>
              <p className="text-sm text-muted-foreground">Total Revenue</p>
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div className="p-2 rounded-lg bg-blue-100">
                <Package className="w-5 h-5 text-blue-600" />
              </div>
              <Badge 
                variant="secondary" 
                className={overviewStats.orders.trend === "up" ? "bg-green-100 text-green-700" : "bg-red-100 text-red-700"}
              >
                {overviewStats.orders.trend === "up" ? <ArrowUpRight className="w-3 h-3 mr-1" /> : <ArrowDownRight className="w-3 h-3 mr-1" />}
                {overviewStats.orders.change}%
              </Badge>
            </div>
            <div className="mt-3">
              <p className="text-2xl font-bold">{overviewStats.orders.value}</p>
              <p className="text-sm text-muted-foreground">Orders</p>
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div className="p-2 rounded-lg bg-purple-100">
                <Wrench className="w-5 h-5 text-purple-600" />
              </div>
              <Badge 
                variant="secondary" 
                className={overviewStats.repairs.trend === "up" ? "bg-green-100 text-green-700" : "bg-red-100 text-red-700"}
              >
                {overviewStats.repairs.trend === "up" ? <ArrowUpRight className="w-3 h-3 mr-1" /> : <ArrowDownRight className="w-3 h-3 mr-1" />}
                {Math.abs(overviewStats.repairs.change)}%
              </Badge>
            </div>
            <div className="mt-3">
              <p className="text-2xl font-bold">{overviewStats.repairs.value}</p>
              <p className="text-sm text-muted-foreground">Repairs</p>
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div className="p-2 rounded-lg bg-orange-100">
                <Users className="w-5 h-5 text-orange-600" />
              </div>
              <Badge 
                variant="secondary" 
                className={overviewStats.customers.trend === "up" ? "bg-green-100 text-green-700" : "bg-red-100 text-red-700"}
              >
                {overviewStats.customers.trend === "up" ? <ArrowUpRight className="w-3 h-3 mr-1" /> : <ArrowDownRight className="w-3 h-3 mr-1" />}
                {overviewStats.customers.change}%
              </Badge>
            </div>
            <div className="mt-3">
              <p className="text-2xl font-bold">{overviewStats.customers.value}</p>
              <p className="text-sm text-muted-foreground">New Customers</p>
            </div>
          </CardContent>
        </Card>
      </div>
      
      {/* Charts Row */}
      <div className="grid lg:grid-cols-2 gap-6">
        {/* Weekly Revenue Chart */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <BarChart3 className="w-5 h-5" />
              Weekly Revenue
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {weeklyData.map((day) => (
                <div key={day.day} className="flex items-center gap-4">
                  <span className="w-10 text-sm text-muted-foreground">{day.day}</span>
                  <div className="flex-1 h-8 bg-gray-100 rounded-lg overflow-hidden">
                    <div 
                      className="h-full bg-gradient-to-r from-primary-500 to-accent-500 rounded-lg flex items-center justify-end pr-2"
                      style={{ width: `${(day.revenue / maxRevenue) * 100}%` }}
                    >
                      <span className="text-xs text-white font-medium">{formatPrice(day.revenue)}</span>
                    </div>
                  </div>
                  <span className="w-12 text-sm text-muted-foreground text-right">{day.orders}</span>
                </div>
              ))}
            </div>
            <div className="flex justify-between mt-4 pt-4 border-t text-sm text-muted-foreground">
              <span>Total: {formatPrice(weeklyData.reduce((sum, d) => sum + d.revenue, 0))}</span>
              <span>{weeklyData.reduce((sum, d) => sum + d.orders, 0)} orders</span>
            </div>
          </CardContent>
        </Card>
        
        {/* Revenue by Category */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <TrendingUp className="w-5 h-5" />
              Revenue by Category
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {revenueByCategory.map((cat, index) => (
                <div key={cat.category} className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span>{cat.category}</span>
                    <span className="font-medium">{formatPrice(cat.revenue)}</span>
                  </div>
                  <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                    <div 
                      className={`h-full rounded-full ${
                        index === 0 ? "bg-blue-500" :
                        index === 1 ? "bg-green-500" :
                        index === 2 ? "bg-purple-500" :
                        index === 3 ? "bg-orange-500" :
                        "bg-gray-400"
                      }`}
                      style={{ width: `${cat.percentage}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
      
      {/* Bottom Row */}
      <div className="grid lg:grid-cols-3 gap-6">
        {/* Top Products */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <ShoppingCart className="w-5 h-5" />
              Top Products
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {topProducts.map((product, index) => (
                <div key={product.name} className="flex items-center gap-3">
                  <span className="w-6 h-6 rounded-full bg-primary-100 text-primary-600 flex items-center justify-center text-sm font-medium">
                    {index + 1}
                  </span>
                  <div className="flex-1 min-w-0">
                    <p className="font-medium truncate">{product.name}</p>
                    <p className="text-sm text-muted-foreground">{product.sold} sold</p>
                  </div>
                  <span className="font-medium">{formatPrice(product.revenue)}</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
        
        {/* Top Services */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Wrench className="w-5 h-5" />
              Top Services
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {topServices.map((service, index) => (
                <div key={service.name} className="flex items-center gap-3">
                  <span className="w-6 h-6 rounded-full bg-purple-100 text-purple-600 flex items-center justify-center text-sm font-medium">
                    {index + 1}
                  </span>
                  <div className="flex-1 min-w-0">
                    <p className="font-medium truncate">{service.name}</p>
                    <p className="text-sm text-muted-foreground">{service.count} jobs</p>
                  </div>
                  <span className="font-medium">{formatPrice(service.revenue)}</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
        
        {/* Recent Activity */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Clock className="w-5 h-5" />
              Recent Activity
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {recentActivity.map((activity, index) => (
                <div key={index} className="flex items-start gap-3">
                  <div className={`w-2 h-2 rounded-full mt-2 ${
                    activity.type === "order" ? "bg-blue-500" :
                    activity.type === "booking" ? "bg-purple-500" :
                    "bg-green-500"
                  }`} />
                  <div className="flex-1 min-w-0">
                    <p className="text-sm">{activity.message}</p>
                    <p className="text-xs text-muted-foreground">{activity.time}</p>
                  </div>
                </div>
              ))}
            </div>
            <Button variant="outline" className="w-full mt-4" size="sm">
              <Eye className="w-4 h-4 mr-2" />
              View All Activity
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
