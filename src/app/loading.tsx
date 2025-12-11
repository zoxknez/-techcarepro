import { Skeleton } from "@/components/ui/skeleton"

export default function Loading() {
  return (
    <div className="min-h-screen">
      {/* Hero Skeleton */}
      <section className="py-20 bg-gradient-to-br from-primary-50 via-white to-accent-50">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <Skeleton className="h-8 w-32" />
              <Skeleton className="h-14 w-full max-w-lg" />
              <Skeleton className="h-14 w-3/4" />
              <Skeleton className="h-6 w-full max-w-md" />
              <Skeleton className="h-6 w-2/3" />
              <div className="flex gap-4 pt-4">
                <Skeleton className="h-12 w-36" />
                <Skeleton className="h-12 w-36" />
              </div>
            </div>
            <div className="hidden lg:block">
              <Skeleton className="aspect-square rounded-3xl" />
            </div>
          </div>
        </div>
      </section>
      
      {/* Content Skeleton */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <Skeleton className="h-10 w-64 mx-auto mb-4" />
            <Skeleton className="h-6 w-96 mx-auto" />
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[...Array(6)].map((_, i) => (
              <div key={i} className="rounded-xl border p-6 space-y-4">
                <Skeleton className="h-12 w-12 rounded-lg" />
                <Skeleton className="h-6 w-3/4" />
                <Skeleton className="h-4 w-full" />
                <Skeleton className="h-4 w-5/6" />
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
