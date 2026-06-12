import { useGetAdminStats } from "@workspace/api-client-react";
import { Card, CardContent } from "@/components/ui/card";
import {
  Users, FileText, CheckCircle, Clock,
  Package, Wrench, UserCheck, FolderOpen, TrendingUp
} from "lucide-react";
import { Skeleton } from "@/components/ui/skeleton";
import { Link } from "wouter";

export default function AdminDashboard() {
  const { data: stats, isLoading } = useGetAdminStats({
    request: {
      headers: { Authorization: `Bearer ${localStorage.getItem("adminToken")}` }
    }
  });

  if (isLoading) {
    return (
      <div className="space-y-6">
        <h1 className="text-3xl font-bold text-slate-900 mb-8">Dashboard Overview</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {[1, 2, 3, 4, 5, 6, 7, 8].map(i => (
            <Skeleton key={i} className="h-28 rounded-xl" />
          ))}
        </div>
      </div>
    );
  }

  const statCards = [
    {
      title: "Contact Inquiries",
      value: stats?.totalContacts ?? 0,
      icon: Users,
      color: "text-blue-600",
      bg: "bg-blue-50",
      iconBg: "bg-blue-100",
      href: "/admin/contacts",
      description: "Total form submissions",
    },
    {
      title: "Total Blogs",
      value: stats?.totalBlogs ?? 0,
      icon: FileText,
      color: "text-purple-600",
      bg: "bg-purple-50",
      iconBg: "bg-purple-100",
      href: "/admin/blogs",
      description: "All blog posts",
    },
    {
      title: "Published Blogs",
      value: stats?.publishedBlogs ?? 0,
      icon: CheckCircle,
      color: "text-green-600",
      bg: "bg-green-50",
      iconBg: "bg-green-100",
      href: "/admin/blogs",
      description: "Live on website",
    },
    {
      title: "Draft Blogs",
      value: stats?.draftBlogs ?? 0,
      icon: Clock,
      color: "text-amber-600",
      bg: "bg-amber-50",
      iconBg: "bg-amber-100",
      href: "/admin/blogs",
      description: "Unpublished drafts",
    },
    {
      title: "Total Products",
      value: stats?.totalProducts ?? 24,
      icon: Package,
      color: "text-orange-600",
      bg: "bg-orange-50",
      iconBg: "bg-orange-100",
      href: "/admin/products",
      description: "Software products listed",
    },
    {
      title: "Total Services",
      value: stats?.totalServices ?? 9,
      icon: Wrench,
      color: "text-cyan-600",
      bg: "bg-cyan-50",
      iconBg: "bg-cyan-100",
      href: "/services",
      description: "Services offered",
    },
    {
      title: "Clients",
      value: stats?.totalClients ?? 0,
      icon: UserCheck,
      color: "text-indigo-600",
      bg: "bg-indigo-50",
      iconBg: "bg-indigo-100",
      href: "/admin",
      description: "Registered clients",
    },
    {
      title: "Projects",
      value: stats?.totalProjects ?? 0,
      icon: FolderOpen,
      color: "text-rose-600",
      bg: "bg-rose-50",
      iconBg: "bg-rose-100",
      href: "/admin",
      description: "Active projects",
    },
  ];

  const quickLinks = [
    { label: "Manage Blogs", href: "/admin/blogs", icon: FileText, desc: "Create, edit and publish blog posts" },
    { label: "View Contacts", href: "/admin/contacts", icon: Users, desc: "Review contact form submissions" },
    { label: "Manage Products", href: "/admin/products", icon: Package, desc: "Update product listings and details" },
    { label: "Settings", href: "/admin/settings", icon: TrendingUp, desc: "Configure site settings" },
  ];

  return (
    <div>
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-3xl font-bold text-slate-900">Dashboard Overview</h1>
          <p className="text-slate-500 text-sm mt-1">Welcome back! Here's what's happening on your site.</p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 mb-8">
        {statCards.map((stat, i) => (
          <Link key={i} href={stat.href}>
            <Card className="border-none shadow-sm hover:shadow-md transition-shadow cursor-pointer">
              <CardContent className="p-5">
                <div className="flex items-start justify-between mb-3">
                  <div className={`w-11 h-11 rounded-xl flex items-center justify-center shrink-0 ${stat.iconBg}`}>
                    <stat.icon className={`w-5 h-5 ${stat.color}`} />
                  </div>
                  <span className="text-3xl font-bold text-slate-900">{stat.value}</span>
                </div>
                <p className="font-semibold text-slate-700 text-sm">{stat.title}</p>
                <p className="text-xs text-slate-400 mt-0.5">{stat.description}</p>
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {quickLinks.map((link, i) => (
          <Link key={i} href={link.href}>
            <div className="bg-white border rounded-xl p-5 hover:border-primary hover:shadow-sm transition-all cursor-pointer group">
              <link.icon className="w-6 h-6 text-slate-400 group-hover:text-primary mb-3 transition-colors" />
              <h3 className="font-semibold text-slate-800 text-sm mb-1">{link.label}</h3>
              <p className="text-xs text-slate-400">{link.desc}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
