export interface ContactInfo {
  phone: string;
  email: string;
  location: string;
  website: string;
  linkedin: string;
  github: string;
}

export interface PortfolioData {
  name: string;
  title: string;
  headline: string;
  summary: string;
  contact: ContactInfo;
  profileImage: string;
  resumeUrl: string;
}

export interface CoreCompetencyCategory {
  category: string;
  skills: string[];
}

export interface Skill {
  name: string;
  level: number;
  category: string;
}

export interface Experience {
  company: string;
  role: string;
  period: string;
  location: string;
  description: string[];
}

export interface Project {
  title: string;
  description: string[];
  technologies: string[];
  techSummary?: string;
  imageUrl: string;
  githubUrl?: string;
  liveUrl?: string;
}

export interface Achievement {
  title: string;
  detail: string;
}

export interface Education {
  degree: string;
  field: string;
  institution: string;
  location: string;
  cgpa: string;
  period: string;
}

export interface Certification {
  name: string;
  issuer: string;
}

