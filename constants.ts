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
    title: "Paws' Whisper",
    category: 'Product Design, UE/UI design',
    description: "I designed interactive ‘paws’ paired with a gamified communication system. It gives families a low-pressure, playful way to reconnect—something that feels natural rather than forced.",
    imageUrl: '/Images/P1.png',
    year: '2024',
    tags: ['Figma', 'Arduino', 'LLM', 'Parent-child communication'],
  },
  {
    id: 'p2',
    title: 'Harmonic Commute',
    category: 'Game design, mobile application',
    description: "In order to relieve people's bad emotions during commuting, combined with my own work experience, this project will start from the commuting scene and use the methods of art healing games and breathing rhythm exercises to solve the problem.",
    imageUrl: '/Images/P2.png',
    year: '2024',
    tags: ['Audio visualization', 'TouchDesigner', 'Arduino'],
  },
  {
    id: 'p3',
    title: 'Heart Patch',
    category: 'Interactive design, Industrial design, Wearable design',
    description: 'I came up with an idea for a device that mimics the sensation of self-harm without causing real damage, combined with software that helps users reflect on their emotions afterward, encouraging a positive, healing cycle.',
    imageUrl: '/Images/P3.png',
    year: '2025',
    tags: ['Product', 'Psychology', 'Mental Health'],
  },
  {
    id: 'p4',
    title: 'Archive of Being',
    category: 'Speculative design, Service design',
    description: 'This speculative project examines how AI-driven societies may impact human identity, digital memory, and personal agency.',
    imageUrl: '/Images/P4.png',
    year: '2025',
    tags: ['Future', 'Game', 'Immersive'],
  },
];

export const SMALL_PROJECTS: Project[] = [
  {
    id: 's1',
    title: 'Pray for a son',
    category: 'Game Design',
    description: 'Pray for a Son tells the story of a family violence incident in a 1960s village rooted in the preference for sons over daughters. In the game, players take on the role of a young girl in a dreamlike state, experiencing and attempting to alter the painful events of her past, ultimately seeking a different ending. The game features a Chinese horror style, intertwined with elements of traditional Chinese folklore. Players are tasked with solving puzzles, exploring, and revisiting the shadows that haunt the girl’s short life. The choices players make for her will determine if this dream becomes a nightmare or a peaceful dream.',
    imageUrl: 'https://picsum.photos/seed/ui1/600/600',
    year: '2022',
    tags: ['Game', 'Unity'],
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
  { name: 'Email', url: 'mailto:hello@elian.design' },
];

export const RESUME_CONTEXT = `
You are an AI assistant for Elian, a Senior UI/UX Designer. 
Elian has experience with Figma, React, Prototyping, and Design Systems.
Elian is currently working at TechFlow Solutions (2022-Present).
Previously worked at Creative Agency X (2019-2022) and StartUp Inc (2017-2019).
Key projects include: FinTech Dashboard, EcoEats, Nexus Smart Home, and Muse Art Gallery.
Elian focuses on clean, minimalist aesthetics and user-centered design principles.
Elian is open to freelance opportunities and full-time senior roles.
When asked about contact, direct them to hello@elian.design.
Keep answers professional, concise, and friendly.
`;