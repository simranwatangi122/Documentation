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
