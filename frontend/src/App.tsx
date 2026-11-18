import { useEffect, useState } from 'react';
import { Navbar } from './components/layout/Navbar';
import { Footer } from './components/layout/Footer';
import { Hero } from './components/sections/Hero';
import { About } from './components/sections/About';
import { Skills } from './components/sections/Skills';
import { Projects } from './components/sections/Projects';
import { Experience } from './components/sections/Experience';
import { Contact } from './components/sections/Contact';
import {
  portfolioApi,
  fallbackProfile,
  fallbackProjects,
  fallbackSkills,
  fallbackExperience,
} from './services/api';
import { Profile, Project, SkillCategory, Experience as ExpType } from './types/portfolio.types';
import { Wifi, WifiOff } from 'lucide-react';

export function App() {
  const [profile, setProfile] = useState<Profile>(fallbackProfile);
  const [projects, setProjects] = useState<Project[]>(fallbackProjects);
  const [skills, setSkills] = useState<SkillCategory[]>(fallbackSkills);
  const [experience, setExperience] = useState<ExpType[]>(fallbackExperience);
  const [apiConnected, setApiConnected] = useState<boolean | null>(null);

  useEffect(() => {
    async function loadPortfolioData() {
      try {
        const [profData, projData, skillsData, expData] = await Promise.all([
          portfolioApi.getProfile(),
          portfolioApi.getProjects(),
          portfolioApi.getSkills(),
          portfolioApi.getExperience(),
        ]);

        setProfile(profData);
        setProjects(projData);
        setSkills(skillsData);
        setExperience(expData);

        // Check if server is actually responding
        const healthCheck = await fetch('/api/profile').then(r => r.ok).catch(() => false);
        setApiConnected(healthCheck);
      } catch {
        setApiConnected(false);
      }
    }

    loadPortfolioData();
  }, []);

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 selection:bg-indigo-500 selection:text-white">
      {/* Backend API status badge */}
      <div className="fixed bottom-4 left-4 z-40 hidden sm:flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-900/90 border border-slate-800 backdrop-blur-md text-xs shadow-lg">
        {apiConnected ? (
          <>
            <Wifi className="w-3.5 h-3.5 text-emerald-400" />
            <span className="text-slate-300">NestJS API: <strong className="text-emerald-400 font-normal">Connected</strong></span>
          </>
        ) : (
          <>
            <WifiOff className="w-3.5 h-3.5 text-amber-400" />
            <span className="text-slate-400">NestJS API: <span className="text-amber-400">Offline (Using Static Mode)</span></span>
          </>
        )}
      </div>

      <Navbar profile={profile} />
      
      <main>
        <Hero profile={profile} />
        <About profile={profile} />
        <Skills categories={skills} />
        <Projects projects={projects} />
        <Experience experiences={experience} />
        <Contact profile={profile} />
      </main>

      <Footer profile={profile} />
    </div>
  );
}

export default App;
