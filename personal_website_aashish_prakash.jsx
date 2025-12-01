import React from "react";

// Single-file React component (App.jsx)
// Tailwind CSS utility classes assumed to be available.
// Save as App.jsx and import into your React app (Create React App / Vite + Tailwind)

const posts = [
  {
    id: 1,
    title: "Why Students Must Raise Their Voice",
    excerpt:
      "On-campus activism isn't just protest — it's the seed of policy change. Here's how students can organize effectively and responsibly.",
    category: "Activism",
    date: "2025-11-01",
  },
  {
    id: 2,
    title: "Preparing for Defence Exams While Studying",
    excerpt:
      "A practical study routine for defence aspirants balancing college, fitness, and competitive prep.",
    category: "Defence Prep",
    date: "2025-10-12",
  },
  {
    id: 3,
    title: "Opinion: Corruption and Small-Town Realities",
    excerpt:
      "Why transparency matters in districts like Khagaria — small fixes that can make a real difference.",
    category: "Social Issues",
    date: "2025-09-20",
  },
];

export default function App() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      <Header />
      <main className="max-w-5xl mx-auto p-6">
        <Hero />
        <QuickLinks />
        <LatestPosts posts={posts} />
        <About />
        <Resources />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

function Header() {
  return (
    <header className="bg-white shadow-sm">
      <div className="max-w-5xl mx-auto px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 bg-gradient-to-br from-indigo-600 to-indigo-400 rounded-md flex items-center justify-center text-white font-bold">AP</div>
          <div>
            <h1 className="font-semibold text-lg">Aashish Prakash</h1>
            <p className="text-xs text-slate-500">Opinion • Student Activist • Defence Aspirant • Social Worker</p>
          </div>
        </div>
        <nav className="hidden md:flex gap-4 items-center">
          <a href="#home" className="text-slate-700 hover:text-indigo-600">Home</a>
          <a href="#posts" className="text-slate-700 hover:text-indigo-600">Posts</a>
          <a href="#about" className="text-slate-700 hover:text-indigo-600">About</a>
          <a href="#resources" className="text-slate-700 hover:text-indigo-600">Resources</a>
          <a href="#contact" className="text-slate-700 hover:text-indigo-600">Contact</a>
        </nav>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section id="home" className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-6 items-center">
      <div className="md:col-span-2 bg-white p-6 rounded-2xl shadow">
        <h2 className="text-2xl font-bold mb-2">Thoughts worth sharing, actions worth doing</h2>
        <p className="text-slate-600 mb-4">I write about current affairs, student rights, social issues, and my journey as a defence aspirant. Practical advice for exams, activism tips, and opinions grounded in real experience.</p>
        <div className="flex gap-3">
          <a href="#posts" className="px-4 py-2 bg-indigo-600 text-white rounded-md shadow-sm">Read latest posts</a>
          <a href="#contact" className="px-4 py-2 border border-indigo-600 text-indigo-600 rounded-md">Get in touch</a>
        </div>
      </div>
      <aside className="bg-gradient-to-br from-indigo-50 to-white p-6 rounded-2xl shadow flex flex-col gap-4 items-start">
        <h3 className="font-semibold">Quick Profile</h3>
        <ul className="text-sm text-slate-600 leading-relaxed">
          <li>Student at Kirori Mal College</li>
          <li>Defence aspirant — CDS / AFCAT prep</li>
          <li>Student activist & social volunteer</li>
          <li>Writes on politics, education, and civic issues</li>
        </ul>
        <div className="mt-2">
          <a href="#resources" className="text-xs underline">See study resources</a>
        </div>
      </aside>
    </section>
  );
}

function QuickLinks() {
  return (
    <section className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-4">
      <Card title="Defence Prep" desc="Study plans, fitness routine, and exam tips." />
      <Card title="Activism" desc="How to organise, protest safely, and lobby effectively." />
      <Card title="Opinion" desc="Essays and short takes on current affairs." />
      <Card title="Resources" desc="Books, PDFs, and budget-friendly study materials." />
    </section>
  );
}

function Card({ title, desc }) {
  return (
    <div className="bg-white p-4 rounded-xl shadow-sm">
      <h4 className="font-semibold">{title}</h4>
      <p className="text-sm text-slate-600">{desc}</p>
    </div>
  );
}

function LatestPosts({ posts }) {
  return (
    <section id="posts" className="mt-10">
      <h3 className="text-xl font-semibold mb-4">Latest posts</h3>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {posts.map((p) => (
          <article key={p.id} className="bg-white rounded-2xl p-4 shadow-sm flex flex-col gap-3">
            <div className="h-36 rounded-md bg-gradient-to-br from-slate-200 to-slate-100 flex items-end p-3">
              <span className="text-xs text-slate-600 bg-white/60 px-2 py-1 rounded">{p.category}</span>
            </div>
            <div className="flex-1">
              <h4 className="font-semibold">{p.title}</h4>
              <p className="text-sm text-slate-600 mt-2">{p.excerpt}</p>
            </div>
            <div className="flex items-center justify-between text-xs text-slate-500">
              <span>{p.date}</span>
              <a href="#" className="text-indigo-600">Read more →</a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

function About() {
  return (
    <section id="about" className="mt-12 bg-white p-6 rounded-2xl shadow-sm">
      <h3 className="text-xl font-semibold mb-2">About me</h3>
      <p className="text-slate-600">I'm a student from Delhi University, an active volunteer in social causes, and a defence aspirant preparing for CDS and AFCAT. I post opinions, practical guides for exam preparation, and ideas to make local governance more accountable. This site is a place to share those thoughts and practical resources for students like you.</p>
      <div className="mt-4 grid grid-cols-1 md:grid-cols-3 gap-4">
        <Stat label="Years Writing" value="3+" />
        <Stat label="Posts" value="50+" />
        <Stat label="Students Helped" value="100+" />
      </div>
    </section>
  );
}

function Stat({ label, value }) {
  return (
    <div className="bg-indigo-50 p-4 rounded-lg text-center">
      <div className="font-semibold text-lg">{value}</div>
      <div className="text-sm text-slate-600">{label}</div>
    </div>
  );
}

function Resources() {
  return (
    <section id="resources" className="mt-10">
      <h3 className="text-xl font-semibold mb-4">Study & Activism Resources</h3>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <ResourceCard title="Grammar & English" note="Objective General English — S.P. Bakshi (Arihant)" />
        <ResourceCard title="Defence Exam Plan" note="Daily routine: study + fitness + mock tests." />
        <ResourceCard title="Budget Study Materials" note="Free PDFs and community libraries." />
      </div>
    </section>
  );
}

function ResourceCard({ title, note }) {
  return (
    <div className="bg-white p-4 rounded-xl shadow-sm">
      <h4 className="font-semibold">{title}</h4>
      <p className="text-sm text-slate-600 mt-2">{note}</p>
      <div className="mt-3">
        <a href="#" className="text-indigo-600 text-sm">Open resource</a>
      </div>
    </div>
  );
}

function Contact() {
  return (
    <section id="contact" className="mt-10 bg-white p-6 rounded-2xl shadow-sm">
      <h3 className="text-xl font-semibold mb-2">Contact</h3>
      <p className="text-slate-600 mb-4">Want to collaborate, invite me to speak, or share a tip? Drop a message.</p>
      <form action={`mailto:your-email@example.com`} method="post" className="grid grid-cols-1 md:grid-cols-2 gap-3">
        <input name="name" placeholder="Your name" className="p-3 border rounded" />
        <input name="email" placeholder="Your email" className="p-3 border rounded" />
        <textarea name="message" placeholder="Message" className="p-3 border rounded md:col-span-2" rows={4}></textarea>
        <div className="md:col-span-2 flex gap-3">
          <button type="submit" className="px-4 py-2 bg-indigo-600 text-white rounded">Send</button>
          <a className="px-4 py-2 border rounded text-slate-700" href="mailto:your-email@example.com">Email directly</a>
        </div>
      </form>
    </section>
  );
}

function Footer() {
  return (
    <footer className="mt-12 bg-white border-t py-6">
      <div className="max-w-5xl mx-auto px-6 text-sm text-slate-600 flex flex-col md:flex-row justify-between items-center">
        <div>© {new Date().getFullYear()} Aashish Prakash — Thoughts & Action</div>
        <div className="flex gap-3 mt-3 md:mt-0">
          <a href="#" className="underline">Instagram</a>
          <a href="#" className="underline">YouTube</a>
          <a href="#" className="underline">X</a>
        </div>
      </div>
    </footer>
  );
}
