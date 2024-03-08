import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  tesla,
  shopify,
  ieee,
  carrent,
  jobit,
  tripguide,
  threejs,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "React Native Developer",
    icon: mobile,
  },
  {
    title: "Graphic Designer",
    icon: backend,
  },
  {
    title: "Content Creator",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Graphic Designer",
    company_name: "IEEE SB NTIDGP",
    icon: ieee,
    iconBg: "#383E56",
    date: "March 2022 - PRESENT",
    points: [
      "Proven ability to manipulate images, create illustrations, and design layouts with precision and creativity.",
      "Skilled in articulating design concepts and rationale, and receptive to feedback to ensure alignment with project objectives and client expectations.",
      "Continuously strive for excellence by staying updated with the latest design trends, techniques, and tools. ",
    ],
  },
  {
    title: "React Native Developer",
    company_name: "IEEE SB NTIDGP",
    icon: ieee,
    iconBg: "#E6DEDD",
    date: "March 2022 - PRESENT",
    points: [
      "Proficiency in modern frontend development technologies such as HTML5, CSS3, JavaScript, and frameworks like React.js.",
      ": Strong team player with excellent communication skills, capable of effectively collaborating with designers.",
      "Implementing responsive design.",
      "Committed to ongoing professional development and staying abreast of industry trends and emerging technologies in frontend development.",
    ],
  },
  {
    title: "Senior Executive Member",
    company_name: "Shopify",
    icon: ieee,
    iconBg: "#383E56",
    date: "March 2022 - PRESENT",
    points: [
      "Demonstrated track record of providing strategic leadership and direction to drive organizational growth and success.",
      "Strong proficiency in making data-driven decisions and prioritizing initiatives to maximize business impact and deliver measurable results.",
      "Proven ability to cultivate trust, influence, and collaboration at all levels of the organization, fostering a culture of teamwork, accountability, and continuous improvement.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Portfolio",
    description:
      "Utilized React JS framework to create a dynamic and responsive web application. Integrated Three.js library to introduce immersive 3D graphics, animations, and interactions, showcasing a dedication to mastering emerging technologies.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/",
  },
  {
    name: "Banking System",
    description:
      "This C++ program is a basic banking system simulation. Users can register, log in, check balances, deposit, withdraw, transfer funds, and change passwords for their accounts.",
    tags: [
      {
        name: "C++",
        color: "blue-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/DaRkLord0350/Banking_System",
  },
  {
    name: "Hotel Reservation",
    description:
      "This C++ program manages a hotel's room allocation, customer information, and billing. Users can check room availability, allocate rooms, cancel reservations, and view customer details",
    tags: [
      {
        name: "C++",
        color: "blue-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/DaRkLord0350/Hotel-Reservation",
  },
];

export { services, technologies, experiences, testimonials, projects };
