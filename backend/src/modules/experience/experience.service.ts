import { Injectable } from '@nestjs/common';
import { Experience } from './entities/experience.entity';

@Injectable()
export class ExperienceService {
  private experiences: Experience[] = [
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

  findAll(type?: string): Experience[] {
    if (type) {
      return this.experiences.filter((e) => e.type === type);
    }
    return this.experiences;
  }
}
