import { Metadata } from "next"
import Link from "next/link"
import { notFound } from "next/navigation"
import Image from "next/image"
import { 
  Calendar, 
  Clock, 
  User, 
  ArrowLeft, 
  Share2,
  Facebook,
  Twitter,
  Linkedin,
  ChevronRight,
  Tag
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

// Blog posts data
const posts = [
  {
    id: 1,
    title: "10 Signs Your Printer Needs Professional Service",
    slug: "signs-printer-needs-service",
    excerpt: "Learn to recognize the warning signs before a small issue becomes a costly repair.",
    content: `
      <p>Your printer is an essential part of your daily workflow, but like any machine, it can develop problems over time. Recognizing the early warning signs can save you from costly repairs and downtime. Here are the top 10 signs that your printer needs professional attention.</p>
      
      <h2>1. Frequent Paper Jams</h2>
      <p>Occasional paper jams happen, but if you're clearing jams multiple times a day, there's likely a mechanical issue. Common causes include worn rollers, debris in the paper path, or misaligned components that require professional diagnosis.</p>
      
      <h2>2. Strange Noises</h2>
      <p>Grinding, squeaking, or clicking sounds are never normal. These noises often indicate worn gears, failing motors, or components that need lubrication or replacement. Don't ignore unusual sounds – they typically get worse over time.</p>
      
      <h2>3. Print Quality Degradation</h2>
      <p>If your prints are coming out faded, streaky, or with missing sections, your printer is crying for help. While sometimes this can be fixed with a simple cleaning cycle, persistent quality issues usually require professional intervention.</p>
      
      <h2>4. Slow Printing Speed</h2>
      <p>A printer that suddenly takes much longer to produce pages may have failing components, firmware issues, or internal problems that affect processing speed.</p>
      
      <h2>5. Error Messages</h2>
      <p>Recurring error codes or messages that won't clear after basic troubleshooting indicate underlying issues that need expert attention.</p>
      
      <h2>6. Connectivity Issues</h2>
      <p>If your printer frequently drops network connections or fails to respond to print commands, there may be hardware issues with the network card or communication systems.</p>
      
      <h2>7. Toner or Ink Not Recognized</h2>
      <p>When your printer repeatedly fails to recognize genuine cartridges, the contacts or sensors may need cleaning or replacement.</p>
      
      <h2>8. Visible Wear or Damage</h2>
      <p>Cracked paper trays, broken covers, or visibly worn components affect performance and should be replaced.</p>
      
      <h2>9. Burning Smell</h2>
      <p>Any unusual smell, especially burning, warrants immediate professional inspection. This could indicate electrical issues that pose safety risks.</p>
      
      <h2>10. Age</h2>
      <p>If your printer is more than 5-7 years old and experiencing multiple issues, it may be more cost-effective to replace than repair. A professional can help you make this decision.</p>
      
      <h2>Prevention is Key</h2>
      <p>Regular maintenance can prevent many of these issues. Consider scheduling annual service appointments to keep your printer running smoothly. Our technicians can identify potential problems before they become costly repairs.</p>
      
      <p>If you're experiencing any of these signs, don't wait until your printer fails completely. <a href="/booking">Book a repair</a> today and our certified technicians will have you back up and running in no time.</p>
    `,
    author: "Mike Thompson",
    authorRole: "Senior Technician",
    date: "December 5, 2024",
    readTime: "5 min read",
    category: "Maintenance",
    tags: ["Printer", "Maintenance", "Tips"],
    image: "/blog/printer-maintenance.jpg",
  },
  {
    id: 2,
    title: "How to Extend Your Laptop Battery Life",
    slug: "extend-laptop-battery-life",
    excerpt: "Simple tips and tricks to maximize your laptop's battery performance and longevity.",
    content: `
      <p>A laptop's battery is one of its most critical components, yet it's often the first thing to degrade over time. With proper care and smart habits, you can significantly extend both your battery's daily runtime and its overall lifespan.</p>
      
      <h2>Understanding Battery Health</h2>
      <p>Modern laptops use lithium-ion batteries, which have a limited number of charge cycles. A charge cycle is one full discharge from 100% to 0% (or equivalent, like two 50% discharges). Most batteries are rated for 300-500 cycles before significant capacity loss.</p>
      
      <h2>Daily Habits for Better Battery Life</h2>
      
      <h3>1. Adjust Screen Brightness</h3>
      <p>Your display is one of the biggest power consumers. Reducing brightness by 20-30% can add an extra hour or more to your battery life.</p>
      
      <h3>2. Manage Background Apps</h3>
      <p>Close applications you're not using. Background apps consume CPU power and drain your battery even when you're not actively using them.</p>
      
      <h3>3. Use Battery Saver Mode</h3>
      <p>Both Windows and macOS have built-in battery saver modes that optimize performance for longer battery life. Enable these when you need maximum runtime.</p>
      
      <h3>4. Disconnect Unnecessary Peripherals</h3>
      <p>USB devices, external hard drives, and even your mouse draw power from your laptop. Disconnect anything you're not using.</p>
      
      <h2>Long-term Battery Care</h2>
      
      <h3>Avoid Extreme Temperatures</h3>
      <p>Batteries degrade faster in hot conditions. Never leave your laptop in a hot car or direct sunlight. Similarly, extremely cold conditions can temporarily reduce battery capacity.</p>
      
      <h3>Don't Always Keep It Plugged In</h3>
      <p>While modern laptops have protection circuits, keeping your battery at 100% constantly can accelerate wear. If you use your laptop primarily plugged in, try to drain it to 50-80% occasionally.</p>
      
      <h3>Store at 50% Charge</h3>
      <p>If you're storing a laptop for an extended period, keep the battery at around 50% charge. Storing at full charge or completely empty can damage the battery.</p>
      
      <h2>When to Replace Your Battery</h2>
      <p>If your battery holds less than 50% of its original capacity or your laptop shuts down unexpectedly even with charge remaining, it's time for a replacement. We offer battery replacement services for most laptop brands with genuine parts and warranty coverage.</p>
    `,
    author: "Sarah Chen",
    authorRole: "Tech Specialist",
    date: "December 2, 2024",
    readTime: "4 min read",
    category: "Tips",
    tags: ["Laptop", "Battery", "Tips"],
    image: "/blog/laptop-battery.jpg",
  },
  {
    id: 3,
    title: "Toner vs Ink: Which is Right for Your Business?",
    slug: "toner-vs-ink-comparison",
    excerpt: "A comprehensive comparison to help you choose the best printing solution for your needs.",
    content: `
      <p>Choosing between inkjet and laser printing technology is one of the most important decisions for any business. Both have their strengths, and the right choice depends on your specific printing needs, volume, and budget.</p>
      
      <h2>Understanding the Basics</h2>
      
      <h3>Inkjet (Ink Cartridges)</h3>
      <p>Inkjet printers spray microscopic droplets of liquid ink onto paper. They excel at producing high-quality photos and colour graphics. Modern inkjet technology has come a long way, with some models rivaling laser printers in speed and efficiency.</p>
      
      <h3>Laser (Toner Cartridges)</h3>
      <p>Laser printers use toner, a fine powder that's fused to the paper using heat. They're typically faster, more efficient for high-volume printing, and produce crisp text documents.</p>
      
      <h2>Cost Comparison</h2>
      
      <h3>Initial Investment</h3>
      <p>Inkjet printers are generally cheaper to purchase upfront. A quality inkjet can be had for $100-300, while comparable laser printers start around $200-500.</p>
      
      <h3>Cost Per Page</h3>
      <p>This is where laser printers shine. While toner cartridges cost more upfront, they print far more pages. Typical cost per page:</p>
      <ul>
        <li>Inkjet: 5-15 cents per page</li>
        <li>Laser: 1-5 cents per page</li>
      </ul>
      
      <h2>Print Volume Considerations</h2>
      <p>For businesses printing more than 500 pages per month, laser printers almost always make more financial sense. For occasional printing under 200 pages monthly, inkjet may be sufficient.</p>
      
      <h2>Print Quality</h2>
      <p>For photo printing and colour graphics, inkjet still has a slight edge. For text documents and everyday business printing, laser produces sharper, smear-resistant results.</p>
      
      <h2>Speed and Reliability</h2>
      <p>Laser printers are typically faster and require less maintenance. They're designed for high-volume environments and can handle demanding workloads.</p>
      
      <h2>Our Recommendation</h2>
      <p>For most businesses, a laser printer (or multifunction laser) offers the best value. The higher upfront cost is quickly offset by lower running costs and better reliability. However, if photo quality is paramount or your printing needs are minimal, an inkjet may be the better choice.</p>
      
      <p>Need help deciding? Our team can assess your printing needs and recommend the perfect solution. <a href="/contact">Contact us</a> for a free consultation.</p>
    `,
    author: "Mike Thompson",
    authorRole: "Senior Technician",
    date: "November 28, 2024",
    readTime: "6 min read",
    category: "Guides",
    tags: ["Printer", "Toner", "Ink", "Business"],
    image: "/blog/toner-vs-ink.jpg",
  },
  {
    id: 4,
    title: "The Complete Guide to Computer Virus Removal",
    slug: "computer-virus-removal-guide",
    excerpt: "Step-by-step instructions for identifying and removing common malware and viruses.",
    content: `
      <p>Computer viruses and malware can cripple your productivity, steal sensitive data, and even hold your files hostage. This guide will help you identify infections and understand the removal process.</p>
      
      <h2>Signs Your Computer is Infected</h2>
      <ul>
        <li>Unexpected slowdowns or freezing</li>
        <li>Pop-up advertisements, even when not browsing</li>
        <li>Programs starting or closing on their own</li>
        <li>Files missing or corrupted</li>
        <li>Unfamiliar programs installed</li>
        <li>Antivirus software disabled</li>
        <li>Contacts receiving spam from your accounts</li>
      </ul>
      
      <h2>Types of Malware</h2>
      
      <h3>Viruses</h3>
      <p>Self-replicating programs that attach to legitimate files and spread when those files are shared.</p>
      
      <h3>Ransomware</h3>
      <p>Encrypts your files and demands payment for the decryption key. Never pay the ransom – there's no guarantee you'll get your files back.</p>
      
      <h3>Spyware</h3>
      <p>Secretly monitors your activity, capturing passwords, financial information, and browsing habits.</p>
      
      <h3>Trojans</h3>
      <p>Disguised as legitimate software, trojans provide backdoor access to your system for hackers.</p>
      
      <h2>Basic Removal Steps</h2>
      
      <h3>1. Disconnect from the Internet</h3>
      <p>Prevent the malware from spreading or communicating with its command servers.</p>
      
      <h3>2. Enter Safe Mode</h3>
      <p>Restart your computer in Safe Mode to prevent malware from loading automatically.</p>
      
      <h3>3. Run Antivirus Scans</h3>
      <p>Use reputable antivirus software to scan and remove detected threats. Consider running multiple tools for thorough cleaning.</p>
      
      <h3>4. Remove Suspicious Programs</h3>
      <p>Check your installed programs and remove anything unfamiliar or suspicious.</p>
      
      <h2>When to Seek Professional Help</h2>
      <p>Some infections are too severe or sophisticated for DIY removal. Seek professional help if:</p>
      <ul>
        <li>Your antivirus can't remove the threat</li>
        <li>You're dealing with ransomware</li>
        <li>Your computer won't boot normally</li>
        <li>You've lost access to important files</li>
        <li>You suspect data theft or identity compromise</li>
      </ul>
      
      <p>Our virus removal service includes thorough cleaning, data recovery attempts, and security hardening to prevent future infections. <a href="/booking">Book a repair</a> for same-day service.</p>
    `,
    author: "James Wilson",
    authorRole: "Security Specialist",
    date: "November 25, 2024",
    readTime: "8 min read",
    category: "Security",
    tags: ["Computer", "Security", "Virus", "Malware"],
    image: "/blog/virus-removal.jpg",
  },
  {
    id: 5,
    title: "Why Regular Printer Maintenance Saves Money",
    slug: "printer-maintenance-saves-money",
    excerpt: "Discover how preventive maintenance can reduce repair costs by up to 70%.",
    content: `
      <p>Most businesses wait until their printer breaks down to call for service. This reactive approach is not only disruptive but significantly more expensive than proactive maintenance. Here's why regular printer maintenance is a smart investment.</p>
      
      <h2>The True Cost of Breakdowns</h2>
      <p>When a printer fails unexpectedly, the costs go beyond the repair bill:</p>
      <ul>
        <li>Emergency repair premiums (often 50-100% higher)</li>
        <li>Lost productivity while waiting for repairs</li>
        <li>Missed deadlines and customer impact</li>
        <li>Temporary printing solutions (outsourcing, rental)</li>
        <li>Stress and frustration for your team</li>
      </ul>
      
      <h2>What Regular Maintenance Includes</h2>
      
      <h3>Cleaning</h3>
      <p>Dust, paper debris, and toner particles accumulate inside printers. Regular cleaning prevents jams and maintains print quality.</p>
      
      <h3>Lubrication</h3>
      <p>Moving parts need proper lubrication to function smoothly and avoid premature wear.</p>
      
      <h3>Component Inspection</h3>
      <p>Technicians identify worn components before they fail, allowing for scheduled replacement during convenient times.</p>
      
      <h3>Calibration</h3>
      <p>Regular calibration ensures optimal print quality and consistent output.</p>
      
      <h2>The Numbers Don't Lie</h2>
      <p>Studies show that regular maintenance can:</p>
      <ul>
        <li>Reduce repair costs by 60-70%</li>
        <li>Extend equipment lifespan by 30-50%</li>
        <li>Decrease downtime by 80%</li>
        <li>Improve print quality consistency</li>
      </ul>
      
      <h2>Our Maintenance Programs</h2>
      <p>We offer flexible maintenance plans tailored to your needs. Whether you have a single office printer or a fleet of production machines, regular service visits keep everything running smoothly.</p>
      
      <p>Interested in learning more? <a href="/contact">Contact us</a> for a free assessment and maintenance quote.</p>
    `,
    author: "Mike Thompson",
    authorRole: "Senior Technician",
    date: "November 20, 2024",
    readTime: "4 min read",
    category: "Maintenance",
    tags: ["Printer", "Maintenance", "Business", "Cost Saving"],
    image: "/blog/printer-maintenance-cost.jpg",
  },
  {
    id: 6,
    title: "SSD vs HDD: Upgrading Your Computer Storage",
    slug: "ssd-vs-hdd-upgrade",
    excerpt: "Everything you need to know about upgrading to solid-state storage.",
    content: `
      <p>If your computer feels slow, upgrading from a traditional hard drive (HDD) to a solid-state drive (SSD) is often the single most impactful improvement you can make. Here's everything you need to know about making the switch.</p>
      
      <h2>Understanding the Difference</h2>
      
      <h3>HDD (Hard Disk Drive)</h3>
      <p>Traditional hard drives use spinning magnetic platters and a moving read/write head. They're mechanical devices with moving parts, which limits their speed and makes them vulnerable to physical damage.</p>
      
      <h3>SSD (Solid State Drive)</h3>
      <p>SSDs use flash memory with no moving parts. Data is stored electronically, allowing for much faster access times and greater durability.</p>
      
      <h2>Performance Comparison</h2>
      <p>The speed difference is dramatic:</p>
      <ul>
        <li>Boot time: SSD boots in 10-15 seconds vs. 30-60+ seconds for HDD</li>
        <li>File transfer: SSDs are 5-10x faster</li>
        <li>Application loading: Near-instant on SSD</li>
        <li>Overall responsiveness: Night and day difference</li>
      </ul>
      
      <h2>Benefits of Upgrading to SSD</h2>
      <ul>
        <li><strong>Speed:</strong> Everything feels faster – boot times, application launches, file operations</li>
        <li><strong>Durability:</strong> No moving parts means better resistance to drops and bumps</li>
        <li><strong>Silence:</strong> SSDs are completely silent</li>
        <li><strong>Power efficiency:</strong> Lower power consumption means longer battery life for laptops</li>
        <li><strong>Reliability:</strong> Lower failure rates than mechanical drives</li>
      </ul>
      
      <h2>Choosing the Right SSD</h2>
      <p>Consider these factors:</p>
      <ul>
        <li><strong>Capacity:</strong> 256GB minimum, 512GB or 1TB recommended</li>
        <li><strong>Interface:</strong> SATA (compatible with older systems) or NVMe (faster, for newer systems)</li>
        <li><strong>Brand:</strong> Stick with reputable brands for reliability</li>
      </ul>
      
      <h2>The Upgrade Process</h2>
      <p>Our SSD upgrade service includes:</p>
      <ol>
        <li>Assessment of your current system</li>
        <li>Recommendation of the right SSD</li>
        <li>Complete data migration from your old drive</li>
        <li>Installation and testing</li>
        <li>Return of your old drive (your data)</li>
      </ol>
      
      <p>Ready to transform your computing experience? <a href="/booking">Book an upgrade</a> today. Most upgrades are completed same-day.</p>
    `,
    author: "Sarah Chen",
    authorRole: "Tech Specialist",
    date: "November 15, 2024",
    readTime: "5 min read",
    category: "Upgrades",
    tags: ["Computer", "SSD", "Upgrade", "Performance"],
    image: "/blog/ssd-upgrade.jpg",
  },
]

interface BlogPostPageProps {
  params: Promise<{ slug: string }>
}

export async function generateMetadata({ params }: BlogPostPageProps): Promise<Metadata> {
  const { slug } = await params
  const post = posts.find(p => p.slug === slug)
  
  if (!post) {
    return { title: "Post Not Found" }
  }
  
  return {
    title: post.title,
    description: post.excerpt,
  }
}

export async function generateStaticParams() {
  return posts.map((post) => ({
    slug: post.slug,
  }))
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params
  const post = posts.find(p => p.slug === slug)
  
  if (!post) {
    notFound()
  }
  
  const relatedPosts = posts.filter(p => p.category === post.category && p.slug !== post.slug).slice(0, 3)
  
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="py-12 md:py-20 bg-gradient-to-br from-primary-50 via-white to-accent-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {/* Breadcrumb */}
            <nav className="flex items-center gap-2 text-sm text-muted-foreground mb-8">
              <Link href="/" className="hover:text-primary transition-colors">Home</Link>
              <ChevronRight className="w-4 h-4" />
              <Link href="/blog" className="hover:text-primary transition-colors">Blog</Link>
              <ChevronRight className="w-4 h-4" />
              <span className="text-foreground truncate">{post.title}</span>
            </nav>
            
            <Badge className="mb-4">{post.category}</Badge>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">{post.title}</h1>
            
            <div className="flex flex-wrap items-center gap-4 text-muted-foreground mb-8">
              <div className="flex items-center gap-2">
                <div className="w-10 h-10 rounded-full bg-primary-100 flex items-center justify-center">
                  <User className="w-5 h-5 text-primary-600" />
                </div>
                <div>
                  <div className="font-medium text-foreground">{post.author}</div>
                  <div className="text-sm">{post.authorRole}</div>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                <span>{post.date}</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4" />
                <span>{post.readTime}</span>
              </div>
            </div>
            
            {/* Featured Image */}
            <div className="aspect-video rounded-2xl bg-gradient-to-br from-primary-100 to-accent-100 overflow-hidden mb-8">
              <div className="w-full h-full flex items-center justify-center text-primary-400">
                <Tag className="w-20 h-20" />
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Content */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="grid lg:grid-cols-[1fr_250px] gap-12">
              {/* Main Content */}
              <article 
                className="prose prose-lg max-w-none prose-headings:font-bold prose-h2:text-2xl prose-h2:mt-8 prose-h2:mb-4 prose-h3:text-xl prose-h3:mt-6 prose-h3:mb-3 prose-p:text-muted-foreground prose-a:text-primary-600 prose-a:no-underline hover:prose-a:underline prose-ul:text-muted-foreground prose-li:my-1"
                dangerouslySetInnerHTML={{ __html: post.content }}
              />
              
              {/* Sidebar */}
              <aside className="space-y-8">
                {/* Share */}
                <Card>
                  <CardContent className="p-6">
                    <h3 className="font-bold mb-4">Share this article</h3>
                    <div className="flex gap-2">
                      <Button size="icon" variant="outline" className="rounded-full">
                        <Facebook className="w-4 h-4" />
                      </Button>
                      <Button size="icon" variant="outline" className="rounded-full">
                        <Twitter className="w-4 h-4" />
                      </Button>
                      <Button size="icon" variant="outline" className="rounded-full">
                        <Linkedin className="w-4 h-4" />
                      </Button>
                      <Button size="icon" variant="outline" className="rounded-full">
                        <Share2 className="w-4 h-4" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
                
                {/* Tags */}
                <Card>
                  <CardContent className="p-6">
                    <h3 className="font-bold mb-4">Tags</h3>
                    <div className="flex flex-wrap gap-2">
                      {post.tags.map(tag => (
                        <Badge key={tag} variant="secondary">{tag}</Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
                
                {/* CTA */}
                <Card className="bg-primary-50 border-primary-200">
                  <CardContent className="p-6 text-center">
                    <h3 className="font-bold mb-2">Need Help?</h3>
                    <p className="text-sm text-muted-foreground mb-4">Our experts are ready to assist you with any repair needs.</p>
                    <Button asChild className="w-full">
                      <Link href="/booking">Book a Repair</Link>
                    </Button>
                  </CardContent>
                </Card>
              </aside>
            </div>
            
            {/* Back Link */}
            <div className="mt-12 pt-8 border-t">
              <Button variant="ghost" asChild>
                <Link href="/blog">
                  <ArrowLeft className="w-4 h-4 mr-2" />
                  Back to Blog
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
      
      {/* Related Posts */}
      {relatedPosts.length > 0 && (
        <section className="py-12 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-2xl font-bold mb-8">Related Articles</h2>
              <div className="grid md:grid-cols-3 gap-6">
                {relatedPosts.map(relatedPost => (
                  <Link key={relatedPost.id} href={`/blog/${relatedPost.slug}`}>
                    <Card className="h-full hover:shadow-lg transition-shadow">
                      <div className="aspect-video bg-gradient-to-br from-primary-100 to-accent-100 flex items-center justify-center">
                        <Tag className="w-8 h-8 text-primary-400" />
                      </div>
                      <CardContent className="p-4">
                        <Badge variant="secondary" className="mb-2">{relatedPost.category}</Badge>
                        <h3 className="font-bold line-clamp-2 mb-2">{relatedPost.title}</h3>
                        <div className="flex items-center gap-2 text-sm text-muted-foreground">
                          <Clock className="w-3 h-3" />
                          <span>{relatedPost.readTime}</span>
                        </div>
                      </CardContent>
                    </Card>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}
    </div>
  )
}
