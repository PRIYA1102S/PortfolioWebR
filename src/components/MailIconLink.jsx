// 

// src/components/MailIconLink.jsx
import { IoMdMail } from 'react-icons/io';

const MailIconLink = () => {
    // Function to handle click event that scrolls to the contact section
    const handleClick = () => {
        const contactSection = document.getElementById('contact');
        contactSection.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <div className="fixed top-0 right-0 px-6 py-4">
            <button
                onClick={handleClick}
                className="flex items-center text-xl focus:outline-none"
                aria-label="Contact Us"
            >
                <IoMdMail className="h-6 w-6 text-custom-gray hover:text-custom-gray" />
                <span className="ml-2 text-sm font-semibold text-custom-gray hover:text-custom-gray">DM ME</span>
            </button>
        </div>
    );
};

export default MailIconLink;
