import React, { useState } from 'react';
import { ExternalLink, Github, Eye, Sparkles } from 'lucide-react';
import { Project } from '../../types/portfolio.types';
import { ProjectModal } from '../ui/ProjectModal';

interface ProjectsProps {
  projects: Project[];
}

export const Projects: React.FC<ProjectsProps> = ({ projects }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [modalProject, setModalProject] = useState<Project | null>(null);

  const categories = ['All', 'Full Stack', 'Frontend', 'Backend'];

  const filteredProjects =
    selectedCategory === 'All'
      ? projects
      : projects.filter((p) => p.category.toLowerCase() === selectedCategory.toLowerCase());

  return (
    <section id="projects" className="py-24 bg-slate-950 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-6">
          <div>
            <h2 className="text-xs uppercase tracking-widest text-indigo-400 font-semibold mb-2">
              Featured Work
            </h2>
            <h3 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
              Selected Projects & Case Studies
            </h3>
            <p className="mt-2 text-sm text-slate-400">
              Full-stack applications developed with React, NestJS, and cloud infrastructure.
            </p>
          </div>

          {/* Filter Pills */}
          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 rounded-xl text-xs font-medium transition-all ${
                  selectedCategory === cat
                    ? 'bg-indigo-600 text-white shadow-lg shadow-indigo-600/25'
                    : 'bg-slate-900 text-slate-400 hover:text-white border border-slate-800'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Project Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="group rounded-2xl bg-slate-900/60 border border-slate-800/80 hover:border-indigo-500/50 overflow-hidden transition-all duration-300 hover:shadow-2xl hover:shadow-indigo-500/10 flex flex-col"
            >
              {/* Thumbnail Container */}
              <div className="relative h-56 sm:h-64 w-full overflow-hidden bg-slate-950">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-slate-950/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-3 backdrop-blur-[2px]">
                  <button
                    onClick={() => setModalProject(project)}
                    className="p-3 rounded-full bg-white text-slate-900 hover:bg-slate-200 transition-transform hover:scale-110 shadow-lg"
                    aria-label="View Project Details"
                  >
                    <Eye className="w-5 h-5" />
                  </button>
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="p-3 rounded-full bg-indigo-600 text-white hover:bg-indigo-500 transition-transform hover:scale-110 shadow-lg"
                      aria-label="Visit Live Demo"
                    >
                      <ExternalLink className="w-5 h-5" />
                    </a>
                  )}
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="p-3 rounded-full bg-slate-900 text-white hover:bg-slate-800 transition-transform hover:scale-110 shadow-lg border border-slate-700"
                    aria-label="View Code"
                  >
                    <Github className="w-5 h-5" />
                  </a>
                </div>

                {project.featured && (
                  <div className="absolute top-4 left-4 inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-indigo-600/90 text-white backdrop-blur-md">
                    <Sparkles className="w-3.5 h-3.5" />
                    <span>Featured</span>
                  </div>
                )}

                <div className="absolute bottom-3 right-3 px-2.5 py-1 rounded-md text-xs font-medium bg-slate-950/80 text-slate-300 border border-slate-800">
                  {project.category}
                </div>
              </div>

              {/* Description Body */}
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <h4 className="text-xl font-bold text-white group-hover:text-indigo-400 transition-colors">
                    {project.title}
                  </h4>
                  <p className="mt-2 text-sm text-slate-400 line-clamp-2 leading-relaxed">
                    {project.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-800/80 flex flex-wrap items-center justify-between gap-2">
                  <div className="flex flex-wrap gap-1.5">
                    {project.tags.slice(0, 3).map((tag) => (
                      <span
                        key={tag}
                        className="px-2.5 py-0.5 rounded-md text-xs bg-slate-950 text-slate-400 border border-slate-800 font-mono"
                      >
                        {tag}
                      </span>
                    ))}
                    {project.tags.length > 3 && (
                      <span className="text-xs text-slate-500 self-center">
                        +{project.tags.length - 3}
                      </span>
                    )}
                  </div>

                  <button
                    onClick={() => setModalProject(project)}
                    className="text-xs font-medium text-indigo-400 hover:text-indigo-300 transition-colors"
                  >
                    Read Details &rarr;
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Detail Modal */}
      <ProjectModal project={modalProject} onClose={() => setModalProject(null)} />
    </section>
  );
};
