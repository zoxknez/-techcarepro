import { Skeleton } from "@/components/ui/skeleton"

export default function BookingLoading() {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="py-12 bg-gradient-to-br from-primary-50 via-white to-accent-50">
        <div className="container mx-auto px-4 text-center">
          <Skeleton className="h-8 w-32 mx-auto mb-4" />
          <Skeleton className="h-12 w-80 mx-auto mb-4" />
          <Skeleton className="h-6 w-96 mx-auto" />
        </div>
      </section>
      
      {/* Booking Form */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            {/* Progress Steps */}
            <div className="flex justify-between mb-12">
              {[...Array(4)].map((_, i) => (
                <div key={i} className="flex items-center">
                  <Skeleton className="w-10 h-10 rounded-full" />
                  <Skeleton className="h-4 w-20 ml-2 hidden md:block" />
                  {i < 3 && <Skeleton className="h-1 w-16 mx-4 hidden md:block" />}
                </div>
              ))}
            </div>
            
            {/* Form Card */}
            <div className="rounded-2xl border p-6 md:p-8">
              <Skeleton className="h-8 w-48 mb-6" />
              
              <div className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Skeleton className="h-4 w-20" />
                    <Skeleton className="h-12 w-full" />
                  </div>
                  <div className="space-y-2">
                    <Skeleton className="h-4 w-20" />
                    <Skeleton className="h-12 w-full" />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <Skeleton className="h-4 w-24" />
                  <Skeleton className="h-12 w-full" />
                </div>
                
                <div className="space-y-2">
                  <Skeleton className="h-4 w-32" />
                  <Skeleton className="h-32 w-full" />
                </div>
                
                <div className="flex justify-between pt-6">
                  <Skeleton className="h-12 w-28" />
                  <Skeleton className="h-12 w-28" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
