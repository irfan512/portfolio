// ---------------------------------------------------------------------------
// All site content lives here. Components only render what this file exports,
// so copy and project data can be edited without touching layout code.
// ---------------------------------------------------------------------------

import portrait from "./assets/profile-640.jpg";
import imgFsms from "./assets/projects/fsms.jpg";
import imgCallingAllKids from "./assets/projects/calling-all-kids.jpg";
import imgTegal from "./assets/projects/tegal.jpg";
import imgIngage from "./assets/projects/project1.png";
import imgBuyerBoard from "./assets/projects/project2.png";
import imgRaabta from "./assets/projects/project3.png";
import imgGocare from "./assets/projects/project4.png";
import imgRevPay from "./assets/projects/project5.png";
import imgLinkOn from "./assets/projects/project6.png";
import imgB2BNet from "./assets/projects/project7.png";
import imgBracktix from "./assets/projects/project8.png";

export const profile = {
  name: "Irfan Haider",
  role: "Senior Software Developer",
  discipline: "Mobile, Web & Applied AI",
  location: "Lahore, Pakistan",
  experience: "5+ years of experience",
  portrait,
  siteUrl: "https://irfan512.github.io/portfolio/",
};

export const contactDetails = {
  email: "irfannaqvi216@gmail.com",
  // Already published on the existing site, so it is kept. Email is primary.
  phone: "+92 306 286 5703",
  phoneHref: "+923062865703",
  location: "Lahore, Pakistan",
};

export const socialLinks = {
  github: "https://github.com/irfan512",
  linkedin: "https://www.linkedin.com/in/syed-irfan-haider-248109263",
};

export const navLinks = [
  { id: "work", label: "Work" },
  { id: "services", label: "Services" },
  { id: "about", label: "About" },
  { id: "contact", label: "Contact" },
];

export const hero = {
  eyebrow: "Senior Software Developer",
  headline: "I build mobile apps, web platforms, and AI-powered software.",
  body: "I help businesses turn product ideas into reliable software, from cross-platform mobile apps and web dashboards to Python-based AI integrations.",
  primaryCta: { label: "View selected work", href: "#work" },
  secondaryCta: { label: "Discuss a project", href: "#contact" },
  support: ["5+ years of experience", "Lahore, Pakistan"],
};

// Four featured projects. `link` is omitted where there is no public destination.
export const featuredProjects = [
  {
    name: "FSMS",
    category: "Enterprise mobile and web platform",
    image: imgFsms,
    alt: "FSMS dashboard on a laptop beside two mobile screens showing maintenance tasks",
    summary:
      "Facility teams handle maintenance complaints and tasks across many sites. FSMS gives field staff a Flutter mobile app and coordinators a web admin platform, with real-time dashboards and task tracking in one system.",
    contribution:
      "I lead Flutter development of the mobile app and built the web admin platform. I also designed the AI layer that gives each complaint or task its own chat agent, where a language model supports routing, escalation and resolution while people stay in control of the outcome.",
    tech: ["Flutter", "Web admin platform", "LLM integration", "Real-time dashboards"],
  },
  {
    name: "Calling All Kids",
    category: "Consumer mobile app",
    image: imgCallingAllKids,
    alt: "Calling All Kids app screens showing animated characters and a voice call interface",
    summary:
      "A parenting app where children hold spoken conversations with animated characters instead of tapping through a menu.",
    contribution:
      "I built the Flutter application and integrated the speech recognition and natural-language layer that turns what a child says into a character response, along with the audio handling and app flows around it.",
    tech: ["Flutter", "Speech recognition", "Natural-language features", "Mobile audio"],
    link: {
      href: "https://play.google.com/store/apps/details?id=com.callingAllKids.cak&hl=en",
      label: "View on Google Play",
    },
  },
  {
    name: "INGAGE GG",
    category: "E-sports platform",
    image: imgIngage,
    alt: "INGAGE GG app screens showing tournament brackets and player profiles",
    summary:
      "An e-sports platform for running tournaments: team creation, elimination brackets, a prize-pool wallet and player career profiles.",
    contribution:
      "I led Flutter development of the mobile client and implemented the live match tracking and notification features against WebSocket and Firebase services, working as part of the wider platform team.",
    tech: ["Flutter", "BLoC", "Firebase", "WebSockets", "Stripe"],
    link: {
      href: "https://play.google.com/store/apps/details?id=com.ingage.gg&pcampaignid=web_share",
      label: "View on Google Play",
    },
  },
  {
    name: "goCare",
    category: "Telemedicine app",
    image: imgGocare,
    alt: "goCare app screens showing doctor listings and a consultation view",
    summary:
      "A telemedicine app that connects patients with doctors for online consultations rather than a wait at the clinic.",
    contribution:
      "I built the Flutter app covering appointments, chat and the consultation flow, and integrated real-time voice and video alongside in-app payments.",
    tech: ["Flutter", "Firebase", "Agora", "Flutterwave"],
    link: {
      href: "https://play.google.com/store/apps/details?id=com.gocare.gocare&pcampaignid=web_share",
      label: "View on Google Play",
    },
  },
];

export const moreProjects = [
  {
    name: "Raabta Social",
    category: "Social networking app",
    image: imgRaabta,
    alt: "Raabta Social app screens showing a social feed",
    line: "The official social networking app for PTI, a political party in Pakistan. I worked on the app features and integrated real-time voice and video with Agora and in-app payments with Flutterwave.",
    link: { href: "https://apps.apple.com/pk/app/raabta-social/id6444019910", label: "App Store" },
  },
  {
    name: "Tegal",
    category: "Matchmaking app",
    image: imgTegal,
    alt: "Tegal app screens showing profiles and matching",
    line: "A cross-cultural matchmaking product connecting people from different backgrounds. Flutter application work on profiles, matching and messaging.",
  },
  {
    name: "BuyerBoard",
    category: "Real estate tool",
    image: imgBuyerBoard,
    alt: "BuyerBoard app screens showing property buyer listings",
    line: "Contractors in the United States list and manage buyers looking to rent or purchase homes, and share buyer profiles with other contractors.",
    link: {
      href: "https://play.google.com/store/apps/details?id=com.buyerboard.buyer_board&pcampaignid=web_share",
      label: "Google Play",
    },
  },
  {
    name: "RevPay",
    category: "Payments app",
    image: imgRevPay,
    alt: "RevPay app screens showing payment collection",
    line: "A government-backed app for Katsina State, Nigeria, that handles revenue collection from commercial vehicle operators, including Bluetooth receipt printing.",
    link: {
      href: "https://play.google.com/store/apps/details?id=ng.revpay.app&pcampaignid=web_share",
      label: "Google Play",
    },
  },
  {
    name: "B2BNet",
    category: "Business networking app",
    image: imgB2BNet,
    alt: "B2BNet app screens showing a business directory",
    line: "A business directory where companies and professionals connect, manage events and keep communication in one place.",
    link: { href: "https://apps.apple.com/pk/app/b2bnet/id6741923823", label: "App Store" },
  },
  {
    name: "LinkOn",
    category: "Social app",
    image: imgLinkOn,
    alt: "LinkOn app screens showing a feed and profile",
    line: "A social app with a personalised feed, profile customisation, messaging and privacy controls.",
    link: { href: "https://apps.apple.com/pk/app/link-on/id6479557341", label: "App Store" },
  },
  {
    name: "Bracktix",
    category: "E-sports app",
    image: imgBracktix,
    alt: "Bracktix app screens showing tournaments and streaming",
    line: "Tournament management combined with live match streaming, including teams and channels.",
    link: {
      href: "https://play.google.com/store/apps/details?id=com.sadacode.bracktix&pcampaignid=web_share",
      label: "Google Play",
    },
  },
];

export const services = [
  {
    title: "Mobile application development",
    audience: "Founders and teams who need one product on both Android and iOS.",
    delivers:
      "Cross-platform Flutter apps end to end: interface work, state management, API integration, authentication, push notifications and store release.",
    proof: "Calling All Kids, INGAGE GG",
  },
  {
    title: "Web applications and admin platforms",
    audience: "Teams who need to run and support the product behind the app.",
    delivers:
      "Dashboards and internal tools for managing users, tasks and content, built against the same APIs as the mobile client so both stay in step.",
    proof: "FSMS",
  },
  {
    title: "Python and applied AI integration",
    audience: "Teams adding AI features to a product that already exists.",
    delivers:
      "Hosted language models and speech services connected to real application flows, with the Python and API work that makes a model useful rather than a demo.",
    proof: "FSMS, Calling All Kids",
  },
  {
    title: "Existing product improvements",
    audience: "Teams with an app already in production.",
    delivers:
      "Adding features to a live codebase, fixing defects, improving structure and maintainability, refining interfaces and supporting releases.",
    proof: "Applies across the work shown here",
  },
];

export const appliedAi = {
  heading: "AI features built into useful software.",
  intro:
    "Most of my AI work is integration. The interesting problem is rarely the model itself; it is everything around it that decides whether a feature is dependable enough to put in front of users.",
  items: [
    {
      title: "Language-model features in applications",
      body: "Conversational support attached to a specific workflow, such as the per-task chat agents in FSMS, where the model drafts and suggests while a person stays responsible for the outcome.",
    },
    {
      title: "Speech and natural-language interaction",
      body: "Spoken interaction inside a mobile app, including the child-to-character conversations in Calling All Kids.",
    },
    {
      title: "Python for integration and automation",
      body: "The service integration, data handling and automation that connects a model to the rest of a product.",
    },
    {
      title: "Application orchestration",
      body: "Prompt and state handling, API calls, error paths and sensible fallbacks for when a model is slow, wrong or unavailable.",
    },
  ],
  scope:
    "To be precise about scope: this work uses hosted models through APIs and integrates them into products. I have not trained or fine-tuned models, and retrieval pipelines and vector databases are not part of the production work shown here.",
};

export const workDetails = [
  {
    role: "Senior Flutter Developer & AI Engineer",
    company: "Dextrologix",
    location: "Lahore, Pakistan",
    period: "2024 – Present",
    bullets: [
      "Lead Flutter development of FSMS, a facility management product with a mobile app and a web admin platform.",
      "Designed the AI agent layer that attaches a conversational agent to each complaint or task to support routing, escalation and resolution.",
      "Built admin-side features including real-time dashboards and task tracking.",
    ],
  },
  {
    role: "Senior Mobile Application Developer",
    company: "INGAGE GG",
    location: "London, England",
    period: "Nov 2024 – 2025",
    bullets: [
      "Led Flutter development of an e-sports platform covering tournaments, wallet features and player career profiles.",
      "Implemented live match tracking and notifications against WebSocket and Firebase services.",
    ],
  },
  {
    role: "Senior Flutter Developer",
    company: "Triaxo Solutions",
    location: "Lahore, Pakistan",
    period: "Oct 2023 – Oct 2024",
    bullets: [
      "Delivered production Flutter applications integrating AI/ML models for real-time on-device inference.",
      "Set up and maintained CI/CD pipelines with GitHub Actions.",
    ],
  },
  {
    role: "Mobile Application Developer",
    company: "Socioon Limited",
    location: "Lahore, Pakistan",
    period: "Oct 2022 – Oct 2023",
    bullets: [
      "Built and launched Raabta Social, the official social networking app for PTI, a political party in Pakistan.",
      "Integrated Agora for real-time voice and video, and Flutterwave for in-app payments.",
    ],
  },
];

export const capabilities = [
  { group: "Mobile", items: "Flutter, Dart, Kotlin, Java, SwiftUI" },
  { group: "Web and backend", items: "React, Laravel, PHP, MySQL, Firebase" },
  { group: "Python and AI", items: "Python, LLM integration, speech and natural-language services, TensorFlow Lite, ML Kit" },
  { group: "APIs and real-time", items: "REST APIs, GraphQL, WebSockets, Agora, push notifications" },
  { group: "Delivery and tooling", items: "Git, GitHub Actions, Stripe, Flutterwave, Postman, Figma" },
];

export const capabilitiesNote =
  "Day-to-day work is mostly Flutter, Dart and Python. The rest I have used on projects that shipped, at varying depth.";

export const about = {
  paragraphs: [
    "I'm Irfan Haider, a software developer based in Lahore, Pakistan. I work across mobile applications, web platforms and applied AI, turning product requirements into software a team can actually run in production. My experience covers facility management, e-sports, telemedicine, social networking and consumer apps.",
    "I tend to own the whole path of a feature: the mobile client, the admin screens that support it, the API work in between, and the release that puts it in front of people. Recent work has combined that with language-model features, where the engineering problem is making a model useful inside a product rather than impressive on its own.",
    "I work with founders, agencies and in-house teams, usually as the developer responsible for a product area rather than a pair of hands on a ticket queue.",
  ],
  education: "BS Information Technology, University of the Punjab, 2019–2023",
};

export const process = [
  {
    title: "Understand the product and constraints",
    body: "What the product has to do, who uses it, and what the existing systems, timeline and team allow.",
  },
  {
    title: "Define scope and technical approach",
    body: "An agreed scope, the architecture and services it needs, and the order the work happens in.",
  },
  {
    title: "Build, review and refine",
    body: "Work delivered in reviewable pieces, with adjustments as the product becomes real rather than at the end.",
  },
  {
    title: "Test, release and support",
    body: "Testing on real devices, release to the stores or the server, and support for what comes after.",
  },
];

export const contactCopy = {
  heading: "Let's discuss what you're building.",
  body: "Share your product idea, current challenges, or the development support you need.",
  privacy:
    "Your name, email and message are sent to my inbox through EmailJS so that I can reply. Nothing is stored on this site.",
  projectTypes: [
    "Mobile app",
    "Web app or admin platform",
    "AI integration",
    "Improving an existing product",
    "Something else",
  ],
};
