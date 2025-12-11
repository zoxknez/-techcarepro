"use client"

import { useState } from "react"
import { 
  Settings, 
  Store, 
  Bell, 
  Shield, 
  Mail,
  Save,
  Loader2
} from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"

export default function AdminSettingsPage() {
  const [isLoading, setIsLoading] = useState(false)

  const [settings, setSettings] = useState({
    siteName: "TechCare Pro",
    siteDescription: "Expert Device Repairs & Premium Printer Supplies",
    contactEmail: "info@techcarepro.co.nz",
    contactPhone: "(09) 123 4567",
    address: "123 Tech Street, Auckland CBD, Auckland 1010",
    businessHours: "Mon-Fri: 8:00 AM - 6:00 PM, Sat: 9:00 AM - 2:00 PM",
    freeShippingThreshold: "100",
    taxRate: "15",
  })

  const handleSave = async () => {
    setIsLoading(true)
    // Simulate save
    await new Promise(resolve => setTimeout(resolve, 1000))
    setIsLoading(false)
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold">Settings</h1>
          <p className="text-muted-foreground">Manage your store settings</p>
        </div>
        <Button onClick={handleSave} disabled={isLoading}>
          {isLoading ? (
            <Loader2 className="w-4 h-4 mr-2 animate-spin" />
          ) : (
            <Save className="w-4 h-4 mr-2" />
          )}
          Save Changes
        </Button>
      </div>

      {/* General Settings */}
      <Card>
        <CardHeader>
          <div className="flex items-center gap-2">
            <Store className="w-5 h-5 text-primary-600" />
            <CardTitle>General Settings</CardTitle>
          </div>
          <CardDescription>Basic information about your store</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <Label htmlFor="siteName">Site Name</Label>
              <Input
                id="siteName"
                value={settings.siteName}
                onChange={(e) => setSettings(s => ({ ...s, siteName: e.target.value }))}
              />
            </div>
            <div>
              <Label htmlFor="contactEmail">Contact Email</Label>
              <Input
                id="contactEmail"
                type="email"
                value={settings.contactEmail}
                onChange={(e) => setSettings(s => ({ ...s, contactEmail: e.target.value }))}
              />
            </div>
          </div>
          <div>
            <Label htmlFor="siteDescription">Site Description</Label>
            <Textarea
              id="siteDescription"
              value={settings.siteDescription}
              onChange={(e) => setSettings(s => ({ ...s, siteDescription: e.target.value }))}
            />
          </div>
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <Label htmlFor="contactPhone">Phone Number</Label>
              <Input
                id="contactPhone"
                value={settings.contactPhone}
                onChange={(e) => setSettings(s => ({ ...s, contactPhone: e.target.value }))}
              />
            </div>
            <div>
              <Label htmlFor="businessHours">Business Hours</Label>
              <Input
                id="businessHours"
                value={settings.businessHours}
                onChange={(e) => setSettings(s => ({ ...s, businessHours: e.target.value }))}
              />
            </div>
          </div>
          <div>
            <Label htmlFor="address">Address</Label>
            <Textarea
              id="address"
              value={settings.address}
              onChange={(e) => setSettings(s => ({ ...s, address: e.target.value }))}
            />
          </div>
        </CardContent>
      </Card>

      {/* Shop Settings */}
      <Card>
        <CardHeader>
          <div className="flex items-center gap-2">
            <Settings className="w-5 h-5 text-primary-600" />
            <CardTitle>Shop Settings</CardTitle>
          </div>
          <CardDescription>Configure shop and checkout settings</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <Label htmlFor="freeShippingThreshold">Free Shipping Threshold ($)</Label>
              <Input
                id="freeShippingThreshold"
                type="number"
                value={settings.freeShippingThreshold}
                onChange={(e) => setSettings(s => ({ ...s, freeShippingThreshold: e.target.value }))}
              />
              <p className="text-xs text-muted-foreground mt-1">Orders above this amount get free shipping</p>
            </div>
            <div>
              <Label htmlFor="taxRate">GST Rate (%)</Label>
              <Input
                id="taxRate"
                type="number"
                value={settings.taxRate}
                onChange={(e) => setSettings(s => ({ ...s, taxRate: e.target.value }))}
              />
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Email Settings */}
      <Card>
        <CardHeader>
          <div className="flex items-center gap-2">
            <Mail className="w-5 h-5 text-primary-600" />
            <CardTitle>Email Settings</CardTitle>
          </div>
          <CardDescription>Configure email notifications</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="p-4 rounded-xl bg-amber-50 border border-amber-200">
            <p className="text-sm text-amber-700">
              Email notifications will be configured when the Resend API key is provided.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="p-4 rounded-xl border">
              <div className="flex items-center justify-between mb-2">
                <h4 className="font-medium">New Booking Notification</h4>
                <input type="checkbox" defaultChecked className="w-4 h-4" />
              </div>
              <p className="text-sm text-muted-foreground">Get notified when a new booking is made</p>
            </div>
            <div className="p-4 rounded-xl border">
              <div className="flex items-center justify-between mb-2">
                <h4 className="font-medium">New Order Notification</h4>
                <input type="checkbox" defaultChecked className="w-4 h-4" />
              </div>
              <p className="text-sm text-muted-foreground">Get notified when a new order is placed</p>
            </div>
            <div className="p-4 rounded-xl border">
              <div className="flex items-center justify-between mb-2">
                <h4 className="font-medium">Contact Form Notification</h4>
                <input type="checkbox" defaultChecked className="w-4 h-4" />
              </div>
              <p className="text-sm text-muted-foreground">Get notified when someone submits a contact form</p>
            </div>
            <div className="p-4 rounded-xl border">
              <div className="flex items-center justify-between mb-2">
                <h4 className="font-medium">Low Stock Alert</h4>
                <input type="checkbox" defaultChecked className="w-4 h-4" />
              </div>
              <p className="text-sm text-muted-foreground">Get notified when products are low on stock</p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Security */}
      <Card>
        <CardHeader>
          <div className="flex items-center gap-2">
            <Shield className="w-5 h-5 text-primary-600" />
            <CardTitle>Security</CardTitle>
          </div>
          <CardDescription>Account security settings</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <Label>Change Password</Label>
            <div className="grid md:grid-cols-3 gap-4 mt-2">
              <Input type="password" placeholder="Current password" />
              <Input type="password" placeholder="New password" />
              <Input type="password" placeholder="Confirm new password" />
            </div>
            <Button variant="outline" className="mt-4">Update Password</Button>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
