import { Skeleton } from "@/components/ui/skeleton"

export default function ServicesLoading() {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="py-20 bg-gradient-to-br from-primary-50 via-white to-accent-50">
        <div className="container mx-auto px-4 text-center">
          <Skeleton className="h-8 w-32 mx-auto mb-4" />
          <Skeleton className="h-14 w-96 mx-auto mb-4" />
          <Skeleton className="h-6 w-[500px] mx-auto" />
        </div>
      </section>
      
      {/* Services Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[...Array(6)].map((_, i) => (
              <div key={i} className="rounded-2xl border p-6 space-y-4">
                <Skeleton className="h-14 w-14 rounded-xl" />
                <Skeleton className="h-7 w-3/4" />
                <Skeleton className="h-4 w-full" />
                <Skeleton className="h-4 w-5/6" />
                <div className="space-y-2 pt-4">
                  {[...Array(4)].map((_, j) => (
                    <div key={j} className="flex justify-between">
                      <Skeleton className="h-4 w-32" />
                      <Skeleton className="h-4 w-20" />
                    </div>
                  ))}
                </div>
                <Skeleton className="h-10 w-full mt-4" />
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
