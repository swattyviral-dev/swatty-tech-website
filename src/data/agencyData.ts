export interface ServiceItem {
  id: string;
  title: string;
  tagline: string;
  priceGh: number;
  priceNote?: string;
  iconName: 'Globe' | 'MapPin' | 'CreditCard' | 'Cpu';
  features: string[];
  recommendedFor: string;
  turnaround: string;
}

export interface PortfolioItem {
  id: string;
  title: string;
  category: string;
  clientName: string;
  location: string;
  description: string;
  imageSrc: string;
  highlightMetric: string;
  turnaroundTime: string;
  features: string[];
  liveDemoData: {
    heroTitle: string;
    actionLabel: string;
    sampleServices: { name: string; price: string; detail?: string }[];
    sampleNotice: string;
  };
}

export interface AddOnItem {
  id: string;
  name: string;
  description: string;
  priceGh: number;
  popular?: boolean;
}

export const AGENCY_PHONE = '+233 538 913 068';
export const AGENCY_PHONE_CLEAN = '233538913068';
export const AGENCY_EMAIL = 'swattyviral@gmail.com';
export const AGENCY_LOCATION = 'Spintex Road & East Legon, Accra, Ghana';

// Exact WhatsApp link format specified by user
export const EXACT_WHATSAPP_URL = "https://wa.me/233538913068?text=Hi%20Swatty%20Tech,%20I'd%20like%20to%20get%20a%20website%20built%20for%20my%20business.";

export function generateWhatsAppUrl(customMessage?: string): string {
  if (!customMessage) {
    return EXACT_WHATSAPP_URL;
  }
  return `https://wa.me/${AGENCY_PHONE_CLEAN}?text=${encodeURIComponent(customMessage)}`;
}

export const SERVICES: ServiceItem[] = [
  {
    id: 'mobile-website',
    title: '1-Page Mobile Websites',
    tagline: 'High-speed, conversion-engineered landing pages built for Ghanaian smartphone users.',
    priceGh: 2000,
    priceNote: 'Standard Launch Package',
    iconName: 'Globe',
    features: [
      'Sub-second load speeds on MTN & Telecel 4G',
      'One-tap WhatsApp & Direct Call booking buttons',
      'Custom branding, typography & conversion copy',
      'Zero monthly software subscription traps',
      'Contact lead capture sent straight to your phone',
      'Complimentary SSL security certificate'
    ],
    recommendedFor: 'Plumbers, Auto Repair Shops, Hardware Stores, Retail Merchants',
    turnaround: '48 Hours'
  },
  {
    id: 'google-maps',
    title: 'Google Maps Optimization & Setup',
    tagline: 'Dominate Accra local search when nearby clients search for your services.',
    priceGh: 850,
    priceNote: 'One-time setup & verification',
    iconName: 'MapPin',
    features: [
      'Google Business Profile claiming & verification',
      'Accra neighborhood geotagging (Spintex, Osu, Legon)',
      'High-res photo upload & catalog optimization',
      'Automated customer 5-star review link generator',
      'Google Maps pin placement and driving directions',
      'Monthly search impression dashboard'
    ],
    recommendedFor: 'Auto Repair Workshops, Physical Retailers, Clinics',
    turnaround: '24-48 Hours'
  },
  {
    id: 'paystack-momo',
    title: 'E-Commerce & Paystack Integration',
    tagline: 'Accept Mobile Money (MTN, Telecel, AT) and Card payments directly to your bank.',
    priceGh: 1200,
    priceNote: 'Integration + MoMo webhook setup',
    iconName: 'CreditCard',
    features: [
      'Paystack verified merchant API integration',
      'Instant MTN MoMo, Telecel Cash & AT Money acceptance',
      'Visa & Mastercard secure card checkout',
      'Instant SMS & WhatsApp payment notifications',
      'Automated digital invoice & receipt issuance',
      'Direct settlement to your Ghanaian bank account'
    ],
    recommendedFor: 'Product Sellers, Service Deposits, Course Creators',
    turnaround: '48 Hours'
  },
  {
    id: 'hardware-pos',
    title: 'System Configurations & Hardware Setup',
    tagline: 'Point-of-Sale hardware, inventory syncing, and reliable local network wiring.',
    priceGh: 1500,
    priceNote: 'Hardware configuration & on-site deployment',
    iconName: 'Cpu',
    features: [
      'Thermal receipt printer & barcode scanner configuration',
      'Tablet / PC point-of-sale software deployment',
      'Offline-first inventory and sales ledger tracking',
      'Accra on-site store network and router setup',
      'Cash drawer and MoMo terminal synchronization',
      'Staff onboarding and 30-day dedicated tech support'
    ],
    recommendedFor: 'Hardware Stores, Supermarkets, Pharmacies, Boutiques',
    turnaround: '3 - 5 Days'
  }
];

export const PORTFOLIO_PROJECTS: PortfolioItem[] = [
  {
    id: 'adjei-momo-hub',
    title: 'Adjei Mobile Money Hub',
    category: 'Fintech & MoMo Agent',
    clientName: 'Adjei MoMo Agency',
    location: 'Madina & Spintex, Accra',
    description: 'Live network status tracker (MTN MoMo, Telecel Cash, AirtelTigo) with 1-tap WhatsApp agent booking.',
    imageSrc: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?auto=format&fit=crop&w=1000&q=80',
    highlightMetric: '99.4% Network uptime tracking · 420+ daily WhatsApp cash-out inquiries',
    turnaroundTime: 'Delivered in 48 Hours',
    features: [
      'Live ping monitor for MTN MoMo, Telecel Cash & AirtelTigo',
      'One-tap WhatsApp agent booking for cash-in & cash-out',
      'Instant float and commission calculation tools',
      'Ultra-fast load time even during peak Accra telecom congestion'
    ],
    liveDemoData: {
      heroTitle: 'Live Network Status & Agent Desk',
      actionLabel: 'Book Agent Cashout on WhatsApp',
      sampleServices: [
        { name: 'MTN Mobile Money Cash-In / Out', price: 'Active · Normal', detail: 'Instant float available' },
        { name: 'Telecel Cash Transfer & Merchant Pay', price: 'Active · Fast', detail: '0% fee tier supported' },
        { name: 'AirtelTigo (AT) Money Agent Services', price: 'Active · Live', detail: 'Cross-network routing' },
        { name: 'Utility Bills (ECG & Ghana Water Pay)', price: 'Active · 24/7', detail: 'Instant SMS receipt' }
      ],
      sampleNotice: 'Live agent is online at Madina Station. Average cashout wait time is under 3 minutes.'
    }
  },
  {
    id: 'multi-network-data',
    title: 'Multi-Network Data Storefront',
    category: 'Data Bundles & Telecom',
    clientName: 'Ghana Data Express',
    location: 'Accra Digital Center, Accra',
    description: 'Instant mobile data top-up platform featuring non-expiry GHS packages and automated checkout.',
    imageSrc: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=1000&q=80',
    highlightMetric: '3,800+ non-expiry data orders delivered with instant Paystack checkout',
    turnaroundTime: 'Delivered in 48 Hours',
    features: [
      'Non-expiry data packages for MTN, Telecel, and AT networks',
      'Automated Paystack checkout accepting MoMo and Cards',
      'Instant automated bundle crediting and SMS confirmation',
      'Zero account creation friction for Ghanaian mobile shoppers'
    ],
    liveDemoData: {
      heroTitle: 'Select Non-Expiry Data Package',
      actionLabel: 'Proceed to Secure Paystack Checkout',
      sampleServices: [
        { name: '1GB No-Expiry Data (MTN / Telecel / AT)', price: 'GHS 8.00', detail: 'Valid forever. Unused rolls over.' },
        { name: '2GB No-Expiry High-Speed Bundle', price: 'GHS 15.00', detail: 'Most popular bundle package.' },
        { name: '5GB No-Expiry Heavy User Data', price: 'GHS 30.00', detail: 'Full speed 4G LTE data.' },
        { name: '10GB No-Expiry Office & Streamer Pack', price: 'GHS 55.00', detail: 'Instant MoMo activation.' }
      ],
      sampleNotice: 'Pay directly with your Mobile Money wallet. Data is credited within 60 seconds.'
    }
  },
  {
    id: 'swatty-laptop-biz',
    title: 'SWATTY LAPTOP BIZ',
    category: 'E-Commerce & Hardware',
    clientName: 'Swatty Tech Gadgets',
    location: 'Circle & East Legon, Accra',
    description: 'Modern e-commerce product catalog designed for fast browsing and direct device sales.',
    imageSrc: 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=1000&q=80',
    highlightMetric: 'GH₵ 85,000+ monthly laptop sales driven through direct WhatsApp conversion',
    turnaroundTime: 'Delivered in 48 Hours',
    features: [
      'Fast responsive product catalog with high-res device specifications',
      'Direct 1-tap WhatsApp "Order This Laptop" buttons with prefilled specs',
      'Filter by processor, RAM, SSD capacity, and price range in GHS',
      'Flexible Paystack down-payment or Pay-on-Delivery options in Accra'
    ],
    liveDemoData: {
      heroTitle: 'Browse In-Stock Verified Laptops in Accra',
      actionLabel: 'Order Laptop on WhatsApp',
      sampleServices: [
        { name: 'Dell XPS 15 (Core i7, 16GB RAM, 512GB SSD)', price: 'GH₵ 22,800', detail: 'Grade A UK Used · 1-Yr Warranty' },
        { name: 'MacBook Pro 14" M2 Pro (16GB RAM, 512GB)', price: 'GH₵ 28,500', detail: 'Battery Health 98% · Space Gray' },
        { name: 'HP Spectre x360 4K Touch (Core i7, 1TB SSD)', price: 'GH₵ 24,999', detail: 'Convertible 2-in-1 with Stylus' },
        { name: 'Lenovo ThinkPad T14 Gen 3 (16GB, 512GB SSD)', price: 'GH₵ 14,500', detail: 'Rugged enterprise workhorse' }
      ],
      sampleNotice: 'Free same-day doorstep delivery within Accra and Tema. Test before you pay.'
    }
  },
  {
    id: 'whatsapp-seller-os',
    title: 'WhatsApp Seller OS (MoMo Books)',
    category: 'Merchant Dashboard & POS',
    clientName: 'MoMo Books Financial OS',
    location: 'Kaneshie Market & Osu, Accra',
    description: 'Comprehensive merchant dashboard tracking daily revenue, profits, active orders, and MoMo balances in GHS.',
    imageSrc: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1000&q=80',
    highlightMetric: 'Zero ledger discrepancies across GH₵ 120,000+ in monthly merchant sales',
    turnaroundTime: 'Delivered in 48 Hours',
    features: [
      'Daily revenue, profit margins, and active customer order tracking',
      'Unified MoMo balance monitors for MTN, Telecel, and AT wallets',
      'Automated customer invoice generation and WhatsApp dispatch',
      'Multi-cashier access with end-of-day reconciliation summaries'
    ],
    liveDemoData: {
      heroTitle: 'MoMo Books Merchant Revenue & Order Ledger',
      actionLabel: 'Log New Customer Transaction',
      sampleServices: [
        { name: 'Today\'s Total Revenue (GHS)', price: 'GHS 12,345.80', detail: '+28% vs last week' },
        { name: 'MTN MoMo Active Float Balance', price: 'GHS 38,750.20', detail: 'Primary merchant wallet' },
        { name: 'Telecel Cash Wallet Balance', price: 'GHS 9,120.45', detail: 'Secondary retail wallet' },
        { name: 'Pending Order Deliveries Across Accra', price: '19 Orders', detail: 'En route with dispatch riders' }
      ],
      sampleNotice: 'Cloud synced with offline mode. Works smoothly even when Accra power dips.'
    }
  },
  {
    id: 'pulseflow-saas',
    title: 'PulseFlow SaaS Platform',
    category: 'SaaS & Automation',
    clientName: 'PulseFlow Operations Africa',
    location: 'Airport Residential & Ridge, Accra',
    description: 'High-converting modern SaaS landing page engineered for automated operational workflows.',
    imageSrc: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1000&q=80',
    highlightMetric: '3.4x increase in enterprise pilot sign-ups within 30 days',
    turnaroundTime: 'Delivered in 48 Hours',
    features: [
      'Futuristic dark mode interface with neon cyan workflow interactive elements',
      'High-converting landing page structure with automated demo request flows',
      'Paystack recurring subscription billing integration for Ghana & Africa',
      'Sub-second performance score (99/100 on Google Lighthouse Mobile)'
    ],
    liveDemoData: {
      heroTitle: 'PulseFlow Automated Workflow Orchestrator',
      actionLabel: 'Deploy Automated Workflow',
      sampleServices: [
        { name: 'Customer WhatsApp Lead Intake Automation', price: 'Active', detail: 'Routes incoming chats to sales team in 5s' },
        { name: 'MoMo Payment Webhook Reconciliation', price: 'Active', detail: 'Auto-verifies Paystack transactions' },
        { name: 'Daily Inventory Low-Stock WhatsApp Alert', price: 'Active', detail: 'Sends SMS to store manager at 6 PM' },
        { name: 'Customer 5-Star Google Review Follow-up', price: 'Active', detail: 'Dispatches review link after service completion' }
      ],
      sampleNotice: 'Enterprise-grade uptime and encrypted end-to-end cloud infrastructure.'
    }
  }
];

export const ADD_ONS: AddOnItem[] = [
  {
    id: 'addon-maps',
    name: 'Google Maps Verified Profile Setup',
    description: 'Claim, verify and rank your business on Google Maps for local searches.',
    priceGh: 450,
    popular: true
  },
  {
    id: 'addon-paystack',
    name: 'Paystack MoMo & Card Gateway',
    description: 'Accept MTN MoMo, Telecel Cash, and Visa/Mastercard on your website.',
    priceGh: 600,
    popular: true
  },
  {
    id: 'addon-domain',
    name: 'Custom Domain (.com / .gh) + 1-Yr Hosting',
    description: 'Includes secure HTTPS certificate, enterprise DNS, and business email forwarding.',
    priceGh: 350
  },
  {
    id: 'addon-pos',
    name: 'POS Terminal & Thermal Printer Config',
    description: 'On-site installation of barcode scanner and receipt printer in your Accra shop.',
    priceGh: 800
  }
];

export const TESTIMONIALS = [
  {
    quote: "Swatty Tech delivered our mobile platform in just 48 hours. Our customers in Accra now track MoMo network status and book cash-outs directly on WhatsApp. The conversion rate is phenomenal.",
    name: "Kofi Adjei",
    role: "Managing Director",
    company: "Adjei Mobile Money Hub",
    location: "Madina & Spintex, Accra",
    metric: "420+ WhatsApp Inquiries/Day"
  },
  {
    quote: "The non-expiry data storefront Swatty Tech built with Paystack runs automatically. Ghanaian buyers order data, pay with MTN MoMo, and get credited without any phone calls. Outstanding engineering.",
    name: "Emmanuel Tetteh",
    role: "Founder",
    company: "Ghana Data Express",
    location: "Accra Digital Center",
    metric: "3,800+ Monthly Top-Ups"
  },
  {
    quote: "Our laptop catalog allows customers in Accra to see live stock specs and tap WhatsApp to order. Sales jumped to GH₵ 85,000+ monthly because it loads instantly on mobile without lag.",
    name: "David Mensah",
    role: "Operations Lead",
    company: "SWATTY LAPTOP BIZ",
    location: "Circle & East Legon, Accra",
    metric: "GH₵85,000+ Monthly Sales"
  }
];

export const FAQS = [
  {
    question: "How do you guarantee custom website delivery in 48 hours?",
    answer: "We specialize exclusively in high-converting 1-page business architectures. By combining pre-tested, battle-hardened local business frameworks with our rapid Ghanaian content collection workflow, we design, configure, connect your WhatsApp, and launch your live site within 48 hours from receiving your business details."
  },
  {
    question: "Do my customers need a computer or app to view the website?",
    answer: "No. Over 88% of Ghanaian internet traffic is on mobile smartphones. Every website we build is mobile-first, ultra-lightweight, and loads in less than one second even on 3G/4G connections across Accra without wasting your customers' mobile data."
  },
  {
    question: "How do I receive payments from customers?",
    answer: "We integrate Paystack, Ghana's most reliable payment gateway. Your customers can pay with MTN Mobile Money, Telecel Cash, AT Money, or Visa/Mastercard. Funds settle automatically and securely directly into your Ghanaian bank account or MoMo wallet."
  },
  {
    question: "What is included in the GH₵2,000 Standard Launch Package?",
    answer: "You get a custom-designed, responsive 1-page website, direct WhatsApp & phone call integration, Google Maps location embed, service showcase with pricing, customer inquiry capture form, fast cloud hosting, SSL security padlock, and 30 days of complimentary technical support."
  },
  {
    question: "Can you help set up hardware like receipt printers and barcode scanners?",
    answer: "Yes! Our team operates on-site in Accra. We configure point-of-sale tablets, thermal receipt printers, barcode scanners, and store Wi-Fi networks for hardware shops, pharmacies, boutiques, and auto garages."
  }
];
