import {
  Code,
  LayoutDashboard,
  PenTool,
  ShieldCheck,
  ShoppingBag,
  Smartphone,
  Sparkles,
  TrendingUp,
  type LucideIcon,
} from "lucide-react";

// Client-supplied contact details. The ABN below is still a placeholder.
export const site = {
  name: "Desired IT Solutions",
  shortName: "Desired",
  tagline: "Websites, apps, software and digital growth for ambitious Australian businesses.",
  url: "https://desireditsolutions.com.au",
  phone: "0475 434 370",
  phoneHref: "tel:+61475434370",
  mobile: "+61 475 434 370",
  email: "info@desireditsolutions.com.au",
  supportEmail: "info@desireditsolutions.com.au",
  address: "14 Wormald Street, Symonston, Australian Capital Territory, 2609, Australia",
} as const;

export const nav = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/contact", label: "Contact" },
] as const;

/** Direction of travel between two routes, used for page transition types. */
export function navDirection(from: string, to: string): "nav-forward" | "nav-back" | "page-fade" {
  const a = nav.findIndex((n) => n.href === from);
  const b = nav.findIndex((n) => n.href === to);
  if (a === -1 || b === -1 || a === b) return "page-fade";
  return b > a ? "nav-forward" : "nav-back";
}

export type Service = {
  slug: string;
  name: string;
  short: string;
  tagline: string;
  intro: string;
  included: string[];
  idealFor: string;
  cta: string;
  image: string;
  icon: LucideIcon;
  timeline: string;
};

export const services: Service[] = [
  {
    slug: "web-design",
    name: "Website Design & Development",
    short: "Websites",
    tagline: "Your best salesperson, working 24/7.",
    intro:
      "Your website is often the first impression a customer has of your business. We design and build fast, modern, mobile-first websites that look great, rank well and, most importantly, turn visitors into enquiries.",
    included: [
      "Conversion-focused strategy and sitemap",
      "Custom design, no cookie-cutter templates",
      "Built in Next.js, WordPress or Webflow",
      "Easy-to-use CMS you can update yourself",
      "Core Web Vitals optimised performance",
      "On-page SEO foundations and GA4 setup",
      "WCAG 2.2 accessibility best practice",
    ],
    idealFor: "Businesses launching, rebranding or replacing a website that isn't pulling its weight.",
    cta: "Get a website quote",
    image: "/photos/svc-web.jpg",
    icon: Code,
    timeline: "4–8 weeks",
  },
  {
    slug: "ecommerce",
    name: "E-commerce Development",
    short: "E-commerce",
    tagline: "Online stores built to sell.",
    intro:
      "We build e-commerce experiences that make it effortless to browse, buy and come back for more, with all the integrations Australian retailers need.",
    included: [
      "Shopify, WooCommerce and headless builds",
      "Conversion-optimised product pages and checkout",
      "Stripe, PayPal, Afterpay and Zip payments",
      "Australia Post, Sendle and StarTrack shipping",
      "Inventory, ERP and Xero / MYOB integrations",
      "Migrations without losing SEO rankings",
      "Abandoned-cart email automation",
    ],
    idealFor: "Retailers moving online, brands outgrowing their platform, and B2B wholesalers.",
    cta: "Plan my online store",
    image: "/photos/svc-ecommerce.jpg",
    icon: ShoppingBag,
    timeline: "6–10 weeks",
  },
  {
    slug: "custom-software",
    name: "Custom Software & Web Apps",
    short: "Software",
    tagline: "Software that fits your business, not the other way around.",
    intro:
      "Off-the-shelf tools only go so far. We build custom platforms, portals and dashboards that streamline your operations, delight your customers and scale as you grow.",
    included: [
      "Business process analysis and solution design",
      "Customer and staff portals, booking systems, CRMs",
      "SaaS products and MVPs for startups",
      "API development and third-party integrations",
      "Legacy system modernisation",
      "Secure, scalable cloud on AWS or Azure",
      "Automated testing, documentation and handover",
    ],
    idealFor: "Businesses with unique workflows, startups building a product, and teams drowning in spreadsheets.",
    cta: "Discuss my software idea",
    image: "/photos/svc-software.jpg",
    icon: LayoutDashboard,
    timeline: "8–16 weeks",
  },
  {
    slug: "mobile-apps",
    name: "Mobile App Development",
    short: "Mobile apps",
    tagline: "Apps your customers will love, and keep.",
    intro:
      "We design and develop intuitive iOS and Android apps that engage your customers and add real value, from concept and prototype to App Store launch and beyond.",
    included: [
      "Product strategy and feature roadmap",
      "UX design and clickable prototypes",
      "React Native / Flutter or native builds",
      "Backend, APIs and admin dashboards",
      "App Store and Google Play submission",
      "Analytics, push notifications and updates",
    ],
    idealFor: "Startups, service businesses and enterprises that want a direct line to their customers.",
    cta: "Talk about my app",
    image: "/photos/svc-apps.jpg",
    icon: Smartphone,
    timeline: "10–16 weeks",
  },
  {
    slug: "ui-ux",
    name: "UI/UX Design & Branding",
    short: "UI/UX & brand",
    tagline: "Design that people understand, and remember.",
    intro:
      "Great design isn't just about looks. It's about making things easy. We craft brands and user experiences that build trust, reduce friction and set you apart from the competition.",
    included: [
      "User research and journey mapping",
      "Wireframes, prototypes and usability testing",
      "UI design for websites, apps and software",
      "Design systems and component libraries",
      "Logo, brand identity and guidelines",
      "UX audits of existing products",
    ],
    idealFor: "New brands, rebrands, and products with low conversion or high drop-off.",
    cta: "Start a design project",
    image: "/photos/svc-uiux.jpg",
    icon: PenTool,
    timeline: "3–6 weeks",
  },
  {
    slug: "seo-marketing",
    name: "SEO & Digital Marketing",
    short: "SEO & marketing",
    tagline: "More of the right customers, finding you first.",
    intro:
      "A great website only works if people find it. Our data-driven marketing gets you in front of customers who are ready to buy, and we report on what matters: leads, sales and ROI.",
    included: [
      "Technical, on-page and local SEO",
      "Google Business Profile optimisation",
      "Content strategy and blog writing",
      "Google Ads and Meta advertising",
      "Conversion rate optimisation (CRO)",
      "Plain-English monthly reporting",
    ],
    idealFor: "Businesses that want a steady, predictable flow of leads and sales.",
    cta: "Get my free website audit",
    image: "/photos/svc-seo.jpg",
    icon: TrendingUp,
    timeline: "Ongoing",
  },
  {
    slug: "ai-automation",
    name: "AI & Business Automation",
    short: "AI & automation",
    tagline: "Work smarter. Give your team hours back every week.",
    intro:
      "AI and automation aren't just for big corporations. We find the repetitive, time-consuming tasks in your business and automate them, so your people can focus on work that moves the needle.",
    included: [
      "Automation opportunity assessment",
      "AI chatbots and virtual assistants",
      "Workflow automation (Zapier, Make, Power Automate)",
      "CRM, accounting, email and form integrations",
      "AI document processing and reporting",
      "Custom AI tools with your data kept private",
    ],
    idealFor: "Growing teams buried in admin, data entry and manual processes.",
    cta: "Find my automation wins",
    image: "/photos/svc-ai.jpg",
    icon: Sparkles,
    timeline: "2–8 weeks",
  },
  {
    slug: "care-plans",
    name: "Hosting, Maintenance & Care Plans",
    short: "Care plans",
    tagline: "Peace of mind, long after launch.",
    intro:
      "Websites and apps need care to stay fast, secure and effective. Our care plans keep everything running smoothly, so you never have to think about it.",
    included: [
      "Fast, secure managed hosting",
      "Security monitoring, SSL and firewall",
      "Software, plugin and framework updates",
      "Daily backups and uptime monitoring",
      "Monthly development hours for improvements",
      "Priority support from people who know your site",
    ],
    idealFor: "Any business that relies on its website or app and wants it protected and improving.",
    cta: "Choose a care plan",
    image: "/photos/svc-care.jpg",
    icon: ShieldCheck,
    timeline: "Monthly",
  },
];

export const techStack = [
  "Next.js",
  "React",
  "Node.js",
  "Laravel",
  "WordPress",
  "Shopify",
  "React Native",
  "Flutter",
  "AWS",
  "Azure",
  "Stripe",
  "Xero",
  "OpenAI",
  "Claude",
];

export const faqs = [
  {
    q: "How much does a website or app cost?",
    a: "Every project is different, so we give you a fixed-price quote after a free strategy call. You'll know the full cost and timeline before any work starts.",
  },
  {
    q: "How long does a project take?",
    a: "Most websites launch in 4–8 weeks. Apps and custom software usually take 8–16 weeks, depending on scope.",
  },
  {
    q: "Will I own my website and code?",
    a: "Yes. Once the project is paid, the code, designs, content and accounts are 100% yours.",
  },
  {
    q: "Do you help after launch?",
    a: "Absolutely. Our care plans cover hosting, security, updates, backups and ongoing improvements.",
  },
  {
    q: "Can you work with our existing website or system?",
    a: "Yes. We regularly improve, redesign, integrate with or take over existing platforms.",
  },
  {
    q: "Can you take over a project another agency started?",
    a: "Yes. We'll audit what's there, give you an honest assessment and recommend the best path forward.",
  },
];

// PLACEHOLDER testimonials and portraits: replace with real, approved testimonials before launch.
export const testimonials = [
  {
    quote:
      "They delivered our new website ahead of schedule, and the enquiry form finally works the way our customers expect. Communication was clear the whole way through.",
    name: "Sarah M.",
    role: "Owner, neighbourhood café",
    place: "Sydney",
    image: "/photos/client-1.jpg",
  },
  {
    quote:
      "The booking platform they built replaced three spreadsheets and a lot of phone tag. Our front desk finally has time to look after people.",
    name: "Emma R.",
    role: "Practice manager, allied health",
    place: "Parramatta",
    image: "/photos/client-2.jpg",
  },
  {
    quote:
      "Clear communication, honest advice and a fixed price that didn't change. Rare in this industry.",
    name: "Daniel K.",
    role: "Director, trades business",
    place: "Newcastle",
    image: "/photos/client-3.jpg",
  },
];
