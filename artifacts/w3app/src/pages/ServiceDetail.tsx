import { useParams, Link } from "wouter";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { CheckCircle2 } from "lucide-react";

type ServiceInfo = {
  title: string;
  tagline: string;
  desc: string;
  features: string[];
  process: { step: string; detail: string }[];
};

const serviceData: Record<string, ServiceInfo> = {
  "web-development": {
    title: "Web Development",
    tagline:
      "Build stunning, high-performance websites tailored to your business needs.",
    desc: "We build dynamic, high-performance website development solutions that drive growth and engagement. Our expert developers create custom, responsive, and user-friendly websites tailored to your business needs. \n\nWhether you need a corporate website, eCommerce platform, or a complex web application, we deliver cutting-edge solutions that ensure seamless functionality and a standout online presence. We specialize in website development to create fast, secure, and user-friendly websites. Our website development solutions ensure responsive design, SEO optimization, and seamless performance across all devices.",
    features: [
      "Custom website design & development: Tailored websites designed for performance, aesthetics, and seamless user experiences.",
      "Responsive & mobile-first layouts: Powerful, high-performance web apps built for efficiency and growth.",
      "E-commerce & payment gateway integration: Scalable, secure online stores that drive sales and enhance customer engagement.",
      "CMS-powered websites (WordPress, custom CMS): Flexible and easy-to-manage content solutions for dynamic business needs.",
      "SEO-optimized code & page structure: Optimized websites designed to rank higher and attract more organic traffic.",
      "Performance & speed optimization: Fast, reliable, and engaging web experiences with app-like features.",
      "API integrations & third-party services: Seamless integration with CRM, ERP, and other business tools.",
    ],
    process: [
      {
        step: "Discovery & Planning",
        detail:
          "We start by understanding your business, goals, and target audience.",
      },
      {
        step: "Design & Wireframing",
        detail:
          "Our team creates detailed blueprints and visually engaging designs.",
      },
      {
        step: "Development",
        detail:
          "Using modern technologies, we build robust and scalable websites.",
      },
      {
        step: "Testing & QA",
        detail:
          "Rigorous testing ensures a flawless, cross-browser experience.",
      },
      {
        step: "Launch & Support",
        detail: "We ensure a smooth launch and provide ongoing maintenance.",
      },
      {
        step: "Maintenance & Updates",
        detail:
          "We provide ongoing support and updates to keep your website running smoothly.",
      },
      {
        step: "Progressive Web App (PWA) Development",
        detail:
          "We build fast, reliable, and engaging web experiences with app-like features.",
      },
      {
        step: "CMS Development",
        detail:
          "We create flexible and easy-to-manage content solutions for dynamic business needs.",
      },
    ],
  },
  "app-development": {
    title: "App Development",
    tagline:
      "Create powerful, user-friendly mobile apps to elevate your business.",
    desc: "We create powerful, user-friendly mobile apps that elevate your business. Our team builds cross-platform and native Android/iOS apps with clean UI, smooth performance, and seamless integrations.\n\nAt W3AppDevelopers, we specialize in app development, turning innovative ideas into powerful, high-performance applications. Our expert developers create user-friendly, scalable, and feature-rich web and mobile apps tailored to your business needs. Whether you require a dynamic web app, a responsive mobile solution, or a custom software platform, we ensure seamless functionality, intuitive design, and cutting-edge technology to help your business thrive.\n\nW3AppDevelopers specializes in app development, creating high-performance mobile and web applications tailored to your business needs. Our expert team ensures scalability, user-friendly design, and seamless functionality using cutting-edge technologies. From custom apps to enterprise solutions, we deliver innovation that drives digital success. Let’s build your next app!",
    features: [
      "Android & iOS app development",
      "Cross-platform apps (React Native / Flutter)",
      "UI/UX focused design",
      "REST API & third-party integrations",
      "Push notifications & real-time features",
      "App Store & Play Store submission support",
    ],
    process: [
      {
        step: "Requirement Analysis",
        detail: "Understanding your app's purpose, users, and core features.",
      },
      {
        step: "UI/UX Design",
        detail:
          "Wireframes and prototypes designed for intuitive user experience.",
      },
      {
        step: "Custom Mobile App Development",
        detail:
          "Transform your vision into powerful mobile apps tailored to your business needs. Seamless, scalable, and feature-rich.",
      },
      {
        step: "Native App Development",
        detail:
          "High-performance apps optimized for iOS and Android, ensuring smooth functionality and superior user experience.",
      },
      {
        step: "Progressive Web Apps (PWA)",
        detail:
          "Lightning-fast, reliable web apps that work offline, providing a native app-like experience across all devices.",
      },
      {
        step: "Cross-Platform App Development",
        detail:
          "Build once, deploy anywhere with our cross-platform solutions, saving time and resources.",
      },
      {
        step: "Development",
        detail: "Building the app with clean, maintainable, and scalable code.",
      },
      {
        step: "Testing & Bug Fixes",
        detail: "Comprehensive device testing for a polished final product.",
      },
      {
        step: "Deployment & Updates",
        detail:
          "Publishing to app stores and providing ongoing version updates.",
      },
    ],
  },
  "digital-marketing": {
    title: "Digital Marketing",
    tagline:
      "Boost your brand's online presence with data-driven digital marketing strategies. Result-Driven Digital Marketing Services to Elevate Your Brand",
    desc: "We help boost your brand's online presence with data-driven digital marketing strategies. From SEO to social media management, our team delivers measurable results that grow your audience and revenue.\n\n We drive your brand’s success with strategic and innovative digital marketing solutions. Our experts specialize in SEO, social media marketing, content marketing, and paid advertising to enhance your online presence and engage your target audience. Whether you need a complete digital strategy or specific campaigns, we create data-driven solutions that deliver measurable results.\n\nWhether you need to improve search rankings, run targeted ad campaigns, or engage customers through compelling content, our tailored marketing solutions ensure maximum reach and impact. We blend creativity, analytics, and technology to deliver powerful marketing solutions tailored to your business goals. Let’s grow your brand together with W3AppDevelopers.",
    features: [
      "Search Engine Optimization (SEO): We optimize your website with powerful SEO strategies to improve rankings, drive organic traffic, and ensure your brand gets discovered by the right audience.",
      "Social Media Marketing (SMM)",
      "Google Ads & Pay-Per-Click campaigns",
      "Content marketing & blog strategy",
      "Email marketing campaigns",
      "Analytics reporting & ROI tracking",
    ],
    process: [
      {
        step: "Search Engine Optimization (SEO)",
        detail:
          "We optimize your website with powerful SEO strategies to improve rankings, drive organic traffic, and ensure your brand gets discovered by the right audience.",
      },
      {
        step: "Social Media Marketing (SMM)",
        detail:
          "Social Media Strategies That Speak Loud. We craft engaging content and campaigns that capture attention, drive interactions, and amplify your brand’s presence online.",
      },
      {
        step: "Google Ads & Pay-Per-Click campaigns",
        detail:
          "We create targeted ad campaigns that maximize visibility and conversions, ensuring your brand reaches the right audience at the right time.",
      },
      {
        step: "Content marketing & blog strategy",
        detail:
          "Content That Speaks, Engages &amp; Sells. We craft impactful stories, blogs, and visuals that attract your audience, boost credibility, and drive conversions effortlessly.",
      },
      {
        step: "Email marketing campaigns",
        detail:
          "Reach your audience directly with Email Marketing. Engage, nurture, and convert leads with personalized and impactful email campaigns",
      },
      {
        step: "Pay-Per-Click(PPC)",
        detail:
          "Maximize your online visibility with Pay-Per-Click (PPC) advertising. Drive targeted traffic and boost conversions with cost-effective ad campaigns.",
      },
      {
        step: "Brand & Strategy Management",
        detail:
          "We develop a comprehensive brand strategy that aligns with your business goals, ensuring consistent messaging and a strong market presence.",
      },
      {
        step: "Influencer Marketing",
        detail:
          "We identify and collaborate with influencers to amplify your brand’s reach and credibility, driving engagement and conversions.",
      },
      {
        step: "Audit & Strategy",
        detail:
          "Analyzing your current online presence and defining a growth strategy.",
      },
      {
        step: "Campaign Setup",
        detail: "Creating targeted campaigns across relevant digital channels.",
      },
      {
        step: "Content Creation",
        detail: "Producing engaging content that resonates with your audience.",
      },
      {
        step: "Execution & Monitoring",
        detail: "Running campaigns with real-time performance monitoring.",
      },
      {
        step: "Reporting & Optimization",
        detail: "Monthly reports and continuous campaign optimization.",
      },
    ],
  },
  "graphic-design": {
    title: "Graphic Design",
    tagline:
      "Create visually stunning designs that captivate, engage, and elevate your brand.",
    desc: "Our graphic design team creates visually stunning designs that captivate, engage, and elevate your brand. Whether it's a logo, marketing material, or social media graphics, we deliver designs that make a lasting impression.",
    features: [
      "Logo & brand identity design",
      "Social media post & banner design",
      "Brochure, flyer & print design",
      "UI/UX design for web & apps",
      "Packaging design",
      "Motion graphics & video thumbnails",
    ],
    process: [
      {
        step: "Brief & Concept",
        detail: "Understanding your brand and creative requirements.",
      },
      {
        step: "Ideation & Sketching",
        detail: "Exploring concepts and creating initial design directions.",
      },
      {
        step: "Design Execution",
        detail: "Creating polished designs based on approved concepts.",
      },
      {
        step: "Feedback & Revisions",
        detail: "Incorporating your feedback with prompt revisions.",
      },
      {
        step: "Final Delivery",
        detail: "Delivering print-ready and web-ready design files.",
      },
    ],
  },
  "corporate-training": {
    title: "Corporate Training",
    tagline:
      "Empower your team with expert-led corporate training for enhanced skills and productivity.",
    desc: "Empower your team with expert-led corporate training programs designed to enhance skills, productivity, and performance. We offer tailored training sessions in software development, digital marketing, and IT skills.",
    features: [
      "Customized training programs",
      "Web & app development workshops",
      "Digital marketing training",
      "Soft skills & leadership development",
      "Hands-on project-based learning",
      "Certificate of completion",
    ],
    process: [
      {
        step: "Needs Assessment",
        detail:
          "Understanding your team's current skill levels and learning goals.",
      },
      {
        step: "Curriculum Design",
        detail: "Crafting a tailored training plan aligned to your objectives.",
      },
      {
        step: "Training Delivery",
        detail: "Interactive sessions led by industry experts.",
      },
      {
        step: "Practical Exercises",
        detail: "Hands-on tasks and real-world project simulations.",
      },
      {
        step: "Assessment & Certification",
        detail: "Evaluating outcomes and awarding certificates of completion.",
      },
    ],
  },
  "pos-software": {
    title: "Custom Software & POS",
    tagline:
      "Build tailored software solutions designed to meet your unique business needs and goals.",
    desc: "We build tailored custom software solutions and POS systems designed to meet your unique business needs. Our solutions are scalable, reliable, and built specifically to streamline your operations and improve efficiency.",
    features: [
      "Custom business software development",
      "POS system for retail & restaurants",
      "Inventory & stock management",
      "GST-compliant billing & invoicing",
      "Multi-store & multi-user access",
      "Cloud-based or on-premise deployment",
    ],
    process: [
      { step: "Requirements Gathering", detail: "Deep-dive into your workflows and business requirements." },
      { step: "Architecture Design", detail: "Planning a robust and scalable system architecture." },
      { step: "Agile Development", detail: "Iterative development with regular demos and feedback." },
      { step: "Integration & Testing", detail: "Integrating with your existing systems and thorough QA." },
      { step: "Go-Live & Training", detail: "Smooth deployment and team training for adoption." },
    ],
  },
  "ecommerce-development": {
    title: "Ecommerce Development",
    tagline: "Build powerful online stores that drive sales, enhance customer experience, and scale your business.",
    desc: "We design and develop feature-rich ecommerce websites that help businesses sell online effectively. From product listings and secure payment gateways to inventory management and order tracking, our ecommerce solutions are built to convert visitors into customers.\n\nAt W3AppDevelopers, we create scalable ecommerce platforms using modern technologies like WooCommerce, Shopify, and custom-built solutions. Whether you're launching a new online store or upgrading an existing one, we deliver fast, secure, and mobile-optimized ecommerce experiences.\n\nOur team handles everything — storefront design, backend development, payment integration, SEO, and ongoing maintenance — so you can focus on growing your business.",
    features: [
      "Custom ecommerce website design & development",
      "WooCommerce & Shopify development",
      "Multi-vendor marketplace development",
      "Secure payment gateway integration (Razorpay, PayPal, Stripe)",
      "Product catalog management & inventory tracking",
      "Order management & shipping integrations",
      "Mobile-optimized responsive storefront",
      "SEO & conversion rate optimization",
    ],
    process: [
      { step: "Business Analysis", detail: "Understanding your products, target customers, and sales goals." },
      { step: "UI/UX Design", detail: "Creating intuitive storefront designs focused on conversions." },
      { step: "Development", detail: "Building your store with robust backend and smooth frontend." },
      { step: "Payment & Shipping", detail: "Integrating payment gateways and logistics providers." },
      { step: "Testing & QA", detail: "End-to-end testing across devices and browsers." },
      { step: "Launch & SEO", detail: "Publishing your store with optimized SEO setup." },
      { step: "Post-Launch Support", detail: "Ongoing maintenance, updates, and performance monitoring." },
    ],
  },
  "software-development": {
    title: "Software Development",
    tagline: "Custom software solutions engineered to automate, scale, and transform your business operations.",
    desc: "We build end-to-end custom software solutions tailored to your business workflows. From enterprise applications and SaaS products to automation tools and APIs, our software development team delivers reliable, scalable, and maintainable systems.\n\nW3AppDevelopers specializes in developing software that solves real business problems — reducing manual effort, improving efficiency, and enabling data-driven decisions. We work across industries including healthcare, retail, logistics, finance, and education.\n\nOur technology stack includes Node.js, React, Python, PHP, PostgreSQL, and cloud platforms, ensuring modern, future-proof software delivery.",
    features: [
      "Custom business application development",
      "ERP & CRM software development",
      "API development & third-party integrations",
      "Cloud-based SaaS application development",
      "Workflow automation & process digitization",
      "Database design & optimization",
      "Legacy system modernization",
      "GST billing & accounting software",
    ],
    process: [
      { step: "Discovery & Planning", detail: "Gathering requirements, defining scope, and roadmap planning." },
      { step: "System Architecture", detail: "Designing scalable, secure, and maintainable architecture." },
      { step: "Agile Development", detail: "Sprint-based development with regular client check-ins." },
      { step: "Quality Assurance", detail: "Automated and manual testing for reliability." },
      { step: "Deployment", detail: "Smooth deployment to cloud or on-premise environment." },
      { step: "Training & Handover", detail: "User training and complete documentation." },
      { step: "Ongoing Maintenance", detail: "Bug fixes, enhancements, and 24/7 support." },
    ],
  },
  "ai-agent-development": {
    title: "AI Agent Development",
    tagline: "Build intelligent AI agents that automate complex business processes and deliver autonomous outcomes.",
    desc: "We design, build, and deploy cutting-edge AI agents that think, plan, and act autonomously to achieve your business goals. Our AI agent development services help businesses automate repetitive tasks, process large volumes of data, handle customer interactions, and make intelligent decisions — all without constant human intervention.\n\nAt W3AppDevelopers, our AI team specializes in building agents using LangChain, AutoGen, CrewAI, and OpenAI Agent frameworks. We develop customer service bots, sales automation agents, data processing pipelines, research assistants, and multi-agent orchestration systems.\n\nFrom prompt engineering to RAG (Retrieval Augmented Generation) implementation, we deliver production-ready AI agents integrated seamlessly into your existing business systems.",
    features: [
      "Custom AI agent design & development",
      "LangChain, AutoGen, CrewAI agent frameworks",
      "OpenAI, Claude & Gemini API integration",
      "RAG (Retrieval Augmented Generation) systems",
      "AI-powered customer service & chatbots",
      "Multi-agent orchestration pipelines",
      "n8n & Make.com AI workflow automation",
      "AI agents integrated with CRM, ERP & APIs",
    ],
    process: [
      { step: "Use Case Definition", detail: "Identifying business processes best suited for AI automation." },
      { step: "Agent Architecture", detail: "Designing agent memory, tools, and reasoning strategies." },
      { step: "LLM Selection", detail: "Choosing the right language model for your use case and budget." },
      { step: "Agent Development", detail: "Building and training agents with custom tools and workflows." },
      { step: "Testing & Evaluation", detail: "Benchmarking agent performance and accuracy." },
      { step: "Integration", detail: "Connecting agents to your business systems and APIs." },
      { step: "Deployment & Monitoring", detail: "Production deployment with logging and performance tracking." },
    ],
  },
  "wordpress-development": {
    title: "WordPress Development",
    tagline: "Custom WordPress websites that are fast, secure, SEO-optimized, and built to grow with your business.",
    desc: "We build custom WordPress websites that are powerful, flexible, and easy to manage. Whether you need a business website, blog, portfolio, or WooCommerce store, our WordPress development team delivers responsive, SEO-friendly sites with clean code and excellent performance.\n\nAt W3AppDevelopers, we don't just install a theme — we build fully customized WordPress solutions using Elementor, custom theme development, and plugin integration. Our WordPress sites are optimized for speed (Core Web Vitals), security, and search engine rankings.\n\nWe also provide WordPress maintenance, speed optimization, security hardening, and migration services to ensure your website remains fast and secure over time.",
    features: [
      "Custom WordPress theme design & development",
      "WooCommerce online store development",
      "Elementor & Divi page builder customization",
      "Plugin development & integration",
      "SEO optimization & schema markup",
      "Core Web Vitals & speed optimization",
      "WordPress security hardening",
      "WordPress migration & ongoing maintenance",
    ],
    process: [
      { step: "Requirements & Planning", detail: "Understanding your goals, audience, and content structure." },
      { step: "Design & Wireframe", detail: "Creating custom designs aligned to your brand identity." },
      { step: "WordPress Setup", detail: "Installing and configuring WordPress with optimal settings." },
      { step: "Theme Development", detail: "Building custom or child themes with Elementor/custom code." },
      { step: "Plugin Integration", detail: "Adding necessary plugins for functionality and performance." },
      { step: "SEO & Speed Setup", detail: "Configuring Yoast SEO, Caching, and performance tools." },
      { step: "Launch & Handover", detail: "Go-live with admin training and documentation." },
    ],
  },
  "saas-development": {
    title: "SaaS Development",
    tagline: "Build scalable, subscription-based SaaS products that generate recurring revenue and delight users.",
    desc: "We help entrepreneurs and businesses build robust, scalable Software-as-a-Service (SaaS) products from the ground up. Our SaaS development service covers everything from MVP development to full-scale production applications with multi-tenant architecture, subscription billing, and seamless user onboarding.\n\nAt W3AppDevelopers, we understand that a successful SaaS product needs more than just code — it needs great UX, high availability, security, and a scalable infrastructure. We build SaaS products using React, Node.js, PostgreSQL, and cloud platforms (AWS, GCP, Azure).\n\nWhether you're building a B2B platform, productivity tool, industry-specific software, or API product, our team delivers SaaS solutions that are reliable, maintainable, and ready to scale.",
    features: [
      "SaaS MVP development & prototyping",
      "Multi-tenant architecture design",
      "Subscription billing (Stripe/Razorpay integration)",
      "User authentication & role-based access control",
      "Admin dashboard & analytics panels",
      "API development & third-party integrations",
      "Cloud deployment & auto-scaling setup",
      "SaaS UI/UX design & onboarding flows",
    ],
    process: [
      { step: "Product Discovery", detail: "Defining your SaaS idea, target market, and core features." },
      { step: "Architecture Planning", detail: "Designing multi-tenant, scalable system architecture." },
      { step: "MVP Development", detail: "Building a minimum viable product for early user validation." },
      { step: "Payment & Auth", detail: "Integrating subscription billing and user management." },
      { step: "Testing & Security", detail: "Load testing, security audits, and performance tuning." },
      { step: "Cloud Deployment", detail: "Deploying to AWS/GCP with CI/CD pipelines." },
      { step: "Growth & Iteration", detail: "Ongoing feature development based on user feedback." },
    ],
  },
};

export default function ServiceDetail() {
  const { id } = useParams();
  const info = serviceData[id ?? ""] ?? {
    title: "Service",
    tagline: "Premium IT Services by W3AppDevelopers.",
    desc: "We offer premium IT services tailored to your business needs.",
    features: [],
    process: [],
  };

  return (
    <div className="w-full">
      <section className="bg-slate-50 py-24 border-b relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-primary/5 rounded-bl-[100px] -z-0" />
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl"
          >
            <h1 className="text-4xl md:text-6xl font-bold text-slate-900 mb-6">
              {info.title}
            </h1>
            <p className="text-xl text-slate-600 mb-8 leading-relaxed">
              {info.tagline}
            </p>
            <Link href="/contact">
              <Button
                size="lg"
                className="rounded-full h-14 px-8 text-lg shadow-lg"
              >
                Get a Quote
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="flex flex-col lg:flex-row gap-16">
            <div className="lg:w-1/2">
              <h2 className="text-2xl font-bold text-slate-900 mb-4">
                Overview
              </h2>
              <p className="text-slate-600 text-lg leading-relaxed mb-8">
                {info.desc}
              </p>

              <h3 className="text-xl font-bold text-slate-900 mb-4">
                What We Offer
              </h3>
              <ul className="space-y-3">
                {info.features.map((f, i) => (
                  <motion.li
                    key={i}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.07 }}
                    className="flex items-start gap-3"
                  >
                    <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                    <span className="text-slate-700">{f}</span>
                  </motion.li>
                ))}
              </ul>
            </div>

            <div className="lg:w-1/2">
              <h3 className="text-xl font-bold text-slate-900 mb-6">
                Our Process
              </h3>
              <ol className="space-y-6">
                {info.process.map((p, i) => (
                  <motion.li
                    key={i}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="flex gap-4"
                  >
                    <div className="w-9 h-9 rounded-full bg-primary text-white flex items-center justify-center font-bold shrink-0 text-sm">
                      {i + 1}
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-900">{p.step}</h4>
                      <p className="text-slate-600 text-sm mt-0.5">
                        {p.detail}
                      </p>
                    </div>
                  </motion.li>
                ))}
              </ol>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-primary text-white text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-4">Ready to get started?</h2>
          <p className="text-white/80 mb-8 max-w-xl mx-auto">
            Talk to our team today and let's build something great together.
          </p>
          <Link href="/contact">
            <Button
              size="lg"
              variant="outline"
              className="rounded-full h-14 px-10 text-lg text-primary bg-white hover:bg-white/90 border-white"
            >
              Contact Us
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
