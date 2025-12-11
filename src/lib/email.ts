// Email service using Resend
// API key will be provided later
import { Resend } from "resend"

interface SendEmailOptions {
  to: string | string[]
  subject: string
  html: string
  text?: string
  from?: string
}

interface EmailResult {
  success: boolean
  messageId?: string
  error?: string
}

let resend: Resend | null = null

export async function sendEmail(options: SendEmailOptions): Promise<EmailResult> {
  const { to, subject, html, text, from = "TechCare Pro <noreply@techcarepro.co.nz>" } = options

  // Check if Resend is configured
  if (!process.env.RESEND_API_KEY) {
    console.log("Email not sent - RESEND_API_KEY not configured")
    console.log("Would send email:", { to, subject })
    return { success: false, error: "Email service not configured" }
  }

  try {
    // Initialize if not already
    if (!resend) {
      resend = new Resend(process.env.RESEND_API_KEY)
    }

    const data = await resend.emails.send({
      from,
      to: Array.isArray(to) ? to : [to],
      subject,
      html,
      text,
    })

    return { success: true, messageId: data.data?.id }
  } catch (error) {
    console.error("Email send error:", error)
    return { 
      success: false, 
      error: error instanceof Error ? error.message : "Failed to send email" 
    }
  }
}

// Email Templates

export function bookingConfirmationEmail(data: {
  customerName: string
  trackingCode: string
  deviceBrand: string
  deviceModel: string
  serviceType: string
  preferredDate: string
}) {
  return {
    subject: `Booking Confirmed - ${data.trackingCode}`,
    html: `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
</head>
<body style="font-family: system-ui, -apple-system, sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: 0 auto; padding: 20px;">
  <div style="text-align: center; margin-bottom: 30px;">
    <h1 style="color: #3b82f6; margin: 0;">TechCare Pro</h1>
    <p style="color: #666; margin-top: 5px;">Expert Device Repairs</p>
  </div>
  
  <div style="background: linear-gradient(135deg, #3b82f6, #8b5cf6); color: white; padding: 30px; border-radius: 16px; margin-bottom: 20px;">
    <h2 style="margin: 0 0 10px;">Booking Confirmed!</h2>
    <p style="margin: 0; opacity: 0.9;">Your repair service has been scheduled</p>
  </div>

  <p>Hello ${data.customerName},</p>
  
  <p>Thank you for choosing TechCare Pro. Your repair booking has been confirmed.</p>

  <div style="background: #f8fafc; border: 1px solid #e2e8f0; border-radius: 12px; padding: 20px; margin: 20px 0;">
    <h3 style="margin: 0 0 15px; color: #1e293b;">Booking Details</h3>
    <table style="width: 100%; border-collapse: collapse;">
      <tr>
        <td style="padding: 8px 0; color: #64748b;">Tracking Code:</td>
        <td style="padding: 8px 0; font-weight: 600;">${data.trackingCode}</td>
      </tr>
      <tr>
        <td style="padding: 8px 0; color: #64748b;">Device:</td>
        <td style="padding: 8px 0;">${data.deviceBrand} ${data.deviceModel}</td>
      </tr>
      <tr>
        <td style="padding: 8px 0; color: #64748b;">Service Type:</td>
        <td style="padding: 8px 0;">${data.serviceType}</td>
      </tr>
      <tr>
        <td style="padding: 8px 0; color: #64748b;">Preferred Date:</td>
        <td style="padding: 8px 0;">${data.preferredDate}</td>
      </tr>
    </table>
  </div>

  <div style="text-align: center; margin: 30px 0;">
    <a href="https://techcarepro.co.nz/track?code=${data.trackingCode}" style="display: inline-block; background: #3b82f6; color: white; padding: 12px 30px; border-radius: 8px; text-decoration: none; font-weight: 600;">Track Your Repair</a>
  </div>

  <p>We will contact you shortly to confirm the appointment details.</p>

  <hr style="border: none; border-top: 1px solid #e2e8f0; margin: 30px 0;">
  
  <p style="font-size: 12px; color: #64748b; text-align: center;">
    TechCare Pro | 123 Tech Street, Auckland CBD<br>
    (09) 123 4567 | info@techcarepro.co.nz
  </p>
</body>
</html>
    `,
  }
}

export function orderConfirmationEmail(data: {
  customerName: string
  orderId: string
  items: { name: string; quantity: number; price: number }[]
  subtotal: number
  shipping: number
  tax: number
  total: number
  shippingAddress: string
}) {
  const itemsHtml = data.items
    .map(
      (item) => `
    <tr>
      <td style="padding: 12px; border-bottom: 1px solid #e2e8f0;">${item.name}</td>
      <td style="padding: 12px; border-bottom: 1px solid #e2e8f0; text-align: center;">${item.quantity}</td>
      <td style="padding: 12px; border-bottom: 1px solid #e2e8f0; text-align: right;">$${(item.price * item.quantity).toFixed(2)}</td>
    </tr>
  `
    )
    .join("")

  return {
    subject: `Order Confirmed - #${data.orderId.slice(0, 8)}`,
    html: `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
</head>
<body style="font-family: system-ui, -apple-system, sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: 0 auto; padding: 20px;">
  <div style="text-align: center; margin-bottom: 30px;">
    <h1 style="color: #3b82f6; margin: 0;">TechCare Pro</h1>
    <p style="color: #666; margin-top: 5px;">Premium Printer Supplies</p>
  </div>
  
  <div style="background: linear-gradient(135deg, #10b981, #3b82f6); color: white; padding: 30px; border-radius: 16px; margin-bottom: 20px;">
    <h2 style="margin: 0 0 10px;">Thank you for your order!</h2>
    <p style="margin: 0; opacity: 0.9;">Order #${data.orderId.slice(0, 8)}</p>
  </div>

  <p>Hello ${data.customerName},</p>
  
  <p>Thank you for your order. We're preparing your items and will notify you when they ship.</p>

  <div style="background: #f8fafc; border-radius: 12px; padding: 20px; margin: 20px 0;">
    <h3 style="margin: 0 0 15px; color: #1e293b;">Order Summary</h3>
    <table style="width: 100%; border-collapse: collapse;">
      <thead>
        <tr style="background: #e2e8f0;">
          <th style="padding: 12px; text-align: left;">Item</th>
          <th style="padding: 12px; text-align: center;">Qty</th>
          <th style="padding: 12px; text-align: right;">Price</th>
        </tr>
      </thead>
      <tbody>
        ${itemsHtml}
      </tbody>
    </table>
    
    <div style="margin-top: 20px; padding-top: 15px; border-top: 2px solid #e2e8f0;">
      <table style="width: 100%;">
        <tr>
          <td style="padding: 5px 0; color: #64748b;">Subtotal:</td>
          <td style="padding: 5px 0; text-align: right;">$${data.subtotal.toFixed(2)}</td>
        </tr>
        <tr>
          <td style="padding: 5px 0; color: #64748b;">Shipping:</td>
          <td style="padding: 5px 0; text-align: right;">${data.shipping === 0 ? "Free" : `$${data.shipping.toFixed(2)}`}</td>
        </tr>
        <tr>
          <td style="padding: 5px 0; color: #64748b;">GST (15%):</td>
          <td style="padding: 5px 0; text-align: right;">$${data.tax.toFixed(2)}</td>
        </tr>
        <tr style="font-weight: 600; font-size: 18px;">
          <td style="padding: 10px 0;">Total:</td>
          <td style="padding: 10px 0; text-align: right;">$${data.total.toFixed(2)}</td>
        </tr>
      </table>
    </div>
  </div>

  <div style="background: #f8fafc; border-radius: 12px; padding: 20px; margin: 20px 0;">
    <h3 style="margin: 0 0 10px; color: #1e293b;">Shipping Address</h3>
    <p style="margin: 0; color: #64748b;">${data.shippingAddress}</p>
  </div>

  <hr style="border: none; border-top: 1px solid #e2e8f0; margin: 30px 0;">
  
  <p style="font-size: 12px; color: #64748b; text-align: center;">
    TechCare Pro | 123 Tech Street, Auckland CBD<br>
    (09) 123 4567 | info@techcarepro.co.nz
  </p>
</body>
</html>
    `,
  }
}

export function contactFormEmail(data: {
  name: string
  email: string
  phone?: string
  subject: string
  message: string
}) {
  return {
    subject: `New Contact Form: ${data.subject}`,
    html: `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
</head>
<body style="font-family: system-ui, sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: 0 auto; padding: 20px;">
  <h2 style="color: #3b82f6;">New Contact Form Submission</h2>
  
  <div style="background: #f8fafc; border: 1px solid #e2e8f0; border-radius: 12px; padding: 20px; margin: 20px 0;">
    <table style="width: 100%;">
      <tr>
        <td style="padding: 8px 0; color: #64748b; width: 100px;">From:</td>
        <td style="padding: 8px 0; font-weight: 600;">${data.name}</td>
      </tr>
      <tr>
        <td style="padding: 8px 0; color: #64748b;">Email:</td>
        <td style="padding: 8px 0;"><a href="mailto:${data.email}">${data.email}</a></td>
      </tr>
      ${data.phone ? `
      <tr>
        <td style="padding: 8px 0; color: #64748b;">Phone:</td>
        <td style="padding: 8px 0;">${data.phone}</td>
      </tr>
      ` : ""}
      <tr>
        <td style="padding: 8px 0; color: #64748b;">Subject:</td>
        <td style="padding: 8px 0;">${data.subject}</td>
      </tr>
    </table>
  </div>

  <h3>Message:</h3>
  <div style="background: #f8fafc; border: 1px solid #e2e8f0; border-radius: 12px; padding: 20px;">
    <p style="margin: 0; white-space: pre-wrap;">${data.message}</p>
  </div>
</body>
</html>
    `,
  }
}

export function bookingStatusUpdateEmail(data: {
  customerName: string
  trackingCode: string
  status: string
  technicianNotes?: string
  quotedPrice?: number
}) {
  const statusMessages: Record<string, { title: string; message: string; color: string }> = {
    CONFIRMED: {
      title: "Booking Confirmed",
      message: "Your repair booking has been confirmed. We'll see you soon!",
      color: "#3b82f6",
    },
    IN_PROGRESS: {
      title: "Repair In Progress",
      message: "Our technicians are now working on your device.",
      color: "#8b5cf6",
    },
    WAITING_PARTS: {
      title: "Waiting for Parts",
      message: "We're waiting for parts to arrive to complete your repair.",
      color: "#f59e0b",
    },
    COMPLETED: {
      title: "Repair Completed!",
      message: "Great news! Your device repair is complete and ready for pickup.",
      color: "#10b981",
    },
    CANCELLED: {
      title: "Booking Cancelled",
      message: "Your repair booking has been cancelled.",
      color: "#ef4444",
    },
  }

  const statusInfo = statusMessages[data.status] || {
    title: "Status Update",
    message: `Your booking status has been updated to: ${data.status}`,
    color: "#6b7280",
  }

  return {
    subject: `${statusInfo.title} - ${data.trackingCode}`,
    html: `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
</head>
<body style="font-family: system-ui, sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: 0 auto; padding: 20px;">
  <div style="text-align: center; margin-bottom: 30px;">
    <h1 style="color: #3b82f6; margin: 0;">TechCare Pro</h1>
  </div>
  
  <div style="background: ${statusInfo.color}; color: white; padding: 30px; border-radius: 16px; margin-bottom: 20px; text-align: center;">
    <h2 style="margin: 0;">${statusInfo.title}</h2>
  </div>

  <p>Hello ${data.customerName},</p>
  
  <p>${statusInfo.message}</p>

  <div style="background: #f8fafc; border-radius: 12px; padding: 20px; margin: 20px 0;">
    <p style="margin: 0;"><strong>Tracking Code:</strong> ${data.trackingCode}</p>
    ${data.quotedPrice ? `<p style="margin: 10px 0 0;"><strong>Quoted Price:</strong> $${data.quotedPrice.toFixed(2)}</p>` : ""}
    ${data.technicianNotes ? `<p style="margin: 10px 0 0;"><strong>Notes:</strong> ${data.technicianNotes}</p>` : ""}
  </div>

  <div style="text-align: center; margin: 30px 0;">
    <a href="https://techcarepro.co.nz/track?code=${data.trackingCode}" style="display: inline-block; background: #3b82f6; color: white; padding: 12px 30px; border-radius: 8px; text-decoration: none; font-weight: 600;">View Details</a>
  </div>

  <hr style="border: none; border-top: 1px solid #e2e8f0; margin: 30px 0;">
  
  <p style="font-size: 12px; color: #64748b; text-align: center;">
    TechCare Pro | 123 Tech Street, Auckland CBD<br>
    (09) 123 4567 | info@techcarepro.co.nz
  </p>
</body>
</html>
    `,
  }
}
