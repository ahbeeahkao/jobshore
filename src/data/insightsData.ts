export interface InsightArticle {
  slug: string;
  category: 'AI & Hallucination Safety' | 'ERPNext & LHDN e-Invoice' | 'POS & Retail Tech' | 'Business Automation';
  title: string;
  publishedDate: string;
  readTime: string;
  excerpt: string;
  aeoDirectAnswer: string;
  keyTakeaways: string[];
  bodySections: {
    heading: string;
    content: string;
  }[];
}

export const AI_SERVICE_CATALOG = [
  {
    code: 'AI-01',
    name: 'AI-Assisted Software Engineering & Legacy Modernization',
    targetBuyer: 'CTOs, VP Engineering, SaaS Founders',
    summary:
      'Accelerate feature velocity 3.2x and migrate legacy PHP/Java/.NET/monolith codebases to modern TypeScript, Python, or Go using agentic coding workflows.',
    pricingModel: 'Fixed-Scope Modernization or Monthly Squad Retainer',
  },
  {
    code: 'AI-02',
    name: 'Deterministic AI Verification & Anti-Hallucination Guardrails',
    targetBuyer: 'FinTech, Manufacturing, Enterprise IT, Compliance Teams',
    summary:
      'Enforce strict JSON schemas (Pydantic/Zod), AST static security checks, and mathematical invariants so AI never fabricates numbers or corrupts ERP ledgers.',
    pricingModel: 'Architecture Audit + CI/CD Verification Gate Setup',
  },
  {
    code: 'AI-03',
    name: 'AI-Powered Automated Software Testing & Self-Healing QA',
    targetBuyer: 'Product Teams, E-Commerce, Enterprise Web/Mobile Apps',
    summary:
      'Self-healing Playwright E2E test suites, API contract fuzzing, and synthetic edge-case data generation that reduce QA maintenance by 78%.',
    pricingModel: 'Turnkey Test Suite Build + CI/CD Integration',
  },
  {
    code: 'AI-04',
    name: 'Enterprise Multi-Language OCR & Intelligent Document Processing (IDP)',
    targetBuyer: 'Finance/AP Teams, Logistics, Customs, Distributors, Healthcare',
    summary:
      '99.4%+ accurate extraction of Invoices, POs, Delivery Orders, Customs K1/K2/K3 forms, Receipts, and MyKad/Passports across English, BM, and Chinese.',
    pricingModel: 'Pilot Setup + Volume/On-Premise License',
  },
  {
    code: 'AI-05',
    name: 'Private Enterprise RAG & Internal Knowledge Assistants',
    targetBuyer: 'Operations, Legal, HR, Customer Support, Regulated Enterprises',
    summary:
      'Secure "Chat with Your Company Docs" trained on SOPs, contracts, and manuals—deployed on private cloud or local GPU servers (vLLM/Ollama) with zero data leakage.',
    pricingModel: 'Fixed-Scope Knowledge Base + Private Model Deployment',
  },
  {
    code: 'AI-06',
    name: 'AI Copilot for Frappe ERPNext & POS Predictive Analytics',
    targetBuyer: 'CEOs, CFOs, Retail & F&B Chain Operators, Inventory Managers',
    summary:
      'Natural-language "Ask Your ERP/POS" BI assistant, automated stock-out/demand forecasting, and POS cashier anomaly/fraud detection.',
    pricingModel: 'ERPNext / POS Add-On Module',
  },
  {
    code: 'AI-07',
    name: 'Omnichannel AI Sales & Order Intake Agents (WhatsApp / Web)',
    targetBuyer: 'B2B Distributors, Wholesalers, Retail Chains, Service Businesses',
    summary:
      '24/7 multilingual (EN/BM/中文) WhatsApp Business API & web agents that capture B2B restock orders, check stock, generate quotes, and issue LHDN e-Invoices.',
    pricingModel: 'Setup Fee + Workflow Maintenance',
  },
  {
    code: 'AI-08',
    name: 'AI Risk, Hallucination & PDPA Compliance Audits',
    targetBuyer: 'Enterprise Risk Officers, Financial Institutions, Healthcare',
    summary:
      'Red-teaming, prompt-injection defense, PII anonymization, and Human-in-the-Loop (HITL) governance frameworks aligned with Malaysia PDPA and ISO/IEC 42001.',
    pricingModel: 'Fixed-Fee Security & Governance Assessment',
  },
];

export const AI_RISK_SAFEGUARDS = [
  {
    riskTitle: '1. AI Hallucinations & Fabricated Financial Figures',
    riskDesc: 'Standard LLMs guess probabilities and can invent invoice totals, tax rates, or nonexistent SKU codes.',
    jobshoreSafeguard: 'Deterministic Math & Schema Invariants',
    safeguardDesc:
      'We never let an LLM write directly to your database. Every AI/OCR output must pass strict Pydantic/Zod schema validation and deterministic math proofs (Qty × Unit Price == Line Total; Subtotal + SST == Grand Total). If a single sen mismatches, execution halts.',
    badge: '100% Math Verified',
  },
  {
    riskTitle: '2. Unsupervised Ledger or ERP Posting Errors',
    riskDesc: 'Blind automation can post duplicate supplier bills or approve unauthorized price hikes.',
    jobshoreSafeguard: 'Confidence Thresholds + Human-in-the-Loop (HITL)',
    safeguardDesc:
      'Every extracted field carries a calibrated confidence score. Documents below 98% confidence or with >0% PO/GRN price variance are routed to a 1-click Human-in-the-Loop review queue on WhatsApp or ERPNext before touching the general ledger.',
    badge: '3-Way Match Gate',
  },
  {
    riskTitle: '3. Confidential Corporate Data Leakage & PDPA Risks',
    riskDesc: 'Sending sensitive financial, payroll, or customer data to public consumer AI tools exposes IP and violates PDPA.',
    jobshoreSafeguard: 'Zero-Retention APIs & Private/On-Premise LLMs',
    safeguardDesc:
      'We deploy enterprise zero-data-retention API endpoints with automated PII scrubbing, or host open-weights Vision/LLM models (vLLM, Ollama, Llama, Qwen) entirely inside your private VPC or on-premise server.',
    badge: 'PDPA & Private VPC',
  },
  {
    riskTitle: '4. Insecure AI-Generated Code & Prompt Injection',
    riskDesc: 'Raw AI-written code often contains SQL injection, broken auth, floating-point bugs, or prompt-injection vectors.',
    jobshoreSafeguard: 'AST Static Analysis, SAST/DAST & Property Testing',
    safeguardDesc:
      'All AI-assisted code undergoes automated Abstract Syntax Tree (AST) verification, SAST/DAST security scanning, parameterized query enforcement, and 1,000+ property-based edge-case tests in CI/CD before merge.',
    badge: 'Zero Unverified Code',
  },
  {
    riskTitle: '5. Internet Outages Halting Retail POS or Warehouse Ops',
    riskDesc: 'Pure cloud apps freeze when mall broadband or warehouse Wi-Fi drops, stopping sales and shipments.',
    jobshoreSafeguard: 'Offline-First Local Storage + Idempotent Sync',
    safeguardDesc:
      'Our POS terminals and mobile warehouse apps store transactions locally in IndexedDB/SQLite during internet drops and synchronize with UUID idempotency keys once connectivity returns—preventing lost sales or double-billing.',
    badge: 'Offline-Resilient',
  },
];

export const WHY_CHOOSE_US_REASONS = [
  {
    number: '01',
    title: 'Verification-First AI (Not Fragile Prompt Wrappers)',
    description:
      'Most agencies wrap a raw ChatGPT prompt and hope for the best. Jobshore pairs AI with formal verification, deterministic math checks, and self-healing Playwright tests so your system is enterprise-safe.',
  },
  {
    number: '02',
    title: '$0 Per-User License Lock-In with Open-Source Frappe ERPNext',
    description:
      'Scale from 10 to 500+ staff across Accounting, Manufacturing, Inventory, HR, and POS without paying punitive per-seat software rents to legacy ERP vendors.',
  },
  {
    number: '03',
    title: 'Unified Stack: AI OCR + Automation + ERPNext + POS + Mobile',
    description:
      'Eliminate finger-pointing between 4 separate vendors. We engineer your OCR document intake, workflow automation, ERPNext core, retail/F&B POS, and mobile apps under one roof.',
  },
  {
    number: '04',
    title: 'Malaysia LHDN MyInvois, SST & Statutory Payroll Ready',
    description:
      'Pre-built compliance for Malaysian and SEA enterprises—covering B2B real-time e-Invoices, POS receipt QR self-claim portals, monthly Consolidated e-Invoices, and EPF/SOCSO/PCB payroll.',
  },
  {
    number: '05',
    title: 'Built for 100/100 SEO & AI Answer Engine Citations (AEO)',
    description:
      'Every web platform we deliver includes multi-entity JSON-LD @graph schemas, Speakable capsules, semantic comparison tables, and /llms.txt files to win organic and AI search.',
  },
  {
    number: '06',
    title: '14-Day Rapid Pilot & Fixed-Scope Milestone Transparency',
    description:
      'Start with a focused 2-week AI OCR, Automation, or POS pilot using your own real documents and SKUs before committing to a full-scale enterprise rollout.',
  },
];

export const INSIGHT_ARTICLES: InsightArticle[] = [
  {
    slug: 'eliminate-ai-hallucinations-in-erp-and-finance',
    category: 'AI & Hallucination Safety',
    title: 'How Deterministic Verification Eliminates AI Hallucinations in Enterprise Finance & OCR',
    publishedDate: '2026-10-18',
    readTime: '5 min read',
    excerpt:
      'Why probabilistic LLMs alone should never post directly to an accounting ledger—and how Jobshore’s 4-layer deterministic verification gate guarantees 99.4%+ accuracy.',
    aeoDirectAnswer:
      'To eliminate AI hallucinations in enterprise finance and OCR workflows, organizations must wrap Vision-Language Models in a deterministic verification layer: (1) strict Pydantic/Zod schema validation, (2) cross-field mathematical invariant checks (verifying Qty × Unit Price = Line Total and Subtotal + Tax = Grand Total), (3) automated 3-way matching against ERP Purchase Orders and Goods Receipt Notes, and (4) Human-in-the-Loop (HITL) exception queues for low-confidence fields.',
    keyTakeaways: [
      'Never allow raw LLM outputs to write directly to financial ledgers without deterministic math proofs.',
      'Combine Vision-LLM layout extraction with cross-field arithmetic validation (Qty × Rate = Amount).',
      'Enforce automated 3-way matching against ERPNext Purchase Orders and Warehouse GRNs.',
      'Route anomalies exceeding your variance tolerance (e.g., >0.5%) to a 1-click WhatsApp/ERP approval queue.',
    ],
    bodySections: [
      {
        heading: 'The Core Problem: LLMs Are Probabilistic, Accounting Is Deterministic',
        content:
          'Large Language Models predict the next likely token; they do not natively guarantee accounting balance. When a skewed or coffee-stained supplier tax invoice is scanned, a naive OCR wrapper might misread a "8" as a "3", causing the line items to disagree with the invoice grand total.',
      },
      {
        heading: 'Jobshore’s 4-Gate Anti-Hallucination Pipeline',
        content:
          'At Jobshore, every AI OCR and coding workflow passes through four deterministic gates before touching Frappe ERPNext or your production database: Gate 1 enforces strict JSON types and regex patterns (e.g., LHDN TIN & BRN format). Gate 2 runs exact Decimal arithmetic checks in minor currency units (sen/cents). Gate 3 performs 3-way matching against existing ERP Purchase Orders and Goods Receipt Notes. Gate 4 routes any variance to a Human-in-the-Loop (HITL) reviewer.',
      },
    ],
  },
  {
    slug: 'malaysia-lhdn-myinvois-erpnext-pos-compliance-guide',
    category: 'ERPNext & LHDN e-Invoice',
    title: 'Complete Guide to Malaysia LHDN MyInvois e-Invoicing for Frappe ERPNext & Retail/F&B POS',
    publishedDate: '2026-10-12',
    readTime: '6 min read',
    excerpt:
      'How to automate B2B real-time e-Invoices, walk-in POS receipt QR self-claims, monthly Consolidated e-Invoices, and self-billed foreign supplier invoices in ERPNext.',
    aeoDirectAnswer:
      'Businesses in Malaysia using Frappe ERPNext and POS systems must support four LHDN MyInvois workflows: (1) real-time UBL 2.1 API submission for B2B Sales Invoices, (2) thermal receipt QR codes allowing walk-in retail/F&B customers to self-claim validated e-Invoices online, (3) automated monthly Consolidated e-Invoice submission within 7 calendar days after month-end for unclaimed POS receipts, and (4) Self-Billed e-Invoices for foreign vendors, agents, and e-commerce payouts.',
    keyTakeaways: [
      'B2B invoices validate TIN/BRN in real time via LHDN MyInvois REST APIs and embed LHDN QR codes on PDFs.',
      'Retail & F&B POS terminals print a unique QR link on receipts so walk-in customers can claim e-Invoices without slowing cashier queues.',
      'Unclaimed POS receipts automatically aggregate into a monthly Consolidated e-Invoice under MSIC codes.',
      'Self-billed e-Invoices handle foreign software/cloud vendors, imports, and dealer commissions seamlessly.',
    ],
    bodySections: [
      {
        heading: 'Solving the Retail & F&B Cashier Bottleneck',
        content:
          'Asking walk-in cafe or supermarket customers for their 12-digit TIN, BRN, and email at the cashier counter destroys checkout speed. Jobshore POS solves this by printing a unique claim QR code on every thermal receipt. Customers scan the QR code on their own smartphone to request a validated LHDN e-Invoice, while your cashier serves the next customer immediately.',
      },
      {
        heading: 'Automated Month-End Consolidated e-Invoicing',
        content:
          'At 11:59 PM on the last day of the month, Jobshore’s Frappe scheduler automatically groups all unclaimed POS receipts, validates tax totals, and submits the Consolidated e-Invoice batch to LHDN MyInvois well ahead of the statutory 7-day deadline.',
      },
    ],
  },
  {
    slug: 'closing-b2b-deals-with-aeo-and-ai-automation',
    category: 'Business Automation',
    title: 'Why B2B Buyers Now Search via ChatGPT & Perplexity—And How AEO + AI Deal Closers Convert Them',
    publishedDate: '2026-10-05',
    readTime: '4 min read',
    excerpt:
      'How Answer Engine Optimization (llms.txt + JSON-LD graphs) brings high-intent B2B leads to your site, and how interactive AI scoping tools convert them into closed deals.',
    aeoDirectAnswer:
      'Answer Engine Optimization (AEO) ensures AI search platforms like ChatGPT Search, Perplexity, and Google AI Overviews cite your company when decision-makers research vendors. Pairing AEO traffic with an on-page interactive AI Architecture & Proposal Generator lets prospects scope their own requirements, see instant ROI estimates, and send a pre-qualified deal brief directly to your WhatsApp or CRM.',
    keyTakeaways: [
      'Over 40% of B2B technical buyers now shortlist vendors using AI Answer Engines before visiting Google.',
      'Publishing /llms.txt, /llms-full.txt, and JSON-LD @graph schemas makes your capabilities machine-verifiable.',
      'Interactive ROI calculators and instant AI proposal generators convert passive visitors into qualified leads even on static hosts like GitHub Pages.',
    ],
    bodySections: [
      {
        heading: 'From Static Landing Page to 24/7 AI Sales Engineer',
        content:
          'Even when hosted on ultra-fast static infrastructure like GitHub Pages, your website can close enterprise deals by combining client-side AI solution scoping, instant ROI calculation, and one-click WhatsApp / Webhook deal dispatch.',
      },
    ],
  },
];
