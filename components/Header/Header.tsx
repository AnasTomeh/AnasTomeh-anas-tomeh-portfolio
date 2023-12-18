"use client"
import { motion } from 'framer-motion';
import { links } from "@/lib/data";
import Link from "next/link";
import React from "react";
import useSectionInView from "@/hooks/useSectionInView";
import ThemeSwitch from "@/components/ThemeSwitch/ThemeSwitch";
import {trackEvent} from "@/utils/analyticsUtils";

type Link = typeof links[number];

const Header: React.FC = () => {
    const activeSection = useSectionInView(links);

    const handleLinkClick = (link: Link) => {

        trackEvent({
            action: 'header_link_click',
            category: 'Navigation',
            label: link.name,
        });
    };

    return (
        <header className="z-[999] relative">
            <ThemeSwitch/>
            <motion.div
                className="fixed top-0 left-1/2 h-[4.5rem] w-full rounded-none border border-white border-opacity-40 bg-white bg-opacity-80 shadow-lg shadow-black/[0.03] backdrop-blur-[0.5rem] sm:top-6 sm:h-[3.25rem] sm:w-[36rem] sm:rounded-full dark:bg-gray-950 dark:border-black/40 dark:bg-opacity-75"
                initial={{ y: -100, x: '-50%', opacity: 0 }}
                animate={{ y: 0, x: '-50%', opacity: 1 }}
            >
                <nav className="flex fixed top-[0.15rem] left-1/2 h-12 -translate-x-1/2 py-2  sm:h-[initial] sm:py-0">
                    <ul className="flex w-[22rem] flex-wrap items-center justify-center gap-y-1 text-[0.9rem] font-medium text-gray-500 sm:w-[initial] sm:flex-nowrap sm:gap-5">
                        {links.map((link: Link) => (
                            <motion.li
                                key={link.hash}
                                className="h-3/4 flex items-center justify-center relative"
                                initial={{ y: -100, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                transition={{
                                    type: 'tween',
                                    duration: 0.2,
                                }}
                            >
                                <Link
                                    href={link.hash}
                                    className={`flex w-full items-center justify-center px-3 py-3 hover:text-gray-950 transition dark:text-gray-500 dark:hover:text-gray-300 ${
                                        activeSection === link.name ? 'text-gray-950 dark:text-gray-200' : ''
                                    }`}
                                    onClick={() => handleLinkClick(link)}
                                >
                                    {link.name}
                                </Link>
                                {link.name === activeSection && (
                                    <motion.span
                                        className="bg-gray-100 rounded-full absolute inset-0 -z-10 dark:bg-gray-800"
                                        layoutId="activeSection"
                                        transition={{
                                            type: 'spring',
                                            stiffness: 380,
                                            damping: 30,
                                        }}
                                    ></motion.span>
                                )}
                            </motion.li>
                        ))}
                    </ul>
                </nav>
            </motion.div>
        </header>
    );
};

export default Header;
