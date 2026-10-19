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

### Switching to Your DigitalPlat (`digitalplat.org`) or Custom Domain
Because `digitalplat.org` is a **domain registry** (DNS) rather than a web server, the best setup is to **host the site on GitHub Pages (or Cloudflare Pages) and point your DigitalPlat domain to it**:

1. **In Cloudflare / DigitalPlat DNS**:
   - Add a `CNAME` record for your domain (e.g., `jobshore.dpdns.org` or `www`) pointing to `ahbeeahkao.github.io` (set Proxy status to **DNS only / Grey Cloud** while GitHub issues your free SSL certificate).
2. **In GitHub Repository Variables** (**Settings → Secrets and variables → Actions → Variables**):
   - Create a single repository variable:
     - Name: `CUSTOM_DOMAIN`
     - Value: `your-domain.dpdns.org` (without `https://`)
3. **In GitHub Settings → Pages → Custom domain**:
   - Enter `your-domain.dpdns.org` and check **Enforce HTTPS**.
   - Our workflow (`.github/workflows/deploy.yml`) will automatically switch `BASE_PATH` to `/`, update all SEO/AEO canonical URLs to `https://your-domain.dpdns.org`, and generate the `CNAME` file!

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

---

## 7. Commercial Playbook: The 5 "Low-Hanging Carrots" & Winning Back Pre-AI Past Customers

### A. The 5 Pillar "Low-Hanging Carrots" (High-Value to Client, <1 Hour Effort for You)
Never ask a cold or returning prospect to sign a RM 50,000+ overhaul on Day 1. Use these 5 bite-sized **Wedge Offers** (already built into `src/data/siteData.ts` on your website) to get an immediate "Yes":

| Pillar | The Low-Hanging Carrot (Wedge Offer) | Why It Closes Fast |
| :--- | :--- | :--- |
| **01. AI Coding, Verification & OCR** | **Free "3-Document Torture Test"**: Client sends 3 messy/handwritten/multi-language invoices or DOs on WhatsApp; you return 100% math-verified JSON/Excel in 15 mins. | Zero cost to them, takes you 5 minutes via your OCR pipeline, proves undeniable accuracy. |
| **02. Business Process Automation** | **7-Day "Single-Bottleneck" Sprint**: Automate just **1** hated daily task (e.g., WhatsApp dealer order intake or AP 3-way match) for a small fixed pilot fee. | Solves an immediate headache in 1 week; 80%+ expand to full-company automation. |
| **03. Frappe & ERPNext** | **10-Day Standalone LHDN MyInvois Sidecar Bridge + Seat-Tax Audit**: Connect LHDN e-Invoicing to their *current* SQL/AutoCount/Excel first without forcing an immediate ERP rip-and-replace. | Every Malaysian SME needs LHDN compliance now; once on your Frappe bridge, full ERPNext migration is a natural Phase 2. |
| **04. POS Software & Systems** | **1-Counter 14-Day Live Store Trial + Receipt QR e-Invoice**: Put 1 terminal (or 10 SKUs) alongside their existing register for 14 days. | Removes retail/F&B owners' #1 fear (checkout disruption during peak hours). |
| **05. Web & Mobile Apps** | **Free 60-Sec Google/ChatGPT Visibility Audit + 48-Hr Clickable UI Prototype**: Show them why AI search misses their current site + generate a clickable preview of their new portal/app. | Visualizes the finished product before they spend a sen. |

---

### B. Copy-Paste WhatsApp Scripts to Win Back "Pre-AI" Past Customers & Old Quotes
Clients who didn't return years ago because of high pricing **did not reject your skill—they rejected pre-AI manual development costs**. Today, AI-accelerated engineering + open-source Frappe lets you deliver **50–65% cheaper and 3x faster** while keeping high margins.

#### 1. English WhatsApp Win-Back Script
> *"Hi [Name], hope you and the team at [Company] are doing well! I was reviewing some of our past project notes from a few years back. Back then—before modern AI engineering and open-source Frappe existed—custom software and ERP work required months of manual coding, which made our pricing high. Today, our AI-verified build pipeline has cut implementation costs by **50–65%** with **$0 per-user license fees**, and we now have ready-to-deploy modules for **LHDN MyInvois e-Invoicing, 99.4% Invoice OCR, and Offline POS**. Since we’ve worked together / spoken before, I’d love to run a free 15-minute live test on 3 of your documents (plus a RM 2,000 returning-client pilot credit if you ever need an upgrade). You can check out our new live sandbox here: https://ahbeeahkao.github.io/jobshore — no obligation at all, just wanted to share what’s new!"*

#### 2. Bahasa Melayu WhatsApp Win-Back Script
> *"Salam / Hai [Nama], harap bisnes di [Syarikat] semakin maju! Saya baru semak semula rekod sebut harga lama kita beberapa tahun lepas. Dulu—sebelum wujudnya kejuruteraan AI moden dan sistem sumber terbuka Frappe—pembangunan sistem memerlukan masa koding manual yang panjang menyebabkan kos agak tinggi. Sekarang, teknologi AI-verified kami telah **menurunkan kos pembangunan sebanyak 50–65%** dengan **$0 yuran lesen pengguna**, lengkap dengan modul sedia guna untuk **e-Invois LHDN MyInvois, AI OCR (99.4% tepat), dan POS Luar Talian**. Jika [Nama] berminat, saya boleh buat demo percuma 15 minit menggunakan 3 sampel invois syarikat tuan (serta rebat pelanggan lama RM 2,000). Boleh lihat demo langsung kami di: https://ahbeeahkao.github.io/jobshore"*

#### 3. 简体中文 WhatsApp 老客户唤醒话术
> *“[名字] 老板您好！希望贵司生意兴隆。最近在整理几年前的项目档案时想到了您。几年前在 AI 编程和开源 Frappe 成熟之前，定制软件与 ERP 需要大量人工手写代码，所以当时的报价确实偏高。现在通过我们的 AI 验证工程管线，**开发周期与整体费用直接降低了 50%–65%**，而且 **终身 $0 账号人头费**，还自带现成的 **马来西亚 LHDN MyInvois 电子发票、99.4% 财务单据自动识别 (OCR) 和断网收银 POS**。作为老朋友，您可以随时发 3 张平时最头疼的供应商发票给我，我免费帮您跑一次 15 分钟的自动化实测（老客户重启项目还有 RM 2,000 专属抵扣金）。欢迎看看我们全新的在线沙盒演示：https://ahbeeahkao.github.io/jobshore ！”*

