// Service Types
export interface Service {
  id: string
  title: string
  description: string
  icon: string
  slug: string
  features: string[]
  priceFrom: number
  estimatedTime: string
  brands?: string[]
}

export interface ServiceCategory {
  id: string
  name: string
  slug: string
  description: string
  services: Service[]
}

// Booking Types
export interface BookingSlot {
  id: string
  date: Date
  startTime: string
  endTime: string
  available: boolean
}

export interface BookingRequest {
  id: string
  customerId: string
  serviceId: string
  deviceType: string
  deviceBrand: string
  deviceModel: string
  issueDescription: string
  images: string[]
  preferredDate: Date
  preferredTime: string
  serviceType: "workshop" | "onsite"
  address?: string
  status: BookingStatus
  createdAt: Date
  updatedAt: Date
}

export type BookingStatus = 
  | "pending"
  | "confirmed"
  | "in-progress"
  | "completed"
  | "cancelled"

// Product Types
export interface Product {
  id: string
  name: string
  slug: string
  description: string
  category: ProductCategory
  price: number
  compareAtPrice?: number
  images: string[]
  stock: number
  sku: string
  brand: string
  compatibility: string[]
  featured: boolean
}

export type ProductCategory = 
  | "toner"
  | "ink"
  | "drum"
  | "ribbon"
  | "paper"
  | "accessories"

// Customer Types
export interface Customer {
  id: string
  email: string
  name: string
  phone?: string
  company?: string
  addresses: Address[]
  createdAt: Date
}

export interface Address {
  id: string
  label: string
  street: string
  city: string
  postcode: string
  country: string
  isDefault: boolean
}

// Order Types
export interface Order {
  id: string
  customerId: string
  items: OrderItem[]
  subtotal: number
  shipping: number
  tax: number
  total: number
  status: OrderStatus
  shippingAddress: Address
  paymentIntentId?: string
  createdAt: Date
  updatedAt: Date
}

export interface OrderItem {
  productId: string
  productName: string
  quantity: number
  price: number
}

export type OrderStatus =
  | "pending"
  | "paid"
  | "processing"
  | "shipped"
  | "delivered"
  | "cancelled"

// Review Types
export interface Review {
  id: string
  customerId: string
  customerName: string
  rating: number
  title: string
  content: string
  serviceType?: string
  verified: boolean
  createdAt: Date
}

// Contact Types
export interface ContactForm {
  firstName: string
  lastName: string
  email: string
  phone?: string
  company?: string
  subject: string
  message: string
  preferredContact: "email" | "phone"
}
