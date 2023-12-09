import { BsLinkedin, BsWhatsapp } from "react-icons/bs";
import { MdOutlineEmail } from "react-icons/md";

const Contact = () => {
    return (
        <div id="contact" className="flex justify-center items-center py-2 gap-4">
            <h3 className="text-md">Contact Me:</h3>

            <a
                className="contactIcon text-[#DB4437]"
                href="mailto:eng.anas.tomeh@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Email Anas Tomeh"
                title="Email"
            >
                <MdOutlineEmail />
            </a>

            <a
                className="contactIcon text-[#25D366]"
                href="https://wa.me/970569116481"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp Anas Tomeh"
                title="Whatsapp"
            >
                <BsWhatsapp />
            </a>

            <a
                className="contactIcon text-[#0a66c2]"
                href="https://www.linkedin.com/in/anas-tomeh/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn Profile of Anas Tomeh"
                title="LinkedIn"
            >
                <BsLinkedin />
            </a>
        </div>
    );
};

export default Contact;
