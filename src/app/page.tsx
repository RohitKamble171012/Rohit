"use client"
import React, { useState, useEffect } from 'react';
import { Github, Linkedin, Mail, Phone, ExternalLink, Code, Briefcase, GraduationCap, Award, Menu, X, Download, ChevronDown, Rocket, Brain, Database, Zap, MapPin, Calendar, TrendingUp, Globe, FileText } from 'lucide-react';

export default function Home() {
  const [activeSection, setActiveSection] = useState('home');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const [currentRole, setCurrentRole] = useState(0);

  const roles = [
    'Full-Stack Developer',
    'MERN Stack Engineer',
    'AI/ML Explorer',
    'Problem Solver',
    'Open Source Builder'
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
      const sections = ['home', 'about', 'skills', 'projects', 'experience', 'education', 'contact'];
      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) { setActiveSection(section); break; }
        }
      }
    };
    window.addEventListener('scroll', handleScroll);
    const roleInterval = setInterval(() => setCurrentRole(prev => (prev + 1) % roles.length), 3000);
    return () => { window.removeEventListener('scroll', handleScroll); clearInterval(roleInterval); };
  }, []);

  const navItems = ['Home', 'About', 'Skills', 'Projects', 'Experience', 'Education', 'Contact'];

  const skills = {
    'Programming Languages': ['JavaScript (ES6+)', 'TypeScript', 'Python', 'Java', 'SQL'],
    'Frontend': ['React.js', 'Next.js', 'Tailwind CSS', 'HTML5', 'CSS3'],
    'Backend': ['Node.js', 'Express.js', 'REST APIs', 'OAuth 2.0', 'Firebase'],
    'Databases': ['MongoDB', 'MySQL', 'Redis', 'PostgreSQL'],
    'Analytics & ML': ['Power BI', 'TensorFlow', 'Scikit-Learn', 'Prophet', 'LightGBM'],
    'Tools & DevOps': ['Git', 'GitHub', 'Docker', 'Vercel', 'Render', 'GitHub Actions']
  };

  const projects = [
    {
      title: 'ApplyFlow',
      description: 'Full-stack job application tracker that auto-syncs Gmail and classifies emails (Applied / Interview / Rejected / Offer) using a rule-based NLP engine with 60+ regex patterns. Features ATS-aware company & role extractor supporting Darwinbox, Greenhouse, Lever, Workday.',
      tech: ['React', 'Node.js', 'MongoDB', 'Gmail API', 'Firebase', 'NLP'],
      github: 'https://github.com/RohitKamble171012',
      live: 'https://applyflow.vercel.app',
      highlights: ['7/7 Classification Accuracy', '60+ Regex Patterns', 'Gmail Auto-sync', 'ATS-aware Extractor', 'Interactive Calendar'],
      icon: FileText,
      badge: 'NEW',
      accent: '#00C9A7'
    },
    {
      title: 'SmartLearn Hub',
      description: 'Interactive LMS built during IIT Bombay internship. Enables teachers to create quizzes and students to attempt them with real-time evaluation, progress dashboards, and an AI learning assistant via Gemini API.',
      tech: ['Next.js', 'Express.js', 'MongoDB', 'Firebase Auth', 'Gemini API', 'Recharts'],
      github: 'https://github.com/RohitKamble171012/SmartLearn-Hub',
      live: 'https://smart-learn-hub-web.vercel.app/',
      highlights: ['AI Assistant', 'Real-time Evaluation', 'Progress Analytics'],
      icon: Brain,
      badge: null,
      accent: '#4C6EF5'
    },
    {
      title: 'RetailIQ',
      description: 'Real-time retail management platform with QR-based intelligent cart, ML sales forecasting using Prophet & LightGBM, AI shopping assistant, and payment integration. Serving multiple live shopkeeper clients.',
      tech: ['React PWA', 'Node.js', 'MongoDB', 'Redis', 'Prophet', 'LightGBM', 'OAuth2.0'],
      github: 'https://github.com/RohitKamble171012/RetailIQ',
      live: null,
      highlights: ['QR Cart System', 'ML Forecasting', 'Multi-client Live'],
      icon: Zap,
      badge: 'ONGOING',
      accent: '#F59E0B'
    },
    {
      title: 'Deal Detective',
      description: 'AI-powered price comparison tool that aggregates product listings from multiple e-commerce platforms. Features dual chatbot — web AI chatbot and Telegram bot — for seamless deal discovery.',
      tech: ['Python', 'Express.js', 'React', 'AI/ML APIs', 'Telegram Bot API'],
      github: 'https://github.com/RohitKamble171012/Deal-Detector',
      live: null,
      highlights: ['Price Aggregation', 'Telegram Bot', 'AI Chatbot'],
      icon: Database,
      badge: null,
      accent: '#10B981'
    },
    {
      title: 'Sharp Engineering Website',
      description: 'Official company website built from scratch for a manufacturing client. Fully responsive, SEO-optimized, deployed on Vercel with fast load times and professional stakeholder-facing UI.',
      tech: ['Next.js', 'React', 'Tailwind CSS', 'Vercel'],
      github: null,
      live: 'https://www.sharpengineering.online/',
      highlights: ['SEO Optimized', 'Production Deployed', 'Freelance Client'],
      icon: Globe,
      badge: 'LIVE',
      accent: '#6366F1'
    }
  ];

  const experiences = [
    {
      role: 'Full-Stack Web Development Intern',
      org: 'IIT Bombay',
      period: 'Jul 2025 – Oct 2025',
      type: 'Internship',
      bullets: [
        'Built SmartLearn Hub — a full-stack LMS with quiz engine, real-time evaluation, and Gemini AI integration.',
        'Implemented secure user authentication, MongoDB integration, and responsive UI using React and Node.js.',
        'Collaborated with an agile team; project evaluated and certified by IIT faculty.'
      ]
    },
    {
      role: 'Freelance Web Developer',
      org: 'Sharp Engineering, Jaysinghpur',
      period: 'Sep 2025 – Dec 2025',
      type: 'Freelance',
      bullets: [
        'Designed and developed full company website using Next.js, React, Tailwind CSS — deployed on Vercel.',
        'Delivered fully responsive, SEO-optimized UI improving online presence across all devices.',
        'Coordinated with business stakeholders to translate requirements into clean production-grade solution.'
      ]
    },
    {
      role: 'AI-ML Virtual Intern',
      org: 'Edu Skills (Google for Developers & AICTE NEAT)',
      period: 'Apr 2024 – Jun 2024',
      type: 'Internship',
      bullets: [
        'Delivered ML models with 85%+ accuracy on complex real-world datasets using TensorFlow and Scikit-Learn.',
        'Optimized training pipelines reducing training time by 30% through workflow improvements.'
      ]
    }
  ];

  const certifications = [
    'Artificial Intelligence – NoviTech Pvt. Ltd.',
    'MongoDB Node.js Developers Path',
    'Full Stack Web Development – GeeksforGeeks',
    'AI-ML Cohort 8 Virtual Internship – AICTE',
    'Power BI – Job Simulation',
    'IIT Bombay Internship Certification'
  ];

  const stats = [
    { label: 'Projects', value: '6+' },
    { label: 'Technologies', value: '25+' },
    { label: 'Internships', value: '2' },
    { label: 'CGPA', value: '7.8' }
  ];

  const scrollTo = (section: string) => {
    setIsMenuOpen(false);
    document.getElementById(section.toLowerCase())?.scrollIntoView({ behavior: 'smooth' });
  };

  // ── COLORS ──────────────────────────────────────────────────
  const navy    = '#0A1628';
  const navyMid = '#0F2040';
  const navyLt  = '#162947';
  const gold    = '#E8A838';
  const goldLt  = '#F5C76A';
  const white   = '#F0F4FF';
  const muted   = '#8BA4C8';
  const border  = 'rgba(232,168,56,0.18)';
  const borderHover = 'rgba(232,168,56,0.45)';

  const sectionTitle = (sub: string, main: string) => (
    <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
      <p style={{ color: gold, fontSize: 12, fontWeight: 600, letterSpacing: '0.15em', textTransform: 'uppercase', marginBottom: 8 }}>{sub}</p>
      <h2 style={{ fontSize: '2.25rem', fontWeight: 700, color: white, margin: 0 }}>{main}</h2>
      <div style={{ width: 48, height: 3, background: gold, borderRadius: 2, margin: '12px auto 0' }} />
    </div>
  );

  return (
    <div style={{ background: navy, color: white, fontFamily: 'Inter, system-ui, sans-serif', minHeight: '100vh' }}>

      {/* ── NAVBAR ── */}
      <nav style={{
        position: 'fixed', top: 0, width: '100%', zIndex: 1000,
        background: scrollY > 60 ? 'rgba(10,22,40,0.97)' : 'transparent',
        backdropFilter: scrollY > 60 ? 'blur(16px)' : 'none',
        borderBottom: scrollY > 60 ? `1px solid ${border}` : 'none',
        transition: 'all 0.3s'
      }}>
        <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 1.5rem', display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: 64 }}>
          <span style={{ fontSize: 20, fontWeight: 700, color: gold, letterSpacing: '-0.02em' }}>RK.</span>
          <div style={{ display: 'flex', gap: '2rem' }} className="nav-desktop">
            {navItems.map(item => (
              <button key={item} onClick={() => scrollTo(item)}
                style={{ background: 'none', border: 'none', cursor: 'pointer', fontSize: 14, fontWeight: 500,
                  color: activeSection === item.toLowerCase() ? gold : muted,
                  borderBottom: activeSection === item.toLowerCase() ? `2px solid ${gold}` : '2px solid transparent',
                  paddingBottom: 2, transition: 'all 0.2s' }}>
                {item}
              </button>
            ))}
          </div>
          <button onClick={() => setIsMenuOpen(!isMenuOpen)} style={{ background: 'none', border: 'none', cursor: 'pointer', color: white, display: 'none' }} className="nav-mobile-btn">
            {isMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
        {isMenuOpen && (
          <div style={{ background: navyMid, borderTop: `1px solid ${border}`, padding: '1rem 1.5rem' }}>
            {navItems.map(item => (
              <button key={item} onClick={() => scrollTo(item)}
                style={{ display: 'block', width: '100%', textAlign: 'left', background: 'none', border: 'none', cursor: 'pointer',
                  color: activeSection === item.toLowerCase() ? gold : muted, fontSize: 15, padding: '0.6rem 0', fontWeight: 500 }}>
                {item}
              </button>
            ))}
          </div>
        )}
      </nav>

      {/* ── HERO ── */}
      <section id="home" style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '6rem 1.5rem 3rem', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', top: '20%', right: '10%', width: 320, height: 320, borderRadius: '50%', background: 'rgba(232,168,56,0.05)', filter: 'blur(80px)', pointerEvents: 'none' }} />
        <div style={{ position: 'absolute', bottom: '15%', left: '5%', width: 240, height: 240, borderRadius: '50%', background: 'rgba(76,110,245,0.07)', filter: 'blur(60px)', pointerEvents: 'none' }} />

        <div style={{ maxWidth: 900, width: '100%', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem', alignItems: 'center' }}>
          {/* LEFT */}
          <div>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: 'rgba(232,168,56,0.1)', border: `1px solid ${border}`, borderRadius: 4, padding: '6px 14px', marginBottom: '1.5rem' }}>
              <div style={{ width: 8, height: 8, borderRadius: '50%', background: '#22C55E', animation: 'pulse 2s infinite' }} />
              <span style={{ fontSize: 13, color: gold, fontWeight: 500 }}>Available for opportunities</span>
            </div>

            <h1 style={{ fontSize: '3rem', fontWeight: 800, lineHeight: 1.1, margin: '0 0 0.5rem', color: white }}>
              Rohit<br /><span style={{ color: gold }}>Kamble</span>
            </h1>

            <div style={{ height: 36, overflow: 'hidden', marginBottom: '1.25rem' }}>
              <p style={{ fontSize: '1.2rem', color: muted, fontWeight: 500, margin: 0 }}>{roles[currentRole]}</p>
            </div>

            <p style={{ fontSize: 15, color: muted, lineHeight: 1.7, marginBottom: '2rem', maxWidth: 440 }}>
              B.Tech CS (Data Science) student at DYPCET Kolhapur. Building scalable full-stack applications and shipping real products to real clients.
            </p>

            {/* Stats */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 12, marginBottom: '2rem' }}>
              {stats.map(s => (
                <div key={s.label} style={{ background: navyMid, border: `1px solid ${border}`, borderRadius: 8, padding: '12px 8px', textAlign: 'center' }}>
                  <div style={{ fontSize: '1.4rem', fontWeight: 800, color: gold }}>{s.value}</div>
                  <div style={{ fontSize: 11, color: muted, marginTop: 2 }}>{s.label}</div>
                </div>
              ))}
            </div>

            <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
              <a href="mailto:rohikamble171012@gmail.com"
                style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: gold, color: navy, padding: '10px 22px', borderRadius: 6, fontWeight: 700, fontSize: 14, textDecoration: 'none' }}>
                <Mail size={16} /> Hire Me
              </a>
              <a href="https://github.com/RohitKamble171012" target="_blank" rel="noopener noreferrer"
                style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: 'transparent', color: white, padding: '10px 22px', borderRadius: 6, fontWeight: 600, fontSize: 14, textDecoration: 'none', border: `1px solid ${border}` }}>
                <Github size={16} /> GitHub
              </a>
              <a href="https://www.linkedin.com/in/rohit-kamble-8b0098318" target="_blank" rel="noopener noreferrer"
                style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: 'transparent', color: white, padding: '10px 22px', borderRadius: 6, fontWeight: 600, fontSize: 14, textDecoration: 'none', border: `1px solid ${border}` }}>
                <Linkedin size={16} /> LinkedIn
              </a>
            </div>
          </div>

          {/* RIGHT — Box Photo */}
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1.5rem' }}>
            <div style={{ position: 'relative' }}>
              <div style={{ width: 280, height: 320, borderRadius: 12, overflow: 'hidden', border: `3px solid ${gold}`, boxShadow: `0 0 40px rgba(232,168,56,0.2)` }}>
                <img src="/rohit.jpg" alt="Rohit Kamble"
                  style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.style.display = 'none';
                    if (target.parentElement) {
                      target.parentElement.style.background = 'linear-gradient(135deg,#162947,#0F2040)';
                      target.parentElement.innerHTML += '<div style="display:flex;align-items:center;justify-content:center;height:100%;font-size:5rem;font-weight:800;color:#E8A838;">RK</div>';
                    }
                  }}
                />
              </div>

              <div style={{ position: 'absolute', top: -12, left: -12, background: navyMid, border: `1px solid ${border}`, borderRadius: 8, padding: '8px 14px' }}>
                <span style={{ fontSize: 12, fontWeight: 600, color: gold }}>📍 Kolhapur, MH</span>
              </div>
            </div>

            <div style={{ display: 'flex', gap: 16 }}>
              {[
                { icon: Github, href: 'https://github.com/RohitKamble171012' },
                { icon: Linkedin, href: 'https://www.linkedin.com/in/rohit-kamble-8b0098318' },
                { icon: Mail, href: 'mailto:rohikamble171012@gmail.com' },
                { icon: Phone, href: 'tel:+918010409600' }
              ].map(({ icon: Icon, href }, i) => (
                <a key={i} href={href} target="_blank" rel="noopener noreferrer"
                  style={{ width: 44, height: 44, borderRadius: 8, background: navyMid, border: `1px solid ${border}`, display: 'flex', alignItems: 'center', justifyContent: 'center', color: muted, textDecoration: 'none', transition: 'all 0.2s' }}
                  onMouseEnter={e => { (e.currentTarget as HTMLAnchorElement).style.borderColor = gold; (e.currentTarget as HTMLAnchorElement).style.color = gold; }}
                  onMouseLeave={e => { (e.currentTarget as HTMLAnchorElement).style.borderColor = border; (e.currentTarget as HTMLAnchorElement).style.color = muted; }}>
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── SKILLS ── */}
      <section id="skills" style={{ padding: '5rem 1.5rem', background: navyMid }}>
        <div style={{ maxWidth: 1100, margin: '0 auto' }}>
          {sectionTitle('My Arsenal', 'Technical Skills')}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 20 }}>
            {Object.entries(skills).map(([cat, items]) => (
              <div key={cat} style={{ background: navy, border: `1px solid ${border}`, borderRadius: 10, padding: '1.25rem 1.5rem', transition: 'all 0.2s' }}
                onMouseEnter={e => (e.currentTarget as HTMLDivElement).style.borderColor = borderHover}
                onMouseLeave={e => (e.currentTarget as HTMLDivElement).style.borderColor = border}>
                <h3 style={{ color: gold, fontSize: 13, fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: 14, margin: '0 0 14px' }}>{cat}</h3>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
                  {items.map(skill => (
                    <span key={skill} style={{ background: 'rgba(232,168,56,0.08)', border: `1px solid rgba(232,168,56,0.2)`, borderRadius: 4, padding: '4px 10px', fontSize: 13, color: white }}>
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PROJECTS ── */}
      <section id="projects" style={{ padding: '5rem 1.5rem' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto' }}>
          {sectionTitle("What I've Built", 'Featured Projects')}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: 24 }}>
            {projects.map((p, i) => (
              <div key={i} style={{ background: navyMid, border: `1px solid ${border}`, borderRadius: 12, padding: '1.5rem', display: 'flex', flexDirection: 'column', gap: 12, transition: 'all 0.2s', position: 'relative' }}
                onMouseEnter={e => { (e.currentTarget as HTMLDivElement).style.borderColor = p.accent; (e.currentTarget as HTMLDivElement).style.transform = 'translateY(-4px)'; }}
                onMouseLeave={e => { (e.currentTarget as HTMLDivElement).style.borderColor = border; (e.currentTarget as HTMLDivElement).style.transform = 'none'; }}>

                {p.badge && (
                  <div style={{ position: 'absolute', top: 16, right: 16, background: p.badge === 'NEW' ? '#22C55E' : p.badge === 'LIVE' ? '#4C6EF5' : '#F59E0B', color: navy, fontSize: 10, fontWeight: 800, padding: '3px 8px', borderRadius: 4, letterSpacing: '0.08em' }}>
                    {p.badge}
                  </div>
                )}

                <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                  <div style={{ width: 44, height: 44, borderRadius: 10, background: `${p.accent}18`, border: `1px solid ${p.accent}40`, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <p.icon size={22} color={p.accent} />
                  </div>
                  <h3 style={{ fontSize: '1.1rem', fontWeight: 700, color: white, margin: 0 }}>{p.title}</h3>
                </div>

                <p style={{ fontSize: 14, color: muted, lineHeight: 1.65, margin: 0, flexGrow: 1 }}>{p.description}</p>

                <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6 }}>
                  {p.highlights.map(h => (
                    <span key={h} style={{ fontSize: 11, color: p.accent, background: `${p.accent}12`, border: `1px solid ${p.accent}30`, borderRadius: 3, padding: '2px 8px', fontWeight: 600 }}>{h}</span>
                  ))}
                </div>

                <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6 }}>
                  {p.tech.map(t => (
                    <span key={t} style={{ fontSize: 12, color: muted, background: 'rgba(255,255,255,0.04)', borderRadius: 3, padding: '2px 8px' }}>{t}</span>
                  ))}
                </div>

                <div style={{ display: 'flex', gap: 16, paddingTop: 4, borderTop: `1px solid ${border}` }}>
                  {p.github && <a href={p.github} target="_blank" rel="noopener noreferrer" style={{ display: 'flex', alignItems: 'center', gap: 6, color: muted, textDecoration: 'none', fontSize: 13, fontWeight: 500 }}><Github size={15} /> Code</a>}
                  {p.live && <a href={p.live} target="_blank" rel="noopener noreferrer" style={{ display: 'flex', alignItems: 'center', gap: 6, color: gold, textDecoration: 'none', fontSize: 13, fontWeight: 600 }}><ExternalLink size={15} /> Live Demo</a>}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── EXPERIENCE ── */}
      <section id="experience" style={{ padding: '5rem 1.5rem', background: navyMid }}>
        <div style={{ maxWidth: 900, margin: '0 auto' }}>
          {sectionTitle('My Journey', 'Experience')}
          <div style={{ position: 'relative' }}>
            <div style={{ position: 'absolute', left: 16, top: 0, bottom: 0, width: 2, background: `linear-gradient(to bottom, ${gold}, transparent)` }} />
            <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem', paddingLeft: '3rem' }}>
              {experiences.map((exp, i) => (
                <div key={i} style={{ position: 'relative' }}>
                  <div style={{ position: 'absolute', left: -38, top: 4, width: 14, height: 14, borderRadius: '50%', background: gold, border: `3px solid ${navyMid}` }} />
                  <div style={{ background: navy, border: `1px solid ${border}`, borderRadius: 10, padding: '1.25rem 1.5rem' }}
                    onMouseEnter={e => (e.currentTarget as HTMLDivElement).style.borderColor = borderHover}
                    onMouseLeave={e => (e.currentTarget as HTMLDivElement).style.borderColor = border}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: 8, marginBottom: 12 }}>
                      <div>
                        <h3 style={{ fontSize: '1rem', fontWeight: 700, color: white, margin: '0 0 4px' }}>{exp.role}</h3>
                        <p style={{ fontSize: 14, color: gold, margin: 0, fontWeight: 500 }}>{exp.org}</p>
                      </div>
                      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end', gap: 4 }}>
                        <span style={{ fontSize: 12, color: muted, background: 'rgba(232,168,56,0.08)', border: `1px solid ${border}`, borderRadius: 4, padding: '3px 10px' }}>{exp.period}</span>
                        <span style={{ fontSize: 11, color: navy, background: gold, borderRadius: 4, padding: '2px 8px', fontWeight: 700 }}>{exp.type}</span>
                      </div>
                    </div>
                    <ul style={{ margin: 0, paddingLeft: '1.2rem', display: 'flex', flexDirection: 'column', gap: 6 }}>
                      {exp.bullets.map((b, j) => <li key={j} style={{ fontSize: 14, color: muted, lineHeight: 1.6 }}>{b}</li>)}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── EDUCATION ── */}
      <section id="education" style={{ padding: '5rem 1.5rem' }}>
        <div style={{ maxWidth: 900, margin: '0 auto' }}>
          {sectionTitle('Academic Background', 'Education')}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
            {[
              { deg: 'B.Tech — Computer Science & Engineering (Data Science)', inst: 'D. Y. Patil College of Engineering and Technology, Kolhapur', period: '2022 – 2026', score: 'CGPA: 7.8', highlight: true },
              { deg: 'H.S.C. — Science', inst: 'Private HighSchool and Junior College, Kolhapur', period: '2022', score: '66%', highlight: false },
              { deg: 'S.S.C.', inst: 'Swami Vivekanand English Medium School, Kasaba Sangaon', period: '2020', score: '89.90%', highlight: false }
            ].map((edu, i) => (
              <div key={i} style={{ background: navyMid, border: `1px solid ${edu.highlight ? borderHover : border}`, borderRadius: 10, padding: '1.25rem 1.5rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 12 }}>
                <div style={{ display: 'flex', gap: 16, alignItems: 'center' }}>
                  <div style={{ width: 44, height: 44, borderRadius: 8, background: `rgba(232,168,56,${edu.highlight ? '0.15' : '0.07'})`, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                    <GraduationCap size={22} color={gold} />
                  </div>
                  <div>
                    <h3 style={{ fontSize: edu.highlight ? '1rem' : '0.95rem', fontWeight: 700, color: white, margin: '0 0 4px' }}>{edu.deg}</h3>
                    <p style={{ fontSize: 13, color: muted, margin: 0 }}>{edu.inst}</p>
                  </div>
                </div>
                <div style={{ textAlign: 'right' }}>
                  <div style={{ fontSize: '1.1rem', fontWeight: 800, color: gold }}>{edu.score}</div>
                  <div style={{ fontSize: 12, color: muted }}>{edu.period}</div>
                </div>
              </div>
            ))}
          </div>

          {/* Certs */}
          <div style={{ marginTop: '3rem' }}>
            <h3 style={{ fontSize: 14, fontWeight: 700, color: gold, letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '1rem' }}>Certifications</h3>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: 10 }}>
              {certifications.map((c, i) => (
                <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 10, background: navyMid, border: `1px solid ${border}`, borderRadius: 8, padding: '10px 14px' }}>
                  <Award size={16} color={gold} style={{ flexShrink: 0 }} />
                  <span style={{ fontSize: 13, color: white }}>{c}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── CONTACT ── */}
      <section id="contact" style={{ padding: '5rem 1.5rem', background: navyMid }}>
        <div style={{ maxWidth: 700, margin: '0 auto', textAlign: 'center' }}>
          {sectionTitle("Get In Touch", "Let's Connect")}
          <p style={{ fontSize: 16, color: muted, lineHeight: 1.7, marginBottom: '2.5rem' }}>
            Open to full-time roles, internships, freelance projects, or research collaborations. Always happy to talk tech.
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16, marginBottom: '2rem' }}>
            {[
              { icon: Mail, label: 'Email', val: 'rohikamble171012@gmail.com', href: 'mailto:rohikamble171012@gmail.com' },
              { icon: Phone, label: 'Phone', val: '+91 8010409600', href: 'tel:+918010409600' },
              { icon: Linkedin, label: 'LinkedIn', val: 'rohit-kamble-8b0098318', href: 'https://www.linkedin.com/in/rohit-kamble-8b0098318' },
              { icon: Github, label: 'GitHub', val: 'RohitKamble171012', href: 'https://github.com/RohitKamble171012' }
            ].map(({ icon: Icon, label, val, href }) => (
              <a key={label} href={href} target="_blank" rel="noopener noreferrer"
                style={{ display: 'flex', alignItems: 'center', gap: 14, background: navy, border: `1px solid ${border}`, borderRadius: 10, padding: '1rem 1.25rem', textDecoration: 'none', transition: 'all 0.2s' }}
                onMouseEnter={e => { (e.currentTarget as HTMLAnchorElement).style.borderColor = gold; (e.currentTarget as HTMLAnchorElement).style.transform = 'translateY(-2px)'; }}
                onMouseLeave={e => { (e.currentTarget as HTMLAnchorElement).style.borderColor = border; (e.currentTarget as HTMLAnchorElement).style.transform = 'none'; }}>
                <div style={{ width: 40, height: 40, borderRadius: 8, background: 'rgba(232,168,56,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                  <Icon size={18} color={gold} />
                </div>
                <div style={{ textAlign: 'left' }}>
                  <div style={{ fontSize: 12, color: muted, marginBottom: 2 }}>{label}</div>
                  <div style={{ fontSize: 13, color: white, fontWeight: 500, wordBreak: 'break-all' }}>{val}</div>
                </div>
              </a>
            ))}
          </div>
          <a href="mailto:rohikamble171012@gmail.com"
            style={{ display: 'inline-flex', alignItems: 'center', gap: 10, background: gold, color: navy, padding: '14px 36px', borderRadius: 8, fontWeight: 800, fontSize: 15, textDecoration: 'none' }}>
            <Mail size={18} /> Send Me a Message
          </a>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer style={{ padding: '2rem 1.5rem', borderTop: `1px solid ${border}`, textAlign: 'center' }}>
        <p style={{ color: muted, fontSize: 14, margin: 0 }}>
          Designed & built by <span style={{ color: gold, fontWeight: 700 }}>Rohit Kamble</span> · © 2025
        </p>
      </footer>

      <style>{`
        @media (max-width: 768px) {
          .nav-desktop { display: none !important; }
          .nav-mobile-btn { display: block !important; }
        }
        * { box-sizing: border-box; }
        body { margin: 0; }
        @keyframes pulse { 0%,100%{opacity:1} 50%{opacity:0.4} }
      `}</style>
    </div>
  );
}
