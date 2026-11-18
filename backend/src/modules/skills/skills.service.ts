import { Injectable } from '@nestjs/common';
import { SkillCategory } from './entities/skill.entity';

@Injectable()
export class SkillsService {
  private skillCategories: SkillCategory[] = [
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

  findAll(): SkillCategory[] {
    return this.skillCategories;
  }
}
