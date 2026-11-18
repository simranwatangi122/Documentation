import { Injectable, NotFoundException } from '@nestjs/common';
import { Project } from './entities/project.entity';
import { CreateProjectDto } from './dto/create-project.dto';

@Injectable()
export class ProjectsService {
  private projects: Project[] = [
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

  findAll(category?: string, featured?: boolean): Project[] {
    let result = this.projects;
    if (category && category !== 'All') {
      result = result.filter(
        (p) => p.category.toLowerCase() === category.toLowerCase(),
      );
    }
    if (featured !== undefined) {
      result = result.filter((p) => p.featured === featured);
    }
    return result;
  }

  findOne(id: string): Project {
    const project = this.projects.find((p) => p.id === id);
    if (!project) {
      throw new NotFoundException(`Project with ID ${id} not found`);
    }
    return project;
  }

  create(dto: CreateProjectDto): Project {
    const newProject: Project = {
      id: (this.projects.length + 1).toString(),
      completionDate: new Date().getFullYear().toString(),
      featured: false,
      ...dto,
    };
    this.projects.push(newProject);
    return newProject;
  }
}
