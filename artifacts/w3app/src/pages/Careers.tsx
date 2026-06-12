import { motion } from "framer-motion";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  CheckCircle,
  GraduationCap,
  Award,
  Users,
  Briefcase,
} from "lucide-react";

const internshipPrograms = [
  { title: "Data Science with Python", icon: "🐍", duration: "3–6 Months" },
  {
    title: "Mobile App Development (Android)",
    icon: "📱",
    duration: "3–6 Months",
  },
  { title: "Selenium Testing with Java", icon: "☕", duration: "2–4 Months" },
  { title: "Ethical Hacking", icon: "🔐", duration: "2–4 Months" },
  { title: "Full-Stack Web Development", icon: "💻", duration: "3–6 Months" },
  { title: "DevOps Training", icon: "⚙️", duration: "2–4 Months" },
  { title: "Digital Marketing", icon: "📣", duration: "2–3 Months" },
  { title: "Graphic Design", icon: "🎨", duration: "2–3 Months" },
];

const whyChoose = [
  "Hands-on training with real-time projects",
  "Guidance from industry experts",
  "Upgrade your skills with industry-oriented practical learning",
  "Real-time exposure to live projects",
  "Internship Certificate & Placement Support",
  "Affordable training fees",
];

const eligibility = [
  "B.E / B.Tech students (any branch)",
  "BCA / MCA / M.Sc students",
  "Diploma & Polytechnic students",
  "Final year / Recent graduates",
  "Working professionals seeking upskilling",
];

const roleBasedInternships = [
  {
    role: "AI and Data Scientist",
    icon: "🤖",
    desc: "Combine intelligent algorithms and data analysis to extract insights and enable smart decision-making.",
  },
  {
    role: "AI Engineer",
    icon: "🧠",
    desc: "Design, develop, and deploy intelligent systems that simulate human thinking and automate complex tasks.",
  },
  {
    role: "Android Developer",
    icon: "📱",
    desc: "Create mobile applications for Android devices using Java or Kotlin and tools like Android Studio.",
  },
  {
    role: "Back-End Developer",
    icon: "🖥️",
    desc: "Build and maintain the server-side logic, databases, and APIs that power web and mobile applications.",
  },
  {
    role: "Blockchain Developer",
    icon: "⛓️",
    desc: "Build secure, decentralized applications and smart contracts using blockchain technology.",
  },
  {
    role: "Data Analyst",
    icon: "📊",
    desc: "Transform raw data into meaningful insights to support informed business decisions.",
  },
  {
    role: "Developer Relations",
    icon: "🤝",
    desc: "Build strong relationships between a company and the developer community through support and advocacy.",
  },
  {
    role: "DevOps",
    icon: "⚙️",
    desc: "Combine development and operations to automate and streamline software delivery and infrastructure management.",
  },
  {
    role: "Engineering Manager",
    icon: "👨‍💼",
    desc: "Lead technical teams, combining engineering expertise with leadership to deliver successful projects.",
  },
  {
    role: "Front-End Developer",
    icon: "🎨",
    desc: "Build the visual and interactive parts of a website or app using HTML, CSS, and JavaScript.",
  },
  {
    role: "Full Stack Developer",
    icon: "💻",
    desc: "Build both the front-end and back-end of web applications, handling the entire development process.",
  },
  {
    role: "Game Developer",
    icon: "🎮",
    desc: "Create interactive digital experiences by designing, coding, and testing video games for various platforms.",
  },
  {
    role: "iOS Developer",
    icon: "🍎",
    desc: "Create apps for Apple devices using Swift or Objective-C, focusing on performance, design, and user experience.",
  },
  {
    role: "MLOps",
    icon: "🔄",
    desc: "Integrate machine learning models into production using automated, reliable, and scalable workflows.",
  },
  {
    role: "PostgreSQL Developer",
    icon: "🗄️",
    desc: "Design, develop, and manage databases using PostgreSQL to ensure efficient data storage and retrieval.",
  },
  {
    role: "Product Manager",
    icon: "📋",
    desc: "Drive the vision, development, and success of a product by aligning customer needs with business goals.",
  },
  {
    role: "Quality Assurance",
    icon: "✅",
    desc: "Ensure products meet standards through systematic testing and process improvements.",
  },
  {
    role: "Software Architect",
    icon: "🏗️",
    desc: "Design high-level software solutions, defining system structure and guiding development to meet goals.",
  },
  {
    role: "Technical Writer",
    icon: "✍️",
    desc: "Create clear, concise documentation that explains complex technical information to users and developers.",
  },
  {
    role: "UI/UX Designer",
    icon: "🖌️",
    desc: "Create visually appealing and user-friendly digital experiences that enhance usability and satisfaction.",
  },
];

const skillBasedInternships = [
  {
    skill: "AI Agents",
    icon: "🤖",
    desc: "A smart system that senses, thinks, and acts to achieve goals autonomously.",
  },
  {
    skill: "Angular",
    icon: "🔺",
    desc: "A powerful TypeScript-based framework for building dynamic, single-page web applications.",
  },
  {
    skill: "API Design",
    icon: "🔌",
    desc: "The process of creating clear, consistent, and scalable interfaces for software communication.",
  },
  {
    skill: "ASP.NET Core",
    icon: "🔷",
    desc: "A cross-platform, high-performance framework for building modern web apps and APIs with .NET.",
  },
  {
    skill: "AWS Developer",
    icon: "☁️",
    desc: "Build, deploy, and manage cloud-based applications using Amazon Web Services tools and services.",
  },
  {
    skill: "C++",
    icon: "⚡",
    desc: "A high-performance programming language used for system software, game development, and real-time applications.",
  },
  {
    skill: "Cloudflare",
    icon: "🛡️",
    desc: "A security and performance platform that protects and accelerates websites and applications online.",
  },
  {
    skill: "Code Review",
    icon: "🔍",
    desc: "The practice of examining code to improve quality, catch bugs, and ensure best practices.",
  },
  {
    skill: "Computer Science",
    icon: "🖥️",
    desc: "The study of computers, algorithms, and data to solve real-world problems using technology.",
  },
  {
    skill: "Cybersecurity",
    icon: "🔐",
    desc: "Protect systems and networks by designing and implementing security measures against cyber threats.",
  },
  {
    skill: "Data Structures",
    icon: "📦",
    desc: "Organized ways to store, manage, and access data efficiently for various operations.",
  },
  {
    skill: "Docker",
    icon: "🐳",
    desc: "A platform to build, ship, and run applications in lightweight, portable containers.",
  },
  {
    skill: "Flutter Developer",
    icon: "📱",
    desc: "Build cross-platform mobile, web, and desktop apps using Google's Flutter framework and Dart.",
  },
  {
    skill: "Git & GitHub",
    icon: "🐙",
    desc: "Version control system for tracking code changes and a platform for hosting and collaborating on repositories.",
  },
  {
    skill: "Go (Golang)",
    icon: "🐹",
    desc: "A fast, simple, and efficient programming language designed for building scalable and reliable software.",
  },
  {
    skill: "GraphQL",
    icon: "◼️",
    desc: "Build efficient and flexible APIs using GraphQL to enable precise data fetching and seamless communication.",
  },
  {
    skill: "Java Developer",
    icon: "☕",
    desc: "A programmer who builds, tests, and maintains applications using the Java programming language.",
  },
  {
    skill: "JavaScript",
    icon: "🟡",
    desc: "A lightweight, dynamic scripting language used to create interactive and responsive web pages.",
  },
  {
    skill: "Kubernetes",
    icon: "☸️",
    desc: "Open-source platform for automating deployment, scaling, and management of containerized applications.",
  },
  {
    skill: "Linux",
    icon: "🐧",
    desc: "A free, open-source operating system known for its stability, security, and flexibility.",
  },
  {
    skill: "MongoDB",
    icon: "🍃",
    desc: "A NoSQL database that stores data in flexible, JSON-like documents for high performance and scalability.",
  },
  {
    skill: "Node.js",
    icon: "🟢",
    desc: "A fast, event-driven runtime environment for building scalable server-side applications using JavaScript.",
  },
  {
    skill: "PHP",
    icon: "🐘",
    desc: "A popular server-side scripting language used to build dynamic and interactive web applications.",
  },
  {
    skill: "Prompt Engineering",
    icon: "✨",
    desc: "The art of crafting effective inputs to guide AI models toward accurate and useful responses.",
  },
  {
    skill: "Python",
    icon: "🐍",
    desc: "A versatile, easy-to-read programming language used for web development, data analysis, AI, and automation.",
  },
  {
    skill: "React Developer",
    icon: "⚛️",
    desc: "Build interactive and efficient user interfaces using the React.js library.",
  },
  {
    skill: "React Native",
    icon: "📲",
    desc: "Build cross-platform mobile apps using JavaScript and React for native-like performance on iOS and Android.",
  },
  {
    skill: "Redis",
    icon: "🔴",
    desc: "An in-memory data store used for caching, real-time analytics, and fast key-value data access.",
  },
  {
    skill: "Rust Developer",
    icon: "⚙️",
    desc: "Build safe, fast, and reliable software using the Rust programming language.",
  },
  {
    skill: "Spring Boot",
    icon: "🍃",
    desc: "Build scalable, production-ready Java applications using the Spring Boot framework.",
  },
  {
    skill: "SQL",
    icon: "🗃️",
    desc: "A language used to store, manage, and retrieve data from relational databases.",
  },
  {
    skill: "System Design",
    icon: "🏗️",
    desc: "The process of defining architecture and components of a system to meet specific requirements.",
  },
  {
    skill: "Terraform",
    icon: "🌍",
    desc: "An open-source tool for automating infrastructure provisioning using code.",
  },
  {
    skill: "TypeScript",
    icon: "🔵",
    desc: "A superset of JavaScript that adds static typing for better code quality and developer productivity.",
  },
  {
    skill: "Vue.js",
    icon: "💚",
    desc: "A progressive JavaScript framework for building user interfaces and single-page applications.",
  },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.05 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
};

export default function Careers() {
  return (
    <div className="w-full">
      {/* Hero */}
      <section className="bg-slate-50 py-20 border-b relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div
            className="w-full h-full"
            style={{
              backgroundImage:
                "repeating-linear-gradient(45deg, #FF6028 0, #FF6028 1px, transparent 0, transparent 50%)",
              backgroundSize: "20px 20px",
            }}
          />
        </div>
        <div className="container mx-auto px-4 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <span className="inline-block bg-primary/10 text-primary text-xs font-semibold px-3 py-1 rounded-full mb-4 uppercase tracking-wider">
              Internship & Training
            </span>
            <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
              Internship Programs at W3AppDevelopers
            </h1>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto leading-relaxed">
              At W3AppDevelopers, we offer industry-focused internships designed
              to equip students and professionals with the latest technologies
              and hands-on skills. Our expert-led training and live projects
              ensure you gain practical knowledge and become job-ready.
            </p>
            <div className="flex flex-wrap gap-4 justify-center mt-8">
              <Link href="/contact">
                <Button size="lg" className="rounded-full h-12 px-8">
                  Apply Now
                </Button>
              </Link>
              <a
                href="https://trainingtrains.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button
                  size="lg"
                  variant="outline"
                  className="rounded-full h-12 px-8"
                >
                  Visit TrainingTrains
                </Button>
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Why Choose Our Internship */}
      <section className="py-16 bg-white border-b">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-10"
            >
              <h2 className="text-3xl font-bold text-slate-900 mb-3">
                Why Choose Our Internship?
              </h2>
              <p className="text-slate-600">
                Upgrade your skills with industry-oriented practical learning
                and real-time exposure.
              </p>
            </motion.div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {whyChoose.map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.05 }}
                  className="flex items-start gap-3 bg-slate-50 rounded-xl p-4"
                >
                  <CheckCircle className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                  <span className="text-slate-700">{item}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Internship Programs */}
      <section className="py-16 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-bold text-slate-900 mb-3">
                Internship Programs We Offer
              </h2>
              <p className="text-slate-600">
                Choose from our range of technology and creative programs.
              </p>
            </motion.div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {internshipPrograms.map((prog, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.07 }}
                >
                  <Card className="h-full text-center hover:shadow-lg transition-all duration-300 border-slate-200 group">
                    <CardContent className="p-6">
                      <div className="text-4xl mb-3">{prog.icon}</div>
                      <h3 className="font-bold text-slate-900 text-sm leading-tight mb-2">
                        {prog.title}
                      </h3>
                      <span className="inline-block text-xs bg-primary/10 text-primary rounded-full px-3 py-1 font-medium">
                        {prog.duration}
                      </span>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Role Based Internship */}
      <section className="py-20 bg-white border-t">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-14"
          >
            <span className="inline-block bg-orange-100 text-orange-600 text-xs font-semibold px-3 py-1 rounded-full mb-4 uppercase tracking-wider">
              Choose Your Path
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-3">
              Role Based Internship
            </h2>
            <p className="text-slate-500 max-w-2xl mx-auto">
              Step into your future career with an internship aligned to a
              specific industry role. Gain real-world experience and build the
              skills employers look for.
            </p>
          </motion.div>
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5"
          >
            {roleBasedInternships.map((item, i) => (
              <motion.div key={i} variants={cardVariants}>
                <Card className="h-full group hover:shadow-xl hover:-translate-y-1 transition-all duration-300 border-slate-200 overflow-hidden">
                  <CardContent className="p-5">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-10 h-10 rounded-xl bg-orange-50 flex items-center justify-center text-xl shrink-0 group-hover:scale-110 transition-transform duration-300">
                        {item.icon}
                      </div>
                      <h3 className="font-bold text-slate-900 text-sm leading-tight">
                        {item.role}
                      </h3>
                    </div>
                    <p className="text-xs text-slate-500 leading-relaxed">
                      {item.desc}
                    </p>
                  </CardContent>
                  <div className="h-0.5 bg-gradient-to-r from-orange-400 to-primary scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Skill Based Internship */}
      <section className="py-20 bg-gradient-to-b from-slate-50 to-white border-t">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-14"
          >
            <span className="inline-block bg-primary/10 text-primary text-xs font-semibold px-3 py-1 rounded-full mb-4 uppercase tracking-wider">
              Master a Technology
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-3">
              Skill Based Internship
            </h2>
            <p className="text-slate-500 max-w-2xl mx-auto">
              Deep-dive into a specific technology or tool with focused,
              hands-on training. Build expertise that sets you apart in today's
              competitive job market.
            </p>
          </motion.div>
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-4"
          >
            {skillBasedInternships.map((item, i) => (
              <motion.div key={i} variants={cardVariants}>
                <Card className="h-full group hover:shadow-xl hover:-translate-y-1 transition-all duration-300 border-slate-200 overflow-hidden">
                  <CardContent className="p-5">
                    <div className="text-3xl mb-2 group-hover:scale-110 transition-transform duration-300 inline-block">
                      {item.icon}
                    </div>
                    <h3 className="font-bold text-slate-900 text-sm mb-2">
                      {item.skill}
                    </h3>
                    <p className="text-xs text-slate-500 leading-relaxed">
                      {item.desc}
                    </p>
                  </CardContent>
                  <div className="h-0.5 bg-gradient-to-r from-primary to-blue-400 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Who Can Apply */}
      <section className="py-16 bg-white border-t">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold text-slate-900 mb-4">
                Who Can Apply?
              </h2>
              <p className="text-slate-600 mb-6">
                Our internship programs are open to students and professionals
                across various educational backgrounds:
              </p>
              <div className="space-y-3">
                {eligibility.map((item, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-primary shrink-0" />
                    <span className="text-slate-700">{item}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="bg-primary rounded-3xl p-8 text-white">
                <GraduationCap className="w-10 h-10 mb-4 opacity-80" />
                <h3 className="text-2xl font-bold mb-3">
                  Internship Certificate & Placement Support
                </h3>
                <p className="text-white/80 leading-relaxed mb-6">
                  Upon successful completion, you receive an official internship
                  certificate from W3AppDevelopers. We also provide placement
                  assistance and guidance to help you land your first job.
                </p>
                <div className="flex flex-wrap gap-3">
                  <div className="flex items-center gap-2 bg-white/20 rounded-full px-4 py-1.5 text-sm">
                    <Award className="w-4 h-4" /> Certificate
                  </div>
                  <div className="flex items-center gap-2 bg-white/20 rounded-full px-4 py-1.5 text-sm">
                    <Briefcase className="w-4 h-4" /> Placement Support
                  </div>
                  <div className="flex items-center gap-2 bg-white/20 rounded-full px-4 py-1.5 text-sm">
                    <Users className="w-4 h-4" /> Expert Mentors
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Apply CTA */}
      <section className="py-16 bg-slate-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold mb-4">
              Ready to Start Your Internship?
            </h2>
            <p className="text-slate-400 mb-8 max-w-xl mx-auto">
              Contact us today to enroll in an internship program or send your
              details to get started.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link href="/contact">
                <Button size="lg" className="rounded-full h-12 px-8">
                  Apply Now
                </Button>
              </Link>
              <a href="mailto:digital@w3appdevelopers.com">
                <Button
                  size="lg"
                  variant="outline"
                  className="rounded-full h-12 px-8 border-slate-600 text-slate-300 hover:text-white hover:border-slate-400"
                >
                  admin@w3appdevelopers.com
                </Button>
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
