import { Metadata } from "next"
import Link from "next/link"
import { 
  Briefcase, 
  MapPin, 
  Clock, 
  DollarSign,
  Heart,
  Users,
  Zap,
  Award,
  ChevronRight,
  ArrowRight,
  CheckCircle2
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { BRAND } from "@/lib/constants"

export const metadata: Metadata = {
  title: "Careers",
  description: "Join the TechCare Pro team. View our current job openings and apply today.",
}

const benefits = [
  { icon: DollarSign, title: "Competitive Pay", description: "Above-market rates with regular reviews" },
  { icon: Heart, title: "Health & Wellness", description: "Comprehensive health insurance options" },
  { icon: Clock, title: "Flexible Hours", description: "Work-life balance is a priority" },
  { icon: Award, title: "Training", description: "Ongoing professional development" },
  { icon: Users, title: "Great Team", description: "Supportive, experienced colleagues" },
  { icon: Zap, title: "Growth", description: "Clear career progression paths" },
]

const jobs = [
  {
    id: 1,
    title: "Senior Printer Technician",
    department: "Technical Services",
    location: "Mt Eden, Auckland",
    type: "Full-time",
    experience: "5+ years",
    description: "We're looking for an experienced printer technician to join our workshop team. You'll diagnose and repair a wide range of laser and inkjet printers from major brands.",
    requirements: [
      "5+ years experience in printer repair",
      "Knowledge of HP, Brother, Canon, Epson products",
      "Strong diagnostic and problem-solving skills",
      "Excellent customer service abilities",
      "Full NZ driver's license",
    ],
  },
  {
    id: 2,
    title: "Computer Repair Technician",
    department: "Technical Services",
    location: "Mt Eden, Auckland",
    type: "Full-time",
    experience: "3+ years",
    description: "Join our computer repair team to help customers with hardware repairs, virus removal, data recovery, and system upgrades for both Windows and Mac systems.",
    requirements: [
      "3+ years experience in computer repair",
      "CompTIA A+ or equivalent certification preferred",
      "Experience with Windows and macOS",
      "Strong troubleshooting skills",
      "Excellent communication skills",
    ],
  },
  {
    id: 3,
    title: "Field Service Technician",
    department: "Technical Services",
    location: "Auckland Region",
    type: "Full-time",
    experience: "3+ years",
    description: "Travel to customer sites across Auckland to provide onsite repairs and maintenance for office equipment. Company vehicle provided.",
    requirements: [
      "3+ years field service experience",
      "Knowledge of copiers and multifunction devices",
      "Strong customer relationship skills",
      "Full NZ driver's license (clean)",
      "Ability to lift up to 25kg",
    ],
  },
  {
    id: 4,
    title: "Customer Service Representative",
    department: "Customer Experience",
    location: "Mt Eden, Auckland",
    type: "Full-time / Part-time",
    experience: "1+ years",
    description: "Be the first point of contact for our customers. Handle bookings, inquiries, and provide exceptional service. Training provided.",
    requirements: [
      "1+ years customer service experience",
      "Excellent phone and email communication",
      "Basic computer skills",
      "Positive, friendly attitude",
      "Problem-solving mindset",
    ],
  },
  {
    id: 5,
    title: "E-commerce & Marketing Coordinator",
    department: "Marketing",
    location: "Mt Eden, Auckland (Hybrid)",
    type: "Full-time",
    experience: "2+ years",
    description: "Manage our online shop, create marketing content, and help grow our digital presence. Great opportunity for a creative marketer.",
    requirements: [
      "2+ years e-commerce or digital marketing experience",
      "Experience with Shopify, WordPress, or similar",
      "Social media management skills",
      "Basic design skills (Canva, Figma)",
      "Strong writing abilities",
    ],
  },
]

const values = [
  "Expert technicians with decades of combined experience",
  "Modern, well-equipped workshop in central Auckland",
  "Diverse range of interesting technical challenges",
  "Family-owned business with strong values",
  "Regular team events and celebrations",
  "Investment in latest tools and technology",
]

export default function CareersPage() {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="py-20 bg-gradient-to-br from-primary-50 via-white to-accent-50 relative overflow-hidden">
        <div className="absolute inset-0 pattern-grid opacity-50" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="mb-4">Careers</Badge>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Join Our <span className="text-gradient">Growing Team</span>
              </h1>
              <p className="text-lg text-muted-foreground mb-8">
                Be part of Auckland&apos;s leading device repair company. We&apos;re always looking 
                for talented technicians and support staff who share our passion for 
                technology and customer service.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button size="lg" asChild>
                  <a href="#openings">View Open Positions <ArrowRight className="w-4 h-4 ml-2" /></a>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <Link href="/about">About Us</Link>
                </Button>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-square rounded-3xl bg-gradient-to-br from-primary-500 to-accent-500 shadow-2xl overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center text-white p-8">
                    <Users className="w-16 h-16 mx-auto mb-4 opacity-80" />
                    <div className="text-5xl font-bold mb-2">{jobs.length}</div>
                    <div className="text-xl opacity-90">Open Positions</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Work With Us */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="mb-4">Why TechCare Pro?</Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Great Reasons to Join Us</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              We believe happy employees create happy customers. Here&apos;s what we offer.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((benefit) => (
              <Card key={benefit.title}>
                <CardContent className="p-6">
                  <div className="w-12 h-12 rounded-2xl bg-primary-100 flex items-center justify-center mb-4">
                    <benefit.icon className="w-6 h-6 text-primary-600" />
                  </div>
                  <h3 className="font-semibold text-lg mb-2">{benefit.title}</h3>
                  <p className="text-muted-foreground">{benefit.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <Card className="mt-12 bg-gradient-to-br from-primary-50 to-accent-50">
            <CardContent className="p-8">
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-2xl font-bold mb-4">What Makes Us Special</h3>
                  <p className="text-muted-foreground mb-6">
                    TechCare Pro has been a trusted name in Auckland for over 25 years. 
                    Our team is the heart of our success.
                  </p>
                </div>
                <div>
                  <ul className="space-y-3">
                    {values.map((value) => (
                      <li key={value} className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 text-primary-600 mt-0.5 shrink-0" />
                        <span>{value}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Open Positions */}
      <section id="openings" className="py-20 bg-secondary/30 scroll-mt-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="mb-4">Open Positions</Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Current Opportunities</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Find your next career move. We&apos;re hiring for the following roles.
            </p>
          </div>

          <div className="max-w-4xl mx-auto space-y-6">
            {jobs.map((job) => (
              <Card key={job.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                <CardContent className="p-0">
                  <div className="p-6">
                    <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 mb-4">
                      <div>
                        <h3 className="text-xl font-bold mb-2">{job.title}</h3>
                        <p className="text-sm text-muted-foreground">{job.department}</p>
                      </div>
                      <div className="flex flex-wrap gap-2">
                        <Badge variant="secondary" className="flex items-center gap-1">
                          <MapPin className="w-3 h-3" />
                          {job.location}
                        </Badge>
                        <Badge variant="secondary" className="flex items-center gap-1">
                          <Clock className="w-3 h-3" />
                          {job.type}
                        </Badge>
                        <Badge variant="secondary" className="flex items-center gap-1">
                          <Briefcase className="w-3 h-3" />
                          {job.experience}
                        </Badge>
                      </div>
                    </div>

                    <p className="text-muted-foreground mb-4">{job.description}</p>

                    <div className="mb-4">
                      <h4 className="font-semibold mb-2">Requirements:</h4>
                      <ul className="grid sm:grid-cols-2 gap-2">
                        {job.requirements.map((req, index) => (
                          <li key={index} className="flex items-start gap-2 text-sm">
                            <CheckCircle2 className="w-4 h-4 text-primary-600 mt-0.5 shrink-0" />
                            <span>{req}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <Button asChild>
                      <a href={`mailto:careers@techcarepro.co.nz?subject=Application: ${job.title}`}>
                        Apply Now <ChevronRight className="w-4 h-4 ml-1" />
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Application Process */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="mb-4">How to Apply</Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Hiring Process</h2>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-4 gap-6">
              {[
                { step: 1, title: "Apply", description: "Send your CV and cover letter via email" },
                { step: 2, title: "Review", description: "We review all applications within 5 days" },
                { step: 3, title: "Interview", description: "Meet the team and show your skills" },
                { step: 4, title: "Welcome", description: "Join the TechCare Pro family!" },
              ].map((item) => (
                <div key={item.step} className="text-center">
                  <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-primary-500 text-white flex items-center justify-center font-bold text-xl">
                    {item.step}
                  </div>
                  <h3 className="font-semibold mb-2">{item.title}</h3>
                  <p className="text-sm text-muted-foreground">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-br from-primary-500 to-accent-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Don&apos;t See a Perfect Fit?</h2>
          <p className="text-white/80 mb-8 max-w-2xl mx-auto">
            We&apos;re always interested in hearing from talented people. Send us your CV 
            and we&apos;ll keep you in mind for future opportunities.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button size="lg" variant="secondary" className="bg-white text-primary-600 hover:bg-white/90" asChild>
              <a href={`mailto:careers@techcarepro.co.nz?subject=General Application`}>
                Send Your CV
              </a>
            </Button>
            <Button size="lg" variant="outline" className="border-white/30 text-white hover:bg-white/10" asChild>
              <Link href="/contact">Contact HR</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
