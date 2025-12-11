"use client"

import { useState } from "react"
import { 
  Users, 
  Search, 
  Filter,
  Mail,
  Phone,
  MapPin,
  MoreHorizontal,
  Eye,
  Edit,
  Trash2,
  Download,
  UserPlus,
  Package,
  Wrench,
  Calendar
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { formatPrice } from "@/lib/utils"

// Mock customers data
const mockCustomers = [
  {
    id: "1",
    name: "John Smith",
    email: "john.smith@example.com",
    phone: "021 123 4567",
    address: "123 Queen St, Auckland CBD",
    totalOrders: 5,
    totalBookings: 3,
    totalSpent: 1250.00,
    lastActivity: "2024-12-10",
    status: "active",
  },
  {
    id: "2",
    name: "Sarah Johnson",
    email: "sarah.j@company.co.nz",
    phone: "022 987 6543",
    address: "45 Victoria St, Devonport",
    totalOrders: 12,
    totalBookings: 8,
    totalSpent: 4580.00,
    lastActivity: "2024-12-09",
    status: "active",
  },
  {
    id: "3",
    name: "Mike Williams",
    email: "mike.w@gmail.com",
    phone: "027 555 1234",
    address: "78 Ponsonby Rd, Ponsonby",
    totalOrders: 2,
    totalBookings: 1,
    totalSpent: 320.00,
    lastActivity: "2024-11-28",
    status: "active",
  },
  {
    id: "4",
    name: "Emma Brown",
    email: "emma.brown@business.com",
    phone: "021 777 8888",
    address: "12 Parnell Rise, Parnell",
    totalOrders: 8,
    totalBookings: 15,
    totalSpent: 6720.00,
    lastActivity: "2024-12-11",
    status: "vip",
  },
  {
    id: "5",
    name: "David Lee",
    email: "david.lee@outlook.com",
    phone: "022 333 4444",
    address: "56 Broadway, Newmarket",
    totalOrders: 1,
    totalBookings: 0,
    totalSpent: 89.99,
    lastActivity: "2024-10-15",
    status: "inactive",
  },
]

const getStatusBadge = (status: string) => {
  switch (status) {
    case "vip":
      return <Badge className="bg-purple-100 text-purple-700 hover:bg-purple-100">VIP</Badge>
    case "active":
      return <Badge className="bg-green-100 text-green-700 hover:bg-green-100">Active</Badge>
    case "inactive":
      return <Badge className="bg-gray-100 text-gray-700 hover:bg-gray-100">Inactive</Badge>
    default:
      return <Badge variant="secondary">{status}</Badge>
  }
}

export default function AdminCustomersPage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [statusFilter, setStatusFilter] = useState("all")
  
  const filteredCustomers = mockCustomers.filter(customer => {
    const matchesSearch = 
      customer.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      customer.email.toLowerCase().includes(searchQuery.toLowerCase()) ||
      customer.phone.includes(searchQuery)
    
    const matchesStatus = statusFilter === "all" || customer.status === statusFilter
    
    return matchesSearch && matchesStatus
  })
  
  const stats = {
    total: mockCustomers.length,
    active: mockCustomers.filter(c => c.status === "active").length,
    vip: mockCustomers.filter(c => c.status === "vip").length,
    totalRevenue: mockCustomers.reduce((sum, c) => sum + c.totalSpent, 0),
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold">Customers</h1>
          <p className="text-muted-foreground">Manage your customer database</p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline">
            <Download className="w-4 h-4 mr-2" />
            Export
          </Button>
          <Button>
            <UserPlus className="w-4 h-4 mr-2" />
            Add Customer
          </Button>
        </div>
      </div>
      
      {/* Stats */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-lg bg-blue-100">
                <Users className="w-5 h-5 text-blue-600" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Total Customers</p>
                <p className="text-2xl font-bold">{stats.total}</p>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-lg bg-green-100">
                <Users className="w-5 h-5 text-green-600" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Active</p>
                <p className="text-2xl font-bold">{stats.active}</p>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-lg bg-purple-100">
                <Users className="w-5 h-5 text-purple-600" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">VIP</p>
                <p className="text-2xl font-bold">{stats.vip}</p>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-lg bg-emerald-100">
                <Package className="w-5 h-5 text-emerald-600" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Total Revenue</p>
                <p className="text-2xl font-bold">{formatPrice(stats.totalRevenue)}</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
      
      {/* Filters */}
      <Card>
        <CardContent className="p-4">
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
              <Input
                placeholder="Search by name, email, or phone..."
                className="pl-9"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline">
                  <Filter className="w-4 h-4 mr-2" />
                  Status: {statusFilter === "all" ? "All" : statusFilter}
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuItem onClick={() => setStatusFilter("all")}>All</DropdownMenuItem>
                <DropdownMenuItem onClick={() => setStatusFilter("active")}>Active</DropdownMenuItem>
                <DropdownMenuItem onClick={() => setStatusFilter("vip")}>VIP</DropdownMenuItem>
                <DropdownMenuItem onClick={() => setStatusFilter("inactive")}>Inactive</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </CardContent>
      </Card>
      
      {/* Customers List */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Users className="w-5 h-5" />
            Customer List ({filteredCustomers.length})
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b text-left">
                  <th className="pb-3 font-medium text-muted-foreground">Customer</th>
                  <th className="pb-3 font-medium text-muted-foreground hidden md:table-cell">Contact</th>
                  <th className="pb-3 font-medium text-muted-foreground text-center">Orders</th>
                  <th className="pb-3 font-medium text-muted-foreground text-center">Repairs</th>
                  <th className="pb-3 font-medium text-muted-foreground text-right">Total Spent</th>
                  <th className="pb-3 font-medium text-muted-foreground text-center">Status</th>
                  <th className="pb-3 font-medium text-muted-foreground text-right">Actions</th>
                </tr>
              </thead>
              <tbody>
                {filteredCustomers.map((customer) => (
                  <tr key={customer.id} className="border-b last:border-0 hover:bg-gray-50">
                    <td className="py-4">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full bg-primary-100 flex items-center justify-center">
                          <span className="text-primary-600 font-medium">
                            {customer.name.split(" ").map(n => n[0]).join("")}
                          </span>
                        </div>
                        <div>
                          <p className="font-medium">{customer.name}</p>
                          <p className="text-sm text-muted-foreground md:hidden">{customer.email}</p>
                        </div>
                      </div>
                    </td>
                    <td className="py-4 hidden md:table-cell">
                      <div className="space-y-1">
                        <div className="flex items-center gap-2 text-sm">
                          <Mail className="w-3 h-3 text-muted-foreground" />
                          <span>{customer.email}</span>
                        </div>
                        <div className="flex items-center gap-2 text-sm text-muted-foreground">
                          <Phone className="w-3 h-3" />
                          <span>{customer.phone}</span>
                        </div>
                      </div>
                    </td>
                    <td className="py-4 text-center">
                      <div className="flex items-center justify-center gap-1">
                        <Package className="w-4 h-4 text-muted-foreground" />
                        <span>{customer.totalOrders}</span>
                      </div>
                    </td>
                    <td className="py-4 text-center">
                      <div className="flex items-center justify-center gap-1">
                        <Wrench className="w-4 h-4 text-muted-foreground" />
                        <span>{customer.totalBookings}</span>
                      </div>
                    </td>
                    <td className="py-4 text-right font-medium">
                      {formatPrice(customer.totalSpent)}
                    </td>
                    <td className="py-4 text-center">
                      {getStatusBadge(customer.status)}
                    </td>
                    <td className="py-4 text-right">
                      <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                          <Button variant="ghost" size="icon">
                            <MoreHorizontal className="w-4 h-4" />
                          </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end">
                          <DropdownMenuItem>
                            <Eye className="w-4 h-4 mr-2" />
                            View Profile
                          </DropdownMenuItem>
                          <DropdownMenuItem>
                            <Edit className="w-4 h-4 mr-2" />
                            Edit
                          </DropdownMenuItem>
                          <DropdownMenuItem>
                            <Mail className="w-4 h-4 mr-2" />
                            Send Email
                          </DropdownMenuItem>
                          <DropdownMenuSeparator />
                          <DropdownMenuItem className="text-red-600">
                            <Trash2 className="w-4 h-4 mr-2" />
                            Delete
                          </DropdownMenuItem>
                        </DropdownMenuContent>
                      </DropdownMenu>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            
            {filteredCustomers.length === 0 && (
              <div className="text-center py-12">
                <Users className="w-12 h-12 text-muted-foreground mx-auto mb-4" />
                <p className="text-muted-foreground">No customers found</p>
              </div>
            )}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
