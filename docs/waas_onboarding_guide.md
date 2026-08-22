# Website-as-a-Service (WaaS) Client Onboarding & Operations Guide

This guide covers setting up automated monthly subscription billing in Stripe, deploying client sites to Vercel/Netlify for free hosting, and executing digital agreements seamlessly.

---

## 💳 1. Automated Recurring Billing & Terms Checkbox in Stripe (Default Workflow)

Using Stripe Payment Links allows you to **collect payment AND execute a legally binding agreement in 1 single step**, with zero PDF back-and-forth:

1. **Create a Stripe Account**: Go to [Stripe Dashboard](https://dashboard.stripe.com).
2. **Set Up Subscription Products**:
   * **Product A: Basic Tier** -> $150 / month recurring + $300 upfront setup fee.
   * **Product B: Standard Tier** -> $300 / month recurring + $500 upfront setup fee.
   * **Product C: Premium Tier** -> $600 / month recurring + $1,000 upfront setup fee.
3. **Enable Terms of Service Checkbox**:
   * In your Stripe Payment Link options, check **"Require customers to accept Terms of Service"**.
   * Paste the WaaS Agreement Terms (6-month commitment, hosting included, Dylan Roth Web Services owns site code until term completes).
4. **Send Link to Client**:
   * When a client says *"Let me get started"*, you text or email them your Stripe Link.
   * When they check the box and submit their card, the **$300 setup fee is charged instantly**, the **$150/mo automated subscription begins**, and the agreement is **legally signed under the US E-SIGN Act**!

---

## 🚀 2. Free High-Performance Hosting on Vercel

Hosting client sites on Vercel costs $0/month on the hobby/pro tier for static client sites while giving 99.99% uptime and global CDN speed.

1. **Push Repo to GitHub**:
   ```bash
   git init
   git add .
   git commit -m "Client website build"
   git push origin main
   ```
2. **Deploy on Vercel**:
   * Connect your GitHub account to Vercel.
   * Click **Add New Project** and select the client repository.
   * Framework Preset: **Vite**.
   * Click **Deploy**. (Build takes < 40 seconds).
3. **Domain Mapping (Handoff)**:
   * Go to **Settings -> Domains** in Vercel.
   * Add the client's custom domain (e.g. `apexplumbingaustin.com`).
   * Ask the client to update their domain registrar (GoDaddy, Namecheap, Google Domains/SquareSpace) DNS records:
     * **A Record**: `@` -> `76.76.21.21`
     * **CNAME Record**: `www` -> `cname.vercel-dns.com`

---

## 📜 3. WaaS Agreement Terms (Paste into Stripe Terms Box)

```text
DYLAN ROTH WEB SERVICES - SUBSCRIPTION TERMS & CONDITIONS

By checking this box and submitting payment, Client agrees to the following terms:

1. SERVICES INCLUDED:
Dylan Roth Web Services ("Provider") will build, host, and maintain a modern mobile-responsive website for Client including SSL security, 99.9% uptime monitoring, local Google SEO schema, and quarterly content updates.

2. PAYMENT & FEES:
Client agrees to an upfront setup fee ($300) and an automated monthly recurring subscription ($150/mo) charged to the card on file.

3. TERM & CANCELLATION:
- Initial Term: 6 Months minimum commitment.
- Renewal: After 6 months, agreement converts to month-to-month.
- Cancellation: 30 days written notice after the initial 6-month term.
- Ownership: Provider maintains ownership of website code and hosting infrastructure during active subscription.
```
