import project1 from "../assets/projects/project-1.jpg";
import project2 from "../assets/projects/project-2.jpg";
import project3 from "../assets/projects/project-3.jpg";
import project4 from "../assets/projects/project-4.jpg";

export const HERO_CONTENT = ` I'm a recent graduate from Code Academy Berlin with skills in both
front-end and back-end development. I specialize in crafting
responsive web applications and thrive on solving complex problems
with innovative technologies. Eager to contribute to collaborative
development team.`;

export const ABOUT_TEXT = `I am a dedicated and versatile Full Stack Developer with a passion
for creating efficent and user-friendly web applications. I
completed an intensive training in Full Stack Development,
covering Front-End technologies such as HTML, CSS, JavaScript, and
React, as well as Back-End technologies including Node.js,
Express, and databases like MongoDB. Gained hands-on experience in
building dynamic, interactive web applications through
project-based learning and real-world simulations. Acquired
knowledge of version control systems such as Git and proficiency
in scrum/AGILE framework simulating a work environment (daily
stand-ups, code reviews, group presentations).`;

export const EXPERIENCES = [
  {
    year: "2023 - Present",
    role: "Senior Full Stack Developer",
    company: "Google Inc.",
    description: `Led a team in developing and maintaining web applications using JavaScript, React.js, and Node.js. Implemented RESTful APIs and integrated with MongoDB databases. Collaborated with stakeholders to define project requirements and timelines.`,
    technologies: ["Javascript", "React.js", "Next.js", "mongoDB"],
  },
  {
    year: "2022 - 2023",
    role: "Frontend Developer",
    company: "Adobe",
    description: `Designed and developed user interfaces for web applications using Next.js and React. Worked closely with backend developers to integrate frontend components with Node.js APIs. Implemented responsive designs and optimized frontend performance.`,
    technologies: ["HTML", "CSS", "Vue.js", "mySQL"],
  },
  {
    year: "2021 - 2022",
    role: "Full Stack Developer",
    company: "Facebook",
    description: `Developed and maintained web applications using JavaScript, React.js, and Node.js. Designed and implemented RESTful APIs for data communication. Collaborated with cross-functional teams to deliver high-quality software products on schedule.`,
    technologies: ["Python", "Svelte", "Three.js", "Postgres"],
  },
  {
    year: "2020 - 2021",
    role: "Software Engineer",
    company: "Paypal",
    description: `Contributed to the development of web applications using JavaScript, React.js, and Node.js. Managed databases and implemented data storage solutions using MongoDB. Worked closely with product managers to prioritize features and enhancements.`,
    technologies: ["Ruby", "Rails", "PHP", "Sqlite"],
  },
];

export const PROJECTS = [
  {
    title: "E-Commerce Website",
    image: project1,
    description:
      "This project is a web application built with the MERN stack (MongoDB, Express.js, React, Node.js) focused on creating and managing soccer player cards. The application allows an admin to create unique player cards, which include details like the player's name, position, team, and statistics.

      Users can browse and select cards to add to their personal collection. However, each player card can only be owned by one user at a time. Once a user claims a card, it becomes unavailable to others. This ensures a unique and exclusive collection for each user.
      
      The system maintains the integrity and uniqueness of the cards, providing a competitive and engaging experience for soccer enthusiasts to collect and showcase their favorite players.",
    technologies: ["HTML", "CSS", "React", "Node.js", "MongoDB"],
  },
  {
    title: "Task Management App",
    image: project2,
    description:
      "An application for managing tasks and projects, with features such as task creation, assignment, and progress tracking.",
    technologies: ["HTML", "CSS", "Angular", "Firebase"],
  },
  {
    title: "Portfolio Website",
    image: project3,
    description:
      "A personal portfolio website showcasing projects, skills, and contact information.",
    technologies: ["HTML", "CSS", "React", "Bootstrap"],
  },
  {
    title: "Blogging Platform",
    image: project4,
    description:
      "A platform for creating and publishing blog posts, with features like rich text editing, commenting, and user profiles.",
    technologies: ["HTML", "CSS", "Vue.js", "Express", "mySQL"],
  },
];

export const CONTACT ={address: "JOhannisthaler Chaussee 372",
  phoneNo: "+4917665812691",
  email: "farukmiftari@outlook.com",
};
