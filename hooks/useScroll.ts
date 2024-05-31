import React, { useEffect } from 'react';

interface UseScrollOptions {
    onVisible?: () => void;
    onHidden?: () => void;
}

interface UseScrollResult {
    isVisible: boolean;
}

const useScroll = (ref: React.RefObject<HTMLElement>, options: UseScrollOptions = {}): UseScrollResult => {
    const { onVisible, onHidden } = options;
    const [isVisible, setIsVisible] = React.useState(false);

    const handleScroll = () => {
        if (ref.current) {
            const rect = ref.current.getBoundingClientRect();
            const elementIsVisible = rect.top <= window.innerHeight && rect.bottom > 0;

            if (elementIsVisible !== isVisible) {

                setIsVisible(elementIsVisible);

                if (elementIsVisible && onVisible) {
                    onVisible();
                } else if (!elementIsVisible && onHidden) {
                    onHidden();
                }
            }
            else {
                setIsVisible(false)
            }
        }
    };

    useEffect(() => {
        const cleanup = () => {

            setIsVisible(false);
        };

        handleScroll();

        window.addEventListener('scroll', handleScroll);

        return () => {
            cleanup();
            window.removeEventListener('scroll', handleScroll);
        };
    }, [ref, onVisible, onHidden]);

    return { isVisible };
};

export default useScroll;
