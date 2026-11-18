import React from 'react';
import { ArrowRight, Sparkles, FolderGit2, Briefcase, Award, CheckCircle2 } from 'lucide-react';
import { Profile } from '../../types/portfolio.types';

interface HeroProps {
  profile: Profile | null;
}

export const Hero: React.FC<HeroProps> = ({ profile }) => {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-24 pb-16 overflow-hidden">
      {/* Background Gradients & Glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-indigo-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/3 left-1/4 w-[400px] h-[400px] bg-purple-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        {/* Availability pill */}
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-900/80 border border-slate-800 text-xs text-indigo-300 font-medium mb-8 backdrop-blur-sm">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
          <span className="w-2 h-2 rounded-full bg-emerald-500 -ml-3" />
          <Sparkles className="w-3.5 h-3.5 text-indigo-400" />
          <span>Available for New Projects & Full-Time Roles</span>
        </div>

        {/* Headline */}
        <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-white max-w-4xl mx-auto leading-tight sm:leading-none">
          Hi, I'm{' '}
          <span className="bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
            {profile?.name || 'Full Stack Engineer'}
          </span>
        </h1>

        <p className="mt-6 text-xl sm:text-2xl text-slate-300 max-w-2xl mx-auto font-light">
          {profile?.title || 'Full Stack Engineer & Cloud Architect'}
        </p>

        <p className="mt-4 text-base text-slate-400 max-w-xl mx-auto leading-relaxed">
          {profile?.tagline ||
            'Specialized in building high-speed frontends with React and scalable backend services with NestJS & TypeScript.'}
        </p>

        {/* CTAs */}
        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <a
            href="#projects"
            className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl font-medium text-white bg-indigo-600 hover:bg-indigo-500 shadow-lg shadow-indigo-600/30 hover:scale-[1.02] active:scale-[0.98] transition-all"
          >
            <span>Explore Projects</span>
            <ArrowRight className="w-4 h-4" />
          </a>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl font-medium text-slate-300 bg-slate-900 hover:bg-slate-800 border border-slate-800 hover:text-white transition-all"
          >
            <span>Let's Talk</span>
          </a>
        </div>

        {/* Tech Badges */}
        <div className="mt-14 flex flex-wrap items-center justify-center gap-2 max-w-2xl mx-auto">
          {profile?.skillsSummary?.map((skill) => (
            <span
              key={skill}
              className="px-3 py-1 text-xs font-mono rounded-md bg-slate-900/60 border border-slate-800 text-slate-400"
            >
              #{skill}
            </span>
          ))}
        </div>

        {/* Stats Grid */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
          <div className="p-6 rounded-2xl bg-slate-900/50 border border-slate-800/80 backdrop-blur-sm">
            <div className="flex items-center justify-center text-indigo-400 mb-2">
              <Briefcase className="w-5 h-5" />
            </div>
            <div className="text-3xl font-bold text-white">
              {profile?.stats?.yearsOfExperience || 3}+
            </div>
            <div className="text-xs text-slate-400 mt-1 uppercase tracking-wider">
              Years Experience
            </div>
          </div>

          <div className="p-6 rounded-2xl bg-slate-900/50 border border-slate-800/80 backdrop-blur-sm">
            <div className="flex items-center justify-center text-purple-400 mb-2">
              <FolderGit2 className="w-5 h-5" />
            </div>
            <div className="text-3xl font-bold text-white">
              {profile?.stats?.projectsCompleted || 24}+
            </div>
            <div className="text-xs text-slate-400 mt-1 uppercase tracking-wider">
              Projects Delivered
            </div>
          </div>

          <div className="p-6 rounded-2xl bg-slate-900/50 border border-slate-800/80 backdrop-blur-sm">
            <div className="flex items-center justify-center text-emerald-400 mb-2">
              <CheckCircle2 className="w-5 h-5" />
            </div>
            <div className="text-3xl font-bold text-white">
              {profile?.stats?.satisfiedClients || 18}+
            </div>
            <div className="text-xs text-slate-400 mt-1 uppercase tracking-wider">
              Satisfied Clients
            </div>
          </div>

          <div className="p-6 rounded-2xl bg-slate-900/50 border border-slate-800/80 backdrop-blur-sm">
            <div className="flex items-center justify-center text-pink-400 mb-2">
              <Award className="w-5 h-5" />
            </div>
            <div className="text-3xl font-bold text-white">
              {profile?.stats?.gitContributions || 850}+
            </div>
            <div className="text-xs text-slate-400 mt-1 uppercase tracking-wider">
              Code Contributions
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
