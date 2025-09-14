import Stripe from 'stripe'
import { PRICING } from './constants'

export const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: '2023-10-16',
})

export async function createCheckoutSession({
  priceId,
  customerId,
  successUrl,
  cancelUrl,
  metadata
}: {
  priceId: string
  customerId?: string
  successUrl: string
  cancelUrl: string
  metadata?: Record<string, string>
}) {
  const session = await stripe.checkout.sessions.create({
    mode: 'subscription',
    payment_method_types: ['card'],
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
  })

  return session
}

export async function createConsultingCheckoutSession({
  type,
  successUrl,
  cancelUrl,
  metadata
}: {
  type: keyof typeof PRICING.CONSULTING
  successUrl: string
  cancelUrl: string
  metadata?: Record<string, string>
}) {
  const pricing = PRICING.CONSULTING[type]
  
  const session = await stripe.checkout.sessions.create({
    mode: 'payment',
    payment_method_types: ['card'],
    line_items: [
      {
        price_data: {
          currency: 'usd',
          product_data: {
            name: pricing.name,
            description: pricing.features.join(", ")
          },
          unit_amount: pricing.price * 100,
        },
        quantity: 1,
      },
    ],
    success_url: successUrl,
    cancel_url: cancelUrl,
    metadata,
  })

  return session
}

export async function createCustomer({
  email,
  name,
  metadata
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

export async function getSubscription(subscriptionId: string) {
  const subscription = await stripe.subscriptions.retrieve(subscriptionId)
  return subscription
}

export async function cancelSubscription(subscriptionId: string) {
  const subscription = await stripe.subscriptions.cancel(subscriptionId)
  return subscription
}
