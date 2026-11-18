export interface SkillCategory {
  category: string;
  items: {
    name: string;
    level: number; // percentage 1-100
    icon?: string;
    experienceYears: number;
  }[];
}
