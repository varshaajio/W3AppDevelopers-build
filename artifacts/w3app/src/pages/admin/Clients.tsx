import { UserCheck, Globe, Calendar, FolderOpen } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const mockClients = [
  { name: "Star Textiles Erode", domain: "startextiles.in", service: "Web Development + SEO", since: "2024-01", projects: 3, status: "Active" },
  { name: "Kaveri Agro Products", domain: "kaveriagro.com", service: "Ecommerce Development", since: "2024-03", projects: 1, status: "Active" },
  { name: "Sri Murugan Silks", domain: "—", service: "Digital Marketing", since: "2024-06", projects: 2, status: "Active" },
  { name: "Erode Auto Parts", domain: "erodeautoparts.com", service: "Software Development", since: "2025-01", projects: 1, status: "Active" },
  { name: "Kongu Tours & Travels", domain: "kongutours.in", service: "Mobile App + Web", since: "2025-04", projects: 2, status: "Ongoing" },
  { name: "Mani Hospital", domain: "manihospital.com", service: "Hospital Management System", since: "2025-06", projects: 1, status: "Completed" },
];

export default function AdminClients() {
  return (
    <div>
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-3xl font-bold text-slate-900">Clients</h1>
          <p className="text-slate-500 text-sm mt-1">Manage your client relationships and accounts</p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
        {[
          { label: "Total Clients", value: mockClients.length, icon: UserCheck, color: "text-indigo-600", bg: "bg-indigo-50" },
          { label: "Active Clients", value: mockClients.filter(c => c.status === "Active").length, icon: Globe, color: "text-green-600", bg: "bg-green-50" },
          { label: "Total Projects", value: mockClients.reduce((sum, c) => sum + c.projects, 0), icon: FolderOpen, color: "text-orange-600", bg: "bg-orange-50" },
        ].map((s, i) => (
          <Card key={i} className="border-none shadow-sm">
            <CardContent className="p-5 flex items-center gap-4">
              <div className={`w-12 h-12 rounded-xl ${s.bg} flex items-center justify-center`}>
                <s.icon className={`w-5 h-5 ${s.color}`} />
              </div>
              <div>
                <p className="text-2xl font-bold text-slate-900">{s.value}</p>
                <p className="text-sm text-slate-500">{s.label}</p>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <Card className="border-none shadow-sm">
        <CardContent className="p-0">
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead className="bg-slate-50 border-b">
                <tr>
                  {["Client Name", "Domain", "Service", "Client Since", "Projects", "Status"].map(h => (
                    <th key={h} className="text-left px-4 py-3 font-semibold text-slate-600 text-xs uppercase tracking-wider">{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {mockClients.map((client, i) => (
                  <tr key={i} className="border-b last:border-0 hover:bg-slate-50">
                    <td className="px-4 py-3 font-medium text-slate-800">{client.name}</td>
                    <td className="px-4 py-3 text-slate-500">{client.domain !== "—" ? <a href={`https://${client.domain}`} target="_blank" rel="noopener noreferrer" className="hover:text-primary">{client.domain}</a> : "—"}</td>
                    <td className="px-4 py-3 text-slate-600">{client.service}</td>
                    <td className="px-4 py-3 text-slate-500">
                      <div className="flex items-center gap-1"><Calendar className="w-3 h-3" />{client.since}</div>
                    </td>
                    <td className="px-4 py-3">
                      <span className="font-semibold text-slate-800">{client.projects}</span>
                    </td>
                    <td className="px-4 py-3">
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${client.status === "Active" ? "bg-green-100 text-green-700" : client.status === "Ongoing" ? "bg-blue-100 text-blue-700" : "bg-slate-100 text-slate-600"}`}>{client.status}</span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
