import { Metadata } from "next"
import Link from "next/link"
import { 
  HelpCircle, 
  ChevronDown, 
  Search, 
  Printer, 
  Laptop, 
  ShoppingCart, 
  Wrench,
  Clock,
  CreditCard,
  Truck,
  Shield
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

export const metadata: Metadata = {
  title: "FAQ",
  description: "Frequently asked questions about our repair services, pricing, and policies.",
}

const categories = [
  { icon: Wrench, label: "Repairs", count: 8 },
  { icon: Clock, label: "Turnaround", count: 5 },
  { icon: CreditCard, label: "Pricing", count: 6 },
  { icon: Truck, label: "Shipping", count: 4 },
  { icon: Shield, label: "Warranty", count: 5 },
  { icon: ShoppingCart, label: "Shop", count: 4 },
]

const faqs = {
  repairs: [
    {
      question: "What types of devices do you repair?",
      answer: "We repair a wide range of devices including printers (laser, inkjet, dot matrix), computers (desktop and laptop), copiers, multifunction devices, mobile phones and tablets, office equipment (shredders, laminators, binders), and provide electrical services. We service all major brands including HP, Brother, Canon, Epson, Dell, Apple, and more."
    },
    {
      question: "Do you offer onsite repairs?",
      answer: "Yes! We offer both workshop and onsite repair services. For larger equipment like copiers and multifunction printers, onsite service is often the best option. Our technicians can come to your home or business across the Auckland region. Additional travel fees may apply for locations outside central Auckland."
    },
    {
      question: "How do I book a repair?",
      answer: "You can book a repair through our online booking system, call us directly at 09 630 5579, or email hello@techcarepro.co.nz. Our online booking system allows you to select the service type, describe the issue, upload photos, and choose your preferred date and time."
    },
    {
      question: "Can I drop off my device without an appointment?",
      answer: "Yes, you're welcome to drop off devices at our Mt Eden workshop during business hours (Monday-Friday, 9am-5pm). However, we recommend booking ahead to ensure we can prioritize your repair and have any necessary parts ready."
    },
    {
      question: "Do you provide a diagnosis before repair?",
      answer: "Yes, we provide a free initial diagnosis for most devices. After examining your device, we'll provide a detailed quote with the recommended repairs and estimated costs. You can then decide whether to proceed with the repair. There's no obligation."
    },
    {
      question: "What if my device can't be repaired?",
      answer: "If we determine that your device is beyond economical repair, we'll let you know and provide recommendations for replacement options. There's no charge for the diagnosis in this case. We can also help with data recovery if needed and assist with recycling your old device responsibly."
    },
    {
      question: "Do you use genuine parts?",
      answer: "Yes, we primarily use genuine OEM parts for all repairs. This ensures the best quality and compatibility. For older devices where genuine parts may not be available, we use high-quality compatible parts and will discuss this with you before proceeding."
    },
    {
      question: "Are you authorized to perform warranty repairs?",
      answer: "Yes, we are authorized warranty repair providers for several major brands including Brother, Epson, Sharp, Konica Minolta, and ACCO Brands. If your device is under warranty, we can perform the repair at no cost to you (subject to manufacturer terms)."
    },
  ],
  turnaround: [
    {
      question: "How long does a typical repair take?",
      answer: "Repair times vary depending on the type of device and issue. Many repairs can be completed same-day or within 24-48 hours. More complex repairs or those requiring special parts may take 3-5 business days. We'll provide an estimated turnaround time when we diagnose your device."
    },
    {
      question: "Do you offer express/same-day service?",
      answer: "Yes, we offer same-day service for many common repairs including virus removal, minor computer issues, and some printer repairs. Express service may incur additional fees. Please mention if you need urgent service when booking."
    },
    {
      question: "What if parts need to be ordered?",
      answer: "If we need to order parts, we'll inform you of the expected delivery time (usually 1-5 business days for most parts). We maintain a large stock of common parts to minimize delays. For rare or specialized parts, we'll provide regular updates on the order status."
    },
    {
      question: "Will you keep me updated on the repair progress?",
      answer: "Absolutely! You'll receive SMS and email updates at key stages: when we receive your device, when diagnosis is complete, when repairs begin, and when it's ready for pickup. You can also track your repair status anytime using your tracking code on our website."
    },
    {
      question: "Can I get a loaner device while mine is being repaired?",
      answer: "For business customers with maintenance contracts, we may be able to provide loaner equipment for critical devices. Please discuss this with us when booking. Loaner availability depends on stock and contract terms."
    },
  ],
  pricing: [
    {
      question: "How much does a repair cost?",
      answer: "Repair costs vary based on the device type and issue. Printer repairs typically start from $69-$149, computer repairs from $79-$149, and mobile device repairs from $79-$149. We provide free quotes before any work begins, so you'll know the exact cost upfront."
    },
    {
      question: "Is there a diagnostic fee?",
      answer: "We offer free initial diagnosis for most devices. If you decide not to proceed with the repair after receiving the quote, there's no charge. For complex diagnostics that require significant time or special equipment, a fee may apply - we'll always inform you beforehand."
    },
    {
      question: "What payment methods do you accept?",
      answer: "We accept Visa, Mastercard, EFTPOS, bank transfer, and cash. For business customers, we also offer account terms (subject to approval). Online orders can be paid via credit card or bank transfer."
    },
    {
      question: "Do you offer payment plans?",
      answer: "For larger repairs over $500, we can arrange interest-free payment plans through our finance partners. Please ask us about this option when receiving your quote."
    },
    {
      question: "Are there any hidden fees?",
      answer: "No, we believe in transparent pricing. The quote you receive includes all parts, labour, and GST. We'll never add extra charges without discussing them with you first. If we discover additional issues during repair, we'll contact you for approval before proceeding."
    },
    {
      question: "Do you offer business pricing or contracts?",
      answer: "Yes! We offer competitive business pricing and maintenance contracts for companies with multiple devices. Contracts include priority service, discounted rates, and preventive maintenance. Contact us for a customized quote."
    },
  ],
  shipping: [
    {
      question: "Do you ship products nationwide?",
      answer: "Yes, we ship all our consumables and parts throughout New Zealand. Standard shipping takes 1-3 business days for most locations. Express overnight delivery is available for urgent orders."
    },
    {
      question: "How much does shipping cost?",
      answer: "Shipping is FREE for orders over $100. For smaller orders, standard shipping is $6.90 for urban addresses and $12.90 for rural addresses. Express shipping is available from $15.90."
    },
    {
      question: "Can I send my device for repair by courier?",
      answer: "Yes, you can courier your device to us if you're outside Auckland. Please ensure it's well-packaged and insured. Contact us first for shipping instructions and we'll provide a repair quote before beginning any work."
    },
    {
      question: "Do you offer local pickup?",
      answer: "Yes, you can collect orders from our Mt Eden workshop during business hours. Select 'Local Pickup' at checkout. We'll notify you when your order is ready for collection."
    },
  ],
  warranty: [
    {
      question: "What warranty do you provide on repairs?",
      answer: "All our repairs come with a 90-day warranty covering both parts and labour. If the same issue recurs within this period, we'll repair it at no additional cost. Some repairs may have extended warranty periods - we'll inform you of the specific terms."
    },
    {
      question: "What does the warranty cover?",
      answer: "Our warranty covers the specific repair performed and any parts we replaced. It doesn't cover new issues, accidental damage, or problems caused by misuse. If you're unsure whether an issue is covered, just bring it back and we'll assess it."
    },
    {
      question: "How do I make a warranty claim?",
      answer: "Simply contact us with your original repair reference number and describe the issue. You can call, email, or use our online booking system. We'll arrange to inspect the device and perform any necessary warranty repairs."
    },
    {
      question: "Does repair void my manufacturer's warranty?",
      answer: "Repairs performed by our authorized technicians maintain your manufacturer's warranty. For non-warranty repairs, the specific terms may vary. We always use quality parts and professional techniques that meet or exceed manufacturer standards."
    },
    {
      question: "What warranty do products have?",
      answer: "All consumables we sell (toners, inks, drums) come with a minimum 12-month warranty against defects. If a product is faulty, we'll replace it or refund your purchase. This is in addition to your rights under the Consumer Guarantees Act."
    },
  ],
  shop: [
    {
      question: "Are your products genuine?",
      answer: "Yes, we sell 100% genuine, original manufacturer products. We source directly from authorized distributors to ensure authenticity. Look for the genuine product badge on all our listings."
    },
    {
      question: "How do I know which cartridge fits my printer?",
      answer: "Each product listing shows compatible printer models. You can also use the search function to find products by your printer model. If you're unsure, contact us with your printer model and we'll recommend the right product."
    },
    {
      question: "Do you offer auto-replenishment?",
      answer: "Yes! Business customers can set up automatic reordering for consumables. We'll track your usage and automatically ship new supplies before you run out. Contact us to set up this convenient service."
    },
    {
      question: "What is your return policy?",
      answer: "We offer a 30-day return policy for unused products in original packaging. If a product is defective, we'll replace it immediately. Simply contact us with your order number to arrange a return or exchange."
    },
  ],
}

export default function FAQPage() {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="py-20 bg-gradient-to-br from-primary-50 via-white to-accent-50 relative overflow-hidden">
        <div className="absolute inset-0 pattern-grid opacity-50" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <Badge className="mb-4">Help Center</Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Frequently Asked <span className="text-gradient">Questions</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Find quick answers to common questions about our services, pricing, and policies.
            </p>
            <div className="relative max-w-xl mx-auto">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
              <Input 
                placeholder="Search for answers..." 
                className="pl-12 py-6 text-lg rounded-2xl shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-12 border-b">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {categories.map((category) => (
              <Card key={category.label} className="hover:border-primary-300 hover:shadow-md transition-all cursor-pointer">
                <CardContent className="p-4 text-center">
                  <category.icon className="w-8 h-8 mx-auto text-primary-600 mb-2" />
                  <p className="font-medium">{category.label}</p>
                  <p className="text-sm text-muted-foreground">{category.count} questions</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Content */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto space-y-12">
            {/* Repairs */}
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl bg-primary-100 flex items-center justify-center">
                  <Wrench className="w-5 h-5 text-primary-600" />
                </div>
                <h2 className="text-2xl font-bold">Repairs</h2>
              </div>
              <Accordion type="single" collapsible className="space-y-3">
                {faqs.repairs.map((faq, index) => (
                  <AccordionItem key={index} value={`repairs-${index}`} className="border rounded-xl px-4">
                    <AccordionTrigger className="text-left hover:no-underline py-4">
                      <span className="font-medium">{faq.question}</span>
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground pb-4">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>

            {/* Turnaround */}
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl bg-primary-100 flex items-center justify-center">
                  <Clock className="w-5 h-5 text-primary-600" />
                </div>
                <h2 className="text-2xl font-bold">Turnaround Time</h2>
              </div>
              <Accordion type="single" collapsible className="space-y-3">
                {faqs.turnaround.map((faq, index) => (
                  <AccordionItem key={index} value={`turnaround-${index}`} className="border rounded-xl px-4">
                    <AccordionTrigger className="text-left hover:no-underline py-4">
                      <span className="font-medium">{faq.question}</span>
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground pb-4">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>

            {/* Pricing */}
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl bg-primary-100 flex items-center justify-center">
                  <CreditCard className="w-5 h-5 text-primary-600" />
                </div>
                <h2 className="text-2xl font-bold">Pricing & Payment</h2>
              </div>
              <Accordion type="single" collapsible className="space-y-3">
                {faqs.pricing.map((faq, index) => (
                  <AccordionItem key={index} value={`pricing-${index}`} className="border rounded-xl px-4">
                    <AccordionTrigger className="text-left hover:no-underline py-4">
                      <span className="font-medium">{faq.question}</span>
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground pb-4">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>

            {/* Shipping */}
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl bg-primary-100 flex items-center justify-center">
                  <Truck className="w-5 h-5 text-primary-600" />
                </div>
                <h2 className="text-2xl font-bold">Shipping & Delivery</h2>
              </div>
              <Accordion type="single" collapsible className="space-y-3">
                {faqs.shipping.map((faq, index) => (
                  <AccordionItem key={index} value={`shipping-${index}`} className="border rounded-xl px-4">
                    <AccordionTrigger className="text-left hover:no-underline py-4">
                      <span className="font-medium">{faq.question}</span>
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground pb-4">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>

            {/* Warranty */}
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl bg-primary-100 flex items-center justify-center">
                  <Shield className="w-5 h-5 text-primary-600" />
                </div>
                <h2 className="text-2xl font-bold">Warranty & Returns</h2>
              </div>
              <Accordion type="single" collapsible className="space-y-3">
                {faqs.warranty.map((faq, index) => (
                  <AccordionItem key={index} value={`warranty-${index}`} className="border rounded-xl px-4">
                    <AccordionTrigger className="text-left hover:no-underline py-4">
                      <span className="font-medium">{faq.question}</span>
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground pb-4">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>

            {/* Shop */}
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl bg-primary-100 flex items-center justify-center">
                  <ShoppingCart className="w-5 h-5 text-primary-600" />
                </div>
                <h2 className="text-2xl font-bold">Shop & Products</h2>
              </div>
              <Accordion type="single" collapsible className="space-y-3">
                {faqs.shop.map((faq, index) => (
                  <AccordionItem key={index} value={`shop-${index}`} className="border rounded-xl px-4">
                    <AccordionTrigger className="text-left hover:no-underline py-4">
                      <span className="font-medium">{faq.question}</span>
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground pb-4">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </div>
        </div>
      </section>

      {/* Still Have Questions */}
      <section className="py-16 bg-gradient-to-br from-primary-500 to-accent-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <HelpCircle className="w-12 h-12 mx-auto mb-4 opacity-80" />
          <h2 className="text-3xl font-bold mb-4">Still Have Questions?</h2>
          <p className="text-white/80 mb-8 max-w-2xl mx-auto">
            Can&apos;t find what you&apos;re looking for? Our support team is here to help.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button size="lg" variant="secondary" className="bg-white text-primary-600 hover:bg-white/90" asChild>
              <Link href="/contact">Contact Us</Link>
            </Button>
            <Button size="lg" variant="outline" className="border-white/30 text-white hover:bg-white/10" asChild>
              <a href="tel:09 630 5579">Call 09 630 5579</a>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
