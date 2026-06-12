import { db, pool, productsTable } from "@workspace/db";
import { count } from "drizzle-orm";

const blogsData = [
  {
    title: "The Ultimate Guide to Web Development in 2026",
    slug: "web-programming",
    excerpt: "Web development is evolving at an incredible pace. Stay updated with the latest trends, technologies, and best practices for modern web development.",
    content: `## What's Web Development?\n\nWeb development is the process of building, designing, and maintaining websites. It includes everything from creating simple static web pages to developing complex web applications.\n\n## Latest Trends in Web Development\n\n- AI-Powered Web Development\n- Progressive Web Apps (PWAs)\n- Serverless Architecture\n- Motion UI & Micro-animations\n- Voice Search Optimization\n\n## Best Practices for Web Development in 2026\n\n- Mobile-first responsive design\n- Performance optimization: lazy loading, CDN usage\n- Secure HTTPS implementation\n- Accessibility standards (WCAG)\n- SEO-friendly semantic HTML\n\n## Conclusion\n\nWeb development in 2026 is about combining speed, security, and seamless user experiences.`,
    category: "Web Programming",
    tags: "web development, frontend, backend, javascript, react",
    status: "published" as const,
    author: "W3AppDevelopers Team",
    seoTitle: "The Ultimate Guide to Web Development in 2026 | W3AppDevelopers",
    seoDescription: "Discover the latest trends, best practices, and technologies in web development for 2026.",
  },
  {
    title: "The Future of App Development — Trends and Innovations",
    slug: "application-innovation",
    excerpt: "Mobile app development is evolving rapidly. Discover the innovations shaping the future of app development.",
    content: `## Latest Trends in App Development\n\n- Artificial Intelligence & Machine Learning\n- 5G Technology\n- Cross-Platform Development\n- AR & VR Technologies\n- Blockchain Integration\n- IoT Applications\n\n## Why Invest in App Development?\n\nMobile apps give businesses a direct channel to their customers, improve brand loyalty, and enable new revenue streams.\n\n## Final Thoughts\n\nInvesting in mobile app development positions your business for the digital future.`,
    category: "Application Innovation",
    tags: "app development, mobile apps, iOS, Android, React Native, Flutter",
    status: "published" as const,
    author: "W3AppDevelopers Team",
    seoTitle: "The Future of App Development — Trends and Innovations | W3AppDevelopers",
    seoDescription: "Explore the innovations shaping mobile app development in 2026.",
  },
  {
    title: "The Power of Digital Marketing — How to Grow Your Business Online",
    slug: "digital-advertising",
    excerpt: "In today's competitive environment, digital marketing is essential for businesses looking to expand their reach.",
    content: `## Why Digital Marketing Matters\n\n- Wider Reach — connect with customers worldwide\n- Cost-Effective marketing solutions\n- Measurable Results with real-time analytics\n- Higher Conversion Rates with targeted campaigns\n\n## Our Digital Marketing Services\n\n- Search Engine Optimization (SEO)\n- Pay-Per-Click Advertising (PPC)\n- Social Media Marketing\n- Content Marketing\n- Email Marketing\n\n## Why Choose W3AppDevelopers?\n\nWe are a result-driven digital marketing company in Erode specializing in delivering measurable growth.`,
    category: "Digital Advertising",
    tags: "digital marketing, SEO, social media, PPC, content marketing, Erode",
    status: "published" as const,
    author: "W3AppDevelopers Team",
    seoTitle: "The Power of Digital Marketing — Grow Your Business Online | W3AppDevelopers",
    seoDescription: "Learn how digital marketing can grow your business online. Expert services from W3AppDevelopers in Erode.",
  },
  {
    title: "The Power of Graphic Design — Elevate Your Brand with Stunning Visuals",
    slug: "digital-graphics",
    excerpt: "High-quality graphic design is essential for building a strong brand identity and standing out from the competition.",
    content: `## Why Graphic Design is Important\n\n- Strong Brand Identity\n- Enhances Credibility\n- Boosts Engagement\n- Increases Conversions\n\n## Our Graphic Design Services\n\n- Logo Design\n- UI/UX Design\n- Social Media Graphics\n- Brochure & Print Design\n- Brand Identity Packages\n\n## Why Choose W3AppDevelopers?\n\nOur creative team delivers designs that not only look beautiful but also drive business results.`,
    category: "Digital Graphics",
    tags: "graphic design, logo design, branding, UI/UX, social media graphics",
    status: "published" as const,
    author: "W3AppDevelopers Team",
    seoTitle: "The Power of Graphic Design — Elevate Your Brand | W3AppDevelopers",
    seoDescription: "Discover how professional graphic design can elevate your brand. Services from W3AppDevelopers.",
  },
];

const productsData = [
  { slug: "field-service-management", title: "Field Service Management", shortDesc: "Complete field service management solution for scheduling, dispatching, tracking and reporting field operations.", icon: "🔧", category: "Business Software" },
  { slug: "learning-management-software", title: "Learning Management System", shortDesc: "LMS platform for online courses, student tracking, quizzes, certificates and live classes.", icon: "🎓", category: "Education" },
  { slug: "ai-seo-agent", title: "AI SEO Agent", shortDesc: "AI-powered SEO agent that automates keyword research, content optimization, and ranking analysis.", icon: "🤖", category: "AI Tools" },
  { slug: "job-portal-development", title: "Job Portal Development", shortDesc: "Full-featured job portal with employer and candidate dashboards, job listings, applications and resume management.", icon: "💼", category: "Web Application" },
  { slug: "shopping-cart-software", title: "Shopping Cart Software", shortDesc: "Robust shopping cart system with multi-vendor support, payment gateways, discount management and order tracking.", icon: "🛒", category: "Ecommerce" },
  { slug: "erp-software", title: "ERP Software", shortDesc: "Enterprise Resource Planning software integrating finance, inventory, HR, procurement and operations in one platform.", icon: "🏗️", category: "Enterprise Software" },
  { slug: "food-delivery-software", title: "Food Delivery Software", shortDesc: "On-demand food delivery platform with restaurant management, driver tracking, and real-time order updates.", icon: "🍔", category: "Web Application" },
  { slug: "inventory-management-system", title: "Inventory Management Software", shortDesc: "Smart inventory tracking system with real-time stock updates, alerts and reporting.", icon: "📦", category: "Management System" },
  { slug: "crm-software", title: "CRM Software", shortDesc: "Customer Relationship Management system to track leads, manage clients and boost sales.", icon: "🤝", category: "Business Software" },
  { slug: "pos-software", title: "POS Software", shortDesc: "Complete Point of Sale system for retail & restaurants with billing, inventory and analytics.", icon: "🖥️", category: "Business Software" },
  { slug: "hrm-software", title: "HRM Software", shortDesc: "Human Resource Management system to manage employees, payroll, attendance and more.", icon: "👥", category: "Business Software" },
  { slug: "amc-software", title: "AMC Software", shortDesc: "Annual Maintenance Contract management software for service businesses.", icon: "📋", category: "Business Software" },
  { slug: "hospital-management-system", title: "Hospital Management System", shortDesc: "Comprehensive hospital management software covering patients, doctors, billing and pharmacy.", icon: "🏥", category: "Healthcare" },
  { slug: "doctor-appointment-app", title: "Doctor Appointment App", shortDesc: "Online doctor appointment booking system with patient management, prescriptions and reminders.", icon: "👨‍⚕️", category: "Healthcare" },
  { slug: "blood-donation-system", title: "Blood Donation System", shortDesc: "Digital platform to manage blood donors, inventory, requests and hospital coordination.", icon: "🩸", category: "Healthcare" },
  { slug: "gym-management-system", title: "GYM Management System", shortDesc: "Complete gym management solution for memberships, attendance, fees and trainer management.", icon: "💪", category: "Management System" },
  { slug: "multi-recharge-portal", title: "Multi Recharge Portal", shortDesc: "All-in-one recharge portal for mobile, DTH, electricity and utility bill payments.", icon: "📱", category: "Portal" },
  { slug: "aeps", title: "AEPS", shortDesc: "Aadhaar Enabled Payment System for banking transactions using biometric authentication.", icon: "🏦", category: "FinTech" },
  { slug: "billing-software", title: "Billing Software (With GST / Without GST)", shortDesc: "Flexible billing software with GST-compliant and non-GST invoice generation for all businesses.", icon: "🧾", category: "Business Software" },
  { slug: "pos-software-applications", title: "POS Software Applications", shortDesc: "Mobile and tablet POS application for on-the-go billing, sales tracking and payment collection.", icon: "📲", category: "Business Software" },
  { slug: "ecommerce-websites", title: "E-Commerce Websites", shortDesc: "Feature-rich online store with product management, cart, payment gateway and order tracking.", icon: "🛍️", category: "Web Application" },
  { slug: "hotel-booking-applications", title: "Hotel Booking Applications", shortDesc: "End-to-end hotel booking system with room management, reservations, check-in/out and billing.", icon: "🏨", category: "Web Application" },
  { slug: "matrimonial-applications", title: "Matrimonial Applications", shortDesc: "Matrimonial platform with profile management, smart matching, messaging and subscription system.", icon: "💍", category: "Web Application" },
  { slug: "grocery-application", title: "Grocery Application", shortDesc: "On-demand grocery delivery app with product catalog, cart, delivery tracking and payment integration.", icon: "🛍️", category: "Web Application" },
];

const servicesData = [
  {
    slug: "graphic-design",
    title: "Graphic Design",
    serviceDesc: "Create visually stunning designs that captivate, engage, and elevate your brand.",
    longDesc: "Our graphic design team delivers logos, UI/UX designs, social media graphics, brochures, and full brand identity packages that make your business stand out in a competitive market.",
    img: "https://w3appdevelopers.com/wp-content/uploads/2025/02/Designer-cuate-300x300.png",
  },
  {
    slug: "digital-marketing",
    title: "Digital Marketing",
    serviceDesc: "Boost your brand's online presence with data-driven digital marketing strategies.",
    longDesc: "We offer SEO, SEM, social media marketing, content strategy, email campaigns, and performance analytics to maximize your ROI and grow your brand visibility across all digital channels.",
    img: "https://w3appdevelopers.com/wp-content/uploads/2025/02/Social-media-rafiki-300x300.png",
  },
  {
    slug: "web-development",
    title: "Web Development",
    serviceDesc: "Build stunning, high-performance websites tailored to your business needs.",
    longDesc: "From corporate websites to complex web applications, we build fast, secure, and scalable web solutions using modern frameworks like React, Next.js, and Node.js.",
    img: "https://w3appdevelopers.com/wp-content/uploads/2025/02/Hand-coding-amico-300x300.png",
  },
  {
    slug: "app-development",
    title: "App Development",
    serviceDesc: "Create powerful, user-friendly mobile apps to elevate your business.",
    longDesc: "We develop cross-platform and native mobile applications for iOS and Android using React Native and Flutter, delivering seamless user experiences that drive engagement.",
    img: "https://w3appdevelopers.com/wp-content/uploads/2025/02/App-development-amico-300x300.png",
  },
  {
    slug: "corporate-training",
    title: "Corporate Training",
    serviceDesc: "Empower your team with expert-led corporate training for enhanced skills and productivity.",
    longDesc: "Our corporate training programs cover web development, digital marketing, software tools, and leadership skills — customized to your team's needs and delivered by industry experts.",
    img: "https://w3appdevelopers.com/wp-content/uploads/2025/02/At-the-office-rafiki-300x300.png",
  },
  {
    slug: "pos-software",
    title: "Custom Software Development",
    serviceDesc: "Build tailored software solutions designed to meet your unique business needs and goals.",
    longDesc: "We design and develop custom software including POS systems, ERP, CRM, HRM, and industry-specific platforms that automate your business processes and drive efficiency.",
    img: "https://w3appdevelopers.com/wp-content/uploads/2025/02/Product-quality-amico-300x300.png",
  },
];

export async function seedAll(): Promise<void> {
  try {
    const { rows } = await pool.query("SELECT COUNT(*)::int AS c FROM blogs WHERE slug != ''");
    const blogCount = rows[0]?.c ?? 0;
    if (blogCount === 0) {
      for (const b of blogsData) {
        await pool.query(
          `INSERT INTO blogs (title, slug, excerpt, content, category, tags, status, seo_title, seo_description, author)
           VALUES ($1,$2,$3,$4,$5,$6,$7,$8,$9,$10) ON CONFLICT (slug) DO NOTHING`,
          [b.title, b.slug, b.excerpt ?? null, b.content, b.category ?? null, b.tags ?? null,
           b.status, b.seoTitle ?? null, b.seoDescription ?? null, b.author ?? null]
        );
      }
      console.log(`[seed] Seeded ${blogsData.length} blogs.`);
    } else {
      console.log(`[seed] Blogs already seeded, skipping.`);
    }
  } catch (err) {
    console.warn("[seed] Blog seeding failed:", err instanceof Error ? err.message : err);
  }

  try {
    const [productCount] = await db.select({ count: count() }).from(productsTable);
    if (Number(productCount?.count ?? 0) === 0) {
      await db.insert(productsTable).values(productsData);
      console.log(`[seed] Seeded ${productsData.length} products.`);
    } else {
      console.log(`[seed] Products already seeded, skipping.`);
    }
  } catch (err) {
    console.warn("[seed] Product seeding failed:", err instanceof Error ? err.message : err);
  }

  try {
    const { rows } = await pool.query("SELECT COUNT(*)::int AS c FROM services");
    const serviceCount = rows[0]?.c ?? 0;
    if (serviceCount === 0) {
      for (const s of servicesData) {
        await pool.query(
          `INSERT INTO services (slug, title, service_desc, long_desc, img)
           VALUES ($1, $2, $3, $4, $5) ON CONFLICT (slug) DO NOTHING`,
          [s.slug, s.title, s.serviceDesc, s.longDesc ?? null, s.img ?? null]
        );
      }
      console.log(`[seed] Seeded ${servicesData.length} services.`);
    } else {
      console.log(`[seed] Services already seeded, skipping.`);
    }
  } catch (err) {
    console.warn("[seed] Service seeding failed:", err instanceof Error ? err.message : String(err));
  }
}
