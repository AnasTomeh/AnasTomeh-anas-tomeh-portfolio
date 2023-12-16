"use client"

import Image from "next/image";
import myImage from '@/public/anas-image.jpg'
import { motion } from 'framer-motion';
import Link from "next/link";
import {BsArrowRight, BsLinkedin} from "react-icons/bs";
import {FaGithubSquare} from "react-icons/fa";
import {LuExternalLink} from "react-icons/lu";


const Intro = () => {

    return (
        <section
            id="home"
            role="region"
            aria-labelledby="intro-heading"
            className="mb-28 max-w-[50rem] text-center sm:mb-0 mt-20 md:mt-15 scroll-mt-[100rem]"
        >
           <div className="flex items-center justify-center">
               <div className="relative">
                   <motion.div
                   initial={{opacity: 0, scale: 0}}
                   animate={{opacity: 1, scale: 1}}
                   >
                       <Image
                           src={myImage}
                           alt={'Anas Tomeh - Front-End Engineer Image'}
                           className=" rounded-full object-cover border-[0.35rem] border-white shadow-xl"
                           width={150}
                           height={150}
                           priority={true}
                       />
                   </motion.div>

               </div>
           </div>

            <motion.h1
                id="intro-heading"
                className="mb-10 mt-4 px-4 sm:text-2xl font-medium !leading-[1.5] md:text-2xl "
                initial={{opacity: 0, y:100}}
                animate={{opacity: 1, y:0}}
            >

                <span className="font-bold">Hello, I'm Anas.</span> I'm a skilled, quick learner{" "}
                <span className="font-bold">Front-End Engineer.</span><br/>
                Dedicated to{" "}
                <span className="underline">changing great ideas into innovative digital solutions {" "}</span>
                using several front-end tools mainly {" "}
                <span className="italic"> React.js.</span> {" "}passionate about {" "} <span className="font-bold">learning and improvement</span>

            </motion.h1>

            <motion.div className="flex flex-col sm:flex-row items-center justify-center gap-2 px-4 text-lg font-medium"
                        initial={{opacity: 0, y:100}}
                        animate={{opacity: 1, y:0}}
                        transition={{
                            delay: 0.2,
                        }}
            >
                <Link
                    href={"#contact"}
                    passHref
                    role="button"
                    aria-label="Contact Me"
                className="group bg-gray-900 text-white px-7 py-3 flex items-center gap-2 rounded-full outline-none hover:scale-110 hover:bg-gray-950 active:scale-105 transition"
                >
                   Contact me here <BsArrowRight className="opacity-70 group-hover:translate-x-2 transition"/>
                </Link>
                <a
                    role="link"
                    aria-label="Download CV"
                    href={'https://drive.google.com/file/d/1NDtgG6-sDMbQM3bYfT7Pvb14SfKHPi_1/view?usp=drive_link'}
                    target="_blank"
                    className="group bg-white p-8 text-gray-700  py-3 flex items-center gap-2 rounded-full outline-none hover:scale-110 active:scale-105 transition cursor-pointer border border-black/10 dark:bg-white/10 dark:text-gray-200"

                >
                    My CV <LuExternalLink className="opacity-60 group-hover:-translate-y-1 transition"/>
                </a>

                <div className='flex gap-3'>
                    <a className="bg-white p-4 text-gray-700 flex items-center gap-2 rounded-full  hover:scale-[1.15] active:scale-[1.15] hover:text-gray-950 transition cursor-pointer border border-black/10 dark:bg-white/10 dark:text-gray-200"
                       href={"https://www.linkedin.com/in/anas-tomeh/"}
                       rel="noopener noreferrer"
                       target="_blank"
                       role="link"
                       aria-label="LinkedIn Profile"
                    >
                        <BsLinkedin/>
                    </a>

                    <a className="bg-white p-4 text-gray-700 flex items-center gap-2 rounded-full  hover:scale-[1.15] active:scale-[1.15] hover:text-gray-950 transition cursor-pointer border border-black/10 dark:bg-white/10 dark:text-gray-200"
                       href={"https://github.com/AnasTomeh"}
                       target="_blank"
                       rel="noopener noreferrer"
                       role="link"
                       aria-label="GitHub Profile"
                    >
                        <FaGithubSquare/>
                    </a>
                </div>

            </motion.div>
        </section>
    )
}

export default Intro;