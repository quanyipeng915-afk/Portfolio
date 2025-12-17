import { Experience, Project } from "./types";

export const NAV_LINKS = [
  { label: 'Work', href: '#work' },
  { label: 'Playground', href: '#playground' },
  { label: 'About', href: '#about' },
  { label: 'Contact', href: '#contact' },
];

export const LARGE_PROJECTS: Project[] = [
  {
    id: 'p1',
    title: 'FinTech Dashboard Redesign',
    category: 'Product Design',
    description: 'A complete overhaul of a legacy financial analytics platform. Focused on data visualization clarity and reducing cognitive load for high-frequency traders.',
    imageUrl: 'https://picsum.photos/seed/fintech/1200/800',
    year: '2024',
    tags: ['Figma', 'React', 'Data Viz'],
  },
  {
    id: 'p2',
    title: 'EcoEats Delivery App',
    category: 'Mobile UX',
    description: 'Sustainable food delivery service application. Designed the end-to-end user journey from onboarding to carbon-offset tracking.',
    imageUrl: 'https://picsum.photos/seed/food/1200/800',
    year: '2023',
    tags: ['Mobile', 'Prototyping', 'User Research'],
  },
  {
    id: 'p3',
    title: 'Nexus Smart Home',
    category: 'IoT Interface',
    description: 'Control hub interface for a smart home ecosystem. Created a unified design language system for tablet and mobile controllers.',
    imageUrl: 'https://picsum.photos/seed/iot/1200/800',
    year: '2023',
    tags: ['Design System', 'IoT', 'Interaction'],
  },
  {
    id: 'p4',
    title: 'Muse Art Gallery',
    category: 'Web Design',
    description: 'Immersive virtual gallery experience. utilized WebGL concepts in design to create depth and spatial awareness in a browser.',
    imageUrl: 'https://picsum.photos/seed/art/1200/800',
    year: '2022',
    tags: ['Web Design', '3D', 'Experiential'],
  },
];

export const SMALL_PROJECTS: Project[] = [
  {
    id: 's1',
    title: 'Daily UI 001',
    category: 'Experiment',
    description: 'Sign up flow exploration.',
    imageUrl: 'https://picsum.photos/seed/ui1/600/600',
    year: '2024',
    tags: ['UI'],
  },
  {
    id: 's2',
    title: 'Icon Set',
    category: 'Graphic',
    description: 'Custom SVG icons for a travel app.',
    imageUrl: 'https://picsum.photos/seed/icon/600/600',
    year: '2024',
    tags: ['Vector'],
  },
  {
    id: 's3',
    title: 'Motion Study',
    category: 'Animation',
    description: 'Micro-interactions for button states.',
    imageUrl: 'https://picsum.photos/seed/motion/600/600',
    year: '2023',
    tags: ['After Effects'],
  },
  {
    id: 's4',
    title: 'Typography',
    category: 'Print',
    description: 'Poster series exploring kinetic type.',
    imageUrl: 'https://picsum.photos/seed/type/600/600',
    year: '2023',
    tags: ['Typography'],
  },
];

export const EXPERIENCES: Experience[] = [
  {
    id: 'e1',
    role: 'Senior Product Designer',
    company: 'TechFlow Solutions',
    period: '2022 - Present',
    description: 'Leading the design system team and overseeing the UX strategy for the core SaaS product. Improved user retention by 15% through streamlined onboarding flows.'
  },
  {
    id: 'e2',
    role: 'UI/UX Designer',
    company: 'Creative Agency X',
    period: '2019 - 2022',
    description: 'Worked with diverse clients ranging from startups to Fortune 500s. Specialized in mobile app design and rapid prototyping.'
  },
  {
    id: 'e3',
    role: 'Junior Designer',
    company: 'StartUp Inc',
    period: '2017 - 2019',
    description: 'Collaborated with engineers to implement designs. Created marketing assets and assisted in user testing sessions.'
  },
];

export const SOCIAL_LINKS = [
  { name: 'LinkedIn', url: '#' },
  { name: 'Dribbble', url: '#' },
  { name: 'Twitter', url: '#' },
  { name: 'Email', url: 'mailto:hello@alex.design' },
];

export const RESUME_CONTEXT = `
You are an AI assistant for Alex, a Senior UI/UX Designer. 
Alex has experience with Figma, React, Prototyping, and Design Systems.
Alex is currently working at TechFlow Solutions (2022-Present).
Previously worked at Creative Agency X (2019-2022) and StartUp Inc (2017-2019).
Key projects include: FinTech Dashboard, EcoEats, Nexus Smart Home, and Muse Art Gallery.
Alex focuses on clean, minimalist aesthetics and user-centered design principles.
Alex is open to freelance opportunities and full-time senior roles.
When asked about contact, direct them to hello@alex.design.
Keep answers professional, concise, and friendly.
`;