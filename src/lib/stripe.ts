import Stripe from "stripe"

if (!process.env.STRIPE_SECRET_KEY) {
  throw new Error("Missing STRIPE_SECRET_KEY")
}

export const stripe = new Stripe(process.env.STRIPE_SECRET_KEY, {
  apiVersion: "2023-10-16",
  typescript: true,
})

export async function createCheckoutSession({
  priceId,
  successUrl,
  cancelUrl,
  customerId,
  metadata,
}: {
  priceId: string
  successUrl: string
  cancelUrl: string
  customerId?: string
  metadata?: Record<string, string>
}) {
  const session = await stripe.checkout.sessions.create({
    mode: "subscription",
    payment_method_types: ["card"],
    line_items: [
      {
        price: priceId,
        quantity: 1,
      },
    ],
    success_url: successUrl,
    cancel_url: cancelUrl,
    customer: customerId,
    metadata,
    allow_promotion_codes: true,
  })

  return session
}

export async function createCustomerPortalSession({
  customerId,
  returnUrl,
}: {
  customerId: string
  returnUrl: string
}) {
  const session = await stripe.billingPortal.sessions.create({
    customer: customerId,
    return_url: returnUrl,
  })

  return session
}

export async function getSubscription(subscriptionId: string) {
  const subscription = await stripe.subscriptions.retrieve(subscriptionId)
  return subscription
}

export async function cancelSubscription(subscriptionId: string) {
  const subscription = await stripe.subscriptions.del(subscriptionId)
  return subscription
}

export async function updateSubscription({
  subscriptionId,
  priceId,
}: {
  subscriptionId: string
  priceId: string
}) {
  const subscription = await stripe.subscriptions.retrieve(subscriptionId)

  const updatedSubscription = await stripe.subscriptions.update(subscriptionId, {
    items: [
      {
        id: subscription.items.data[0].id,
        price: priceId,
      },
    ],
  })

  return updatedSubscription
}

// Handle subscription status changes client-side
export async function handleSubscriptionChange(customerId: string) {
  const subscriptions = await stripe.subscriptions.list({
    customer: customerId,
    status: "all",
    expand: ["data.default_payment_method"],
  })

  return subscriptions.data[0]
}

// Get customer details including payment methods
export async function getCustomerDetails(customerId: string) {
  const customer = await stripe.customers.retrieve(customerId, {
    expand: ["default_source", "invoice_settings.default_payment_method"],
  })

  return customer
}

// Update customer details
export async function updateCustomer({
  customerId,
  email,
  name,
  metadata,
}: {
  customerId: string
  email?: string
  name?: string
  metadata?: Record<string, string>
}) {
  const customer = await stripe.customers.update(customerId, {
    email,
    name,
    metadata,
  })

  return customer
}

// Create a new customer
export async function createCustomer({
  email,
  name,
  metadata,
}: {
  email: string
  name: string
  metadata?: Record<string, string>
}) {
  const customer = await stripe.customers.create({
    email,
    name,
    metadata,
  })

  return customer
}