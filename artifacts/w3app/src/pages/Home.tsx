import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { Card, CardContent } from "@/components/ui/card";
import {
  Monitor,
  Smartphone,
  Megaphone,
  PenTool,
  GraduationCap,
  Code,
  ShoppingCart,
  Globe,
  Layers,
  Bot,
  Rocket,
  Palette,
  ArrowRight,
  CheckCircle,
  Phone,
  Mail,
} from "lucide-react";
import heroImage from "@assets/hero-image_1779864042948.png";

const PRIMARY_PHONE = import.meta.env.VITE_PRIMARY_PHONE || "+91 96985 48633";
const PRIMARY_EMAIL =
  import.meta.env.VITE_PRIMARY_EMAIL || "digital@w3appdevelopers.com";

function AnimatedCounter({
  target,
  suffix = "",
  duration = 2000,
}: {
  target: number;
  suffix?: string;
  duration?: number;
}) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  useEffect(() => {
    if (!inView) return;
    let start = 0;
    const step = Math.ceil(target / (duration / 16));
    const timer = setInterval(() => {
      start += step;
      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(start);
      }
    }, 16);
    return () => clearInterval(timer);
  }, [inView, target, duration]);

  return (
    <span ref={ref}>
      {count}
      {suffix}
    </span>
  );
}

const services = [
  {
    title: "Web Designing",
    desc: "Creative, mobile-responsive, SEO-friendly websites built through CMS and custom code.",
    icon: Monitor,
    slug: "web-development",
  },
  {
    title: "Ecommerce Development",
    desc: "Feature-rich online stores with cart, payment gateway, and order management.",
    icon: ShoppingCart,
    slug: "ecommerce-websites",
  },
  {
    title: "Software Development",
    desc: "Tailored software solutions designed to meet your unique business needs and goals.",
    icon: Code,
    slug: "pos-software",
  },
  {
    title: "AI Agent Development",
    desc: "Intelligent AI-powered agents and automation tools for modern business workflows.",
    icon: Bot,
    slug: "app-development",
  },
  {
    title: "Mobile Apps Development",
    desc: "Native and cross-platform apps for iOS and Android with seamless UX.",
    icon: Smartphone,
    slug: "app-development",
  },
  {
    title: "WordPress Development",
    desc: "Professional WordPress websites with custom themes, plugins and full CMS control.",
    icon: Globe,
    slug: "web-development",
  },
  {
    title: "SaaS Development",
    desc: "Scalable Software-as-a-Service platforms built for growth and multi-tenancy.",
    icon: Layers,
    slug: "web-development",
  },
  {
    title: "Logo / Graphic Design",
    desc: "Stunning brand identities, logos, and visual assets that make you memorable.",
    icon: Palette,
    slug: "graphic-design",
  },
  {
    title: "Digital Marketing",
    desc: "SEO, Google Ads and social media strategies to drive targeted traffic and growth.",
    icon: Megaphone,
    slug: "digital-marketing",
  },
];

const features = [
  {
    title: "All in one services",
    desc: "From web hosting to software development, marketing, and training we do it all.",
  },
  {
    title: "Affordable & Scalable",
    desc: "High-quality services that fit your budget and grow with your business.",
  },
  {
    title: "Expert Team",
    desc: "Skilled professionals ready to bring your ideas to life.",
  },
  {
    title: "Reliable & Secure",
    desc: "Fast, secure and high-performance solutions you can trust.",
  },
  {
    title: "Latest Technology",
    desc: "We use modern tools to build fast, secure, and efficient solutions.",
  },
];

const technologies = [
  "React",
  "Node.js",
  "MongoDB",
  "Express",
  "WordPress",
  "Flutter",
  "React Native",
  "Python",
  "AWS",
  "MySQL",
  "PostgreSQL",
  "TypeScript",
];

const stats = [
  { value: 90, suffix: "+", label: "Projects" },
  { value: 60, suffix: "+", label: "Clients" },
  { value: 100, suffix: "%", label: "Satisfaction" },
];

export default function Home() {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center overflow-hidden bg-slate-900">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900" />
          <div className="absolute top-0 right-0 w-1/2 h-full bg-primary/5 clip-path-diagonal" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary/10 rounded-full blur-[100px]" />
        </div>

        <div className="container mx-auto px-4 relative z-10 pt-24 pb-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <p className="text-primary font-semibold uppercase tracking-widest text-sm mb-4">
                Leading Web Design Company in Erode
              </p>
              <h1 className="text-4xl md:text-5xl xl:text-6xl font-bold text-white leading-tight mb-6">
                Innovative Digital{" "}
                <span className="text-primary"> Solutions</span>,<br />
                for Business <span className="text-primary"> Growth</span>
              </h1>
              <p className="text-slate-300 text-lg mb-8 leading-relaxed">
                At W3AppDevelopers, a leading web development company in Erode,
                we provide top-tier IT services using the latest technologies to
                deliver affordable and innovative solutions. Whether launching a
                new business or optimizing an existing one, we accelerate growth
                through software development, app creation, graphic design, and
                digital marketing.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 mb-10">
                <Link href="/services">
                  <Button
                    size="lg"
                    className="rounded-full h-13 px-8 text-base shadow-lg shadow-primary/30 w-full sm:w-auto"
                  >
                    Let's Build Your Dream Website
                  </Button>
                </Link>
                <Link href="/products">
                  <Button
                    size="lg"
                    variant="outline"
                    className="rounded-full h-13 px-8 text-base border-white/30 text-white hover:bg-white/10 w-full sm:w-auto"
                  >
                    Explore our Products
                  </Button>
                </Link>
              </div>

              <div className="flex items-center gap-6 text-sm text-slate-400">
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-primary" />
                  <span>Timely Delivery</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-primary" />
                  <span>Experienced Professionals</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-primary" />
                  <span>10+ Years Experience</span>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex justify-center"
            >
              <img
                src={heroImage}
                alt="Timely Delivery, Experienced Professionals, 10+ Years Experience"
                className="w-full max-w-md object-contain drop-shadow-2xl"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Leading Company Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
                Leading Web Design Company in{" "}
                <span className="text-primary">Erode</span>
              </h2>
              <p className="text-slate-600 text-lg leading-relaxed mb-4">
                Providing One Stop Best Web Solutions For All Your Business
                Needs!
              </p>
              <p className="text-slate-500 leading-relaxed">
                W3AppDevelopers is a top-notch website designing and premium web
                development company in Erode, providing complete web design
                services that are affordable, best in quality, and result
                oriented. We furnish custom web solutions that focus on quality,
                innovation, and speed. We are specialized in mobile responsive
                websites, WordPress CMS web designing services, eCommerce
                website designing and development, dynamic websites, SEO
                services, and conversion-focused landing pages.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-primary font-semibold tracking-wider uppercase mb-3">
              What We Do
            </h2>
            <h3 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Our Exciting & Inspiring Web Design Services
            </h3>
            <p className="text-slate-500">
              Our Range of Web Design Services built to grow your business
              online.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.07 }}
              >
                <Link href={`/services/${service.slug}`}>
                  <Card className="h-full border-none shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group cursor-pointer">
                    <CardContent className="p-8 relative">
                      <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-bl-full -mr-10 -mt-10 transition-transform group-hover:scale-150 duration-500 ease-out" />
                      <div className="w-14 h-14 bg-primary/10 text-primary rounded-2xl flex items-center justify-center mb-6 relative z-10 group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                        <service.icon className="w-7 h-7" />
                      </div>
                      <h4 className="text-xl font-bold mb-3 relative z-10 group-hover:text-primary transition-colors">
                        {service.title}
                      </h4>
                      <p className="text-slate-600 relative z-10 leading-relaxed text-sm">
                        {service.desc}
                      </p>
                      <div className="mt-4 flex items-center gap-1 text-primary text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity">
                        Learn More <ArrowRight className="w-4 h-4" />
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link href="/services">
              <Button
                size="lg"
                variant="outline"
                className="rounded-full px-8 border-primary text-primary hover:bg-primary hover:text-white"
              >
                View All Services <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Trusted Professionals Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-16 items-center">
            <div className="lg:w-1/2">
              <h2 className="text-primary font-semibold tracking-wider uppercase mb-3">
                Why Choose Us
              </h2>
              <h3 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
                Trusted and Professional Website Designers in Erode
              </h3>
              <p className="text-slate-500 leading-relaxed mb-6">
                We are one of the most reputed website designers and digital
                marketing partners in Erode. Our services will equip small
                business owners and start-ups to reap the benefits at a faster
                pace. We work hard to bring out what our customers need on their
                business website.
              </p>
              <p className="text-slate-500 leading-relaxed mb-8">
                Building a great website is a smart investment for any business.
                We specialize in creating wonderful yet functional and
                progressive web applications to cater to your business needs. We
                ensure a cent percent of what we have promised before making the
                deal.
              </p>
              <Link href="/about">
                <Button className="rounded-full px-8">
                  Learn More About Us <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </Link>
            </div>

            <div className="lg:w-1/2">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {features.map((feature, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className={`p-6 rounded-2xl bg-slate-50 border border-slate-100 hover:border-primary/30 hover:shadow-md transition-all ${i === 4 ? "md:col-span-2" : ""}`}
                  >
                    <div className="w-10 h-10 rounded-full bg-primary/10 text-primary flex items-center justify-center mb-3">
                      <span className="font-bold text-sm">{i + 1}</span>
                    </div>
                    <h4 className="text-base font-bold mb-2 text-slate-900">
                      {feature.title}
                    </h4>
                    <p className="text-slate-500 text-sm leading-relaxed">
                      {feature.desc}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Reach More Customers Section */}
      <section className="py-24 bg-slate-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-primary/20 via-slate-900 to-slate-900" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-primary font-semibold tracking-wider uppercase mb-3 text-sm">
                Grow Your Business
              </h2>
              <h3 className="text-3xl md:text-5xl font-bold mb-6">
                Reach More Customers
              </h3>
              <p className="text-slate-300 text-lg leading-relaxed mb-8">
                We give equal importance to promotional activities to improve
                sales and conversion. Our unique expertise provides distinct and
                customized marketing strategies to enable your success. You can
                easily attract more customers with your perfect web design and
                online marketing.
              </p>
              <p className="text-slate-400 leading-relaxed mb-10">
                While a well-designed website is essential, combining it with{" "}
                <strong className="text-white">SEO</strong> and{" "}
                <strong className="text-white">Google Ads</strong> can develop
                your business to the next level. These strategies drive targeted
                traffic, improve visibility, and help convert visitors into
                loyal customers.
              </p>

              <div className="bg-white/5 border border-white/10 rounded-3xl p-8 md:p-12 text-center">
                <h4 className="text-2xl md:text-4xl font-bold mb-2">
                  Don't Blend In,{" "}
                  <span className="text-primary">Stand Out</span>
                </h4>
                <p className="text-slate-400 mb-6">
                  Design a website that makes a statement. Our experts build
                  compelling sites that speak volumes about your brand's story.
                </p>
                <Link href="/contact">
                  <Button
                    size="lg"
                    className="rounded-full px-10 shadow-lg shadow-primary/30"
                  >
                    Let's Get In Touch <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Counter / Stats Section */}
      <section className="py-20 bg-slate-950 text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl md:text-4xl font-bold"
            >
              <span className="text-primary">10+</span> Years of Experience
            </motion.h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-3xl mx-auto">
            {stats.map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 }}
                className="text-center"
              >
                <div className="text-5xl md:text-6xl font-bold text-white mb-2">
                  <AnimatedCounter target={stat.value} suffix={stat.suffix} />
                </div>
                <div className="text-slate-400 font-medium tracking-wide uppercase text-sm">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-primary font-semibold tracking-wider uppercase mb-3 text-sm">
              Our Tech Stack
            </h2>
            <h3 className="text-3xl md:text-4xl font-bold text-slate-900">
              Technologies We Use for Website Design
            </h3>
          </div>
          <div className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto">
            {technologies.map((tech, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="px-6 py-3 bg-slate-50 border border-slate-200 rounded-full text-slate-700 font-medium hover:border-primary hover:text-primary hover:bg-primary/5 transition-colors cursor-default"
              >
                {tech}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA - Let's Get In Touch */}
      <section className="py-24 bg-primary text-white">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-4">
              Let's Get In Touch
            </h2>
            <p className="text-primary-foreground/80 text-lg mb-10 max-w-xl mx-auto">
              Ready to transform your business? Our team is here to help you
              build your dream website.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-10">
              <Link href="/contact">
                <Button
                  size="lg"
                  variant="secondary"
                  className="rounded-full h-14 px-10 text-lg text-primary font-bold w-full sm:w-auto shadow-lg"
                >
                  Start a Project
                </Button>
              </Link>
            </div>
            <div className="flex flex-col sm:flex-row gap-6 justify-center text-primary-foreground/90">
              <a
                href={`tel:${PRIMARY_PHONE}`}
                className="flex items-center gap-2 hover:text-white transition-colors justify-center"
              >
                <Phone className="w-5 h-5" /> {PRIMARY_PHONE}
              </a>
              <a
                href={`mailto:${PRIMARY_EMAIL}`}
                className="flex items-center gap-2 hover:text-white transition-colors justify-center"
              >
                <Mail className="w-5 h-5" /> {PRIMARY_EMAIL}
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
