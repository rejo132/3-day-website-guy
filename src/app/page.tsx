"use client";

import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen font-sans">
      {/* Header */}
      <header className="sticky top-0 z-20 backdrop-blur supports-[backdrop-filter]:bg-black/40 bg-black/30 border-b border-white/5">
        <div className="container flex items-center justify-between py-4">
          <div className="flex items-center gap-3">
            <div className="size-9 grid place-items-center rounded-md bg-[--color-card] border border-white/10 text-[--color-accent] text-xl font-semibold">R</div>
            <span className="text-sm tracking-[0.25em] text-[--color-accent]">REJESHO</span>
          </div>
          <nav className="hidden md:flex items-center gap-8 text-sm">
            <a href="#home" className="text-white/80 hover:text-white">Home</a>
            <a href="#projects" className="text-white/80 hover:text-white">Projects</a>
            <a href="#skills" className="text-white/80 hover:text-white">Skills</a>
            <a href="#contact" className="text-white/80 hover:text-white">Contact</a>
          </nav>
          <button className="md:hidden size-9 grid place-items-center rounded-md border border-white/10 text-white/70" aria-label="Open menu">⋮</button>
        </div>
      </header>

      {/* Hero */}
      <section id="home" className="container grid md:grid-cols-2 gap-8 lg:gap-10 py-12 md:py-16">
        <div className="flex flex-col gap-6 md:gap-8 justify-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold">Hi, I’m Rejesho</h1>
          <h2 className="text-2xl md:text-3xl text-[--color-accent]">{`{Web Developer}`}</h2>
          <p className="text-white/70 max-w-[50ch]">I build modern and responsive web applications.</p>
          <div className="flex items-center gap-3">
            <a href="#projects" className="btn-secondary">View Projects</a>
            <a href="#contact" className="btn-primary">Contact Me</a>
          </div>
        </div>
        <div className="p-6 panel flex flex-col gap-6 items-center justify-center text-center">
          <div className="size-24 md:size-28 grid place-items-center rounded-md bg-black/60 border border-white/10 text-[--color-accent] text-5xl font-bold">R</div>
          <div className="text-2xl tracking-wide">REJESHO</div>
          <div className="text-white/60">Modern Web Solutions</div>
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="container py-10 md:py-16">
        <h3 className="text-3xl md:text-4xl font-semibold">Projects</h3>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
          {[
            {
              key: "todo",
              title: "Todo App",
              desc: "A simple and responsive task management application.",
              img: "/projects/todo.svg",
            },
            {
              key: "gen",
              title: "Geseneic app",
              desc: "Prototype for UI transitions and project UI.",
              img: "/projects/space.svg",
            },
            {
              key: "dash",
              title: "Dashboard",
              desc: "Analytics dashboard with clean charts and cards.",
              img: "/projects/dash.svg",
            },
          ].map((p) => (
            <article key={p.key} className="panel p-4 flex flex-col gap-4">
              <div className="relative w-full aspect-[16/9] overflow-hidden rounded-lg border border-white/10">
                <Image src={p.img} alt={p.title} fill className="object-cover" />
              </div>
              <div className="flex-1">
                <h4 className="text-lg font-medium">{p.title}</h4>
                <p className="text-sm text-white/60 mt-1">{p.desc}</p>
              </div>
              <div className="flex items-center gap-3">
                <a className="btn-secondary" href="#" aria-disabled>
                  Live Demo
                </a>
                <a className="btn-secondary" href="#" aria-disabled>
                  Code
                </a>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Skills + Contact */}
      <section className="container grid lg:grid-cols-2 gap-8 md:gap-12 py-10 md:py-16">
        <div id="skills">
          <h3 className="text-3xl md:text-4xl font-semibold">Skills</h3>
          <div className="flex flex-wrap gap-3 mt-6">
            {["HTM", "CSS", "JS", "R", "N", "~"].map((abbr, idx) => (
              <div key={idx} className="skill-badge">{abbr}</div>
            ))}
          </div>

          <div className="mt-10">
            <h4 className="text-2xl font-semibold">Contact</h4>
            <ul className="mt-4 space-y-3 text-white/80">
              <li>
                <a href="mailto:hello@example.com" className="hover:text-white">Email Me</a>
              </li>
              <li>
                <a href="#" className="hover:text-white">WhatsApp</a>
              </li>
            </ul>
          </div>
        </div>

        <div id="contact" className="panel p-6">
          <h3 className="text-3xl md:text-4xl font-semibold">Contact</h3>
          <form className="mt-6 space-y-4" onSubmit={(e) => e.preventDefault()}>
            <input
              className="w-full h-11 rounded-md bg-[--color-card] border border-white/10 px-3 text-white/90 placeholder:text-white/40 outline-none focus:ring-2 focus:ring-[--color-accent]"
              placeholder="Your Name"
              type="text"
              name="name"
            />
            <input
              className="w-full h-11 rounded-md bg-[--color-card] border border-white/10 px-3 text-white/90 placeholder:text-white/40 outline-none focus:ring-2 focus:ring-[--color-accent]"
              placeholder="Your Email"
              type="email"
              name="email"
            />
            <textarea
              className="w-full min-h-[140px] rounded-md bg-[--color-card] border border-white/10 p-3 text-white/90 placeholder:text-white/40 outline-none focus:ring-2 focus:ring-[--color-accent]"
              placeholder="Your Message"
              name="message"
            />
            <button type="submit" className="btn-primary">Send Message</button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/5 py-6 text-center text-white/50 text-sm">
        © 2024 Rejesho
      </footer>
    </div>
  );
}
