import type {
  TNavLink,
  TService,
  TTechnology,
  TCertification,
  TTestimonial,
  TProject,
  TNGOWork,
} from "../types";

import {
  mobile,
  backend,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  nodejs,
  git,
  cal,
  stockai,
  water,
  shoppers,
  threejs,
} from "../assets";

export const navLinks: TNavLink[] = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "resume",
    title: "Resume",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services: TService[] = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "Data Analyst",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Problem Solver",
    icon: threejs,
  },
];

const technologies: TTechnology[] = [
  { name: "HTML 5", icon: html },
  { name: "CSS 3", icon: css },
  { name: "JavaScript", icon: javascript },
  { name: "TypeScript", icon: typescript },
  { name: "React JS", icon: reactjs },
  { name: "Node JS", icon: nodejs },
  { name: "Python", icon: nodejs },
  { name: "Three JS", icon: threejs },
  { name: "git", icon: git },
];

const certifications: TCertification[] = [
  {
    title: "Cloud Computing",
    provider: "IIT Kharagpur | INPTELI",
    date: "October 2025",
    link: "https://www.linkedin.com/posts/mayankyadav02_completed-nptel-cloud-computing-certification-activity-7398654807953203200-sigA?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEf-4QoBnuEanxjkdyXf6cBeSo7-5pC9PAY",
    points: [
      "Understood fundamentals of cloud models: IaaS, PaaS, SaaS, and deployment types.",
      "Explored virtualization, distributed storage, and cloud security practices.",
      "Gained hands-on exposure to platforms like AWS and GCP through assignments and case studies.",
    ],
  },
  {
    title: "Java Programming",
    provider: "IamNeo",
    date: "January 2025",
    link: "https://www.linkedin.com/posts/mayankyadav02_java-course-completion-activity-7354187163225219072-ZN8r?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEf-4QoBnuEanxjkdyXf6cBeSo7-5pC9PAY",
    points: [
      "Built strong foundations in object-oriented programming concepts and Java syntax.",
      "Worked on exception handling, multithreading, file I/O, and JDBC connectivity.",
      "Developed real-world Java applications using core and advanced Java features.",
    ],
  },
  {
    title: "SmartEd Full-Stack Development",
    provider: "INSDC",
    date: "October 2024",
    link: "https://www.linkedin.com/posts/mayankyadav02_netflix-clone-full-stack-development-bootcamp-activity-7356283218410524672-Dyhs?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEf-4QoBnuEanxjkdyXf6cBeSo7-5pC9PAY",
    points: [
      "Completed a comprehensive full-stack development program covering frontend and backend technologies.",
      "Built web applications using modern frameworks and RESTful API design principles.",
      "Gained practical experience deploying and managing web applications end-to-end.",
    ],
  },
  {
    title: "Object Oriented Programming",
    provider: "IamNeo",
    date: "February 2024",
    link: "https://www.linkedin.com/posts/mayankyadav02_lpu-cse-programming-activity-7319813373905227776-Gwz6?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEf-4QoBnuEanxjkdyXf6cBeSo7-5pC9PAY",
    points: [
      "Mastered OOP concepts including encapsulation, inheritance, polymorphism, and abstraction.",
      "Implemented design patterns and best practices for scalable, maintainable code.",
      "Applied OOP principles to solve complex real-world software design problems.",
    ],
  },
  {
    title: "C++ Programming & Data Structures",
    provider: "Lovely Professional University",
    date: "June 2025",
    link: "https://files.lpu.in/umsweb/skilldevcourse/SkillDevelopmentCertificates/12301552_843_20_08_2025.pdf?_gl=1*wkhtye*_gcl_au*MTE2NTg4MzY3NC4xNzczNzc0MjAz",
    points: [
      "Gained hands-on experience writing efficient C++ programs focusing on modular coding.",
      "Implemented core Data Structures including linked lists, stacks, queues, trees, and graphs.",
      "Strengthened algorithmic thinking by solving 50+ challenges on time complexity, recursion, sorting, and searching.",
      "Practiced advanced algorithms including binary search variations, two-pointer techniques, and graph traversal (BFS & DFS).",
    ],
  },
];

const testimonials: TTestimonial[] = [];

const projects: TProject[] = [
  {
    name: "Stock Chat AI – Real-Time Stock Analysis",
    description:
      "Intelligent web platform for informed stock decisions using real-time market insights, 30-day historical trends, and AI-assisted recommendations. Integrates Alpha Vantage, Finnhub, and MarketStack APIs with WebSocket streaming and Chart.js visualizations.",
    tags: [
      { name: "JavaScript", color: "blue-text-gradient" },
      { name: "Chart.js", color: "green-text-gradient" },
      { name: "WebSocket", color: "pink-text-gradient" },
      { name: "REST APIs", color: "yellow-text-gradient" },
    ],
    image: stockai,
    sourceCodeLink: "https://github.com/mayank34757/CHATBOT_STOCK",
  },
  {
    name: "Health Behavior Analysis Dashboard",
    description:
      "Interactive Power BI dashboard analyzing key public health indicators across the U.S. population. Built dynamic visualizations for Obesity, Physical Activity, and Nutrition using 93.5K+ survey records, revealing 40–60% variation in health indicators.",
    tags: [
      { name: "Power BI", color: "blue-text-gradient" },
      { name: "DAX", color: "green-text-gradient" },
      { name: "Data Cleaning", color: "pink-text-gradient" },
      { name: "Data Visualization", color: "yellow-text-gradient" },
    ],
    image: cal,
    sourceCodeLink: "https://github.com/mayank34757/HEALTH-DASHBOARD",
  },
  {
    name: "Water Wastage Plan Website",
    description:
      "A web platform dedicated to raising awareness about water conservation and helping users plan water usage efficiently. Features interactive statistics, conservation tips, and data-driven insights to reduce water wastage at household and community levels.",
    tags: [
      { name: "HTML/CSS", color: "blue-text-gradient" },
      { name: "JavaScript", color: "green-text-gradient" },
      { name: "Data Charts", color: "pink-text-gradient" },
      { name: "Conservation", color: "yellow-text-gradient" },
    ],
    image: water,
    sourceCodeLink: "https://github.com/mayank34757/water-wastage-plan-website",
  },
  {
    name: "Online Shoppers Intention Analysis",
    description:
      "Machine learning model to analyze and predict online shoppers' purchasing intentions using behavioral and session data. Leveraged classification algorithms with feature engineering to achieve high prediction accuracy on e-commerce conversion rates.",
    tags: [
      { name: "Python", color: "blue-text-gradient" },
      { name: "Scikit-Learn", color: "green-text-gradient" },
      { name: "Pandas", color: "pink-text-gradient" },
      { name: "ML Classification", color: "yellow-text-gradient" },
    ],
    image: shoppers,
    sourceCodeLink: "https://github.com/mayank34757/analyze-online-shoppers-purchasing-intention",
  },
];

export const ngoWork: TNGOWork = {
  orgName: "Prayas Juvenile Aid Centre Society (JCS)",
  role: "Volunteer Educator & Social Worker",
  period: "June 15, 2024 – July 15, 2024",
  location: "Jahangir Puri, Delhi – 110033",
  description:
    "Completed a 30-day social internship at Prayas JCS — one of Delhi's leading NGOs for underprivileged children — as part of the B.Tech CSE curriculum at Lovely Professional University. Worked on content formulation, data handling, and social event reporting while actively teaching and mentoring children.",
  points: [
    "Taught Mathematics, Science, and Social Science to underprivileged children aged 6–14.",
    "Designed question papers and customised learning activities to enhance children's engagement.",
    "Sorted and distributed books and stationery to children enrolled in the centre.",
    "Created nutritious diet plans and participated in awareness events with teachers and interns.",
    "Involved children in creative activities aligned with their individual interests and abilities.",
    "Made motivational posters with fellow educators for children's wellbeing and awareness.",
    "Delivered a farewell assembly session on 15th July, motivating children to speak for themselves and pursue their dreams.",
  ],
};

// Exporting constants
export { services, technologies, certifications, testimonials, projects };
