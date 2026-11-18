import React, { useState } from 'react';
import { Briefcase, GraduationCap, Calendar, MapPin, CheckCircle } from 'lucide-react';
import { Experience as ExperienceType } from '../../types/portfolio.types';

interface ExperienceProps {
  experiences: ExperienceType[];
}

export const Experience: React.FC<ExperienceProps> = ({ experiences }) => {
  const [activeFilter, setActiveFilter] = useState<'all' | 'work' | 'education'>('all');

  const filtered =
    activeFilter === 'all'
      ? experiences
      : experiences.filter((e) => e.type === activeFilter);

  return (
    <section id="experience" className="py-24 bg-slate-900/40 relative border-t border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <h2 className="text-xs uppercase tracking-widest text-indigo-400 font-semibold mb-2">
            Career Journey
          </h2>
          <h3 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
            Work Experience & Education
          </h3>
          <p className="mt-3 text-slate-400 text-sm">
            Proven track record of engineering leadership, system migrations, and academic excellence.
          </p>

          <div className="mt-8 inline-flex p-1 rounded-xl bg-slate-900 border border-slate-800">
            <button
              onClick={() => setActiveFilter('all')}
              className={`px-4 py-1.5 rounded-lg text-xs font-medium transition-all ${
                activeFilter === 'all' ? 'bg-indigo-600 text-white' : 'text-slate-400 hover:text-white'
              }`}
            >
              All History
            </button>
            <button
              onClick={() => setActiveFilter('work')}
              className={`px-4 py-1.5 rounded-lg text-xs font-medium transition-all ${
                activeFilter === 'work' ? 'bg-indigo-600 text-white' : 'text-slate-400 hover:text-white'
              }`}
            >
              Industry Work
            </button>
            <button
              onClick={() => setActiveFilter('education')}
              className={`px-4 py-1.5 rounded-lg text-xs font-medium transition-all ${
                activeFilter === 'education' ? 'bg-indigo-600 text-white' : 'text-slate-400 hover:text-white'
              }`}
            >
              Education
            </button>
          </div>
        </div>

        {/* Timeline */}
        <div className="relative max-w-4xl mx-auto">
          {/* Vertical central bar */}
          <div className="absolute left-4 sm:left-1/2 top-4 bottom-4 -translate-x-1/2 w-0.5 bg-slate-800" />

          <div className="space-y-12">
            {filtered.map((item, index) => {
              const isEven = index % 2 === 0;
              return (
                <div
                  key={item.id}
                  className={`relative flex flex-col sm:flex-row items-start ${
                    isEven ? 'sm:flex-row-reverse' : ''
                  }`}
                >
                  {/* Timeline Badge */}
                  <div className="absolute left-4 sm:left-1/2 -translate-x-1/2 z-10 w-9 h-9 rounded-full bg-slate-950 border-2 border-indigo-500 flex items-center justify-center text-indigo-400 shadow-md">
                    {item.type === 'work' ? (
                      <Briefcase className="w-4 h-4" />
                    ) : (
                      <GraduationCap className="w-4 h-4" />
                    )}
                  </div>

                  {/* Empty Spacer */}
                  <div className="hidden sm:block w-1/2" />

                  {/* Card Content */}
                  <div className="ml-12 sm:ml-0 sm:w-1/2 sm:px-8 w-full">
                    <div className="p-6 rounded-2xl bg-slate-950/90 border border-slate-800/80 hover:border-slate-700 transition-all shadow-xl">
                      <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                        <span className="text-xs font-semibold text-indigo-400 uppercase tracking-wide">
                          {item.company}
                        </span>
                        <div className="flex items-center gap-1 text-xs text-slate-500 font-mono">
                          <Calendar className="w-3.5 h-3.5" />
                          <span>{item.period}</span>
                        </div>
                      </div>

                      <h4 className="text-lg font-bold text-white">{item.role}</h4>
                      
                      <div className="flex items-center gap-1.5 text-xs text-slate-400 mt-1 mb-4">
                        <MapPin className="w-3.5 h-3.5 text-slate-500" />
                        <span>{item.location}</span>
                      </div>

                      <p className="text-sm text-slate-300 mb-4 leading-relaxed">
                        {item.description}
                      </p>

                      {item.achievements.length > 0 && (
                        <div className="space-y-2 mb-4">
                          {item.achievements.map((ach, idx) => (
                            <div key={idx} className="flex items-start gap-2 text-xs text-slate-400">
                              <CheckCircle className="w-3.5 h-3.5 text-emerald-400 mt-0.5 flex-shrink-0" />
                              <span>{ach}</span>
                            </div>
                          ))}
                        </div>
                      )}

                      <div className="flex flex-wrap gap-1.5 pt-3 border-t border-slate-900">
                        {item.skills.map((skill) => (
                          <span
                            key={skill}
                            className="px-2 py-0.5 text-xs rounded-md bg-slate-900 text-slate-400 border border-slate-800 font-mono"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
