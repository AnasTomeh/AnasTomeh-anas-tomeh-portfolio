"use client"

import {projectsData} from "@/lib/data";
import Image from "next/image";
import {useRef} from "react";
import {motion} from "framer-motion";
import useScroll from "@/hooks/useScroll";
import {FaGithub, FaPlay} from "react-icons/fa";

type ProjectProps = typeof projectsData[number]

const Project = (props: ProjectProps) => {
    const { title, description, tags, imageUrl } = props;
    const ref = useRef<HTMLDivElement>(null);

    const { isVisible } = useScroll(ref);


    return (
        <motion.div ref={ref}
                    animate={{
                        opacity: isVisible ? 1 : 0,
                        y: isVisible ? 0 : 20,
                        scale: isVisible ? 1 : 0.2,
                        transition: { duration: .5, ease: "easeInOut" }
                    }}
                    initial={{ opacity: 0, y: 20, scale: 0.5 }}
                    className="group mb-3 sm:mb-8 last:mb-0"
        >

            <section role="group" className="flex flex-col sm:block bg-gray-100 max-w-[42rem] border border-black/5 rounded-lg overflow-hidden sm:pr-8 relative  hover:bg-gray-200 transition sm:group-even:pl-8 dark:text-white dark:bg-white/10 dark:hover:bg-white/20">

                <div className="pt-4 pb-7 px-5 sm:pl-10 sm:pr-2 sm:pt-10 gap-5 sm:max-w-[50%] flex flex-col h-full sm:group-even:ml-[18rem] sm:order-2 order-3">
                    <h3 className="text-2xl font-semibold mt-2 ">{title}</h3>
                    <p id="projectDescription" className="mt-2 leading-relaxed text-gray-700 dark:text-white/70 text-left">
                        {description}
                    </p>
                    <ul className="flex flex-wrap  gap-2 sm:mt-auto">
                        {tags.map((tag, index) => (
                            <li
                                className="bg-black/[0.7] px-3 py-1 text-[0.7rem] uppercase tracking-wider text-white rounded-full dark:text-white/70"
                                key={index}
                            >
                                {tag}
                            </li>
                        ))}
                    </ul>
                </div>

                <Image
                    src={imageUrl}
                    alt={`Screenshot of the project: ${title}`}
                    quality={95}
                    className="projectImage transition"
                    aria-describedby="projectDescription"
                />
                <div className="relative sm:left-[72%] sm:-top-8 sm:group-even:left-[5%] flex gap-4 sm:mt-3 sm:justify-start justify-center -mt-12">
                    <a className="projectIcon"
                       title="Live Demo"
                       href={""}
                       rel="noopener noreferrer"
                       target="_blank"
                       aria-label="Live Demo"
                    >
                        <FaPlay/>
                    </a>
                    <a className="projectIcon"
                       title="View GitHub Repository"
                       rel="noopener noreferrer"
                       href={""}
                       target="_blank"
                       aria-label="View GitHub Repository"
                    >
                        <FaGithub/>
                    </a>

                </div>
            </section>

        </motion.div>
    );
}

export default Project;
