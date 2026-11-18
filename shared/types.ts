export interface IProfile {
  name: string;
  title: string;
  tagline: string;
  bio: string;
  avatar: string;
  location: string;
  email: string;
}

export interface IProject {
  id: string;
  title: string;
  description: string;
  category: string;
  tags: string[];
  image: string;
  githubUrl: string;
  liveUrl?: string;
  featured: boolean;
}

export interface IContactPayload {
  name: string;
  email: string;
  subject: string;
  message: string;
}
