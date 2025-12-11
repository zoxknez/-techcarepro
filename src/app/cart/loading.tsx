import { Skeleton } from "@/components/ui/skeleton"

export default function CartLoading() {
  return (
    <div className="min-h-screen py-12">
      <div className="container mx-auto px-4">
        <Skeleton className="h-10 w-48 mb-8" />
        
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Cart Items */}
          <div className="lg:col-span-2 space-y-4">
            {[...Array(3)].map((_, i) => (
              <div key={i} className="rounded-xl border p-4">
                <div className="flex gap-4">
                  <Skeleton className="w-24 h-24 rounded-lg" />
                  <div className="flex-1 space-y-2">
                    <Skeleton className="h-5 w-3/4" />
                    <Skeleton className="h-4 w-1/2" />
                    <div className="flex items-center gap-4 pt-2">
                      <Skeleton className="h-10 w-28" />
                      <Skeleton className="h-6 w-20" />
                    </div>
                  </div>
                  <Skeleton className="h-8 w-8" />
                </div>
              </div>
            ))}
          </div>
          
          {/* Order Summary */}
          <div>
            <div className="rounded-xl border p-6 space-y-4">
              <Skeleton className="h-6 w-32" />
              <div className="space-y-3">
                <div className="flex justify-between">
                  <Skeleton className="h-4 w-20" />
                  <Skeleton className="h-4 w-16" />
                </div>
                <div className="flex justify-between">
                  <Skeleton className="h-4 w-24" />
                  <Skeleton className="h-4 w-16" />
                </div>
                <div className="flex justify-between pt-4 border-t">
                  <Skeleton className="h-6 w-16" />
                  <Skeleton className="h-6 w-24" />
                </div>
              </div>
              <Skeleton className="h-12 w-full" />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
