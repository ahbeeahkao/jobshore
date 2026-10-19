# Jobshore — Enterprise AI, Automation, Frappe ERPNext, POS Systems & Web/Mobile Platform

Official SEO + AEO (Answer Engine Optimization) web platform for **Jobshore**, built with **Astro** and **Tailwind CSS** for ultra-fast static hosting on **GitHub Pages** (`https://ahbeeahkao.github.io/jobshore`) and seamless transition to a custom domain later.

---

## 0. Quick Configuration: Update Email, WhatsApp, SSM Registration & Price Visibility

All company contact details, SSM registration number, and pricing visibility are controlled from **one single block** at the very top of [`src/data/siteData.ts`](./src/data/siteData.ts) (lines 1–18):

```ts
export const COMPANY_CONFIG = {
  brandName: 'Jobshore',
  legalName: 'Jobshore Technologies', // e.g., 'Jobshore Sdn. Bhd.'
  ssmRegistrationNo: 'SSM Reg. No: 202601012345 (1567890-X)', // Set to '' to hide until registered
  email: 'hello@jobshore.com',
  phoneDisplay: '+60 3-7890 4210',
  whatsappDisplay: '+60 12-890 4210',
  whatsappNumberClean: '60128904210', // Digits only (country code + number) for wa.me links
  city: 'Petaling Jaya',
  state: 'Selangor',
  country: 'Malaysia',
  countryCode: 'MY',
  // Set showStartingPrice to false to show "Custom Milestone Quote • 14-Day Pilot Available" instead of price numbers
  showStartingPrice: true,
  customPriceFallbackText: 'Custom Milestone Quote • 14-Day Pilot Available',
};
```

- **Updating `COMPANY_CONFIG` automatically updates**:
  - The Footer & Contact Section (`email`, `whatsapp`, `ssmRegistrationNo`, `legalName`)
  - The 1-Click WhatsApp Deal Closer button (`https://wa.me/${whatsappNumberClean}`)
  - The `Organization` JSON-LD schema in `<head>`
  - All 5 Service Pillar cards and deep-dive pages (`showStartingPrice` toggle)

### Built-In Trilingual Switcher (`EN` | `BM` | `中文`)
- The top bar includes a live **`EN` | `BM` | `中文`** switcher that translates the Hero headline, Executive AEO Summary, Service Pillar titles/subtitles, and CTAs between **English**, **Bahasa Melayu**, and **Simplified Chinese**.
- Translations can be customized in `UI_TRANSLATIONS` and `SERVICE_PILLARS` inside [`src/data/siteData.ts`](./src/data/siteData.ts).

---

## 1. Complete List of AI Services You Can Offer (`AI_SERVICE_CATALOG`)

In addition to ERPNext, POS, Business Automation, and Web/Mobile engineering, Jobshore is structured to offer **8 high-margin, high-demand B2B AI service lines** (showcased on the homepage at `/#why-choose-us` and `/services/ai-ocr-verification`):

| Code | AI Service Offering | Target Buyers | Pricing / Engagement Model |
| :--- | :--- | :--- | :--- |
| **AI-01** | **AI-Assisted Coding & Legacy Modernization** | CTOs, VP Eng, SaaS Founders | Fixed-Scope Migration (PHP/Java/.NET → TS/Python/Go) or Squad Retainer |
| **AI-02** | **Deterministic AI Verification & Anti-Hallucination Guardrails** | FinTech, Finance, Enterprise IT | Architecture Audit + CI/CD Verification Gate Setup |
| **AI-03** | **AI-Powered Automated Software Testing & Self-Healing QA** | Product Teams, E-Commerce, Web/Mobile | Turnkey Playwright E2E + API Contract Suite |
| **AI-04** | **Enterprise Multi-Language OCR & Intelligent Document Processing (IDP)** | Finance/AP, Logistics, Customs, Distributors | 14-Day Pilot + Volume or On-Premise License (EN/BM/中文) |
| **AI-05** | **Private Enterprise RAG ("Chat with Your Company Docs")** | Operations, HR, Legal, Regulated Firms | Fixed-Scope Knowledge Base + Private LLM (`vLLM`/`Ollama`) |
| **AI-06** | **AI Copilot for Frappe ERPNext & POS Predictive Analytics** | CEOs, CFOs, Retail & F&B Chains | Natural-Language BI, Stock-Out Forecasting & POS Anomaly Detection |
| **AI-07** | **Omnichannel AI Sales & Order Intake Agents (WhatsApp / Web)** | Wholesalers, Distributors, Retail Chains | 24/7 Multilingual (EN/BM/中文) B2B Order & LHDN e-Invoice Bot |
| **AI-08** | **AI Risk, Hallucination & PDPA Compliance Audits** | Risk Officers, Healthcare, Finance | Red-Teaming, PII Masking & Human-in-the-Loop (HITL) Governance |

---

## 2. How to Close B2B Deals from GitHub Pages Using AI

Because GitHub Pages is a static host, the most effective way to convert visitors into paying clients is combining **client-side AI solution scoping** with **instant multi-channel deal handoff**:

### Step 1: On-Page Interactive ROI & AI Solution Blueprint Generator (`/#roi-calculator` & `/#contact`)
- Visitors calculate their exact annual savings in **MYR (RM)** or **USD ($)** using the **Interactive ROI Calculator** (`src/components/InteractiveRoiCalculator.astro`).
- In the **Project Scope & AI Blueprint Form** (`src/components/ContactSection.astro`), prospects check the pillars they need (AI/OCR, Automation, ERPNext, POS, Web/Mobile) and click **"Generate AI Architecture Blueprint"**.
- The page immediately generates a structured **Technical Architecture Brief** listing recommended modules and anti-hallucination safeguards.

### Step 2: 1-Click WhatsApp Deal Closer (`wa.me` Deep Link)
- After generating the blueprint, the prospect clicks **"Send Blueprint via WhatsApp"**, which opens WhatsApp with the entire pre-qualified technical brief pre-filled to your number.
- *Why this closes deals fast*: In Malaysia and Southeast Asia, B2B decision-makers respond 3–5x faster on WhatsApp than email. You can immediately reply: *"Send us 3 sample invoices or your SKU sheet right here on WhatsApp, and we will show you live 99.4% OCR / POS / ERPNext extraction on a 30-minute call tomorrow."*
- **To update your WhatsApp number & email**: Edit `COMPANY_INFO.whatsapp` and `COMPANY_INFO.email` in `src/data/siteData.ts` (and the `wa.me/` link in `src/components/ContactSection.astro`).

### Step 3: Optional Automated Webhook → n8n / Make AI Sales Agent
- Even on static GitHub Pages, browser forms can `fetch(WEBHOOK_URL, { method: 'POST', body: JSON })` to an **n8n**, **Make.com**, **Formspree**, or **Web3Forms** webhook endpoint.
- Your n8n workflow can pass the prospect's blueprint to an LLM to automatically generate a branded PDF proposal and notify your team on Telegram/Slack within 10 seconds.

---

## 3. How to Update Latest News, LHDN Guides & Blog Posts (`/#insights`)

You do **not** need a database or WordPress server to publish news or SEO/AEO blog articles.

### Updating or Adding a Post in 60 Seconds (Even Directly on GitHub.com)
1. Open [`src/data/insightsData.ts`](./src/data/insightsData.ts) (either locally or by clicking the **Edit (pencil icon)** on GitHub.com).
2. Scroll to the `INSIGHT_ARTICLES` array and add a new object:
   ```ts
   {
     slug: 'your-new-article-url-slug',
     category: 'ERPNext & LHDN e-Invoice', // or 'AI & Hallucination Safety' | 'POS & Retail Tech' | 'Business Automation'
     title: 'Your Article Headline Here',
     publishedDate: '2026-10-25',
     readTime: '4 min read',
     excerpt: 'Short 1-2 sentence summary shown on the home page card.',
     aeoDirectAnswer: 'Direct, factual 2-3 sentence answer optimized for ChatGPT, Perplexity, and Google AI Overviews.',
     keyTakeaways: [
       'First key takeaway bullet point',
       'Second key takeaway bullet point',
     ],
     bodySections: [
       {
         heading: 'Section 1 Subheading',
         content: 'Paragraph content for section 1...',
       },
     ],
   }
   ```
3. Commit your change. Astro will automatically:
   - Add the new card to the Home Page (`/#insights`)
   - Generate a dedicated SEO/AEO article page at `/insights/your-new-article-url-slug` with `BlogPosting` and `Speakable` JSON-LD schema
   - Add the new URL to `/sitemap.xml`!

---

## 4. Why Choose Jobshore & How We Address AI Risks (Hallucinations)

B2B buyers often worry about **AI hallucinations**, **data privacy (PDPA)**, and **system downtime**. The section at `/#why-choose-us` (`src/components/WhyChooseAndAiSafetySection.astro`) addresses these head-on:

1. **Zero Hallucinations in Finance/OCR**: We never let an LLM write directly to a database. Every output passes through **Deterministic Math Invariants** (`Qty × Unit Price == Line Total` and `Subtotal + SST == Grand Total`) and strict `Pydantic`/`Zod` schemas.
2. **Human-in-the-Loop (HITL) 3-Way Match Gate**: Any OCR field below 98% confidence or with a PO/GRN price variance is routed to a 1-click approval queue before touching ERPNext ledgers.
3. **PDPA & Private LLM Deployment**: Support for zero-data-retention enterprise APIs or 100% private/on-premise models (`vLLM`, `Ollama`) inside the client's VPC.
4. **AST & SAST/DAST Code Verification**: All AI-assisted code is verified by static analysis and 1,000+ property-based tests in CI/CD.
5. **Offline-First POS & Warehouse Resilience**: Local `IndexedDB`/`SQLite` queues ensure retail/F&B POS terminals keep ringing sales and printing receipts even during internet outages.

---

## 5. GitHub Pages Hosting & Switching to Custom Domain Later

### Automatic GitHub Pages Deployment
- This repository includes [`.github/workflows/deploy.yml`](./.github/workflows/deploy.yml) and `public/.nojekyll`.
- In your GitHub repository, go to **Settings → Pages → Build and deployment → Source** and select **GitHub Actions**.
- Every push to `main` builds and deploys the site to `https://ahbeeahkao.github.io/jobshore`.

### Switching to Your Custom Domain Later
When your custom domain is ready:
1. In GitHub **Settings → Pages**, enter your custom domain.
2. In GitHub **Settings → Secrets and variables → Actions → Variables**, add:
   - `PUBLIC_SITE_URL` = `https://your-custom-domain.com`
   - `BASE_PATH` = `/`

---

## 6. Local Development & Build Commands

```bash
# Install dependencies
npm install

# Start development server (binds to 0.0.0.0:4321)
npm run dev

# Build static production output for root domain
npm run build

# Build static production output specifically for GitHub Pages (/jobshore base path)
npm run build:gh-pages
```
