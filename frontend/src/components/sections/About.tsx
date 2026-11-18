import React from 'react';
import { Code2, Server, Database, Cpu, MapPin, Mail, ArrowUpRight } from 'lucide-react';
import { Profile } from '../../types/portfolio.types';

interface AboutProps {
  profile: Profile | null;
}

export const About: React.FC<AboutProps> = ({ profile }) => {
  return (
    <section id="about" className="py-24 bg-slate-950 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-xs uppercase tracking-widest text-indigo-400 font-semibold mb-2">
            About Me
          </h2>
          <h3 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
            Architecting robust digital products from client to database.
          </h3>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Avatar / Visual Card */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative group w-full max-w-sm">
              <div className="absolute -inset-1 rounded-3xl bg-gradient-to-r from-indigo-500 to-purple-600 opacity-40 blur-xl group-hover:opacity-70 transition duration-500" />
              <div className="relative rounded-2xl overflow-hidden border border-slate-800 bg-slate-900 p-3 shadow-2xl">
                <img
                  src={
                    profile?.avatar ||
                    'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=800'
                  }
                  alt={profile?.name || 'Developer Avatar'}
                  className="rounded-xl w-full h-80 object-cover filter grayscale contrast-125 hover:grayscale-0 transition-all duration-500"
                />
                <div className="mt-4 p-3 bg-slate-950/80 rounded-xl border border-slate-800 flex items-center justify-between">
                  <div>
                    <div className="flex items-center gap-1.5 text-xs text-slate-400">
                      <MapPin className="w-3.5 h-3.5 text-indigo-400" />
                      <span>{profile?.location || 'Remote'}</span>
                    </div>
                    <div className="flex items-center gap-1.5 text-xs text-slate-400 mt-1">
                      <Mail className="w-3.5 h-3.5 text-purple-400" />
                      <span>{profile?.email || 'dev@example.com'}</span>
                    </div>
                  </div>
                  <a
                    href="#contact"
                    className="p-2 bg-indigo-600 hover:bg-indigo-500 text-white rounded-lg transition-colors"
                    aria-label="Contact directly"
                  >
                    <ArrowUpRight className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Bio & Core Focus Pillars */}
          <div className="lg:col-span-7 space-y-6">
            <p className="text-lg text-slate-300 leading-relaxed">
              {profile?.bio ||
                'I am an experienced Full Stack Engineer focused on crafting performant web experiences, scalable API microservices, and reliable developer workflows.'}
            </p>

            <p className="text-slate-400 leading-relaxed">
              My core technology stack combines the dynamic interactivity of modern <strong>React (Vite/Next.js)</strong> with the robust enterprise structure of <strong>NestJS</strong> and <strong>TypeScript</strong>. I treat architecture, clean code, accessibility, and automated CI/CD testing as first-class citizens.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
              <div className="p-4 rounded-xl bg-slate-900/40 border border-slate-800/80 hover:border-indigo-500/50 transition-colors">
                <div className="w-9 h-9 rounded-lg bg-indigo-500/10 flex items-center justify-center text-indigo-400 mb-3">
                  <Code2 className="w-5 h-5" />
                </div>
                <h4 className="font-semibold text-white text-base">Modern Frontend</h4>
                <p className="text-xs text-slate-400 mt-1 leading-normal">
                  React 19, TypeScript, Tailwind CSS, high-FPS animations, and accessible component architectures.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-slate-900/40 border border-slate-800/80 hover:border-indigo-500/50 transition-colors">
                <div className="w-9 h-9 rounded-lg bg-purple-500/10 flex items-center justify-center text-purple-400 mb-3">
                  <Server className="w-5 h-5" />
                </div>
                <h4 className="font-semibold text-white text-base">NestJS Microservices</h4>
                <p className="text-xs text-slate-400 mt-1 leading-normal">
                  Type-safe RESTful APIs, event emitters, WebSocket channels, JWT authentication, and Swagger docs.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-slate-900/40 border border-slate-800/80 hover:border-indigo-500/50 transition-colors">
                <div className="w-9 h-9 rounded-lg bg-emerald-500/10 flex items-center justify-center text-emerald-400 mb-3">
                  <Database className="w-5 h-5" />
                </div>
                <h4 className="font-semibold text-white text-base">Database Systems</h4>
                <p className="text-xs text-slate-400 mt-1 leading-normal">
                  PostgreSQL, Prisma ORM, MongoDB, Redis caching, migrations, and database indexing.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-slate-900/40 border border-slate-800/80 hover:border-indigo-500/50 transition-colors">
                <div className="w-9 h-9 rounded-lg bg-pink-500/10 flex items-center justify-center text-pink-400 mb-3">
                  <Cpu className="w-5 h-5" />
                </div>
                <h4 className="font-semibold text-white text-base">DevOps & Cloud</h4>
                <p className="text-xs text-slate-400 mt-1 leading-normal">
                  Docker containers, automated GitHub Actions pipelines, Linux server environments, and AWS hosting.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
