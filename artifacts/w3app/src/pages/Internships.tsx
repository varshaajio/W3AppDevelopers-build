import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useForm } from "react-hook-form";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { useToast } from "@/hooks/use-toast";
import { CheckCircle2, Clock, Award, BookOpen, Cpu, Bot, Globe, Layers, Zap } from "lucide-react";

const programs = [
  "Web Development",
  "App Development",
  "Digital Marketing",
  "Graphic Design",
  "AI Agent Development",
  "Software Development",
  "WordPress Development",
  "SaaS Development",
];

const aiAgentTools = [
  { name: "LangChain", icon: Layers, desc: "Build LLM-powered agent pipelines and RAG applications" },
  { name: "AutoGen", icon: Bot, desc: "Multi-agent conversation frameworks from Microsoft" },
  { name: "CrewAI", icon: Cpu, desc: "Collaborative AI agent teams for complex tasks" },
  { name: "n8n", icon: Zap, desc: "Low-code workflow automation with AI nodes" },
  { name: "Make.com", icon: Globe, desc: "Visual automation and AI integration platform" },
  { name: "OpenAI Agents SDK", icon: BookOpen, desc: "Build production AI agents with OpenAI's toolset" },
];

const benefits = [
  "Hands-on real project experience",
  "Mentorship from industry professionals",
  "Certificate of completion",
  "Letter of recommendation",
  "Performance-based stipend",
  "Job placement assistance",
  "Flexible online / hybrid schedule",
  "Portfolio-ready project deliverables",
];

export default function Internships() {
  const { toast } = useToast();
  const form = useForm({
    defaultValues: { name: "", email: "", phone: "", program: "", message: "" }
  });

  const onSubmit = (data: any) => {
    toast({
      title: "Application Submitted!",
      description: "We have received your internship application. Our team will contact you within 2 business days.",
    });
    form.reset();
  };

  return (
    <div className="w-full">
      {/* Hero */}
      <section className="bg-slate-950 text-white py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,_var(--tw-gradient-stops))] from-primary/20 via-slate-950 to-slate-950" />
        <div className="container mx-auto px-4 relative z-10 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <span className="inline-block bg-primary/20 text-primary border border-primary/30 rounded-full px-4 py-1 text-sm font-medium mb-4">
              Internship & Training Programs
            </span>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">Launch Your Tech Career</h1>
            <p className="text-xl text-slate-300 max-w-2xl mx-auto">
              Join W3AppDevelopers' hands-on internship programs. Work on real projects, learn from industry experts, and build a portfolio that gets you hired.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Available Programs + Apply Form */}
      <section className="py-24 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold text-slate-900 mb-2">Available Programs</h2>
              <p className="text-slate-500 mb-6">Choose from our industry-aligned training tracks</p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
                {programs.map((prog, i) => (
                  <Card key={i} className="bg-white border-slate-200 hover:border-primary/40 hover:shadow-sm transition-all">
                    <CardContent className="p-4 flex items-center gap-3">
                      <div className="w-2 h-2 rounded-full bg-primary shrink-0" />
                      <h4 className="font-semibold text-sm text-slate-800">{prog}</h4>
                    </CardContent>
                  </Card>
                ))}
              </div>

              <h3 className="text-xl font-bold text-slate-900 mb-4">Program Details</h3>
              <ul className="space-y-3 text-slate-600 mb-8">
                <li className="flex items-center gap-2"><Clock className="w-4 h-4 text-primary shrink-0" /><span><strong>Duration:</strong> 30 / 45 / 60 Days (Online & Hybrid)</span></li>
                <li className="flex items-center gap-2"><Award className="w-4 h-4 text-primary shrink-0" /><span><strong>Stipend:</strong> Performance-based</span></li>
                <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-primary shrink-0" /><span><strong>Perks:</strong> Certificate, Real Projects, Mentorship</span></li>
              </ul>

              <h3 className="text-xl font-bold text-slate-900 mb-4">Benefits</h3>
              <div className="grid grid-cols-1 gap-2">
                {benefits.map((b, i) => (
                  <div key={i} className="flex items-center gap-2 text-slate-600 text-sm">
                    <CheckCircle2 className="w-4 h-4 text-green-500 shrink-0" />
                    {b}
                  </div>
                ))}
              </div>
            </div>

            <div>
              <Card className="shadow-xl border-none">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold text-slate-900 mb-2">Apply Now</h3>
                  <p className="text-slate-500 text-sm mb-6">Fill in your details and we'll get back to you within 48 hours.</p>
                  <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                      <FormField control={form.control} name="name" render={({ field }) => (
                        <FormItem>
                          <FormLabel>Full Name</FormLabel>
                          <FormControl><Input placeholder="Your full name" {...field} /></FormControl>
                        </FormItem>
                      )} />
                      <div className="grid grid-cols-2 gap-4">
                        <FormField control={form.control} name="email" render={({ field }) => (
                          <FormItem>
                            <FormLabel>Email</FormLabel>
                            <FormControl><Input type="email" placeholder="your@email.com" {...field} /></FormControl>
                          </FormItem>
                        )} />
                        <FormField control={form.control} name="phone" render={({ field }) => (
                          <FormItem>
                            <FormLabel>Phone</FormLabel>
                            <FormControl><Input placeholder="+91 XXXXXXXXXX" {...field} /></FormControl>
                          </FormItem>
                        )} />
                      </div>
                      <FormField control={form.control} name="program" render={({ field }) => (
                        <FormItem>
                          <FormLabel>Select Program</FormLabel>
                          <Select onValueChange={field.onChange} defaultValue={field.value}>
                            <FormControl>
                              <SelectTrigger><SelectValue placeholder="Choose a program" /></SelectTrigger>
                            </FormControl>
                            <SelectContent>
                              {programs.map(p => <SelectItem key={p} value={p}>{p}</SelectItem>)}
                            </SelectContent>
                          </Select>
                        </FormItem>
                      )} />
                      <FormField control={form.control} name="message" render={({ field }) => (
                        <FormItem>
                          <FormLabel>Message / Cover Letter</FormLabel>
                          <FormControl>
                            <Textarea placeholder="Tell us about yourself, your background, and why you want to join..." className="min-h-[100px]" {...field} />
                          </FormControl>
                        </FormItem>
                      )} />
                      <Button type="submit" className="w-full h-12 text-lg rounded-full mt-4">Submit Application</Button>
                    </form>
                  </Form>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* AI Agent Internship Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <span className="inline-block bg-primary/10 text-primary rounded-full px-4 py-1 text-sm font-medium mb-4">
              Specialized Track
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">AI Agent Development Internship</h2>
            <p className="text-slate-500 max-w-2xl mx-auto text-lg">
              An AI agent is a smart system that senses, thinks, and acts to achieve goals autonomously. Learn to build production-ready AI agents using the most in-demand tools in the industry.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            {aiAgentTools.map((tool, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <Card className="border-slate-200 hover:border-primary/40 hover:shadow-md transition-all h-full">
                  <CardContent className="p-6">
                    <div className="w-12 h-12 rounded-xl bg-orange-50 flex items-center justify-center mb-4">
                      <tool.icon className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="font-bold text-slate-800 mb-2">{tool.name}</h3>
                    <p className="text-slate-500 text-sm">{tool.desc}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          <div className="bg-slate-950 rounded-3xl p-8 md:p-12 text-white">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-2xl md:text-3xl font-bold mb-4">What You Will Build</h3>
                <ul className="space-y-3">
                  {[
                    "AI customer service chatbots with memory",
                    "RAG (Retrieval Augmented Generation) pipelines",
                    "Multi-agent research and writing assistants",
                    "Automated lead generation & email agents",
                    "n8n & Make.com AI workflow automations",
                    "API-connected autonomous business agents",
                  ].map((item, i) => (
                    <li key={i} className="flex items-center gap-3 text-slate-300 text-sm">
                      <CheckCircle2 className="w-4 h-4 text-primary shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="bg-slate-800 rounded-2xl p-6">
                <h4 className="font-bold text-lg mb-4 text-primary">Program Highlights</h4>
                <div className="space-y-4">
                  {[
                    { label: "Duration", value: "30 / 45 / 60 Days" },
                    { label: "Mode", value: "Online / Hybrid" },
                    { label: "Tools Covered", value: "LangChain, AutoGen, CrewAI, n8n, Make.com" },
                    { label: "Outcome", value: "Build & deploy 2–3 real AI agent projects" },
                    { label: "Certificate", value: "Verified completion certificate" },
                  ].map((item, i) => (
                    <div key={i} className="flex justify-between items-start gap-4 text-sm border-b border-slate-700 pb-3 last:border-0">
                      <span className="text-slate-400">{item.label}</span>
                      <span className="text-white font-medium text-right">{item.value}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-primary text-white text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-4">Ready to Start Your Journey?</h2>
          <p className="text-white/80 mb-8 max-w-xl mx-auto">
            Apply now and take the first step towards a successful tech career. Limited seats available each batch.
          </p>
          <a href="#apply">
            <Button size="lg" variant="outline" className="rounded-full h-14 px-10 text-lg text-primary bg-white hover:bg-white/90 border-white">
              Apply for Internship
            </Button>
          </a>
        </div>
      </section>
    </div>
  );
}
