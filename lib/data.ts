import React from "react";
import {FaLaptopCode, FaReact} from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import EngineerIcon from '@/lib/icons/civil-icon.svg';
import coralImg from "@/public/projectsImages/coral-project.png";
import rmtdevImg from "@/public/projectsImages/rmtdev.png";
import wordanalyticsImg from "@/public/projectsImages/wordanalytics.png";
import {GrUserWorker} from "react-icons/gr";
import {TbCode, TbCodeCircle2} from "react-icons/tb";

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

] as const;

export const experiencesData = [
    {
        id: 0,
        title: "Graduation",
        location: "Palestine",
        description:
            "I graduated with a bachelor degree in civil engineering",
        icon: React.createElement(LuGraduationCap),
        date: "December, 2013",
    },
    {
        id: 1,
        title: "Civil Engineer",
        location: "Saudi Arabia",
        description:
            "I worked as a civil engineer in several infrastructure projects including roads, bridges, and water projects, during that i gained a strong project management skills.",
        icon:  React.createElement(GrUserWorker),
        date: "2014 - 2022",
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
        title: "Full Stack Developer",
        location: "Palestine",
        description:
            "I did an internship at AZZARY company as a full-stack developer. during that I actively contributed to the development and maintenance of both back-end systems using Laravel and front-end interfaces using React.js with TypeScript for web applications, along with React Native for mobile platforms. One of my notable achievements was designing and implementing Learning Management Systems (LMS) from the ground up, encompassing comprehensive back-end and front-end development. ",
        icon: React.createElement(FaReact),
        date: "March, 2023 - July, 2023",
    },
    {
        id: 4,
        title: "Front End Engineer",
        location: "Palestine",
        description:
            "During my intensive training at TAP, I acquired valuable skills in JavaScript programming, the ReactJS framework, and essential frontend technologies, including HTML5 and CSS3. This hands-on learning experience emphasized the seamless integration of web pages and highlighted the importance of implementing SEO best practices. Gaining proficiency in crafting responsive and visually appealing user interfaces, I ensured optimal user experiences. Moreover, I developed skills in optimizing web content for search engines, enhancing my ability to create websites that adhere to modern standards for performance and accessibility.",
        icon: React.createElement(TbCode),
        date: "September, 2023 - December, 2023",
    },
] as const;

export const projectsData = [
    {
        title: "COR’AL App",
        description:
            "This project is accomplished as a graduation requirements for TAP which is an e-commerce web application for a general store that sells a multitude of things, like women’s wear, men’s wear, accessories, makeup, bags, etc.",
        tags: ["React", "React MUI", "React Query", "MySql", "Node.js"],
        imageUrl: coralImg,
    },
    {
        title: "rmtDev",
        description:
            "Job board for remote developer jobs. I was the front-end developer. It has features like filtering, sorting and pagination.",
        tags: ["React", "TypeScript", "Next.js", "Tailwind", "Redux"],
        imageUrl: rmtdevImg,
    },
    {
        title: "Word Analytics",
        description:
            "A public web app for quick analytics on text. It shows word count, character count and social media post limits.",
        tags: ["React", "Next.js", "SQL", "Tailwind", "Framer"],
        imageUrl: wordanalyticsImg,
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