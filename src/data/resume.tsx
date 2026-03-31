import { Icons } from "@/components/icons";
import { BookUserIcon, HomeIcon } from "lucide-react";

export const DATA = {
  name: "Tushar Birajdar",
  initials: "TB",
  url: "https://portfolio-v1-tusharp7s-projects.vercel.app",
  location: "Pune, Maharashtra",
  locationLink: "https://www.google.com/maps/place/Pune",
  description:
    "Software engineer focused on data engineering, backend systems, and practical full-stack products.",
  summary:
    "I am a software engineer based in **Pune, Maharashtra**, with experience across **ETL pipelines, data engineering, automation tooling, and full-stack product development**. I currently work at **Bitwise** as a **Programmer Trainee**, where I build scalable workflows using **SSIS, Informatica, Azure Data Factory, PySpark, and Microsoft Fabric**.\n\nPreviously, I interned at **BMC Software**, where I developed Python tooling for **DOM analysis, locator detection, and browser automation** using **Selenium** and **BeautifulSoup**.\n\nAlongside data work, I enjoy building products with **React, Node.js, Express.js, Flutter, PostgreSQL, MySQL, and MongoDB**. I like systems that are clean, useful, and reliable.\n\nI have also solved **600+ coding problems** across major platforms, earned **Codeforces Pupil** and **CodeChef 3-Star** ratings, and completed a **Databricks certification** in data engineering.",
  avatarUrl: "/tushar-profile.jpeg",
  skills: [
    "C",
    "C++",
    "Python",
    "Java",
    "JavaScript",
    "SQL",
    "React",
    "Node.js",
    "Express.js",
    "Flutter",
    "PySpark",
    "Azure Data Factory",
    "Microsoft Fabric",
    "PostgreSQL",
    "MySQL",
    "MongoDB",
    "Docker",
    "Selenium",
  ],
  iconCloud: [
    "c",
    "cplusplus",
    "python",
    "java",
    "javascript",
    "react",
    "nodedotjs",
    "express",
    "flutter",
    "firebase",
    "postgresql",
    "mysql",
    "mongodb",
    "docker",
    "git",
    "github",
    "visualstudiocode",
    "postman",
    "jupyter",
    "amazonaws",
    "microsoftazure",
    "html5",
    "css3",
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    { href: "/resume.pdf", icon: BookUserIcon, label: "Resume" },
  ],
  contact: {
    email: "tusharbirajdar2002@gmail.com",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/Tusharp7",
        icon: Icons.github,
        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://linkedin.com/in/TusharBirajdar",
        icon: Icons.linkedin,
        navbar: true,
      },
      Email: {
        name: "Send Email",
        url: "mailto:tusharbirajdar2002@gmail.com",
        icon: Icons.email,
        navbar: true,
      },
      Codeforces: {
        name: "Codeforces",
        url: "https://codeforces.com/profile/Pineapple1_",
        icon: Icons.codeforces,
        navbar: true,
      },
      CodeChef: {
        name: "CodeChef",
        url: "https://www.codechef.com/users/tu_sharp",
        icon: Icons.codechef,
        navbar: true,
      },
      Databricks: {
        name: "Databricks",
        url: "https://credentials.databricks.com/a775b365-cf1e-4940-b2a0-1b985795a6fa#acc.evaxLf2G",
        icon: Icons.databricks,
        navbar: false,
      },
    },
  },
  work: [
    {
      company: "Bitwise",
      href: "https://www.bitwiseglobal.com/",
      badges: [],
      location: "Pune, Maharashtra",
      title: "Programmer Trainee",
      logoUrl: "/bitwise.svg",
      start: "June 2025",
      end: "Present",
      description:
        "Designed and developed ETL workflows across multiple sources using SSIS, Informatica, Azure Data Factory, and PySpark. Processed datasets exceeding 50M+ records, used Microsoft Fabric for analytics and visualization, and built reusable ETL templates with scheduling that reduced manual effort by 20 hours per month.",
    },
    {
      company: "BMC Software",
      href: "https://www.bmc.com/",
      badges: [],
      location: "Pune, Maharashtra",
      title: "Software Engineer Intern",
      logoUrl: "/bmc.png",
      start: "Jan 2024",
      end: "June 2024",
      description:
        "Built Locator Analyzer in Python to automate DOM scanning and element extraction for UI test automation. Used BeautifulSoup and Selenium for dynamic content analysis and implemented locator change detection across product versions to reduce regression debugging overhead.",
    },
  ],
  education: [
    {
      school: "Pune Institute of Computer Technology",
      href: "https://pict.edu",
      degree: "B.E. in Electronics and Telecommunication Engineering",
      logoUrl: "/pict.jpg",
      start: "2021",
      end: "2025",
    },
  ],
  projects: [
    {
      title: "CollabBoard",
      href: "https://collab-board1.vercel.app/",
      dates: "Nov. 2024",
      active: true,
      description:
        "A real-time collaborative whiteboard with live chat, interactive drawing tools, and low-latency multi-user communication.",
      technologies: ["React", "Node.js", "Express.js", "WebRTC", "Sockets"],
      links: [
        {
          type: "Website",
          href: "https://collab-board1.vercel.app/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/tusharp7/CollabBoard-",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "",
    },
    {
      title: "Events Judging App",
      href: "#",
      dates: "Jan. 2024",
      active: true,
      description:
        "A mobile application for real-time scoring, instant result aggregation, and live leaderboard updates during events.",
      technologies: ["Flutter", "Node.js", "PostgreSQL"],
      links: [],
      image: "",
      video: "",
    },
    {
      title: "Handicraft Haven",
      href: "https://github.com/tusharp7/Handicraft_Haven",
      dates: "Project",
      active: true,
      description:
        "A handcrafted products platform built around browsing, discovery, and storefront-style experiences for artisan goods.",
      technologies: ["Web Development", "Marketplace UI", "Frontend"],
      links: [
        {
          type: "Source",
          href: "https://github.com/tusharp7/Handicraft_Haven",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "",
    },
  ],
  hackathons: [
    {
      title: "Concepts 2025",
      type: "Project Competition",
      dates: "2025",
      position: "2nd Runner-Up",
      location: "PICT, Pune",
      description:
        "Recognized at an international-level project exhibition and placed among the top innovations.",
      image: "/inc.png",
      links: [],
    },
    {
      title: "Codeforces",
      type: "",
      dates: "Competitive Programming",
      position: "Pupil",
      location: "Global Rank 352 / 6200+",
      description:
        "Achieved Codeforces Pupil rating with a strong performance in Round 928 (Div. 3).",
      image: "/codeforces.svg",
      links: [
        {
          title: "Profile",
          href: "https://codeforces.com/profile/Pineapple1_",
          icon: <Icons.codeforces className="size-3" />,
        },
      ],
    },
    {
      title: "CodeChef",
      type: "",
      dates: "Competitive Programming",
      position: "3-Star",
      location: "Global Rank 17 / 5500+",
      description:
        "Reached CodeChef 3-Star rating and secured Global Rank 17 in Starters 124.",
      image: "/codechef.svg",
      links: [
        {
          title: "Profile",
          href: "https://www.codechef.com/users/tu_sharp",
          icon: <Icons.codechef className="size-3" />,
        },
      ],
    },
    {
      title: "Databricks Certification",
      type: "",
      dates: "Certification",
      position: "Databricks",
      location: "Credential Verified",
      description:
        "Completed a Databricks certification in data engineering and platform fundamentals.",
      image: "/databricks.svg",
      links: [
        {
          title: "Credential",
          href: "https://credentials.databricks.com/a775b365-cf1e-4940-b2a0-1b985795a6fa#acc.evaxLf2G",
          icon: <Icons.databricks className="size-3" />,
        },
      ],
    },
    {
      title: "Problem Solving",
      type: "",
      dates: "Ongoing",
      position: "600+ Problems",
      location: "Codeforces, CodeChef, LeetCode, GeeksforGeeks",
      description:
        "Solved over 600 problems across major coding platforms, strengthening algorithmic thinking and problem-solving depth.",
      image: "",
      links: [],
    },
    {
      title: "PICT INC",
      type: "",
      dates: "Apr. 2024",
      position: "Domain Director - Pradyna",
      location: "PICT, Pune",
      description:
        "Organized the Pradyna contest with 10,000+ participants, including international attendees.",
      image: "/pict.jpg",
      links: [],
    },
  ],
} as const;
