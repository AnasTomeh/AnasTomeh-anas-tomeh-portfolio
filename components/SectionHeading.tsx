"use client"

import React from "react";
import { motion } from "framer-motion";

type SectionHeadingProps = {
    children: React.ReactNode;
};

const SectionHeading: React.FC<SectionHeadingProps> = ({ children }) => {
    const headingVariants = {
        hidden: { opacity: 0, y: 10 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
    };

    return (
        <motion.h2
            className="text-3xl font-medium mb-8"
            role="heading"
            aria-level={2}
            variants={headingVariants}
            initial="hidden"
            animate="visible"
        >
            {children}
        </motion.h2>
    );
};

export default SectionHeading;
