import { Wrench, ExternalLink } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "wouter";

const services = [
  { id: "web-development", title: "Web Development", desc: "Custom websites and web applications", clients: 35, status: "Active" },
  { id: "ecommerce-development", title: "Ecommerce Development", desc: "Online stores and marketplace solutions", clients: 18, status: "Active" },
  { id: "software-development", title: "Software Development", desc: "Custom business software and ERP systems", clients: 22, status: "Active" },
  { id: "ai-agent-development", title: "AI Agent Development", desc: "Intelligent automation agents for business", clients: 8, status: "Active" },
  { id: "app-development", title: "Mobile App Development", desc: "Android, iOS & cross-platform mobile apps", clients: 15, status: "Active" },
  { id: "wordpress-development", title: "WordPress Development", desc: "Custom WordPress sites and WooCommerce", clients: 28, status: "Active" },
  { id: "saas-development", title: "SaaS Development", desc: "Cloud-based subscription software products", clients: 5, status: "Active" },
  { id: "digital-marketing", title: "Digital Marketing", desc: "SEO, social media, and paid advertising", clients: 40, status: "Active" },
  { id: "graphic-design", title: "Graphic Design", desc: "Logo, branding, and visual design", clients: 55, status: "Active" },
];

export default function AdminServices() {
  return (
    <div>
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-3xl font-bold text-slate-900">Services</h1>
          <p className="text-slate-500 text-sm mt-1">Overview of all services offered by W3AppDevelopers</p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {services.map((service, i) => (
          <Card key={i} className="border-none shadow-sm hover:shadow-md transition-shadow group">
            <CardContent className="p-5">
              <div className="flex items-start justify-between mb-3">
                <div className="w-10 h-10 rounded-xl bg-orange-50 flex items-center justify-center">
                  <Wrench className="w-5 h-5 text-primary" />
                </div>
                <Link href={`/services/${service.id}`}>
                  <ExternalLink className="w-4 h-4 text-slate-400 group-hover:text-primary transition-colors cursor-pointer" />
                </Link>
              </div>
              <h3 className="font-semibold text-slate-800 mb-1">{service.title}</h3>
              <p className="text-xs text-slate-500 mb-3">{service.desc}</p>
              <div className="flex items-center justify-between">
                <span className="text-xs text-slate-400">{service.clients}+ projects delivered</span>
                <span className="px-2 py-0.5 rounded-full bg-green-100 text-green-700 text-xs font-medium">{service.status}</span>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
