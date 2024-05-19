import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub, faInstagram } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
    return (
        <footer className="w-full py-4 bg-navy-dark">
            <div className="max-w-screen-xl mx-auto px-4">
                <div className="text-center">
                    <div className="flex justify-center space-x-4 mt-2 fixed bottom-0 right-0 px-6 py-4">
                        <a href="https://www.linkedin.com/in/priya-sharma-10baa01b6" target="_blank" rel="noopener noreferrer">
                            <FontAwesomeIcon icon={faLinkedin} className="h-5 w-5 text-custom-gray hover:text-custom-gray transition-colors" />
                        </a>
                        <a href="https://github.com/PRIYA1102S" target="_blank" rel="noopener noreferrer">
                            <FontAwesomeIcon icon={faGithub} className="h-5 w-5 text-custom-gray hover:text-custom-gray transition-colors" />
                        </a>
                        <a href="https://www.instagram.com/_.priya_.s?igsh=MWR4ZTB6OGsyNzI3OA==" target="_blank" rel="noopener noreferrer">
                            <FontAwesomeIcon icon={faInstagram} className="h-5 w-5 text-custom-gray hover:text-custom-gray transition-colors" />
                        </a>
                    </div>
                    <p className="text-sm text-gray-400">© {new Date().getFullYear()} Priya Sharma. All Rights Reserved.</p>
                    <div className="text-sm text-gray-400"><span className="font-bold">About this website : </span>Built with React.js, TypeScript, Tailwind CSS & Vercel hosting.</div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
