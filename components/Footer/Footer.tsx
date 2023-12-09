import Contact from "@/components/Footer/Contact/Contact";

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer
            className="flex flex-col p-3 sm:flex-row justify-around h-full items-center px-4 text-center text-gray-800 bg-[#dbd7fb] dark:bg-gray-950/20 dark:text-gray-200"
            role="contentinfo"
        >
            <small className="text-sm mb-2 lg:mb-0 lg:mr-4">
                &copy; {currentYear} All rights reserved.
            </small>
            <p className="text-sm lg:ml-4">
                Designed and Developed by{" "}
                <span className="font-semibold">Anas Tomeh</span>
            </p>
            <Contact />
        </footer>
    );
};

export default Footer;
