import { Replace } from "lucide-react";
import { Experience, Project } from "./types";
import { text } from "stream/consumers";

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
    role: 'Product Designer',
    timeline: 'Sep 2023 - Jan 2024',
    collaborators: ['None'],
    tags: ['Figma', 'Arduino', 'LLM', 'Parent-child communication'],
    content: [

      {
        title: 'Background',
        subtitle: 'The popularity of “Electronic Parents” on social media', 
        text: 'In September 2023, first-person videos of parents interacting with viewers appeared on TikTok. English blogger @Cherdleys posted "POV: your dad loves you" videos, gaining significant attention. Meanwhile, Chinese blogger @和女儿分享日常, featuring a middle-aged couple, depicted typical youth experiences, showing how "loving" parents handle them. This content quickly gained 100,000 followers in a month and is known in China as “Electronic Parents.”',
        imageLayout: 'normal',
        imageUrl: '/Images/P1/P1-1.png',
      },
      {
        subtitle: 'Problems about the family of origin behind “Electronic Parents”',
        text: 'Family and familial affection offer emotional sustenance, like safety and belonging. “Electronic Parents” bloggers create an imaginative version of family affection for users. In comments, real parents often appear opposite to electronic parents.\n\nThis suggests common issues in family relationships among the younger generation, with the main difference being in parenting styles compared to electronic parents.',
        imageLayout: 'full',
        imageUrl: '/Images/P1/P1-2.png',
      },
      {
        title: 'Research',
        subtitle: 'Questionnaire survey on “Electronic Parents”',
        text: 'To verify and conduct further research, I designed an online questionnaire to find out what people really think about the “Electronic Parents” phenomenon. The questionnaire consists of 15 questions, and a total of 136 valid responses were collected. The key questions are selected and displayed here.',
        imageLayout: 'full',
        imageUrl: '/Images/P1/P1-3.png',
      },
      {
        subtitle: 'Interview insights',
        text: 'Family and familial affection offer emotional sustenance, like safety and belonging. “Electronic Parents” bloggers create an imaginative version of family affection for users. In comments, real parents often appear opposite to electronic parents.\n\nThis suggests common issues in family relationships among the younger generation, with the main difference being in parenting styles compared to electronic parents.',
        imageLayout: 'normal',
        imageUrl: '/Images/P1/P1-4.png'
      },
      {
        title: 'Empathy Map',
        text: '<strong style="color: #B0743B">For Children:</strong> Children who want to express their emotions and feelings more openly to their parents, or who have negative emotions due to family relationships.\n\n<strong style="color: #B0743B">For Parents:</strong> Parents who want to improve their contact and communication with their children and are hot-tempered.',
        imageLayout: 'normal',
        imageUrl: '/Images/P1/P1-5(1).png',
        image2Url: '/Images/P1/P1-5(2).png',
      },
      {
        title: 'Design Thinking',
        subtitle: 'Design Brief & Brainstorming',
        text:'',
        imageLayout: 'normal',
        imageUrl: '/Images/P1/P1-6.png',
      },
      {
        subtitle: 'Concept & Storyboard',
        text: 'This design aims to enhance emotional connections between parents and children through gentle touch, helping users feel cared for and understood.',
        imageLayout: 'normal',
        imageUrl: '/Images/P1/P1-7.png',
      },
      {
        subtitle: 'Design Development',
        text: '',
        imageLayout: 'normal',
        imageUrl: '/Images/P1/P1-8.png',
      },
      {
        title: 'Final Design',
        text: '',
        subtitle: 'Wireframes',
        imageLayout: 'normal',
        imageUrl: '/Images/P1/P1-9.png',
      },
      {
        text: '',
        subtitle: 'Moodboard & Visual Specifications',
        imageLayout: 'normal',
        imageUrl: '/Images/P1/P1-10.png',
      },
      {
        text: '',
        subtitle: 'High-fidelity Prototype',
        imageLayout: 'normal',
        imageUrl: '/Images/P1/P1-11.png',
        image2Url: '/Images/P1/P1-12.png',
      },
      {
        text: 'Through the interactive AI dialogue system and mini wireless printer, the channel of parent-child communication is formed. The cute appearance and soft fabric soften the indirect communication process between the two sides.',
        subtitle: 'Product Development',
        imageLayout: 'normal',
        imageUrl: '/Images/P1/P1-13.png',
      },
      {
        text: '',
        subtitle: 'Function Development',
        imageLayout: 'normal',
        imageUrl: '/Images/P1/P1-14.png',
        image2Url: '/Images/P1/P1-15.png',
      },
      {
        title: 'How It Works',
        text:'',
        imageLayout: 'full',
        imageUrl: '/Images/P1/P1-16.png',
        image2Url: '/Images/P1/P1-17.png',
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
     // ADD THIS LINE:
    link: 'https://youtu.be/4gfHU--S_2E', 
    content: [
      {
        title: 'Background',
        subtitle: 'Definition of extreme commuting and its impact on emotional health', 
        text: 'A 45-minute commute is globally recognized as an ideal cut-off, with a commute of more than 60 minutes defined as "extreme commuting." "Difficult commute" in big cities has become an increasingly prominent problem for office workers. \n A study of more than 34,000 workers across a range of industries in the UK, conducted by vititalityhealth, the University of Cambridge, RAND Europe and Mercer, Examined the impact of commuting on employee health and productivity.',
        imageLayout: 'normal',
        imageUrl: '/Images/P2/P2-1.png',
      },
      {
        subtitle: 'Average commuting time in China',
        text: 'According to the 2023 Commuter Monitoring Report of Major Cities in China, the proportion of people who commute for more than 60 minutes in major cities in China is 12%, which is flat year-on-year, and more than 14 million people are still subjected to extreme commuting.',
        imageLayout: 'full',
        imageUrl: '/Images/P2/P2-2.png',
      },
      {
        title: 'Primary Research',
        subtitle: 'Questionnaire',
        text: 'Based on the desktop research, I designed a 10-question questionnaire to initially explore the impact of commuting time on mood. The survey surveyed 128 people, 95% of whom were 18-35 years old. Here are the numbers for the four key questions.',
        imageLayout: 'full',
        imageUrl: '/Images/P2/P2-3.png' // Replace with your actual image path
      },
      {
        text: "In order to further understand people's experiences during commuting and ways to alleviate emotional health problems, I conducted follow up interviews with 7 people who answered the questionnaire.",
        subtitle: 'Online Interview',
        imageLayout: 'full',
        imageUrl: '/Images/P2/P2-4.png',
      },
      {
        title: 'Analysis',
        subtitle: 'Personas',
        text: '',
        imageLayout: 'normal',
        imageUrl: '/Images/P2/P2-5.png',
      },
      {
        text: '',
        imageLayout: 'full',
        imageUrl: '/Images/P2/P2-6.png',
      },
      {
        title: 'Experienment',
        text: 'In order to explore the different effects of hearing and touching on emotions and whether there is synaesthesia between hearing and other senses. I conducted an experiment to test whether people felt differently by controlling for different variables of music and material in Yuniaoji community in Hangzhou.',
        imageLayout: 'normal',
        imageUrl: '/Images/P2/P2-7.png' // Replace with your actual image path
      },
      {
        subtitle: 'Experiment steps & materials',
        text: "I took a few music from musicbed's mood categories, and the results showed that people didn't necessarily have the same emotional response as they were supposed to.",
        imageLayout: 'normal',
        imageUrl: '/Images/P2/P2-8.png',
        image2Url: '/Images/P2/P2-9.png'
      },
      {
        text: "",
        imageLayout: 'full',
        imageUrl: '/Images/P2/P2-10.png',
        image2Url: '/Images/P2/P2-11.png'
      },
      {
        subtitle: "Bertin's matrices",
        text: "",
        imageLayout: 'normal',
        imageUrl: '/Images/P2/P2-12.png',
      },
      {
        title: 'Summary',
        text: "The chaotic environment during a commute can affect a passenger's mood.\nMost people carry headphones with them when they commute.\nRest and recreation are the main needs of people on the commute.\nStress at work can easily spill over into the home.",
      },
      {
        title: 'Demand tree',
        text: '',
        imageLayout: 'normal',
        imageUrl: '/Images/P2/P2-13.png',
      },
      {
        title: 'Development',
        text: 'I propose 3 options for interviewees to choose:',
        imageLayout: 'normal',
        imageUrl: '/Images/P2/P2-14.png',
      },
      {
        title: 'Final Proposal',
        text: '',
        imageLayout: 'normal',
        imageUrl: '/Images/P2/P2-15.png',
      },
      {
        title: 'Visual Design',
        text: '',
        imageLayout: 'normal',
        imageUrl: '/Images/P2/P2-16.png',
      },
      {
        title: 'Game Flow Chart',
        text: '',
        imageLayout: 'normal',
        imageUrl: '/Images/P2/P2-17.png',
      },
      {
        title: 'Interactive Flow Chart',
        text: '',
        imageLayout: 'normal',
        imageUrl: '/Images/P2/P2-18.png',
      },
      {
        title: 'Game Interface',
        text: '',
        imageLayout: 'full',
        imageUrl: '/Images/P2/P2-19.png',
      },
      {
        title: 'Final Display',
        text: '',
        imageLayout: 'full',
        imageUrl: '/Images/P2/P2-20.png',
      },
      {
        title: 'TouchDesigner',
        text: '',
        imageLayout: 'full',
        imageUrl: '/Images/P2/P2-21.png',
      },
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
        title: 'Background',
        subtitle: 'What is NSSI?',
        text: "Non-suicidal self-injury (NSSI) is the deliberate, self-inflicted destruction of body tissue resulting in immediate damage, without suicidal intent and for purposes not culturally sanctioned.\nNSSI can significantly increase the risk of suicide. Studies show that compared with other groups, NSSI groups have 4.2 times more suicidal ideation, 1.1 times more suicide planning, and 4.8 times more risk of suicide attempt.",

      },
      {
        subtitle: "Target populations and Risk factors",
        text: '',
        imageLayout: 'normal',
        imageUrl: '/Images/P3/P3-1.png' // Replace with your actual image path
      },
      {
        subtitle:"NSSI methods",
        text: 'According to 4 qualitative studies, cutting has also been reported as the most common NSSI method (65.0%–95.7%) among Chinese adolescents.',
        imageLayout: 'normal',
        imageUrl: '/Images/P3/P3-2.png' // Replace with your actual image path
      },
      {
        subtitle:"The intervention strategies",
        text: 'The most commonly used intervention strategies were Cognitive behavioral therapy (CBT) and Dialectical behavior therapy (DBT).',
        imageLayout: 'normal',
        imageUrl: '/Images/P3/P3-3.png' // Replace with your actual image path
      },
      {
        title:"Expert Interview",
        text:'',
        imageLayout: 'full',
        imageUrl: '/Images/P3/P3-4.png' // Replace with your actual image path
      },
      {
        title:"User Interview",
        text:'',
        imageLayout: 'normal',
        imageUrl: '/Images/P3/P3-5.png' // Replace with your actual image path
      },
      {
        title:"Empathy Map",
        text:'',
        imageLayout: 'full',
        imageUrl: '/Images/P3/P3-6.png' // Replace with your actual image path
      },
      {
        title:"User Journey Map",
        text:'',
        imageLayout: 'full',
        imageUrl: '/Images/P3/P3-7.png' // Replace with your actual image path
      },
      {
        title:"Design Direction",
        text:'',
        imageLayout: 'full',
        imageUrl: '/Images/P3/P3-8.png' // Replace with your actual image path
      },
      {
        title:"Ideation",
        text:'',
        imageLayout: 'full',
        imageUrl: '/Images/P3/P3-9.png' // Replace with your actual image path
      },
      {
        title:"Development",
        subtitle:"Wearable device design",
        text:'Since self-injurious behavior often targets the hands and the hands are easily accessible, the device is designed an arm sleeve. This serves both to assist in reducing self-harm behavior and to protect the forearm. If bleeding occurs, the wrap can help to stop the bleeding.',
        imageLayout: 'full',
        imageUrl: '/Images/P3/P3-10.png' // Replace with your actual image path
      },
      {
        subtitle:"Information Architecture",
        text:'',
        imageLayout: 'full',
        imageUrl: '/Images/P3/P3-11.png' // Replace with your actual image path
      },
      {
        subtitle:"Low-Fi",
        text:'',
        imageLayout: 'normal',
        imageUrl: '/Images/P3/P3-12.png' // Replace with your actual image path
      },
      {
        subtitle:"UI specification",
        text:'',
        imageLayout: 'normal',
        imageUrl: '/Images/P3/P3-13.png' // Replace with your actual image path
      },
      {
        subtitle:"High-Fi",
        text:'',
        imageLayout: 'full',
        imageUrl: '/Images/P3/P3-14.png' // Replace with your actual image path
      },
      {
        title:"How does it work",
        text:'',
        imageLayout: 'full',
        imageUrl: '/Images/P3/P3-15.png' // Replace with your actual image path
      },
      {
        title:"Using Scenario",
        text:'',
        imageLayout: 'full',
        imageUrl: '/Images/P3/P3-16.png' // Replace with your actual image path
      },
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
        title: 'Background',
        subtitle: 'Development of artificial intelligence',
        text: 'In December 2022, OpenAI launched the artificial intelligence Chatbot project ChatGPT, ushering in the epochal first year of artificial intelligence - since 2023, we have witnessed unprecedented changes brought about by artificial intelligence technology in multiple fields.\nStaff at the International Monetary Fund found that nearly 40 percent of jobs worldwide will be affected by AI. In advanced economies, about 60 percent of jobs could be affected by AI.',
      },
      {
        subtitle: 'Impact',
        text: 'AI has enhanced automation, potentially reducing labor demand while increasing efficiency, leading to lower wages, fewer jobs, and the possible disappearance of some roles.',
        imageLayout: 'full',
        imageUrl: '/Images/P4/P4-1.png' // Replace with your actual image path
      },
      {
        subtitle: 'Speculation',
        text: "How will AI reshape the <b>social division of labor</b>\nWhen AI is applied at scale in all fields, how will the <b>structure of society</b> change\nWhat <b>legal and ethical challenges</b> will the age of artificial intelligence face, and how should we respond\nWhat will happen to people's <b>living standards</b>",
        
      },
      {
        title: 'Speculating',
        subtitle: 'Timeline & Future cone',
        text: '',
        imageLayout: 'full',
        imageUrl: '/Images/P4/P4-2.png' // Replace with your actual image path
      },
      {
        subtitle: 'Possible',
        text: 'Conflicts between the poor have intensified\nThe environment has deteriorated due to the energy consumption of AI\nEverything in life has become <b><span style="color: #32C0E6">gamified</span></b>, and video games have become the most common entertainment',
       
      },
      {
        subtitle: 'Plausible',
        text: '<b><span style="color: #32C0E6">Technology companies</span></b> have more say than ever before, and governments need to rely on their country\'s head companies to game or cooperate\nThere is also a need to improve <b><span style="color: #32C0E6">digital security</span></b>',
       
      },
      {
        subtitle: 'Probable',
        text: 'The early adoption of new technology among the elite has increased <b><span style="color: #32C0E6">class solidification</span></b>\nHuman-machine technology led to the first wave of social stratification, with those who had access and were willing to experiment with new technologies gaining neural enhancement and becoming a <b><span style="color: #32C0E6">new elite group</span></b>\nThe AI governance system is heavily biased toward controlling its elite and becomes a tool for maintaining class solidification',
       
      },
      {
        subtitle: '<b><span style="color: #F656F2">Preferable</span></b>',
        text: '<b><span style="color: #F656F2">AI repair technicians</span></b> has become a hot and stable job, and many middle and lower class people expect to improve their quality of life through it\nDue to the popularity of natural language programming systems, the average maintenance repair technicians actually does not have much CS experience, and those who fully master and are good at writing computer languages belong to the <b><span style="color: #F656F2">engineer talent</span></b>\nAI errors can be attributed to the maintenance personnel involved, but this practice is also controversial',
       
      },
      {
        subtitle: 'Summary',
        text: '',
        imageLayout: 'normal',
        imageUrl: '/Images/P4/P4-3.png'
       
      },
      {
        title: 'The Future',
        subtitle: 'Context & Storyboard',
        text: '',
        imageLayout: 'full',
        imageUrl: '/Images/P4/P4-4.png'
      },
      {
        title: 'Ideation',
        subtitle: 'Brainstorming',
        text: '',
        imageLayout: 'normal',
        imageUrl: '/Images/P4/P4-6.png'
      },
      {
        subtitle: 'System map',
        text: '',
        imageLayout: 'full',
        imageUrl: '/Images/P4/P4-7.png',
      },
      {
        title: 'Pre-game screen',
        text: '',
        imageLayout: 'full',
        imageUrl: '/Images/P4/P4-8.png'
      },
      {
        title: 'Service blueprint',
        text: '',
        imageLayout: 'full',
        imageUrl: '/Images/P4/P4-9.png'
      },
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
        text: '',
        imageUrl : '/Images/P5/P5-1.png', // 
        imageLayout: 'full',
      },
      {
        text: '',
        imageUrl : '/Images/P5/P5-2.png', // 
        imageLayout: 'full',
      },
      {
        text: '',
        imageUrl : '/Images/P5/P5-3.png', // 
        imageLayout: 'full',
      },
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
    content: [
      {
        title: 'Character line up',
        text: '',
        imageUrl : '/Images/S1/S1-1.png', // 
        imageLayout: 'full',
      },
      {
        title: 'Gameplay',
        text: '',
        imageUrl : '/Images/S1/S1-2.png', // 
        imageLayout: 'full',
      },
      {
        title: 'Exhibition',
        text: '',
        imageUrl: '/Images/S1/S1-3.png', // Path to your video file
        imageLayout: 'full', // 'full' or 'normal'
      },
    ],
  },
  {
    id: 's2',
    title: 'Acorn Podcast',
    category: 'UI & Branding Design',
    description: 'Inspired by the rise of audio social platforms like Clubhouse in 2021, I aimed to strengthen platform-user interaction through a voice-based community model. Regular themed events encourage voice participation, nurturing new creators.',
    imageUrl: '/Images/podcast.png',
    year: '2022',
    tags: ['User Interface', 'Branding'],
    content: [
      {
        title: 'Visual Design',
        text: '',
        imageUrl : '/Images/S2/S2-1.png', // 
        imageLayout: 'full',
      },
      {
        title: 'Hi-Fi Prototype',
        text: '',
        imageUrl : '/Images/S2/S2-2.png', // 
        imageLayout: 'full',
      },
      
    ],
  },
  {
    id: 's3',
    title: 'Sub-Sports Hangzhou',
    category: 'Future community, Fieldwork, Book design',
    description: 'Sports have their "professional" and "daily" aspects. Professional sports, with high entry barriers, are an option for a few, but the goal is to drive a low-threshold, mass movement for the majority. Building on these insights, I contributed to the project by designing a book and creating AR-enhanced visuals.',
    imageUrl: '/Images/Book.png',
    year: '2023',
    tags: ['After Effects'],
    content: [
      {
        title: 'Book Design',
        text: '',
        imageUrl : '/Images/S3/S3-1.png', // 
        imageLayout: 'normal',
      },
      {
        text: '',
        imageUrl : '/Images/S3/S3-2.png', // 
        imageLayout: 'full',
      },
      {
        title: 'Exhibition',
        subtitle: 'July 12-13th, 2022 in China Academy of Art, Hangzhou',
        text: '',
        imageUrl : '/Images/S3/S3-3.png', // 
        imageLayout: 'full',
      },
      {
        subtitle: 'Dec 8-10th, 2023 in Design360° Festival, Hangzhou',
        text: '',
        imageUrl : '/Images/S3/S3-4.png', // 
        imageLayout: 'full',
      },
    ],
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
    role: 'Branding Designer',
    company: 'Mokexi (Shenzhen) Technology Co., LTD. (American Contact lens brand)',
    period: 'Feb 2025 - May 2025',
    description: 'Led the end-to-end visual branding for a new independent website, including market research, competitor analysis, brand positioning, and VI system development. Independently delivered product visuals, on-site design, and packaging samples, ensuring brand consistency across all touchpoints. Designed daily social media marketing visuals and digital assets for new product launches. Leveraged trending topics to create visually compelling posts, resulting in a 4–5x increase in Instagram likes.'
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