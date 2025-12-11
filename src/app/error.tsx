"use client"

import { useEffect } from "react"
import Link from "next/link"
import { AlertTriangle, RefreshCw, Home, Phone } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { BRAND } from "@/lib/constants"

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    // Log error to an error reporting service
    console.error(error)
  }, [error])

  return (
    <div className="min-h-screen bg-gradient-to-br from-red-50 via-white to-orange-50 flex items-center justify-center py-12 px-4">
      <div className="max-w-lg w-full text-center">
        {/* Error Icon */}
        <div className="mb-8">
          <div className="inline-flex items-center justify-center w-24 h-24 rounded-full bg-red-100 mb-4">
            <AlertTriangle className="w-12 h-12 text-red-500" />
          </div>
        </div>
        
        <h1 className="text-3xl font-bold mb-4">Something Went Wrong</h1>
        <p className="text-muted-foreground mb-8 text-lg">
          We apologize for the inconvenience. An unexpected error has occurred.
        </p>
        
        {/* Error Details (development only) */}
        {process.env.NODE_ENV === "development" && error.message && (
          <Card className="mb-8 text-left bg-gray-900 text-gray-100">
            <CardContent className="p-4">
              <p className="text-xs text-gray-400 mb-1">Error Details:</p>
              <code className="text-sm text-red-400 break-all">{error.message}</code>
              {error.digest && (
                <p className="text-xs text-gray-500 mt-2">Digest: {error.digest}</p>
              )}
            </CardContent>
          </Card>
        )}
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <Button onClick={reset} size="lg">
            <RefreshCw className="w-4 h-4 mr-2" />
            Try Again
          </Button>
          <Button variant="outline" size="lg" asChild>
            <Link href="/">
              <Home className="w-4 h-4 mr-2" />
              Go Home
            </Link>
          </Button>
        </div>
        
        {/* Help Section */}
        <Card>
          <CardContent className="p-6">
            <h2 className="font-semibold mb-4">Still having issues?</h2>
            <p className="text-sm text-muted-foreground mb-4">
              If this problem persists, please contact our support team.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Button variant="outline" size="sm" asChild>
                <a href={`tel:${BRAND.phone.replace(/\s/g, "")}`}>
                  <Phone className="w-4 h-4 mr-2" />
                  {BRAND.phone}
                </a>
              </Button>
              <Button variant="outline" size="sm" asChild>
                <a href={`mailto:${BRAND.email}`}>
                  {BRAND.email}
                </a>
              </Button>
            </div>
          </CardContent>
        </Card>
        
        <p className="mt-8 text-xs text-muted-foreground">
          Error Reference: {error.digest || "N/A"}
        </p>
      </div>
    </div>
  )
}
