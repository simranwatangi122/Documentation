import { Injectable } from '@nestjs/common';

export interface ProfileData {
  name: string;
  title: string;
  tagline: string;
  bio: string;
  avatar: string;
  location: string;
  email: string;
  socials: {
    github: string;
    linkedin: string;
    twitter?: string;
  };
  stats: {
    yearsOfExperience: number;
    projectsCompleted: number;
    satisfiedClients: number;
    gitContributions: number;
  };
  skillsSummary: string[];
}

@Injectable()
export class ProfileService {
  private profile: ProfileData = {
    name: 'G-Mark Developer',
    title: 'Full Stack Engineer & Cloud Architect',
    tagline: 'Building resilient, scalable web applications with React, NestJS & Modern Cloud Services.',
    bio: 'Passionate software engineer specialized in crafting high-performance frontends with React and enterprise-grade backend APIs with NestJS, TypeScript, and microservices.',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=800',
    location: 'Remote / Global',
    email: 'contact@gmark.dev',
    socials: {
      github: 'https://github.com',
      linkedin: 'https://linkedin.com',
      twitter: 'https://twitter.com',
    },
    stats: {
      yearsOfExperience: 3,
      projectsCompleted: 24,
      satisfiedClients: 18,
      gitContributions: 850,
    },
    skillsSummary: ['React.js', 'NestJS', 'TypeScript', 'Tailwind CSS', 'Node.js', 'PostgreSQL', 'Docker'],
  };

  getProfile(): ProfileData {
    return this.profile;
  }
}
