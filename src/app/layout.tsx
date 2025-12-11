import type { Metadata, Viewport } from "next"
import "./globals.css"
import { Header, Footer } from "@/components/layout"

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: "#3b82f6",
}

export const metadata: Metadata = {
  title: {
    default: "TechCare Pro | Expert Device Repair & Care",
    template: "%s | TechCare Pro",
  },
  description:
    "Auckland's trusted specialists for printer, computer, and office equipment repairs. 25+ years of experience. Authorized warranty repairs for Brother, Epson, Sharp and more.",
  keywords: [
    "printer repair Auckland",
    "computer repair Auckland",
    "office equipment repair",
    "Brother printer repair",
    "HP printer repair",
    "laptop repair Auckland",
    "copier repair",
    "fax machine repair",
  ],
  manifest: "/manifest.json",
  appleWebApp: {
    capable: true,
    statusBarStyle: "default",
    title: "TechCare Pro",
  },
  formatDetection: {
    telephone: true,
    email: true,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
