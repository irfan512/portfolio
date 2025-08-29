// Enter all your detials in this file
// Logo images
import logogradient from "./assets/logo.svg";
import logo from "./assets/logo2.svg";
// Profile Image
import profile from "./assets/profile.jpeg";
// Tech stack images
import html from "./assets/techstack/html.png";
import css from "./assets/techstack/css.png";
import js from "./assets/techstack/js.png";
import react from "./assets/techstack/react.png";
import bootstrap from "./assets/techstack/bootstrap.png";
import vscode from "./assets/techstack/vscode.png";
import github from "./assets/techstack/github.png";
import git from "./assets/techstack/git.png";
import php from "./assets/techstack/php-logo.png";
import postman from "./assets/techstack/postman.png";
import figma from "./assets/techstack/figma.png";
import mysql from "./assets/techstack/mysql.png";
import flutter from "./assets/techstack/flutter.png";
import laravel from "./assets/techstack/laravel.png";


// Porject Images
import projectImage1 from "./assets/projects/project1.jpg";
import projectImage2 from "./assets/projects/project2.jpg";
import projectImage3 from "./assets/projects/project3.jpg";
import projectImage4 from "./assets/projects/project4.jpg";
import projectImage5 from "./assets/projects/project5.jpg";
import projectImage6 from "./assets/projects/project6.jpg";
import projectImage7 from "./assets/projects/project6.jpg";

// Logos
export const logos = {
  logogradient: logogradient,
  logo: logo,
};

// Enter your Personal Details here
export const personalDetails = {
  name: "Syed Irfan Haider",
  tagline: "Crafting digital experiences for both Mobile and Web platforms",
  img: profile,
  about: `I'm a passionate software engineer dedicated to crafting exceptional digital experiences for both mobile and web platforms. With a keen eye for detail and a commitment to excellence, I specialize in building user-friendly and high-performance applications. My journey in the world of technology has equipped me with a diverse skill set, allowing me to tackle challenges across various domains. Let's collaborate and bring your ideas to life!`,
};


// Enter your Social Media URLs here
export const socialMediaUrl = {
  linkdein: "https://www.linkedin.com/in/syed-irfan-haider-248109263",
  github: "https://github.com/irfan512",
  twitter: "https://x.com/Syedfani99",
  instagram: "https://www.instagram.com/",
};

// Enter your Work Experience here
export const workDetails = [
  {
    Position: "Flutter Developer",
    Company: `Devsinn Technologies`,
    Location: "Lahore,Pakistan",
    Type: "Full Time",
    Duration: "Sep 2020 - Sep 2022",
  },
  {
    Position: "Mobile Developer Team Lead",
    Company: `Socioon Limited`,
    Location: "Lahore,Pakistan",
    Type: "Full Time",
    Duration: "Sep 2022 - Oct 2023",
  },
  {
    Position: "Senior Flutter Developer",
    Company: `Triaxo Solutions`,
    Location: "Lahore,Pakistan",
    Type: "Full Time",
    Duration: "Oct 2023 - Nov 2024",
  },
  {
    Position: "Senior Flutter Developer",
    Company: `DyCoders `,
    Location: "Lahore,Pakistan",
    Type: "Full Time",
    Duration: "Nov 2024 - Present",
  },
];

// Enter your Education Details here
export const eduDetails = [
  {
    Position: "Flutter Developer",
    Company: "NEVTAC",
    Location: "Online",
    Type: "Full Time",
    Duration: "Sep 2020 -Mar 2021",
  },
  {
    Position: "Bachelor in Information Teachnology",
    Company: `University of Punjab`,
    Location: "Lahore",
    Type: "Full Time",
    Duration: "Sep 2019 -Sep 2023",
  },
];

// Tech Stack and Tools
export const techStackDetails = {
  html: html,
  css: css,
  js: js,
  react: react,
  php: php,
  flutter: flutter,
  bootstrap: bootstrap,
  vscode: vscode,
  postman: postman,
  mysql: mysql,
  git: git,
  github: github,
  figma: figma,
  laravel: laravel,
};

// Enter your Project Details here
export const projectDetails = [
  {
    title: "INGAGE GG",
    image: projectImage1,
    description: `An esports tournament management platform designed for games like Pokémon Unite. The app supports single and double elimination brackets, team creation, and seamless payment handling for tournament entries.`,
    techstack: "Flutter, BLoC, Firebase, REST APIs, Push Notification, Firebase Chatting, Stripe API",
    previewLink: "https://play.google.com/store/apps/details?id=com.ingage.gg&pcampaignid=web_share",
    githubLink: "https://github.com",
  },
  {
    title: "BuyerBoard",
    image: projectImage2,
    description: `A real estate collaboration platform for U.S. state buyers. The app allows contractors to list and manage buyers looking to rent or purchase homes. Contractors can also connect with other contractors to share buyer profiles and close deals faster.`,
    techstack: "Flutter, BLoC, Firebase, REST APIs, WebSockets, OneSignal",
    previewLink: "https://play.google.com/store/apps/details?id=com.buyerboard.buyer_board&pcampaignid=web_share",
    githubLink: "https://github.com",
  },
  {
    title: "Raabta Social",
    image: projectImage3,
    description: `A social media platform for PTI (Pakistan Tehreek-e-Insaf), enabling supporters to stay updated with news, media, and campaigns. The app includes a feed for posts, video content, and engagement tools tailored for political outreach.`,
    techstack: "Flutter, Provider, Firebase, REST APIs, Push Notification, WebSockets, Stripe API",
    previewLink: "https://apps.apple.com/pk/app/raabta-social/id6444019910",
    githubLink: "https://github.com",
  },
  {
    title: "Gocare",
    image: projectImage4,
    description: `A telemedicine app enabling patients to consult with doctors via chat and video calls. The platform allows users to connect with healthcare professionals, schedule appointments, and receive virtual care.`,
    techstack: "Flutter, Provider, Firebase, Agora, Flutterwave",
    previewLink: "https://play.google.com/store/apps/details?id=com.gocare.gocare&pcampaignid=web_share",
    githubLink: "https://github.com",
  },
  {
    title: "RevPay",
    image: projectImage5,
    description: `RevPay-Katsina is a government-backed mobile application that simplifies and digitizes revenue collection from commercial vehicle operators in Katsina State, Nigeria. It offers a secure, user-friendly platform for managing payments, improving transparency and operational efficiency.`,
    techstack: "Flutter, RiverPood, Firebase, REST APIs, Push Notification, Bluetooth Connection",
    previewLink: "https://play.google.com/store/apps/details?id=ng.revpay.app&pcampaignid=web_share",
    githubLink: "https://github.com",
  },
  {
    title: "LinkOn",
    image: projectImage6,
    description: `A social media app connects users, enabling them to share updates, photos, and messages. It features a personalized feed, profile customization, integrated messaging for private and group chats, and tools for content discovery. Users can engage through likes, comments, and shares, with privacy controls ensuring safety. The app supports multimedia uploads, offers real-time notifications, and provides analytics for content creators.`,
    techstack: "Flutter, Provider, Firebase, REST APIs, Push Notification, WebSockets, Stripe API",
    previewLink: "https://apps.apple.com/pk/app/link-on/id6479557341",
    githubLink: "https://github.com",
  },
  {
    title: "B2BNet",
    image: projectImage7,
    description: `A complete esports solution that combines tournament
management with live streaming features. Users can create
teams, manage channels, host or join tournaments, and
stream matches in real-time.`,
    techstack: "Flutter, Bloc, Firebase, REST APIs, Push Notification",
    previewLink: "https://apps.apple.com/pk/app/b2bnet/id6741923823",
    githubLink: "https://github.com",
  },

  {
    title: "Bracktix",
    image: projectImage7,
    description: `A complete esports solution that combines tournament
management with live streaming features. Users can create
teams, manage channels, host or join tournaments, and
stream matches in real-time.`,
    techstack: "Flutter, Bloc, Firebase, REST APIs, Push Notification",
    previewLink: "https://play.google.com/store/apps/details?id=com.sadacode.bracktix&pcampaignid=web_share",
    githubLink: "https://github.com",
  },
];

// Enter your Contact Details here
export const contactDetails = {
  email: "irfanhaider@gmail.com",
  phone: "+92 3062865703",
};
