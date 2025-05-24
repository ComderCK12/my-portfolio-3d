const navLinks = [
  {
    name: "Work",
    link: "#work",
  },
  {
    name: "Experience",
    link: "#experience",
  },
  {
    name: "Skills",
    link: "#skills",
  },
  // {
  //   name: "My Strengths",
  //   link: "#strengths",
  // },
];

const words = [
  { text: "Ideas", imgPath: "/images/ideas.svg" },
  { text: "Code", imgPath: "/images/code.svg" },
  { text: "Experience", imgPath: "/images/designs.svg" },
];

const counterItems = [
  { value: 1, suffix: "+", label: "Years of Experience" },
  { value: 10, suffix: "+", label: "Hackathons Participated" },
  { value: 20, suffix: "+", label: "Completed Projects" },
  { value: 8, suffix: "+", label: "CPI" },
];

const logoIconsList = [
  {
    imgPath: "/images/logos/company-logo-1.png",
  },
  {
    imgPath: "/images/logos/company-logo-2.png",
  },
  {
    imgPath: "/images/logos/company-logo-3.png",
  },
  {
    imgPath: "/images/logos/company-logo-4.png",
  },
  {
    imgPath: "/images/logos/company-logo-5.png",
  },
  {
    imgPath: "/images/logos/company-logo-6.png",
  },
  {
    imgPath: "/images/logos/company-logo-7.png",
  },
  {
    imgPath: "/images/logos/company-logo-8.png",
  },
  {
    imgPath: "/images/logos/company-logo-9.png",
  },
  {
    imgPath: "/images/logos/company-logo-10.png",
  },
  {
    imgPath: "/images/logos/company-logo-11.png",
  },
];

const abilities = [
  {
    imgPath: "/images/seo.png",
    title: "Problem Solving",
    desc: "Ability to break down complex problems and design efficient, scalable solutions.",
  },
  {
    imgPath: "/images/chat.png",
    title: "Effective Communication",
    desc: "Clearly articulating technical concepts and collaborating effectively with teams and stakeholders.",
  },
  {
    imgPath: "/images/team.png",
    title: "Team Collaboration",
    desc: "Working effectively with cross-functional teams, sharing knowledge, and contributing to a positive team culture.",
  },
  {
    imgPath: "/images/learning.png",
    title: "Continuous Learning",
    desc: "Keeping up with emerging technologies, tools, and frameworks to stay relevant and grow.",
  },
  {
    imgPath: "/images/code.png",
    title: "Clean & Maintainable Code",
    desc: "Writing code that's easy to read, test, and maintain, following industry best practices.",
  },
  {
    imgPath: "/images/time.png",
    title: "Time Management",
    desc: "Prioritizing tasks efficiently to meet deadlines without compromising quality.",
  },
];

const techStackImgs = [
  {
    name: "React Developer",
    imgPath: "/images/logos/react.png",
  },
  {
    name: "Python Developer",
    imgPath: "/images/logos/python.svg",
  },
  {
    name: "Backend Developer",
    imgPath: "/images/logos/node.png",
  },
  {
    name: "Interactive Developer",
    imgPath: "/images/logos/three.png",
  },
  {
    name: "Project Manager",
    imgPath: "/images/logos/git.svg",
  },
];

const techStackIcons = [
  {
    name: "React Frontend Development",
    modelPath: "/models/react_logo-transformed.glb",
    scale: 1,
    rotation: [0, 0, 0],
  },
  {
    name: "Python ML Development",
    modelPath: "/models/python-transformed.glb",
    scale: 0.8,
    rotation: [0, 0, 0],
  },
  {
    name: "JAVA Spring Backend Developer",
    modelPath: "/models/java.glb",
    scale: 1.5,
    rotation: [0, 0, 0],
  },
  {
    name: "Ajile Development",
    modelPath: "/models/three.js-transformed.glb",
    scale: 0.05,
    rotation: [0, 0, 0],
  },
  {
    name: "Postgres and SQL Databases",
    modelPath: "/models/server_rack.glb",
    scale: 3,
    rotation: [0.35, -Math.PI - 0.3, 0],
  },
];

const expCards = [
  {
    review:
      "At NPCI, I contributed to UPI's back-office infrastructure, working closely on settlements and dispute resolution modules. I gained a deep understanding of financial systems, GST workflows, and played a key role in improving backend reliability and admin workflows.",
    imgPath: "/images/npci2.png",
    logoPath: "/images/npci.png",
    title: "Software Development Engineer – NPCI",
    date: "Sept 2024 – Present",
    responsibilities: [
      "Worked in the UPI backoffice team handling settlements with RBI and partner banks.",
      "Built and integrated a maker-checker module in the UDIR (UPI Dispute and Issue Resolvement) portal using Java Spring Boot.",
      "Assisted in the common code merge for NPCI's unified backoffice systems.",
      "Resolved critical production issues across portals and various modueles.",
      "Contributed to the GST Regenerator module, calculating GST on UPI transactions and generating reports for RBI and banks.",
      "Optimised the GST Calculation process bringing down the processing time by 55%",
      "Currently leading the portal migration initiative from JSP to React to modernize the frontend infrastructure.",
    ],
  },
  {
    review:
      "At IIT Bombay, I contributed to developing 'Vajra', an advanced Endpoint Detection and Response (EDR) system. I worked on building the rule engine using standardized SigmaHQ threat rules and designing a framework for machine learning-based detection of attack patterns. We also simulated cyberattacks to analyze system behavior and enhance detection accuracy.",
    imgPath: "/images/iitb2.png",
    logoPath: "/images/iitb.png",
    title: "Research Intern – IIT Bombay",
    date: "Aug 2023 - Jun 2024",
    responsibilities: [
      "Developed rule engine logic for detecting cyber threats using SigmaHQ rule sets.",
      "Simulated and analyzed various types of system attacks to test detection effectiveness.",
      "Helped design a framework for ML-based pattern detection in endpoint security.",
    ],
  },
  {
    review:
      "At Citibank, I explored the potential of low-code platforms by developing an asset management system using Appian. I collaborated with the inventory team to gather requirements and built a solution that streamlined asset tracking and utilization across departments.",
    imgPath: "/images/citibank.png",
    logoPath: "/images/citi2.png",
    title: "SDE Intern – Citibank",
    date: "May 2023 - July 2023",
    responsibilities: [
      "Developed an asset management application using Appian, integrated with an Oracle database.",
      "Collaborated with the inventory team to gather business requirements and translate them into technical features.",
      "Enabled real-time tracking and reporting of asset utilization across teams.",
    ],
  },
  {
    review:
      "Leading Enthusia was a transformative experience that honed my leadership, event management, and team mentoring skills. Securing MuscleBlaze as our title sponsor was a proud milestone.",
    imgPath: "/images/enthusia.png", // Replace with your image path if available
    logoPath: "/images/vjti.png",
    title: "Executive Director, Enthusia - College Sports Fest",
    date: "Nov 2022 - Jan 2023",
    responsibilities: [
      "Planned and scheduled both inter and intra-college sporting events, coordinating across multiple departments with the team.",
      "Managed budgeting and resource allocation to ensure smooth operations and cost efficiency.",
      "Played a key role in securing MuscleBlaze as the title sponsor.",
      "Mentored a team of juniors alongside fellow peers, fostering leadership and team development.",
    ],
  },
];

const expLogos = [
  {
    name: "logo1",
    imgPath: "/images/logo1.png",
  },
  {
    name: "logo2",
    imgPath: "/images/logo2.png",
  },
  {
    name: "logo3",
    imgPath: "/images/logo3.png",
  },
];

const testimonials = [
  {
    name: "Esther Howard",
    mentions: "@estherhoward",
    review:
      "I can’t say enough good things about Adrian. He was able to take our complex project requirements and turn them into a seamless, functional website. His problem-solving abilities are outstanding.",
    imgPath: "/images/client1.png",
  },
  {
    name: "Wade Warren",
    mentions: "@wadewarren",
    review:
      "Working with Adrian was a fantastic experience. He transformed our outdated website into a modern, user-friendly platform. His attention to detail and commitment to quality are unmatched. Highly recommend him for any web dev projects.",
    imgPath: "/images/client3.png",
  },
  {
    name: "Guy Hawkins",
    mentions: "@guyhawkins",
    review:
      "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
    imgPath: "/images/client2.png",
  },
  {
    name: "Marvin McKinney",
    mentions: "@marvinmckinney",
    review:
      "Adrian was a pleasure to work with. He turned our outdated website into a fresh, intuitive platform that’s both modern and easy to navigate. Fantastic work overall.",
    imgPath: "/images/client5.png",
  },
  {
    name: "Floyd Miles",
    mentions: "@floydmiles",
    review:
      "Adrian’s expertise in web development is truly impressive. He delivered a robust and scalable solution for our e-commerce site, and our online sales have significantly increased since the launch. He’s a true professional!",
    imgPath: "/images/client4.png",
  },
  {
    name: "Albert Flores",
    mentions: "@albertflores",
    review:
      "Adrian was a pleasure to work with. He understood our requirements perfectly and delivered a website that exceeded our expectations. His skills in both frontend and backend dev are top-notch.",
    imgPath: "/images/client6.png",
  },
];

const socialImgs = [
  {
    name: "insta",
    imgPath: "/images/insta.png",
    url: "https://www.instagram.com/chikukathoye/",
  },
  {
    name: "x",
    imgPath: "/images/x.png",
    url: "https://x.com/itscKathoye12",
  },
  {
    name: "linkedin",
    imgPath: "/images/linkedin.png",
    url: "https://www.linkedin.com/in/chirag-kathoye-1a3794230/",
  },
  {
    name: "leetcode",
    imgPath: "/images/leetcode.png",
    url: "https://leetcode.com/u/chiragkathoyeck/",
  },
  {
    name: "github",
    imgPath: "/images/github.png",
    url: "https://github.com/ComderCK12",
  },
];

export {
  words,
  abilities,
  logoIconsList,
  counterItems,
  expCards,
  expLogos,
  testimonials,
  socialImgs,
  techStackIcons,
  techStackImgs,
  navLinks,
};
