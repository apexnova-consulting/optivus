import { Resend } from "resend"

const resend = new Resend(process.env.RESEND_API_KEY)

export interface EmailTemplate {
  type:
    | "account_confirmation"
    | "purchase_receipt_saas"
    | "purchase_receipt_consulting"
    | "weekly_summary"
    | "onboarding_drip"
  data: Record<string, any>
}

const templates = {
  account_confirmation: ({
    firstName,
    confirmLink,
  }: {
    firstName: string
    confirmLink: string
  }) => ({
    subject: "Welcome to Optivus — confirm your email",
    html: `
      <h1>Welcome to Optivus</h1>
      <p>Hi ${firstName}, welcome to Optivus. Click the button below to confirm your account:</p>
      <a href="${confirmLink}" style="background: linear-gradient(to right, #2563EB, #06B6D4); color: white; padding: 12px 24px; border-radius: 8px; text-decoration: none; display: inline-block; margin: 16px 0;">
        Confirm Account
      </a>
      <p>Once confirmed, you'll be guided through a quick onboarding to set org settings and start your demo.</p>
    `,
  }),

  purchase_receipt_saas: ({
    firstName,
    plan,
  }: {
    firstName: string
    plan: string
  }) => ({
    subject: "Thanks — your Optivus subscription is active",
    html: `
      <h1>Thanks for subscribing to Optivus</h1>
      <p>Hi ${firstName}, thanks for subscribing to Optivus (${plan}). Your account is now active.</p>
      <h2>Next steps:</h2>
      <ol>
        <li>Complete onboarding</li>
        <li>Upload users or connect Slack</li>
        <li>Run your first weekly pulse</li>
      </ol>
    `,
  }),

  purchase_receipt_consulting: ({
    firstName,
  }: {
    firstName: string
  }) => ({
    subject: "ApexNova Audit booked — next steps",
    html: `
      <h1>Thanks for booking the AI ROI Audit</h1>
      <p>Hi ${firstName}, thanks for booking the AI ROI Audit.</p>
      <p>A member of the ApexNova team will reach out to schedule the kickoff.</p>
      <p>Please upload a short summary of tools and team sizes using the button below:</p>
      <a href="/upload" style="background: linear-gradient(to right, #2563EB, #06B6D4); color: white; padding: 12px 24px; border-radius: 8px; text-decoration: none; display: inline-block; margin: 16px 0;">
        Upload Details
      </a>
    `,
  }),

  weekly_summary: ({
    orgName,
    weekStart,
    adoptionPct,
    avgHoursSaved,
    roiWeekly,
    dashboardLink,
  }: {
    orgName: string
    weekStart: string
    adoptionPct: number
    avgHoursSaved: number
    roiWeekly: number
    dashboardLink: string
  }) => ({
    subject: `Optivus Weekly Summary — ${orgName} — week of ${weekStart}`,
    html: `
      <h1>Weekly Summary</h1>
      <div style="margin: 24px 0;">
        <h2>This week's highlights:</h2>
        <ul>
          <li>Adoption: ${adoptionPct}%</li>
          <li>Avg hours saved: ${avgHoursSaved}/wk</li>
          <li>Estimated weekly ROI: $${roiWeekly}</li>
        </ul>
      </div>
      <a href="${dashboardLink}" style="background: linear-gradient(to right, #2563EB, #06B6D4); color: white; padding: 12px 24px; border-radius: 8px; text-decoration: none; display: inline-block;">
        View Full Dashboard
      </a>
    `,
  }),

  onboarding_drip: ({
    firstName,
    emailNumber,
    ctaLink,
  }: {
    firstName: string
    emailNumber: number
    ctaLink: string
  }) => {
    const subjects = [
      "Welcome to Optivus",
      "Set up your organization",
      "Connect your tools",
      "Understanding your first snapshot",
      "Accelerate with a Rapid Adoption Sprint",
      "Customer Success Story",
      "Ready to upgrade?",
    ]

    const content = [
      "Welcome and confirm your account",
      "Set your average hourly rate and upload users",
      "Connect Slack and run your first pulse",
      "Learn to interpret your adoption metrics",
      "Book a Rapid Adoption Sprint consultation",
      "See how others achieved success",
      "Upgrade to unlock more features",
    ]

    return {
      subject: subjects[emailNumber],
      html: `
        <h1>${subjects[emailNumber]}</h1>
        <p>Hi ${firstName},</p>
        <p>${content[emailNumber]}</p>
        <a href="${ctaLink}" style="background: linear-gradient(to right, #2563EB, #06B6D4); color: white; padding: 12px 24px; border-radius: 8px; text-decoration: none; display: inline-block; margin: 16px 0;">
          ${emailNumber === 0 ? "Confirm Account" : "Continue Setup"}
        </a>
      `,
    }
  }),
}

export async function sendEmail(to: string, template: EmailTemplate) {
  try {
    const { type, data } = template
    const { subject, html } = templates[type](data)

    const email = await resend.emails.send({
      from: "Optivus <noreply@optivus.com>",
      to,
      subject,
      html,
    })

    return email
  } catch (error) {
    console.error("Error sending email:", error)
    throw error
  }
}

export async function sendWeeklyPulse(to: string, data: any) {
  try {
    const email = await resend.emails.send({
      from: "Optivus <noreply@optivus.com>",
      to,
      subject: "Optivus Weekly Pulse",
      html: `
        <h1>Optivus Weekly Pulse</h1>
        <p>Hi ${data.firstName}, quick 1-minute check:</p>
        <ol>
          <li>Did you use ${data.toolName} this week?</li>
          <li>About how many hours did this save you this week?</li>
          <li>On a scale of 1-5, how clear were communications about using ${data.toolName}?</li>
        </ol>
        <p>Your answers help your team measure real ROI. Thanks!</p>
        <a href="${data.pulseLink}" style="background: linear-gradient(to right, #2563EB, #06B6D4); color: white; padding: 12px 24px; border-radius: 8px; text-decoration: none; display: inline-block; margin: 16px 0;">
          Complete Pulse
        </a>
      `,
    })

    return email
  } catch (error) {
    console.error("Error sending pulse email:", error)
    throw error
  }
}

export async function sendNudge(to: string, data: any) {
  try {
    const email = await resend.emails.send({
      from: "Optivus <noreply@optivus.com>",
      to,
      subject: data.title,
      html: `
        <h1>${data.title}</h1>
        <p>${data.content}</p>
        ${data.ctaLink ? `
          <a href="${data.ctaLink}" style="background: linear-gradient(to right, #2563EB, #06B6D4); color: white; padding: 12px 24px; border-radius: 8px; text-decoration: none; display: inline-block; margin: 16px 0;">
            ${data.ctaText || "Learn More"}
          </a>
        ` : ""}
      `,
    })

    return email
  } catch (error) {
    console.error("Error sending nudge email:", error)
    throw error
  }
}
