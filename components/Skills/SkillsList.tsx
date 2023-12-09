import React from "react";
import {motion} from "framer-motion";

interface SkillsListProps {
    title: string;
    skills: readonly string[];
}
const SkillsList = React.memo((props: SkillsListProps) => {
    const {title, skills} = props

    const fadeInAnimationVariants = {
        initial: {
            opacity: 0,
            y: 100,
        },
        animate: (index: number) => ({
            opacity: 1,
            y: 0,
            transition: {
                delay: 0.05 * index,
            },
        }),
    };

    return (
        <div role="region" aria-labelledby="skills-list-heading">
            <motion.h3
                className="text-2xl font-medium mb-8 text-left px-10"
                initial={{opacity: 0, x:-100}}
                animate={{opacity: 1, x:0}}
            >
                {title}
            </motion.h3>

            <ul className={"flex flex-wrap justify-center gap-2 text-lg text-gray-800 mb-10"}>
                {skills.map((skill, index) => (
                    <motion.li
                        key={index}
                        className="bg-white border border-black/[0.1] rounded-xl px-5 py-3 dark:bg-white/10 dark:text-white/80"

                        variants={fadeInAnimationVariants}
                        initial="initial"
                        whileInView="animate"
                        viewport={{
                            once: true,
                        }}
                        custom={index}
                    >
                        {skill}
                    </motion.li>
                ))}
            </ul>
        </div>
    )
})

export default SkillsList;