import { Skeleton } from "@/components/ui/skeleton"

export default function BlogLoading() {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="py-16 bg-gradient-to-br from-primary-50 via-white to-accent-50">
        <div className="container mx-auto px-4 text-center">
          <Skeleton className="h-8 w-24 mx-auto mb-4" />
          <Skeleton className="h-12 w-80 mx-auto mb-4" />
          <Skeleton className="h-6 w-[500px] mx-auto max-w-full" />
        </div>
      </section>
      
      {/* Featured Post */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-8 mb-16">
            <Skeleton className="aspect-video rounded-2xl" />
            <div className="space-y-4 flex flex-col justify-center">
              <Skeleton className="h-6 w-24" />
              <Skeleton className="h-10 w-full" />
              <Skeleton className="h-10 w-3/4" />
              <Skeleton className="h-5 w-full" />
              <Skeleton className="h-5 w-5/6" />
              <div className="flex gap-4 pt-4">
                <Skeleton className="h-6 w-32" />
                <Skeleton className="h-6 w-24" />
              </div>
            </div>
          </div>
          
          {/* Posts Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[...Array(6)].map((_, i) => (
              <div key={i} className="rounded-xl border overflow-hidden">
                <Skeleton className="aspect-video" />
                <div className="p-5 space-y-3">
                  <Skeleton className="h-5 w-20" />
                  <Skeleton className="h-6 w-full" />
                  <Skeleton className="h-4 w-full" />
                  <Skeleton className="h-4 w-3/4" />
                  <div className="flex gap-4 pt-2">
                    <Skeleton className="h-4 w-24" />
                    <Skeleton className="h-4 w-20" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
