import {
  useState,
  useEffect,
  useRef,
  type ReactNode,
} from "react";
import {
  Menu,
  X,
  Mail,
  MapPin,
  Globe,
  Code2,
  Brain,
  Database,
  Server,
  BarChart3,
  Sparkles,
  CheckCircle2,
  ArrowRight,
  ChevronDown,
  MessageCircle,
  Calendar,
  Download,
  ArrowUp,
  Zap,
  Shield,
  Users,
  Clock,
  Target,
  Layers,
  Cpu,
  Monitor,
  Smartphone,
  Search,
  Lock,
  RefreshCw,
  TrendingUp,
  Eye,
  Bot,
  FileText,
  PieChart,
  Activity,
  Phone,
  Building2,
  DollarSign,
  Send,
  ChevronRight,
  Circle,
} from "lucide-react";
import profilePhoto from "./image.png";

// ─── Types ───────────────────────────────────────────────────────────────────

// ─── Data ─────────────────────────────────────────────────────────────────────

/* Client-style project case studies removed until real professional work is available.
const PROJECTS = [
  {
    id: 1,
    title: "AI-Powered Predictive Maintenance Platform",
    category: "AI / Machine Learning",
    problem: "Manufacturing equipment failures were causing costly unplanned downtime.",
    solution: "Built an ML platform that analyses sensor data to predict failures 48 hours in advance.",
    tech: ["Python", "FastAPI", "TensorFlow", "React", "PostgreSQL", "Docker"],
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=600&h=400&fit=crop&auto=format",
    color: "#3B82F6",
    role: "Full-Stack AI Developer",
    features: ["Real-time sensor data ingestion", "LSTM anomaly detection model", "Interactive maintenance dashboard", "Automated alert system", "Historical trend analysis"],
    outcome: "Reduced unplanned downtime by 67% and maintenance costs by 40% within 6 months of deployment.",
  },
  {
    id: 2,
    title: "Machine Health and Anomaly Monitoring Dashboard",
    category: "Data Visualisation",
    problem: "Operations teams lacked real-time visibility into machine health across multiple facilities.",
    solution: "Developed a live monitoring dashboard with anomaly detection and custom alerting rules.",
    tech: ["React", "TypeScript", "Python", "Scikit-learn", "WebSockets", "MongoDB"],
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop&auto=format",
    color: "#8B5CF6",
    role: "Frontend & ML Developer",
    features: ["Live WebSocket data streams", "Isolation Forest anomaly detection", "Multi-facility management", "Custom KPI dashboards", "Export and reporting tools"],
    outcome: "Provided 24/7 operational visibility across 12 facilities, cutting manual inspections by 80%.",
  },
  {
    id: 3,
    title: "Business Management Web Application",
    category: "Web Application",
    problem: "A growing SME was managing operations through disconnected spreadsheets and email.",
    solution: "Built a unified management platform covering inventory, invoicing, staff, and reporting.",
    tech: ["React", "Node.js", "PostgreSQL", "Prisma", "TailwindCSS", "Express.js"],
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop&auto=format",
    color: "#06B6D4",
    role: "Full-Stack Developer",
    features: ["Inventory management system", "Invoice generation and tracking", "Staff attendance module", "Financial reporting dashboard", "Role-based access control"],
    outcome: "Consolidated 9 separate tools into one platform, saving the team 15+ hours per week.",
  },
  {
    id: 4,
    title: "AI Document Question-Answering System",
    category: "Generative AI",
    problem: "Legal and compliance teams spent hours searching large document archives for specific clauses.",
    solution: "Built a RAG-powered QA system allowing natural language queries over thousands of documents.",
    tech: ["Python", "LangChain", "FastAPI", "Hugging Face", "OpenAI API", "ChromaDB"],
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&h=400&fit=crop&auto=format",
    color: "#F59E0B",
    role: "AI / NLP Developer",
    features: ["PDF and DOCX ingestion pipeline", "Vector embedding and retrieval", "Cited response generation", "Multi-document cross-referencing", "Access-controlled document vaults"],
    outcome: "Reduced document search time from hours to under 30 seconds with 94% answer accuracy.",
  },
  {
    id: 5,
    title: "Professional Corporate Website",
    category: "Website Development",
    problem: "An established logistics firm had an outdated website that failed to reflect their capabilities.",
    solution: "Designed and developed a modern, fast, SEO-optimised corporate website with CMS integration.",
    tech: ["Next.js", "TypeScript", "TailwindCSS", "Sanity CMS", "Vercel", "Framer Motion"],
    image: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=600&h=400&fit=crop&auto=format",
    color: "#10B981",
    role: "Frontend Developer & Designer",
    features: ["Responsive multi-page design", "CMS for non-technical editors", "SEO-optimised structure", "Smooth page transitions", "Contact and enquiry forms"],
    outcome: "Achieved 98 PageSpeed score, 3× increase in organic traffic within 3 months of launch.",
  },
  {
    id: 6,
    title: "Data Analytics and Visualisation Platform",
    category: "Data Science",
    problem: "A retail chain could not extract actionable insights from their large sales and inventory data.",
    solution: "Built an interactive analytics platform with automated reports, KPIs, and ML-driven forecasts.",
    tech: ["Python", "FastAPI", "React", "Pandas", "Recharts", "PostgreSQL", "XGBoost"],
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop&auto=format",
    color: "#EF4444",
    role: "Data Science & Full-Stack Developer",
    features: ["Interactive KPI dashboards", "Demand forecasting model", "Inventory optimisation engine", "Automated PDF report generation", "Multi-branch comparisons"],
    outcome: "Improved inventory planning accuracy by 58% and identified ₨2M+ in potential savings.",
  },
];
*/

const TECHNOLOGIES = {
  Frontend: ["React", "Next.js", "TypeScript", "JavaScript", "HTML5", "CSS3", "Tailwind CSS", "Bootstrap", "Figma"],
  Backend: ["Python", "FastAPI", "Node.js", "Express.js", "REST APIs", "Auth Systems"],
  Databases: ["PostgreSQL", "MySQL", "MongoDB", "SQLite", "Prisma"],
  "AI & ML": ["TensorFlow", "PyTorch", "Scikit-learn", "XGBoost", "LightGBM", "Pandas", "NumPy", "OpenCV", "Hugging Face", "LangChain"],
  "Dev & Deploy": ["Git", "GitHub", "Docker", "Google Colab", "Cloud Deploy", "API Integration", "CI/CD"],
};

const PROCESS_STEPS = [
  { num: "01", title: "Discovery", icon: Search, desc: "Understand the business, target users, requirements, project goals, timeline, and expected results." },
  { num: "02", title: "Planning", icon: Target, desc: "Define features, architecture, technologies, project milestones, and a clear delivery plan." },
  { num: "03", title: "Design", icon: Layers, desc: "Create user flows, wireframes, visual interfaces, reusable components, and responsive layouts." },
  { num: "04", title: "Development", icon: Code2, desc: "Build the frontend, backend, database, APIs, AI models, and all required integrations." },
  { num: "05", title: "Testing", icon: CheckCircle2, desc: "Test functionality, performance, responsiveness, security, user experience, and model quality." },
  { num: "06", title: "Deployment", icon: Globe, desc: "Deploy the final product, configure production services, and make the system live." },
  { num: "07", title: "Support", icon: RefreshCw, desc: "Provide documentation, maintenance, improvements, and post-launch technical assistance." },
];

// ─── Hooks ────────────────────────────────────────────────────────────────────

function useInView(threshold = 0.15) {
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) { setInView(true); obs.disconnect(); } }, { threshold });
    obs.observe(el);
    return () => obs.disconnect();
  }, [threshold]);
  return { ref, inView };
}

function useCounter(target: number, inView: boolean) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!inView) return;
    let start = 0;
    const duration = 1800;
    const step = Math.ceil(target / (duration / 16));
    const timer = setInterval(() => {
      start += step;
      if (start >= target) { setCount(target); clearInterval(timer); }
      else setCount(start);
    }, 16);
    return () => clearInterval(timer);
  }, [inView, target]);
  return count;
}

// ─── Sub-components ───────────────────────────────────────────────────────────

function SectionLabel({ children }: { children: ReactNode }) {
  return (
    <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold tracking-widest uppercase mb-4"
      style={{ background: "rgba(59,130,246,0.1)", border: "1px solid rgba(59,130,246,0.3)", color: "#3B82F6" }}>
      <Circle size={6} fill="currentColor" />
      {children}
    </div>
  );
}

function SectionHeading({ children, sub }: { children: ReactNode; sub?: string }) {
  return (
    <div className="mb-12">
      {children}
      {sub && <p className="mt-4 text-lg max-w-2xl mx-auto" style={{ color: "#94A3B8" }}>{sub}</p>}
    </div>
  );
}

function GradientButton({ children, onClick, className = "", href }: { children: ReactNode; onClick?: () => void; className?: string; href?: string }) {
  const style = {
    background: "linear-gradient(135deg, #3B82F6, #8B5CF6)",
    transition: "opacity 0.2s, transform 0.2s",
  };
  const cls = `inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-white ${className}`;
  if (href) return (
    <a href={href} target="_blank" rel="noopener noreferrer" className={cls} style={style}
      onMouseEnter={e => { (e.currentTarget as HTMLElement).style.opacity = "0.9"; (e.currentTarget as HTMLElement).style.transform = "translateY(-1px)"; }}
      onMouseLeave={e => { (e.currentTarget as HTMLElement).style.opacity = "1"; (e.currentTarget as HTMLElement).style.transform = "translateY(0)"; }}>
      {children}
    </a>
  );
  return (
    <button onClick={onClick} className={cls} style={style}
      onMouseEnter={e => { (e.currentTarget as HTMLElement).style.opacity = "0.9"; (e.currentTarget as HTMLElement).style.transform = "translateY(-1px)"; }}
      onMouseLeave={e => { (e.currentTarget as HTMLElement).style.opacity = "1"; (e.currentTarget as HTMLElement).style.transform = "translateY(0)"; }}>
      {children}
    </button>
  );
}

function OutlineButton({ children, onClick, className = "" }: { children: ReactNode; onClick?: () => void; className?: string }) {
  return (
    <button onClick={onClick} className={`inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold transition-all ${className}`}
      style={{ border: "1px solid rgba(255,255,255,0.2)", color: "#F1F5F9", background: "transparent" }}
      onMouseEnter={e => { (e.currentTarget as HTMLElement).style.background = "rgba(255,255,255,0.06)"; }}
      onMouseLeave={e => { (e.currentTarget as HTMLElement).style.background = "transparent"; }}>
      {children}
    </button>
  );
}

// ─── Navbar ───────────────────────────────────────────────────────────────────

function Navbar({ scrolled }: { scrolled: boolean }) {
  const [open, setOpen] = useState(false);

  const navLinks = [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "Services", href: "#services" },
    { label: "Contact", href: "#contact" },
  ];

  const scrollTo = (href: string) => {
    setOpen(false);
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      style={{
        background: scrolled ? "rgba(8, 13, 26, 0.95)" : "transparent",
        backdropFilter: scrolled ? "blur(20px)" : "none",
        borderBottom: scrolled ? "1px solid rgba(255,255,255,0.06)" : "none",
      }}>
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <button onClick={() => scrollTo("#home")} className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg flex items-center justify-center"
            style={{ background: "linear-gradient(135deg, #3B82F6, #8B5CF6)" }}>
            <span className="text-white font-bold text-sm">S</span>
          </div>
          <span className="font-bold text-lg" style={{ fontFamily: "var(--font-display)", color: "#F1F5F9" }}>
            Sadurshan
          </span>
        </button>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map(l => (
            <button key={l.label} onClick={() => scrollTo(l.href)}
              className="text-sm font-medium transition-colors"
              style={{ color: "#94A3B8" }}
              onMouseEnter={e => (e.currentTarget.style.color = "#F1F5F9")}
              onMouseLeave={e => (e.currentTarget.style.color = "#94A3B8")}>
              {l.label}
            </button>
          ))}
        </div>

        {/* CTA + mobile toggle */}
        <div className="flex items-center gap-3">
          <GradientButton className="hidden md:inline-flex text-sm py-2 px-5" onClick={() => scrollTo("#contact")}>
            Start a Project
          </GradientButton>
          <button className="md:hidden p-2 rounded-lg" style={{ color: "#94A3B8" }} onClick={() => setOpen(!open)}>
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden px-6 pb-6" style={{ background: "rgba(8, 13, 26, 0.98)", borderBottom: "1px solid rgba(255,255,255,0.06)" }}>
          {navLinks.map(l => (
            <button key={l.label} onClick={() => scrollTo(l.href)}
              className="w-full text-left py-3 text-sm font-medium border-b"
              style={{ color: "#94A3B8", borderColor: "rgba(255,255,255,0.05)" }}>
              {l.label}
            </button>
          ))}
          <div className="mt-4">
            <GradientButton className="w-full justify-center" onClick={() => scrollTo("#contact")}>
              Start a Project
            </GradientButton>
          </div>
        </div>
      )}
    </nav>
  );
}

// ─── Hero ─────────────────────────────────────────────────────────────────────

function Hero() {
  const scrollTo = (href: string) => document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });

  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden grid-bg"
      style={{ background: "#080D1A" }}>
      {/* Ambient orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute rounded-full" style={{ width: 600, height: 600, top: -200, left: -200, background: "radial-gradient(circle, rgba(59,130,246,0.12) 0%, transparent 70%)" }} />
        <div className="absolute rounded-full" style={{ width: 500, height: 500, bottom: -100, right: -100, background: "radial-gradient(circle, rgba(139,92,246,0.12) 0%, transparent 70%)" }} />
        <div className="absolute rounded-full" style={{ width: 300, height: 300, top: "40%", left: "50%", background: "radial-gradient(circle, rgba(6,182,212,0.08) 0%, transparent 70%)" }} />
      </div>

      <div className="max-w-7xl mx-auto px-6 pt-28 pb-20 grid lg:grid-cols-2 gap-16 items-center w-full">
        {/* Left content */}
        <div className="fade-in-up">
          {/* Availability badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium mb-8"
            style={{ background: "rgba(16,185,129,0.1)", border: "1px solid rgba(16,185,129,0.3)", color: "#10B981" }}>
            <span className="w-2 h-2 rounded-full bg-green-400" style={{ animation: "pulse-dot 2s ease infinite" }} />
            Open to local and international projects
          </div>

          <h1 className="text-4xl sm:text-5xl xl:text-6xl font-bold leading-tight mb-6"
            style={{ fontFamily: "var(--font-display)", color: "#F1F5F9" }}>
            Website and AI Solutions{" "}
            <span className="gradient-text">Built for Real-World Impact</span>
          </h1>

          <p className="text-lg mb-4" style={{ color: "#94A3B8", lineHeight: "1.75" }}>
            I build modern websites, web applications, and AI-powered solutions that show what I can do as a first-time developer.
          </p>
          <p className="text-base mb-10" style={{ color: "#64748B", lineHeight: "1.75" }}>
            I develop polished digital experiences with strong UI, performance, and practical AI features that demonstrate my skills and learning.
          </p>

          <div className="flex flex-wrap gap-4 mb-12">
            <GradientButton className="text-base" onClick={() => scrollTo("#contact")}>
              Start a Project <ArrowRight size={18} />
            </GradientButton>
            <OutlineButton onClick={() => scrollTo("#about")}>
              About My Skills <ChevronDown size={18} />
            </OutlineButton>
          </div>

          {/* Trust points */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            {[
              { icon: Globe, label: "Remote Collaboration" },
              { icon: MessageCircle, label: "Clear Communication" },
              { icon: TrendingUp, label: "Scalable Solutions" },
              { icon: Layers, label: "End-to-End Dev" },
            ].map(({ icon: Icon, label }) => (
              <div key={label} className="flex items-center gap-2 text-sm" style={{ color: "#64748B" }}>
                <Icon size={14} style={{ color: "#3B82F6" }} />
                <span>{label}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Right: professional portrait */}
        <div className="relative flex items-center justify-center float-anim">
          <HeroIllustration />
        </div>
      </div>

      {/* Scroll indicator */}
      <button className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-50 hover:opacity-80 transition-opacity"
        onClick={() => scrollTo("#about")} style={{ color: "#94A3B8" }}>
        <span className="text-xs tracking-widest uppercase">Scroll</span>
        <ChevronDown size={18} style={{ animation: "float 2s ease-in-out infinite" }} />
      </button>
    </section>
  );
}

function HeroIllustration() {
  return (
    <div className="relative w-full max-w-md px-4 sm:px-0">
      <div className="absolute -inset-3 rounded-[2rem] opacity-60 blur-xl"
        style={{ background: "linear-gradient(135deg, rgba(59,130,246,0.35), rgba(139,92,246,0.25), rgba(6,182,212,0.2))" }} />
      <div className="relative overflow-hidden rounded-[2rem] shadow-2xl"
        style={{ border: "1px solid rgba(255,255,255,0.16)", background: "#0D1526" }}>
        <img
          src={profilePhoto}
          alt="Selvakumar Sadurshan"
          className="block h-[520px] w-full object-cover sm:h-[590px]"
          style={{ objectPosition: "center 24%" }}
          fetchPriority="high"
        />
        <div className="absolute inset-x-0 bottom-0 h-40"
          style={{ background: "linear-gradient(to top, rgba(8,13,26,0.92), transparent)" }} />
        <div className="absolute inset-x-0 bottom-0 p-6">
          <p className="text-xl font-bold text-white" style={{ fontFamily: "var(--font-display)" }}>Selvakumar Sadurshan</p>
          <p className="mt-1 text-sm" style={{ color: "#CBD5E1" }}>Website &amp; AI/ML Developer</p>
        </div>
      </div>

      <div className="absolute -left-4 top-8 glass rounded-xl px-4 py-2.5 text-xs font-semibold shadow-xl sm:-left-12"
        style={{ border: "1px solid rgba(139,92,246,0.3)", color: "#C4B5FD" }}>
        <Brain size={14} className="inline mr-1.5" style={{ color: "#8B5CF6" }} />
        AI / ML
      </div>
      <div className="absolute -right-2 bottom-20 glass rounded-xl px-4 py-2.5 text-xs font-semibold shadow-xl sm:-right-10"
        style={{ border: "1px solid rgba(6,182,212,0.3)", color: "#67E8F9" }}>
        <Globe size={14} className="inline mr-1.5" style={{ color: "#06B6D4" }} />
        Sri Lanka
      </div>
      <div className="absolute -right-1 top-6 glass rounded-xl px-3 py-2 text-xs font-semibold shadow-xl sm:-right-8"
        style={{ border: "1px solid rgba(16,185,129,0.3)", color: "#6EE7B7" }}>
        <Zap size={12} className="inline mr-1" style={{ color: "#10B981" }} />
        Available
      </div>
    </div>
  );
}

// ─── Stats ────────────────────────────────────────────────────────────────────

function Stats() {
  const { ref, inView } = useInView();
  const t = useCounter(30, inView);
  const m = useCounter(12, inView);

  return (
    <section ref={ref} className="py-16" style={{ background: "rgba(13,21,38,0.8)", borderTop: "1px solid rgba(255,255,255,0.05)", borderBottom: "1px solid rgba(255,255,255,0.05)" }}>
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {[
            { val: "Campus", label: "Project Experience", col: "#3B82F6" },
            { val: `${t}+`, label: "Technologies Used", col: "#8B5CF6" },
            { val: `${m}+`, label: "AI/ML Models Developed", col: "#06B6D4" },
            { val: "🌍", label: "First Portfolio Projects", col: "#10B981" },
          ].map(({ val, label, col }) => (
            <div key={label} className="py-4">
              <div className="text-4xl font-bold mb-2" style={{ color: col, fontFamily: "var(--font-display)" }}>{val}</div>
              <div className="text-sm" style={{ color: "#64748B" }}>{label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── About ────────────────────────────────────────────────────────────────────

function About() {
  const { ref, inView } = useInView();
  const cards = [
    { icon: Users, title: "User-Centered Development", desc: "Every decision is built around clear UI, intuitive interactions, and smooth user flow." },
    { icon: Cpu, title: "Modern Technologies", desc: "Using current tools and frameworks to build clean, maintainable websites and applications." },
    { icon: Brain, title: "AI & Automation", desc: "Building practical AI features and learning systems that enhance real user experiences." },
    { icon: Globe, title: "Growing Experience", desc: "Developing projects that demonstrate continuous learning and technical progress." },
  ];

  return (
    <section id="about" className="py-28" style={{ background: "#080D1A" }}>
      <div className="max-w-7xl mx-auto px-6">
        <div ref={ref} className="grid lg:grid-cols-2 gap-16 items-center"
          style={{ opacity: inView ? 1 : 0, transform: inView ? "none" : "translateY(30px)", transition: "all 0.6s ease" }}>
          {/* Left */}
          <div>
            <SectionLabel>About Me</SectionLabel>
            <h2 className="text-3xl sm:text-4xl font-bold mb-6" style={{ fontFamily: "var(--font-display)", color: "#F1F5F9" }}>
              Turning Ideas into{" "}
              <span className="gradient-text">Reliable Digital Products</span>
            </h2>
            <p className="text-base mb-5 leading-relaxed" style={{ color: "#94A3B8" }}>
              I am a Website and AI/ML Developer focused on building practical, user-friendly digital products. I develop websites, web applications, intelligent automation systems, dashboards, APIs, and AI features to showcase my growing skills.
            </p>
            <p className="text-base mb-8 leading-relaxed" style={{ color: "#94A3B8" }}>
              My goal is to build polished, professional work as I learn, grow, and prepare a strong first-time portfolio.
            </p>
            <div className="flex items-center gap-2 mb-8" style={{ color: "#64748B" }}>
              <MapPin size={16} style={{ color: "#3B82F6" }} />
              <span className="text-sm">Based in Sri Lanka — available for projects worldwide</span>
            </div>
            <div className="flex flex-wrap gap-3">
              <GradientButton onClick={() => document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" })}>
                Start a Project
              </GradientButton>
              <a href={`${import.meta.env.BASE_URL}cv.pdf`} download="Selvakumar-Sadurshan-CV.pdf" className="inline-flex items-center gap-2 px-5 py-3 rounded-xl text-sm font-medium transition-all"
                style={{ border: "1px solid rgba(255,255,255,0.15)", color: "#94A3B8" }}
                onMouseEnter={e => (e.currentTarget as HTMLElement).style.borderColor = "rgba(59,130,246,0.5)"}
                onMouseLeave={e => (e.currentTarget as HTMLElement).style.borderColor = "rgba(255,255,255,0.15)"}>
                <Download size={16} /> Download CV
              </a>
            </div>
          </div>

          {/* Right: feature cards */}
          <div className="grid grid-cols-2 gap-4">
            {cards.map(({ icon: Icon, title, desc }) => (
              <div key={title} className="glass rounded-2xl p-5 transition-all duration-300"
                style={{ border: "1px solid rgba(255,255,255,0.06)" }}
                onMouseEnter={e => { (e.currentTarget as HTMLElement).style.borderColor = "rgba(59,130,246,0.3)"; (e.currentTarget as HTMLElement).style.transform = "translateY(-3px)"; }}
                onMouseLeave={e => { (e.currentTarget as HTMLElement).style.borderColor = "rgba(255,255,255,0.06)"; (e.currentTarget as HTMLElement).style.transform = "translateY(0)"; }}>
                <div className="w-10 h-10 rounded-xl flex items-center justify-center mb-4" style={{ background: "linear-gradient(135deg, rgba(59,130,246,0.2), rgba(139,92,246,0.2))" }}>
                  <Icon size={20} style={{ color: "#3B82F6" }} />
                </div>
                <h3 className="font-semibold text-sm mb-2" style={{ color: "#F1F5F9", fontFamily: "var(--font-display)" }}>{title}</h3>
                <p className="text-xs leading-relaxed" style={{ color: "#64748B" }}>{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── Services ─────────────────────────────────────────────────────────────────

function Services() {
  const { ref, inView } = useInView();

  const services = [
    {
      icon: Monitor, title: "Website Development", color: "#3B82F6",
      desc: "Modern, fast, responsive, and SEO-friendly websites designed for businesses, professionals, startups, and organizations.",
      items: ["Business & corporate websites", "Portfolio & landing pages", "E-commerce interfaces", "Educational websites", "Website redesign & maintenance"],
    },
    {
      icon: Layers, title: "Web Application Development", color: "#8B5CF6",
      desc: "Custom web platforms that help businesses manage operations, users, information, and services.",
      items: ["Admin dashboards & portals", "Booking & management systems", "Reporting platforms", "REST APIs & database integration", "Authentication systems"],
    },
    {
      icon: Brain, title: "AI & Machine Learning", color: "#06B6D4",
      desc: "Intelligent systems that analyse data, automate processes, detect patterns, and support better decisions.",
      items: ["Predictive analytics & forecasting", "Classification & regression models", "Anomaly & fraud detection", "Computer vision & NLP", "AI-powered automation"],
    },
    {
      icon: Bot, title: "Generative AI Solutions", color: "#F59E0B",
      desc: "Custom applications powered by large language models and intelligent information-retrieval systems.",
      items: ["AI chatbots & assistants", "Document QA with RAG", "Knowledge-base systems", "AI API integration", "Automated report generation"],
    },
    {
      icon: BarChart3, title: "Data Science & Analytics", color: "#10B981",
      desc: "Transforming raw data into understandable insights, reports, visualisations, and business decisions.",
      items: ["Exploratory data analysis", "Feature engineering & model evaluation", "Business dashboards", "Data visualisation", "Performance reporting"],
    },
    {
      icon: Server, title: "Backend & API Development", color: "#EF4444",
      desc: "Secure and scalable backend systems that power websites, applications, dashboards, and AI products.",
      items: ["FastAPI & Node.js backends", "Database design & REST APIs", "Authentication & security", "Third-party integrations", "Cloud-ready architecture"],
    },
  ];

  return (
    <section id="services" className="py-28 grid-bg" style={{ background: "#0A0F1E" }}>
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <SectionLabel>What I Do</SectionLabel>
          <h2 className="text-3xl sm:text-4xl font-bold" style={{ fontFamily: "var(--font-display)", color: "#F1F5F9" }}>
            Services I <span className="gradient-text">Provide</span>
          </h2>
          <p className="mt-4 text-lg max-w-2xl mx-auto" style={{ color: "#94A3B8" }}>
            End-to-end digital development from concept to deployment — websites, web apps, AI systems, and everything in between.
          </p>
        </div>

        <div ref={ref} className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
          style={{ opacity: inView ? 1 : 0, transition: "opacity 0.6s ease, transform 0.6s ease", transform: inView ? "none" : "translateY(20px)" }}>
          {services.map(({ icon: Icon, title, color, desc, items }) => (
            <div key={title} className="glass rounded-2xl p-6 group transition-all duration-300"
              style={{ border: "1px solid rgba(255,255,255,0.06)" }}
              onMouseEnter={e => { (e.currentTarget as HTMLElement).style.borderColor = `${color}40`; (e.currentTarget as HTMLElement).style.transform = "translateY(-4px)"; }}
              onMouseLeave={e => { (e.currentTarget as HTMLElement).style.borderColor = "rgba(255,255,255,0.06)"; (e.currentTarget as HTMLElement).style.transform = "translateY(0)"; }}>
              <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-5" style={{ background: `${color}18`, border: `1px solid ${color}30` }}>
                <Icon size={22} style={{ color }} />
              </div>
              <h3 className="font-bold text-lg mb-3" style={{ fontFamily: "var(--font-display)", color: "#F1F5F9" }}>{title}</h3>
              <p className="text-sm mb-5 leading-relaxed" style={{ color: "#64748B" }}>{desc}</p>
              <ul className="space-y-2">
                {items.map(item => (
                  <li key={item} className="flex items-center gap-2 text-sm" style={{ color: "#94A3B8" }}>
                    <CheckCircle2 size={13} style={{ color, flexShrink: 0 }} />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── AI/ML Solutions ──────────────────────────────────────────────────────────

function AIMLSection() {
  const { ref, inView } = useInView();

  const workflow = ["Data Collection", "Data Processing", "Model Development", "Evaluation", "Deployment", "Monitoring"];
  const solutions = [
    "Predictive Maintenance", "Anomaly & Fraud Detection", "Demand Forecasting", "Customer Behaviour Analysis",
    "Image Classification", "Document Intelligence", "Recommendation Systems", "Intelligent Automation",
    "Health Monitoring Systems", "Decision-Support Platforms",
  ];

  return (
    <section id="ai-ml" className="py-28" style={{ background: "#080D1A" }}>
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <SectionLabel>AI & Machine Learning</SectionLabel>
          <h2 className="text-3xl sm:text-4xl font-bold" style={{ fontFamily: "var(--font-display)", color: "#F1F5F9" }}>
            Intelligent Solutions for <span className="gradient-text">Complex Problems</span>
          </h2>
        </div>

        <div ref={ref} className="grid lg:grid-cols-2 gap-16 items-center"
          style={{ opacity: inView ? 1 : 0, transition: "all 0.6s ease", transform: inView ? "none" : "translateY(20px)" }}>
          {/* Workflow */}
          <div>
            <h3 className="font-semibold mb-8 text-lg" style={{ color: "#94A3B8" }}>AI Development Workflow</h3>
            <div className="relative pl-8">
              {workflow.map((step, i) => (
                <div key={step} className="relative pb-6 last:pb-0">
                  {i < workflow.length - 1 && (
                    <div className="absolute left-0 top-6 bottom-0 w-0.5" style={{ background: "linear-gradient(to bottom, #3B82F6, #8B5CF6)", opacity: 0.3 }} />
                  )}
                  <div className="flex items-center gap-4">
                    <div className="w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0 relative z-10"
                      style={{ background: "linear-gradient(135deg, #3B82F6, #8B5CF6)", color: "white", fontFamily: "var(--font-mono)" }}>
                      {i + 1}
                    </div>
                    <div className="glass rounded-xl px-4 py-3 flex-1" style={{ border: "1px solid rgba(59,130,246,0.15)" }}>
                      <span className="font-semibold text-sm" style={{ color: "#F1F5F9" }}>{step}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Solutions + philosophy */}
          <div>
            <div className="glass rounded-2xl p-6 mb-6" style={{ border: "1px solid rgba(139,92,246,0.2)" }}>
              <p className="text-base leading-relaxed mb-0 italic" style={{ color: "#94A3B8" }}>
                "AI should solve meaningful problems—not simply exist as a technical feature. I develop AI systems with a focus on accuracy, explainability, reliability, scalability, and practical business value."
              </p>
            </div>
            <h3 className="font-semibold mb-4 text-sm tracking-widest uppercase" style={{ color: "#64748B" }}>Example AI/ML Solutions</h3>
            <div className="flex flex-wrap gap-2 mb-8">
              {solutions.map(s => (
                <span key={s} className="tech-badge px-3 py-1.5 rounded-full text-xs font-medium"
                  style={{ background: "rgba(139,92,246,0.1)", border: "1px solid rgba(139,92,246,0.25)", color: "#C4B5FD" }}>
                  {s}
                </span>
              ))}
            </div>
            <GradientButton onClick={() => document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" })}>
              Discuss an AI Project <ArrowRight size={16} />
            </GradientButton>
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── Web Dev Section ──────────────────────────────────────────────────────────

function WebDevSection() {
  const benefits = [
    { icon: Eye, label: "Professional Visual Design" },
    { icon: Smartphone, label: "Mobile-Responsive Layouts" },
    { icon: Zap, label: "Fast Loading Speed" },
    { icon: Search, label: "SEO-Friendly Structure" },
    { icon: Users, label: "Clear User Experience" },
    { icon: Lock, label: "Secure Development" },
    { icon: TrendingUp, label: "Scalable Architecture" },
    { icon: FileText, label: "Easy Content Management" },
    { icon: Sparkles, label: "Modern Animations" },
    { icon: Globe, label: "Cross-Browser Compatible" },
  ];

  return (
    <section id="web-dev" className="py-28 grid-bg" style={{ background: "#0A0F1E" }}>
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Browser mockup */}
          <div className="float-anim">
            <div className="glass rounded-2xl overflow-hidden shadow-2xl" style={{ border: "1px solid rgba(59,130,246,0.2)" }}>
              {/* Browser bar */}
              <div className="flex items-center gap-2 px-4 py-3" style={{ background: "rgba(0,0,0,0.4)", borderBottom: "1px solid rgba(255,255,255,0.05)" }}>
                <div className="w-3 h-3 rounded-full" style={{ background: "#EF4444" }} />
                <div className="w-3 h-3 rounded-full" style={{ background: "#F59E0B" }} />
                <div className="w-3 h-3 rounded-full" style={{ background: "#10B981" }} />
                <div className="flex-1 mx-4 h-6 rounded-lg flex items-center px-3" style={{ background: "rgba(255,255,255,0.05)" }}>
                  <span className="text-xs" style={{ color: "#64748B", fontFamily: "var(--font-mono)" }}>https://sadurshan.dev</span>
                </div>
              </div>
              {/* Page preview */}
              <div className="p-4">
                <div className="rounded-xl overflow-hidden" style={{ background: "linear-gradient(135deg, #0D1526, #1E1040)" }}>
                  <div className="px-6 py-8">
                    <div className="h-4 w-3/4 rounded-full mb-3" style={{ background: "rgba(59,130,246,0.3)" }} />
                    <div className="h-3 w-full rounded-full mb-2" style={{ background: "rgba(255,255,255,0.08)" }} />
                    <div className="h-3 w-5/6 rounded-full mb-6" style={{ background: "rgba(255,255,255,0.06)" }} />
                    <div className="grid grid-cols-3 gap-3 mb-4">
                      {[1, 2, 3].map(i => (
                        <div key={i} className="rounded-lg p-3" style={{ background: "rgba(255,255,255,0.05)" }}>
                          <div className="h-8 w-8 rounded-lg mb-2 mx-auto" style={{ background: `linear-gradient(135deg, ${i === 1 ? "#3B82F6" : i === 2 ? "#8B5CF6" : "#06B6D4"}, ${i === 1 ? "#8B5CF6" : i === 2 ? "#06B6D4" : "#3B82F6"})` }} />
                          <div className="h-2 rounded-full" style={{ background: "rgba(255,255,255,0.1)" }} />
                        </div>
                      ))}
                    </div>
                    <div className="h-8 w-40 rounded-xl" style={{ background: "linear-gradient(135deg, #3B82F6, #8B5CF6)" }} />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Content */}
          <div>
            <SectionLabel>Website Development</SectionLabel>
            <h2 className="text-3xl sm:text-4xl font-bold mb-6" style={{ fontFamily: "var(--font-display)", color: "#F1F5F9" }}>
              Web Experiences Designed to{" "}
              <span className="gradient-text">Convert and Perform</span>
            </h2>
            <p className="text-base mb-8 leading-relaxed" style={{ color: "#94A3B8" }}>
              Whether you need a professional company website, a personal portfolio, a startup landing page, or a complete web application, I can help you plan, design, develop, test, and launch it.
            </p>
            <div className="grid grid-cols-2 gap-3 mb-8">
              {benefits.map(({ icon: Icon, label }) => (
                <div key={label} className="flex items-center gap-2 text-sm" style={{ color: "#94A3B8" }}>
                  <Icon size={14} style={{ color: "#3B82F6", flexShrink: 0 }} />
                  {label}
                </div>
              ))}
            </div>
            <GradientButton onClick={() => document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" })}>
              Start Your Website <ArrowRight size={16} />
            </GradientButton>
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── Projects ─────────────────────────────────────────────────────────────────

/* Projects section removed until genuine campus work is ready to present.
function Projects() {
  const { ref, inView } = useInView();
  const [filter, setFilter] = useState("All");

  const categories = ["All", "AI / Machine Learning", "Web Application", "Website Development", "Generative AI", "Data Science", "Data Visualisation"];
  const filtered = filter === "All" ? PROJECTS : PROJECTS.filter(p => p.category === filter);

  return (
    <section id="projects" className="py-28" style={{ background: "#080D1A" }}>
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <SectionLabel>Portfolio</SectionLabel>
          <h2 className="text-3xl sm:text-4xl font-bold" style={{ fontFamily: "var(--font-display)", color: "#F1F5F9" }}>
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="mt-4 text-base max-w-xl mx-auto" style={{ color: "#94A3B8" }}>
            A selection of websites, web applications, and AI projects I have built while learning and growing.
          </p>
        </div>

        { Filter tabs }
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map(c => (
            <button key={c} onClick={() => setFilter(c)}
              className="px-4 py-2 rounded-full text-sm font-medium transition-all"
              style={filter === c
                ? { background: "linear-gradient(135deg, #3B82F6, #8B5CF6)", color: "white" }
                : { background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)", color: "#94A3B8" }}>
              {c}
            </button>
          ))}
        </div>

        <div ref={ref} className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
          style={{ opacity: inView ? 1 : 0, transition: "all 0.6s ease", transform: inView ? "none" : "translateY(20px)" }}>
          {filtered.map(project => (
            <div key={project.id} className="glass rounded-2xl overflow-hidden group transition-all duration-300"
              style={{ border: "1px solid rgba(255,255,255,0.06)" }}
              onMouseEnter={e => { (e.currentTarget as HTMLElement).style.borderColor = `${project.color}40`; (e.currentTarget as HTMLElement).style.transform = "translateY(-4px)"; }}
              onMouseLeave={e => { (e.currentTarget as HTMLElement).style.borderColor = "rgba(255,255,255,0.06)"; (e.currentTarget as HTMLElement).style.transform = "translateY(0)"; }}>
              <div className="relative h-44 overflow-hidden" style={{ background: "#0D1526" }}>
                <img src={project.image} alt={project.title} className="w-full h-full object-cover opacity-70 group-hover:opacity-90 transition-opacity group-hover:scale-105 transition-transform duration-500" />
                <div className="absolute inset-0" style={{ background: `linear-gradient(to top, #080D1A 0%, transparent 60%)` }} />
                <span className="absolute top-3 right-3 px-3 py-1 rounded-full text-xs font-semibold"
                  style={{ background: `${project.color}20`, border: `1px solid ${project.color}40`, color: project.color }}>
                  {project.category}
                </span>
              </div>
              <div className="p-5">
                <h3 className="font-bold text-base mb-2 leading-snug" style={{ fontFamily: "var(--font-display)", color: "#F1F5F9" }}>{project.title}</h3>
                <p className="text-xs mb-3 line-clamp-2 leading-relaxed" style={{ color: "#64748B" }}>{project.problem}</p>
                <div className="flex flex-wrap gap-1 mb-4">
                  {project.tech.slice(0, 4).map(t => (
                    <span key={t} className="px-2 py-0.5 rounded text-xs" style={{ background: "rgba(59,130,246,0.1)", color: "#93C5FD", fontFamily: "var(--font-mono)" }}>{t}</span>
                  ))}
                  {project.tech.length > 4 && <span className="px-2 py-0.5 rounded text-xs" style={{ background: "rgba(255,255,255,0.05)", color: "#64748B" }}>+{project.tech.length - 4}</span>}
                </div>
                <div className="flex gap-2">
                  <span className="flex-1 py-2 rounded-xl text-center text-xs font-semibold" style={{ background: "linear-gradient(135deg, #3B82F6, #8B5CF6)", color: "white" }}>
                    Project Overview
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

    </section>
  );
}

// ─── Process ──────────────────────────────────────────────────────────────────

*/
function Process() {
  const { ref, inView } = useInView();

  return (
    <section id="process" className="py-28 grid-bg" style={{ background: "#0A0F1E" }}>
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <SectionLabel>How I Work</SectionLabel>
          <h2 className="text-3xl sm:text-4xl font-bold" style={{ fontFamily: "var(--font-display)", color: "#F1F5F9" }}>
            A Clear and Collaborative <span className="gradient-text">Development Process</span>
          </h2>
        </div>

        <div ref={ref} className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
          style={{ opacity: inView ? 1 : 0, transition: "all 0.6s ease", transform: inView ? "none" : "translateY(20px)" }}>
          {PROCESS_STEPS.map(({ num, title, icon: Icon, desc }, i) => (
            <div key={title} className="glass rounded-2xl p-6 relative transition-all duration-300"
              style={{ border: "1px solid rgba(255,255,255,0.06)", transitionDelay: `${i * 60}ms` }}
              onMouseEnter={e => { (e.currentTarget as HTMLElement).style.borderColor = "rgba(59,130,246,0.3)"; (e.currentTarget as HTMLElement).style.transform = "translateY(-4px)"; }}
              onMouseLeave={e => { (e.currentTarget as HTMLElement).style.borderColor = "rgba(255,255,255,0.06)"; (e.currentTarget as HTMLElement).style.transform = "translateY(0)"; }}>
              <div className="flex items-start justify-between mb-4">
                <div className="w-10 h-10 rounded-xl flex items-center justify-center" style={{ background: "linear-gradient(135deg, rgba(59,130,246,0.2), rgba(139,92,246,0.2))", border: "1px solid rgba(59,130,246,0.2)" }}>
                  <Icon size={18} style={{ color: "#3B82F6" }} />
                </div>
                <span className="font-bold text-2xl" style={{ color: "rgba(255,255,255,0.06)", fontFamily: "var(--font-mono)" }}>{num}</span>
              </div>
              <h3 className="font-bold mb-2" style={{ fontFamily: "var(--font-display)", color: "#F1F5F9" }}>{title}</h3>
              <p className="text-sm leading-relaxed" style={{ color: "#64748B" }}>{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── Technologies ─────────────────────────────────────────────────────────────

function Technologies() {
  const { ref, inView } = useInView();
  const catColors: Record<string, string> = {
    "Frontend": "#3B82F6", "Backend": "#8B5CF6", "Databases": "#06B6D4",
    "AI & ML": "#10B981", "Dev & Deploy": "#F59E0B",
  };

  return (
    <section id="technologies" className="py-28" style={{ background: "#080D1A" }}>
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <SectionLabel>Tech Stack</SectionLabel>
          <h2 className="text-3xl sm:text-4xl font-bold" style={{ fontFamily: "var(--font-display)", color: "#F1F5F9" }}>
            Technologies and <span className="gradient-text">Tools</span>
          </h2>
        </div>

        <div ref={ref} className="space-y-8"
          style={{ opacity: inView ? 1 : 0, transition: "all 0.6s ease", transform: inView ? "none" : "translateY(20px)" }}>
          {Object.entries(TECHNOLOGIES).map(([cat, techs]) => (
            <div key={cat}>
              <div className="flex items-center gap-3 mb-4">
                <span className="text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full"
                  style={{ background: `${catColors[cat]}15`, color: catColors[cat], border: `1px solid ${catColors[cat]}30` }}>
                  {cat}
                </span>
                <div className="flex-1 h-px" style={{ background: "rgba(255,255,255,0.05)" }} />
              </div>
              <div className="flex flex-wrap gap-2">
                {techs.map(tech => (
                  <span key={tech} className="tech-badge px-4 py-2 rounded-xl text-sm font-medium cursor-default"
                    style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)", color: "#94A3B8" }}>
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── Why Work With Me ─────────────────────────────────────────────────────────

function WhyMe() {
  const { ref, inView } = useInView();
  const reasons = [
    { icon: Shield, title: "End-to-End Development", desc: "From idea to launch, I build each project with care, quality, and attention to detail.", col: "#3B82F6" },
    { icon: MessageCircle, title: "Clear Communication", desc: "I keep project goals and progress easy to understand with concise updates and planning.", col: "#8B5CF6" },
    { icon: Target, title: "Purposeful Solutions", desc: "Each project is designed with a clear goal, simple interface, and reliable technical foundation.", col: "#06B6D4" },
    { icon: Cpu, title: "Modern Technology", desc: "I use current frameworks, scalable patterns, and practical AI techniques to build strong projects.", col: "#10B981" },
    { icon: Brain, title: "Learning & Problem Solving", desc: "I experiment, iterate, and improve with every project to grow my skills and confidence.", col: "#F59E0B" },
    { icon: Globe, title: "Portfolio Development", desc: "Creating real projects that show what I can build and how I approach technical challenges.", col: "#EF4444" },
  ];

  return (
    <section className="py-28 grid-bg" style={{ background: "#0A0F1E" }}>
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <SectionLabel>Why Choose Me</SectionLabel>
          <h2 className="text-3xl sm:text-4xl font-bold" style={{ fontFamily: "var(--font-display)", color: "#F1F5F9" }}>
            Why People Choose to <span className="gradient-text">Work With Me</span>
          </h2>
        </div>

        <div ref={ref} className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
          style={{ opacity: inView ? 1 : 0, transition: "all 0.6s ease", transform: inView ? "none" : "translateY(20px)" }}>
          {reasons.map(({ icon: Icon, title, desc, col }) => (
            <div key={title} className="glass rounded-2xl p-6 transition-all duration-300"
              style={{ border: "1px solid rgba(255,255,255,0.06)" }}
              onMouseEnter={e => { (e.currentTarget as HTMLElement).style.borderColor = `${col}40`; (e.currentTarget as HTMLElement).style.transform = "translateY(-4px)"; }}
              onMouseLeave={e => { (e.currentTarget as HTMLElement).style.borderColor = "rgba(255,255,255,0.06)"; (e.currentTarget as HTMLElement).style.transform = "translateY(0)"; }}>
              <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-5" style={{ background: `${col}15`, border: `1px solid ${col}30` }}>
                <Icon size={22} style={{ color: col }} />
              </div>
              <h3 className="font-bold mb-3" style={{ fontFamily: "var(--font-display)", color: "#F1F5F9" }}>{title}</h3>
              <p className="text-sm leading-relaxed" style={{ color: "#64748B" }}>{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── Engagement Models ────────────────────────────────────────────────────────

/* Client feedback removed because there is no professional client work yet.
    {
      name: "James Thornton", role: "Data Science Lead", company: "Analytics Corp UK", type: "AI / ML Development",
      text: "We engaged Sadurshan to build a predictive maintenance model and dashboard. He took ownership of the entire pipeline from data processing to deployment. His technical depth in machine learning combined with clean, maintainable code made this project a great success.",
      initials: "JT", color: "#8B5CF6",
    },
    {
      name: "Nadia Al-Hassan", role: "Founder & CEO", company: "GrowthBridge UAE", type: "Corporate Website",
      text: "The corporate website Sadurshan built for us is fast, modern, and exactly what our brand needed. He understood our requirements clearly from the first conversation and delivered ahead of schedule. A reliable developer who truly cares about results.",
      initials: "NA", color: "#06B6D4",
    },
  ];

  return (
    <section className="py-28" style={{ background: "#080D1A" }}>
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <SectionLabel>Portfolio Stories</SectionLabel>
          <h2 className="text-3xl sm:text-4xl font-bold" style={{ fontFamily: "var(--font-display)", color: "#F1F5F9" }}>
            Project Highlights and Learning <span className="gradient-text">Stories</span>
          </h2>
        </div>

        <div ref={ref} className="grid md:grid-cols-3 gap-6"
          style={{ opacity: inView ? 1 : 0, transition: "all 0.6s ease", transform: inView ? "none" : "translateY(20px)" }}>
          {testimonials.map(({ name, role, company, type, text, initials, color }) => (
            <div key={name} className="glass rounded-2xl p-6 flex flex-col gap-5 transition-all duration-300"
              style={{ border: "1px solid rgba(255,255,255,0.06)" }}
              onMouseEnter={e => { (e.currentTarget as HTMLElement).style.borderColor = `${color}30`; (e.currentTarget as HTMLElement).style.transform = "translateY(-4px)"; }}
              onMouseLeave={e => { (e.currentTarget as HTMLElement).style.borderColor = "rgba(255,255,255,0.06)"; (e.currentTarget as HTMLElement).style.transform = "translateY(0)"; }}>
              { Stars }
              <div className="flex gap-1">
                {[1, 2, 3, 4, 5].map(i => <Star key={i} size={14} fill="#F59E0B" style={{ color: "#F59E0B" }} />)}
              </div>
              <p className="text-sm leading-relaxed flex-1" style={{ color: "#94A3B8" }}>"{text}"</p>
              <div className="flex items-center gap-3 pt-3" style={{ borderTop: "1px solid rgba(255,255,255,0.06)" }}>
                <div className="w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm"
                  style={{ background: `${color}20`, border: `1px solid ${color}30`, color }}>
                  {initials}
                </div>
                <div>
                  <div className="font-semibold text-sm" style={{ color: "#F1F5F9" }}>{name}</div>
                  <div className="text-xs" style={{ color: "#64748B" }}>{role}, {company}</div>
                </div>
                <span className="ml-auto text-xs px-2 py-0.5 rounded-full" style={{ background: `${color}10`, color, border: `1px solid ${color}25` }}>{type}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── Engagement Models ────────────────────────────────────────────────────────

*/
function EngagementModels() {
  const { ref, inView } = useInView();
  const models = [
    { icon: FileText, title: "Fixed-Price Project", desc: "For clearly defined website, application, or AI development requirements.", highlights: ["Defined scope & deliverables", "Milestone-based payments", "Agreed timeline"], col: "#3B82F6" },
    { icon: Clock, title: "Hourly Development", desc: "For improvements, debugging, consultation, maintenance, and smaller tasks.", highlights: ["Flexible scheduling", "Transparent time tracking", "No long-term commitment"], col: "#8B5CF6" },
    { icon: RefreshCw, title: "Monthly Support", desc: "For businesses that require ongoing development and technical assistance.", highlights: ["Dedicated monthly hours", "Priority response", "Regular progress reports"], col: "#06B6D4" },
    { icon: Building2, title: "Long-Term Partnership", desc: "For startups, agencies, and organizations looking for a reliable development partner.", highlights: ["Embedded team member", "Strategic technical advice", "Continuous delivery"], col: "#10B981", highlight: true },
  ];

  return (
    <section className="py-28 grid-bg" style={{ background: "#0A0F1E" }}>
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <SectionLabel>Engagement</SectionLabel>
          <h2 className="text-3xl sm:text-4xl font-bold" style={{ fontFamily: "var(--font-display)", color: "#F1F5F9" }}>
            Flexible Ways to <span className="gradient-text">Work Together</span>
          </h2>
        </div>

        <div ref={ref} className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
          style={{ opacity: inView ? 1 : 0, transition: "all 0.6s ease", transform: inView ? "none" : "translateY(20px)" }}>
          {models.map(({ icon: Icon, title, desc, highlights, col, highlight }) => (
            <div key={title} className="glass rounded-2xl p-6 flex flex-col transition-all duration-300"
              style={{ border: highlight ? `1px solid ${col}50` : "1px solid rgba(255,255,255,0.06)" }}
              onMouseEnter={e => { (e.currentTarget as HTMLElement).style.borderColor = `${col}50`; (e.currentTarget as HTMLElement).style.transform = "translateY(-4px)"; }}
              onMouseLeave={e => { (e.currentTarget as HTMLElement).style.borderColor = highlight ? `${col}50` : "rgba(255,255,255,0.06)"; (e.currentTarget as HTMLElement).style.transform = "translateY(0)"; }}>
              {highlight && (
                <div className="text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full self-start mb-4"
                  style={{ background: `${col}20`, color: col, border: `1px solid ${col}30` }}>
                  Most Popular
                </div>
              )}
              <div className="w-10 h-10 rounded-xl flex items-center justify-center mb-4" style={{ background: `${col}15`, border: `1px solid ${col}25` }}>
                <Icon size={18} style={{ color: col }} />
              </div>
              <h3 className="font-bold mb-2" style={{ fontFamily: "var(--font-display)", color: "#F1F5F9" }}>{title}</h3>
              <p className="text-sm mb-5 leading-relaxed flex-1" style={{ color: "#64748B" }}>{desc}</p>
              <ul className="space-y-2">
                {highlights.map(h => (
                  <li key={h} className="flex items-center gap-2 text-xs" style={{ color: "#94A3B8" }}>
                    <CheckCircle2 size={12} style={{ color: col }} /> {h}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <GradientButton onClick={() => document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" })}>
            Request a Project Estimate <ArrowRight size={16} />
          </GradientButton>
        </div>
      </div>
    </section>
  );
}

// ─── Global / International ───────────────────────────────────────────────────

function GlobalSection() {
  const { ref, inView } = useInView();
  const collab = [
    "Flexible meeting arrangements", "Remote collaboration", "International payment support",
    "English communication", "Progress updates", "Milestone-based delivery",
    "Source-code handover", "Technical documentation",
  ];

  return (
    <section className="py-28" style={{ background: "#080D1A" }}>
      <div className="max-w-7xl mx-auto px-6">
        <div ref={ref} className="glass rounded-3xl overflow-hidden"
          style={{ border: "1px solid rgba(59,130,246,0.2)", opacity: inView ? 1 : 0, transition: "all 0.6s ease", transform: inView ? "none" : "translateY(20px)" }}>
          <div className="grid lg:grid-cols-2">
            {/* Left: globe SVG illustration */}
            <div className="relative flex items-center justify-center py-16 px-8" style={{ background: "linear-gradient(135deg, rgba(59,130,246,0.08), rgba(139,92,246,0.08))" }}>
              <GlobeIllustration />
            </div>

            {/* Right: content */}
            <div className="py-12 px-8 lg:px-12">
              <SectionLabel>Global Reach</SectionLabel>
              <h2 className="text-3xl font-bold mb-5" style={{ fontFamily: "var(--font-display)", color: "#F1F5F9" }}>
                Available for Projects <span className="gradient-text">Worldwide</span>
              </h2>
              <p className="text-base mb-8 leading-relaxed" style={{ color: "#94A3B8" }}>
                Based in Sri Lanka and available to work remotely worldwide. Projects are managed through structured communication, online meetings, shared documentation, progress tracking, and milestone-based delivery.
              </p>
              <div className="grid grid-cols-2 gap-3 mb-8">
                {collab.map(c => (
                  <div key={c} className="flex items-center gap-2 text-sm" style={{ color: "#94A3B8" }}>
                    <CheckCircle2 size={14} style={{ color: "#3B82F6", flexShrink: 0 }} />
                    {c}
                  </div>
                ))}
              </div>
              <GradientButton onClick={() => document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" })}>
                Get in Touch <ArrowRight size={16} />
              </GradientButton>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function GlobeIllustration() {
  return (
    <svg width="280" height="280" viewBox="0 0 280 280" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Globe circle */}
      <circle cx="140" cy="140" r="110" stroke="rgba(59,130,246,0.2)" strokeWidth="1" fill="none" />
      <circle cx="140" cy="140" r="110" stroke="url(#globeGrad)" strokeWidth="0.5" fill="rgba(59,130,246,0.04)" />
      {/* Latitude lines */}
      {[0.7, 0.5, 0.3].map((scale, i) => (
        <ellipse key={i} cx="140" cy="140" rx={110 * scale} ry={18} stroke="rgba(59,130,246,0.12)" strokeWidth="0.5" fill="none" />
      ))}
      {/* Longitude lines */}
      {[0, 30, 60, 90, 120, 150].map((angle) => (
        <ellipse key={angle} cx="140" cy="140" rx="18" ry="110"
          stroke="rgba(59,130,246,0.1)" strokeWidth="0.5" fill="none"
          transform={`rotate(${angle} 140 140)`} />
      ))}
      {/* Continents (simplified shapes) */}
      <path d="M100 115 L115 105 L130 108 L125 125 L110 130 L98 125 Z" fill="rgba(59,130,246,0.25)" />
      <path d="M140 100 L160 95 L175 110 L170 130 L155 135 L140 125 Z" fill="rgba(139,92,246,0.2)" />
      <path d="M155 155 L168 148 L178 158 L172 170 L158 168 Z" fill="rgba(6,182,212,0.2)" />
      <path d="M95 145 L108 140 L115 152 L108 162 L98 158 Z" fill="rgba(16,185,129,0.2)" />
      {/* Connection dots */}
      {[
        { cx: 110, cy: 118, col: "#3B82F6" },
        { cx: 157, cy: 112, col: "#8B5CF6" },
        { cx: 163, cy: 160, col: "#06B6D4" },
        { cx: 100, cy: 152, col: "#10B981" },
        { cx: 140, cy: 178, col: "#F59E0B" },
      ].map(({ cx, cy, col }, i) => (
        <g key={i}>
          <circle cx={cx} cy={cy} r="4" fill={col} opacity="0.9" />
          <circle cx={cx} cy={cy} r="8" fill={col} opacity="0.15" />
        </g>
      ))}
      {/* Connection lines */}
      <line x1="110" y1="118" x2="157" y2="112" stroke="rgba(59,130,246,0.3)" strokeWidth="0.75" strokeDasharray="3 2" />
      <line x1="157" y1="112" x2="163" y2="160" stroke="rgba(139,92,246,0.3)" strokeWidth="0.75" strokeDasharray="3 2" />
      <line x1="163" y1="160" x2="100" y2="152" stroke="rgba(6,182,212,0.3)" strokeWidth="0.75" strokeDasharray="3 2" />
      <line x1="100" y1="152" x2="140" y2="178" stroke="rgba(16,185,129,0.3)" strokeWidth="0.75" strokeDasharray="3 2" />
      <defs>
        <linearGradient id="globeGrad" x1="30" y1="30" x2="250" y2="250" gradientUnits="userSpaceOnUse">
          <stop stopColor="#3B82F6" />
          <stop offset="1" stopColor="#8B5CF6" />
        </linearGradient>
      </defs>
    </svg>
  );
}

// ─── Contact ──────────────────────────────────────────────────────────────────

function Contact() {
  const { ref, inView } = useInView();
  const [form, setForm] = useState({
    name: "", email: "", country: "", company: "", service: "",
    budget: "", timeline: "", message: "",
  });
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) { setStatus("error"); return; }
    const details = [
      "Hello Sadurshan, I would like to discuss a project.",
      "",
      `Name: ${form.name}`,
      `Email: ${form.email}`,
      `Country: ${form.country || "Not provided"}`,
      `Company: ${form.company || "Not provided"}`,
      `Service: ${form.service || "Not selected"}`,
      `Budget: ${form.budget || "Not selected"}`,
      `Timeline: ${form.timeline || "Not selected"}`,
      "",
      `Project description: ${form.message}`,
    ].join("\n");

    window.open(`https://wa.me/94767803584?text=${encodeURIComponent(details)}`, "_blank", "noopener,noreferrer");
    setStatus("success");
  };

  const inputStyle = {
    width: "100%", background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.1)",
    borderRadius: "12px", padding: "12px 16px", color: "#F1F5F9", fontSize: "14px",
    outline: "none", fontFamily: "inherit",
  };

  const Input = ({ name, label, type = "text", placeholder = "" }: { name: string; label: string; type?: string; placeholder?: string }) => (
    <div>
      <label className="block text-xs font-semibold uppercase tracking-wide mb-2" style={{ color: "#64748B" }}>{label}</label>
      <input type={type} placeholder={placeholder} value={(form as Record<string, string>)[name]}
        onChange={e => setForm(p => ({ ...p, [name]: e.target.value }))}
        style={inputStyle}
        onFocus={e => (e.target.style.borderColor = "rgba(59,130,246,0.5)")}
        onBlur={e => (e.target.style.borderColor = "rgba(255,255,255,0.1)")} />
    </div>
  );

  const SelectInput = ({ name, label, options }: { name: string; label: string; options: string[] }) => (
    <div>
      <label className="block text-xs font-semibold uppercase tracking-wide mb-2" style={{ color: "#64748B" }}>{label}</label>
      <select value={(form as Record<string, string>)[name]}
        onChange={e => setForm(p => ({ ...p, [name]: e.target.value }))}
        style={{ ...inputStyle, appearance: "none" }}>
        <option value="" style={{ background: "#0D1526" }}>Select an option</option>
        {options.map(o => <option key={o} value={o} style={{ background: "#0D1526" }}>{o}</option>)}
      </select>
    </div>
  );

  return (
    <section id="contact" className="py-28" style={{ background: "#080D1A" }}>
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <SectionLabel>Contact</SectionLabel>
          <h2 className="text-3xl sm:text-4xl font-bold mb-4" style={{ fontFamily: "var(--font-display)", color: "#F1F5F9" }}>
            Let's Build Something <span className="gradient-text">Valuable</span>
          </h2>
          <p className="text-base max-w-xl mx-auto" style={{ color: "#94A3B8" }}>
            Have a website idea, AI/ML project, business problem, or software requirement? Share your idea and receive an initial project discussion.
          </p>
        </div>

        <div ref={ref} className="grid lg:grid-cols-3 gap-10"
          style={{ opacity: inView ? 1 : 0, transition: "all 0.6s ease", transform: inView ? "none" : "translateY(20px)" }}>
          {/* Left: contact info */}
          <div className="space-y-6">
            <div className="glass rounded-2xl p-6" style={{ border: "1px solid rgba(255,255,255,0.06)" }}>
              <h3 className="font-bold mb-5" style={{ fontFamily: "var(--font-display)", color: "#F1F5F9" }}>Get in Touch</h3>
              <div className="space-y-4">
                <a href="mailto:sadushansadu33@gmail.com" className="flex items-center gap-3 text-sm group" style={{ color: "#94A3B8" }}
                  onMouseEnter={e => (e.currentTarget as HTMLElement).style.color = "#3B82F6"}
                  onMouseLeave={e => (e.currentTarget as HTMLElement).style.color = "#94A3B8"}>
                  <Mail size={16} style={{ color: "#3B82F6" }} /> sadushansadu33@gmail.com
                </a>
                <a href="https://www.linkedin.com/in/selvakumar-sadurshan-9a9524238/" target="_blank" rel="noopener noreferrer"
                  className="flex items-center gap-3 text-sm" style={{ color: "#94A3B8" }}
                  onMouseEnter={e => (e.currentTarget as HTMLElement).style.color = "#3B82F6"}
                  onMouseLeave={e => (e.currentTarget as HTMLElement).style.color = "#94A3B8"}>
                  <Building2 size={16} style={{ color: "#3B82F6" }} /> LinkedIn Profile
                </a>
                <a href="https://github.com/sadushan3" target="_blank" rel="noopener noreferrer"
                  className="flex items-center gap-3 text-sm" style={{ color: "#94A3B8" }}
                  onMouseEnter={e => (e.currentTarget as HTMLElement).style.color = "#3B82F6"}
                  onMouseLeave={e => (e.currentTarget as HTMLElement).style.color = "#94A3B8"}>
                  <Globe size={16} style={{ color: "#3B82F6" }} /> github.com/sadushan3
                </a>
                <a href="https://wa.me/94767803584" target="_blank" rel="noopener noreferrer"
                  className="flex items-center gap-3 text-sm" style={{ color: "#94A3B8" }}
                  onMouseEnter={e => (e.currentTarget as HTMLElement).style.color = "#3B82F6"}
                  onMouseLeave={e => (e.currentTarget as HTMLElement).style.color = "#94A3B8"}>
                  <Phone size={16} style={{ color: "#3B82F6" }} /> WhatsApp: 076 780 3584
                </a>
                <div className="flex items-center gap-3 text-sm" style={{ color: "#94A3B8" }}>
                  <MapPin size={16} style={{ color: "#3B82F6" }} /> Sri Lanka
                </div>
              </div>
            </div>

            <div className="glass rounded-2xl p-6" style={{ border: "1px solid rgba(16,185,129,0.2)" }}>
              <div className="flex items-center gap-2 mb-3">
                <span className="w-2 h-2 rounded-full bg-green-400" style={{ animation: "pulse-dot 2s ease infinite" }} />
                <span className="font-semibold text-sm" style={{ color: "#10B981" }}>Currently Available</span>
              </div>
              <p className="text-xs leading-relaxed" style={{ color: "#64748B" }}>
                Open to freelance projects, contract work, remote collaboration, and long-term development partnerships worldwide.
              </p>
              <p className="text-xs mt-3" style={{ color: "#64748B" }}>
                I normally respond within <strong style={{ color: "#94A3B8" }}>24–48 hours</strong>.
              </p>
            </div>

            <a href="mailto:sadushansadu33@gmail.com?subject=Project%20Inquiry" className="flex items-center gap-3 w-full justify-center py-3 rounded-xl text-sm font-medium transition-all"
              style={{ border: "1px solid rgba(255,255,255,0.1)", color: "#94A3B8" }}
              onMouseEnter={e => { (e.currentTarget as HTMLElement).style.borderColor = "rgba(59,130,246,0.4)"; (e.currentTarget as HTMLElement).style.color = "#3B82F6"; }}
              onMouseLeave={e => { (e.currentTarget as HTMLElement).style.borderColor = "rgba(255,255,255,0.1)"; (e.currentTarget as HTMLElement).style.color = "#94A3B8"; }}>
              <Send size={16} /> Contact via Email
            </a>
          </div>

          {/* Right: form */}
          <div className="lg:col-span-2">
            <form onSubmit={handleSubmit} className="glass rounded-2xl p-8 space-y-5" style={{ border: "1px solid rgba(255,255,255,0.06)" }}>
              <div className="grid sm:grid-cols-2 gap-5">
                <Input name="name" label="Full Name *" placeholder="Your full name" />
                <Input name="email" label="Email Address *" type="email" placeholder="your@email.com" />
              </div>
              <div className="grid sm:grid-cols-2 gap-5">
                <Input name="country" label="Country" placeholder="Your country" />
                <Input name="company" label="Company / Organization" placeholder="Company name" />
              </div>
              <div className="grid sm:grid-cols-2 gap-5">
                <SelectInput name="service" label="Service Required" options={[
                  "Website Development", "Web Application Development", "AI/ML Development",
                  "Generative AI Solution", "Data Science", "API or Backend Development",
                  "Technical Consultation", "Other",
                ]} />
                <SelectInput name="budget" label="Estimated Budget" options={[
                  "Under $500", "$500 – $1,500", "$1,500 – $5,000",
                  "$5,000 – $15,000", "$15,000+", "Open to discuss",
                ]} />
              </div>
              <SelectInput name="timeline" label="Preferred Timeline" options={[
                "ASAP", "Within 1 month", "1–3 months", "3–6 months", "6+ months", "Flexible",
              ]} />
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wide mb-2" style={{ color: "#64748B" }}>Project Description *</label>
                <textarea rows={5} placeholder="Describe your project, goals, and any specific requirements..."
                  value={form.message} onChange={e => setForm(p => ({ ...p, message: e.target.value }))}
                  style={{ ...inputStyle, resize: "vertical" }}
                  onFocus={e => (e.target.style.borderColor = "rgba(59,130,246,0.5)")}
                  onBlur={e => (e.target.style.borderColor = "rgba(255,255,255,0.1)")} />
              </div>

              {status === "error" && (
                <div className="text-sm px-4 py-3 rounded-xl" style={{ background: "rgba(239,68,68,0.1)", border: "1px solid rgba(239,68,68,0.3)", color: "#FCA5A5" }}>
                  Please fill in all required fields (Name, Email, Description).
                </div>
              )}
              {status === "success" && (
                <div className="text-sm px-4 py-3 rounded-xl" style={{ background: "rgba(16,185,129,0.1)", border: "1px solid rgba(16,185,129,0.3)", color: "#6EE7B7" }}>
                  WhatsApp opened with the project details. Please press Send there to complete your request.
                </div>
              )}

              <GradientButton className="w-full justify-center py-4">
                <><Send size={16} /> Start Your Project on WhatsApp</>
              </GradientButton>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── Footer ───────────────────────────────────────────────────────────────────

function Footer() {
  const scrollTo = (href: string) => document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  const year = new Date().getFullYear();

  return (
    <footer style={{ background: "#040810", borderTop: "1px solid rgba(255,255,255,0.05)" }}>
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div className="md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-lg flex items-center justify-center" style={{ background: "linear-gradient(135deg, #3B82F6, #8B5CF6)" }}>
                <span className="text-white font-bold text-sm">S</span>
              </div>
              <span className="font-bold text-lg" style={{ fontFamily: "var(--font-display)", color: "#F1F5F9" }}>Sadurshan</span>
            </div>
            <p className="text-sm leading-relaxed mb-5" style={{ color: "#64748B" }}>
              Developing modern websites and intelligent AI solutions for a growing global audience.
            </p>
            <div className="flex items-center gap-1.5 mb-2" style={{ color: "#64748B" }}>
              <MapPin size={13} style={{ color: "#3B82F6" }} />
              <span className="text-xs">Sri Lanka</span>
            </div>
            <div className="flex items-center gap-1.5" style={{ color: "#64748B" }}>
              <Globe size={13} style={{ color: "#3B82F6" }} />
              <span className="text-xs">Available Worldwide</span>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="font-semibold text-sm mb-4" style={{ color: "#F1F5F9" }}>Navigation</h4>
            {["#home", "#about", "#services", "#contact"].map(href => (
              <button key={href} onClick={() => scrollTo(href)} className="block text-sm mb-2 text-left transition-colors"
                style={{ color: "#64748B" }}
                onMouseEnter={e => (e.currentTarget.style.color = "#3B82F6")}
                onMouseLeave={e => (e.currentTarget.style.color = "#64748B")}>
                {href.replace("#", "").replace(/-/g, " ").replace(/\b\w/g, c => c.toUpperCase())}
              </button>
            ))}
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold text-sm mb-4" style={{ color: "#F1F5F9" }}>Services</h4>
            {["Website Development", "Web Applications", "AI/ML Development", "Generative AI", "Data Science", "API Development"].map(s => (
              <div key={s} className="text-sm mb-2" style={{ color: "#64748B" }}>{s}</div>
            ))}
          </div>

          {/* Social */}
          <div>
            <h4 className="font-semibold text-sm mb-4" style={{ color: "#F1F5F9" }}>Connect</h4>
            <div className="space-y-3">
              <a href="mailto:sadushansadu33@gmail.com" className="flex items-center gap-2 text-sm transition-colors"
                style={{ color: "#64748B" }}
                onMouseEnter={e => (e.currentTarget as HTMLElement).style.color = "#3B82F6"}
                onMouseLeave={e => (e.currentTarget as HTMLElement).style.color = "#64748B"}>
                <Mail size={14} /> Email
              </a>
              <a href="https://www.linkedin.com/in/selvakumar-sadurshan-9a9524238/" target="_blank" rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm transition-colors"
                style={{ color: "#64748B" }}
                onMouseEnter={e => (e.currentTarget as HTMLElement).style.color = "#3B82F6"}
                onMouseLeave={e => (e.currentTarget as HTMLElement).style.color = "#64748B"}>
                <Building2 size={14} /> LinkedIn
              </a>
              <a href="https://github.com/sadushan3" target="_blank" rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm transition-colors"
                style={{ color: "#64748B" }}
                onMouseEnter={e => (e.currentTarget as HTMLElement).style.color = "#3B82F6"}
                onMouseLeave={e => (e.currentTarget as HTMLElement).style.color = "#64748B"}>
                <Globe size={14} /> GitHub
              </a>
              <a href="https://wa.me/94767803584" target="_blank" rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm transition-colors"
                style={{ color: "#64748B" }}
                onMouseEnter={e => (e.currentTarget as HTMLElement).style.color = "#10B981"}
                onMouseLeave={e => (e.currentTarget as HTMLElement).style.color = "#64748B"}>
                <Phone size={14} /> WhatsApp
              </a>
            </div>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-between pt-8 gap-4"
          style={{ borderTop: "1px solid rgba(255,255,255,0.05)" }}>
          <p className="text-xs" style={{ color: "#374151" }}>
            © {year} Sadurshan. All rights reserved.
          </p>
          <div className="flex gap-4">
            {["Privacy Policy", "Terms and Conditions"].map(l => (
              <button key={l} className="text-xs transition-colors" style={{ color: "#374151" }}
                onMouseEnter={e => (e.currentTarget.style.color = "#64748B")}
                onMouseLeave={e => (e.currentTarget.style.color = "#374151")}>
                {l}
              </button>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}

// ─── Back To Top ──────────────────────────────────────────────────────────────

function BackToTop({ visible }: { visible: boolean }) {
  return (
    <button onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      className="fixed bottom-6 right-6 z-40 p-3 rounded-xl shadow-lg transition-all duration-300"
      style={{
        background: "linear-gradient(135deg, #3B82F6, #8B5CF6)",
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(20px)",
        pointerEvents: visible ? "auto" : "none",
      }}>
      <ArrowUp size={18} color="white" />
    </button>
  );
}

// ─── WhatsApp FAB ─────────────────────────────────────────────────────────────

function WhatsAppFAB() {
  return (
    <a href="https://wa.me/94767803584" target="_blank" rel="noopener noreferrer"
      className="fixed bottom-6 left-6 z-40 flex items-center gap-2 px-4 py-3 rounded-xl shadow-lg text-sm font-semibold transition-all"
      style={{ background: "#25D366", color: "white" }}
      onMouseEnter={e => { (e.currentTarget as HTMLElement).style.transform = "scale(1.05)"; }}
      onMouseLeave={e => { (e.currentTarget as HTMLElement).style.transform = "scale(1)"; }}>
      <MessageCircle size={18} />
      <span className="hidden sm:inline">Chat on WhatsApp</span>
    </a>
  );
}

// ─── App ──────────────────────────────────────────────────────────────────────

export default function App() {
  const [scrolled, setScrolled] = useState(false);
  const [showTop, setShowTop] = useState(false);

  useEffect(() => {
    const handler = () => {
      setScrolled(window.scrollY > 20);
      setShowTop(window.scrollY > 400);
    };
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <div style={{ background: "#080D1A", color: "#F1F5F9", minHeight: "100vh" }}>
      <Navbar scrolled={scrolled} />
      <Hero />
      <Stats />
      <About />
      <Services />
      <AIMLSection />
      <WebDevSection />
      <Process />
      <Technologies />
      <WhyMe />
      <EngagementModels />
      <GlobalSection />
      <Contact />
      <Footer />
      <BackToTop visible={showTop} />
      <WhatsAppFAB />
    </div>
  );
}
