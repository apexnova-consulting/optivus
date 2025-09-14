import { NextResponse } from "next/server"
import { stripe } from "@/lib/stripe"
import { headers } from "next/headers"
import { createClient } from "@/lib/supabase/server"

export async function POST(req: Request) {
  try {
    const body = await req.text()
    const headersList = headers()
    const signature = headersList.get("stripe-signature")

    // Basic validation of Stripe events
    if (!signature) {
      return new NextResponse("Missing stripe-signature", { status: 400 })
    }

    const event = JSON.parse(body)

    // Handle subscription events
    if (event.type === "customer.subscription.created" ||
        event.type === "customer.subscription.updated" ||
        event.type === "customer.subscription.deleted") {
      const subscription = event.data.object

      const supabase = createClient()
      
      // Update subscription status in database
      const { error } = await supabase
        .from("subscriptions")
        .upsert({
          id: subscription.id,
          customer_id: subscription.customer,
          status: subscription.status,
          price_id: subscription.items.data[0].price.id,
          quantity: subscription.items.data[0].quantity,
          cancel_at_period_end: subscription.cancel_at_period_end,
          cancel_at: subscription.cancel_at
            ? new Date(subscription.cancel_at * 1000).toISOString()
            : null,
          canceled_at: subscription.canceled_at
            ? new Date(subscription.canceled_at * 1000).toISOString()
            : null,
          current_period_start: new Date(
            subscription.current_period_start * 1000
          ).toISOString(),
          current_period_end: new Date(
            subscription.current_period_end * 1000
          ).toISOString(),
          created: new Date(subscription.created * 1000).toISOString(),
          ended_at: subscription.ended_at
            ? new Date(subscription.ended_at * 1000).toISOString()
            : null,
          trial_start: subscription.trial_start
            ? new Date(subscription.trial_start * 1000).toISOString()
            : null,
          trial_end: subscription.trial_end
            ? new Date(subscription.trial_end * 1000).toISOString()
            : null,
        })
        .select()

      if (error) {
        console.error("Error updating subscription:", error)
        return new NextResponse("Error updating subscription", { status: 500 })
      }
    }

    // Handle payment events
    if (event.type === "payment_intent.succeeded") {
      const paymentIntent = event.data.object
      
      const supabase = createClient()

      // Record successful payment
      const { error } = await supabase
        .from("payments")
        .insert({
          payment_intent_id: paymentIntent.id,
          customer_id: paymentIntent.customer,
          amount: paymentIntent.amount,
          currency: paymentIntent.currency,
          status: paymentIntent.status,
          created: new Date(paymentIntent.created * 1000).toISOString(),
        })

      if (error) {
        console.error("Error recording payment:", error)
        return new NextResponse("Error recording payment", { status: 500 })
      }
    }

    return new NextResponse("Webhook processed", { status: 200 })
  } catch (error) {
    console.error("Error processing webhook:", error)
    return new NextResponse("Webhook error", { status: 400 })
  }
}
