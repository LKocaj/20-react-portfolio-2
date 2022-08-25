import React from 'react';
import Cards from '../Cards'

// my work
const projects = [
  {
    id: 1,
    name: "Run Buddy",
    description: "",
    subtitle: "",
    deployedLink: "",
    repoLink: "",
    image: "./public/assets/run-buddy.jpg"
  },
  {
    id: 2,
    name: "Code Refactor",
    description: "",
    subtitle: "",
    deployedLink: "",
    repoLink: "",
    image: ""
  },
  {
    id: 3,
    name: "Professional Porfolio (HTML)",
    description: "",
    subtitle: "",
    deployedLink: "",
    repoLink: "",
    image: ""
  },
  {
    id: 4,
    name: "Javascript Password Generator",
    description: "",
    subtitle: "",
    deployedLink: "",
    repoLink: "",
    image: ""
  },
  {
    id: 5,
    name: "Robot Gladiators",
    description: "",
    subtitle: "",
    deployedLink: "",
    repoLink: "",
    image: ""
  },
  {
    id: 6,
    name: "Web API Quiz",
    description: "",
    subtitle: "",
    deployedLink: "",
    repoLink: "",
    image: ""
  },
  {
    id: 7,
    name: "Taskinator",
    description: "",
    subtitle: "",
    deployedLink: "",
    repoLink: "",
    image: ""
  },
  {
    id: 8,
    name: "Taskmaster Pro",
    description: "",
    subtitle: "",
    deployedLink: "https://lkocaj.github.io/05-taskmaster-pro/",
    repoLink: "https://github.com/LKocaj/05-taskmaster-pro",
    image: ""
  },
  {
    id: 9,
    name: "Work day scheduler",
    description: "",
    subtitle: "",
    deployedLink: "",
    repoLink: "",
    image: ""
  },
  {
    id: 10,
    name: "Git it Done!",
    description: "",
    subtitle: "",
    deployedLink: "https://lkocaj.github.io/06-git-it-done/",
    repoLink: "https://github.com/LKocaj/06-git-it-done",
    image: ""
  },
  {
    id: 11,
    name: "Sunny Side Up",
    description: "Interactive full-stack group project 3",
    subtitle: "",
    deployedLink: "https://philemonkirlles.github.io/SunnySide-Up/",
    repoLink: "https://github.com/PhilemonKirlles/SunnySide-Up",
    image: ""
  },
  {
    id: 12,
    name: "Portfolio Generator",
    description: "",
    subtitle: "",
    deployedLink: "",
    repoLink: "https://github.com/LKocaj/09-portfolio-generator",
    image: ""
  },
  {
    id: 13,
    name: "Professional Readme Generator",
    description: "",
    subtitle: "",
    deployedLink: "",
    repoLink: "https://github.com/LKocaj/09-readme-generator",
    image: ""
  },
  {
    id: 14,
    name: "Jest another RPG",
    description: "",
    subtitle: "",
    deployedLink: "",
    repoLink: "https://github.com/LKocaj/10-jest-another-RPG",
    image: ""
  },
  {
    id: 15,
    name: "Team Profile Generator",
    description: "",
    subtitle: "",
    deployedLink: "",
    repoLink: "https://github.com/LKocaj/10-team-profile-generator",
    image: ""
  },
  {
    id: 16,
    name: "Express.js Note Taker",
    description: "",
    subtitle: "",
    deployedLink: "",
    repoLink: "https://github.com/LKocaj/11-note-Taker",
    image: ""
  },
  {
    id: 17,
    name: "U Develop It",
    description: "",
    subtitle: "",
    deployedLink: "",
    repoLink: "https://github.com/LKocaj/12-u-develop-it",
    image: ""
  },
  {
    id: 18,
    name: "SQL Employee Tracker",
    description: "",
    subtitle: "",
    deployedLink: "",
    repoLink: "https://github.com/LKocaj/12-employee-tracker",
    image: ""
  },
  {
    id: 19,
    name: "Just Tech News",
    description: "",
    subtitle: "",
    deployedLink: "",
    repoLink: "https://github.com/LKocaj/13-just-tech-news",
    image: ""
  },
  {
    id: 20,
    name: "E-Commerce backend Employee Tracker",
    description: "",
    subtitle: "",
    deployedLink: "",
    repoLink: "https://github.com/LKocaj/13-ORM-ecommerce-backend",
    image: ""
  },
  {
    id: 21,
    name: "MVC-Tech Blog",
    description: "",
    subtitle: "",
    deployedLink: "",
    repoLink: "https://github.com/LKocaj/14-MVC-tech-blog",
    image: ""
  },
  {
    id: 22,
    name: "Graphics Card Finder",
    description: "Interactive full-stack group project 2",
    subtitle: "",
    deployedLink: "",
    repoLink: "",
    image: ""
  },
  {
    id: 23,
    name: "Regex Tutorial",
    description: "",
    subtitle: "",
    deployedLink: "",
    repoLink: "https://github.com/LKocaj/17-regex-tutorial",
    image: ""
  },
  {
    id: 24,
    name: "Pizza Hunt",
    description: "",
    subtitle: "",
    deployedLink: "",
    repoLink: "https://github.com/LKocaj/18-pizza-hunt",
    image: ""
  },
  {
    id: 25,
    name: "Social Media Network API",
    description: "",
    subtitle: "",
    deployedLink: "",
    repoLink: "https://github.com/LKocaj/18-Social-Network-API",
    image: ""
  },
  {
    id: 26,
    name: "Food Festival",
    description: "",
    subtitle: "",
    deployedLink: "",
    repoLink: "",
    image: ""
  },
  {
    id: 27,
    name: "Budget Tracker",
    description: "",
    subtitle: "",
    deployedLink: "https://budget-tracker-pwa-lk.herokuapp.com/",
    repoLink: "https://github.com/LKocaj/19-Budget-Tracker",
    image: ""
  },
  {
    id: 28,
    name: "Photo Port",
    description: "",
    subtitle: "",
    deployedLink: "",
    repoLink: "https://github.com/LKocaj/20-photo-port",
    image: ""
  },
  {
    id: 29,
    name: "React Portfolio",
    description: "",
    subtitle: "",
    deployedLink: "http://localhost:3000/20-react-portfolio-2#about",
    repoLink: "https://github.com/LKocaj/20-react-portfolio-2",
    image: ""
  },
  {
    id: 30,
    name: "Deep Thoughts",
    description: "",
    subtitle: "",
    deployedLink: "",
    repoLink: "https://github.com/LKocaj/21-deep-thoughts",
    image: ""
  },
  {
    id: 31,
    name: "MERN Book Search Engine",
    description: "",
    subtitle: "",
    deployedLink: "",
    repoLink: "https://github.com/LKocaj/21-MERN-book-search",
    image: ""
  },
  {
    id: 32,
    name: "We Travel Too",
    description: "Interactive full-stack group project 3",
    subtitle: "",
    deployedLink: "",
    repoLink: "",
    image: ""
  },
];

export default function Portfolio() {
  return (
    <div className = "w-50 mx-auto">
      <h1 className ="pb-4 pt-2">Portfolio</h1>
<Cards projects={projects} />
    </div>
  );
}