"use client"

import { useState } from "react"
import { Bell, Search, Menu, ChevronDown } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

interface AdminHeaderProps {
  user: {
    name?: string | null
    email?: string | null
    image?: string | null
  }
}

export function AdminHeader({ user }: AdminHeaderProps) {
  return (
    <header className="sticky top-0 z-40 flex h-16 shrink-0 items-center gap-4 border-b bg-white px-4 lg:px-6">
      {/* Mobile menu button */}
      <Button variant="ghost" size="icon" className="lg:hidden">
        <Menu className="h-5 w-5" />
      </Button>

      {/* Search */}
      <div className="flex-1 max-w-xl">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input
            placeholder="Search bookings, orders, products..."
            className="pl-9 bg-secondary/50 border-0"
          />
        </div>
      </div>

      {/* Right side */}
      <div className="flex items-center gap-4">
        {/* Notifications */}
        <Button variant="ghost" size="icon" className="relative">
          <Bell className="h-5 w-5" />
          <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full" />
        </Button>

        {/* User menu */}
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-full bg-gradient-to-br from-primary-500 to-accent-500 flex items-center justify-center text-white font-semibold text-sm">
            {user.name?.charAt(0) || user.email?.charAt(0) || "A"}
          </div>
          <div className="hidden sm:block">
            <p className="text-sm font-medium">{user.name || "Admin"}</p>
            <p className="text-xs text-muted-foreground">{user.email}</p>
          </div>
          <ChevronDown className="h-4 w-4 text-muted-foreground hidden sm:block" />
        </div>
      </div>
    </header>
  )
}
