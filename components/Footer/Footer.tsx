

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="flex flex-col gap-2 mb-10 mt-20 text-center text-gray-500" role="content-info">
            <small className="mb-2 block text-sm">
                &copy; {currentYear} All rights reserved.
            </small>
            <p className="mb-2 block text-sm">
                Designed and Developed by{" "}
                <span className="font-semibold">Anas Tomeh</span>
            </p>

        </footer>
    );
};

export default Footer;
