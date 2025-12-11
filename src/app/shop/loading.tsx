import { Skeleton } from "@/components/ui/skeleton"

export default function ShopLoading() {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="py-12 bg-gradient-to-br from-primary-50 via-white to-accent-50">
        <div className="container mx-auto px-4">
          <Skeleton className="h-8 w-24 mb-4" />
          <Skeleton className="h-12 w-80 mb-4" />
          <Skeleton className="h-6 w-96" />
        </div>
      </section>
      
      {/* Products */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Sidebar */}
            <aside className="w-full lg:w-64 flex-shrink-0">
              <div className="space-y-6">
                <div>
                  <Skeleton className="h-6 w-24 mb-3" />
                  <div className="space-y-2">
                    {[...Array(5)].map((_, i) => (
                      <Skeleton key={i} className="h-10 w-full" />
                    ))}
                  </div>
                </div>
                <div>
                  <Skeleton className="h-6 w-24 mb-3" />
                  <div className="space-y-2">
                    {[...Array(4)].map((_, i) => (
                      <Skeleton key={i} className="h-8 w-full" />
                    ))}
                  </div>
                </div>
              </div>
            </aside>
            
            {/* Products Grid */}
            <div className="flex-1">
              <div className="flex justify-between items-center mb-6">
                <Skeleton className="h-6 w-32" />
                <Skeleton className="h-10 w-40" />
              </div>
              <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6">
                {[...Array(9)].map((_, i) => (
                  <div key={i} className="rounded-xl border overflow-hidden">
                    <Skeleton className="aspect-square" />
                    <div className="p-4 space-y-2">
                      <Skeleton className="h-4 w-20" />
                      <Skeleton className="h-5 w-full" />
                      <div className="flex justify-between items-center pt-2">
                        <Skeleton className="h-6 w-16" />
                        <Skeleton className="h-9 w-9 rounded-full" />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
