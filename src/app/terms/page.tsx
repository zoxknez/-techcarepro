import { Metadata } from "next"
import Link from "next/link"
import { FileText } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { BRAND } from "@/lib/constants"

export const metadata: Metadata = {
  title: "Terms of Service",
  description: "TechCare Pro terms of service - Terms and conditions for using our repair services and shop.",
}

export default function TermsPage() {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="py-16 bg-gradient-to-br from-primary-50 via-white to-accent-50 relative overflow-hidden">
        <div className="absolute inset-0 pattern-grid opacity-50" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <Badge className="mb-4">Legal</Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Terms of <span className="text-gradient">Service</span>
            </h1>
            <p className="text-xl text-muted-foreground">
              Please read these terms carefully before using our services.
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
              <FileText className="w-10 h-10 text-primary-600 shrink-0" />
              <div>
                <h3 className="font-semibold">Agreement to Terms</h3>
                <p className="text-sm text-muted-foreground">
                  By accessing or using our services, you agree to be bound by these Terms of Service.
                </p>
              </div>
            </div>

            <h2>1. Introduction</h2>
            <p>
              These Terms of Service (&quot;Terms&quot;) govern your use of the website, services, 
              and products offered by {BRAND.name} (&quot;Company&quot;, &quot;we&quot;, &quot;our&quot;, 
              or &quot;us&quot;), including repair services, online shop, and customer portal.
            </p>
            <p>
              By using our services, you agree to these Terms. If you do not agree, please do not 
              use our services.
            </p>

            <h2>2. Services</h2>
            <h3>2.1 Repair Services</h3>
            <p>We provide repair services for various electronic devices including but not limited to:</p>
            <ul>
              <li>Printers, copiers, and multifunction devices</li>
              <li>Computers and laptops</li>
              <li>Mobile devices and tablets</li>
              <li>Office equipment</li>
            </ul>

            <h3>2.2 Service Process</h3>
            <p>Our repair process typically includes:</p>
            <ol>
              <li><strong>Booking:</strong> Schedule your repair online or by phone</li>
              <li><strong>Diagnosis:</strong> We assess the device and identify issues</li>
              <li><strong>Quote:</strong> We provide a detailed quote for approval</li>
              <li><strong>Repair:</strong> Upon approval, we complete the repair</li>
              <li><strong>Collection:</strong> Pickup your repaired device or we deliver it</li>
            </ol>

            <h3>2.3 Quotes and Approval</h3>
            <p>
              We will provide a quote before proceeding with any chargeable repair work. By approving 
              a quote, you authorize us to complete the repair and agree to pay the quoted amount 
              upon completion. Additional charges may apply if we discover further issues during repair, 
              but we will always seek approval for any price increases.
            </p>

            <h2>3. Pricing and Payment</h2>
            <h3>3.1 Repair Services</h3>
            <ul>
              <li>All quoted prices include GST unless otherwise stated</li>
              <li>Payment is due upon completion of repair services</li>
              <li>We accept cash, EFTPOS, Visa, and Mastercard</li>
              <li>Business accounts available on approved credit</li>
            </ul>

            <h3>3.2 Online Shop</h3>
            <ul>
              <li>All prices are in New Zealand Dollars (NZD) and include GST</li>
              <li>Prices may change without notice</li>
              <li>Payment is required at time of order</li>
              <li>Orders are subject to product availability</li>
            </ul>

            <h3>3.3 Diagnostic Fees</h3>
            <p>
              We offer free initial diagnosis for most devices. For complex diagnostics requiring 
              significant time or specialized equipment, we may charge a diagnostic fee. This will 
              be communicated before any work begins.
            </p>

            <h2>4. Warranty</h2>
            <h3>4.1 Repair Warranty</h3>
            <p>All repairs are covered by our 90-day warranty, which includes:</p>
            <ul>
              <li>Parts and labor for the specific repair performed</li>
              <li>Free rework if the same issue recurs</li>
              <li>Support and follow-up if problems arise</li>
            </ul>

            <h3>4.2 Warranty Exclusions</h3>
            <p>Our warranty does not cover:</p>
            <ul>
              <li>New or unrelated issues</li>
              <li>Damage from misuse, accidents, or neglect</li>
              <li>Damage from power surges or liquid</li>
              <li>Modifications by other parties</li>
              <li>Software issues (unless specifically repaired by us)</li>
              <li>Consumable items (toner, ink, etc.)</li>
            </ul>

            <h3>4.3 Product Warranty</h3>
            <p>
              Products sold through our shop carry a minimum 12-month warranty against defects, 
              in addition to your rights under the Consumer Guarantees Act 1993.
            </p>

            <h2>5. Device Drop-off and Collection</h2>
            <h3>5.1 Drop-off</h3>
            <p>When leaving a device with us, you acknowledge that:</p>
            <ul>
              <li>We are not responsible for data loss (backup your data before repair)</li>
              <li>You own the device or have authority to authorize repairs</li>
              <li>You have removed any passwords or will provide them if needed</li>
              <li>The device may be opened, disassembled, or tested as needed</li>
            </ul>

            <h3>5.2 Collection</h3>
            <p>
              Repaired devices must be collected within 30 days of completion notification. 
              After 30 days, storage fees of $5 per day may apply. Devices not collected within 
              90 days may be disposed of in accordance with the Unclaimed Goods Act 2017.
            </p>

            <h3>5.3 Identification</h3>
            <p>
              Valid photo identification may be required for device collection to protect against 
              unauthorized access.
            </p>

            <h2>6. Data and Privacy</h2>
            <p>
              We take data security seriously. During repairs, we may access device contents only 
              as necessary for diagnosis and repair. We recommend:
            </p>
            <ul>
              <li>Backing up all important data before repair</li>
              <li>Removing sensitive personal information if possible</li>
              <li>Informing us of any confidentiality requirements</li>
            </ul>
            <p>
              For full details, please refer to our <Link href="/privacy">Privacy Policy</Link>.
            </p>

            <h2>7. Limitation of Liability</h2>
            <h3>7.1 General Limitation</h3>
            <p>
              To the maximum extent permitted by law, our liability for any claim arising from 
              our services is limited to the amount paid for the specific service in question.
            </p>

            <h3>7.2 Exclusions</h3>
            <p>We are not liable for:</p>
            <ul>
              <li>Data loss (you should maintain backups)</li>
              <li>Loss of income or profits</li>
              <li>Indirect or consequential damages</li>
              <li>Delays beyond our reasonable control</li>
              <li>Pre-existing damage or defects</li>
            </ul>

            <h3>7.3 Consumer Guarantees</h3>
            <p>
              Nothing in these Terms limits your rights under the Consumer Guarantees Act 1993 
              or the Fair Trading Act 1986.
            </p>

            <h2>8. Online Shop Terms</h2>
            <h3>8.1 Orders</h3>
            <ul>
              <li>Orders are subject to product availability</li>
              <li>We reserve the right to limit quantities</li>
              <li>Prices are subject to change without notice</li>
              <li>We may refuse or cancel orders at our discretion</li>
            </ul>

            <h3>8.2 Shipping</h3>
            <ul>
              <li>Shipping is free for orders over $100 to urban NZ addresses</li>
              <li>Standard shipping is 1-3 business days for most locations</li>
              <li>We are not responsible for delays once items are with the courier</li>
              <li>Risk of loss passes to you upon delivery</li>
            </ul>

            <h3>8.3 Returns</h3>
            <ul>
              <li>Unused products may be returned within 30 days</li>
              <li>Products must be in original packaging</li>
              <li>Return shipping costs may apply</li>
              <li>Refunds are processed within 5-10 business days</li>
              <li>Defective products are replaced at no cost</li>
            </ul>

            <h2>9. Intellectual Property</h2>
            <p>
              All content on our website, including text, graphics, logos, and images, is owned 
              by or licensed to {BRAND.name} and protected by copyright law. You may not reproduce, 
              distribute, or modify any content without our written permission.
            </p>

            <h2>10. Website Use</h2>
            <p>You agree not to:</p>
            <ul>
              <li>Use the website for unlawful purposes</li>
              <li>Attempt to gain unauthorized access</li>
              <li>Interfere with website operation</li>
              <li>Submit false or misleading information</li>
              <li>Scrape or harvest data from our website</li>
            </ul>

            <h2>11. Dispute Resolution</h2>
            <p>
              If you have a complaint or dispute, please contact us first to try to resolve it 
              informally. We are committed to fair resolution of issues. If we cannot resolve 
              the matter, you may seek independent mediation or pursue legal remedies.
            </p>

            <h2>12. Changes to Terms</h2>
            <p>
              We may update these Terms from time to time. Continued use of our services after 
              changes indicates acceptance of the updated Terms. Material changes will be notified 
              via our website or email.
            </p>

            <h2>13. General Provisions</h2>
            <ul>
              <li>These Terms are governed by New Zealand law</li>
              <li>Any disputes are subject to the jurisdiction of New Zealand courts</li>
              <li>If any provision is found invalid, other provisions remain in effect</li>
              <li>Our failure to enforce a right does not waive that right</li>
              <li>These Terms constitute the entire agreement between you and us</li>
            </ul>

            <h2>14. Contact Information</h2>
            <p>For questions about these Terms, please contact us:</p>
            <ul>
              <li>Email: <a href={`mailto:${BRAND.email}`}>{BRAND.email}</a></li>
              <li>Phone: {BRAND.phone}</li>
              <li>
                Address: {BRAND.address.primary.street}, {BRAND.address.primary.suburb}, {" "}
                {BRAND.address.primary.city} {BRAND.address.primary.postcode}
              </li>
            </ul>

            <div className="mt-12 p-6 bg-secondary/50 rounded-2xl not-prose">
              <p className="text-sm text-muted-foreground">
                These terms are provided for informational purposes and should be reviewed by a 
                legal professional for your specific circumstances. By using our services, you 
                acknowledge that you have read and understood these Terms of Service.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
