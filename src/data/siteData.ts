// ============================================================================
// 1. CENTRAL COMPANY CONFIGURATION (EDIT YOUR DETAILS HERE IN ONE PLACE)
// ============================================================================
export const COMPANY_CONFIG = {
  brandName: 'Jobshore',
  legalName: 'Jobshore (M) Sdn Bhd',
  ssmRegistrationNo: 'SSM Reg. No: 202301031763 (1525686-X)',
  // Paste your deployed Google Apps Script Web App URL below (from google-apps-script/Code.gs):
  // Example: 'https://script.google.com/macros/s/AKfycbx.../exec'
  leadWebhookUrl: '',
  // Optional fallback email (only used if leadWebhookUrl is left empty during local testing; encoded in JS, never exposed in raw HTML)
  fallbackEmailUser: 'hello',
  fallbackEmailDomain: 'jobshore.dpdns.org',
  streetAddress: 'NO. 44-1, JALAN PRIMA 2, PUSAT NIAGA METRO PRIMA KEPONG',
  postalCode: '52100',
  city: 'KUALA LUMPUR',
  state: 'W.P. KUALA LUMPUR',
  country: 'MALAYSIA',
  countryCode: 'MY',
  fullAddress: 'NO. 44-1, JALAN PRIMA 2, PUSAT NIAGA METRO PRIMA KEPONG, 52100 KUALA LUMPUR W.P. KUALA LUMPUR MALAYSIA',
  // Set showStartingPrice to false so static cards don't low-anchor enterprise buyers;
  // Instead, buyers get a scope-adjusted estimate paired with ROI inside the AI Quote Closer (#contact).
  showStartingPrice: false,
  customPriceFallbackText: 'Outcome-Based Milestone + Tracked SLA',
};

export interface SubService {
  title: string;
  description: string;
  metrics: string;
  tags: string[];
}

export interface ServicePillar {
  id: string;
  slug: string;
  badge: string;
  shortTitle: string;
  shortTitleBm: string;
  shortTitleZh: string;
  title: string;
  titleBm: string;
  titleZh: string;
  subtitle: string;
  subtitleBm: string;
  subtitleZh: string;
  outcomePromise: string; // The concrete business result the buyer gets
  tangibleScorecard: string; // How intangible AI/engineering is tracked tangibly every month
  commercialModel: string; // How it is priced without punitive per-seat software licenses
  fastStartCarrot: string; // The low-hanging carrot / wedge offer to close deals fast
  aeoSummary: string; // Direct Answer Capsule optimized for LLM / Featured Snippet extraction
  iconName: 'ai' | 'automation' | 'erp' | 'pos' | 'webmobile';
  accentColor: string;
  kpis: { value: string; label: string }[];
  subServices: SubService[];
  deliverables: string[];
  techStack: string[];
  timeline: string;
  startingInvestment: string;
  faqs: { question: string; answer: string }[];
}

export interface CaseStudy {
  id: string;
  category: 'AI & OCR' | 'Business Automation' | 'Frappe ERPNext' | 'POS Systems' | 'Web & Mobile Apps';
  clientType: string;
  region: string;
  pillarBadge: string;
  timeline: string;
  title: string;
  challenge: string;
  solution: string;
  deliverablePreview: string;
  monthlyScorecardProof: string;
  results: { metric: string; label: string }[];
  stack: string[];
}

export interface FaqItem {
  category:
    | 'AI & OCR'
    | 'Business Automation'
    | 'Frappe & ERPNext'
    | 'POS Software & Systems'
    | 'Web & Mobile'
    | 'SEO, AEO & Engagement';
  question: string;
  answer: string;
}

// Defaults to https://jobshore.dpdns.org; automatically adapts if PUBLIC_SITE_URL or BASE_URL is overridden
const configuredSite = (import.meta.env.PUBLIC_SITE_URL || 'https://jobshore.dpdns.org').replace(/\/$/, '');
const configuredBase = (import.meta.env.BASE_URL || '/').replace(/\/$/, '');
const resolvedDomain = `${configuredSite}${configuredBase}`;

export const COMPANY_INFO = {
  name: COMPANY_CONFIG.brandName,
  legalName: COMPANY_CONFIG.legalName,
  ssmRegistrationNo: COMPANY_CONFIG.ssmRegistrationNo,
  showStartingPrice: COMPANY_CONFIG.showStartingPrice,
  customPriceFallbackText: COMPANY_CONFIG.customPriceFallbackText,
  leadWebhookUrl: COMPANY_CONFIG.leadWebhookUrl,
  fallbackEmailUser: COMPANY_CONFIG.fallbackEmailUser,
  fallbackEmailDomain: COMPANY_CONFIG.fallbackEmailDomain,
  domain: resolvedDomain,
  githubRepoUrl: 'https://github.com/ahbeeahkao/jobshore',
  tagline: 'Outcome-Guaranteed AI Engineering, Business Automation, Frappe ERPNext, POS Systems & Product Studio',
  headquarters: {
    streetAddress: COMPANY_CONFIG.streetAddress,
    postalCode: COMPANY_CONFIG.postalCode,
    city: COMPANY_CONFIG.city,
    state: COMPANY_CONFIG.state,
    country: COMPANY_CONFIG.country,
    countryCode: COMPANY_CONFIG.countryCode,
    fullAddress: COMPANY_CONFIG.fullAddress,
    regionCoverage: ['Malaysia', 'Singapore', 'Southeast Asia (ASEAN)', 'Global B2B (US, UK, EU, AU)'],
  },
  stats: [
    { value: '99.4%', label: 'Verified OCR Ledger Accuracy', detail: 'Zero-hallucination math & PO/GRN cross-check' },
    { value: '85%', label: 'Manual Work Eliminated', detail: 'Tracked monthly in reclaimed staff hours & RM saved' },
    { value: '100%', label: 'LHDN & Audit Compliance', detail: 'ERPNext + Offline POS with $0 per-user seat tax' },
    { value: '3.2x', label: 'Faster Zero-Defect Releases', detail: 'AI-verified code + self-healing automated QA' },
  ],
};

export const UI_TRANSLATIONS = {
  en: {
    topBadge: 'We Sell Verified Business Outcomes — Not Unchecked AI Code or Per-Seat Licenses',
    heroBadge: 'Outcome-Guaranteed AI • Automation • Frappe ERPNext • POS Systems • Web & Mobile',
    heroTitleHtml:
      'Anyone Can Prompt AI to Write Code. We Engineer <span class="bg-gradient-to-r from-sky-400 via-cyan-300 to-emerald-400 bg-clip-text text-transparent">Verified Business Outcomes</span> That Cut Costs &amp; Scale Operations.',
    heroSummaryHtml:
      'Raw AI prompts hallucinate numbers, break in production, and create hidden compliance risks. <strong class="text-white">Jobshore</strong> delivers <strong class="text-emerald-300">measurable, contractually tracked operational outcomes</strong> across five pillars: (1) <strong class="text-sky-300">99.4% Accurate Document OCR &amp; Zero-Defect Verified Software</strong>, (2) <strong class="text-emerald-300">85% Less Manual Data Entry via Autonomous Workflows</strong>, (3) <strong class="text-indigo-300">Real-Time Stock &amp; Cashflow Control on $0-License Frappe ERPNext</strong>, (4) <strong class="text-amber-300">Zero-Downtime Retail/F&amp;B POS with Automated LHDN e-Invoicing</strong>, and (5) <strong class="text-violet-300">Revenue-Generating SEO/AEO Web Portals &amp; Field Mobile Apps</strong>.',
    ctaPrimary: 'Calculate Your Guaranteed Outcome & ROI',
    ctaSecondary: 'See Live Proof in Our AI & POS Sandbox',
    navBookCall: 'Get Outcome Proposal',
  },
  bm: {
    topBadge: 'Kami Menjual Hasil Bisnes Yang Terbukti — Bukan Sekadar Kod AI Mentah',
    heroBadge: 'Hasil Terjamin: AI & OCR • Automasi • Frappe ERPNext • Sistem POS • Web & Aplikasi',
    heroTitleHtml:
      'Sesiapa Boleh Guna AI Tulis Kod. Kami Membina <span class="bg-gradient-to-r from-sky-400 via-cyan-300 to-emerald-400 bg-clip-text text-transparent">Hasil Operasi Terjamin</span> Yang Menjimatkan Kos &amp; Masa.',
    heroSummaryHtml:
      'Prompt AI biasa sering tersilap kira angka cukai dan gagal semasa operasi sebenar. <strong class="text-white">Jobshore</strong> membekalkan <strong class="text-emerald-300">hasil perniagaan yang diukur setiap bulan</strong> merentasi lima teras: (1) <strong class="text-sky-300">Ketepatan Dokumen OCR 99.4% &amp; Perisian Disahkan Tanpa Ralat</strong>, (2) <strong class="text-emerald-300">85% Pengurangan Kerja Manual Melalui Automasi Pintar</strong>, (3) <strong class="text-indigo-300">Kawalan Stok &amp; Akaun Masa Nyata dengan Frappe ERPNext ($0 Lesen Pengguna)</strong>, (4) <strong class="text-amber-300">Sistem POS Runcit/F&amp;B Tanpa Gangguan Internet + e-Invois LHDN Automatik</strong>, dan (5) <strong class="text-violet-300">Portal Web SEO/AEO &amp; Aplikasi Mudah Alih Berimpak Tinggi</strong>.',
    ctaPrimary: 'Kira Jaminan ROI & Penjimatan Anda',
    ctaSecondary: 'Lihat Bukti Langsung AI OCR & POS',
    navBookCall: 'Dapatkan Pelan Hasil',
  },
  zh: {
    topBadge: '我们交付可量化的商业结果——而非未经验证的 AI 代码或高昂人头授权费',
    heroBadge: '结果导向：防幻觉 AI 与 OCR • 业务自动化 • Frappe ERPNext • 离线 POS • 网站与移动应用',
    heroTitleHtml:
      '任何人都能用 AI 写代码，但我们交付<span class="bg-gradient-to-r from-sky-400 via-cyan-300 to-emerald-400 bg-clip-text text-transparent">零差错、可量化的商业结果</span>，直接为您降本增效。',
    heroSummaryHtml:
      '普通 AI 提示词极易产生财务算错、系统崩溃与合规风险。<strong class="text-white">Jobshore</strong> 专注于交付<strong class="text-emerald-300">每月可通过数据看板追踪的确定性业务成果</strong>：(1) <strong class="text-sky-300">99.4% 零幻觉单据 OCR 提取与经过严格验证的无缺陷代码</strong>，(2) <strong class="text-emerald-300">砍掉 85% 人工录入的端到端自动化工作流</strong>，(3) <strong class="text-indigo-300">省下 70% 软件成本的开源 Frappe ERPNext 实时账物管控 ($0 账号费)</strong>，(4) <strong class="text-amber-300">断网照常收银 + 100% 自动申报 LHDN 电子发票的门店 POS 系统</strong>，以及 (5) <strong class="text-violet-300">自带 Google/AI 搜索引擎客流的网站与业务员移动应用</strong>。',
    ctaPrimary: '测算您的年度省钱金额与落地方案',
    ctaSecondary: '体验 AI OCR、POS 与验证沙盒',
    navBookCall: '获取结果保障方案',
  },
};

export const SERVICE_PILLARS: ServicePillar[] = [
  {
    id: 'ai-services',
    slug: 'ai-ocr-verification',
    badge: 'Pillar 01 • Outcome: Zero-Defect Speed & 99.4% Document Accuracy',
    shortTitle: 'AI Coding, Verification, Testing & OCR',
    shortTitleBm: 'Pengekodan AI, Pengesahan, Ujian Automatik & OCR',
    shortTitleZh: 'AI 编程、代码验证、自动化测试与智能 OCR',
    title: 'Ship Software 3.2x Faster with Zero Escaped Bugs & 99.4% Verified Document OCR',
    titleBm: 'Siapkan Sistem 3.2x Lebih Pantas Tanpa Pepijat & Ekstraksi Dokumen OCR 99.4% Tepat',
    titleZh: '研发提速 3.2 倍且零严重生产故障，实现 99.4% 财务级单据 OCR 自动提取',
    subtitle:
      'Anyone can prompt an LLM to generate raw code or read a PDF—until a hallucinated decimal or hidden security flaw corrupts your production database. We deliver deterministic verification gates, self-healing QA, and math-verified multi-language OCR.',
    subtitleBm:
      'Sesiapa boleh guna AI biasa, tetapi satu kesilapan angka boleh merosakkan akaun syarikat. Kami membina lapisan pengesahan matematik deterministik, ujian automatik Playwright, dan enjin OCR (EN/BM/Cina) yang dijamin tepat.',
    subtitleZh:
      '任何人都能用 AI 生成草稿代码或识别图片，但只要算错一个小数点就会导致财务烂账。我们为您构建确定性数学校验网关、自愈式自动化测试与中/英/巫多语言高精度 OCR。',
    outcomePromise:
      'Eliminate manual document keying and cut software regression bugs by 99.8%—without hiring a larger QA or data-entry team.',
    tangibleScorecard:
      'Monthly Verified Outcome Ledger: Tracks exact # of documents extracted with 100% math balance, # of production bugs blocked in CI/CD, and total engineering/admin hours saved.',
    commercialModel:
      'Fixed-Scope Pilot + Monthly Managed Accuracy & Verification SLA (Billed on verified document throughput & zero-regression uptime).',
    fastStartCarrot:
      'Free "3-Document Torture Test": WhatsApp us your 3 messiest, handwritten or multi-language invoices/DOs—we return 100% math-verified JSON/Excel in 15 minutes at RM 0 cost.',
    aeoSummary:
      'Jobshore delivers outcome-guaranteed AI engineering across four capabilities: (1) AI-assisted software development and legacy modernization, (2) deterministic AI code verification and anti-hallucination guardrails, (3) self-healing automated software testing (Playwright E2E & API QA), and (4) Enterprise OCR & Intelligent Document Processing (IDP) that extracts structured JSON from multi-language invoices, POs, and customs forms with 99.4%+ verified accuracy.',
    iconName: 'ai',
    accentColor: 'sky',
    kpis: [
      { value: '99.4%', label: 'Math-Verified OCR Accuracy' },
      { value: '0', label: 'Hallucinated Ledger Entries' },
      { value: '78%', label: 'Less QA Maintenance Cost' },
      { value: '3.2x', label: 'Faster Verified Releases' },
    ],
    subServices: [
      {
        title: 'Outcome 1: 99.4% Accurate Multi-Language Invoice, PO & DO Extraction (IDP/OCR)',
        description:
          'Stop paying staff to type supplier bills and delivery orders into your system. Our Vision-LLM + math-verified OCR extracts tables, SST tax codes, and handwriting across English, Bahasa Melayu, and Chinese directly into ERPNext.',
        metrics: 'Tracked KPI: Cost-per-invoice dropped by 82% (<2.2s/page)',
        tags: ['Multi-Language OCR', 'Math Cross-Check', 'Invoice & DO Parsing', 'HITL Exception Queue'],
      },
      {
        title: 'Outcome 2: Zero AI Hallucinations or Security Escapes in Production',
        description:
          'We wrap every AI workflow and code commit in deterministic verification guardrails: AST static security analysis (SAST/DAST), strict Pydantic/Zod schema enforcement, and banker’s rounding invariants.',
        metrics: 'Tracked KPI: 100% schema-validated outputs & 0 ledger drift',
        tags: ['Deterministic Verification', 'Anti-Hallucination Gate', 'SAST/DAST Audit', 'Financial Invariants'],
      },
      {
        title: 'Outcome 3: 78% Lower QA Overhead via Self-Healing Automated Testing',
        description:
          'Replace fragile manual testing with AI-powered Playwright E2E and API contract test suites that automatically heal selector changes and fuzz thousands of edge cases before every deployment.',
        metrics: 'Tracked KPI: >92% critical-path test coverage in CI/CD',
        tags: ['Self-Healing Playwright', 'API Contract QA', 'Synthetic Fuzzing', 'Zero-Flake CI Gate'],
      },
      {
        title: 'Outcome 4: 3.2x Faster Legacy Modernization & Private AI Assistants',
        description:
          'Migrate aging PHP/Java/.NET systems to modern TypeScript/Python/Go or deploy PDPA-compliant private RAG assistants ("Chat with Your SOPs & Contracts") inside your own VPC.',
        metrics: 'Tracked KPI: 100% IP ownership & zero external data leakage',
        tags: ['Legacy Modernization', 'Private VPC LLMs', 'Enterprise RAG', 'Full Code Ownership'],
      },
    ],
    deliverables: [
      'Live Monthly Outcome Scorecard (Documents Verified, Bugs Blocked, Hours Reclaimed)',
      'Math-Verified Vision-OCR Pipeline with Human-in-the-Loop (HITL) Exception Queue',
      'Automated CI/CD Verification Gate & Self-Healing Playwright E2E Test Suite',
      'Private or Zero-Retention LLM Gateway with Token Cost & PDPA Controls',
      '100% Source Code & Benchmark Dataset Ownership',
    ],
    techStack: [
      'Python',
      'FastAPI',
      'TypeScript',
      'Playwright',
      'Zod / Pydantic',
      'OpenAI / Claude / Gemini',
      'vLLM & Ollama',
      'Vision-LLM OCR',
      'PostgreSQL + pgvector',
      'Docker',
    ],
    timeline: '2–6 Weeks (Verified Pilot in 14 Days)',
    startingInvestment: 'From USD $3,500 / MYR 15,000',
    faqs: [
      {
        question: 'Since anyone can use ChatGPT or Cursor to write code, why hire Jobshore for AI services?',
        answer:
          'Generating raw code or text with AI takes 30 seconds; making it 99.9% reliable, secure, and mathematically accurate in production takes deep systems engineering. DIY AI setups fail when faced with skewed multi-language invoices, floating-point tax rounding, or UI changes that break tests. Jobshore sells the guaranteed outcome—backed by deterministic math proofs, AST security gates, and a tracked monthly accuracy scorecard.',
      },
      {
        question: 'How accurate is Jobshore’s AI OCR on messy, skewed, or multi-language Malaysian and SEA documents?',
        answer:
          'Our hybrid OCR pipeline combines geometric deskewing, layout-aware document segmentation, and Vision-Language Models (VLMs) with deterministic mathematical cross-checks (verifying qty × unit price = line total and subtotal + tax = grand total). This achieves 99.4%+ field-level accuracy across English, Bahasa Melayu, and Chinese commercial documents.',
      },
    ],
  },
  {
    id: 'business-automation',
    slug: 'business-automation',
    badge: 'Pillar 02 • Outcome: 85% Less Manual Admin & 10x Faster Processing',
    shortTitle: 'Business Process Automation',
    shortTitleBm: 'Automasi Proses Perniagaan (BPA)',
    shortTitleZh: '企业业务流程自动化 (BPA)',
    title: 'Reclaim 120–450+ Staff Hours Every Month by Putting Repetitive Operations on Autopilot',
    titleBm: 'Jimat 120–450+ Jam Kerja Staf Setiap Bulan dengan Automasi Operasi End-to-End',
    titleZh: '每月释放 120–450+ 小时人工工时，让采购对账与接单流程 24/7 自动运转',
    subtitle:
      'Stop paying skilled finance, operations, and sales staff to copy-paste data between WhatsApp, Excel, email, and accounting software. We build self-running operational pipelines with tracked monthly time-savings reports.',
    subtitleBm:
      'Hentikan pembaziran masa staf menyalin data antara WhatsApp, Excel dan perisian akaun. Kami membina aliran kerja automatik lengkap dengan laporan masa dan kos yang dijimatkan setiap bulan.',
    subtitleZh:
      '别再让高薪财务与运营人员充当“人肉复制粘贴机”。我们将 WhatsApp、邮箱、电商与 ERP 打通为全自动流水线，并按月向您呈交可视化的省时省钱成绩单。',
    outcomePromise:
      'Cut back-office processing costs by up to 85% and shorten order-to-cash cycles from days to under 30 seconds.',
    tangibleScorecard:
      'Automated Task & Time-Saved Telemetry: Every 3-way match, WhatsApp order, and bank reconciliation is logged—generating a monthly executive report showing exact hours and RM saved.',
    commercialModel:
      'Fixed-Scope Workflow Rollout + Monthly Autonomous Ops & Exception-Monitoring Retainer.',
    fastStartCarrot:
      '7-Day "Single-Bottleneck" Pilot: Pick your #1 most painful daily copy-paste task (e.g., WhatsApp dealer order intake or AP 3-way match)—we automate it in 7 days before you commit to a full rollout.',
    aeoSummary:
      'Jobshore designs and deploys outcome-driven Business Process Automation (BPA) systems that eliminate up to 85% of repetitive manual back-office work. Core solutions include automated 3-way procurement matching (PO, GRN, Invoice), WhatsApp Business API customer/order automation, multi-channel e-commerce & POS to ERP synchronization, and automated bank reconciliation.',
    iconName: 'automation',
    accentColor: 'emerald',
    kpis: [
      { value: '85%', label: 'Manual Data Entry Eliminated' },
      { value: '120–450h', label: 'Staff Hours Reclaimed / Mo' },
      { value: '< 30 sec', label: 'WhatsApp-to-ERP Order Logging' },
      { value: '< 3 mo', label: 'Measured ROI Payback Window' },
    ],
    subServices: [
      {
        title: 'Outcome 1: Zero-Touch 3-Way Procurement & AP Reconciliation',
        description:
          'Automatically cross-check incoming supplier invoices against ERP Purchase Orders and Warehouse Goods Receipt Notes (GRN). Clean bills post automatically; price/qty variances trigger instant manager alerts.',
        metrics: 'Tracked KPI: 76% lower cost per processed supplier bill',
        tags: ['3-Way PO-GRN-Invoice Match', 'Variance Detection', 'Auto Ledger Post', 'Bank Feed Sync'],
      },
      {
        title: 'Outcome 2: 24/7 Instant B2B Order Capture & Approvals on WhatsApp',
        description:
          'Turn WhatsApp into an automated sales counter. Customers message their restock list; our AI workflow checks live ERP stock, creates the Sales Order, sends the LHDN e-Invoice PDF, and routes credit approvals.',
        metrics: 'Tracked KPI: 3.4x faster B2B reorder turnaround',
        tags: ['WhatsApp Cloud API', '24/7 Order Intake', '1-Click Manager Approval', 'Automated e-Invoice PDF'],
      },
      {
        title: 'Outcome 3: Real-Time E-Commerce, POS & Legacy Accounting Sync',
        description:
          'Eliminate nightly CSV exports and stock-outs. We bridge ERPNext, POS outlets, AutoCount, SQL Accounting, Xero, Shopee, Lazada, and Shopify with idempotent, retry-safe webhook queues.',
        metrics: 'Tracked KPI: 99.95% sync reliability & zero double-entries',
        tags: ['n8n & Temporal', 'Idempotent Webhooks', 'Omnichannel Stock Sync', 'Dead-Letter Recovery'],
      },
      {
        title: 'Outcome 4: Automated HR Onboarding, Expense Claims & Monthly Close',
        description:
          'Employees snap a photo of receipts on WhatsApp/mobile; AI OCR verifies policy compliance and routes manager approval, cutting monthly finance closing delays from 12 days to 2 days.',
        metrics: 'Tracked KPI: 10 days shaved off monthly financial close',
        tags: ['Mobile Expense OCR', 'Policy Guardrails', 'Payroll File Automation', 'Full Audit Trail'],
      },
    ],
    deliverables: [
      'Live Automation Telemetry Dashboard (Tasks Executed, Hours Reclaimed, Exceptions Caught)',
      'Production Workflow Engine (n8n / Temporal / Custom FastAPI Microservices)',
      '1-Click Human-in-the-Loop (HITL) Exception Approval Cards on WhatsApp / Slack',
      'Idempotent API Bridges with Automatic Retry & Dead-Letter Recovery',
      'Full SOP Documentation & Staff Handover',
    ],
    techStack: [
      'n8n',
      'Temporal.io',
      'Python / FastAPI',
      'Node.js / TypeScript',
      'Redis & BullMQ',
      'WhatsApp Business Cloud API',
      'REST / GraphQL / Webhooks',
      'Frappe Server Scripts',
      'PostgreSQL',
      'Docker',
    ],
    timeline: '2–4 Weeks per Workflow Stream',
    startingInvestment: 'From USD $3,000 / MYR 13,000',
    faqs: [
      {
        question: 'How do you make "automation" tangible so we can see the exact ROI every month?',
        answer:
          'Every automated workflow we deploy includes built-in telemetry counters. Each time an invoice is 3-way matched, a WhatsApp order is logged, or a POS shift is reconciled, the system records the transaction and the benchmark manual minutes saved—delivering an automated monthly ROI scorecard to your inbox.',
      },
      {
        question: 'Can Jobshore automate workflows without replacing our existing accounting, POS, or CRM software?',
        answer:
          'Yes. While we specialize in Frappe ERPNext and Jobshore POS, our automation middleware connects seamlessly with existing systems including Xero, QuickBooks, SQL Accounting, AutoCount, SAP, HubSpot, Salesforce, Shopify, and custom SQL databases.',
      },
    ],
  },
  {
    id: 'erpnext-services',
    slug: 'erpnext-implementation',
    badge: 'Pillar 03 • Outcome: Real-Time Control, 100% LHDN Compliance & $0 Seat Tax',
    shortTitle: 'Frappe & ERPNext Consultation & Implementation',
    shortTitleBm: 'Konsultasi & Implementasi Frappe ERPNext',
    shortTitleZh: 'Frappe ERPNext 咨询、实施与电子发票集成',
    title: 'Cut ERP Software Costs by 60–75% While Gaining Real-Time Stock, Production & LHDN Compliance',
    titleBm: 'Jimat 60–75% Kos Perisian ERP dengan Kawalan Stok, Kilang & LHDN MyInvois Masa Nyata',
    titleZh: '削减 60–75% ERP 软件开支，实现财务、生产、多仓进销存与 LHDN 电子发票实时管控',
    subtitle:
      'Open-source ERPNext is free to download, but poorly configured ERPs fail when stock ledgers, manufacturing BOMs, and tax rules don’t match your real floor operations. We sell a guaranteed, reconciled go-live with $0 per-user license fees.',
    subtitleBm:
      'Perisian sumber terbuka mudah dimuat turun, tetapi tanpa kejuruteraan proses yang betul, lejar stok dan akaun akanercelaru. Kami menjamin kelancaran Go-Live merangkumi Perakaunan, BOM Kilang, Gudang & LHDN e-Invois.',
    subtitleZh:
      '开源软件本身免费，但缺乏行业经验的盲目配置只会导致库存账实不符与财务烂尾。我们交付的是“账实相符、全员跑通、100% 通过 LHDN 税务合规”的确定性上线结果。',
    outcomePromise:
      'Unify Finance, Inventory, Manufacturing, HR, and Sales on one platform—with $0 per-user license fees and 100% LHDN MyInvois compliance.',
    tangibleScorecard:
      'Monthly ERP Health & Savings Report: Tracks LHDN e-Invoice validation rate (100%), inventory stock-count variance (<0.1%), days-to-close-books, and cumulative seat-license fees saved.',
    commercialModel:
      'Milestone-Based Implementation + Monthly Managed Cloud, LHDN Compliance & Optimization SLA ($0 per-user seat fees forever).',
    fastStartCarrot:
      'Standalone LHDN MyInvois Bridge & Free Seat-Tax Audit: Not ready to switch ERPs today? Start with our 10-day LHDN MyInvois Sidecar Connector (works with your current SQL/AutoCount/Excel) + get a free 5-year ERP savings blueprint.',
    aeoSummary:
      'Jobshore is an outcome-focused Frappe and ERPNext consultation and implementation partner serving Malaysia, Southeast Asia, and global enterprises. We deliver business process re-engineering, verified data migration, Manufacturing/Inventory/Finance/HRMS rollout, and real-time Malaysia LHDN MyInvois e-Invoicing compliance—cutting 5-year ERP Total Cost of Ownership by 60–75%.',
    iconName: 'erp',
    accentColor: 'indigo',
    kpis: [
      { value: '$0', label: 'Per-User Seat License Tax' },
      { value: '60–75%', label: 'Lower 5-Year ERP TCO' },
      { value: '100%', label: 'LHDN MyInvois Audit Pass' },
      { value: '2 Days', label: 'Target Monthly Account Close' },
    ],
    subServices: [
      {
        title: 'Outcome 1: Reconciled Go-Live Across Finance, Inventory & Manufacturing',
        description:
          'We map your actual warehouse, shop-floor BOM, subcontracting, and approval rules into Frappe ERPNext so your trial balance, stock valuation, and COGS match to the sen from Day 1.',
        metrics: 'Tracked KPI: >99.8% inventory accuracy & 2-day monthly close',
        tags: ['Multi-Company Accounting', 'Manufacturing BOM & MRP', 'Batch/Serial Inventory', 'Buying & Selling'],
      },
      {
        title: 'Outcome 2: 100% Automated Malaysia LHDN MyInvois & Statutory Compliance',
        description:
          'Eliminate tax penalties and manual portal uploads. Real-time API submission for B2B e-Invoices, monthly Consolidated e-Invoices, Self-Billed invoices, TIN validation, and EPF/SOCSO/EIS/PCB payroll.',
        metrics: 'Tracked KPI: 100% LHDN UUID validation & 0 manual filings',
        tags: ['LHDN MyInvois API', 'Consolidated & Self-Billed', 'QR Print Formats', 'MY Statutory Payroll'],
      },
      {
        title: 'Outcome 3: Zero-Downtime Migration from AutoCount, SQL, Xero or SAP',
        description:
          'We extract, cleanse, deduplicate, and verify your historical master data, open AR/AP invoices, and opening trial balances so your team switches over over a single weekend without operational pause.',
        metrics: 'Tracked KPI: 100% reconciled opening trial balance & stock',
        tags: ['AutoCount / SQL Migration', 'SAP / NetSuite Cutover', 'Data Cleansing', 'Parallel Run Audit'],
      },
      {
        title: 'Outcome 4: Custom Frappe Workflows & Executive Profit Dashboards',
        description:
          'Need industry-specific commission rules, dealer rebates, or real-time margin dashboards? We build upgrade-safe custom Frappe apps that fit your business instead of forcing you into rigid templates.',
        metrics: 'Tracked KPI: 100% source code ownership & zero vendor lock-in',
        tags: ['Custom Frappe Apps', 'Frappe Insights BI', 'Role-Based Security', 'Managed HA Hosting'],
      },
    ],
    deliverables: [
      'Reconciled Production Cutover Sign-Off (Trial Balance, AR/AP Aging & Stock Valuation)',
      'Turnkey Malaysia LHDN MyInvois API Connector (B2B, Consolidated & Self-Billed)',
      'Configured Production & Staging ERPNext Environments with Automated Daily Backups',
      'Role-Based Access Control (RBAC), Custom Print Formats & Executive BI Dashboards',
      'Recorded Department-by-Department Video SOPs & Post-Go-Live SLA Support',
    ],
    techStack: [
      'Frappe Framework (v15+)',
      'ERPNext (v15+)',
      'Frappe HRMS',
      'Frappe Insights BI',
      'Python',
      'MariaDB / Postgres',
      'Redis',
      'Docker & Kubernetes',
      'LHDN MyInvois REST API (UBL 2.1)',
      'REST / Webhook APIs',
    ],
    timeline: '6–12 Weeks (SME) • 12–20 Weeks (Enterprise)',
    startingInvestment: 'From USD $7,500 / MYR 32,000',
    faqs: [
      {
        question: 'If Frappe ERPNext is open-source, what am I actually paying Jobshore for?',
        answer:
          'You never pay us a cent for per-user software seat licenses. You pay Jobshore for the guaranteed business outcome: business process engineering, clean migration from your legacy software, accurate manufacturing/inventory/accounting reconciliation, LHDN MyInvois API compliance, custom workflow coding, staff training, and ongoing SLA uptime—while saving RM 50,000 to RM 250,000+ every year in avoided software license rents.',
      },
      {
        question: 'Can Jobshore integrate LHDN MyInvois e-Invoicing into an existing ERPNext setup?',
        answer:
          'Yes. If you already run ERPNext (v13, v14, or v15), we can deploy our standalone LHDN MyInvois Frappe app within 1–2 weeks, complete with TIN lookup, standard/consolidated/self-billed submission, automatic LHDN UUID & QR code embedding, and error retry queues.',
      },
    ],
  },
  {
    id: 'pos-services',
    slug: 'pos-software-system',
    badge: 'Pillar 04 • Outcome: Zero Lost Sales Offline & 100% Automated POS e-Invoicing',
    shortTitle: 'POS Software & Point-of-Sale Systems',
    shortTitleBm: 'Perisian & Sistem POS (Runcit, F&B & Cawangan)',
    shortTitleZh: '智能零售与餐饮 POS 收银系统（支持离线与电子发票）',
    title: 'Never Lose a Sale When Store Internet Drops & Automate 100% of Retail/F&B LHDN e-Invoices',
    titleBm: 'Jualan Kedai Terus Berjalan Walaupun Internet Putus & Automasi 100% e-Invois QR LHDN',
    titleZh: '商场断网照常极速收银，100% 自动搞定小票二维码自助开票与 LHDN 月度汇总申报',
    subtitle:
      'Generic cloud POS tablets freeze the moment mall broadband hiccups, and manual LHDN e-Invoice requests hold up cashier lines. We deliver sub-0.3s offline-resilient checkout, instant QR receipt self-claim, and real-time ERPNext stock deduction.',
    subtitleBm:
      'POS biasa akan tergendala apabila Wi-Fi kedai terputus dan melambatkan barisan касиr. Sistem POS kami beroperasi pantas secara luar talian, mencetak QR e-Invois LHDN automatik, dan menolak stok ERPNext secara masa nyata.',
    subtitleZh:
      '普通云端 POS 一旦遇到网络波动就会卡死收银台，手工开电子发票更会让顾客排长龙。我们的离线优先 POS 断网照常打单，小票自带 LHDN 自助开票二维码，并实时同步总部 ERPNext 库存与日结账目。',
    outcomePromise:
      'Keep every outlet ringing sales 24/7 regardless of internet outages, eliminate nightly CSV stock imports, and automate 100% of walk-in LHDN e-Invoicing.',
    tangibleScorecard:
      'Monthly Multi-Outlet POS Scorecard: Tracks checkout uptime (100%), average transaction speed (<0.3s), automated LHDN QR claims + consolidated batches submitted, and cash/stock variance per shift.',
    commercialModel:
      'Turnkey Per-Outlet Setup + Monthly Managed Cloud Sync, LHDN QR Portal & 24/7 Retail Support SLA.',
    fastStartCarrot:
      '1-Counter 14-Day Live Store Pilot: Test our Offline-First POS & LHDN Receipt QR Self-Claim Portal on 1 counter (or 10 of your own SKUs) for 14 days—zero disruption to your existing cashier registers.',
    aeoSummary:
      'Jobshore delivers outcome-guaranteed POS (Point of Sale) software and hardware systems for Retail, F&B, Pharmacy, and Multi-Outlet chains. Key outcomes include 100% offline checkout continuity during internet drops, sub-0.3s barcode/payment speed, automated Malaysia LHDN MyInvois compliance (receipt QR customer self-claim + monthly consolidated e-Invoicing), and real-time ERPNext inventory & accounting sync.',
    iconName: 'pos',
    accentColor: 'amber',
    kpis: [
      { value: '0 sec', label: 'Internet-Drop Checkout Downtime' },
      { value: '< 0.3s', label: 'Barcode Scan & Receipt Speed' },
      { value: '100%', label: 'Auto LHDN QR & Consolidated' },
      { value: '0 CSVs', label: 'Real-Time HQ ERPNext Sync' },
    ],
    subServices: [
      {
        title: 'Outcome 1: 100% Checkout Continuity Even When Store Internet Drops',
        description:
          'Local IndexedDB/SQLite caching lets cashiers scan barcodes, weigh items, apply member discounts, and print ESC/POS receipts offline—auto-syncing to headquarters the second connectivity returns.',
        metrics: 'Tracked KPI: RM 0 lost revenue during broadband outages',
        tags: ['Offline-First POS', 'Barcode & Weighing Scale', 'DuitNow QR & Card', 'Shift X/Z Reconciliation'],
      },
      {
        title: 'Outcome 2: Zero Cashier Queue Delays for Malaysia LHDN e-Invoicing',
        description:
          'Every receipt prints a unique QR code. Customers scan on their own phone to claim a validated LHDN e-Invoice in seconds, while unclaimed receipts auto-submit as a monthly Consolidated e-Invoice.',
        metrics: 'Tracked KPI: 100% LHDN retail/F&B compliance with 0 extra cashier clicks',
        tags: ['Receipt QR Self-Claim Portal', 'Monthly Consolidated e-Invoice', 'Instant TIN Check', 'SST Ready'],
      },
      {
        title: 'Outcome 3: 40% Faster Table Turnover & Zero Kitchen Ticket Errors (F&B)',
        description:
          'QR table self-ordering, dine-in/takeaway modifiers, split/merge bills, Kitchen Display System (KDS) routing, and automatic recipe BOM ingredient deduction per dish sold.',
        metrics: 'Tracked KPI: 40% fewer order errors & real-time food cost tracking',
        tags: ['Floor Table Plan', 'QR Table Ordering', 'Kitchen Display (KDS)', 'Recipe BOM Deduction'],
      },
      {
        title: 'Outcome 4: Real-Time Multi-Outlet Stock & Daily P&L Visibility in ERPNext',
        description:
          'Every sale immediately deducts outlet stock, updates batch/expiry records, awards loyalty points, and posts shift closing journal entries into Frappe ERPNext—with complete hardware peripheral support.',
        metrics: 'Tracked KPI: Eliminates 100% of manual nightly POS-to-Accounting imports',
        tags: ['Native ERPNext Sync', 'Touch POS Hardware', 'Central Warehouse Replenish', 'Multi-Branch HQ'],
      },
    ],
    deliverables: [
      'Live Multi-Outlet POS Uptime, Shift Variance & LHDN e-Invoice Telemetry Dashboard',
      'Offline-Capable POS Software Deployed Across Web, Android, iPad & Dual-Screen Touch Terminals',
      'Branded Customer LHDN e-Invoice QR Self-Claim Web Portal + Monthly Consolidated Scheduler',
      'Real-Time Frappe ERPNext Inventory, Promotion, Loyalty & Shift Accounting Sync',
      'Hardware Peripheral Integration (Thermal Printers, 2D Scanners, Cash Drawers, KDS) + 24/7 Support',
    ],
    techStack: [
      'Frappe ERPNext POS / POS Awesome',
      'IndexedDB & SQLite Offline Engine',
      'Vue / React / Flutter POS UI',
      'WebUSB / ESC-POS Thermal Print',
      'LHDN MyInvois POS API',
      'DuitNow QR & Payment Terminal SDK',
      'Kitchen Display System (KDS)',
      'Barcode / RFID / Scale Serial API',
    ],
    timeline: '1–4 Weeks (Single Store to Multi-Outlet Chain)',
    startingInvestment: 'From USD $1,800 / MYR 7,800',
    faqs: [
      {
        question: 'What happens to Jobshore’s POS system if the retail store or restaurant loses internet connection?',
        answer:
          'Our POS software is engineered with an offline-first local database (IndexedDB / SQLite). Cashiers can continue scanning barcodes, applying promotions, accepting payments, and printing thermal receipts without interruption. Once internet connectivity is restored, queued transactions automatically sync back to headquarters and Frappe ERPNext in the background.',
      },
      {
        question: 'How does the POS system handle Malaysia LHDN MyInvois e-Invoicing for walk-in retail or F&B customers?',
        answer:
          'Instead of slowing down the checkout line to type customer TIN details at the counter, our POS prints a unique QR code and short link on every thermal receipt. Customers who need a B2B/B2C validated e-Invoice simply scan the QR code on their phone, enter their TIN/IC, and receive their LHDN-validated e-Invoice automatically. All remaining unclaimed receipts are automatically aggregated and submitted to LHDN as a monthly Consolidated e-Invoice.',
      },
    ],
  },
  {
    id: 'web-mobile-services',
    slug: 'web-mobile-development',
    badge: 'Pillar 05 • Outcome: High-Converting Inbound Leads & Empowered Field Teams',
    shortTitle: 'Web & Mobile App Development',
    shortTitleBm: 'Pembangunan Laman Web & Aplikasi Mudah Alih',
    shortTitleZh: '全栈网站开发与 iOS/Android 移动应用开发',
    title: 'Turn Google & AI Search Into Qualified B2B Leads & Equip Field Teams with Offline Mobile Apps',
    titleBm: 'Tukar Carian Google & AI Menjadi Pelanggan B2B & Perkasa Pasukan Luar dengan Aplikasi Mudah Alih',
    titleZh: '让 Google 与 ChatGPT 搜索源源不断带来精准询盘，并用离线移动应用武装一线业务与仓库团队',
    subtitle:
      'A pretty website that nobody finds—or a mobile app that crashes in a warehouse dead-zone—is a wasted expense. We engineer 100/100 SEO & AEO lead-generation platforms, self-service B2B portals, and offline-first iOS/Android apps.',
    subtitleBm:
      'Laman web cantik yang gagal ditemui di Google atau ChatGPT adalah kerugian. Kami membina platform web 100/100 SEO/AEO yang menjana prospek automatik serta aplikasi iOS/Android luar talian yang disambung terus ke ERPNext.',
    subtitleZh:
      '没有流量和询盘的网站只是摆设，进仓库断网就闪退的 App 只会拖慢业务。我们为您打造 100/100 SEO/AEO 获客型官网、B2B 自助订货门户，以及与 ERPNext 实时同步的离线优先 iOS/Android 应用。',
    outcomePromise:
      'Capture high-intent buyers from Google & AI Answer Engines (ChatGPT/Perplexity) and cut customer support / field order delays by 60%.',
    tangibleScorecard:
      'Monthly Digital Growth & App Telemetry: Tracks Lighthouse SEO/AEO score (99–100), organic/AI search citations, self-service portal order volume, and mobile field sync speed.',
    commercialModel:
      'Fixed-Scope Product Build + Monthly AEO Growth, Security & App Evolution Retainer.',
    fastStartCarrot:
      'Free 60-Second Google + ChatGPT Visibility Audit & 48-Hour Clickable Prototype: We audit why AI/Google search misses your current site and build a clickable interactive UI preview of your new portal or mobile app in 48 hours.',
    aeoSummary:
      'Jobshore builds outcome-driven web applications and mobile apps (iOS & Android) using Astro, Next.js, React, TypeScript, Flutter, and React Native. Every web platform is engineered for 99–100 Google Lighthouse performance, Technical SEO, and Answer Engine Optimization (AEO via JSON-LD @graph & llms.txt), while mobile apps provide offline-first sync with Frappe ERPNext, POS systems, and AI OCR engines.',
    iconName: 'webmobile',
    accentColor: 'violet',
    kpis: [
      { value: '99–100', label: 'Google & AEO Citation Score' },
      { value: '< 0.8s', label: 'Sub-Second Page Load Speed' },
      { value: '60%', label: 'Less Manual Support via Portals' },
      { value: '100%', label: 'Offline-Capable Mobile Sync' },
    ],
    subServices: [
      {
        title: 'Outcome 1: Get Cited & Found First on Google, ChatGPT Search & Perplexity',
        description:
          'We engineer ultra-fast Astro & Next.js web platforms with multi-entity JSON-LD @graph schemas, Speakable direct-answer capsules, and /llms.txt files—turning your website into a 24/7 inbound B2B lead magnet.',
        metrics: 'Tracked KPI: 100/100 Core Web Vitals & verified AI search citations',
        tags: ['Technical SEO + AEO', 'Astro & Next.js', 'JSON-LD + llms.txt', 'Interactive Lead Scopers'],
      },
      {
        title: 'Outcome 2: Cut Customer Service Calls by 60% with Self-Service B2B Portals',
        description:
          'Let your dealers, distributors, and corporate clients check live tier pricing, place bulk reorders, download LHDN e-Invoices, and track delivery status 24/7 without calling your admin team.',
        metrics: 'Tracked KPI: 60% reduction in manual order/invoice inquiries',
        tags: ['B2B Dealer Portals', 'React & TypeScript', 'Live ERPNext Pricing', 'Self-Service e-Invoices'],
      },
      {
        title: 'Outcome 3: Eliminate Warehouse & Van-Sales Errors with Offline Mobile Apps',
        description:
          'Purpose-built Flutter & React Native iOS/Android apps for warehouse barcode/RFID picking, van-sales mobile POS invoicing, and camera AI OCR receipt capture—working reliably even with zero signal.',
        metrics: 'Tracked KPI: 99.9% picking/van-stock accuracy & zero paper DOs',
        tags: ['Offline-First SQLite Sync', 'Handheld Barcode/POS', 'Mobile AI OCR Scan', 'iOS & Android'],
      },
      {
        title: 'Outcome 4: Launch Custom SaaS & Customer Loyalty Apps 45% Faster',
        description:
          'Single-codebase iOS, Android, and Web product engineering backed by automated Playwright E2E testing, biometric login, push notifications, and scalable cloud infrastructure.',
        metrics: 'Tracked KPI: 45% faster time-to-market across App Store & Play Store',
        tags: ['Flutter & React Native', 'Customer Loyalty Apps', 'Biometric Auth', 'CI/CD Automated QA'],
      },
    ],
    deliverables: [
      'Monthly SEO/AEO Visibility, Page-Speed & Conversion Telemetry Scorecard',
      'Production Web Platform (Astro / Next.js / React) Scoring 99–100 on Google Lighthouse',
      'Complete AEO Stack (Multi-Entity JSON-LD @graph, Sitemap, Robots.txt, llms.txt)',
      'Signed iOS (.ipa) & Android (.aab) Mobile Apps Synced with ERPNext / POS / AI Backends',
      'Automated E2E Test Suite & Full Source Code Ownership',
    ],
    techStack: [
      'Astro',
      'Next.js',
      'React',
      'TypeScript',
      'Tailwind CSS',
      'Flutter',
      'React Native',
      'Node.js / Go / FastAPI',
      'PostgreSQL / Redis',
      'Cloudflare / AWS / Docker',
    ],
    timeline: '4–12 Weeks (MVP to Full Production)',
    startingInvestment: 'From USD $4,500 / MYR 20,000',
    faqs: [
      {
        question: 'How does Jobshore optimize websites for both traditional SEO and AI Answer Engines (AEO)?',
        answer:
          'Traditional SEO focuses on keywords, backlinks, and Core Web Vitals. AEO (Answer Engine Optimization) adds entity-first JSON-LD structured data (@graph connecting Organization, Service, FAQPage, and Speakable schemas), semantic HTML tables/definition lists, citation-ready direct-answer summaries, and /llms.txt endpoints so LLMs like ChatGPT, Perplexity, and Google AI Overviews extract and cite your brand with high confidence.',
      },
      {
        question: 'Can our mobile app connect directly to Frappe ERPNext, POS systems, or custom AI OCR APIs?',
        answer:
          'Absolutely. We build mobile apps that authenticate directly against Frappe/ERPNext REST and Token APIs, POS loyalty/ordering endpoints, and our AI OCR pipelines—allowing field staff or customers to place orders, scan barcodes, or snap a photo of a document and have it verified and synced into your ERP in seconds.',
      },
    ],
  },
];

export const ERP_COMPARISON_ROWS = [
  {
    criterion: 'Annual Per-User License Cost',
    jobshoreErpnext: '$0 / user (100% Open-Source GPLv3)',
    legacyTier1: '$1,200 – $3,600+ per user / year',
    basicAccounting: '$300 – $900 per user / year (Limited users)',
  },
  {
    criterion: 'What You Actually Pay For (Commercial Model)',
    jobshoreErpnext: 'Tracked Business Outcomes, Implementation & Uptime SLA',
    legacyTier1: 'Mandatory Annual Seat Tax + Expensive Change Requests',
    basicAccounting: 'Recurring SaaS Seat Tax (Outgrown by Mid-Market)',
  },
  {
    criterion: 'Built-In Cloud & Offline POS System',
    jobshoreErpnext: 'Native Retail & F&B POS + Real-Time Inventory Sync',
    legacyTier1: 'Requires Expensive Third-Party POS Connector',
    basicAccounting: 'Separate Paid POS Subscription & Manual Sync',
  },
  {
    criterion: 'Full Manufacturing (BOM, Shop Floor, MRP)',
    jobshoreErpnext: 'Built-in Native Module (Included)',
    legacyTier1: 'Expensive Add-On Tier Required',
    basicAccounting: 'Not Supported / Third-Party Plug-in',
  },
  {
    criterion: 'Malaysia LHDN MyInvois (B2B + POS QR/Consolidated)',
    jobshoreErpnext: 'Real-Time API (Standard, POS Receipt QR & Consolidated)',
    legacyTier1: 'Paid Middleware / High Consulting Fee',
    basicAccounting: 'Basic Manual / Batch Export Only',
  },
  {
    criterion: 'Built-In AI OCR & 3-Way Match Automation',
    jobshoreErpnext: 'Native Jobshore IDP + Automated PO-GRN-Invoice Match',
    legacyTier1: 'Requires Separate Enterprise IDP License',
    basicAccounting: 'Manual Entry or Paid Per-Page Add-on',
  },
  {
    criterion: 'Source Code & Custom Workflow Ownership',
    jobshoreErpnext: '100% Full Source Control via Frappe Framework',
    legacyTier1: 'Proprietary Vendor Lock-In',
    basicAccounting: 'Closed SaaS (No Custom Doctypes)',
  },
];

export const CASE_STUDIES: CaseStudy[] = [
  {
    id: 'precision-mfg-erp-ocr',
    category: 'Frappe ERPNext',
    clientType: 'Precision Components Manufacturer (220 Staff, 3 Plants)',
    region: 'Shah Alam, Selangor & Johor, Malaysia',
    pillarBadge: 'Pillar 03 + 01 • ERPNext + AI OCR + LHDN MyInvois',
    timeline: 'Deployed in 9 Weeks',
    title: 'Cut Monthly Accounts Closing from 12 Days to 2 Days & Saved RM 145k/yr in Software Seat Taxes',
    challenge:
      'Finance and warehouse teams processed 4,200+ supplier invoices and delivery orders monthly across 3 plants using disconnected spreadsheets and legacy desktop accounting software, causing a 12-day monthly close delay and frequent stock discrepancies.',
    solution:
      'Implemented Frappe ERPNext across Manufacturing (BOM & Shop Floor Job Cards), Multi-Warehouse Inventory, and Accounting, paired with our math-verified AI OCR pipeline for automatic PO-GRN-Invoice 3-way matching and real-time LHDN MyInvois API compliance.',
    deliverablePreview:
      'Custom Frappe ERPNext v15 Manufacturing & Finance Workspace + Automated 3-Way Match Exception Queue + Real-Time LHDN MyInvois Validation Dashboard.',
    monthlyScorecardProof:
      'Monthly Scorecard Proof: 4,280 invoices auto-matched/mo • 0 LHDN rejections • RM 12,080/mo saved in software seats & clerk overtime.',
    results: [
      { metric: '99.5%', label: 'Verified Invoice OCR Accuracy' },
      { metric: '2 Days', label: 'Month-End Closing (Down from 12)' },
      { metric: 'RM 145k/yr', label: 'Saved in License & Overtime Costs' },
    ],
    stack: ['Frappe ERPNext v15', 'Vision-LLM OCR', 'LHDN MyInvois API', 'Python FastAPI', 'Docker'],
  },
  {
    id: 'retail-fnb-pos-erpnext',
    category: 'POS Systems',
    clientType: 'Multi-Outlet Specialty Retail & Cafe Group (18 Outlets)',
    region: 'Kuala Lumpur, Penang & Johor Bahru, Malaysia',
    pillarBadge: 'Pillar 04 + 03 • Offline POS + LHDN QR + ERPNext',
    timeline: 'Deployed in 3 Weeks',
    title: 'Zero Lost Sales During Mall Internet Drops & 100% Automated POS LHDN e-Invoicing Across 18 Stores',
    challenge:
      'Legacy tablet POS terminals across 18 outlets froze whenever mall Wi-Fi dropped, required nightly manual CSV imports into accounting, and created long cashier queues when customers requested LHDN e-Invoices.',
    solution:
      'Rolled out Jobshore Cloud & Offline-First POS terminals with ESC/POS thermal receipt printers, DuitNow QR integration, an instant LHDN e-Invoice QR self-claim portal + monthly consolidated e-Invoice automation, and real-time central kitchen/warehouse stock deduction in Frappe ERPNext.',
    deliverablePreview:
      'Touchscreen Offline-First POS Terminal UI + Thermal Receipt with Dynamic LHDN Self-Claim QR + HQ Multi-Branch Shift & Stock Dashboard.',
    monthlyScorecardProof:
      'Monthly Scorecard Proof: 64,000+ monthly receipts • 0 sec internet-drop downtime • 100% automated LHDN QR & Consolidated submissions.',
    results: [
      { metric: '0 sec', label: 'Downtime During Mall Internet Drops' },
      { metric: '100%', label: 'Automated LHDN QR & Consolidated' },
      { metric: 'Real-Time', label: '18-Outlet Stock & Shift P&L Sync' },
    ],
    stack: ['Jobshore POS', 'Frappe ERPNext', 'IndexedDB Offline Sync', 'LHDN MyInvois API', 'ESC/POS Hardware'],
  },
  {
    id: 'fmcg-whatsapp-bpa-automation',
    category: 'Business Automation',
    clientType: 'FMCG & Hardware Wholesale Distributor (1,400+ Retail Accounts)',
    region: 'Petaling Jaya, Malaysia & Singapore',
    pillarBadge: 'Pillar 02 + 01 • WhatsApp B2B Order Bot + 3-Way Match',
    timeline: 'Deployed in 4 Weeks',
    title: 'Eliminated 85% of Manual Order Keying & Reclaimed 340+ Admin Hours Every Month',
    challenge:
      '8 customer-service clerks spent all day manually reading messy WhatsApp messages, voice notes, and PDF purchase orders from 1,400+ dealers, checking credit limits, and typing Sales Orders into the ERP.',
    solution:
      'Built an autonomous WhatsApp Business API + AI OCR order intake pipeline that parses multi-language dealer orders (EN/BM/Chinese), verifies live ERPNext stock and customer credit limits, reserves inventory, and dispatches instant proforma invoices.',
    deliverablePreview:
      'WhatsApp B2B Dealer Ordering Assistant + Automated Credit-Limit & Stock Reservation Engine + Live Admin Exception Dashboard.',
    monthlyScorecardProof:
      'Monthly Scorecard Proof: 3,900+ dealer orders auto-processed/mo • 340 staff hours reclaimed • Order turnaround cut from 4 hours to 18 seconds.',
    results: [
      { metric: '340 hrs/mo', label: 'Back-Office Staff Hours Reclaimed' },
      { metric: '18 sec', label: 'Order-to-Invoice Turnaround' },
      { metric: '85%', label: 'Reduction in Manual Data Entry' },
    ],
    stack: ['WhatsApp Cloud API', 'Python LangGraph', 'Multi-Language OCR', 'Frappe ERPNext API', 'Redis Queue'],
  },
  {
    id: 'fintech-ai-verification',
    category: 'AI & OCR',
    clientType: 'Regional B2B Trade Finance & Logistics Platform',
    region: 'Singapore & Kuala Lumpur',
    pillarBadge: 'Pillar 01 • AI Coding, Deterministic Verification & QA',
    timeline: 'Deployed in 6 Weeks',
    title: 'Zero Escaped Production Bugs in 12 Months & 1.8-Second Cross-Border Trade Document Verification',
    challenge:
      'Rapid weekly releases were bottlenecked by flaky E2E tests and manual verification of cross-border bills of lading, commercial invoices, and customs declarations (K1/K2) where a single rounding error stalled payouts.',
    solution:
      'Engineered an automated verification pipeline combining deterministic financial math guardrails, a self-healing 450-test Playwright CI/CD gate, and a multi-script OCR verification engine that cross-checks trade documents in under 2 seconds.',
    deliverablePreview:
      'CI/CD Deterministic Verification Gate + Self-Healing Playwright Test Runner + Multi-Document Trade Finance Cross-Check Console.',
    monthlyScorecardProof:
      'Monthly Scorecard Proof: 18,500+ trade docs verified/mo • 0 escaped production schema bugs • 78% reduction in QA maintenance hours.',
    results: [
      { metric: '94%', label: 'Self-Healing E2E Test Coverage' },
      { metric: '1.8 sec', label: 'Document Cross-Check Latency' },
      { metric: '0', label: 'Critical Bugs Escaped in 12 Months' },
    ],
    stack: ['TypeScript', 'Playwright', 'Python FastAPI', 'Pydantic Guardrails', 'PostgreSQL', 'GitHub Actions'],
  },
  {
    id: 'van-sales-wms-mobile-app',
    category: 'Web & Mobile Apps',
    clientType: 'Cold-Chain Food & Beverage Fleet (65 Delivery Trucks & 4 Warehouses)',
    region: 'Klang Valley, Ipoh & Melaka, Malaysia',
    pillarBadge: 'Pillar 05 + 03 • Offline Flutter Mobile App + ERPNext',
    timeline: 'Deployed in 6 Weeks',
    title: 'Cut Delivery Dispute Claims by 92% & Accelerated Driver Cash/Credit Reconciliation to Same-Day',
    challenge:
      'Drivers and warehouse pickers relied on paper delivery orders (DO) that got lost or damaged, resulting in delayed invoicing, stock picking mistakes, and a 7-day lag in collecting proof-of-delivery (e-POD).',
    solution:
      'Developed a custom offline-first Flutter iOS/Android mobile app for warehouse barcode picking and driver van-sales—featuring Bluetooth thermal invoice printing, GPS geotagged photo/signature e-POD, and instant sync with Frappe ERPNext.',
    deliverablePreview:
      'Offline-First iOS/Android Driver & Warehouse App + Bluetooth Receipt Printer SDK + Real-Time Fleet & e-POD Tracking Portal.',
    monthlyScorecardProof:
      'Monthly Scorecard Proof: 22,000+ e-POD deliveries synced/mo • 92% fewer customer billing disputes • Same-day accounts receivable billing.',
    results: [
      { metric: '92%', label: 'Drop in Delivery & Billing Disputes' },
      { metric: 'Same-Day', label: 'Invoice & e-POD Reconciliation' },
      { metric: '100%', label: 'Offline Cold-Room & Highway Sync' },
    ],
    stack: ['Flutter (iOS & Android)', 'SQLite Offline Sync', 'Bluetooth ESC/POS', 'Frappe ERPNext REST API', 'Barcode/RFID'],
  },
  {
    id: 'industrial-b2b-seo-aeo-portal',
    category: 'Web & Mobile Apps',
    clientType: 'Industrial Automation & Machinery Exporter (Serving SEA, Middle East & Europe)',
    region: 'Penang, Malaysia & Global Export',
    pillarBadge: 'Pillar 05 • 100/100 SEO & AEO Web Platform + Dealer Portal',
    timeline: 'Deployed in 5 Weeks',
    title: '3.4x Increase in Qualified Inbound B2B RFQ Leads from Google & AI Answer Engines',
    challenge:
      'A slow legacy WordPress website scored 38/100 on mobile PageSpeed, was invisible on ChatGPT/Perplexity supplier searches, and forced B2B buyers to email PDF catalogs manually to request quotes.',
    solution:
      'Re-engineered their digital flagship on Astro + React with 100/100 Core Web Vitals, trilingual (EN/BM/ZH) technical product schemas, an AI Technical Spec Concierge, and a self-service B2B Dealer RFQ Portal connected directly to ERPNext CRM.',
    deliverablePreview:
      '100/100 Lighthouse B2B Product & Spec Portal + Interactive BOM/RFQ Configurator + Direct ERPNext CRM Opportunity Pipeline.',
    monthlyScorecardProof:
      'Monthly Scorecard Proof: 100/100 Core Web Vitals • 3.4x qualified B2B RFQs • Top-3 citations on Google & AI search for 45+ industrial SKUs.',
    results: [
      { metric: '3.4x', label: 'More Inbound B2B RFQ Leads' },
      { metric: '100/100', label: 'Google Core Web Vitals Score' },
      { metric: '< 0.4s', label: 'Global Page Load Time' },
    ],
    stack: ['Astro', 'React', 'Tailwind CSS', 'JSON-LD Product Graph', 'ERPNext CRM Webhook', 'Cloudflare Edge'],
  },
];

export const GLOBAL_FAQS: FaqItem[] = [
  {
    category: 'SEO, AEO & Engagement',
    question: 'Since anyone can use AI to write code today, why do companies pay Jobshore?',
    answer:
      'Prompting ChatGPT or Cursor to generate raw code is easy; engineering a system where AI never hallucinates a tax total, never leaks PDPA data, and stays 100% reconciled with your ERPNext inventory and LHDN MyInvois APIs is hard. Clients don’t pay Jobshore for "typing code" or per-user software seat taxes—they pay us for guaranteed, tracked business outcomes: verified 99.4% OCR accuracy, 85% fewer manual hours, zero-downtime offline POS, and a monthly telemetry scorecard proving the exact hours and RM saved.',
  },
  {
    category: 'SEO, AEO & Engagement',
    question: 'What is Answer Engine Optimization (AEO), and how does Jobshore build for both SEO and AEO?',
    answer:
      'Traditional SEO optimizes pages for search engine crawlers (Googlebot, Bingbot) using Core Web Vitals, canonical tags, and keyword hierarchy. Answer Engine Optimization (AEO) optimizes your digital presence for AI search engines and LLM assistants (ChatGPT Search, Perplexity, Claude, Google AI Overviews, Gemini). Jobshore engineers every web property with zero-JS-by-default Astro performance, multi-entity JSON-LD @graph schemas, Speakable specifications, semantic HTML comparison tables, direct-answer capsules, and dedicated /llms.txt and /llms-full.txt endpoints so AI models cite your business as the authoritative source.',
  },
  {
    category: 'POS Software & Systems',
    question: 'What types of businesses does Jobshore’s POS software and Point-of-Sale system support?',
    answer:
      'Jobshore provides Cloud and Offline-First POS software and hardware systems tailored for Retail Stores, Supermarkets, Pharmacies, Hardware/Specialty Outlets, F&B Restaurants, Cafes, Quick-Service Restaurants (QSR), and Multi-Outlet Chains. It supports barcode/weighing scales, floor table plans, Kitchen Display Systems (KDS), QR table ordering, member loyalty, and real-time synchronization with Frappe ERPNext.',
  },
  {
    category: 'POS Software & Systems',
    question: 'How does Jobshore’s POS system handle Malaysia LHDN MyInvois e-Invoicing for retail and F&B?',
    answer:
      'Our POS prints a unique QR code on every thermal receipt so walk-in customers can scan and claim a validated LHDN e-Invoice on their smartphone in seconds without holding up the cashier queue. At month-end, all unclaimed POS receipts are automatically aggregated and submitted to LHDN MyInvois as a compliant Consolidated e-Invoice.',
  },
  {
    category: 'AI & OCR',
    question: 'What types of documents can Jobshore’s AI OCR & Intelligent Document Processing (IDP) extract?',
    answer:
      'Our AI OCR pipeline accurately processes commercial invoices, purchase orders (PO), delivery orders (DO), bills of lading, customs declarations (K1/K2/K3), bank statements, retail thermal receipts, handwritten delivery notes, and identity cards (MyKad, Passports). It supports English, Bahasa Melayu, Simplified/Traditional Chinese, and Tamil, outputting clean, schema-validated JSON ready for ERPNext or any REST API.',
  },
  {
    category: 'Frappe & ERPNext',
    question: 'What is included in Jobshore’s Frappe & ERPNext consultation and implementation service?',
    answer:
      'Our end-to-end ERPNext implementation covers: (1) Business Process Discovery & Gap Analysis, (2) Chart of Accounts, Tax & Multi-Company configuration, (3) Core module setup (Accounting, Inventory, Manufacturing/BOM, Multi-Outlet POS, Buying, Selling, CRM, HRMS & Payroll, Projects), (4) Malaysia LHDN MyInvois e-Invoicing API integration, (5) Custom Frappe Doctypes, workflows, and print formats, (6) Master data & opening balance migration, and (7) User Acceptance Testing (UAT), staff training, and post-go-live SLA support.',
  },
  {
    category: 'Business Automation',
    question: 'How fast can we see ROI from Business Process Automation and AI OCR?',
    answer:
      'Most clients launch their first production automation or AI OCR workflow within 2 to 4 weeks and achieve full financial payback in under 3 months. By automating high-volume bottlenecks like 3-way invoice matching, POS-to-ERP reconciliation, and WhatsApp order intake, teams typically eliminate 75–85% of manual data entry immediately.',
  },
  {
    category: 'Web & Mobile',
    question: 'Do you build custom web and mobile applications that integrate with ERPNext, POS, or legacy backends?',
    answer:
      'Yes. We build high-speed web platforms (Astro, Next.js, React, TypeScript) and cross-platform iOS/Android mobile apps (Flutter, React Native) that connect directly to Frappe ERPNext, POS terminals, SAP, SQL databases, or custom microservices—including offline-capable warehouse scanners, mobile van-sales POS apps, and B2B customer self-service portals.',
  },
];

export function buildHomeJsonLd() {
  return {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': ['Organization', 'ProfessionalService', 'ITService'],
        '@id': `${COMPANY_INFO.domain}/#organization`,
        name: COMPANY_INFO.name,
        legalName: COMPANY_INFO.legalName,
        ...(COMPANY_INFO.ssmRegistrationNo ? { identifier: COMPANY_INFO.ssmRegistrationNo } : {}),
        url: COMPANY_INFO.domain,
        logo: `${COMPANY_INFO.domain}/favicon.svg`,
        image: `${COMPANY_INFO.domain}/og-image.svg`,
        description:
          'Jobshore is an outcome-driven enterprise technology consultancy specializing in AI Services (Coding, Deterministic Verification, Automated Testing, Intelligent OCR), Business Process Automation, Frappe ERPNext Consultation & Implementation, Cloud & Offline-First POS Software & Point-of-Sale Systems (with Malaysia LHDN MyInvois compliance), and SEO/AEO-first Web & Mobile Application Development.',
        contactPoint: {
          '@type': 'ContactPoint',
          contactType: 'sales and technical architecture',
          url: `${COMPANY_INFO.domain}/#contact`,
          availableLanguage: ['en', 'ms', 'zh'],
        },
        priceRange: '$$-$$$',
        knowsLanguage: ['en', 'ms', 'zh'],
        address: {
          '@type': 'PostalAddress',
          streetAddress: COMPANY_INFO.headquarters.streetAddress,
          postalCode: COMPANY_INFO.headquarters.postalCode,
          addressLocality: COMPANY_INFO.headquarters.city,
          addressRegion: COMPANY_INFO.headquarters.state,
          addressCountry: COMPANY_INFO.headquarters.countryCode,
        },
        areaServed: [
          { '@type': 'Country', name: 'Malaysia' },
          { '@type': 'Country', name: 'Singapore' },
          { '@type': 'Place', name: 'Southeast Asia' },
          { '@type': 'Place', name: 'Global' },
        ],
        knowsAbout: [
          'Artificial Intelligence Engineering',
          'AI Code Verification',
          'Automated Software Testing',
          'Optical Character Recognition (OCR)',
          'Intelligent Document Processing (IDP)',
          'Business Process Automation (BPA)',
          'Frappe Framework',
          'ERPNext Implementation',
          'Point of Sale (POS) Software and Hardware Systems',
          'Retail and F&B POS Systems',
          'Malaysia LHDN MyInvois e-Invoicing',
          'Web Application Development',
          'Mobile Application Development',
          'Search Engine Optimization (SEO)',
          'Answer Engine Optimization (AEO)',
        ],
        hasOfferCatalog: {
          '@type': 'OfferCatalog',
          name: 'Jobshore Enterprise Technology Services',
          itemListElement: SERVICE_PILLARS.map((pillar, index) => ({
            '@type': 'Offer',
            position: index + 1,
            itemOffered: {
              '@type': 'Service',
              '@id': `${COMPANY_INFO.domain}/services/${pillar.slug}#service`,
              name: pillar.title,
              description: pillar.aeoSummary,
              url: `${COMPANY_INFO.domain}/services/${pillar.slug}`,
              provider: {
                '@id': `${COMPANY_INFO.domain}/#organization`,
              },
            },
          })),
        },
      },
      {
        '@type': 'WebSite',
        '@id': `${COMPANY_INFO.domain}/#website`,
        url: COMPANY_INFO.domain,
        name: `${COMPANY_INFO.name} — ${COMPANY_INFO.tagline}`,
        publisher: {
          '@id': `${COMPANY_INFO.domain}/#organization`,
        },
        inLanguage: ['en', 'ms', 'zh'],
      },
      {
        '@type': 'WebPage',
        '@id': `${COMPANY_INFO.domain}/#webpage`,
        url: COMPANY_INFO.domain,
        name: 'Jobshore | AI Coding, Verification, Testing, OCR, Business Automation, Frappe ERPNext, POS Systems & Web/Mobile Development',
        isPartOf: {
          '@id': `${COMPANY_INFO.domain}/#website`,
        },
        about: {
          '@id': `${COMPANY_INFO.domain}/#organization`,
        },
        description:
          'Outcome-guaranteed enterprise AI engineering (coding, verification, testing, OCR), business process automation, Frappe ERPNext implementation, Cloud & Offline POS Software & Systems (LHDN MyInvois ready), and full-stack web & mobile app development.',
        speakable: {
          '@type': 'SpeakableSpecification',
          cssSelector: ['.aeo-summary', '#hero-headline', '#faq-heading'],
        },
      },
      {
        '@type': 'FAQPage',
        '@id': `${COMPANY_INFO.domain}/#faq`,
        mainEntity: GLOBAL_FAQS.map((item) => ({
          '@type': 'Question',
          name: item.question,
          acceptedAnswer: {
            '@type': 'Answer',
            text: item.answer,
          },
        })),
      },
    ],
  };
}
