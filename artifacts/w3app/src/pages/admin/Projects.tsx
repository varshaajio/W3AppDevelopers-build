import { FolderOpen, Clock, CheckCircle2, AlertCircle } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const mockProjects = [
  { name: "Star Textiles — E-Commerce Website", client: "Star Textiles Erode", type: "Ecommerce", startDate: "2026-01-10", deadline: "2026-03-15", status: "Completed", progress: 100 },
  { name: "Kaveri Agro — Product Catalog Portal", client: "Kaveri Agro Products", type: "Web Development", startDate: "2026-02-01", deadline: "2026-04-30", status: "In Progress", progress: 75 },
  { name: "Kongu Tours — Mobile App", client: "Kongu Tours & Travels", type: "App Development", startDate: "2026-03-01", deadline: "2026-06-30", status: "In Progress", progress: 45 },
  { name: "Mani Hospital — HMS", client: "Mani Hospital", type: "Software", startDate: "2026-04-01", deadline: "2026-07-31", status: "In Progress", progress: 30 },
  { name: "Sri Murugan — Social Media Campaign", client: "Sri Murugan Silks", type: "Digital Marketing", startDate: "2026-05-01", deadline: "2026-07-31", status: "In Progress", progress: 60 },
  { name: "Erode Auto — Inventory System", client: "Erode Auto Parts", type: "Software", startDate: "2026-05-15", deadline: "2026-08-15", status: "Planning", progress: 10 },
];

const statusConfig: Record<string, { color: string; icon: React.FC<any> }> = {
  Completed: { color: "bg-green-100 text-green-700", icon: CheckCircle2 },
  "In Progress": { color: "bg-blue-100 text-blue-700", icon: Clock },
  Planning: { color: "bg-amber-100 text-amber-700", icon: AlertCircle },
};

export default function AdminProjects() {
  return (
    <div>
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-3xl font-bold text-slate-900">Projects</h1>
          <p className="text-slate-500 text-sm mt-1">Track and manage all active and completed projects</p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
        {[
          { label: "Total Projects", value: mockProjects.length, icon: FolderOpen, color: "text-rose-600", bg: "bg-rose-50" },
          { label: "In Progress", value: mockProjects.filter(p => p.status === "In Progress").length, icon: Clock, color: "text-blue-600", bg: "bg-blue-50" },
          { label: "Completed", value: mockProjects.filter(p => p.status === "Completed").length, icon: CheckCircle2, color: "text-green-600", bg: "bg-green-50" },
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

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {mockProjects.map((project, i) => {
          const cfg = statusConfig[project.status] ?? statusConfig["Planning"];
          const StatusIcon = cfg.icon;
          return (
            <Card key={i} className="border-none shadow-sm hover:shadow-md transition-shadow">
              <CardContent className="p-5">
                <div className="flex items-start justify-between mb-3">
                  <div className="flex-1">
                    <h3 className="font-semibold text-slate-800 text-sm leading-snug">{project.name}</h3>
                    <p className="text-xs text-slate-500 mt-0.5">{project.client}</p>
                  </div>
                  <span className={`flex items-center gap-1 px-2 py-1 rounded-full text-xs font-medium ml-2 shrink-0 ${cfg.color}`}>
                    <StatusIcon className="w-3 h-3" />
                    {project.status}
                  </span>
                </div>
                <div className="flex items-center gap-3 mb-3 text-xs text-slate-500">
                  <span className="bg-slate-100 px-2 py-0.5 rounded">{project.type}</span>
                  <span>Due: {project.deadline}</span>
                </div>
                <div>
                  <div className="flex justify-between text-xs text-slate-500 mb-1">
                    <span>Progress</span>
                    <span className="font-medium text-slate-700">{project.progress}%</span>
                  </div>
                  <div className="h-1.5 bg-slate-100 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-primary rounded-full transition-all"
                      style={{ width: `${project.progress}%` }}
                    />
                  </div>
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>
    </div>
  );
}
