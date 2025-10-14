export interface ExperienceItem {
  id: string;
  title: string;
  company: string;
  period: string;
  description: string[];
  technologies: string[];
}

export interface EducationItem {
  id: string;
  title: string; // Changed from degree to title to support non-degree entries
  school: string;
  period: string;
  gpa?: string;
  coursework?: string[];
}

export interface Project {
  id: string;
  title: string;
  description: string;
  technologies: string[];
  githubUrl?: string;
  liveUrl?: string;
  imageUrl?: string;
  emoji?: string;
}

export interface NavItem {
  id: string;
  label: string;
  href: string;
}