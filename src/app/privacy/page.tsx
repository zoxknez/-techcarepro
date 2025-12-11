import { Metadata } from "next"
import Link from "next/link"
import { Shield } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { BRAND } from "@/lib/constants"

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "TechCare Pro privacy policy - How we collect, use, and protect your personal information.",
}

export default function PrivacyPage() {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="py-16 bg-gradient-to-br from-primary-50 via-white to-accent-50 relative overflow-hidden">
        <div className="absolute inset-0 pattern-grid opacity-50" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <Badge className="mb-4">Legal</Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Privacy <span className="text-gradient">Policy</span>
            </h1>
            <p className="text-xl text-muted-foreground">
              Your privacy is important to us. This policy explains how we handle your data.
            </p>
            <p className="text-sm text-muted-foreground mt-4">
              Last updated: December 1, 2024
            </p>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto prose prose-lg">
            <div className="flex items-center gap-4 p-6 bg-primary-50 rounded-2xl mb-8 not-prose">
              <Shield className="w-10 h-10 text-primary-600 shrink-0" />
              <div>
                <h3 className="font-semibold">Your Privacy Matters</h3>
                <p className="text-sm text-muted-foreground">
                  We are committed to protecting your personal information and being transparent about how we use it.
                </p>
              </div>
            </div>

            <h2>1. Introduction</h2>
            <p>
              {BRAND.name} (&quot;we&quot;, &quot;our&quot;, or &quot;us&quot;) is committed to protecting 
              your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard 
              your information when you visit our website, use our services, or shop with us.
            </p>
            <p>
              By using our services, you agree to the collection and use of information in accordance 
              with this policy. If you do not agree with the terms of this Privacy Policy, please do 
              not access or use our services.
            </p>

            <h2>2. Information We Collect</h2>
            <h3>2.1 Personal Information</h3>
            <p>We may collect personal information that you voluntarily provide to us when you:</p>
            <ul>
              <li>Create an account or customer profile</li>
              <li>Book a repair service</li>
              <li>Make a purchase</li>
              <li>Contact us for support</li>
              <li>Subscribe to our newsletter</li>
              <li>Apply for a job</li>
            </ul>
            <p>This information may include:</p>
            <ul>
              <li>Name, email address, phone number</li>
              <li>Billing and shipping addresses</li>
              <li>Payment information (processed securely through our payment providers)</li>
              <li>Business name and contact details</li>
              <li>Device information for repairs</li>
              <li>Communications you send to us</li>
            </ul>

            <h3>2.2 Automatically Collected Information</h3>
            <p>
              When you visit our website, we automatically collect certain information about your 
              device and usage, including:
            </p>
            <ul>
              <li>IP address and browser type</li>
              <li>Operating system</li>
              <li>Pages visited and time spent</li>
              <li>Referring website</li>
              <li>Device identifiers</li>
            </ul>
            <p>
              We use cookies and similar tracking technologies to collect this information. You can 
              control cookies through your browser settings.
            </p>

            <h2>3. How We Use Your Information</h2>
            <p>We use the information we collect to:</p>
            <ul>
              <li>Provide, maintain, and improve our services</li>
              <li>Process and fulfill repair bookings and orders</li>
              <li>Send service updates and repair status notifications</li>
              <li>Respond to your inquiries and provide customer support</li>
              <li>Send marketing communications (with your consent)</li>
              <li>Process payments and prevent fraud</li>
              <li>Analyze usage patterns to improve our website</li>
              <li>Comply with legal obligations</li>
            </ul>

            <h2>4. Information Sharing</h2>
            <p>We may share your information with:</p>
            <ul>
              <li>
                <strong>Service Providers:</strong> Third parties who assist with payment processing, 
                shipping, email services, and analytics
              </li>
              <li>
                <strong>Manufacturers:</strong> When processing warranty claims on your behalf
              </li>
              <li>
                <strong>Legal Requirements:</strong> When required by law or to protect our rights
              </li>
              <li>
                <strong>Business Transfers:</strong> In connection with a merger, acquisition, or 
                sale of assets
              </li>
            </ul>
            <p>
              We do not sell your personal information to third parties for marketing purposes.
            </p>

            <h2>5. Data Security</h2>
            <p>
              We implement appropriate technical and organizational measures to protect your personal 
              information, including:
            </p>
            <ul>
              <li>SSL encryption for data transmission</li>
              <li>Secure payment processing through PCI-compliant providers</li>
              <li>Access controls and authentication</li>
              <li>Regular security assessments</li>
              <li>Staff training on data protection</li>
            </ul>
            <p>
              While we strive to protect your information, no method of transmission over the 
              internet is 100% secure. We cannot guarantee absolute security.
            </p>

            <h2>6. Data Retention</h2>
            <p>
              We retain your personal information for as long as necessary to provide our services 
              and fulfill the purposes described in this policy. We may retain certain information 
              for longer periods as required by law or for legitimate business purposes, such as:
            </p>
            <ul>
              <li>Tax and accounting records (7 years)</li>
              <li>Warranty and repair records (as required by warranty terms)</li>
              <li>Customer communications (for ongoing service)</li>
            </ul>

            <h2>7. Your Rights</h2>
            <p>Under the New Zealand Privacy Act 2020, you have the right to:</p>
            <ul>
              <li>Access the personal information we hold about you</li>
              <li>Request correction of inaccurate information</li>
              <li>Request deletion of your information (subject to legal requirements)</li>
              <li>Withdraw consent for marketing communications</li>
              <li>Lodge a complaint with the Privacy Commissioner</li>
            </ul>
            <p>
              To exercise these rights, please contact us using the details below.
            </p>

            <h2>8. Cookies</h2>
            <p>We use cookies to:</p>
            <ul>
              <li>Remember your preferences and login status</li>
              <li>Analyze website traffic and usage patterns</li>
              <li>Provide personalized content</li>
              <li>Enable shopping cart functionality</li>
            </ul>
            <p>
              You can control cookies through your browser settings. Note that disabling cookies 
              may affect website functionality.
            </p>

            <h2>9. Third-Party Links</h2>
            <p>
              Our website may contain links to third-party websites. We are not responsible for 
              the privacy practices of these websites. We encourage you to review their privacy 
              policies before providing any personal information.
            </p>

            <h2>10. Children&apos;s Privacy</h2>
            <p>
              Our services are not directed to individuals under 16 years of age. We do not 
              knowingly collect personal information from children. If we become aware that we 
              have collected information from a child, we will take steps to delete it.
            </p>

            <h2>11. Changes to This Policy</h2>
            <p>
              We may update this Privacy Policy from time to time. We will notify you of any 
              material changes by posting the updated policy on our website and updating the 
              &quot;Last updated&quot; date. Your continued use of our services after any changes 
              indicates your acceptance of the updated policy.
            </p>

            <h2>12. Contact Us</h2>
            <p>
              If you have any questions about this Privacy Policy or our data practices, please 
              contact us:
            </p>
            <ul>
              <li>Email: <a href={`mailto:privacy@techcarepro.co.nz`}>privacy@techcarepro.co.nz</a></li>
              <li>Phone: {BRAND.phone}</li>
              <li>
                Address: {BRAND.address.primary.street}, {BRAND.address.primary.suburb}, {" "}
                {BRAND.address.primary.city} {BRAND.address.primary.postcode}
              </li>
            </ul>
            <p>
              You may also contact the Office of the Privacy Commissioner at{" "}
              <a href="https://privacy.org.nz" target="_blank" rel="noopener noreferrer">
                privacy.org.nz
              </a>
            </p>

            <div className="mt-12 p-6 bg-secondary/50 rounded-2xl not-prose">
              <p className="text-sm text-muted-foreground">
                This privacy policy is provided for informational purposes and should be reviewed 
                by a legal professional for your specific circumstances. By using our services, 
                you acknowledge that you have read and understood this Privacy Policy.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
