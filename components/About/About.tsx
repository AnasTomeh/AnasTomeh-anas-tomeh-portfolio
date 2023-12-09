"use client"

import SectionHeading from "@/components/SectionHeading";
import { motion } from 'framer-motion';

const About = () => {
    return (
        <motion.section
            className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 mx-2 scroll-mt-40"
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.175 }}
            id="about"
            role="region"
            aria-labelledby="about-heading"
        >
            <SectionHeading >About Me</SectionHeading>
            <p className="mb-3">
                I graduated with a Bachelor's degree in{" "}
                <span className="font-medium">Civil Engineering</span> in 2013. Over the next{" "}
                <span className="font-medium">8 years</span>, I worked on several infrastructure projects where I gained strong{" "}
                <span className="font-medium">project management skills such as site management, resource management, and project mentoring to ensure it delivered on time and on budget</span>.
            </p>
            <p className="mb-3">
                <span className="font-medium ">In 2021, {" "}</span>
                I decided to shift my career into programming, driven by my passion and a desire to broaden my professional horizons. I embarked on a self-learning journey using open-source resources. During this period, I learned{" "}
                <span className="font-medium">full-stack web development</span>,{" "} and developed on several programming languages, frameworks, and libraries such as{" "}
                <span className="font-medium">JavaScript, HTML, CSS, React, React MUI</span>, and others which enabled me to create responsive interfaces, ensure data security, and optimize performance.
            </p>

            <p>
                I <span className="underline">love</span> the feeling of finally figuring out a solution to a problem. My core stack is{" "}
                <span className="font-medium">JavaScript, React, React MUI, Redux, Laravel, and MySql</span>. I am also familiar with{" "}
                <span className="font-medium">TypeScript, React Native, Bootstrap, React Query, Redux, Node.js</span>. I am always looking to learn new technologies. I am currently looking for a{" "}
                <span className="font-medium">full-time position</span> as a front-end engineer.
            </p>
        </motion.section>
    );
}

export default About;
