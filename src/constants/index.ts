import travelbuddy from "../assets/projects/travelbuddy.jpg";
import soccer from "../assets/projects/soccer.jpg";
import movies from "../assets/projects/movies.png";

export const HERO_CONTENT_EN = ` I'm a recent graduate from Code Academy Berlin with skills in both
front-end and back-end development. I specialize in crafting
responsive web applications and thrive on solving complex problems
with innovative technologies. Eager to contribute to collaborative
development team.`;

export const HERO_CONTENT_DE = `Ich bin ein kürzlich graduierter Absolvent der Code Academy Berlin mit Fähigkeiten sowohl im Front End als auch in der Back End Entwicklung. Ich spezialisiere mich auf die Erstellung responsiver Webanwendungen und blühe auf, wenn es darum geht, komplexe Probleme mit innovativen Technologien zu lösen. Ich freue mich darauf, zu einem kollaborativen Entwicklungsteam beizutragen.`;

export const ABOUT_TEXT_EN = `I am a dedicated and versatile Full Stack Developer with a passion
for creating efficent and user-friendly web applications. I
completed an intensive training in Full Stack Development,
covering Front-End technologies such as HTML, CSS, JavaScript, and
React, as well as Back-End technologies including Node.js,
Express.js, and databases like MongoDB. Gained hands-on experience in
building dynamic, interactive web applications through
project-based learning and real-world simulations. Acquired
knowledge of version control systems such as Git and proficiency
in scrum/AGILE framework simulating a work environment (daily
stand-ups, code reviews, group presentations).`;

export const ABOUT_TEXT_DE = `Ich bin ein engagierter und vielseitiger Full Stack Developer mit einer Leidenschaft für die Erstellung effizienter und benutzerfreundlicher Webanwendungen. Ich habe eine intensive Schulung ( Bootcamp ) im Bereich Full Stack Development erfolgreich absolviert, die Front End Technologien wie HTML, CSS, JavaScript und React sowie Back End Technologien wie Node.js, Express.js und Datenbanken wie MongoDB abdeckte. Ich habe praktische Erfahrungen im Aufbau dynamischer, interaktiver Webanwendungen durch projektbasiertes Lernen und realitätsnahe Simulationen gesammelt. Außerdem habe ich Kenntnisse in Versionskontrollsystemen wie Git erworben und bin versiert im scrum/AGILE-Framework, das ein Arbeitsumfeld simuliert (tägliche Stand-ups, Code-Reviews, Gruppenpräsentationen).`;

export const EXPERIENCES_EN = [
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

export const EXPERIENCES_DE = [
  {
    year: "Mai 2019 - Aug 2021",
    role: "Mathematiklehrer",
    organization: `Gymnasium - "Marija Kiri Skllodovska"`,
    location: "Skopje, Nordmazedonien",
  },
  {
    year: "Okt 2017 - Jan 2019",
    role: "Verkäufer",
    role2: "Lagerhausassistent",
    organization: `LC WAIKIKI`,
    location: "Skopje, Nordmazedonien",
  },
];

export const PROJECTS_EN = [
  {
    title: "Travel Buddy App ( Collaborative Project )",
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
    description: `The "Movie World" - Project is a website made with React, Bootstrap, Firebase, and a movie API. Users can sign up and explore more features. They can easily check out the latest movies and popular ones too, thanks to the movie API. When users sign in, they can make their own list of favourite movies. They can add or remove movies whenever they want. And with Firebase, user logins are safe, so each person's favorite movie list stays private.`,
    githubRepo: "https://github.com/farukmiftari994/Movie_Project",
    technologies: ["HTML", "CSS", "React", "Bootstrap", "Firebase"],
  },
];

export const PROJECTS_DE = [
  {
    title: "Travel Buddy App ( Gemeinschaftsprojekt )",
    image: travelbuddy,
    description: `Travel Buddy ist eine soziale Netzwerkplattform für Reisende, die auf der Suche nach Begleitung auf ihren Reisen sind. Diese innovative mobile Anwendung, entwickelt mit Next.js, ermöglicht es Nutzern, personalisierte Konten zu erstellen und sich mit Gleichgesinnten zu vernetzen. Durch das Abgleichen von Profilen basierend auf gemeinsamen Reiseinteressen, Vorlieben und Reisezielen macht Travel Buddy es den Nutzern leicht, passende Reisebegleiter zu finden.`,
    githubRepo: "https://github.com/farukmiftari994/travelbuddy-app",
    technologies: ["HTML", "CSS", "Next.js", "GraphQL", "MongoDB"],
  },
  {
    title: "Soccer World",
    image: soccer,
    description: `Dieses Projekt ist eine Webanwendung, die mit dem MERN-Stack (MongoDB, Express.js, React, Node.js) entwickelt wurde und sich auf die Erstellung und Verwaltung von Fußballspielerkarten konzentriert. Die Anwendung ermöglicht es einem Administrator, einzigartige Spielerkarten zu erstellen, die Details wie den Namen des Spielers, seine Position, sein Team und seine Statistiken enthalten. Nutzer können die Karten durchsuchen und auswählen, um sie zu ihrer persönlichen Sammlung hinzuzufügen. Jede Spielerkarte kann jedoch nur von einem Nutzer gleichzeitig besessen werden. Sobald ein Nutzer eine Karte beansprucht, ist sie für andere nicht mehr verfügbar. Dies stellt sicher, dass jede Sammlung einzigartig und exklusiv für jeden Nutzer bleibt. Das System wahrt die Integrität und Einzigartigkeit der Karten und bietet Fußballbegeisterten ein wettbewerbsorientiertes und spannendes Erlebnis, um ihre Lieblingsspieler zu sammeln und vorzuführen.`,
    githubRepo: "https://github.com/farukmiftari994/Soccer_World_Project_MERN",
    technologies: ["HTML", "CSS", "React", "Node.js", "MongoDB", "Express.js"],
  },

  {
    title: "Movie World",
    image: movies,
    description: `Das "Movie World" - Projekt ist eine Website, die mit React, Bootstrap, Firebase und einer Film-API entwickelt wurde. Nutzer können sich anmelden und weitere Funktionen erkunden. Dank der Film-API können sie sich ganz einfach die neuesten Filme und auch beliebte Filme ansehen. Wenn sich Nutzer anmelden, können sie ihre eigene Liste mit Lieblingsfilmen erstellen. Sie können Filme jederzeit hinzufügen oder entfernen. Mit Firebase sind die Anmeldungen der Nutzer sicher, sodass die Favoritenliste jeder Person privat bleibt.`,
    githubRepo: "https://github.com/farukmiftari994/Movie_Project",
    technologies: ["HTML", "CSS", "React", "Bootstrap", "Firebase"],
  },
];

export const CONTACT = {
  phoneNo: "+49 176 658 126 91",
  email: "farukmiftari@outlook.com",
  gmail: "farukmiftari994@gmail.com",
};
