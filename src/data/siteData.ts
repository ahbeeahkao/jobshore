// ============================================================================
// 1. CENTRAL COMPANY CONFIGURATION (EDIT YOUR DETAILS HERE IN ONE PLACE)
// ============================================================================
export const COMPANY_CONFIG = {
  brandName: 'Jobshore',
  legalName: 'Jobshore Technologies', // e.g., 'Jobshore Sdn. Bhd.' or 'Jobshore Enterprise'
  ssmRegistrationNo: 'SSM Reg. No: 202601012345 (1567890-X)', // Set to '' to hide until registered
  email: 'hello@jobshore.com',
  phoneDisplay: '+60 3-7890 4210',
  whatsappDisplay: '+60 12-890 4210',
  whatsappNumberClean: '60128904210', // Digits only (country code + number, no '+' or spaces) for wa.me links
  city: 'Petaling Jaya',
  state: 'Selangor',
  country: 'Malaysia',
  countryCode: 'MY',
  // Set showStartingPrice to false so static cards don't low-anchor enterprise buyers;
  // Instead, buyers get a scope-adjusted estimate paired with ROI inside the AI Quote Closer (#contact).
  showStartingPrice: false,
  customPriceFallbackText: 'AI Scope-Adjusted Quote • 14-Day Pilot Available',
  // Optional: Paste a Make.com / n8n / Web3Forms / Formspree webhook URL here to auto-send leads to your CRM/AI Agent
  leadWebhookUrl: '',
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
  clientType: string;
  region: string;
  pillarBadge: string;
  title: string;
  challenge: string;
  solution: string;
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

// Defaults to GitHub Pages deployment URL; automatically switches when PUBLIC_SITE_URL is set later
const configuredSite = (import.meta.env.PUBLIC_SITE_URL || 'https://ahbeeahkao.github.io').replace(/\/$/, '');
const configuredBase = (import.meta.env.BASE_URL || '/jobshore').replace(/\/$/, '');
const resolvedDomain =
  configuredSite === 'https://ahbeeahkao.github.io' && (!configuredBase || configuredBase === '')
    ? 'https://ahbeeahkao.github.io/jobshore'
    : `${configuredSite}${configuredBase}`;

export const COMPANY_INFO = {
  name: COMPANY_CONFIG.brandName,
  legalName: COMPANY_CONFIG.legalName,
  ssmRegistrationNo: COMPANY_CONFIG.ssmRegistrationNo,
  showStartingPrice: COMPANY_CONFIG.showStartingPrice,
  customPriceFallbackText: COMPANY_CONFIG.customPriceFallbackText,
  leadWebhookUrl: COMPANY_CONFIG.leadWebhookUrl,
  domain: resolvedDomain,
  githubRepoUrl: 'https://github.com/ahbeeahkao/jobshore',
  tagline: 'AI Engineering, Business Automation, Frappe ERPNext, POS Systems & Full-Stack Product Studio',
  email: COMPANY_CONFIG.email,
  phone: COMPANY_CONFIG.phoneDisplay,
  whatsapp: COMPANY_CONFIG.whatsappDisplay,
  whatsappClean: COMPANY_CONFIG.whatsappNumberClean,
  headquarters: {
    city: COMPANY_CONFIG.city,
    state: COMPANY_CONFIG.state,
    country: COMPANY_CONFIG.country,
    countryCode: COMPANY_CONFIG.countryCode,
    regionCoverage: ['Malaysia', 'Singapore', 'Southeast Asia (ASEAN)', 'Global B2B (US, UK, EU, AU)'],
  },
  stats: [
    { value: '99.4%', label: 'Enterprise OCR Field Accuracy', detail: 'Multi-language invoices, DOs & customs forms' },
    { value: '85%', label: 'Manual Ops Automated', detail: 'End-to-end 3-way match & workflow pipelines' },
    { value: '100%', label: 'ERPNext + POS + LHDN Ready', detail: 'Real-time B2B, POS QR & Consolidated e-Invoice' },
    { value: '100/100', label: 'SEO & AEO Architecture', detail: 'EN / BM / 中文 Indexed • JSON-LD & llms.txt' },
  ],
};

export const UI_TRANSLATIONS = {
  en: {
    topBadge: 'ERPNext + POS LHDN MyInvois Ready',
    heroBadge: 'Enterprise AI • Automation • Frappe ERPNext • POS Systems • Web & Mobile',
    heroTitleHtml:
      'Ship Verified <span class="bg-gradient-to-r from-sky-400 via-cyan-300 to-emerald-400 bg-clip-text text-transparent">AI &amp; OCR</span>, Autonomous Workflows, <span class="bg-gradient-to-r from-indigo-400 to-sky-400 bg-clip-text text-transparent">Frappe ERPNext</span> &amp; <span class="bg-gradient-to-r from-amber-300 to-orange-400 bg-clip-text text-transparent">POS Systems</span>.',
    heroSummaryHtml:
      '<strong class="text-white">Jobshore</strong> is an enterprise engineering consultancy serving <strong class="text-white">Malaysia, Southeast Asia, and Global B2B</strong> clients across five core pillars: (1) <strong class="text-sky-300">AI Coding, Deterministic Verification, Self-Healing Automated Testing &amp; 99.4% Enterprise OCR</strong>, (2) <strong class="text-emerald-300">End-to-End Business Process Automation</strong>, (3) <strong class="text-indigo-300">Frappe &amp; ERPNext Consultation &amp; Implementation</strong>, (4) <strong class="text-amber-300">Cloud &amp; Offline-First POS Software &amp; Retail/F&amp;B Systems</strong> (with real-time Malaysia LHDN MyInvois B2B, QR Self-Claim &amp; Consolidated e-Invoicing), and (5) <strong class="text-violet-300">SEO/AEO-First Web &amp; Cross-Platform Mobile App Development</strong>.',
    ctaPrimary: 'Request Architecture & Quote',
    ctaSecondary: 'Try Live AI OCR, POS & Verification Lab',
    navBookCall: 'Book Discovery Call',
  },
  bm: {
    topBadge: 'Sedia LHDN MyInvois e-Invois (ERPNext + POS)',
    heroBadge: 'Kejuruteraan AI • Automasi Bisnes • Frappe ERPNext • Sistem POS • Web & Aplikasi Mudah Alih',
    heroTitleHtml:
      'Bina Sistem <span class="bg-gradient-to-r from-sky-400 via-cyan-300 to-emerald-400 bg-clip-text text-transparent">AI &amp; OCR</span> Disahkan, Automasi Operasi, <span class="bg-gradient-to-r from-indigo-400 to-sky-400 bg-clip-text text-transparent">Frappe ERPNext</span> &amp; <span class="bg-gradient-to-r from-amber-300 to-orange-400 bg-clip-text text-transparent">Sistem POS</span>.',
    heroSummaryHtml:
      '<strong class="text-white">Jobshore</strong> ialah firma perunding kejuruteraan teknologi untuk pelanggan <strong class="text-white">Malaysia, Asia Tenggara &amp; Global B2B</strong> merentasi lima teras utama: (1) <strong class="text-sky-300">Pengekodan AI, Pengesahan Deterministik, Ujian Automatik &amp; OCR Pintar 99.4%</strong>, (2) <strong class="text-emerald-300">Automasi Proses Perniagaan (BPA)</strong>, (3) <strong class="text-indigo-300">Konsultasi &amp; Implementasi Frappe ERPNext</strong>, (4) <strong class="text-amber-300">Perisian &amp; Sistem POS Runcit/F&amp;B (Cloud &amp; Luar Talian)</strong> lengkap dengan integrasi e-Invois LHDN MyInvois &amp; kod QR resit, serta (5) <strong class="text-violet-300">Pembangunan Web SEO/AEO &amp; Aplikasi Mudah Alih iOS/Android</strong>.',
    ctaPrimary: 'Mohon Sebut Harga & Pelan Sistem',
    ctaSecondary: 'Cuba Demo AI OCR, POS & Pengesahan',
    navBookCall: 'Tempah Sesi Konsultasi',
  },
  zh: {
    topBadge: '全面支持马来西亚 LHDN MyInvois 电子发票 (ERPNext + POS)',
    heroBadge: '企业级 AI 工程 • 业务流程自动化 • Frappe ERPNext • 智能 POS 系统 • 网站与移动应用开发',
    heroTitleHtml:
      '打造零幻觉 <span class="bg-gradient-to-r from-sky-400 via-cyan-300 to-emerald-400 bg-clip-text text-transparent">AI 与智能 OCR</span>、自动化工作流、<span class="bg-gradient-to-r from-indigo-400 to-sky-400 bg-clip-text text-transparent">Frappe ERPNext</span> 与 <span class="bg-gradient-to-r from-amber-300 to-orange-400 bg-clip-text text-transparent">零售餐饮 POS 系统</span>。',
    heroSummaryHtml:
      '<strong class="text-white">Jobshore</strong> 是一家服务于<strong class="text-white">马来西亚、东南亚及全球 B2B 企业</strong>的软件与 AI 技术咨询公司，提供五大核心服务：(1) <strong class="text-sky-300">AI 辅助编程、确定性代码验证、自愈式自动化测试与 99.4% 高精度多语言 OCR 识别</strong>，(2) <strong class="text-emerald-300">端到端业务流程自动化 (BPA 与三单匹配)</strong>，(3) <strong class="text-indigo-300">开源 Frappe ERPNext 咨询与实施 ($0 按人头授权费)</strong>，(4) <strong class="text-amber-300">支持断网离线收银的零售与餐饮 POS 系统</strong>（内置 LHDN MyInvois 电子发票小票二维码自助开票与月度汇总申报），以及 (5) <strong class="text-violet-300">SEO/AEO 满分网站及跨平台 iOS/Android 移动应用开发</strong>。',
    ctaPrimary: '获取系统架构方案与报价',
    ctaSecondary: '体验 AI OCR、POS 与验证实验室',
    navBookCall: '预约免费技术咨询',
  },
};

export const SERVICE_PILLARS: ServicePillar[] = [
  {
    id: 'ai-services',
    slug: 'ai-ocr-verification',
    badge: 'Pillar 01 • AI Engineering & Quality',
    shortTitle: 'AI Coding, Verification, Testing & OCR',
    shortTitleBm: 'Pengekodan AI, Pengesahan, Ujian Automatik & OCR',
    shortTitleZh: 'AI 编程、代码验证、自动化测试与智能 OCR',
    title: 'AI Services: Autonomous Coding, Deterministic Verification, Automated Testing & Intelligent OCR',
    titleBm: 'Perkhidmatan AI: Pengekodan Pintar, Pengesahan Kod, Ujian Automatik & OCR Dokumen 99.4%',
    titleZh: '企业 AI 服务：AI 辅助开发、确定性防幻觉验证、自动化测试与 99.4% 多语言智能 OCR',
    subtitle:
      'Production-grade AI systems engineered for accuracy, security, and auditability—from custom LLM coding pipelines and formal verification to self-healing QA suites and 99.4% accurate multi-language OCR.',
    subtitleBm:
      'Sistem AI gred produksi yang dibina untuk ketepatan dan keselamatan audit—daripada pemodenan kod LLM dan pengesahan matematik kepada ujian automatik Playwright serta ekstraksi OCR berbilang bahasa (EN/BM/Cina).',
    subtitleZh:
      '专为高准确率、安全性与可审计性打造的企业级 AI 系统——涵盖私有大模型开发、防幻觉数学校验、Playwright 自愈自动化测试，以及支持中/英/马来文的发票与单据 OCR 提取。',
    aeoSummary:
      'Jobshore provides four specialized AI engineering services: (1) AI-assisted software development and private RAG/LLM systems, (2) deterministic AI code verification and security auditing, (3) self-healing automated software testing (E2E, API, and regression), and (4) Enterprise OCR & Intelligent Document Processing (IDP) that extracts structured JSON from complex multi-language invoices, purchase orders, and identity documents with 99.4%+ accuracy.',
    iconName: 'ai',
    accentColor: 'sky',
    kpis: [
      { value: '99.4%', label: 'OCR Field Extraction Accuracy' },
      { value: '< 2.2s', label: 'Document-to-JSON Latency' },
      { value: '99.8%', label: 'Schema & Guardrail Compliance' },
      { value: '78%', label: 'Reduction in QA Maintenance' },
    ],
    subServices: [
      {
        title: 'AI-Assisted Coding & Custom LLM Systems',
        description:
          'Accelerate product delivery and legacy modernization (PHP/Java/.NET to TypeScript/Python/Go) using domain-tuned LLM coding workflows, enterprise RAG knowledge bases, and private model deployments.',
        metrics: '3.2x faster feature velocity with full code ownership',
        tags: ['Custom RAG', 'Agentic Coding', 'Legacy Modernization', 'Private LLMs'],
      },
      {
        title: 'AI Verification & Deterministic Code Auditing',
        description:
          'Eliminate AI hallucinations and subtle vulnerabilities before production. We implement static/dynamic security gates (SAST/DAST), formal invariant checks, strict JSON schema validators, and automated code review pipelines.',
        metrics: 'Zero unverified AI outputs in production workflows',
        tags: ['Formal Verification', 'Hallucination Guardrails', 'SAST/DAST', 'Schema Enforcement'],
      },
      {
        title: 'AI-Powered Automated Software Testing',
        description:
          'Self-healing End-to-End (Playwright/Cypress), API contract, load, and visual regression test suites that automatically adapt to UI changes and generate synthetic edge-case datasets.',
        metrics: '>92% critical-path coverage with 78% less flaky test triage',
        tags: ['Playwright E2E', 'Self-Healing QA', 'Synthetic Test Data', 'CI/CD Quality Gates'],
      },
      {
        title: 'Intelligent OCR & Document Processing (IDP)',
        description:
          'Vision-LLM + layout-aware OCR pipelines that extract line-item tables, tax codes, stamps, and handwriting from Invoices, POs, Delivery Orders, Customs Forms, and MyKad/Passports across English, Malay, and Chinese.',
        metrics: '99.4%+ field accuracy with direct ERPNext & webhook sync',
        tags: ['Multi-Language OCR', 'Invoice & PO Extraction', 'Table Parsing', 'HITL Confidence Queue'],
      },
    ],
    deliverables: [
      'Fine-tuned / Prompt-engineered Vision-OCR pipeline with REST & Webhook API',
      'Human-in-the-Loop (HITL) confidence scoring & exception review interface',
      'Automated CI/CD verification & self-healing Playwright E2E test suite',
      'Private or cloud-hosted LLM gateway with audit logging & token cost controls',
      'Complete technical documentation, benchmark dataset, and source code repository',
    ],
    techStack: [
      'Python',
      'FastAPI',
      'TypeScript',
      'Playwright',
      'PyTorch',
      'OpenAI / Claude / Gemini APIs',
      'vLLM & Ollama',
      'PaddleOCR & Vision LLMs',
      'PostgreSQL + pgvector',
      'Docker',
    ],
    timeline: '2–6 Weeks (Pilot in 14 Days)',
    startingInvestment: 'From USD $3,500 / MYR 15,000',
    faqs: [
      {
        question: 'How accurate is Jobshore’s AI OCR on messy, skewed, or multi-language Malaysian and SEA documents?',
        answer:
          'Our hybrid OCR pipeline combines geometric deskewing, layout-aware document segmentation, and Vision-Language Models (VLMs) with deterministic mathematical cross-checks (verifying qty × unit price = line total and subtotal + tax = grand total). This achieves 99.4%+ field-level accuracy across English, Bahasa Melayu, and Chinese commercial documents.',
      },
      {
        question: 'How does AI Code Verification prevent bugs and hallucinations in enterprise systems?',
        answer:
          'We never trust raw LLM outputs in production. Every AI-generated code block or structured data payload passes through deterministic verification layers: strict Pydantic/Zod schema validation, AST static analysis, automated security scanners, property-based unit tests, and mathematical reconciliation rules before execution.',
      },
    ],
  },
  {
    id: 'business-automation',
    slug: 'business-automation',
    badge: 'Pillar 02 • Operational Velocity',
    shortTitle: 'Business Process Automation',
    shortTitleBm: 'Automasi Proses Perniagaan (BPA)',
    shortTitleZh: '企业业务流程自动化 (BPA)',
    title: 'Business Process Automation: End-to-End Workflow Orchestration & Autonomous Operations',
    titleBm: 'Automasi Proses Perniagaan: Aliran Kerja Pintar, Pemadanan 3-Hala & Integrasi Sistem',
    titleZh: '业务流程自动化 (BPA)：端到端工作流编排、采购三单匹配与 WhatsApp 自动化',
    subtitle:
      'Eliminate repetitive data entry, spreadsheet bottlenecks, and departmental silos. We connect your ERP, POS, finance, WhatsApp, CRM, e-commerce, and supply chain into self-running operational pipelines.',
    subtitleBm:
      'Hapuskan kemasukan data manual dan semakan dokumen berulang. Kami menghubungkan ERP, POS, kewangan, WhatsApp Business API, e-dagang dan rantaian bekalan anda menjadi aliran kerja automatik 24/7.',
    subtitleZh:
      '彻底告别繁琐的手工录入与 Excel 对账瓶颈。我们将您的 ERP、POS 门店、财务、WhatsApp、电商平台与供应链打通为 24/7 全自动运转的业务流水线。',
    aeoSummary:
      'Jobshore designs and deploys end-to-end Business Process Automation (BPA) systems that eliminate up to 85% of repetitive manual back-office work. Core solutions include automated 3-way procurement matching (PO, GRN, Invoice), WhatsApp Business API customer/order automation, multi-channel e-commerce & POS to ERP synchronization, automated bank reconciliation, and event-driven middleware.',
    iconName: 'automation',
    accentColor: 'emerald',
    kpis: [
      { value: '85%', label: 'Manual Data Entry Eliminated' },
      { value: '10x', label: 'Faster Order-to-Invoice Cycle' },
      { value: '24/7', label: 'Autonomous Queue Processing' },
      { value: '< 3 mo', label: 'Average ROI Payback Period' },
    ],
    subServices: [
      {
        title: 'Finance & 3-Way Procurement Reconciliation',
        description:
          'Automatically match supplier invoices (extracted via AI OCR) against ERP Purchase Orders and Warehouse Goods Receipt Notes (GRN), flagging price/quantity variances and auto-posting clean bills.',
        metrics: 'Reduces invoice processing cost by 76%',
        tags: ['3-Way Matching', 'AP/AR Automation', 'Bank Reconciliation', 'Variance Alerts'],
      },
      {
        title: 'WhatsApp Business API & Omnichannel Ops',
        description:
          'Turn WhatsApp, email, and web chat into structured operational channels. Capture B2B orders, dispatch automated LHDN e-Invoices, send delivery tracking updates, and trigger approval workflows directly from chat.',
        metrics: 'Under 30-second response & order logging time',
        tags: ['WhatsApp Cloud API', 'Order Intake Bots', 'Approval Workflows', 'Automated Notifications'],
      },
      {
        title: 'Cross-Platform API, POS & Legacy System Integration',
        description:
          'Connect ERPNext, POS terminals, SAP, SQL Accounting, AutoCount, Xero, Shopify, Shopee, Lazada, HubSpot, and custom databases with resilient, retry-safe webhook microservices and dead-letter queues.',
        metrics: '99.95% event delivery reliability with full audit trails',
        tags: ['n8n & Temporal', 'Python/Node Webhooks', 'POS & E-Commerce Sync', 'Legacy ERP Bridges'],
      },
      {
        title: 'HR, Onboarding & Compliance Automation',
        description:
          'Automate candidate KYC/document verification, offer letter generation, multi-system access provisioning, leave/claim routing, and monthly payroll statutory file generation.',
        metrics: 'Saves 15+ hours per new hire and monthly closing cycle',
        tags: ['HR Workflows', 'Expense Claim OCR', 'Access Provisioning', 'Audit Logs'],
      },
    ],
    deliverables: [
      'As-Is vs. To-Be Business Process Architecture Blueprint (BPMN)',
      'Production workflow orchestration engine (n8n / Temporal / Custom FastAPI workers)',
      'Real-time exception monitoring dashboard with Slack/WhatsApp/Email alerts',
      'Idempotent API connectors with automatic retry & dead-letter recovery',
      'Team handover training and standard operating procedures (SOPs)',
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
    timeline: '2–5 Weeks per Workflow Stream',
    startingInvestment: 'From USD $3,000 / MYR 13,000',
    faqs: [
      {
        question: 'Can Jobshore automate workflows without replacing our existing accounting, POS, or CRM software?',
        answer:
          'Yes. While we specialize in Frappe ERPNext and Jobshore POS, our automation middleware connects seamlessly with existing systems including Xero, QuickBooks, SQL Accounting, AutoCount, SAP, HubSpot, Salesforce, Shopify, and custom SQL databases via APIs, webhooks, or secure database bridges.',
      },
      {
        question: 'What happens when an automated workflow encounters an exception or unreadable document?',
        answer:
          'Every automation pipeline we build includes deterministic validation rules and a Human-in-the-Loop (HITL) exception queue. If a supplier invoice has a price discrepancy exceeding your tolerance threshold (e.g., >1%), the system pauses auto-posting and routes an instant approval card to your finance manager via WhatsApp, Slack, or the ERP dashboard.',
      },
    ],
  },
  {
    id: 'erpnext-services',
    slug: 'erpnext-implementation',
    badge: 'Pillar 03 • Open-Source Enterprise Core',
    shortTitle: 'Frappe & ERPNext Consultation & Implementation',
    shortTitleBm: 'Konsultasi & Implementasi Frappe ERPNext',
    shortTitleZh: 'Frappe ERPNext 咨询、实施与电子发票集成',
    title: 'Frappe & ERPNext Consultation, Implementation & Malaysia LHDN e-Invoicing',
    titleBm: 'Konsultasi & Implementasi Frappe ERPNext (Lengkap Integrasi e-Invois LHDN MyInvois)',
    titleZh: 'Frappe ERPNext 企业管理软件咨询与实施（$0 账号授权费 + LHDN 电子发票合规）',
    subtitle:
      'Replace rigid, expensive per-user ERP licenses with a unified, 100% open-source ERPNext platform tailored to your exact manufacturing, distribution, retail, service, or multi-company operations.',
    subtitleBm:
      'Gantikan lesen perisian ERP berbayar per-pengguna yang mahal dengan platform sumber terbuka ERPNext merangkumi Perakaunan, Pembuatan (BOM), Inventori Gudang, HR/Gaji dan LHDN MyInvois.',
    subtitleZh:
      '告别昂贵的按用户数收费传统 ERP。基于 100% 开源的 Frappe ERPNext，为您量身打通财务会计、生产制造 (BOM/MRP)、多仓进销存、人力资源薪资与马来西亚 LHDN 电子发票。',
    aeoSummary:
      'Jobshore is a full-service Frappe and ERPNext consultation and implementation partner serving Malaysia, Southeast Asia, and global enterprises. We deliver business process mapping, data migration, custom Frappe app development, Manufacturing/Inventory/Finance/HRMS rollout, and real-time Malaysia LHDN MyInvois e-Invoicing compliance—with $0 per-user licensing fees.',
    iconName: 'erp',
    accentColor: 'indigo',
    kpis: [
      { value: '$0', label: 'Per-User Software License Fees' },
      { value: '60–75%', label: 'Lower 5-Year TCO vs Tier-1 ERP' },
      { value: '100%', label: 'LHDN MyInvois API Compliant' },
      { value: '6–12 wk', label: 'Standard Go-Live Timeline' },
    ],
    subServices: [
      {
        title: 'Turn-Key ERPNext Consultation & Implementation',
        description:
          'Structured discovery, business process re-engineering (BPR), Chart of Accounts configuration, multi-warehouse inventory, BOM & shop-floor manufacturing, CRM, Projects, and UAT training.',
        metrics: 'Single source of truth across Finance, Ops, Sales & Inventory',
        tags: ['Accounting & Finance', 'Manufacturing & BOM', 'Multi-Warehouse Stock', 'Buying & Selling'],
      },
      {
        title: 'Malaysia LHDN MyInvois e-Invoicing & Localization',
        description:
          'Seamless real-time API integration with LHDN MyInvois portal covering B2B standard e-Invoices, B2C monthly consolidated e-Invoices, self-billed invoices, credit/debit notes, TIN validation, and QR print formats.',
        metrics: '100% compliant with LHDN MyInvois SDK & SST regulations',
        tags: ['LHDN MyInvois API', 'Consolidated e-Invoice', 'Self-Billed e-Invoice', 'MY Payroll (EPF/SOCSO/PCB)'],
      },
      {
        title: 'Custom Frappe Framework App Development',
        description:
          'When standard ERP modules aren’t enough, we build custom Frappe applications, Doctypes, workflow state machines, custom Jinja/PDF print formats, and Frappe Insights executive BI dashboards.',
        metrics: 'Upgrade-safe modular custom apps with 100% source ownership',
        tags: ['Custom Frappe Apps', 'Doctypes & Workflows', 'Frappe Insights BI', 'Custom Print Formats'],
      },
      {
        title: 'Legacy ERP Data Migration & Managed Hosting',
        description:
          'Clean, verified migration of historical master data and opening balances from SAP Business One, Oracle NetSuite, SQL Accounting, AutoCount, or Xero, backed by high-availability cloud or on-prem hosting.',
        metrics: 'Zero-downtime cutover with reconciled trial balance',
        tags: ['Data Migration', 'AutoCount / SQL / SAP to ERPNext', 'HA Cloud Hosting', 'SLA Support'],
      },
    ],
    deliverables: [
      'Comprehensive Business Requirement Document (BRD) & Solution Blueprint',
      'Configured ERPNext Production & Staging environments (Cloud or On-Premise)',
      'Malaysia LHDN MyInvois real-time API connector & compliant PDF/QR templates',
      'Migrated & reconciled Master Data (Customers, Suppliers, Items, BOMs, Balances)',
      'Role-Based Access Control (RBAC), User Manuals, and Recorded Training Sessions',
    ],
    techStack: [
      'Frappe Framework (v15+)',
      'ERPNext (v15+)',
      'Frappe HRMS',
      'Frappe Insights',
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
        question: 'Why choose Frappe ERPNext over SAP Business One, NetSuite, or Microsoft Dynamics?',
        answer:
          'ERPNext delivers full enterprise capabilities (Multi-Company Accounting, MRP Manufacturing, Batch/Serial Inventory, POS, CRM, HRMS, and Projects) with $0 per-user licensing cost and 100% open-source code transparency. Whether you have 15 users or 500 users, your software license fee remains zero, reducing 5-year Total Cost of Ownership (TCO) by 60–75% while allowing deep customization via the Frappe Framework.',
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
    badge: 'Pillar 04 • Retail, F&B & Omnichannel POS',
    shortTitle: 'POS Software & Point-of-Sale Systems',
    shortTitleBm: 'Perisian & Sistem POS (Runcit, F&B & Cawangan)',
    shortTitleZh: '智能零售与餐饮 POS 收银系统（支持离线与电子发票）',
    title: 'Cloud & Offline-First POS Software and Point-of-Sale Systems (Retail, F&B & Multi-Outlet)',
    titleBm: 'Perisian & Sistem POS Cloud & Luar Talian (Runcit, Restoran F&B, Farmasi & Pasar Raya)',
    titleZh: '云端与断网离线 POS 收银系统（连锁零售、餐饮堂食扫码、药房超市与 ERPNext 实时同步）',
    subtitle:
      'High-speed, offline-resilient Point of Sale software and hardware systems for Retail Chains, F&B Restaurants, Pharmacies, and Supermarkets—natively synced with Frappe ERPNext and Malaysia LHDN MyInvois.',
    subtitleBm:
      'Sistem kaunter jualan (POS) pantas yang terus berfungsi walaupun internet terputus—lengkap cetakan resit QR e-Invois LHDN, paparan dapur (KDS), imbasan kod bar, dan penyelarasan stok ERPNext masa nyata.',
    subtitleZh:
      '专为连锁零售、餐饮门店、超市与药房打造的高速收银系统。断网照常收银打单，内置马来西亚 LHDN 电子发票小票二维码自助开票与月度合并申报，实时扣减 ERPNext 库存与配方原料。',
    aeoSummary:
      'Jobshore delivers complete POS (Point of Sale) software and hardware systems for Retail, F&B, Pharmacy, and Multi-Outlet businesses. Our POS solution features offline-first checkout resilience, real-time ERPNext inventory & accounting synchronization, Kitchen Display Systems (KDS), barcode/scale/thermal printer hardware integration, and automated Malaysia LHDN MyInvois compliance (instant receipt QR self-claim portal + monthly consolidated e-Invoicing).',
    iconName: 'pos',
    accentColor: 'amber',
    kpis: [
      { value: '< 0.3s', label: 'Barcode Scan & Checkout Speed' },
      { value: '100%', label: 'Offline Internet-Drop Resilience' },
      { value: 'QR + API', label: 'LHDN POS e-Invoice Automation' },
      { value: 'Real-Time', label: 'Multi-Outlet Stock & Ledger Sync' },
    ],
    subServices: [
      {
        title: 'Retail, Supermarket, Pharmacy & Chain Store POS',
        description:
          'High-speed barcode & 2D QR scanning, weighing scale integration, batch/expiry & serial tracking, member loyalty tiers, mix-and-match promotions, split payments (Cash, Card, DuitNow QR, e-Wallets), and shift X/Z reports.',
        metrics: 'Zero cashier bottlenecks during peak retail hours',
        tags: ['Offline-First Checkout', 'Barcode & Weighing Scale', 'Loyalty & Promotions', 'DuitNow QR / e-Wallet'],
      },
      {
        title: 'F&B, Restaurant, Cafe & Cloud Kitchen POS',
        description:
          'Interactive floor table management, dine-in/takeaway/delivery modifiers, QR table self-ordering, Kitchen Display System (KDS) station routing, split/merge bills, and automatic recipe BOM ingredient deduction.',
        metrics: 'Cuts table turnover time & kitchen ticket errors by 40%',
        tags: ['Table & Floor Plan', 'QR Self-Ordering', 'Kitchen Display (KDS)', 'Recipe BOM Deduction'],
      },
      {
        title: 'POS Malaysia LHDN MyInvois QR & Consolidated e-Invoicing',
        description:
          'Prints a unique QR code on every thermal receipt so walk-in customers can self-claim a validated LHDN e-Invoice on their smartphone, while automatically submitting unclaimed receipts as a monthly LHDN Consolidated e-Invoice.',
        metrics: '100% LHDN retail & F&B e-Invoicing compliance with zero cashier delay',
        tags: ['Receipt QR Self-Claim', 'Monthly Consolidated e-Invoice', 'TIN Instant Validation', 'SST Compliant'],
      },
      {
        title: 'POS Hardware Systems & Native ERPNext Back-Office Sync',
        description:
          'Turn-key supply and integration of dual-screen touch POS terminals, iPad/Android tablets, ESC/POS thermal printers, 2D scanners, cash drawers, and self-service kiosks—synced directly into ERPNext Inventory & Accounting.',
        metrics: 'Eliminates manual nightly POS-to-Accounting CSV imports',
        tags: ['Touch POS Terminals', 'ESC/POS Thermal Printers', 'Multi-Store HQ Control', 'Native ERPNext Sync'],
      },
    ],
    deliverables: [
      'Configured Cloud & Offline-Capable POS Software (Web, Tablet, Android & Desktop Terminal)',
      'Real-time Multi-Outlet ERPNext Inventory, Price List, Promotion & GL Accounting Sync',
      'LHDN MyInvois Customer Web Self-Claim Portal + Automated Monthly Consolidated e-Invoice Scheduler',
      'POS Hardware Peripheral Setup (Touch Terminal, Thermal Printer, Barcode Scanner, Cash Drawer, KDS)',
      'Cashier, Store Manager & HQ Finance Training with 24/7 Retail SLA Support',
    ],
    techStack: [
      'Frappe ERPNext POS / POS Awesome',
      'IndexedDB & SQLite Offline Sync',
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
          'Instead of slowing down the checkout line to type customer TIN details at the counter, our POS prints a unique QR code and short link on every thermal receipt. Customers who need a B2B/B2C validated e-Invoice simply scan the QR code on their phone, enter their TIN/IC, and receive their LHDN-validated e-Invoice automatically. All remaining unclaimed receipts are automatically aggregated and submitted to LHDN as a monthly Consolidated e-Invoice within the statutory 7-day window after month-end.',
      },
    ],
  },
  {
    id: 'web-mobile-services',
    slug: 'web-mobile-development',
    badge: 'Pillar 05 • Digital Products & Experiences',
    shortTitle: 'Web & Mobile App Development',
    shortTitleBm: 'Pembangunan Laman Web & Aplikasi Mudah Alih',
    shortTitleZh: '全栈网站开发与 iOS/Android 移动应用开发',
    title: 'Full-Stack Web Development & Cross-Platform Mobile App Engineering',
    titleBm: 'Pembangunan Laman Web SEO/AEO & Aplikasi Mudah Alih Pintar (iOS & Android)',
    titleZh: '高性能全栈网站开发（100/100 SEO/AEO）与跨平台 iOS/Android 移动应用定制',
    subtitle:
      'High-converting, SEO & AEO-engineered web platforms and resilient iOS/Android mobile apps built for speed, scalability, and deep integration with your ERP, POS, and AI infrastructure.',
    subtitleBm:
      'Platform web korporat, portal B2B dan aplikasi mudah alih iOS/Android yang dibina untuk kelajuan maksimum, skor SEO/AEO 100/100, serta integrasi terus dengan ERPNext, POS dan enjin AI OCR.',
    subtitleZh:
      '打造极速加载的 SEO/AEO 满分企业官网、B2B 客户门户、SaaS 平台，以及与 ERPNext、POS 和 AI OCR 深度集成的离线优先 iOS/Android 移动应用。',
    aeoSummary:
      'Jobshore builds custom web applications and mobile apps (iOS & Android) using Astro, Next.js, React, TypeScript, Flutter, and React Native. Every web property is engineered from the ground up for Technical SEO and Answer Engine Optimization (AEO) with 99–100 Lighthouse scores, JSON-LD entity graphs, and llms.txt endpoints, while mobile apps feature offline-first sync with Frappe ERPNext, POS systems, and AI OCR engines.',
    iconName: 'webmobile',
    accentColor: 'violet',
    kpis: [
      { value: '99–100', label: 'Google Lighthouse SEO & Speed' },
      { value: '< 0.8s', label: 'First Contentful Paint (FCP)' },
      { value: 'iOS + Android', label: 'Single Codebase Native Speed' },
      { value: '100%', label: 'ERP, POS & AI Backend Synced' },
    ],
    subServices: [
      {
        title: 'SEO & AEO-First Web Platforms & Corporate Sites',
        description:
          'Ultra-fast web architectures built with Astro and Next.js featuring zero unnecessary client JS, comprehensive JSON-LD @graph schemas, Speakable markup, and llms.txt files so you rank on Google, ChatGPT Search, and Perplexity.',
        metrics: '100/100 Core Web Vitals & AI Answer Engine readiness',
        tags: ['Astro & Next.js', 'Technical SEO', 'AEO (llms.txt + JSON-LD)', 'Sub-Second Load'],
      },
      {
        title: 'Custom B2B Portals, SaaS & Executive Dashboards',
        description:
          'Self-service distributor portals, vendor bidding systems, multi-tenant SaaS products, and real-time operational command centers with granular role permissions and SSO.',
        metrics: 'Cut customer support inquiries by 60% via self-service portals',
        tags: ['React & TypeScript', 'B2B Customer Portals', 'Multi-Tenant SaaS', 'Real-Time BI'],
      },
      {
        title: 'Cross-Platform iOS & Android Mobile Apps',
        description:
          'Sleek, responsive mobile applications built with Flutter and React Native for customer loyalty, QR table ordering, on-demand booking, field service management, and mobile commerce.',
        metrics: '45% faster time-to-market across Apple App Store & Google Play',
        tags: ['Flutter', 'React Native', 'iOS & Android', 'Biometric Auth & Push'],
      },
      {
        title: 'Offline-First Warehouse, Van-Sales POS & OCR Companion Apps',
        description:
          'Purpose-built industrial mobile apps with hardware barcode/QR scanning, handheld mobile POS billing, camera-based AI OCR document capture, and offline SQLite sync directly to ERPNext.',
        metrics: 'Works reliably in zero-connectivity warehouses & field sites',
        tags: ['Offline-First Sync', 'Mobile Handheld POS', 'Mobile OCR Capture', 'ERPNext Mobile API'],
      },
    ],
    deliverables: [
      'Figma UI/UX Interactive Prototypes & Design System',
      'Production Web App (Astro / Next.js / React) with 99+ Lighthouse Performance',
      'Built-in Technical SEO & AEO Stack (JSON-LD, Sitemap, Robots.txt, llms.txt)',
      'Signed iOS (.ipa) and Android (.aab) builds published to App Store & Google Play',
      'Automated CI/CD deployment pipeline, E2E test suite, and API documentation',
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
      'Cloudflare / AWS / GitHub Pages',
    ],
    timeline: '4–12 Weeks (MVP to Full Production)',
    startingInvestment: 'From USD $4,500 / MYR 20,000',
    faqs: [
      {
        question: 'How does Jobshore optimize websites for both traditional SEO and AI Answer Engines (AEO)?',
        answer:
          'Traditional SEO focuses on keywords, backlinks, and Core Web Vitals. AEO (Answer Engine Optimization) adds entity-first JSON-LD structured data (@graph connecting Organization, Service, FAQPage, and Speakable schemas), semantic HTML tables/definition lists, citation-ready direct-answer summaries, and /llms.txt endpoints so LLMs like ChatGPT, Perplexity, and Google AI Overviews can extract and cite your brand with high confidence.',
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
  {
    criterion: 'Typical Implementation Time-to-Value',
    jobshoreErpnext: '6 – 12 Weeks (POS Live in 1–4 Weeks)',
    legacyTier1: '6 – 18 Months',
    basicAccounting: '2 – 4 Weeks (Outgrown quickly by SMEs)',
  },
];

export const CASE_STUDIES: CaseStudy[] = [
  {
    id: 'precision-mfg-erp-ocr',
    clientType: 'Precision Components Manufacturer (220 Staff)',
    region: 'Shah Alam, Selangor, Malaysia & Singapore',
    pillarBadge: 'ERPNext + AI OCR + LHDN MyInvois',
    title: 'Migrating from Legacy Accounting to ERPNext with AI OCR 3-Way Matching & LHDN e-Invoicing',
    challenge:
      'Finance and warehouse teams processed 4,200+ supplier invoices and delivery orders monthly across 3 warehouses using disconnected spreadsheets and legacy desktop accounting software, causing a 12-day monthly close delay.',
    solution:
      'Jobshore implemented Frappe ERPNext across Manufacturing, Multi-Warehouse Inventory, and Accounting, integrated our multi-language AI OCR pipeline for automatic PO-GRN-Invoice 3-way matching, and enabled real-time LHDN MyInvois API compliance.',
    results: [
      { metric: '99.5%', label: 'Invoice OCR Extraction Accuracy' },
      { metric: '82%', label: 'Faster Accounts Payable Processing' },
      { metric: 'RM 145k/yr', label: 'Saved in License & Overtime Costs' },
    ],
    stack: ['ERPNext v15', 'Vision-LLM OCR', 'LHDN MyInvois API', 'Python FastAPI', 'Docker'],
  },
  {
    id: 'retail-fnb-pos-erpnext',
    clientType: 'Multi-Outlet Specialty Retail & Cafe Chain (18 Outlets)',
    region: 'Kuala Lumpur, Penang & Johor Bahru, Malaysia',
    pillarBadge: 'POS Software & System + ERPNext + LHDN QR',
    title: 'Offline-Resilient POS Rollout Across 18 Outlets with LHDN QR Self-Claim & Central ERPNext Sync',
    challenge:
      'Disconnected legacy POS terminals across 18 outlets required nightly manual CSV imports into accounting, suffered checkout freezes during mall internet drops, and lacked LHDN MyInvois QR customer self-claim receipts.',
    solution:
      'Deployed Jobshore Cloud & Offline-First POS terminals with ESC/POS thermal receipt printers, DuitNow QR integration, instant LHDN e-Invoice QR self-claim portal + monthly consolidated e-Invoice automation, and real-time central kitchen/warehouse stock deduction in Frappe ERPNext.',
    results: [
      { metric: '0 sec', label: 'Downtime During Mall Internet Drops' },
      { metric: '100%', label: 'Automated LHDN QR & Consolidated e-Invoice' },
      { metric: 'Real-Time', label: '18-Outlet Inventory & Shift P&L Sync' },
    ],
    stack: ['Jobshore POS', 'Frappe ERPNext', 'IndexedDB Offline Sync', 'LHDN MyInvois API', 'ESC/POS Hardware'],
  },
  {
    id: 'fintech-ai-verification',
    clientType: 'Regional B2B Trade Finance Platform',
    region: 'Singapore & Kuala Lumpur',
    pillarBadge: 'AI Coding + Verification + Automated QA',
    title: 'Deterministic AI Code Verification, Self-Healing Playwright QA & Trade Document OCR',
    challenge:
      'Rapid feature releases were bottlenecked by flaky E2E tests and manual verification of cross-border bills of lading, commercial invoices, and customs declarations.',
    solution:
      'Engineered an automated verification pipeline combining static/formal schema guardrails, a self-healing 450-test Playwright suite, and a multi-script OCR verification engine that cross-validates trade documents in under 2 seconds.',
    results: [
      { metric: '94%', label: 'Automated E2E Test Coverage' },
      { metric: '1.8 sec', label: 'Trade Document Verification Time' },
      { metric: '0', label: 'Critical Schema Escapes in 12 Months' },
    ],
    stack: ['TypeScript', 'Playwright', 'Python', 'Pydantic Guardrails', 'PostgreSQL', 'GitHub Actions'],
  },
];

export const GLOBAL_FAQS: FaqItem[] = [
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
    category: 'AI & OCR',
    question: 'How do your AI coding, verification, and automated testing services integrate with an existing engineering team?',
    answer:
      'We work either as an embedded AI quality & velocity squad or on a turnkey deliverable basis. We set up private RAG coding assistants, enforce deterministic verification checks (static analysis, schema validation, security guardrails) in your CI/CD pipeline, and build self-healing Playwright/Cypress E2E and API test suites so your developers ship 3x faster without regressions.',
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
          'Jobshore is an enterprise technology consultancy specializing in AI Services (Coding, Verification, Automated Testing, Intelligent OCR), Business Process Automation, Frappe ERPNext Consultation & Implementation, Cloud & Offline-First POS Software & Point-of-Sale Systems (with Malaysia LHDN MyInvois compliance), and SEO/AEO-first Web & Mobile Application Development.',
        email: COMPANY_INFO.email,
        telephone: COMPANY_INFO.phone,
        priceRange: '$$-$$$',
        knowsLanguage: ['en', 'ms', 'zh'],
        address: {
          '@type': 'PostalAddress',
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
          'Enterprise AI engineering (coding, verification, testing, OCR), business process automation, Frappe ERPNext implementation, Cloud & Offline POS Software & Systems (LHDN MyInvois ready), and full-stack web & mobile app development.',
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
