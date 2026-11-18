export interface Profile {
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

export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription?: string;
  category: 'Full Stack' | 'Frontend' | 'Backend' | 'Mobile';
  tags: string[];
  image: string;
  githubUrl: string;
  liveUrl?: string;
  featured: boolean;
  completionDate: string;
}

export interface SkillItem {
  name: string;
  level: number;
  icon?: string;
  experienceYears: number;
}

export interface SkillCategory {
  category: string;
  items: SkillItem[];
}

export interface Experience {
  id: string;
  role: string;
  company: string;
  location: string;
  period: string;
  description: string;
  achievements: string[];
  skills: string[];
  type: 'work' | 'education';
}

export interface ContactFormInput {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export interface ApiResponse<T> {
  statusCode: number;
  data: T;
  timestamp: string;
}
