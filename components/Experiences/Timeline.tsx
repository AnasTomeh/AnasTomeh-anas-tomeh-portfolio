"use client"

import {experiencesData} from "@/lib/data";
import {motion} from "framer-motion";
import {useRef} from "react";
import useScroll from "@/hooks/useScroll";

type ExperiencesProps = typeof experiencesData[number]
const Timeline = (props: ExperiencesProps) => {
    const { id, title, location, description, icon , date, company, link} = props;

    const ref = useRef<HTMLDivElement>(null);
    const { isVisible } = useScroll(ref);

    const isEven = id%2 === 0 || id === 0
    const isOdd = id%2 !== 0
    return (

        <div role="group">
            <div className="flex flex-col grid-cols-9  mx-auto md:grid">
                {isEven &&

                    <div

                        className="flex md:contents flex-row-reverse "
                    >
                        <motion.div
                            ref={ref}
                            className="relative p-4 text-gray-800 bg-[#f3f4f6] border border-solid border-gray-300
                             rounded-2xl dark:bg-gray-700 dark:border-gray-600
                            col-start-1 col-end-5 mr-auto md:mr-0 md:ml-auto dark:text-white/75 text-left flex flex-col gap-2"
                            animate={{
                                opacity: isVisible ? 1 : 0,
                                x: isVisible ? 0 : -20,
                                transition: { duration: 0.5, ease: "easeInOut" }
                            }}
                            initial={{ opacity: 0, x: -20 }}
                        >
                            <h3 className="text-xl font-semibold">{title}</h3>
                            <h4 className="text-lg font-normal">{location}</h4>
                            <a href={link} target="_blank" rel="noopener noreferrer" className="text-blue-400">{company}</a>
                            <h4 className="text-sm font-semibold">{date}</h4>
                            <p className="mt-1 leading-6 font-normal sm:text-sm text-xs">{description}</p>

                        </motion.div>
                        <motion.div
                            className="relative col-start-5 col-end-6 mr-7 md:mx-auto"
                            initial={{opacity: 0, y:50}}
                            animate={{opacity: 1, y:0}}
                        >
                            <div className="flex items-center justify-center w-6 h-full">
                                <div
                                    className="w-1 h-full bg-gray-300 dark:bg-[#54626F]">
                                </div>
                            </div>
                            <div className="absolute w-[40px] h-[40px] sm:w-[60px] sm:h-[60px]
                                 -mt-6 sm:-ml-4 -ml-2 flex justify-center items-center bg-white
                                   border-2 border-gray-300 text-2xl dark:bg-gray-700
                                    dark:border-white/60 dark:text-white/60 rounded-full top-1/2"
                                 aria-label={`Icon for ${title}`}
                            >{icon}</div>
                        </motion.div>
                    </div>
                }

                {
                    isOdd &&

                    <div className="flex md:contents ">
                        <motion.div
                            className="relative col-start-5 col-end-6 mr-7 md:mx-auto "
                            initial={{opacity: 0, y:50}}
                            animate={{opacity: 1, y:0}}
                        >
                            <div className="flex items-center justify-center w-6 h-[118%]">
                                <div className="w-1 h-full bg-gray-300 dark:bg-[#54626F]"></div>
                            </div>
                            <div
                                className="absolute w-[40px] h-[40px] sm:w-[60px] sm:h-[60px]
                                 -mt-6 sm:-ml-4 -ml-2 flex justify-center items-center bg-white
                                   border-2 border-gray-300 text-2xl dark:bg-gray-700
                                    dark:border-white/60 dark:text-white/60 rounded-full top-1/2">{icon}</div>
                        </motion.div>
                        <motion.div
                            ref={ref}
                            className="relative p-4 my-6
                         col-start-6 col-end-10 mr-auto text-gray-800 text-left
                         bg-[#f3f4f6] border border-solid border-gray-300
                         rounded-2xl dark:bg-gray-700 dark:border-gray-600 dark:text-white/75 flex flex-col gap-2"
                            animate={{
                                opacity: isVisible ? 1 : 0,
                                x: isVisible ? 0 : 20,
                                transition: {duration: 0.5, ease: "easeInOut"},
                            }}
                            initial={{opacity: 0, x: 40}}
                        >
                            <h3 className="text-lg font-semibold lg:text-xl">{title}</h3>
                            <h4 className="text-lg font-normal ">{location}</h4>
                            <a href={link} target="_blank" rel="noopener noreferrer"
                               className="text-blue-400">{company}</a>
                            <h4 className="text-sm font-semibold">{date}</h4>
                            <p className="mt-2 leading-6 ">{description}</p>

                        </motion.div>
                    </div>
                }

            </div>
        </div>
    );
};

export default Timeline;

