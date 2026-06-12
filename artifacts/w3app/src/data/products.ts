export type Product = {
  slug: string;
  title: string;
  shortDesc: string;
  icon: string;
  category: string;
};

export const products: Product[] = [
  {
    slug: "field-service-management",
    title: "Field Service Management",
    shortDesc: "Complete field service management solution for scheduling, dispatching, tracking and reporting field operations.",
    icon: "🔧",
    category: "Business Software",
  },
  {
    slug: "learning-management-software",
    title: "Learning Management System",
    shortDesc: "LMS platform for online courses, student tracking, quizzes, certificates and live classes.",
    icon: "🎓",
    category: "Education",
  },
  {
    slug: "ai-seo-agent",
    title: "AI SEO Agent",
    shortDesc: "AI-powered SEO agent that automates keyword research, content optimization, and ranking analysis.",
    icon: "🤖",
    category: "AI Tools",
  },
  {
    slug: "job-portal-development",
    title: "Job Portal Development",
    shortDesc: "Full-featured job portal with employer and candidate dashboards, job listings, applications and resume management.",
    icon: "💼",
    category: "Web Application",
  },
  {
    slug: "shopping-cart-software",
    title: "Shopping Cart Software",
    shortDesc: "Robust shopping cart system with multi-vendor support, payment gateways, discount management and order tracking.",
    icon: "🛒",
    category: "Ecommerce",
  },
  {
    slug: "erp-software",
    title: "ERP Software",
    shortDesc: "Enterprise Resource Planning software integrating finance, inventory, HR, procurement and operations in one platform.",
    icon: "🏗️",
    category: "Enterprise Software",
  },
  {
    slug: "food-delivery-software",
    title: "Food Delivery Software",
    shortDesc: "On-demand food delivery platform with restaurant management, driver tracking, and real-time order updates.",
    icon: "🍔",
    category: "Web Application",
  },
  {
    slug: "inventory-management-system",
    title: "Inventory Management Software",
    shortDesc: "Smart inventory tracking system with real-time stock updates, alerts and reporting.",
    icon: "📦",
    category: "Management System",
  },
  {
    slug: "crm-software",
    title: "CRM Software",
    shortDesc: "Customer Relationship Management system to track leads, manage clients and boost sales.",
    icon: "🤝",
    category: "Business Software",
  },
  {
    slug: "pos-software",
    title: "POS Software",
    shortDesc: "Complete Point of Sale system for retail & restaurants with billing, inventory and analytics.",
    icon: "🖥️",
    category: "Business Software",
  },
  {
    slug: "hrm-software",
    title: "HRM Software",
    shortDesc: "Human Resource Management system to manage employees, payroll, attendance and more.",
    icon: "👥",
    category: "Business Software",
  },
  {
    slug: "amc-software",
    title: "AMC Software",
    shortDesc: "Annual Maintenance Contract management software for service businesses.",
    icon: "📋",
    category: "Business Software",
  },
  {
    slug: "hospital-management-system",
    title: "Hospital Management System",
    shortDesc: "Comprehensive hospital management software covering patients, doctors, billing and pharmacy.",
    icon: "🏥",
    category: "Healthcare",
  },
  {
    slug: "doctor-appointment-app",
    title: "Doctor Appointment App",
    shortDesc: "Online doctor appointment booking system with patient management, prescriptions and reminders.",
    icon: "👨‍⚕️",
    category: "Healthcare",
  },
  {
    slug: "blood-donation-system",
    title: "Blood Donation System",
    shortDesc: "Digital platform to manage blood donors, inventory, requests and hospital coordination.",
    icon: "🩸",
    category: "Healthcare",
  },
  {
    slug: "gym-management-system",
    title: "GYM Management System",
    shortDesc: "Complete gym management solution for memberships, attendance, fees and trainer management.",
    icon: "💪",
    category: "Management System",
  },
  {
    slug: "multi-recharge-portal",
    title: "Multi Recharge Portal",
    shortDesc: "All-in-one recharge portal for mobile, DTH, electricity and utility bill payments.",
    icon: "📱",
    category: "Portal",
  },
  {
    slug: "aeps",
    title: "AEPS",
    shortDesc: "Aadhaar Enabled Payment System for banking transactions using biometric authentication.",
    icon: "🏦",
    category: "FinTech",
  },
  {
    slug: "billing-software",
    title: "Billing Software (With GST / Without GST)",
    shortDesc: "Flexible billing software with GST-compliant and non-GST invoice generation for all businesses.",
    icon: "🧾",
    category: "Business Software",
  },
  {
    slug: "pos-software-applications",
    title: "POS Software Applications",
    shortDesc: "Mobile and tablet POS application for on-the-go billing, sales tracking and payment collection.",
    icon: "📲",
    category: "Business Software",
  },
  {
    slug: "ecommerce-websites",
    title: "E-Commerce Websites",
    shortDesc: "Feature-rich online store with product management, cart, payment gateway and order tracking.",
    icon: "🛍️",
    category: "Web Application",
  },
  {
    slug: "hotel-booking-applications",
    title: "Hotel Booking Applications",
    shortDesc: "End-to-end hotel booking system with room management, reservations, check-in/out and billing.",
    icon: "🏨",
    category: "Web Application",
  },
  {
    slug: "matrimonial-applications",
    title: "Matrimonial Applications",
    shortDesc: "Matrimonial platform with profile management, smart matching, messaging and subscription system.",
    icon: "💍",
    category: "Web Application",
  },
  {
    slug: "grocery-application",
    title: "Grocery Application",
    shortDesc: "On-demand grocery delivery app with product catalog, cart, delivery tracking and payment integration.",
    icon: "🛍️",
    category: "Web Application",
  },
];

export const getProduct = (slug: string) =>
  products.find((p) => p.slug === slug) ?? null;

export const productCategories = [...new Set(products.map((p) => p.category))];
