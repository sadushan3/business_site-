import { useEffect, useState, type FormEvent } from "react";
import {
  ArrowRight, BarChart3, Bot, BriefcaseBusiness, Check, ChevronDown,
  Code2, Gauge, Globe2, Layers3, Menu, MessageCircle, MoveUpRight,
  Search, ShieldCheck, ShoppingBag, Smartphone, Sparkles,
  Target, Workflow, X, Zap, Quote, Mail, MapPin,
} from "lucide-react";
import sivaKajanPortrait from "./image.png";

const PHONE = "94767803584";
const EMAIL = "sadushansadu33@gmail.com";

const services = [
  { icon: Globe2, title: "Premium Website Development", text: "High-converting digital experiences engineered to turn attention into qualified enquiries.", tag: "Design + Development", accent: "blue" },
  { icon: Bot, title: "AI Chatbots", text: "Intelligent, always-on assistants that answer questions, qualify leads and book calls 24/7.", tag: "AI + Lead Generation", accent: "violet" },
  { icon: Search, title: "SEO & Local SEO", text: "Search strategies that put your business in front of people already looking for what you offer.", tag: "Organic Growth", accent: "cyan" },
  { icon: Gauge, title: "Speed Optimization", text: "Lightning-fast experiences that improve rankings, conversions and customer confidence.", tag: "Performance", accent: "amber" },
  { icon: ShoppingBag, title: "E-commerce", text: "Premium stores with frictionless journeys designed to increase basket size and repeat purchases.", tag: "Online Revenue", accent: "pink" },
  { icon: Smartphone, title: "Mobile Apps", text: "Useful, polished mobile products that keep your brand in your customers' hands.", tag: "iOS + Android", accent: "green" },
  { icon: Workflow, title: "Business Automation", text: "Connected workflows that reduce manual tasks, save hours and help your team scale efficiently.", tag: "AI + Operations", accent: "violet" },
  { icon: BarChart3, title: "Analytics & Conversion Optimization", text: "Clear data, smarter experiments and focused improvements that compound growth.", tag: "CRO + Insights", accent: "blue" },
];

const process = [
  ["01", "Discover", "We uncover your goals, customers, bottlenecks and biggest growth opportunities."],
  ["02", "Strategize", "We turn research into a focused roadmap with clear priorities and measurable outcomes."],
  ["03", "Create", "We design, build and integrate your new growth engine with meticulous attention to detail."],
  ["04", "Optimize", "We launch, measure and improve—so your investment keeps working harder over time."],
];

const industries = ["Restaurants", "Hotels", "Real Estate", "Law Firms", "Medical Clinics", "E-commerce", "Construction", "Startups"];

const faqs = [
  ["How much does a project cost?", "Most growth website projects begin at $2,000. Larger websites, e-commerce platforms and AI automation are scoped around your goals, integrations and timeline."],
  ["How long does a website take?", "A focused marketing website usually takes 4–8 weeks. More complex platforms can take 8–14 weeks. You receive a clear delivery plan before work begins."],
  ["Can you work with international businesses?", "Yes. We work remotely with clients across the USA, UK, Canada, Australia and Europe, with a communication rhythm built around your time zone."],
  ["Do you provide support after launch?", "Absolutely. We offer ongoing care, performance monitoring, SEO, conversion optimization and product improvements after launch."],
];

function Logo({ light = false }: { light?: boolean }) {
  return <a href="#home" className={`logo ${light ? "logo-light" : ""}`} aria-label="Nexora home"><span className="logo-mark"><Sparkles size={17}/></span><span>NEXORA<span className="logo-dot">.</span></span></a>;
}

function Button({ href, children, secondary = false, className = "" }: { href: string; children: React.ReactNode; secondary?: boolean; className?: string }) {
  return <a href={href} className={`button ${secondary ? "button-secondary" : ""} ${className}`}>{children}</a>;
}

function SectionIntro({ kicker, title, text, center = false }: { kicker: string; title: React.ReactNode; text: string; center?: boolean }) {
  return <div className={`section-intro ${center ? "center" : ""}`}><span className="eyebrow"><span/> {kicker}</span><h2>{title}</h2><p>{text}</p></div>;
}

function App() {
  const [menu, setMenu] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [faq, setFaq] = useState(0);
  const [sent, setSent] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll(); window.addEventListener("scroll", onScroll, { passive: true });
    const observer = new IntersectionObserver((entries) => entries.forEach(e => e.isIntersecting && e.target.classList.add("revealed")), { threshold: .12 });
    document.querySelectorAll(".reveal").forEach(el => observer.observe(el));
    return () => { window.removeEventListener("scroll", onScroll); observer.disconnect(); };
  }, []);

  const submit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const message = `Hello Nexora! I'd like to discuss a project.%0A%0AName: ${data.get("name")}%0AEmail: ${data.get("email")}%0ACompany: ${data.get("company") || "—"}%0AService: ${data.get("service")}%0ABudget: ${data.get("budget")}%0A%0AProject: ${data.get("message")}`;
    setSent(true);
    window.open(`https://wa.me/${PHONE}?text=${message}`, "_blank", "noopener,noreferrer");
  };

  const nav = ["Services", "Work", "Process", "About", "Insights"];
  return <div className="site-shell">
    <nav className={`nav ${scrolled ? "nav-scrolled" : ""}`} aria-label="Main navigation">
      <div className="nav-inner"><Logo light />
        <div className="desktop-nav">{nav.map(item => <a key={item} href={`#${item.toLowerCase()}`}>{item}</a>)}</div>
        <Button href="#contact" className="nav-cta">Book a free strategy call <ArrowRight size={16}/></Button>
        <button className="menu-button" onClick={() => setMenu(!menu)} aria-label="Toggle menu" aria-expanded={menu}>{menu ? <X/> : <Menu/>}</button>
      </div>
      {menu && <div className="mobile-nav">{nav.map(item => <a onClick={() => setMenu(false)} key={item} href={`#${item.toLowerCase()}`}>{item}<ArrowRight size={16}/></a>)}<a onClick={() => setMenu(false)} href="#contact">Start a project <ArrowRight size={16}/></a></div>}
    </nav>

    <main>
      <section className="hero" id="home">
        <div className="hero-grid"/><div className="aurora aurora-one"/><div className="aurora aurora-two"/>
        <div className="hero-orbit orbit-one"/><div className="hero-orbit orbit-two"/>
        <div className="container hero-layout">
          <div className="hero-copy reveal revealed">
            <div className="availability"><span/><span>Accepting new projects for Q3</span><ArrowRight size={14}/></div>
            <h1>We Build AI-Powered Websites That Help Businesses <span className="gradient-text">Get More Customers</span></h1>
            <p>Strategy, design, technology and AI—united to turn your digital presence into a measurable growth engine.</p>
            <div className="hero-actions"><Button href="#contact">Book your free strategy call <ArrowRight size={18}/></Button><Button href="#work" secondary>Explore our work <MoveUpRight size={17}/></Button></div>
            <div className="hero-proof"><div className="avatars"><span>JM</span><span>AL</span><span>RK</span><span>+12</span></div><div><div className="stars">★★★★★</div><p>Trusted by ambitious businesses worldwide</p></div></div>
          </div>

          <div className="hero-visual reveal revealed">
            <div className="dashboard-window">
              <div className="window-bar"><div><i/><i/><i/></div><span>growth.nexora.ai</span><ShieldCheck size={14}/></div>
              <div className="dash-body">
                <aside><div className="mini-logo"><Sparkles size={13}/></div>{[Layers3, BarChart3, Target, Bot].map((Icon,i)=><span className={i===1?"active":""} key={i}><Icon size={15}/></span>)}</aside>
                <div className="dash-main"><div className="dash-head"><div><small>PERFORMANCE OVERVIEW</small><h3>Your growth, at a glance.</h3></div><button>Last 30 days <ChevronDown size={12}/></button></div>
                  <div className="metrics"><div><small>NEW LEADS</small><strong>284</strong><em>↗ 38.4%</em></div><div><small>CONVERSION RATE</small><strong>7.8%</strong><em>↗ 2.1%</em></div><div><small>REVENUE</small><strong>$42.8K</strong><em>↗ 24.6%</em></div></div>
                  <div className="chart-card"><div className="chart-title"><span>Growth performance</span><b>+38.4%</b></div><div className="chart"><svg viewBox="0 0 500 170" preserveAspectRatio="none"><defs><linearGradient id="fill" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stopColor="#715cff" stopOpacity=".35"/><stop offset="1" stopColor="#715cff" stopOpacity="0"/></linearGradient></defs><path className="area" d="M0 150 C50 145 55 115 100 123 S160 118 190 100 S245 108 280 70 S340 82 370 50 S430 58 500 15 L500 170 L0 170Z"/><path className="line" d="M0 150 C50 145 55 115 100 123 S160 118 190 100 S245 108 280 70 S340 82 370 50 S430 58 500 15"/></svg></div></div>
                </div>
              </div>
            </div>
            <div className="float-card ai-card"><span><Bot size={18}/></span><div><small>AI ASSISTANT</small><strong>12 leads qualified</strong></div><i>Live</i></div>
            <div className="float-card speed-card"><span><Zap size={18}/></span><div><small>PERFORMANCE</small><strong>99 / 100</strong></div></div>
          </div>
        </div>
        <div className="trust-strip"><div className="container"><span>GROWTH SYSTEMS BUILT WITH</span><div className="trust-logos"><b>OpenAI</b><b>Webflow</b><b>React</b><b>Shopify</b><b>Google</b><b>Vercel▲</b></div></div></div>
      </section>

      <section className="light-section services" id="services"><div className="container">
        <SectionIntro kicker="What we do" title={<>Everything you need to <span>grow online.</span></>} text="We blend strategy, creativity, AI and engineering to build digital systems that attract, convert and retain more customers." center/>
        <div className="service-grid">{services.map(({icon:Icon,...s}, i)=><article className={`service-card reveal accent-${s.accent}`} key={s.title} style={{transitionDelay:`${(i%4)*70}ms`}}><div className="service-top"><span className="service-icon"><Icon/></span><span className="card-arrow"><MoveUpRight size={18}/></span></div><h3>{s.title}</h3><p>{s.text}</p><small>{s.tag}</small></article>)}</div>
      </div></section>

      <section className="dark-feature" id="about"><div className="container feature-grid">
        <div className="feature-copy reveal"><SectionIntro kicker="Your unfair advantage" title={<>Not another agency.<br/><span>Your growth partner.</span></>} text="Most agencies deliver a website and disappear. We build connected digital systems focused on one outcome: sustainable business growth."/>
          <div className="benefits">{[[Target,"Business-first strategy","Every decision starts with your commercial goals—not design trends."],[Bot,"AI built into the experience","Practical AI that improves customer service, sales and efficiency."],[BarChart3,"Results you can measure","Transparent analytics tied to leads, conversions and revenue."],[ShieldCheck,"A partner after launch","Ongoing optimization keeps your growth engine performing."]].map(([Icon,title,text])=>{const I=Icon as typeof Target; return <div key={String(title)}><span><I size={20}/></span><div><h4>{String(title)}</h4><p>{String(text)}</p></div></div>})}</div>
          <Button href="#contact">Build your growth engine <ArrowRight size={17}/></Button>
        </div>
        <div className="feature-visual reveal"><div className="glow-sphere"><div className="sphere-core"><Sparkles size={30}/><span>AI</span></div><span className="orbit-dot d1"/><span className="orbit-dot d2"/><span className="orbit-dot d3"/></div><div className="feature-stat s1"><small>AVERAGE LEAD GROWTH</small><strong>+187%</strong><span>After 90 days</span></div><div className="feature-stat s2"><small>AUTOMATION SAVED</small><strong>32h</strong><span>Per month</span></div><div className="feature-stat s3"><small>AVG. LIGHTHOUSE</small><strong>98</strong><span>Performance score</span></div></div>
      </div></section>

      <section className="work light-section" id="work"><div className="container">
        <div className="work-heading"><SectionIntro kicker="Selected work" title={<>Built for impact.<br/><span>Designed to perform.</span></>} text="A glimpse at the kind of high-performance experiences we create for ambitious brands."/><Button href="#contact" secondary>Discuss your project <ArrowRight size={16}/></Button></div>
        <div className="projects">
          <article className="project project-main reveal"><div className="project-preview repairme-preview"><img src="/a.png" alt="RepairMe home page featuring a verified technician"/></div><div className="project-meta"><div><span>HOME SERVICES · WEB DESIGN · PLATFORM</span><h3>RepairMe — Home</h3></div><strong>FAST<small>verified service</small></strong></div></article>
          <article className="project reveal"><div className="project-preview repairme-preview repairme-services"><img src="/image.png" alt="RepairMe services booking page"/></div><div className="project-meta"><div><span>HOME SERVICES · UX · BOOKING</span><h3>RepairMe — Services</h3></div><strong>30 DAY<small>service warranty</small></strong></div></article>
        </div>
      </div></section>

      <section className="results"><div className="container"><div className="results-head reveal"><span className="eyebrow"><span/> Results, not vanity</span><h2>Digital experiences that<br/><em>move the numbers.</em></h2></div><div className="result-grid">{[["187%","Average lead growth"],["3.2×","More conversions"],["98","Average speed score"],["40+","Hours saved monthly"]].map((r,i)=><div key={r[1]} className="result reveal"><span>0{i+1}</span><strong>{r[0]}</strong><p>{r[1]}</p></div>)}</div><p className="disclaimer">Representative outcomes vary by project, market and investment.</p></div></section>

      <section className="process light-section" id="process"><div className="container"><SectionIntro kicker="Our process" title={<>Clear. Collaborative. <span>Built to win.</span></>} text="No black boxes or unnecessary complexity. Just a proven path from opportunity to measurable growth." center/><div className="process-grid">{process.map(([num,title,text],i)=><div className="process-step reveal" key={num}><div className="process-number"><span>{num}</span>{i<3&&<i/>}</div><h3>{title}</h3><p>{text}</p></div>)}</div></div></section>

      <section className="industries"><div className="container industry-grid"><div className="reveal"><SectionIntro kicker="Industries" title={<>Built around your<br/><span>customer journey.</span></>} text="We learn the mechanics of your business, then create the right mix of design, technology and automation to unlock growth."/><Button href="#contact">Tell us about your business <ArrowRight size={16}/></Button></div><div className="industry-list reveal">{industries.map((x,i)=><div key={x}><span>0{i+1}</span><h3>{x}</h3><MoveUpRight/></div>)}</div></div></section>

      <section className="testimonial light-section"><div className="container testimonial-box reveal"><Quote/><div className="stars">★★★★★</div><blockquote>“Nexora didn't just give us a beautiful website. They rebuilt the way customers find us, trust us and take action. The difference was visible within weeks.”</blockquote><div className="testimonial-person"><img src={sivaKajanPortrait} alt="Siva Kajan"/><div><strong>Siva Kajan</strong><small>Founder of RepairMe</small></div></div></div></section>

      <section className="pricing light-section"><div className="container"><SectionIntro kicker="Ways to work together" title={<>Choose your <span>growth path.</span></>} text="Flexible engagements designed around where you are now—and where you want to go." center/><div className="pricing-grid">
        <article className="price-card reveal"><span className="price-icon"><Code2/></span><small>LAUNCH</small><h3>Growth Website</h3><p>For businesses ready to turn their website into a reliable sales asset.</p><strong>From $2,000</strong><ul>{["Strategy & conversion copy","Premium responsive design","Fast, SEO-ready development","Analytics & lead capture"].map(x=><li key={x}><Check/>{x}</li>)}</ul><Button href="#contact" secondary>Explore website projects <ArrowRight/></Button></article>
        <article className="price-card featured reveal"><div className="popular">MOST POPULAR</div><span className="price-icon"><Sparkles/></span><small>SCALE</small><h3>AI Growth System</h3><p>For ambitious companies ready to automate and accelerate growth.</p><strong>Custom scope</strong><ul>{["Everything in Growth Website","AI chatbot & qualification","Business automation workflows","Ongoing CRO & reporting"].map(x=><li key={x}><Check/>{x}</li>)}</ul><Button href="#contact">Book a strategy call <ArrowRight/></Button></article>
        <article className="price-card reveal"><span className="price-icon"><BriefcaseBusiness/></span><small>PARTNER</small><h3>Growth Partnership</h3><p>For teams that want continuous strategy, execution and optimization.</p><strong>Monthly retainer</strong><ul>{["Dedicated growth roadmap","SEO & content support","Conversion experiments","Priority design & development"].map(x=><li key={x}><Check/>{x}</li>)}</ul><Button href="#contact" secondary>Discuss a partnership <ArrowRight/></Button></article>
      </div></div></section>

      <section className="faq light-section" id="insights"><div className="container faq-grid"><SectionIntro kicker="Questions, answered" title={<>Everything you need<br/>to know before <span>we start.</span></>} text="Still have a question? Book a free, no-pressure strategy call and we'll talk it through."/><div>{faqs.map(([q,a],i)=><div className={`faq-item ${faq===i?"open":""}`} key={q}><button onClick={()=>setFaq(faq===i?-1:i)} aria-expanded={faq===i}><span>{q}</span><ChevronDown/></button><div className="faq-answer"><p>{a}</p></div></div>)}</div></div></section>

      <section className="contact" id="contact"><div className="contact-glow"/><div className="container contact-grid"><div className="reveal"><span className="eyebrow light"><span/> Let's build something valuable</span><h2>Ready to turn your digital presence into a <span>growth engine?</span></h2><p>Tell us where you are, where you want to go and what is getting in the way. We'll come back with clear next steps—no hard sell.</p><div className="contact-points"><span><Check/> Free 30-minute strategy call</span><span><Check/> Practical growth opportunities</span><span><Check/> Clear scope, timeline and investment</span></div><div className="contact-direct"><a href={`mailto:${EMAIL}`}><Mail/> {EMAIL}</a><span><MapPin/> Sri Lanka · Working worldwide</span></div></div>
        <form className="contact-form reveal" onSubmit={submit}><div className="form-head"><small>START A CONVERSATION</small><h3>Tell us about your project.</h3></div><div className="field-row"><label>Your name<input required name="name" placeholder="Jane Smith"/></label><label>Work email<input required type="email" name="email" placeholder="jane@company.com"/></label></div><label>Company name<input name="company" placeholder="Your company"/></label><div className="field-row"><label>What do you need?<select required name="service" defaultValue=""><option value="" disabled>Select a service</option>{services.map(s=><option key={s.title}>{s.title}</option>)}</select></label><label>Investment range<select required name="budget" defaultValue=""><option value="" disabled>Select a range</option><option>$2k – $5k</option><option>$5k – $10k</option><option>$10k – $20k</option><option>$20k+</option></select></label></div><label>Tell us about your goals<textarea required name="message" rows={4} placeholder="What would success look like?"/></label><button className="button" type="submit">Send project details <ArrowRight/></button>{sent&&<p className="form-success"><Check/> WhatsApp opened—send the pre-filled message to complete your enquiry.</p>}<small className="form-note"><ShieldCheck/> Your details stay private. We usually reply within one business day.</small></form>
      </div></section>
    </main>

    <footer><div className="container"><div className="footer-main"><div><Logo light/><p>AI-powered websites and growth systems for ambitious businesses worldwide.</p><div className="socials"><a href="https://www.linkedin.com/in/selvakumar-sadurshan-9a9524238/" target="_blank" rel="noreferrer" aria-label="LinkedIn"><Globe2/></a><a href={`mailto:${EMAIL}`} aria-label="Email"><Mail/></a></div></div><div><h4>Explore</h4>{["Services","Work","Process","About","Contact"].map(x=><a href={`#${x.toLowerCase()}`} key={x}>{x}</a>)}</div><div><h4>Services</h4>{services.slice(0,5).map(x=><a href="#services" key={x.title}>{x.title}</a>)}</div><div><h4>Start a conversation</h4><a href={`mailto:${EMAIL}`}>{EMAIL}</a><a href={`https://wa.me/${PHONE}`} target="_blank" rel="noreferrer">WhatsApp us</a><p>Available worldwide<br/>Mon–Fri, 9am–6pm</p></div></div><div className="footer-bottom"><span>© {new Date().getFullYear()} Nexora Digital. All rights reserved.</span><div><a href="#">Privacy</a><a href="#">Terms</a></div><span>AI Digital Growth Agency</span></div></div></footer>
    <a href={`https://wa.me/${PHONE}`} target="_blank" rel="noreferrer" className="whatsapp" aria-label="Chat on WhatsApp"><MessageCircle/><span>Let's talk</span></a>
  </div>;
}

export default App;
