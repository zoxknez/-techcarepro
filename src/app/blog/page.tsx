import { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import { 
  Calendar, 
  Clock, 
  User, 
  ArrowRight, 
  Tag,
  Search,
  ChevronRight
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export const metadata: Metadata = {
  title: "Blog",
  description: "Tips, guides, and news about device repair, maintenance, and technology.",
}

const featuredPost = {
  id: 1,
  title: "10 Signs Your Printer Needs Professional Service",
  excerpt: "Learn to recognize the warning signs before a small issue becomes a costly repair. From paper jams to print quality issues, we cover everything you need to know.",
  author: "Mike Thompson",
  date: "December 5, 2024",
  readTime: "5 min read",
  category: "Maintenance",
  image: "/blog/printer-maintenance.jpg",
  slug: "signs-printer-needs-service",
}

const posts = [
  {
    id: 2,
    title: "How to Extend Your Laptop Battery Life",
    excerpt: "Simple tips and tricks to maximize your laptop's battery performance and longevity.",
    author: "Sarah Chen",
    date: "December 2, 2024",
    readTime: "4 min read",
    category: "Tips",
    slug: "extend-laptop-battery-life",
  },
  {
    id: 3,
    title: "Toner vs Ink: Which is Right for Your Business?",
    excerpt: "A comprehensive comparison to help you choose the best printing solution for your needs.",
    author: "Mike Thompson",
    date: "November 28, 2024",
    readTime: "6 min read",
    category: "Guides",
    slug: "toner-vs-ink-comparison",
  },
  {
    id: 4,
    title: "The Complete Guide to Computer Virus Removal",
    excerpt: "Step-by-step instructions for identifying and removing common malware and viruses.",
    author: "James Wilson",
    date: "November 25, 2024",
    readTime: "8 min read",
    category: "Security",
    slug: "computer-virus-removal-guide",
  },
  {
    id: 5,
    title: "Why Regular Printer Maintenance Saves Money",
    excerpt: "Discover how preventive maintenance can reduce repair costs by up to 70%.",
    author: "Mike Thompson",
    date: "November 20, 2024",
    readTime: "4 min read",
    category: "Maintenance",
    slug: "printer-maintenance-saves-money",
  },
  {
    id: 6,
    title: "SSD vs HDD: Upgrading Your Computer Storage",
    excerpt: "Everything you need to know about upgrading to solid-state storage.",
    author: "Sarah Chen",
    date: "November 15, 2024",
    readTime: "5 min read",
    category: "Upgrades",
    slug: "ssd-vs-hdd-upgrade",
  },
  {
    id: 7,
    title: "Choosing the Right Multifunction Printer for Your Office",
    excerpt: "A buyer's guide to selecting the perfect MFP for small to medium businesses.",
    author: "Mike Thompson",
    date: "November 10, 2024",
    readTime: "7 min read",
    category: "Guides",
    slug: "choosing-multifunction-printer",
  },
  {
    id: 8,
    title: "Data Recovery: What You Need to Know",
    excerpt: "Understanding your options when disaster strikes and you lose important files.",
    author: "James Wilson",
    date: "November 5, 2024",
    readTime: "6 min read",
    category: "Recovery",
    slug: "data-recovery-guide",
  },
  {
    id: 9,
    title: "Eco-Friendly Printing: Reduce Waste and Save Money",
    excerpt: "Sustainable printing practices that benefit both your wallet and the environment.",
    author: "Sarah Chen",
    date: "November 1, 2024",
    readTime: "4 min read",
    category: "Sustainability",
    slug: "eco-friendly-printing",
  },
]

const categories = [
  { name: "All Posts", count: posts.length + 1 },
  { name: "Maintenance", count: 2 },
  { name: "Guides", count: 2 },
  { name: "Tips", count: 1 },
  { name: "Security", count: 1 },
  { name: "Upgrades", count: 1 },
  { name: "Recovery", count: 1 },
  { name: "Sustainability", count: 1 },
]

const categoryColors: Record<string, string> = {
  Maintenance: "bg-blue-100 text-blue-700",
  Guides: "bg-purple-100 text-purple-700",
  Tips: "bg-green-100 text-green-700",
  Security: "bg-red-100 text-red-700",
  Upgrades: "bg-amber-100 text-amber-700",
  Recovery: "bg-cyan-100 text-cyan-700",
  Sustainability: "bg-emerald-100 text-emerald-700",
}

export default function BlogPage() {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="py-20 bg-gradient-to-br from-primary-50 via-white to-accent-50 relative overflow-hidden">
        <div className="absolute inset-0 pattern-grid opacity-50" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <Badge className="mb-4">Our Blog</Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Tips, Guides & <span className="text-gradient">Tech News</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Expert advice on maintaining your devices, troubleshooting common issues, 
              and getting the most from your technology.
            </p>
            <div className="relative max-w-xl mx-auto">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
              <Input 
                placeholder="Search articles..." 
                className="pl-12 py-6 text-lg rounded-2xl shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-16">
        <div className="flex flex-col lg:flex-row gap-12">
          {/* Main Content */}
          <main className="flex-1">
            {/* Featured Post */}
            <div className="mb-12">
              <h2 className="text-sm font-semibold text-primary-600 uppercase tracking-wide mb-4">
                Featured Article
              </h2>
              <Card className="overflow-hidden hover:shadow-xl transition-shadow group">
                <div className="grid md:grid-cols-2">
                  <div className="aspect-video md:aspect-auto bg-gradient-to-br from-primary-100 to-accent-100 relative">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-24 h-24 rounded-2xl bg-white shadow-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                        <span className="text-4xl">🖨️</span>
                      </div>
                    </div>
                  </div>
                  <CardContent className="p-8 flex flex-col justify-center">
                    <Badge className={`w-fit mb-4 ${categoryColors[featuredPost.category]}`}>
                      {featuredPost.category}
                    </Badge>
                    <h3 className="text-2xl font-bold mb-4 group-hover:text-primary-600 transition-colors">
                      {featuredPost.title}
                    </h3>
                    <p className="text-muted-foreground mb-6">{featuredPost.excerpt}</p>
                    <div className="flex items-center gap-4 text-sm text-muted-foreground mb-6">
                      <span className="flex items-center gap-1">
                        <User className="w-4 h-4" />
                        {featuredPost.author}
                      </span>
                      <span className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        {featuredPost.date}
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock className="w-4 h-4" />
                        {featuredPost.readTime}
                      </span>
                    </div>
                    <Button asChild className="w-fit">
                      <Link href={`/blog/${featuredPost.slug}`}>
                        Read Article <ArrowRight className="w-4 h-4 ml-2" />
                      </Link>
                    </Button>
                  </CardContent>
                </div>
              </Card>
            </div>

            {/* Posts Grid */}
            <div>
              <h2 className="text-sm font-semibold text-primary-600 uppercase tracking-wide mb-4">
                Latest Articles
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                {posts.map((post) => (
                  <Link key={post.id} href={`/blog/${post.slug}`}>
                    <Card className="h-full overflow-hidden hover:shadow-lg transition-shadow group">
                      <div className="aspect-video bg-gradient-to-br from-secondary to-primary-50 relative">
                        <div className="absolute inset-0 flex items-center justify-center">
                          <div className="w-16 h-16 rounded-xl bg-white shadow-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                            <Tag className="w-8 h-8 text-primary-600" />
                          </div>
                        </div>
                        <Badge className={`absolute top-3 left-3 ${categoryColors[post.category] || "bg-gray-100 text-gray-700"}`}>
                          {post.category}
                        </Badge>
                      </div>
                      <CardContent className="p-6">
                        <h3 className="font-bold text-lg mb-2 group-hover:text-primary-600 transition-colors line-clamp-2">
                          {post.title}
                        </h3>
                        <p className="text-sm text-muted-foreground mb-4 line-clamp-2">{post.excerpt}</p>
                        <div className="flex items-center justify-between text-xs text-muted-foreground">
                          <span>{post.author}</span>
                          <span className="flex items-center gap-1">
                            <Clock className="w-3 h-3" />
                            {post.readTime}
                          </span>
                        </div>
                      </CardContent>
                    </Card>
                  </Link>
                ))}
              </div>
            </div>

            {/* Pagination */}
            <div className="flex justify-center mt-12">
              <div className="flex items-center gap-2">
                <Button variant="outline" disabled>Previous</Button>
                <Button variant="outline" className="bg-primary-50 text-primary-600">1</Button>
                <Button variant="outline">2</Button>
                <Button variant="outline">3</Button>
                <Button variant="outline">Next</Button>
              </div>
            </div>
          </main>

          {/* Sidebar */}
          <aside className="lg:w-80 space-y-8">
            {/* Categories */}
            <Card>
              <CardContent className="p-6">
                <h3 className="font-bold text-lg mb-4">Categories</h3>
                <ul className="space-y-2">
                  {categories.map((category) => (
                    <li key={category.name}>
                      <button className="w-full flex items-center justify-between p-2 rounded-lg hover:bg-secondary transition-colors text-left">
                        <span className="text-sm">{category.name}</span>
                        <span className="text-xs text-muted-foreground bg-secondary px-2 py-0.5 rounded-full">
                          {category.count}
                        </span>
                      </button>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            {/* Popular Posts */}
            <Card>
              <CardContent className="p-6">
                <h3 className="font-bold text-lg mb-4">Popular Articles</h3>
                <ul className="space-y-4">
                  {posts.slice(0, 4).map((post, index) => (
                    <li key={post.id}>
                      <Link href={`/blog/${post.slug}`} className="flex gap-4 group">
                        <div className="text-2xl font-bold text-primary-200 group-hover:text-primary-400 transition-colors">
                          {String(index + 1).padStart(2, "0")}
                        </div>
                        <div>
                          <h4 className="font-medium text-sm group-hover:text-primary-600 transition-colors line-clamp-2">
                            {post.title}
                          </h4>
                          <p className="text-xs text-muted-foreground mt-1">{post.date}</p>
                        </div>
                      </Link>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            {/* Newsletter */}
            <Card className="bg-gradient-to-br from-primary-50 to-accent-50">
              <CardContent className="p-6">
                <h3 className="font-bold text-lg mb-2">Stay Updated</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Subscribe for the latest tips and news delivered to your inbox.
                </p>
                <div className="space-y-3">
                  <Input placeholder="Your email" type="email" />
                  <Button className="w-full">Subscribe</Button>
                </div>
                <p className="text-xs text-muted-foreground mt-3">
                  No spam, unsubscribe anytime.
                </p>
              </CardContent>
            </Card>

            {/* CTA */}
            <Card className="bg-primary-900 text-white">
              <CardContent className="p-6">
                <h3 className="font-bold text-lg mb-2">Need Expert Help?</h3>
                <p className="text-white/70 text-sm mb-4">
                  Our technicians are ready to help with any device issues.
                </p>
                <Button variant="secondary" className="w-full bg-white text-primary-900 hover:bg-white/90" asChild>
                  <Link href="/booking">
                    Book a Repair <ChevronRight className="w-4 h-4 ml-1" />
                  </Link>
                </Button>
              </CardContent>
            </Card>
          </aside>
        </div>
      </div>
    </div>
  )
}
