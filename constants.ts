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
    detailImageUrl: '/Images/P1-detail.png', // Add your different detail page image here
    year: '2024',
    tags: ['Figma', 'Arduino', 'LLM', 'Parent-child communication'],
    content: [
      {
        title: 'The Challenge',
        text: 'Modern families often struggle with meaningful communication. Parents and children may feel disconnected due to busy schedules and digital distractions. The goal was to create a bridge that feels playful and non-intrusive.',
      },
      {
        title: 'The Solution',
        text: 'We developed a system of interactive "paws" that light up and react to touch. When a parent touches their paw, the child\'s paw glows, creating a sense of presence without requiring a phone call or text message.',
        imageUrl: 'https://picsum.photos/seed/paws-detail/800/600' // Replace with your actual image path
      },
      {
        title: 'User Testing',
        text: 'Testing with 10 families showed a 40% increase in daily interactions. Children reported feeling more connected to their parents, and parents appreciated the low-pressure way to check in.',
      }
    ]
  },
  {
    id: 'p2',
    title: 'Harmonic Commute',
    category: 'Game design, mobile application',
    description: "In order to relieve people's bad emotions during commuting, combined with my own work experience, this project will start from the commuting scene and use the methods of art healing games and breathing rhythm exercises to solve the problem.",
    imageUrl: '/Images/P2.png',
    detailImageUrl: '/Images/P2-detail.png',
    year: '2024',
    tags: ['Audio visualization', 'TouchDesigner', 'Arduino'],
    content: [
      {
        title: 'The Challenge',
        text: 'Modern families often struggle with meaningful communication. Parents and children may feel disconnected due to busy schedules and digital distractions. The goal was to create a bridge that feels playful and non-intrusive.',
      },
      {
        title: 'The Solution',
        text: 'We developed a system of interactive "paws" that light up and react to touch. When a parent touches their paw, the child\'s paw glows, creating a sense of presence without requiring a phone call or text message.',
        imageUrl: 'https://picsum.photos/seed/paws-detail/800/600' // Replace with your actual image path
      },
      {
        title: 'User Testing',
        text: 'Testing with 10 families showed a 40% increase in daily interactions. Children reported feeling more connected to their parents, and parents appreciated the low-pressure way to check in.',
      }
    ]
  },
  {
    id: 'p3',
    title: 'Heart Patch',
    category: 'Interactive design, Industrial design, Wearable design',
    description: 'I came up with an idea for a device that mimics the sensation of self-harm without causing real damage, combined with software that helps users reflect on their emotions afterward, encouraging a positive, healing cycle.',
    imageUrl: '/Images/P3.png',
    detailImageUrl: '/Images/P3-detail.png',
    year: '2025',
    tags: ['Product', 'Psychology', 'Mental Health'],
    content: [
      {
        title: 'The Challenge',
        text: 'Modern families often struggle with meaningful communication. Parents and children may feel disconnected due to busy schedules and digital distractions. The goal was to create a bridge that feels playful and non-intrusive.',
      },
      {
        title: 'The Solution',
        text: 'We developed a system of interactive "paws" that light up and react to touch. When a parent touches their paw, the child\'s paw glows, creating a sense of presence without requiring a phone call or text message.',
        imageUrl: 'https://picsum.photos/seed/paws-detail/800/600' // Replace with your actual image path
      },
      {
        title: 'User Testing',
        text: 'Testing with 10 families showed a 40% increase in daily interactions. Children reported feeling more connected to their parents, and parents appreciated the low-pressure way to check in.',
      }
    ]
  },
  {
    id: 'p4',
    title: 'Archive of Being',
    category: 'Speculative design, Service design',
    description: 'This speculative project examines how AI-driven societies may impact human identity, digital memory, and personal agency.',
    imageUrl: '/Images/P4.png',
    detailImageUrl: '/Images/P4-detail.png',
    year: '2025',
    tags: ['Future', 'Game', 'Immersive'],
    content: [
      {
        title: 'The Challenge',
        text: 'Modern families often struggle with meaningful communication. Parents and children may feel disconnected due to busy schedules and digital distractions. The goal was to create a bridge that feels playful and non-intrusive.',
      },
      {
        title: 'The Solution',
        text: 'We developed a system of interactive "paws" that light up and react to touch. When a parent touches their paw, the child\'s paw glows, creating a sense of presence without requiring a phone call or text message.',
        imageUrl: 'https://picsum.photos/seed/paws-detail/800/600' // Replace with your actual image path
      },
      {
        title: 'User Testing',
        text: 'Testing with 10 families showed a 40% increase in daily interactions. Children reported feeling more connected to their parents, and parents appreciated the low-pressure way to check in.',
      }
    ]
  },
  {
    id: 'p5',
    title: 'Gloco Lens',
    category: 'Branding, Visual Identity, Web Design',
    description: 'I have established a brand-new visual system for the international beauty contact brand, GLOCO LENS. The beauty contact products adopt the most advanced MPC material at present, providing customers with natural beauty with a unique oxygen permeability rate, enhancing and magnifying the characteristics of each persons own eyes, and shining with beautiful light',
    imageUrl: '/Images/P5.png',
    detailImageUrl: '/Images/P5-detail.png',
    year: '2025',
    tags: ['Visual', 'Shopify', 'Beauty'],
    content: [
      {
        title: 'The Challenge',
        text: 'Modern families often struggle with meaningful communication. Parents and children may feel disconnected due to busy schedules and digital distractions. The goal was to create a bridge that feels playful and non-intrusive.',
      },
      {
        title: 'The Solution',
        text: 'We developed a system of interactive "paws" that light up and react to touch. When a parent touches their paw, the child\'s paw glows, creating a sense of presence without requiring a phone call or text message.',
        imageUrl: 'https://picsum.photos/seed/paws-detail/800/600' // Replace with your actual image path
      },
      {
        title: 'User Testing',
        text: 'Testing with 10 families showed a 40% increase in daily interactions. Children reported feeling more connected to their parents, and parents appreciated the low-pressure way to check in.',
      }
    ]
  },
];

export const SMALL_PROJECTS: Project[] = [
  {
    id: 's1',
    title: 'Pray for a son',
    category: 'Game Design',
    description: 'Pray for a Son tells the story of a family violence incident in a 1960s village rooted in the preference for sons over daughters. In the game, players take on the role of a young girl in a dreamlike state, experiencing and attempting to alter the painful events of her past, ultimately seeking a different ending. The game features a Chinese horror style, intertwined with elements of traditional Chinese folklore. Players are tasked with solving puzzles, exploring, and revisiting the shadows that haunt the girl’s short life. The choices players make for her will determine if this dream becomes a nightmare or a peaceful dream.',
    imageUrl: '/Images/pray.png',
    year: '2022',
    tags: ['Game', 'Unity', 'Character Design'],
  },
  {
    id: 's2',
    title: 'Acorn Podcast',
    category: 'UI & Branding Design',
    description: 'Inspired by the rise of audio social platforms like Clubhouse in 2021, I aimed to strengthen platform-user interaction through a voice-based community model. Regular themed events encourage voice participation, nurturing new creators.',
    imageUrl: '/Images/podcast.png',
    year: '2022',
    tags: ['User Interface', 'Branding'],
  },
  {
    id: 's3',
    title: 'Sub-Sports Hangzhou',
    category: 'Future community, Fieldwork, Book design',
    description: 'Sports have their "professional" and "daily" aspects. Professional sports, with high entry barriers, are an option for a few, but the goal is to drive a low-threshold, mass movement for the majority. Building on these insights, I contributed to the project by designing a book and creating AR-enhanced visuals.',
    imageUrl: '/Images/Book.png',
    year: '2023',
    tags: ['After Effects'],
  },

];

export const EXPERIENCES: Experience[] = [
  {
    id: 'e1',
    role: 'User Experience Design Assistant',
    company: 'Shanghai LUMO Culture Communication Co., Ltd.',
    period: 'Jun 2024 - Nov 2024',
    description: 'Conducted market research and user behavior analysis for Weseed Coffee’s online shop, identifying consumer trends and optimizing the purchasing journey. Provided actionable insights to improve user satisfaction and drive higher conversion rates. Designed visual interfaces, ensuring brand consistency and an intuitive shopping experience.'
  },
  {
    id: 'e2',
    role: 'UI/UX Design Intern',
    company: 'Yonyou Network Technology Co., Ltd.',
    period: 'Jan 2023 - Mar 2023',
    description: 'Organized and maintained the UI component library, ensuring consistency and usability across multiple systems. Collected user feedback and designed interactive layouts for internal social features, improving user experience. Developed visual design for the company website, focusing on cohesive layouts and key functional elements.'
  },
  {
    id: 'e3',
    role: 'Visual Design Intern',
    company: 'TRANSSNET',
    period: 'Mar 2023 - Aug 2023',
    description: 'Designed and implemented key visuals for digital marketing campaigns, customizing graphics to enhance user engagement. Edited and optimized video ads by analyzing user behavior and performance data, increasing click-through rates. Created dynamic animations for live-stream gifts, contributing to platform monetization.'
  },
    {
    id: 'e4',
    role: 'Visual Design Intern',
    company: 'TRANSSNET',
    period: 'Mar 2023 - Aug 2023',
    description: 'Designed and implemented key visuals for digital marketing campaigns, customizing graphics to enhance user engagement. Edited and optimized video ads by analyzing user behavior and performance data, increasing click-through rates. Created dynamic animations for live-stream gifts, contributing to platform monetization.'
  },
];

export const SOCIAL_LINKS = [
  { name: 'LinkedIn', url: 'https://www.linkedin.com/in/quanyi-peng-26b42a279/' },
  { name: 'Dribbble', url: '#' },
  { name: 'Instagram', url: 'https://www.instagram.com/quanyi_0915/' },
  { name: 'Email', url: 'mailto:quanyipeng915@gmail.com' },
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