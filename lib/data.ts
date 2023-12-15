import React from "react";
import {FaLaptopCode, FaReact} from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import coralImg from "@/public/projectsImages/coral-project.png";
import azaryImage from "@/public/projectsImages/azary-appi.png";

import {GrUserWorker} from "react-icons/gr";
import {TbCode} from "react-icons/tb";

export const links = [
    {
        name: "Home",
        hash: "#home",
    },
    {
        name: "About",
        hash: "#about",
    },
    {
        name: "Projects",
        hash: "#projects",
    },
    {
        name: "Skills",
        hash: "#skills",
    },
    {
        name: "Experience",
        hash: "#experience",
    },
    {
        name: "Contact",
        hash: "#contact",
    },

] as const;

export const experiencesData = [

    {
        id: 0,
        title: "Front End Engineer",
        location: "Palestine",
        description:
            "During my intensive training at TAP, I acquired valuable skills in JavaScript programming, the ReactJS framework, and essential frontend technologies, including HTML5 and CSS3. This hands-on learning experience emphasized the seamless integration of web pages and highlighted the importance of implementing SEO best practices. Gaining proficiency in crafting responsive and visually appealing user interfaces, I ensured optimal user experiences. Moreover, I developed skills in optimizing web content for search engines, enhancing my ability to create websites that adhere to modern standards for performance and accessibility.",
        icon: React.createElement(TbCode),
        date: "September, 2023 - December, 2023",
    },
    {
        id: 1,
        title: "Full Stack Developer",
        location: "Palestine",
        description:
            "I did an internship at AZZARY company as a full-stack developer. during that I actively contributed to the development and maintenance of both back-end systems using Laravel and front-end interfaces using React.js with TypeScript for web applications, along with React Native for mobile platforms. One of my notable achievements was designing and implementing Learning Management Systems (LMS) from the ground up, encompassing comprehensive back-end and front-end development. ",
        icon: React.createElement(FaReact),
        date: "January, 2023 - July, 2023",
    },
    {
        id: 2,
        title: "Learning Full Stack Development",
        location: "Online",
        description:
            "I started self learning of full stack development using open sources. During that I have learned HTML, CSS, JavaScript, Bootstrap, Node.js, MongoDB, and React.js.",
        icon: React.createElement(FaLaptopCode),
        date: "2021 - 2022",
    },
    {
        id: 3,
        title: "Civil Engineer",
        location: "Saudi Arabia",
        description:
            "I worked as a civil engineer in several infrastructure projects including roads, bridges, and water projects, during that i gained a strong project management skills.",
        icon:  React.createElement(GrUserWorker),
        date: "2014 - 2022",
    },
    {
        id: 4,
        title: "Graduation",
        location: "Palestine",
        description:
            "I graduated with a bachelor degree in civil engineering",
        icon: React.createElement(LuGraduationCap),
        date: "December, 2013",
    },
] as const;

export const projectsData = [
    {
        title: "COR’AL App",
        description:
            "This e-commerce app have a responsive and user-friendly interface, facilitating seamless product purchases. Users can effortlessly browse and filter products, place orders, and manage their accounts through features such as user authentication.",
        tags: ["React", "React MUI", "React Query", "MySql", "Node.js"],
        imageUrl: coralImg,
        links: {
            liveDemo: 'https://coral-e-commerce-app.vercel.app/',
            gitHub: 'https://github.com/AnasTomeh/coral-e-commerce-app.git'
        }
    },
    {
        title: "Azary App",
        description:
            "This is an e-commerce app that allows users to open their stores on it. I worked there as a full-stack developer with a front-end focus, during that I developed and maintained both the back-end using Laravel and the front-end using React for the web and React Native for mobile.",
        tags: ["React", 'React Native', 'Next.js', 'MUI', 'Tailwind', 'Laravel', 'MySql'],
        imageUrl: azaryImage,
        links: undefined
    },

] as const;

export const skillsData = [
    "HTML",
    "CSS",
    "JavaScript",
    "TypeScript",
    "React.js",
    "React MUI",
    "React Native",
    "React Query",
    "Redux",
    "Next.js",
    "Bootstrap",
    "Tailwind",
    "UI/UX",
    "API Development",
    "Laravel",
    "Node.js",
    "Express.js",
    "MySql",
    "GitHub",
    "Responsive Web Design",
    "SEO Best Practice",

] as const;

export const transferableSkillsData = [
    "Project Management",
    "Time Management",
    "Risk Management",
    "Communication",
    "Report Writing",
    "Adaptability",
    "Teamwork & Synergy",
    "Client Relationship Management",
] as const;