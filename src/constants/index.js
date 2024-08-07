import {
  benefitIcon1,
  benefitIcon2,
  benefitIcon3,
  benefitIcon4,
  benefitImage2,
  chromecast,
  disc02,
  discord,
  discordBlack,
  facebook,
  figma,
  file02,
  framer,
  homeSmile,
  instagram,
  notification2,
  notification3,
  notification4,
  notion,
  photoshop,
  plusSquare,
  protopie,
  raindrop,
  recording01,
  recording03,
  roadmap1,
  roadmap2,
  roadmap3,
  roadmap4,
  searchMd,
  slack,
  sliders04,
  telegram,
  twitter,
  github,
  cv,
  IG,
  linkedin,
  yourlogo,
  Nodejs,
  React,
  Tailwind,
  Vite,
  Express,
  CodeIgniter,
  Laravel,
  Postman,
  menapak,
  jemparingan,
  blue,
  UKM,
  
} from "../assets";

export const navigation = [
  {
    id: "0",
    title: "Home",
    url: "#Home",
  },
  {
    id: "1",
    title: "About",
    url: "#pricing",
  },
  {
    id: "2",
    title: "Portofolio",
    url: "#how-to-use",
  },
  {
    id: "3",
    title: "Certificate",
    url: "#roadmap",
  },

];

export const heroIcons = [
  {
    imageUrl:github,
    title: "github",
    url: "https://github.com/SufardiMadoa",
  },
  {
    imageUrl:cv,
    title: "Portofolio",
    url: "https://read.cv/sufardimadoa",
  },
  {
    imageUrl:linkedin,
    title: "Linkedin",
    url: "https://www.linkedin.com/in/sufardi-madoa-116a56295/",
  },
  {
    imageUrl:IG,
    title: "Instagram",
    url: "https://www.instagram.com/sfrdi__/",
  }
];

export const notificationImages = [notification4, notification3, notification2];

export const companyLogos = [yourlogo, yourlogo, yourlogo, yourlogo, yourlogo];

export const brainwaveServices = [
  "Photo generating",
  "Photo enhance",
  "Seamless Integration",
];

export const brainwaveServicesIcons = [
  recording03,
  recording01,
  disc02,
  chromecast,
  sliders04,
];

export const roadmap = [
  {
    id: "0",
    title: "Voice recognition",
    text: "Enable the chatbot to understand and respond to voice commands, making it easier for users to interact with the app hands-free.",
    date: "May 2023",
    status: "done",
    imageUrl: roadmap1,
    colorful: true,
  },
  {
    id: "1",
    title: "Gamification",
    text: "Add game-like elements, such as badges or leaderboards, to incentivize users to engage with the chatbot more frequently.",
    date: "May 2023",
    status: "progress",
    imageUrl: roadmap2,
  },
  {
    id: "2",
    title: "Chatbot customization",
    text: "Allow users to customize the chatbot's appearance and behavior, making it more engaging and fun to interact with.",
    date: "May 2023",
    status: "done",
    imageUrl: roadmap3,
  },
  {
    id: "3",
    title: "Integration with APIs",
    text: "Allow the chatbot to access external data sources, such as weather APIs or news APIs, to provide more relevant recommendations.",
    date: "May 2023",
    status: "progress",
    imageUrl: roadmap4,
  },
];

export const collabText =
  "I am a web developer, with the following skills.";

export const collabContent = [
  {
    id: "0",
    title: "Responsive Design",
    
  },
  {
    id: "1",
    title: "Front-End Development",
  },
  {
    id: "2",
    title: "Back-End Development",
  },
];

export const collabApps = [
  {
    id: "0",
    title: "Figma",
    icon: Nodejs,
    width: 26,
    height: 36,
  },
  {
    id: "1",
    title: "Notion",
    icon: React,
    width: 34,
    height: 36,
  },
  {
    id: "2",
    title: "Discord",
    icon: Vite,
    width: 36,
    height: 28,
  },
  {
    id: "3",
    title: "Slack",
    icon: Tailwind,
    width: 34,
    height: 35,
  },
  {
    id: "4",
    title: "Photoshop",
    icon: Express,
    width: 34,
    height: 34,
  },
  {
    id: "5",
    title: "Protopie",
    icon: CodeIgniter,
    width: 34,
    height: 34,
  },
  {
    id: "6",
    title: "Framer",
    icon: Laravel,
    width: 26,
    height: 34,
  },
  {
    id: "7",
    title: "Raindrop",
    icon: Postman,
    width: 38,
    height: 32,
  },
];

export const pricing = [
  {
    id: "0",
    title: "Basic",
    description: "AI chatbot, personalized recommendations",
    price: "0",
    features: [
      "An AI chatbot that can understand your queries",
      "Personalized recommendations based on your preferences",
      "Ability to explore the app and its features without any cost",
    ],
  },
  {
    id: "1",
    title: "Premium",
    description: "Advanced AI chatbot, priority support, analytics dashboard",
    price: "9.99",
    features: [
      "An advanced AI chatbot that can understand complex queries",
      "An analytics dashboard to track your conversations",
      "Priority support to solve issues quickly",
    ],
  },
  {
    id: "2",
    title: "Enterprise",
    description: "Custom AI chatbot, advanced analytics, dedicated account",
    price: null,
    features: [
      "An AI chatbot that can understand your queries",
      "Personalized recommendations based on your preferences",
      "Ability to explore the app and its features without any cost",
    ],
  },
];

export const benefits = [
  {
    id: "0",
    title: "Ask anything",
    text: "Lets users quickly find answers to their questions without having to search through multiple sources.",
    backgroundUrl: "./src/assets/benefits/card-1.svg",
    iconUrl: benefitIcon1,
    imageUrl: benefitImage2,
  },
  {
    id: "1",
    title: "Improve everyday",
    text: "The app uses natural language processing to understand user queries and provide accurate and relevant responses.",
    backgroundUrl: "./src/assets/benefits/card-2.svg",
    iconUrl: benefitIcon2,
    imageUrl: benefitImage2,
    light: true,
  },
  {
    id: "2",
    title: "Connect everywhere",
    text: "Connect with the AI chatbot from anywhere, on any device, making it more accessible and convenient.",
    backgroundUrl: "./src/assets/benefits/card-3.svg",
    iconUrl: benefitIcon3,
    imageUrl: benefitImage2,
  },
  {
    id: "3",
    title: "Fast responding",
    text: "Lets users quickly find answers to their questions without having to search through multiple sources.",
    backgroundUrl: "./src/assets/benefits/card-4.svg",
    iconUrl: benefitIcon4,
    imageUrl: benefitImage2,
    light: true,
  },
  {
    id: "4",
    title: "Ask anything",
    text: "Lets users quickly find answers to their questions without having to search through multiple sources.",
    backgroundUrl: "./src/assets/benefits/card-5.svg",
    iconUrl: benefitIcon1,
    imageUrl: benefitImage2,
  },
  {
    id: "5",
    title: "Improve everyday",
    text: "The app uses natural language processing to understand user queries and provide accurate and relevant responses.",
    backgroundUrl: "./src/assets/benefits/card-6.svg",
    iconUrl: benefitIcon2,
    imageUrl: benefitImage2,
  },
];

export const project=[
  {
    title: "Menapak Indonesia",
    text: "Menapak Indonesia is a web-based information system used to display news, articles, work programs, work areas, book lending, and activity documentation",
    imageUrl: menapak,
    made:[Laravel],
    view:"View App",
    date: "May 2024",
    url: "https://menapak.org/",
  },
  {
    title: "Jemparingan Score",
    made:[React, Vite, Tailwind],
    text: "Jemparingan Score is a web-based scoring system for Jemparingan or archery, following the national Mataraman Jemparingan rules",
    imageUrl: jemparingan,
    view:"View App",
    date: "Juni 2024",
    url: "https://jemparinganpakualaman.id/",
  },
  {
    title: "UKM IK",
    made:[React, Vite, Tailwind],
    text: "IK Management Organization is a web-based system that helps organizations manage new members, work programs, and finances.",
    imageUrl: UKM,
    view:"Github",
    date: "Juni 2024",
    url: "https://github.com/UKM-IK",
  },
  {
    title: "Blue Action",
    made:[React, Vite, Tailwind, Express],
    text: "Blue Action is a web-based information system that features news, education, and ways to address waste problems in general",
    imageUrl: blue,
    view:"Github",
    date: "December 2023",
    url: "https://github.com/SufardiMadoa/BlueAction_FE",
  },
]

export const socials = [
  {
    id: "0",
    title: "Discord",
    iconUrl: discordBlack,
    url: "#",
  },
  {
    id: "1",
    title: "Twitter",
    iconUrl: twitter,
    url: "#",
  },
  {
    id: "2",
    title: "Instagram",
    iconUrl: instagram,
    url: "#",
  },
  {
    id: "3",
    title: "Telegram",
    iconUrl: telegram,
    url: "#",
  },
  {
    id: "4",
    title: "Facebook",
    iconUrl: facebook,
    url: "#",
  },

];
