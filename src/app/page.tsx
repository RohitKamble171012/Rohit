"use client"
import React, { useState, useEffect } from 'react';
import { Github, Linkedin, Mail, Phone, ExternalLink, Code, Briefcase, GraduationCap, Award, Menu, X, Download, ChevronDown, Sparkles, Rocket, Brain, Database, Zap, MapPin, Calendar, TrendingUp } from 'lucide-react';

export default function Home() {
  const [activeSection, setActiveSection] = useState('home');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [currentRole, setCurrentRole] = useState(0);

  const roles = [
    'Full-Stack Developer',
    'Data Science Enthusiast',
    'AI/ML Explorer',
    'Problem Solver',
    'Tech Innovator'
  ];

  useEffect(() => {
  const handleScroll = () => {
    setScrollY(window.scrollY);

    const sections = ['home', 'about', 'skills', 'projects', 'experience', 'education', 'contact'];
    for (const section of sections) {
      const element = document.getElementById(section);
      if (element) {
        const rect = element.getBoundingClientRect();
        if (rect.top <= 100 && rect.bottom >= 100) {
          setActiveSection(section);
          break;
        }
      }
    }
  };

  const handleMouseMove = (e: MouseEvent) => {
    setMousePosition({ x: e.clientX, y: e.clientY });
  };

  window.addEventListener('scroll', handleScroll);
  window.addEventListener('mousemove', handleMouseMove);

  const roleInterval = setInterval(() => {
    setCurrentRole(prev => (prev + 1) % roles.length);
  }, 3000);

  return () => {
    window.removeEventListener('scroll', handleScroll);
    window.removeEventListener('mousemove', handleMouseMove);
    clearInterval(roleInterval);
  };
}, []);


  const navItems = ['Home', 'About', 'Skills', 'Projects', 'Experience', 'Education', 'Contact'];

  const skills = {
    'Programming Languages': ['Java', 'Python', 'SQL', 'JavaScript'],
    'Frontend': ['React.js', 'Next.js', 'HTML5', 'Tailwind CSS', 'Bootstrap'],
    'Backend': ['Node.js', 'Express.js', 'RESTful APIs', 'OAuth 2.0'],
    'Databases': ['MongoDB', 'MySQL', 'Redis', 'Firebase'],
    'Analytics & ML': ['Power BI', 'TensorFlow', 'Scikit-Learn', 'Prophet', 'LightGBM'],
    'Tools & DevOps': ['Git', 'GitHub', 'Docker', 'Vercel', 'GitHub Actions']
  };

  const projects = [
    {
      title: 'SmartLearnHub',
      description: 'Interactive learning management platform with AI-assisted learning, quiz creation, real-time evaluation, and progress tracking dashboards. Built during IIT internship with comprehensive teacher and student features.',
      tech: ['Next.js', 'Express.js', 'MongoDB', 'Firebase Auth', 'Gemini API', 'Recharts'],
      github: 'https://github.com/RohitKamble171012/SmartLearn-Hub',
      live: 'https://smart-learn-hub-web.vercel.app/',
      highlights: ['AI Assistant', 'Real-time Evaluation', 'Progress Analytics', 'Responsive Design'],
      icon: Brain,
      color: 'from-blue-500 to-cyan-500'
    },
    {
      title: 'RetailIQ',
      description: 'Real-time retail management platform with QR-based intelligent cart, ML sales forecasting, and AI shopping assistance. Built for multiple shopkeepers as professional clients with comprehensive analytics.',
      tech: ['React PWA', 'Node.js', 'MongoDB', 'Redis', 'Prophet', 'LightGBM', 'OAuth2.0'],
      github: 'https://github.com/RohitKamble171012/RetailIQ',
      live: null,
      highlights: ['QR Cart System', 'ML Forecasting', 'NLP Chatbot', 'Payment Integration', 'Real-time Analytics'],
      icon: Zap,
      color: 'from-purple-500 to-pink-500',
      status: 'Ongoing'
    },
    {
      title: 'Deal Detective',
      description: 'AI-based price comparison tool aggregating products from multiple e-commerce sites. Features both AI chatbot and Telegram bot integration for seamless user interaction and best deal discovery.',
      tech: ['Python', 'Express.js', 'React', 'AI/ML APIs', 'Telegram Bot API'],
      github: 'https://github.com/RohitKamble171012/Deal-Detector',
      live: null,
      highlights: ['Price Aggregation', 'AI Chatbot', 'Telegram Integration', 'Multi-platform'],
      icon: Sparkles,
      color: 'from-green-500 to-emerald-500'
    },
    {
      title: 'Amazon Dashboard',
      description: 'Interactive analytics dashboard for Amazon movie dataset with comprehensive insights on genres, ratings, directors, and regional trends. Features advanced filtering and data visualization.',
      tech: ['React', 'Data Visualization', 'Analytics', 'Interactive Filters'],
      github: 'https://github.com/RohitKamble171012/Amazon-dashboard',
      live: null,
      highlights: ['Data Visualization', 'Interactive Filters', 'Trend Analysis', 'Regional Insights'],
      icon: Database,
      color: 'from-orange-500 to-red-500'
    }
  ];

  const experiences = [
    {
      title: 'Software Developer (Freelance)',
      company: 'Sharp Engineering',
      period: 'Sept 2025 – Dec 2025',
      description: 'Designed and developed the official company website from scratch, delivering a fully responsive, SEO-optimized solution to improve online presence and accessibility.',
      achievements: [
        'Built complete website using Next.js, React, and Tailwind CSS',
        'Deployed and managed production website on Vercel with fast load times',
        'Collaborated with stakeholders to translate business requirements',
        'Created responsive, professional UI accessible across all devices'
      ],
      icon: Briefcase,
      link: 'https://www.sharpengineering.online/'
    },
    {
      title: 'IIT Fullstack Web Development Internship',
      period: 'July 2025 – Oct 2025',
      description: 'Collaboratively developed SmartLearn Hub, an interactive learning platform with quizzes, tests, and AI-assisted learning features. Worked on both frontend and backend development.',
      achievements: [
        'Built scalable learning platform with team collaboration',
        'Implemented secure user authentication and authorization',
        'Created responsive UI components and database integration',
        'Developed real-time evaluation and progress tracking systems'
      ],
      icon: Code
    },
    {
      title: 'AI-ML Virtual Intern',
      company: 'Edu Skills (Google for Developers & AICTE NEAT)',
      period: 'Apr 2024 – Jun 2024',
      description: 'Completed virtual internship focused on real-world applications of machine learning and deep learning using TensorFlow, Scikit-Learn, and Python.',
      achievements: [
        'Delivered models achieving over 85% accuracy',
        'Optimized workflows reducing training time by 30%',
        'Created actionable insights through data visualizations',
        'Applied ML to complex datasets with clear evaluations'
      ],
      icon: Brain
    }
  ];

  const trainings = [
    { name: 'AI-ML Training', org: 'NoviTech', period: 'Oct 2024 – Nov 2024', focus: 'Machine Learning, Deep Learning, Neural Networks' },
    { name: 'Campus Training', org: 'Gryphon Academy', period: 'Jan 2025', focus: 'Python, Data Science, Machine Learning, Aptitude, Communication' },
    { name: 'Data Science Training', org: 'Acmegrade', period: 'Dec 2023 - Jan 2024', focus: 'Python libraries, Predictive Modeling, Anaconda' }
  ];

  const certifications = [
    'Artificial Intelligence – NoviTech Private Limited',
    'Power BI – Job Simulation',
    'AI-ML Cohort 8 Virtual Internship',
    'MongoDB Node.js Developers Path',
    'Acmegrade Data Science Training',
    'IIT Bombay Internship'
  ];

  const stats = [
    { label: 'Projects Completed', value: '5', icon: Rocket },
    { label: 'Technologies', value: '25+', icon: Code },
    { label: 'Internships', value: '2', icon: Briefcase },
    { label: 'CGPA', value: '7.70', icon: GraduationCap }
  ];

  const scrollToSection = (section: string) => {
    setActiveSection(section.toLowerCase());
    setIsMenuOpen(false);
    document.getElementById(section.toLowerCase())?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-purple-950 to-slate-950 text-white overflow-hidden">
      {/* Animated Background */}
      <div className="fixed inset-0 pointer-events-none">
        <div
          className="absolute w-96 h-96 bg-purple-500/10 rounded-full blur-3xl transition-all duration-300 ease-out"
          style={{
            left: mousePosition.x - 192,
            top: mousePosition.y - 192,
          }}
        />
        <div className="absolute top-20 right-20 w-72 h-72 bg-pink-500/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '700ms' }} />
      </div>

      {/* Navbar */}
      <nav className={`fixed w-full z-50 transition-all duration-300 ${scrollY > 50 ? 'bg-slate-950/90 backdrop-blur-xl shadow-2xl shadow-purple-500/10' : 'bg-transparent'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="text-2xl font-bold bg-gradient-to-r from-purple-400 via-pink-400 to-purple-400 bg-clip-text text-transparent">
              Rohit Kamble
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex space-x-8">
              {navItems.map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item)}
                  className={`relative hover:text-purple-400 transition-colors ${activeSection === item.toLowerCase() ? 'text-purple-400' : ''}`}
                >
                  {item}
                  {activeSection === item.toLowerCase() && (
                    <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-gradient-to-r from-purple-400 to-pink-400" />
                  )}
                </button>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="md:hidden">
              {isMenuOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-slate-950/95 backdrop-blur-xl border-t border-purple-500/20">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navItems.map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item)}
                  className="block w-full text-left px-3 py-2 hover:bg-purple-900/50 rounded transition-all"
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center px-4 pt-16 relative">
        <div className="text-center max-w-6xl mx-auto relative z-10">
          <div className="animate-fade-in">
            {/* Profile Photo */}
            <div className="mb-8 flex justify-center">
              <div className="relative group">
                <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 via-pink-600 to-purple-600 rounded-full blur-lg opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-pulse"></div>

                <div className="relative w-48 h-48 rounded-full overflow-hidden border-4 border-purple-500/50 shadow-2xl shadow-purple-500/50 bg-gradient-to-br from-purple-600 to-pink-600 flex items-center justify-center">
                  <img
                    src="/rohit.jpg"
                    alt="Rohit Kamble"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>

            <div className="mb-4">
              <span className="px-4 py-2 bg-purple-500/20 border border-purple-500/50 rounded-full text-sm font-semibold inline-block animate-bounce">
                👋 Welcome to my portfolio
              </span>
            </div>

            <h1 className="text-5xl md:text-7xl font-bold mb-4 bg-gradient-to-r from-purple-400 via-pink-400 to-purple-400 bg-clip-text text-transparent">
              Rohit Subhash Kamble
            </h1>

            <div className="h-12 mb-4">
              <p className="text-2xl md:text-3xl text-transparent bg-clip-text bg-gradient-to-r from-purple-300 to-pink-300 font-semibold">
                {roles[currentRole]}
              </p>
            </div>

            <div className="flex items-center justify-center gap-4 mb-8 text-gray-400">
              <MapPin size={18} className="text-purple-400" />
              <span>Kolhapur, Maharashtra, India</span>
            </div>

            <p className="text-lg text-gray-300 mb-12 max-w-2xl mx-auto leading-relaxed">
              Passionate about building <span className="text-purple-400 font-semibold">scalable applications</span> and
              extracting <span className="text-pink-400 font-semibold">insights from data</span>.
              Turning ideas into reality with code!
            </p>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12 max-w-3xl mx-auto">
              {stats.map((stat, idx) => (
                <div key={idx} className="bg-slate-900/50 backdrop-blur-sm rounded-xl p-4 border border-purple-500/20 hover:border-purple-500/50 transition-all hover:scale-105">
                  <stat.icon className="w-8 h-8 mx-auto mb-2 text-purple-400" />
                  <div className="text-3xl font-bold text-white mb-1">{stat.value}</div>
                  <div className="text-xs text-gray-400">{stat.label}</div>
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap justify-center gap-4 mb-12">
              <a href="tel:+918010409600" className="group flex items-center gap-2 bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-500 hover:to-purple-600 px-8 py-4 rounded-full transition-all transform hover:scale-105 shadow-lg shadow-purple-500/50">
                <Phone size={20} className="group-hover:rotate-12 transition-transform" /> Call Me
              </a>
              <a href="mailto:rohikamble171012@gmail.com" className="group flex items-center gap-2 bg-gradient-to-r from-pink-600 to-pink-700 hover:from-pink-500 hover:to-pink-600 px-8 py-4 rounded-full transition-all transform hover:scale-105 shadow-lg shadow-pink-500/50">
                <Mail size={20} className="group-hover:rotate-12 transition-transform" /> Email Me
              </a>
              <button
                onClick={() =>
                  window.open(
                    'https://drive.google.com/file/d/1A6wo9BcslvxR-CcQs1_6ycbYNjtBb4ei/view?usp=sharing',
                    '_blank'
                  )
                }
                className="group flex items-center gap-2 bg-slate-800 hover:bg-slate-700 px-8 py-4 rounded-full transition-all transform hover:scale-105 border border-purple-500/30"
              >
                <Download size={20} className="group-hover:translate-y-1 transition-transform" />
                View Resume
              </button>
            </div>

            {/* Social Links */}
            <div className="flex justify-center gap-6">
              <a href="https://github.com/RohitKamble171012" target="_blank" rel="noopener noreferrer" className="hover:text-purple-400 transition-all transform hover:scale-125 hover:rotate-12">
                <Github size={32} />
              </a>
              <a href="https://www.linkedin.com/in/rohit-kamble-8b0098318" target="_blank" rel="noopener noreferrer" className="hover:text-purple-400 transition-all transform hover:scale-125 hover:rotate-12">
                <Linkedin size={32} />
              </a>
              <a href="mailto:rohikamble171012@gmail.com" className="hover:text-purple-400 transition-all transform hover:scale-125 hover:rotate-12">
                <Mail size={32} />
              </a>
            </div>

            {/* Scroll Indicator */}
            <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
              <ChevronDown size={32} className="text-purple-400" />
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <span className="text-purple-400 font-semibold text-sm uppercase tracking-wider">Get to know me</span>
            <h2 className="text-4xl md:text-5xl font-bold mt-2 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              About Me
            </h2>
          </div>
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="space-y-6">
              <div className="bg-slate-900/50 backdrop-blur-sm rounded-2xl p-8 border border-purple-500/20 hover:border-purple-500/50 transition-all">
                <p className="text-lg text-gray-300 leading-relaxed mb-6">
                  I'm a <span className="text-purple-400 font-semibold">Computer Science student</span> specializing in Data Science at D. Y. Patil College of Engineering and Technology, Kolhapur.
                  With a strong foundation in both frontend and backend development, I'm passionate about creating innovative solutions that bridge
                  technology and user experience.
                </p>
                <p className="text-lg text-gray-300 leading-relaxed mb-6">
                  My journey spans from building <span className="text-pink-400 font-semibold">AI-powered learning platforms</span> to developing retail management systems with
                  <span className="text-purple-400 font-semibold"> ML-based forecasting</span>.
                  I thrive on solving complex problems and transforming ideas into scalable, efficient applications.
                </p>
                <p className="text-lg text-gray-300 leading-relaxed">
                  Currently maintaining a <span className="text-purple-400 font-semibold">7.70 CGPA</span> while actively working on
                  professional projects like RetailIQ with multiple shopkeepers as clients, demonstrating my ability to deliver
                  real-world solutions.
                </p>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-gradient-to-br from-purple-600/20 to-pink-600/20 rounded-2xl p-6 border border-purple-500/30 hover:scale-105 transition-all">
                <Code className="w-12 h-12 text-purple-400 mb-3" />
                <h3 className="text-xl font-bold mb-2">Clean Code</h3>
                <p className="text-gray-400 text-sm">Writing maintainable and efficient code</p>
              </div>
              <div className="bg-gradient-to-br from-pink-600/20 to-purple-600/20 rounded-2xl p-6 border border-pink-500/30 hover:scale-105 transition-all">
                <Brain className="w-12 h-12 text-pink-400 mb-3" />
                <h3 className="text-xl font-bold mb-2">AI/ML</h3>
                <p className="text-gray-400 text-sm">Building intelligent solutions</p>
              </div>
              <div className="bg-gradient-to-br from-blue-600/20 to-purple-600/20 rounded-2xl p-6 border border-blue-500/30 hover:scale-105 transition-all">
                <Rocket className="w-12 h-12 text-blue-400 mb-3" />
                <h3 className="text-xl font-bold mb-2">Fast Learner</h3>
                <p className="text-gray-400 text-sm">Adapting to new technologies</p>
              </div>
              <div className="bg-gradient-to-br from-green-600/20 to-blue-600/20 rounded-2xl p-6 border border-green-500/30 hover:scale-105 transition-all">
                <Sparkles className="w-12 h-12 text-green-400 mb-3" />
                <h3 className="text-xl font-bold mb-2">Creative</h3>
                <p className="text-gray-400 text-sm">Innovative problem solving</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 px-4 bg-slate-900/30 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <span className="text-purple-400 font-semibold text-sm uppercase tracking-wider">My Arsenal</span>
            <h2 className="text-4xl md:text-5xl font-bold mt-2 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Technical Skills
            </h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {Object.entries(skills).map(([category, items], idx) => (
              <div
                key={category}
                className="group bg-slate-900/50 backdrop-blur-sm rounded-xl p-6 border border-purple-500/20 hover:border-purple-500/50 transition-all hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/20"
              >
                <h3 className="text-xl font-semibold mb-4 text-purple-400 group-hover:text-pink-400 transition-colors">{category}</h3>
                <div className="flex flex-wrap gap-2">
                  {items.map((skill) => (
                    <span key={skill} className="bg-purple-900/30 px-3 py-1 rounded-full text-sm border border-purple-500/30 hover:bg-purple-900/50 hover:border-purple-500/50 transition-all cursor-default">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <span className="text-purple-400 font-semibold text-sm uppercase tracking-wider">What I've Built</span>
            <h2 className="text-4xl md:text-5xl font-bold mt-2 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Featured Projects
            </h2>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, idx) => (
              <div
                key={idx}
                className="group bg-slate-900/50 backdrop-blur-sm rounded-2xl p-6 border border-purple-500/20 hover:border-purple-500/50 transition-all hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/20"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className={`p-3 rounded-xl bg-gradient-to-br ${project.color} bg-opacity-20`}>
                    <project.icon className="w-8 h-8 text-white" />
                  </div>
                  <div className="flex items-center gap-2">
                    {project.status && (
                      <span className="px-3 py-1 bg-yellow-500/20 border border-yellow-500/50 rounded-full text-xs font-semibold text-yellow-400">
                        {project.status}
                      </span>
                    )}
                    <Code className="text-pink-400 group-hover:rotate-12 transition-transform" />
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-purple-400 group-hover:to-pink-400 transition-all">
                  {project.title}
                </h3>
                <p className="text-gray-300 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.highlights.map((highlight) => (
                    <span key={highlight} className="bg-pink-900/30 px-3 py-1 rounded-full text-xs border border-pink-500/30">
                      ✨ {highlight}
                    </span>
                  ))}
                </div>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech) => (
                    <span key={tech} className="bg-slate-700/50 px-2 py-1 rounded text-xs text-gray-400">
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex gap-4">
                  {project.github && (
                    <a href={project.github} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-purple-400 hover:text-purple-300 transition-all hover:scale-110">
                      <Github size={18} /> Code
                    </a>
                  )}
                  {project.live && (
                    <a href={project.live} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-pink-400 hover:text-pink-300 transition-all hover:scale-110">
                      <ExternalLink size={18} /> Live Demo
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 px-4 bg-slate-900/30 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <span className="text-purple-400 font-semibold text-sm uppercase tracking-wider">My Journey</span>
            <h2 className="text-4xl md:text-5xl font-bold mt-2 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Experience & Training
            </h2>
          </div>

          {/* Internships */}
          <div className="mb-12">
            <h3 className="text-2xl font-semibold mb-6 text-purple-400 flex items-center gap-2">
              <Briefcase className="animate-pulse" /> Professional Experience
            </h3>
            <div className="space-y-6">
              {experiences.map((exp, idx) => (
                <div key={idx} className="group bg-slate-900/50 backdrop-blur-sm rounded-xl p-6 border border-purple-500/20 hover:border-purple-500/50 transition-all hover:scale-105">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="p-3 bg-gradient-to-br from-purple-600 to-pink-600 rounded-xl group-hover:rotate-12 transition-transform">
                      <exp.icon className="text-white" size={24} />
                    </div>
                    <div className="flex-1">
                      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                        <h4 className="text-xl font-bold text-white group-hover:text-purple-400 transition-colors">{exp.title}</h4>
                        <span className="text-pink-400 text-sm font-semibold bg-pink-500/10 px-3 py-1 rounded-full flex items-center gap-1 w-fit">
                          <Calendar size={14} /> {exp.period}
                        </span>
                      </div>
                      {exp.company && <p className="text-gray-400 text-sm mb-3">{exp.company}</p>}
                      <p className="text-gray-300 mb-4">{exp.description}</p>
                      <ul className="space-y-2">
                        {exp.achievements.map((achievement, i) => (
                          <li key={i} className="flex items-start gap-2 text-gray-400">
                            <span className="text-purple-400 mt-1">🚀</span>
                            {achievement}
                          </li>
                        ))}
                      </ul>
                      {exp.link && (
                        <a href={exp.link} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 mt-4 text-purple-400 hover:text-purple-300 transition-all hover:scale-105">
                          <ExternalLink size={16} /> View Website
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Training */}
          <div className="mb-12">
            <h3 className="text-2xl font-semibold mb-6 text-purple-400 flex items-center gap-2">
              <Award className="animate-pulse" /> Professional Training
            </h3>
            <div className="grid md:grid-cols-3 gap-4">
              {trainings.map((training, idx) => (
                <div key={idx} className="group bg-slate-900/50 backdrop-blur-sm rounded-xl p-4 border border-purple-500/20 hover:border-purple-500/50 transition-all hover:scale-105">
                  <h4 className="font-bold text-white mb-2 group-hover:text-purple-400 transition-colors">{training.name}</h4>
                  <p className="text-sm text-gray-400 mb-2">{training.org}</p>
                  <p className="text-xs text-pink-400 mb-2 font-semibold flex items-center gap-1">
                    <Calendar size={12} /> {training.period}
                  </p>
                  <p className="text-sm text-gray-300">{training.focus}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Certifications */}
          <div>
            <h3 className="text-2xl font-semibold mb-6 text-purple-400 flex items-center gap-2">
              <Award className="animate-pulse" /> Certifications
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-3">
              {certifications.map((cert, idx) => (
                <div key={idx} className="bg-slate-900/50 backdrop-blur-sm rounded-lg p-3 border border-purple-500/20 hover:border-purple-500/50 transition-all hover:scale-105 flex items-center gap-2">
                  <span className="text-purple-400">✓</span>
                  <span className="text-sm text-gray-300">{cert}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="py-20 px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <span className="text-purple-400 font-semibold text-sm uppercase tracking-wider">Academic Background</span>
            <h2 className="text-4xl md:text-5xl font-bold mt-2 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Education
            </h2>
          </div>
          <div className="space-y-6">
            {/* Bachelor's Degree */}
            <div className="group bg-slate-900/50 backdrop-blur-sm rounded-xl p-6 border border-purple-500/20 hover:border-purple-500/50 transition-all hover:scale-105">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-gradient-to-br from-purple-600 to-pink-600 rounded-xl group-hover:rotate-12 transition-transform">
                  <GraduationCap className="text-white" size={32} />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold mb-2 group-hover:text-purple-400 transition-colors">Bachelor in Computer Science (Data Science)</h3>
                  <p className="text-gray-400 mb-2">D. Y. Patil College of Engineering and Technology, Kolhapur</p>
                  <div className="flex flex-wrap gap-4 text-sm">
                    <span className="text-pink-400 font-semibold flex items-center gap-1">
                      <Calendar size={14} /> 2022 – 2026
                    </span>
                    <span className="text-purple-400 font-semibold flex items-center gap-1">
                      Current CGPA: 7.70
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* H.S.C */}
            <div className="group bg-slate-900/50 backdrop-blur-sm rounded-xl p-6 border border-purple-500/20 hover:border-purple-500/50 transition-all hover:scale-105">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-gradient-to-br from-blue-600 to-cyan-600 rounded-xl group-hover:rotate-12 transition-transform">
                  <GraduationCap className="text-white" size={28} />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold mb-2 group-hover:text-blue-400 transition-colors">H.S.C. – Science</h3>
                  <p className="text-gray-400 mb-2">Private HighSchool and Junior College, Kolhapur</p>
                  <div className="flex flex-wrap gap-4 text-sm">
                    <span className="text-pink-400 font-semibold flex items-center gap-1">
                      <Calendar size={14} /> 2022
                    </span>
                    <span className="text-blue-400 font-semibold flex items-center gap-1">
                      66%
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* S.S.C */}
            <div className="group bg-slate-900/50 backdrop-blur-sm rounded-xl p-6 border border-purple-500/20 hover:border-purple-500/50 transition-all hover:scale-105">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-gradient-to-br from-green-600 to-emerald-600 rounded-xl group-hover:rotate-12 transition-transform">
                  <GraduationCap className="text-white" size={28} />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold mb-2 group-hover:text-green-400 transition-colors">S.S.C</h3>
                  <p className="text-gray-400 mb-2">Swami Vivekanand English Medium School, Kasaba Sangaon</p>
                  <div className="flex flex-wrap gap-4 text-sm">
                    <span className="text-pink-400 font-semibold flex items-center gap-1">
                      <Calendar size={14} /> 2020
                    </span>
                    <span className="text-green-400 font-semibold flex items-center gap-1">
                      89.90%
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 bg-slate-900/30 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-12">
            <span className="text-purple-400 font-semibold text-sm uppercase tracking-wider">Get In Touch</span>
            <h2 className="text-4xl md:text-5xl font-bold mt-2 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Let's Connect
            </h2>
          </div>

          <div className="bg-slate-900/50 backdrop-blur-sm rounded-2xl p-8 border border-purple-500/20 hover:border-purple-500/50 transition-all mb-8">
            <p className="text-lg text-gray-300 mb-8 leading-relaxed">
              I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
              Whether you have a question or just want to say hi, feel free to reach out!
            </p>

            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <a href="mailto:rohikamble171012@gmail.com" className="group bg-gradient-to-r from-purple-600/20 to-pink-600/20 rounded-xl p-6 border border-purple-500/30 hover:border-purple-500/50 transition-all hover:scale-105">
                <Mail className="w-8 h-8 mx-auto mb-3 text-purple-400 group-hover:rotate-12 transition-transform" />
                <h3 className="font-bold mb-2">Primary Email</h3>
                <p className="text-sm text-gray-400">rohikamble171012@gmail.com</p>
              </a>

              <a href="mailto:rohitkamble171012@gmail.com" className="group bg-gradient-to-r from-purple-600/20 to-pink-600/20 rounded-xl p-6 border border-purple-500/30 hover:border-purple-500/50 transition-all hover:scale-105">
                <Mail className="w-8 h-8 mx-auto mb-3 text-purple-400 group-hover:rotate-12 transition-transform" />
                <h3 className="font-bold mb-2">Secondary Email</h3>
                <p className="text-sm text-gray-400">rohitkamble171012@gmail.com</p>
              </a>

              <a href="tel:+918010409600" className="group bg-gradient-to-r from-pink-600/20 to-purple-600/20 rounded-xl p-6 border border-pink-500/30 hover:border-pink-500/50 transition-all hover:scale-105 md:col-span-2">
                <Phone className="w-8 h-8 mx-auto mb-3 text-pink-400 group-hover:rotate-12 transition-transform" />
                <h3 className="font-bold mb-2">Phone</h3>
                <p className="text-sm text-gray-400">+91 8010409600</p>
              </a>
            </div>

            <div className="flex justify-center gap-6 mb-8">
              <a href="https://github.com/RohitKamble171012" target="_blank" rel="noopener noreferrer" className="group bg-slate-800 hover:bg-slate-700 p-4 rounded-full transition-all hover:scale-110">
                <Github size={24} className="group-hover:rotate-12 transition-transform" />
              </a>
              <a href="https://www.linkedin.com/in/rohit-kamble-8b0098318" target="_blank" rel="noopener noreferrer" className="group bg-slate-800 hover:bg-slate-700 p-4 rounded-full transition-all hover:scale-110">
                <Linkedin size={24} className="group-hover:rotate-12 transition-transform" />
              </a>
              <a href="mailto:rohikamble171012@gmail.com" className="group bg-slate-800 hover:bg-slate-700 p-4 rounded-full transition-all hover:scale-110">
                <Mail size={24} className="group-hover:rotate-12 transition-transform" />
              </a>
            </div>

            <div className="flex flex-wrap justify-center gap-4">
              <a href="mailto:rohikamble171012@gmail.com" className="bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-500 hover:to-purple-600 px-8 py-4 rounded-full transition-all transform hover:scale-105 shadow-lg shadow-purple-500/50 font-semibold">
                Send Message
              </a>
              <a href="https://www.linkedin.com/in/rohit-kamble-8b0098318" target="_blank" rel="noopener noreferrer" className="bg-gradient-to-r from-pink-600 to-pink-700 hover:from-pink-500 hover:to-pink-600 px-8 py-4 rounded-full transition-all transform hover:scale-105 shadow-lg shadow-pink-500/50 font-semibold">
                Connect on LinkedIn
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 border-t border-purple-500/20 relative z-10">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-gray-400 mb-4">
            Designed & Built by <span className="text-purple-400 font-semibold">Rohit Kamble</span>
          </p>
          <p className="text-gray-500 text-sm">
            © 2025 All rights reserved.
          </p>
          <div className="flex justify-center gap-4 mt-4">
            <a href="https://github.com/RohitKamble171012" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-purple-400 transition-colors">
              GitHub
            </a>
            <span className="text-gray-600">•</span>
            <a href="https://www.linkedin.com/in/rohit-kamble-8b0098318" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-purple-400 transition-colors">
              LinkedIn
            </a>
            <span className="text-gray-600">•</span>
            <a href="mailto:rohikamble171012@gmail.com" className="text-gray-400 hover:text-purple-400 transition-colors">
              Email
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
