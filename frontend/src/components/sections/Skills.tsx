import React, { useState } from 'react';
import { Layers, Terminal, Database, Wrench } from 'lucide-react';
import { SkillCategory } from '../../types/portfolio.types';

interface SkillsProps {
  categories: SkillCategory[];
}

export const Skills: React.FC<SkillsProps> = ({ categories }) => {
  const [activeTab, setActiveTab] = useState<string>('all');

  const getCategoryIcon = (categoryName: string) => {
    if (categoryName.toLowerCase().includes('frontend')) {
      return <Layers className="w-5 h-5 text-indigo-400" />;
    }
    if (categoryName.toLowerCase().includes('backend')) {
      return <Terminal className="w-5 h-5 text-purple-400" />;
    }
    if (categoryName.toLowerCase().includes('database') || categoryName.toLowerCase().includes('cloud')) {
      return <Database className="w-5 h-5 text-emerald-400" />;
    }
    return <Wrench className="w-5 h-5 text-pink-400" />;
  };

  const displayedCategories =
    activeTab === 'all'
      ? categories
      : categories.filter((c) => c.category.toLowerCase().includes(activeTab.toLowerCase()));

  return (
    <section id="skills" className="py-24 bg-slate-900/40 relative border-y border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <h2 className="text-xs uppercase tracking-widest text-indigo-400 font-semibold mb-2">
            Technical Stack
          </h2>
          <h3 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
            Tools, Languages & Frameworks
          </h3>
          <p className="mt-3 text-slate-400 text-sm">
            Proven competencies across modern frontend systems, backend servers, and deployment automation.
          </p>

          {/* Category Filter Pills */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-2">
            <button
              onClick={() => setActiveTab('all')}
              className={`px-4 py-2 rounded-xl text-xs font-medium transition-all ${
                activeTab === 'all'
                  ? 'bg-indigo-600 text-white shadow-md shadow-indigo-600/30'
                  : 'bg-slate-900 text-slate-400 hover:text-white border border-slate-800'
              }`}
            >
              All Skills
            </button>
            <button
              onClick={() => setActiveTab('frontend')}
              className={`px-4 py-2 rounded-xl text-xs font-medium transition-all ${
                activeTab === 'frontend'
                  ? 'bg-indigo-600 text-white shadow-md shadow-indigo-600/30'
                  : 'bg-slate-900 text-slate-400 hover:text-white border border-slate-800'
              }`}
            >
              Frontend
            </button>
            <button
              onClick={() => setActiveTab('backend')}
              className={`px-4 py-2 rounded-xl text-xs font-medium transition-all ${
                activeTab === 'backend'
                  ? 'bg-indigo-600 text-white shadow-md shadow-indigo-600/30'
                  : 'bg-slate-900 text-slate-400 hover:text-white border border-slate-800'
              }`}
            >
              Backend (NestJS)
            </button>
            <button
              onClick={() => setActiveTab('database')}
              className={`px-4 py-2 rounded-xl text-xs font-medium transition-all ${
                activeTab === 'database'
                  ? 'bg-indigo-600 text-white shadow-md shadow-indigo-600/30'
                  : 'bg-slate-900 text-slate-400 hover:text-white border border-slate-800'
              }`}
            >
              Database & Cloud
            </button>
          </div>
        </div>

        {/* Skills Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {displayedCategories.map((cat) => (
            <div
              key={cat.category}
              className="p-6 rounded-2xl bg-slate-950/80 border border-slate-800/80 hover:border-slate-700 transition-all shadow-xl"
            >
              <div className="flex items-center gap-3 mb-6 pb-4 border-b border-slate-800">
                <div className="p-2 rounded-lg bg-slate-900 border border-slate-800">
                  {getCategoryIcon(cat.category)}
                </div>
                <h4 className="text-lg font-semibold text-white">{cat.category}</h4>
              </div>

              <div className="space-y-4">
                {cat.items.map((skill) => (
                  <div key={skill.name}>
                    <div className="flex justify-between items-center text-sm mb-1.5">
                      <span className="font-medium text-slate-200">{skill.name}</span>
                      <div className="flex items-center gap-2">
                        <span className="text-xs text-slate-500 font-mono">
                          {skill.experienceYears}y exp
                        </span>
                        <span className="text-xs font-semibold text-indigo-400 font-mono">
                          {skill.level}%
                        </span>
                      </div>
                    </div>
                    <div className="w-full h-2 rounded-full bg-slate-900 overflow-hidden border border-slate-800/60">
                      <div
                        className="h-full rounded-full bg-gradient-to-r from-indigo-500 to-purple-500 transition-all duration-1000 ease-out"
                        style={{ width: `${skill.level}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
