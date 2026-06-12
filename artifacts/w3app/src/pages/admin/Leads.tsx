import { Users, Phone, Mail, TrendingUp, Clock, CheckCircle } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const mockLeads = [
  { name: "Raj Kumar", email: "raj@example.com", phone: "+91 98765 43210", service: "Web Development", status: "New", date: "2026-06-04" },
  { name: "Priya Sharma", email: "priya@gmail.com", phone: "+91 87654 32109", service: "AI Agent Development", status: "Contacted", date: "2026-06-03" },
  { name: "Anbu Selvan", email: "anbu@company.com", phone: "+91 76543 21098", service: "Ecommerce Development", status: "Qualified", date: "2026-06-02" },
  { name: "Meena Devi", email: "meena@shop.in", phone: "+91 65432 10987", service: "Digital Marketing", status: "New", date: "2026-06-01" },
  { name: "Suresh Babu", email: "suresh@biz.com", phone: "+91 54321 09876", service: "SaaS Development", status: "Proposal Sent", date: "2026-05-31" },
];

const statusColor: Record<string, string> = {
  New: "bg-blue-100 text-blue-700",
  Contacted: "bg-yellow-100 text-yellow-700",
  Qualified: "bg-green-100 text-green-700",
  "Proposal Sent": "bg-purple-100 text-purple-700",
  Closed: "bg-slate-100 text-slate-700",
};

export default function AdminLeads() {
  return (
    <div>
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-3xl font-bold text-slate-900">Leads</h1>
          <p className="text-slate-500 text-sm mt-1">Manage and track potential clients</p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
        {[
          { label: "Total Leads", value: mockLeads.length, icon: Users, color: "text-blue-600", bg: "bg-blue-50" },
          { label: "New This Week", value: 2, icon: TrendingUp, color: "text-green-600", bg: "bg-green-50" },
          { label: "Pending Follow-up", value: 3, icon: Clock, color: "text-amber-600", bg: "bg-amber-50" },
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
                  {["Name", "Email", "Phone", "Service Interested", "Status", "Date"].map(h => (
                    <th key={h} className="text-left px-4 py-3 font-semibold text-slate-600 text-xs uppercase tracking-wider">{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {mockLeads.map((lead, i) => (
                  <tr key={i} className="border-b last:border-0 hover:bg-slate-50">
                    <td className="px-4 py-3 font-medium text-slate-800">{lead.name}</td>
                    <td className="px-4 py-3 text-slate-500">
                      <a href={`mailto:${lead.email}`} className="flex items-center gap-1 hover:text-primary"><Mail className="w-3 h-3" />{lead.email}</a>
                    </td>
                    <td className="px-4 py-3 text-slate-500">
                      <a href={`tel:${lead.phone}`} className="flex items-center gap-1 hover:text-primary"><Phone className="w-3 h-3" />{lead.phone}</a>
                    </td>
                    <td className="px-4 py-3 text-slate-600">{lead.service}</td>
                    <td className="px-4 py-3">
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${statusColor[lead.status] ?? "bg-slate-100 text-slate-600"}`}>{lead.status}</span>
                    </td>
                    <td className="px-4 py-3 text-slate-400">{lead.date}</td>
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
