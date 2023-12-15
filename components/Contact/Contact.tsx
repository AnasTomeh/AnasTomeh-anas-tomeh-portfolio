"use client";

import { BsLinkedin, BsWhatsapp } from "react-icons/bs";
import { MdOutlineEmail } from "react-icons/md";
import SectionHeading from "@/components/SectionHeading";
import { motion } from "framer-motion";

const Contact = () => {
    return (
        <motion.section
            id="contact"
            className="flex flex-col justify-center items-center mt-8 gap-6"
            initial={{
                opacity: 0,
            }}
            whileInView={{
                opacity: 1,
            }}
            transition={{
                duration: 1,
            }}
            viewport={{
                once: true,
            }}
        >
            <SectionHeading >Contact Me</SectionHeading>
            <p className="text-gray-700 -mt-6 dark:text-white/80">
                Got a question, opportunity, or just want to say hi? Feel free to contact me 😃
            </p>
           <div className="flex flex-col  mt-2 mb-20 gap-6">
               <div className="flex text-lg sm:text-xl items-center gap-2">
                   <a
                       className="contactIcon text-[#DB4437]"
                       href="mailto:eng.anas.tomeh@gmail.com"
                       target="_blank"
                       rel="noopener noreferrer"
                       aria-label="Email Anas Tomeh"
                       title="Email"
                   >
                       <MdOutlineEmail size={30}/>

                   </a>
                   <span >eng.anas.tomeh@gmail.com</span>

               </div>

               <div className="flex text-lg sm:text-xl items-center gap-2">
                   <a
                       className="contactIcon text-[#25D366]"
                       href="https://wa.me/970569116481"
                       target="_blank"
                       rel="noopener noreferrer"
                       aria-label="WhatsApp Anas Tomeh"
                       title="Whatsapp"
                   >
                       <BsWhatsapp size={30}/>
                   </a>
                   <span >+970-569-116481</span>

               </div>

               <div className="flex text-lg sm:text-xl items-center gap-2">
                   <a
                       className="contactIcon text-[#0a66c2]"
                       href="https://www.linkedin.com/in/anas-tomeh/"
                       target="_blank"
                       rel="noopener noreferrer"
                       aria-label="LinkedIn Profile of Anas Tomeh"
                       title="LinkedIn"
                   >
                       <BsLinkedin size={30}/>
                   </a>
                   <span >Anas Tomeh</span>

               </div>
           </div>

        </motion.section>
    );
};

export default Contact;
