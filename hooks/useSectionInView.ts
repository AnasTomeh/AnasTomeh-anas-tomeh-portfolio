import { useState, useEffect } from 'react';
import {links} from "@/lib/data";

type Link = typeof links[number];

const useSectionInView = (links: readonly Link[]) => {
    const [activeSection, setActiveSection] = useState<string>('Home');

    useEffect(() => {
        const handleScroll = () => {

            const visibleSection = links.find((link: Link) => {
                const targetElement = document.querySelector(link.hash);

                if (targetElement) {
                    const { top, bottom } = targetElement.getBoundingClientRect();
                    const middleOfViewport = window.innerHeight / 2;

                    return top < middleOfViewport && bottom > middleOfViewport;
                }
                return false;
            });

            if (visibleSection) {
                setActiveSection(visibleSection.name);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [links]);

    return activeSection;
};

export default useSectionInView;
