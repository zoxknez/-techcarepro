import Link from "next/link"
import { Home, Search, ArrowLeft, HelpCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-primary-50 via-white to-accent-50 flex items-center justify-center py-12 px-4">
      <div className="max-w-lg w-full text-center">
        {/* 404 Animation */}
        <div className="relative mb-8">
          <div className="text-[180px] font-bold text-primary-100 leading-none select-none">
            404
          </div>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="bg-white rounded-full p-6 shadow-2xl">
              <Search className="w-16 h-16 text-primary-500" />
            </div>
          </div>
        </div>
        
        <h1 className="text-3xl font-bold mb-4">Page Not Found</h1>
        <p className="text-muted-foreground mb-8 text-lg">
          Oops! The page you&apos;re looking for doesn&apos;t exist or has been moved.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <Button asChild size="lg">
            <Link href="/">
              <Home className="w-4 h-4 mr-2" />
              Go Home
            </Link>
          </Button>
          <Button variant="outline" size="lg" asChild>
            <Link href="/contact">
              <HelpCircle className="w-4 h-4 mr-2" />
              Get Help
            </Link>
          </Button>
        </div>
        
        {/* Quick Links */}
        <Card>
          <CardContent className="p-6">
            <h2 className="font-semibold mb-4">Looking for something specific?</h2>
            <div className="grid grid-cols-2 gap-3 text-sm">
              <Link 
                href="/services" 
                className="p-3 rounded-lg bg-gray-50 hover:bg-primary-50 transition-colors text-left"
              >
                <span className="font-medium">Services</span>
                <p className="text-muted-foreground text-xs">View our repair services</p>
              </Link>
              <Link 
                href="/shop" 
                className="p-3 rounded-lg bg-gray-50 hover:bg-primary-50 transition-colors text-left"
              >
                <span className="font-medium">Shop</span>
                <p className="text-muted-foreground text-xs">Browse toner & ink</p>
              </Link>
              <Link 
                href="/booking" 
                className="p-3 rounded-lg bg-gray-50 hover:bg-primary-50 transition-colors text-left"
              >
                <span className="font-medium">Book Repair</span>
                <p className="text-muted-foreground text-xs">Schedule a repair</p>
              </Link>
              <Link 
                href="/track" 
                className="p-3 rounded-lg bg-gray-50 hover:bg-primary-50 transition-colors text-left"
              >
                <span className="font-medium">Track Repair</span>
                <p className="text-muted-foreground text-xs">Check repair status</p>
              </Link>
            </div>
          </CardContent>
        </Card>
        
        <p className="mt-8 text-sm text-muted-foreground">
          <Button variant="link" asChild className="p-0 h-auto text-muted-foreground">
            <Link href="javascript:history.back()">
              <ArrowLeft className="w-3 h-3 mr-1" />
              Go back to previous page
            </Link>
          </Button>
        </p>
      </div>
    </div>
  )
}
