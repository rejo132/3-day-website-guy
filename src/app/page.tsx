"use client";

import Image from "next/image";
import { useState, useEffect } from "react";

export default function Home() {
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // Dark mode effect
  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDarkMode]);

  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      alert('Thank you for your message! I will get back to you soon.');
      setFormData({ name: '', email: '', message: '' });
      setIsSubmitting(false);
    }, 1000);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className={`min-h-screen font-sans relative overflow-x-hidden transition-colors duration-500 ${isDarkMode ? 'dark' : 'light'}`}>
      {/* Enhanced Animated Background */}
      <div className="fixed inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-purple-900/30 to-slate-900"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(14,230,216,0.15),transparent_50%)] animate-pulse"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(147,51,234,0.12),transparent_50%)] animate-pulse" style={{animationDelay: '1s'}}></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(59,130,246,0.1),transparent_50%)] animate-pulse" style={{animationDelay: '2s'}}></div>
        
        {/* Floating particles */}
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-[--color-accent] rounded-full animate-float opacity-60"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 3}s`,
                animationDuration: `${3 + Math.random() * 4}s`
              }}
            />
          ))}
        </div>
      </div>

      {/* Enhanced Custom Cursor */}
      <div 
        className="fixed w-8 h-8 rounded-full bg-gradient-to-r from-[--color-accent] to-purple-500 pointer-events-none z-50 transition-transform duration-100 ease-out mix-blend-difference animate-pulse"
        style={{
          left: mousePosition.x - 16,
          top: mousePosition.y - 16,
          transform: 'translate(-50%, -50%)'
        }}
      ></div>

      {/* Header */}
      <header className="sticky top-0 z-20 backdrop-blur-xl bg-black/30 border-b border-white/20 shadow-2xl">
        <div className="container flex items-center justify-between py-4">
          <div className="flex items-center gap-3">
            <div className="size-12 grid place-items-center rounded-xl bg-gradient-to-br from-[--color-accent] to-purple-500 border border-white/30 text-black text-xl font-bold shadow-2xl animate-glow">
              R
            </div>
            <span className="text-sm tracking-[0.25em] text-[--color-accent] font-semibold animate-pulse">REJESHO</span>
          </div>
          <nav className="hidden md:flex items-center gap-8 text-sm">
            <a href="#home" className="text-white/80 hover:text-white transition-colors duration-200 relative group">
              Home
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-[--color-accent] to-purple-500 transition-all duration-200 group-hover:w-full"></span>
            </a>
            <a href="#projects" className="text-white/80 hover:text-white transition-colors duration-200 relative group">
              Projects
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-[--color-accent] to-purple-500 transition-all duration-200 group-hover:w-full"></span>
            </a>
            <a href="#skills" className="text-white/80 hover:text-white transition-colors duration-200 relative group">
              Skills
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-[--color-accent] to-purple-500 transition-all duration-200 group-hover:w-full"></span>
            </a>
            <a href="#contact" className="text-white/80 hover:text-white transition-colors duration-200 relative group">
              Contact
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-[--color-accent] to-purple-500 transition-all duration-200 group-hover:w-full"></span>
            </a>
          </nav>
          <button 
            onClick={() => setIsDarkMode(!isDarkMode)}
            className="size-12 grid place-items-center rounded-xl border border-white/30 text-white/70 hover:text-white hover:bg-white/10 transition-all duration-300 backdrop-blur-sm shadow-lg hover:shadow-xl"
            aria-label="Toggle theme"
          >
            {isDarkMode ? '🌙' : '☀️'}
          </button>
        </div>
      </header>

      {/* Hero */}
      <section id="home" className="container grid md:grid-cols-2 gap-8 lg:gap-12 py-16 md:py-24">
        <div className="flex flex-col gap-6 md:gap-8 justify-center">
          <div className="space-y-4">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold bg-gradient-to-r from-white via-[--color-accent] to-purple-400 bg-clip-text text-transparent animate-pulse">
              Hi, I&apos;m Rejesho
            </h1>
            <h2 className="text-2xl md:text-3xl text-[--color-accent] font-semibold animate-glow">
              Transforming ideas into sleek, functional web experiences
            </h2>
            <p className="text-white/80 max-w-[60ch] text-lg leading-relaxed">
              Passionate web developer crafting modern, responsive applications with cutting-edge technologies. 
              Let&apos;s build something amazing together.
            </p>
          </div>
          <div className="flex items-center gap-4">
            <a 
              href="#projects" 
              className="btn-primary group relative overflow-hidden animate-glow"
            >
              <span className="relative z-10">View Projects</span>
              <div className="absolute inset-0 bg-gradient-to-r from-[--color-accent] to-purple-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </a>
            <a 
              href="#contact" 
              className="btn-secondary group relative overflow-hidden"
            >
              <span className="relative z-10">Contact Me</span>
              <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </a>
          </div>
        </div>
        <div className="panel p-8 flex flex-col gap-6 items-center justify-center text-center backdrop-blur-xl bg-white/10 border border-white/30 shadow-2xl animate-float">
          <div className="relative size-32 md:size-36 overflow-hidden rounded-2xl border-4 border-white/30 shadow-2xl animate-glow">
            <Image 
              src="/profile/rejesho-profile.jpg" 
              alt="Rejesho Profile" 
              fill 
              className="object-cover"
              priority
              sizes="(max-width: 768px) 128px, 144px"
            />
          </div>
          <div className="space-y-2">
            <div className="text-2xl font-bold tracking-wide bg-gradient-to-r from-white to-[--color-accent] bg-clip-text text-transparent animate-pulse">
              REJESHO
            </div>
            <div className="text-white/70 font-medium">Modern Web Solutions</div>
          </div>
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="container py-16 md:py-24">
        <div className="text-center mb-12">
          <h3 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-white to-[--color-accent] bg-clip-text text-transparent animate-pulse">
            Featured Projects
          </h3>
          <p className="text-white/70 text-lg max-w-2xl mx-auto">
            Explore my latest work showcasing modern web development techniques and creative solutions
          </p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              key: "dream-journal",
              title: "Dream Journal",
              desc: "A beautiful dream journal application with cosmic aesthetics and intuitive dream logging features.",
              img: "/projects/dream-journal.jpg",
              liveUrl: "https://dreamjournal1.netlify.app/",
              tech: ["React", "CSS3", "JavaScript"],
              features: ["Dream logging", "Cosmic UI", "Responsive design"]
            },
            {
              key: "expense-tracker",
              title: "Expense Tracker",
              desc: "A comprehensive expense management application with clean interface and powerful tracking capabilities.",
              img: "/projects/expense-tracker.jpg",
              liveUrl: "https://expense-tracker-three-steel.vercel.app",
              tech: ["React", "JavaScript", "CSS3"],
              features: ["Expense tracking", "Category management", "Search functionality"]
            },
            {
              key: "quote-generator",
              title: "Random Quote Generator",
              desc: "An interactive quote generator with filtering, favorites, and sharing capabilities.",
              img: "/projects/quote-generator.jpg",
              liveUrl: "https://rejo132.github.io/random-quote-generator",
              tech: ["JavaScript", "HTML5", "CSS3"],
              features: ["Quote generation", "Favorites system", "Social sharing"]
            },
          ].map((project) => (
            <article 
              key={project.key} 
              className="panel p-6 flex flex-col gap-6 backdrop-blur-xl bg-white/10 border border-white/30 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 group animate-float"
            >
              <div className="relative w-full aspect-[16/9] overflow-hidden rounded-xl border border-white/20 group-hover:border-white/40 transition-colors duration-300">
                <Image 
                  src={project.img} 
                  alt={project.title} 
                  fill 
                  className="object-cover group-hover:scale-105 transition-transform duration-500" 
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              <div className="flex-1 space-y-4">
                <h4 className="text-xl font-bold text-white group-hover:text-[--color-accent] transition-colors duration-300">
                  {project.title}
                </h4>
                <p className="text-white/70 leading-relaxed">
                  {project.desc}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech, idx) => (
                    <span 
                      key={idx} 
                      className="px-3 py-1 text-xs font-medium bg-[--color-accent]/20 text-[--color-accent] rounded-full border border-[--color-accent]/30 animate-glow"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="space-y-2">
                  <h5 className="text-sm font-semibold text-white/80">Key Features:</h5>
                  <ul className="text-sm text-white/60 space-y-1">
                    {project.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 bg-[--color-accent] rounded-full animate-pulse"></span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <a 
                  className="btn-primary flex-1 justify-center group" 
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span>Live Demo</span>
                  <span className="ml-2 group-hover:translate-x-1 transition-transform duration-200">→</span>
                </a>
                <a 
                  className="btn-secondary flex-1 justify-center group" 
                  href="#"
                  aria-disabled
                >
                  <span>Code</span>
                  <span className="ml-2 group-hover:translate-x-1 transition-transform duration-200">→</span>
                </a>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Skills + Contact */}
      <section className="container grid lg:grid-cols-2 gap-12 md:gap-16 py-16 md:py-24">
        <div id="skills" className="space-y-8">
          <div>
            <h3 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white to-[--color-accent] bg-clip-text text-transparent animate-pulse">
              Skills & Expertise
            </h3>
            <p className="text-white/70 text-lg mb-8">
              Proficient in modern web technologies and frameworks, delivering high-quality solutions
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
              {[
                { name: "HTML5", icon: "🌐", level: 95 },
                { name: "CSS3", icon: "🎨", level: 90 },
                { name: "JavaScript", icon: "⚡", level: 85 },
                { name: "React", icon: "⚛️", level: 80 },
                { name: "Node.js", icon: "🟢", level: 75 },
                { name: "Git", icon: "📝", level: 85 },
              ].map((skill) => (
                <div key={skill.name} className="panel p-4 text-center backdrop-blur-xl bg-white/10 border border-white/30 hover:border-white/50 transition-all duration-300 group animate-float">
                  <div className="text-2xl mb-2 animate-pulse">{skill.icon}</div>
                  <div className="font-semibold text-white group-hover:text-[--color-accent] transition-colors duration-300">
                    {skill.name}
                  </div>
                  <div className="mt-2 w-full bg-white/10 rounded-full h-2">
                    <div 
                      className="bg-gradient-to-r from-[--color-accent] to-purple-500 h-2 rounded-full transition-all duration-1000 ease-out animate-glow"
                      style={{ width: `${skill.level}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="panel p-6 backdrop-blur-xl bg-white/10 border border-white/30 animate-float">
            <h4 className="text-2xl font-bold mb-4 text-white animate-pulse">Get In Touch</h4>
            <ul className="space-y-3 text-white/80">
              <li>
                <a 
                  href="mailto:enochrejesho254@gmail.com" 
                  className="flex items-center gap-3 hover:text-[--color-accent] transition-colors duration-200 group"
                >
                  <span className="text-xl animate-pulse">📧</span>
                  <span className="group-hover:translate-x-1 transition-transform duration-200">Email Me</span>
                </a>
              </li>
              <li>
                <a 
                  href="https://wa.me/254112098814" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 hover:text-[--color-accent] transition-colors duration-200 group"
                >
                  <span className="text-xl animate-pulse">💬</span>
                  <span className="group-hover:translate-x-1 transition-transform duration-200">WhatsApp</span>
                </a>
              </li>
              <li>
                <a 
                  href="https://linkedin.com/in/rejesho" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 hover:text-[--color-accent] transition-colors duration-200 group"
                >
                  <span className="text-xl animate-pulse">📱</span>
                  <span className="group-hover:translate-x-1 transition-transform duration-200">LinkedIn</span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div id="contact" className="panel p-8 backdrop-blur-xl bg-white/10 border border-white/30 shadow-xl animate-float">
          <h3 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white to-[--color-accent] bg-clip-text text-transparent animate-pulse">
            Let&apos;s Connect
          </h3>
          <p className="text-white/70 text-lg mb-8">
            Ready to start your next project? Send me a message and let&apos;s create something amazing together.
          </p>
          <form className="space-y-6" onSubmit={handleFormSubmit}>
            <div className="space-y-2">
              <label className="text-sm font-medium text-white/80">Your Name</label>
              <input
                className="w-full h-12 rounded-xl bg-white/10 border border-white/30 px-4 text-white/90 placeholder:text-white/40 outline-none focus:ring-2 focus:ring-[--color-accent] focus:border-transparent transition-all duration-200 backdrop-blur-sm"
                placeholder="Enter your name"
                type="text"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                required
              />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium text-white/80">Your Email</label>
              <input
                className="w-full h-12 rounded-xl bg-white/10 border border-white/30 px-4 text-white/90 placeholder:text-white/40 outline-none focus:ring-2 focus:ring-[--color-accent] focus:border-transparent transition-all duration-200 backdrop-blur-sm"
                placeholder="Enter your email"
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                required
              />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium text-white/80">Your Message</label>
              <textarea
                className="w-full min-h-[140px] rounded-xl bg-white/10 border border-white/30 p-4 text-white/90 placeholder:text-white/40 outline-none focus:ring-2 focus:ring-[--color-accent] focus:border-transparent transition-all duration-200 backdrop-blur-sm resize-none"
                placeholder="Tell me about your project..."
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                required
              />
            </div>
            <button 
              type="submit" 
              disabled={isSubmitting}
              className="btn-primary w-full group relative overflow-hidden animate-glow disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <span className="relative z-10">
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-[--color-accent] to-purple-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/20 py-8 text-center backdrop-blur-xl bg-black/30">
        <div className="container">
          <p className="text-white/60 text-sm animate-pulse">
            © 2024 Rejesho. Crafted with ❤️ and modern web technologies.
          </p>
        </div>
      </footer>
    </div>
  );
}
