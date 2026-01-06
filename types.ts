export interface ProjectContent {
  title?: string;
  subtitle?: string; // New: Second title
  text: string;
  imageUrl?: string;
  image2Url?: string; // New: For 2 images/row layout
  highlight?: boolean; 
  imageLayout?: 'full' | 'normal' | 'grid'; // New: Control image layout
}

export interface Project {
  id: string;
  title: string;
  category: string;
  description: string;
  imageUrl: string;
  detailImageUrl?: string;
  year: string;
  role?: string;        // New field
  timeline?: string;    // New field
  collaborators?: string[]; // New field
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