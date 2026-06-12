import { Link, useLocation } from "wouter";
import { useState, useEffect } from "react";
import {
  Menu,
  X,
  ChevronDown,
  LayoutDashboard,
  LogIn,
  GraduationCap,
  Briefcase,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import logo from "@assets/Untitled-Design-1_1779212117854.jpg";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isCareersOpen, setIsCareersOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);
  const [location] = useLocation();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const checkAuth = () => setIsAdmin(!!localStorage.getItem("adminToken"));
    checkAuth();
    window.addEventListener("storage", checkAuth);
    return () => window.removeEventListener("storage", checkAuth);
  }, []);

  const services = [
    { name: "Web Development", href: "/services/web-development" },
    { name: "Ecommerce Development", href: "/services/ecommerce-development" },
    { name: "Software Development", href: "/services/software-development" },
    { name: "AI Agent Development", href: "/services/ai-agent-development" },
    { name: "Mobile Apps Development", href: "/services/app-development" },
    { name: "WordPress Development", href: "/services/wordpress-development" },
    { name: "SaaS Development", href: "/services/saas-development" },
    { name: "Logo / Graphic Design", href: "/services/graphic-design" },
    { name: "Digital Marketing", href: "/services/digital-marketing" },
    { name: "Corporate Training", href: "/services/corporate-training" },
  ];

  const productLinks = [
    {
      name: "Field Service Management",
      href: "/products/field-service-management",
    },
    {
      name: "Learning Management System",
      href: "/products/learning-management-software",
    },
    { name: "AI SEO Agent", href: "/products/ai-seo-agent" },
    {
      name: "Job Portal Development",
      href: "/products/job-portal-development",
    },
    {
      name: "Shopping Cart Software",
      href: "/products/shopping-cart-software",
    },
    { name: "ERP Software", href: "/products/erp-software" },
    {
      name: "Food Delivery Software",
      href: "/products/food-delivery-software",
    },
    {
      name: "Inventory Management",
      href: "/products/inventory-management-system",
    },
    { name: "CRM Software", href: "/products/crm-software" },
    { name: "POS Software", href: "/products/pos-software" },
    { name: "HRM Software", href: "/products/hrm-software" },
    {
      name: "Hospital Management",
      href: "/products/hospital-management-system",
    },
    { name: "E-Commerce Websites", href: "/products/ecommerce-websites" },
    {
      name: "Doctor Appointment App",
      href: "/products/doctor-appointment-app",
    },
    { name: "GYM Management System", href: "/products/gym-management-system" },
    {
      name: "Hotel Booking Applications",
      href: "/products/hotel-booking-applications",
    },
    { name: "Billing Software", href: "/products/billing-software" },
    {
      name: "Matrimonial Applications",
      href: "/products/matrimonial-applications",
    },
    { name: "Grocery Application", href: "/products/grocery-application" },
  ];

  const careersLinks = [
    {
      name: "Internships",
      href: "/careers",
      icon: GraduationCap,
      desc: "Role & skill-based internship programs",
    },
    {
      name: "Careers",
      href: "/internships",
      icon: Briefcase,
      desc: "Join our growing team",
    },
  ];

  const isCareersActive =
    location === "/internships" || location === "/careers";

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? "bg-white/90 backdrop-blur-lg shadow-sm" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 h-20 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <img
            src={logo}
            alt="W3AppDevelopers Logo"
            className="h-12 w-auto object-contain"
          />
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-6">
          <Link
            href="/"
            className={`text-sm font-medium transition-colors hover:text-primary ${location === "/" ? "text-primary" : "text-foreground"}`}
          >
            Home
          </Link>
          <Link
            href="/about"
            className={`text-sm font-medium transition-colors hover:text-primary ${location === "/about" ? "text-primary" : "text-foreground"}`}
          >
            About Us
          </Link>

          {/* Services dropdown */}
          <DropdownMenu>
            <DropdownMenuTrigger
              className={`flex items-center gap-1 text-sm font-medium transition-colors hover:text-primary outline-none ${location.startsWith("/services") ? "text-primary" : "text-foreground"}`}
            >
              Services <ChevronDown className="w-4 h-4" />
            </DropdownMenuTrigger>
            <DropdownMenuContent align="start" className="w-48">
              <Link href="/services">
                <DropdownMenuItem className="cursor-pointer font-bold">
                  All Services
                </DropdownMenuItem>
              </Link>
              {services.map((service) => (
                <Link key={service.href} href={service.href}>
                  <DropdownMenuItem className="cursor-pointer">
                    {service.name}
                  </DropdownMenuItem>
                </Link>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>

          {/* Products dropdown */}
          <DropdownMenu>
            <DropdownMenuTrigger
              className={`flex items-center gap-1 text-sm font-medium transition-colors hover:text-primary outline-none ${location.startsWith("/products") ? "text-primary" : "text-foreground"}`}
            >
              Products <ChevronDown className="w-4 h-4" />
            </DropdownMenuTrigger>
            <DropdownMenuContent
              align="start"
              className="w-52 max-h-80 overflow-y-auto"
            >
              <Link href="/products">
                <DropdownMenuItem className="cursor-pointer font-bold">
                  All Products
                </DropdownMenuItem>
              </Link>
              {productLinks.map((p) => (
                <Link key={p.href} href={p.href}>
                  <DropdownMenuItem className="cursor-pointer">
                    {p.name}
                  </DropdownMenuItem>
                </Link>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>

          <Link
            href="/blogs"
            className={`text-sm font-medium transition-colors hover:text-primary ${location === "/blogs" ? "text-primary" : "text-foreground"}`}
          >
            Blogs
          </Link>

          {/* Careers dropdown */}
          <DropdownMenu>
            <DropdownMenuTrigger
              className={`flex items-center gap-1 text-sm font-medium transition-colors hover:text-primary outline-none ${isCareersActive ? "text-primary" : "text-foreground"}`}
            >
              Internship & Careers <ChevronDown className="w-4 h-4" />
            </DropdownMenuTrigger>
            <DropdownMenuContent align="start" className="w-56">
              {careersLinks.map((item) => {
                const Icon = item.icon;
                return (
                  <Link key={item.href} href={item.href}>
                    <DropdownMenuItem className="cursor-pointer gap-3 py-3">
                      <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                        <Icon className="w-4 h-4 text-primary" />
                      </div>
                      <div>
                        <p className="font-medium text-sm">{item.name}</p>
                        <p className="text-xs text-muted-foreground">
                          {item.desc}
                        </p>
                      </div>
                    </DropdownMenuItem>
                  </Link>
                );
              })}
            </DropdownMenuContent>
          </DropdownMenu>

          <Link
            href="/contact"
            className={`text-sm font-medium transition-colors hover:text-primary ${location === "/contact" ? "text-primary" : "text-foreground"}`}
          >
            Contact Us
          </Link>
        </nav>

        <div className="hidden lg:flex items-center gap-3">
          {isAdmin ? (
            <Link href="/admin">
              <Button
                variant="outline"
                size="sm"
                className="rounded-full gap-2 border-primary text-primary hover:bg-primary hover:text-white"
              >
                <LayoutDashboard className="w-4 h-4" />
                Dashboard
              </Button>
            </Link>
          ) : (
            <Link href="/admin/login">
              <Button
                variant="ghost"
                size="sm"
                className="rounded-full gap-2 text-slate-600 hover:text-primary"
              >
                <LogIn className="w-4 h-4" />
                Admin
              </Button>
            </Link>
          )}
          <Link href="/contact">
            <Button className="rounded-full px-6">Get a Quote</Button>
          </Link>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="lg:hidden p-2 text-foreground"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <div className="lg:hidden absolute top-20 left-0 w-full bg-background border-b shadow-lg py-4 px-4 flex flex-col gap-2">
          {/* Plain links */}
          {[
            { name: "Home", href: "/" },
            { name: "About Us", href: "/about" },
            { name: "Blogs", href: "/blogs" },
            { name: "Contact Us", href: "/contact" },
          ].map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`text-sm font-medium py-2 border-b border-slate-100 ${location === link.href ? "text-primary" : "text-foreground"}`}
              onClick={() => setIsOpen(false)}
            >
              {link.name}
            </Link>
          ))}

          {/* Services */}
          <div className="py-2 border-b border-slate-100">
            <span className="text-sm font-bold text-foreground mb-2 block">
              Services
            </span>
            <div className="flex flex-col gap-2 pl-4">
              <Link
                href="/services"
                className="text-sm text-muted-foreground"
                onClick={() => setIsOpen(false)}
              >
                All Services
              </Link>
              {services.map((service) => (
                <Link
                  key={service.href}
                  href={service.href}
                  className="text-sm text-muted-foreground"
                  onClick={() => setIsOpen(false)}
                >
                  {service.name}
                </Link>
              ))}
            </div>
          </div>

          {/* Products */}
          <div className="py-2 border-b border-slate-100">
            <span className="text-sm font-bold text-foreground mb-2 block">
              Products
            </span>
            <div className="flex flex-col gap-2 pl-4">
              <Link
                href="/products"
                className="text-sm text-muted-foreground"
                onClick={() => setIsOpen(false)}
              >
                All Products
              </Link>
              {productLinks.map((p) => (
                <Link
                  key={p.href}
                  href={p.href}
                  className="text-sm text-muted-foreground"
                  onClick={() => setIsOpen(false)}
                >
                  {p.name}
                </Link>
              ))}
            </div>
          </div>

          {/* Careers group */}
          <div className="py-2 border-b border-slate-100">
            <button
              className="flex items-center justify-between w-full text-sm font-bold text-foreground mb-2"
              onClick={() => setIsCareersOpen(!isCareersOpen)}
            >
              Careers
              <ChevronDown
                className={`w-4 h-4 transition-transform duration-200 ${isCareersOpen ? "rotate-180" : ""}`}
              />
            </button>
            {isCareersOpen && (
              <div className="flex flex-col gap-3 pl-4">
                {careersLinks.map((item) => {
                  const Icon = item.icon;
                  return (
                    <Link
                      key={item.href}
                      href={item.href}
                      className="flex items-center gap-3"
                      onClick={() => {
                        setIsOpen(false);
                        setIsCareersOpen(false);
                      }}
                    >
                      <div className="w-7 h-7 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                        <Icon className="w-3.5 h-3.5 text-primary" />
                      </div>
                      <div>
                        <p
                          className={`text-sm font-medium ${location === item.href ? "text-primary" : "text-foreground"}`}
                        >
                          {item.name}
                        </p>
                        <p className="text-xs text-muted-foreground">
                          {item.desc}
                        </p>
                      </div>
                    </Link>
                  );
                })}
              </div>
            )}
          </div>

          <div className="flex flex-col gap-2 pt-2">
            {isAdmin ? (
              <Link href="/admin" onClick={() => setIsOpen(false)}>
                <Button
                  variant="outline"
                  className="w-full rounded-full gap-2 border-primary text-primary"
                >
                  <LayoutDashboard className="w-4 h-4" />
                  Dashboard
                </Button>
              </Link>
            ) : (
              <Link href="/admin/login" onClick={() => setIsOpen(false)}>
                <Button variant="ghost" className="w-full rounded-full gap-2">
                  <LogIn className="w-4 h-4" />
                  Admin Login
                </Button>
              </Link>
            )}
            <Link href="/contact" onClick={() => setIsOpen(false)}>
              <Button className="w-full rounded-full">Get a Quote</Button>
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
