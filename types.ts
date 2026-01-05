export interface ProjectContent {
  title?: string;
  text: string;
  imageUrl?: string;
}

export interface Project {
  id: string;
  title: string;
  category: string;
  description: string;
  imageUrl: string;
  detailImageUrl?: string;
  year: string;
  tags: string[];
  link?: string;
  content?: ProjectContent[];
}

export interface Experience {
  id: string;
  role: string;
  company: string;
  period: string;
  description: string;
}

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
}

export enum SectionId {
  HERO = 'hero',
  WORK = 'work',
  PLAYGROUND = 'playground',
  ABOUT = 'about',
  CONTACT = 'contact'
}