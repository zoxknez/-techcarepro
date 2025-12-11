// Brand Colors - Modern Eco-Tech Theme
export const BRAND = {
  name: "TechCare Pro",
  tagline: "Expert Device Repair & Care",
  phone: "09 630 5579",
  mobile: "021 973 056",
  email: "hello@techcarepro.co.nz",
  address: {
    primary: {
      street: "4 Lisnoe Ave",
      suburb: "Mt Eden",
      city: "Auckland",
      postcode: "1024",
      country: "New Zealand",
    },
    secondary: {
      street: "59 Edmund St",
      suburb: "St Heliers",
      city: "Auckland",
      note: "By appointment only",
    },
  },
  hours: {
    weekday: "9:00 AM - 5:00 PM",
    weekend: "By appointment",
  },
  social: {
    facebook: "https://facebook.com/techcarepro",
    instagram: "https://instagram.com/techcarepro",
    linkedin: "https://linkedin.com/company/techcarepro",
  },
  stats: {
    yearsInBusiness: 25,
    devicesRepaired: 50000,
    happyCustomers: 15000,
    certifications: 12,
  },
}

// Navigation types
export interface NavChild {
  label: string
  href: string
  icon?: string
}

export interface NavItem {
  label: string
  href: string
  children?: NavChild[]
}

// Navigation
export const NAV_ITEMS: NavItem[] = [
  {
    label: "Services",
    href: "/services",
    children: [
      { label: "Printer Repairs", href: "/services/printer-repairs", icon: "Printer" },
      { label: "Computer Repairs", href: "/services/computer-repairs", icon: "Laptop" },
      { label: "Copier Repairs", href: "/services/copier-repairs", icon: "Copy" },
      { label: "Office Machines", href: "/services/office-machines", icon: "Building" },
      { label: "Mobile Devices", href: "/services/mobile-devices", icon: "Smartphone" },
      { label: "Electrical Services", href: "/services/electrical", icon: "Zap" },
    ],
  },
  {
    label: "Shop",
    href: "/shop",
    children: [
      { label: "Toner Cartridges", href: "/shop/toner", icon: "Package" },
      { label: "Ink Cartridges", href: "/shop/ink", icon: "Droplet" },
      { label: "Drums & Parts", href: "/shop/parts", icon: "Settings" },
      { label: "All Products", href: "/shop", icon: "ShoppingBag" },
    ],
  },
  { label: "Book Repair", href: "/booking" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
]

// Service Categories
export const SERVICE_CATEGORIES = [
  {
    id: "printer-repairs",
    name: "Printer Repairs",
    description: "Expert repairs for all printer brands - laser, inkjet, dot matrix & more",
    icon: "Printer",
    color: "from-emerald-500 to-teal-600",
    brands: ["Brother", "Canon", "HP", "Epson", "Kyocera", "Lexmark", "Samsung", "Xerox"],
    services: [
      { name: "Laser Printer Repair", priceFrom: 89, time: "1-2 days" },
      { name: "Inkjet Printer Repair", priceFrom: 69, time: "1-2 days" },
      { name: "Dot Matrix Repair", priceFrom: 99, time: "2-3 days" },
      { name: "Label Printer Repair", priceFrom: 79, time: "1-2 days" },
      { name: "Wide Format/Plotter", priceFrom: 149, time: "2-4 days" },
    ],
  },
  {
    id: "computer-repairs",
    name: "Computer Repairs",
    description: "Complete computer and laptop repair services",
    icon: "Laptop",
    color: "from-blue-500 to-indigo-600",
    brands: ["Apple", "Dell", "HP", "Lenovo", "Asus", "Acer", "Microsoft"],
    services: [
      { name: "Virus Removal", priceFrom: 99, time: "Same day" },
      { name: "Hardware Repair", priceFrom: 129, time: "1-3 days" },
      { name: "Data Recovery", priceFrom: 149, time: "1-5 days" },
      { name: "OS Reinstall", priceFrom: 89, time: "Same day" },
      { name: "RAM/SSD Upgrade", priceFrom: 79, time: "Same day" },
    ],
  },
  {
    id: "copier-repairs",
    name: "Copier Repairs",
    description: "Multifunction and copier machine repairs & maintenance",
    icon: "Copy",
    color: "from-purple-500 to-pink-600",
    brands: ["Canon", "Konica Minolta", "Ricoh", "Sharp", "Toshiba", "Xerox"],
    services: [
      { name: "Copier Service", priceFrom: 149, time: "1-2 days" },
      { name: "Maintenance Contract", priceFrom: 49, time: "Monthly" },
      { name: "Drum Replacement", priceFrom: 199, time: "Same day" },
      { name: "Feed Issues", priceFrom: 99, time: "1-2 days" },
    ],
  },
  {
    id: "office-machines",
    name: "Office Machines",
    description: "Shredders, laminators, binders, guillotines & more",
    icon: "Building",
    color: "from-orange-500 to-red-600",
    services: [
      { name: "Shredder Repair", priceFrom: 79, time: "1-2 days" },
      { name: "Laminator Repair", priceFrom: 69, time: "1-2 days" },
      { name: "Binder Repair", priceFrom: 89, time: "2-3 days" },
      { name: "Guillotine Sharpening", priceFrom: 49, time: "1-2 days" },
    ],
  },
  {
    id: "mobile-devices",
    name: "Mobile Devices",
    description: "iPhone, Samsung, tablet repairs and screen replacements",
    icon: "Smartphone",
    color: "from-cyan-500 to-blue-600",
    brands: ["Apple", "Samsung", "Google", "Huawei", "OnePlus"],
    services: [
      { name: "Screen Replacement", priceFrom: 149, time: "Same day" },
      { name: "Battery Replacement", priceFrom: 79, time: "Same day" },
      { name: "Charging Port Repair", priceFrom: 89, time: "Same day" },
      { name: "Water Damage", priceFrom: 129, time: "1-3 days" },
    ],
  },
  {
    id: "electrical",
    name: "Electrical Services",
    description: "Registered electrician services & PAT testing",
    icon: "Zap",
    color: "from-yellow-500 to-orange-600",
    services: [
      { name: "PAT Testing", priceFrom: 5, time: "Per item" },
      { name: "Electrical Inspection", priceFrom: 149, time: "1-2 hours" },
      { name: "Solar Installation", priceFrom: 2999, time: "1-2 days" },
      { name: "UPS Repair", priceFrom: 99, time: "1-2 days" },
    ],
  },
] as const

// Featured Products
export const FEATURED_PRODUCTS = [
  {
    id: "1",
    name: "HP 206A Black Toner",
    slug: "hp-206a-black-toner",
    price: 89.99,
    compareAtPrice: 129.99,
    image: "/products/hp-toner.jpg",
    category: "toner",
    brand: "HP",
  },
  {
    id: "2",
    name: "Brother TN-2450 Toner",
    slug: "brother-tn2450-toner",
    price: 79.99,
    compareAtPrice: 99.99,
    image: "/products/brother-toner.jpg",
    category: "toner",
    brand: "Brother",
  },
  {
    id: "3",
    name: "Canon PG-645XL Black Ink",
    slug: "canon-pg645xl-ink",
    price: 34.99,
    compareAtPrice: 44.99,
    image: "/products/canon-ink.jpg",
    category: "ink",
    brand: "Canon",
  },
  {
    id: "4",
    name: "Epson 212XL Multipack",
    slug: "epson-212xl-multipack",
    price: 89.99,
    compareAtPrice: 119.99,
    image: "/products/epson-multipack.jpg",
    category: "ink",
    brand: "Epson",
  },
] as const

// Testimonials
export const TESTIMONIALS = [
  {
    id: "1",
    name: "Sarah Mitchell",
    company: "Mitchell & Partners Law",
    role: "Office Manager",
    content: "TechCare Pro saved us thousands by repairing our multifunction printer instead of replacing it. Their technician was professional, fast, and the machine works better than new!",
    rating: 5,
    avatar: "/testimonials/sarah.jpg",
  },
  {
    id: "2",
    name: "James Chen",
    company: "Auckland Medical Centre",
    role: "IT Administrator",
    content: "We've been using their maintenance contracts for 3 years. Zero downtime on our printers. The online booking system is so convenient - I can schedule repairs without phone calls.",
    rating: 5,
    avatar: "/testimonials/james.jpg",
  },
  {
    id: "3",
    name: "Emma Thompson",
    company: "Creative Design Studio",
    role: "Owner",
    content: "My MacBook was beyond hope - or so I thought. They recovered all my design files and fixed the logic board. Absolute lifesavers! Plus their same-day service was incredible.",
    rating: 5,
    avatar: "/testimonials/emma.jpg",
  },
  {
    id: "4",
    name: "Michael Roberts",
    company: "Roberts Accounting",
    role: "Director",
    content: "The consumables delivery service is fantastic. Auto-replenishment means we never run out of toner. Great prices too - cheaper than the big box stores.",
    rating: 5,
    avatar: "/testimonials/michael.jpg",
  },
] as const

// Trust Badges
export const TRUST_BADGES = [
  { icon: "Shield", label: "Authorized Warranty Repairer", sublabel: "Brother, Epson, Sharp" },
  { icon: "Award", label: "25+ Years Experience", sublabel: "Trusted since 1999" },
  { icon: "Recycle", label: "Eco-Friendly", sublabel: "Official recycling partner" },
  { icon: "Clock", label: "24/7 Support", sublabel: "Always here for you" },
  { icon: "MapPin", label: "Auckland-Wide", sublabel: "Onsite & workshop" },
  { icon: "ThumbsUp", label: "15,000+ Customers", sublabel: "5-star reviews" },
] as const
