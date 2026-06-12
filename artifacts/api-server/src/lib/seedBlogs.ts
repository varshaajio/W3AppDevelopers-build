import { db, blogsTable } from "@workspace/db";
import { count } from "drizzle-orm";

const staticBlogsData = [
  {
    title: "The Ultimate Guide to Web Development in 2026",
    slug: "web-programming",
    excerpt: "Web development is evolving at an incredible pace. Stay updated with the latest trends, technologies, and best practices for modern web development.",
    content: `## What's Web Development?

Web development is the process of building, designing, and maintaining websites. It includes everything from creating simple static web pages to developing complex web applications. Web development is generally divided into three main areas:

- Front-End Development — user interface and visual elements
- Back-End Development — server logic, databases, and APIs
- Full-Stack Development — combining both front-end and back-end expertise

## Latest Trends in Web Development

Staying updated with the latest trends is crucial for modern developers and businesses.

- AI-Powered Web Development — integrating AI for personalization and automation
- Progressive Web Apps (PWAs) — offline-capable web apps with native-like experience
- Serverless Architecture — scalable backend without managing servers
- Motion UI & Micro-animations — enhancing user experience through subtle animations
- Voice Search Optimization — building for voice-first user interactions

## Best Practices for Web Development in 2026

Follow these practices to build fast, secure, and scalable web applications that deliver excellent user experiences.

- Mobile-first responsive design for all screen sizes
- Performance optimization: lazy loading, image compression, CDN usage
- Secure HTTPS with proper SSL certificate implementation
- Accessibility standards (WCAG) for inclusive web experiences
- SEO-friendly structure with proper meta tags and semantic HTML

## Conclusion

Web development in 2026 is about combining speed, security, and seamless user experiences. Staying updated with modern frameworks, AI integration, and performance optimization will give your business a competitive edge in the digital landscape.`,
    category: "Web Programming",
    tags: "web development, frontend, backend, javascript, react",
    status: "published" as const,
    author: "W3AppDevelopers Team",
    seoTitle: "The Ultimate Guide to Web Development in 2026 | W3AppDevelopers",
    seoDescription: "Discover the latest trends, best practices, and technologies in web development for 2026. Expert guide from W3AppDevelopers.",
  },
  {
    title: "The Future of App Development — Trends and Innovations",
    slug: "application-innovation",
    excerpt: "Mobile app development is evolving rapidly. Discover the innovations shaping the future of app development and why your business should invest now.",
    content: `## Latest Trends in App Development

The mobile app landscape is being transformed by emerging technologies. Here are the top trends driving innovation:

- Artificial Intelligence & Machine Learning — AI-powered chatbots, recommendations, and automation enhancing user experiences
- 5G Technology — faster data transfer enabling smoother, more responsive mobile applications
- Cross-Platform Development — building once and deploying on both iOS and Android
- AR & VR Technologies — immersive experiences for retail, education, and gaming
- Blockchain Integration — secure and transparent transactions within apps
- IoT Applications — connecting physical devices with intelligent mobile interfaces

## Crucial Way in App Development

Building a successful app requires following a structured development approach: requirement gathering → wireframing → UI/UX design → development → testing → deployment → ongoing support.

## Why Invest in App Development?

Mobile apps give businesses a direct channel to their customers, improve brand loyalty, and enable new revenue streams through in-app purchases, subscriptions, and digital services.

## Final Thoughts

Investing in mobile app development positions your business for the digital future. Whether it is a customer-facing app or an internal enterprise tool, the right app can transform how you operate and grow.`,
    category: "Application Innovation",
    tags: "app development, mobile apps, iOS, Android, React Native, Flutter",
    status: "published" as const,
    author: "W3AppDevelopers Team",
    seoTitle: "The Future of App Development — Trends and Innovations | W3AppDevelopers",
    seoDescription: "Explore the innovations shaping mobile app development in 2026. Learn why your business should invest in app development now.",
  },
  {
    title: "The Power of Digital Marketing — How to Grow Your Business Online",
    slug: "digital-advertising",
    excerpt: "In today's competitive environment, digital marketing is essential for businesses looking to expand their reach and increase revenue.",
    content: `## Why Digital Marketing Matters

Digital marketing connects your business with customers where they spend the most time — online. Here is why it matters:

- Wider Reach — connect with potential customers worldwide through digital platforms
- Cost-Effective — more affordable compared to traditional marketing methods
- Measurable Results — track every campaign with real-time analytics
- Better Engagement — interact directly with your target audience
- Higher Conversion Rates — targeted campaigns reach the right people at the right time

## Our Digital Marketing Services

At W3AppDevelopers, we offer a full range of digital marketing services tailored to your business goals.

- Search Engine Optimization (SEO) — rank higher on Google and drive organic traffic
- Pay-Per-Click Advertising (PPC) — instant visibility with targeted Google & social ads
- Social Media Marketing — build brand presence on Facebook, Instagram, LinkedIn
- Content Marketing — attract and engage your audience with valuable content
- Email Marketing — direct communication with personalized email campaigns

## Digital Marketing Strategies for Success

A successful digital marketing strategy combines SEO, paid advertising, content marketing, and social media to create a consistent brand presence and drive qualified leads to your business.

## Why Choose W3AppDevelopers?

We are a result-driven digital marketing company in Erode specializing in delivering measurable growth for our clients. Our team of experts creates data-driven campaigns that generate real business results.`,
    category: "Digital Advertising",
    tags: "digital marketing, SEO, social media, PPC, content marketing, Erode",
    status: "published" as const,
    author: "W3AppDevelopers Team",
    seoTitle: "The Power of Digital Marketing — Grow Your Business Online | W3AppDevelopers",
    seoDescription: "Learn how digital marketing can grow your business online. Expert SEO, PPC, social media and content marketing services from W3AppDevelopers in Erode.",
  },
  {
    title: "The Power of Graphic Design — Elevate Your Brand with Stunning Visuals",
    slug: "digital-graphics",
    excerpt: "In the digital world, first impressions matter. High-quality graphic design is essential for building a strong brand identity and standing out from the competition.",
    content: `## Why Graphic Design is Important for Your Business

Visual design is the foundation of your brand's identity and directly impacts how customers perceive your business.

- Strong Brand Identity — a well-designed logo and visuals build strong brand recognition
- Enhances Credibility — professional design establishes trust and reliability with your audience
- Boosts Engagement — eye-catching visuals attract attention and keep your audience engaged
- Increases Conversions — effective design guides visitors toward taking action

## Our Graphic Design Services

We offer comprehensive graphic design services to help your brand stand out:

- Logo Design — memorable logos that represent your brand identity
- UI/UX Design — user-friendly interfaces for websites and mobile apps
- Social Media Graphics — engaging visuals for Facebook, Instagram, and LinkedIn
- Brochure & Print Design — professional marketing materials
- Brand Identity Packages — complete visual identity systems

## How We Work

Our design process: Discovery (understand your brand and goals) → Concept (initial design concepts) → Refinement (incorporate your feedback) → Delivery (final files in all required formats).

## Why Choose W3AppDevelopers?

Our creative team delivers designs that not only look beautiful but also drive business results. We combine aesthetic excellence with strategic thinking to create visuals that communicate your brand message effectively.`,
    category: "Digital Graphics",
    tags: "graphic design, logo design, branding, UI/UX, social media graphics",
    status: "published" as const,
    author: "W3AppDevelopers Team",
    seoTitle: "The Power of Graphic Design — Elevate Your Brand | W3AppDevelopers",
    seoDescription: "Discover how professional graphic design can elevate your brand. Logo design, UI/UX, and branding services from W3AppDevelopers.",
  },
];

export async function seedBlogs(): Promise<void> {
  try {
    const [existingCount] = await db.select({ count: count() }).from(blogsTable);
    if (Number(existingCount?.count ?? 0) > 0) {
      return;
    }

    await db.insert(blogsTable).values(staticBlogsData);
    console.log(`[seed] Seeded ${staticBlogsData.length} static blogs into the database.`);
  } catch (err) {
    console.warn("[seed] Blog seeding skipped or failed:", err instanceof Error ? err.message : err);
  }
}
