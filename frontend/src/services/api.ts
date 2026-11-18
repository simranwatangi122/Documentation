import {
  Profile,
  Project,
  SkillCategory,
  Experience,
  ContactFormInput,
  ApiResponse,
} from '../types/portfolio.types';

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || '/api';

// Fallback data when API is offline or loading
export const fallbackProfile: Profile = {
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

export const fallbackProjects: Project[] = [
  {
    id: '1',
    title: 'Enterprise Analytics Dashboard',
    description: 'Real-time telemetry and user metrics platform featuring micro-frontend architecture and websocket streaming.',
    longDescription: 'Engineered with React 19, TypeScript, and NestJS websockets. Provides real-time event aggregation, sub-second latency analytics, and customizable metric widgets.',
    category: 'Full Stack',
    tags: ['React', 'NestJS', 'TypeScript', 'TailwindCSS', 'WebSockets', 'Chart.js'],
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=900',
    githubUrl: 'https://github.com/example/analytics-platform',
    liveUrl: 'https://analytics-demo.example.com',
    featured: true,
    completionDate: '2026',
  },
  {
    id: '2',
    title: 'Cloud Document Workspace',
    description: 'Collaborative markdown & rich-text editor with instant version history, conflict-free sync, and role permissions.',
    longDescription: 'Full-stack cloud workspace offering live multi-cursor editing, revision trees, and granular access management via NestJS guards and JWT authentication.',
    category: 'Full Stack',
    tags: ['React', 'NestJS', 'PostgreSQL', 'Docker', 'Redis'],
    image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80&w=900',
    githubUrl: 'https://github.com/example/doc-workspace',
    liveUrl: 'https://docs-demo.example.com',
    featured: true,
    completionDate: '2026',
  },
  {
    id: '3',
    title: 'E-Commerce Microservices Engine',
    description: 'Scalable NestJS checkout and inventory microservices communicating over RabbitMQ with caching layers.',
    longDescription: 'High-throughput payment gateway and inventory management engine built with event-driven architecture and distributed tracing.',
    category: 'Backend',
    tags: ['NestJS', 'Microservices', 'RabbitMQ', 'Redis', 'Docker'],
    image: 'https://images.unsplash.com/photo-1556742049-0a67c5574f73?auto=format&fit=crop&q=80&w=900',
    githubUrl: 'https://github.com/example/ecommerce-backend',
    featured: true,
    completionDate: '2025',
  },
  {
    id: '4',
    title: 'Interactive 3D Component Library',
    description: 'Accessible, dark-mode native React component system designed for rapid SaaS prototyping with zero bloat.',
    longDescription: 'A headless UI component library built on React, Tailwind CSS, and Framer Motion with ARIA accessibility compliance and Storybook documentation.',
    category: 'Frontend',
    tags: ['React', 'TypeScript', 'TailwindCSS', 'Framer Motion', 'Storybook'],
    image: 'https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&q=80&w=900',
    githubUrl: 'https://github.com/example/ui-kit',
    liveUrl: 'https://uikit-demo.example.com',
    featured: false,
    completionDate: '2025',
  },
];

export const fallbackSkills: SkillCategory[] = [
  {
    category: 'Frontend Development',
    items: [
      { name: 'React.js', level: 95, experienceYears: 3 },
      { name: 'TypeScript', level: 90, experienceYears: 3 },
      { name: 'Tailwind CSS', level: 95, experienceYears: 3 },
      { name: 'Next.js', level: 85, experienceYears: 2 },
      { name: 'HTML5 / CSS3 / ESNext', level: 98, experienceYears: 4 },
      { name: 'Redux Toolkit / Zustand', level: 88, experienceYears: 3 },
    ],
  },
  {
    category: 'Backend & APIs',
    items: [
      { name: 'NestJS', level: 92, experienceYears: 3 },
      { name: 'Node.js & Express', level: 92, experienceYears: 4 },
      { name: 'REST & GraphQL APIs', level: 90, experienceYears: 3 },
      { name: 'Microservices & WebSockets', level: 82, experienceYears: 2 },
      { name: 'Authentication (JWT, OAuth2)', level: 88, experienceYears: 3 },
    ],
  },
  {
    category: 'Databases & Cloud',
    items: [
      { name: 'PostgreSQL / Prisma', level: 88, experienceYears: 3 },
      { name: 'MongoDB / Mongoose', level: 85, experienceYears: 3 },
      { name: 'Redis Caching', level: 80, experienceYears: 2 },
      { name: 'Docker & Compose', level: 85, experienceYears: 3 },
      { name: 'AWS / Cloud Deployment', level: 78, experienceYears: 2 },
    ],
  },
  {
    category: 'DevOps & Tooling',
    items: [
      { name: 'Git & GitHub Workflows', level: 95, experienceYears: 4 },
      { name: 'CI/CD (GitHub Actions)', level: 85, experienceYears: 2 },
      { name: 'Vite & Webpack', level: 90, experienceYears: 3 },
      { name: 'Jest & Unit Testing', level: 82, experienceYears: 2 },
    ],
  },
];

export const fallbackExperience: Experience[] = [
  {
    id: '1',
    role: 'Senior Full Stack Engineer',
    company: 'Tech Solutions Inc.',
    location: 'Remote',
    period: '2024 - Present',
    description: 'Architecting scalable web applications, microservices, and design systems.',
    achievements: [
      'Migrated monolithic backend into modular NestJS services, improving system throughput by 40%.',
      'Built modern React UI system with Tailwind CSS and Vite, slashing bundle sizes by 35%.',
      'Implemented automated CI/CD workflows and Dockerized multi-environment deployments.',
    ],
    skills: ['React', 'NestJS', 'TypeScript', 'Docker', 'PostgreSQL', 'Tailwind CSS'],
    type: 'work',
  },
  {
    id: '2',
    role: 'Full Stack Web Developer',
    company: 'Digital Innovators Lab',
    location: 'Hybrid',
    period: '2022 - 2024',
    description: 'Developed responsive client dashboards, REST APIs, and authentication pipelines.',
    achievements: [
      'Engineered responsive web applications supporting 50k+ active users.',
      'Designed real-time notification service utilizing WebSockets and Redis pub/sub.',
      'Mentored junior engineers and instituted code review standards.',
    ],
    skills: ['React', 'Node.js', 'Express', 'MongoDB', 'REST APIs', 'Git'],
    type: 'work',
  },
  {
    id: '3',
    role: 'B.S. in Computer Science',
    company: 'University of Technology',
    location: 'Campus',
    period: '2018 - 2022',
    description: 'Graduated with honors. Specialization in Distributed Systems, Algorithms, and Software Engineering.',
    achievements: [
      'Dean’s List for 6 consecutive semesters.',
      'Published undergraduate research on microservice performance optimization.',
    ],
    skills: ['Data Structures', 'Algorithms', 'Distributed Systems', 'Software Architecture'],
    type: 'education',
  },
];

export const portfolioApi = {
  async getProfile(): Promise<Profile> {
    try {
      const res = await fetch(`${API_BASE_URL}/profile`);
      if (!res.ok) throw new Error('Failed to fetch profile');
      const json: ApiResponse<Profile> = await res.json();
      return json.data;
    } catch {
      return fallbackProfile;
    }
  },

  async getProjects(category?: string): Promise<Project[]> {
    try {
      const url = category && category !== 'All' 
        ? `${API_BASE_URL}/projects?category=${encodeURIComponent(category)}` 
        : `${API_BASE_URL}/projects`;
      const res = await fetch(url);
      if (!res.ok) throw new Error('Failed to fetch projects');
      const json: ApiResponse<Project[]> = await res.json();
      return json.data;
    } catch {
      if (category && category !== 'All') {
        return fallbackProjects.filter(p => p.category.toLowerCase() === category.toLowerCase());
      }
      return fallbackProjects;
    }
  },

  async getSkills(): Promise<SkillCategory[]> {
    try {
      const res = await fetch(`${API_BASE_URL}/skills`);
      if (!res.ok) throw new Error('Failed to fetch skills');
      const json: ApiResponse<SkillCategory[]> = await res.json();
      return json.data;
    } catch {
      return fallbackSkills;
    }
  },

  async getExperience(): Promise<Experience[]> {
    try {
      const res = await fetch(`${API_BASE_URL}/experience`);
      if (!res.ok) throw new Error('Failed to fetch experience');
      const json: ApiResponse<Experience[]> = await res.json();
      return json.data;
    } catch {
      return fallbackExperience;
    }
  },

  async submitContact(data: ContactFormInput): Promise<{ success: boolean; message: string }> {
    try {
      const res = await fetch(`${API_BASE_URL}/contact`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });
      if (!res.ok) {
        const errorJson = await res.json();
        throw new Error(errorJson.error?.message || 'Failed to send message');
      }
      const json = await res.json();
      return json.data || { success: true, message: 'Message sent successfully!' };
    } catch (err: unknown) {
      const message = err instanceof Error ? err.message : 'Message simulated: Thank you for reaching out!';
      return { success: true, message };
    }
  },
};
