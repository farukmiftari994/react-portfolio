import travelbuddy from "../assets/projects/travelbuddy.jpg";
import soccer from "../assets/projects/soccer.jpg";
import movies from "../assets/projects/movies.png";

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
    year: "May 2019 - Aug 2021",
    role: "Math Teacher",
    organization: `High School - "Marija Kiri Skllodovksa"`,
    location: "Skopje, North Macedonia",
  },
  {
    year: "Oct 2017 - Jan 2019",
    role: "Sales Assistant",
    role2: "Warehouse Assistant",
    organization: `LC WAIKIKI`,
    location: "Skopje, North Macedonia",
  },
];

export const PROJECTS = [
  {
    title: "Travel Buddy App",
    image: travelbuddy,
    description: `Travel Buddy is a social networking platform designed for travelers seeking companionship on their journeys. Built with Next.js, this innovative mobile application allows users to create personalized accounts and connect with like-minded individuals. By matching profiles based on shared travel interests, preferences, and destinations, Travel Buddy makes it easy for users to find travel partners who are a perfect fit.`,
    githubRepo: "https://github.com/farukmiftari994/travelbuddy-app",
    technologies: ["HTML", "CSS", "Next.js", "GraphQL", "MongoDB"],
  },
  {
    title: "Soccer World",
    image: soccer,
    description: `This project is a web application built with the MERN stack (MongoDB, Express.js, React, Node.js) focused on creating and managing soccer player cards. The application allows an admin to create unique player cards, which include details like the player's name, position, team, and statistics.
      Users can browse and select cards to add to their personal collection. However, each player card can only be owned by one user at a time. Once a user claims a card, it becomes unavailable to others. This ensures a unique and exclusive collection for each user.
      The system maintains the integrity and uniqueness of the cards, providing a competitive and engaging experience for soccer enthusiasts to collect and showcase their favorite players.`,
    githubRepo: "https://github.com/farukmiftari994/Soccer_World_Project_MERN",
    technologies: ["HTML", "CSS", "React", "Node.js", "MongoDB", "Express.js"],
  },

  {
    title: "Movie World",
    image: movies,
    description: `The "Movie World" - project is website made with React, Bootstrap, Firebase, and a movie API. Users can sign up and explore more features. They can easily check out the latest movies and popular ones too, thanks to the movie API. When users sign in, they can make their own list of favourite movies. They can add or remove movies whenever they want. And with Firebase, user logins are safe, so each person's favorite movie list stays private.`,
    githubRepo: "https://github.com/farukmiftari994/Movie_Project",
    technologies: ["HTML", "CSS", "React", "Bootstrap", "Firebase"],
  },
];

export const CONTACT = {
  address: "Johannisthaler Chaussee 372",
  phoneNo: "+4917665812691",
  email: "farukmiftari@outlook.com",
  gmail: "farukmiftari994@gmail.com",
};
