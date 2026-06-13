import { Link } from "wouter";
import {
  Facebook,
  Instagram,
  Linkedin,
  Youtube,
  Mail,
  MapPin,
  Phone,
} from "lucide-react";


const PRIMARY_EMAIL =
  import.meta.env.VITE_PRIMARY_EMAIL || "digital@w3appdevelopers.com";
const SECONDARY_EMAIL = import.meta.env.VITE_SECONDARY_EMAIL || "";
const PRIMARY_PHONE = import.meta.env.VITE_PRIMARY_PHONE || "+91 96985 48633";
const SECONDARY_PHONE = import.meta.env.VITE_SECONDARY_PHONE || "";
const ADDRESS =
  import.meta.env.VITE_ADDRESS || "Mullamparappu, Erode, Tamil Nadu, India";

const LINKEDIN_URL =
  import.meta.env.VITE_LINKEDIN_URL ||
  "https://www.linkedin.com/company/w3appdevelopers";
const INSTAGRAM_URL =
  import.meta.env.VITE_INSTAGRAM_URL ||
  "https://www.instagram.com/w3appdevelopers";
const YOUTUBE_URL =
  import.meta.env.VITE_YOUTUBE_URL ||
  "https://www.youtube.com/@w3appdevelopers";
const FACEBOOK_URL =
  import.meta.env.VITE_FACEBOOK_URL ||
  "https://www.facebook.com/w3appdevelopers";

export function Footer() {
  return (
    <footer className="bg-slate-950 text-slate-300 pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <div>
            <Link href="/" className="inline-block mb-4">
              <div className="bg-white p-2 rounded inline-flex">
                <img
                  src="https://w3appdevelopers.com/wp-content/uploads/2026/03/Untitled-Design-1.jpg"
                  alt="W3AppDevelopers Logo"
                  className="h-10 w-auto"
                />
              </div>
            </Link>
            <p className="text-sm mb-6 text-slate-400">
              Innovative Digital Solutions for Business Growth. We accelerate
              growth through software development, app creation, graphic design,
              and digital marketing.
            </p>
            <div className="flex space-x-3">
              <a
                href={FACEBOOK_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-slate-800 flex items-center justify-center hover:bg-primary hover:text-white transition-colors"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a
                href={INSTAGRAM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-slate-800 flex items-center justify-center hover:bg-primary hover:text-white transition-colors"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href={LINKEDIN_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-slate-800 flex items-center justify-center hover:bg-primary hover:text-white transition-colors"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href={YOUTUBE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-slate-800 flex items-center justify-center hover:bg-primary hover:text-white transition-colors"
              >
                <Youtube className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Company Links */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-4">Company</h3>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/"
                  className="hover:text-primary transition-colors text-sm"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="hover:text-primary transition-colors text-sm"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/services"
                  className="hover:text-primary transition-colors text-sm"
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  href="/products"
                  className="hover:text-primary transition-colors text-sm"
                >
                  Products
                </Link>
              </li>
              <li>
                <Link
                  href="/blogs"
                  className="hover:text-primary transition-colors text-sm"
                >
                  Blogs
                </Link>
              </li>
              <li>
                <Link
                  href="/internships"
                  className="hover:text-primary transition-colors text-sm"
                >
                  Internships
                </Link>
              </li>
              <li>
                <Link
                  href="/careers"
                  className="hover:text-primary transition-colors text-sm"
                >
                  Careers
                </Link>
              </li>
              <li>
                <Link
                  href="/privacy-policy"
                  className="hover:text-primary transition-colors text-sm"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  href="/terms-conditions"
                  className="hover:text-primary transition-colors text-sm"
                >
                  Terms & Conditions
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-4">
              Our Services
            </h3>
            <ul className="space-y-3">
              {[
                { href: "/services/web-development", label: "Web Development" },
                { href: "/services/ecommerce-development", label: "Ecommerce Development" },
                { href: "/services/software-development", label: "Software Development" },
                { href: "/services/ai-agent-development", label: "AI Agent Development" },
                { href: "/services/app-development", label: "Mobile App Development" },
                { href: "/services/wordpress-development", label: "WordPress Development" },
                { href: "/services/saas-development", label: "SaaS Development" },
                { href: "/services/digital-marketing", label: "Digital Marketing" },
                { href: "/services/graphic-design", label: "Graphic Design" },
                { href: "/services/corporate-training", label: "Corporate Training" },
              ].map((s) => (
                <li key={s.href}>
                  <Link href={s.href} className="hover:text-primary transition-colors text-sm">
                    {s.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-4">
              Contact Us
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-sm">
                <MapPin className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                <span>{ADDRESS}</span>
              </li>
              <li className="flex items-center gap-3 text-sm">
                <Phone className="w-5 h-5 text-primary shrink-0" />
                <div className="flex flex-col gap-1">
                  <a
                    href={`tel:${PRIMARY_PHONE}`}
                    className="hover:text-primary transition-colors"
                  >
                    {PRIMARY_PHONE}
                  </a>
                  {SECONDARY_PHONE && (
                    <a
                      href={`tel:${SECONDARY_PHONE}`}
                      className="hover:text-primary transition-colors"
                    >
                      {SECONDARY_PHONE}
                    </a>
                  )}
                </div>
              </li>
              <li className="flex items-start gap-3 text-sm">
                <Mail className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                <div className="flex flex-col gap-1">
                  <a
                    href={`mailto:${PRIMARY_EMAIL}`}
                    className="hover:text-primary transition-colors break-all"
                  >
                    {PRIMARY_EMAIL}
                  </a>
                  {SECONDARY_EMAIL && (
                    <a
                      href={`mailto:${SECONDARY_EMAIL}`}
                      className="hover:text-primary transition-colors break-all"
                    >
                      {SECONDARY_EMAIL}
                    </a>
                  )}
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-800 pt-8 mt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-slate-500">
            &copy; {new Date().getFullYear()} W3AppDevelopers. All rights
            reserved.
          </p>
          <p className="text-sm text-slate-600">
            Leading Web Design Company in Erode, Tamil Nadu
          </p>
        </div>
      </div>
    </footer>
  );
}
