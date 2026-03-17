import { NextRequest, NextResponse } from 'next/server';
import Stripe from 'stripe';
import { Resend } from 'resend';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: '2025-01-27.acacia',
});

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: NextRequest) {
  const body = await request.text();
  const signature = request.headers.get('stripe-signature');

  if (!signature) {
    return NextResponse.json({ error: 'No signature' }, { status: 400 });
  }

  let event: Stripe.Event;

  try {
    event = stripe.webhooks.constructEvent(
      body,
      signature,
      process.env.STRIPE_WEBHOOK_SECRET!
    );
  } catch (err) {
    console.error('Webhook signature verification failed:', err);
    return NextResponse.json({ error: 'Invalid signature' }, { status: 400 });
  }

  if (event.type === 'checkout.session.completed') {
    const session = event.data.object as Stripe.Checkout.Session;

    const customerEmail = session.customer_details?.email || session.customer_email;
    const sessionId = session.id;

    if (customerEmail) {
      try {
        const downloadLink = `https://carnivorecalc.com/guide?session_id=${sessionId}`;

        await resend.emails.send({
          from: 'CarnivoreCalc <onboarding@resend.dev>',
          to: customerEmail,
          subject: 'Your Carnivore Meal Plan is ready! 🥩',
          html: `
            <!DOCTYPE html>
            <html>
              <head>
                <meta charset="utf-8">
                <meta name="viewport" content="width=device-width, initial-scale=1">
              </head>
              <body style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif; background: #1c0a00; color: #e7e5e4; margin: 0; padding: 0;">
                <div style="max-width: 560px; margin: 0 auto; padding: 40px 24px;">
                  
                  <div style="text-align: center; margin-bottom: 32px;">
                    <span style="font-size: 48px;">🥩</span>
                    <h1 style="color: #fafaf9; font-size: 24px; margin: 16px 0 8px;">Your Meal Plan is Ready</h1>
                    <p style="color: #a8a29e; margin: 0;">30-Day Carnivore Meal Plan</p>
                  </div>

                  <p style="color: #d6d3d1; line-height: 1.6;">Hey!</p>
                  <p style="color: #d6d3d1; line-height: 1.6;">
                    Your purchase is confirmed. Here's your instant access link to the 
                    <strong style="color: #fafaf9;">30-Day Carnivore Meal Plan</strong>:
                  </p>

                  <div style="text-align: center; margin: 32px 0;">
                    <a href="${downloadLink}" 
                       style="background: #dc2626; color: white; text-decoration: none; font-weight: 700; 
                              padding: 16px 32px; border-radius: 8px; display: inline-block; font-size: 16px;">
                      🥩 Open Your Meal Plan →
                    </a>
                  </div>

                  <div style="background: #1c1917; border-radius: 8px; padding: 16px; margin: 24px 0;">
                    <p style="color: #78716c; font-size: 13px; margin: 0 0 8px;">Inside your meal plan:</p>
                    <ul style="color: #a8a29e; font-size: 14px; margin: 0; padding-left: 20px; line-height: 1.8;">
                      <li>30 days of carnivore meals (breakfast, lunch, dinner)</li>
                      <li>Weekly shopping lists with exact amounts</li>
                      <li>Electrolyte protocol to survive week one</li>
                      <li>Budget cuts ($) vs premium options</li>
                      <li>Eating out guide for any restaurant</li>
                    </ul>
                  </div>

                  <p style="color: #78716c; font-size: 13px; line-height: 1.6;">
                    <strong style="color: #a8a29e;">Tip:</strong> Open the link and use your browser's 
                    "Print → Save as PDF" to save it permanently to your device.
                  </p>

                  <hr style="border: none; border-top: 1px solid #1c1917; margin: 32px 0;" />

                  <p style="color: #57534e; font-size: 12px; text-align: center;">
                    CarnivoreCalc · Questions? Reply to this email.<br />
                    <a href="https://carnivorecalc.com" style="color: #dc2626;">carnivorecalc.com</a>
                  </p>
                </div>
              </body>
            </html>
          `,
        });

        console.log(`Fulfillment email sent to ${customerEmail} for session ${sessionId}`);
      } catch (emailError) {
        console.error('Failed to send fulfillment email:', emailError);
      }
    } else {
      console.warn(`No email found for session ${sessionId}`);
    }
  }

  return NextResponse.json({ received: true });
}
