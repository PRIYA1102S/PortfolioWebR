
// const Navbar = () => {
//     return (
//         <nav className="pointer-events-auto hidden md:block pt-3">
//             <ul className="flex w-full flex-wrap items-center justify-between px-3 font-bold text-xl">
//                 <li><a href="#about" className="text-custom-gray relative block  gap-6 px-3 py-2 transition hover:text-sunny-yellow dark:hover:text-sunny-yellow">About</a></li>
//                 <li><a href="#skills" className="text-custom-gray relative block gap-6 px-3 py-2 transition hover:text-sunny-yellow dark:hover:text-sunny-yellow">Skills</a></li>
//                 <li><a href="#projects" className="text-custom-gray relative block  gap-6 px-3 py-2 transition hover:text-sunny-yellow dark:hover:text-sunny-yellow">Projects</a></li>
//                 <li><a href="#codingprofiles" className="text-custom-gray relative block gap-6 px-3 py-2 transition hover:text-sunny-yellow dark:hover:text-sunny-yellow">Coding Profiles</a></li>
//                 <li><a href="#experience" className="text-custom-gray relative block gap-6 px-3 py-2 transition hover:text-sunny-yellow dark:hover:text-sunny-yellow">Experience</a></li>
//                 <li><a href="#contact" className="text-custom-gray relative block  gap-6 px-3 py-2 transition hover:text-sunny-yellow dark:hover:text-sunny-yellow">Contact</a></li>
//             </ul>
//         </nav>
//     );
// };

// export default Navbar;

const Navbar = () => {
    return (
        <nav className="pointer-events-auto hidden md:block pt-3">
            <ul className="flex w-full flex-wrap items-center justify-between px-3 font-bold text-xl">
                <li>
                    <a href="#about" className="text-custom-gray relative block px-3 py-2 transition hover:text-sunny-yellow dark:hover:text-sunny-yellow before:content-[''] before:absolute before:inset-x-0 before:bottom-0 before:h-0.5 before:bg-sunny-yellow before:scale-x-0 before:origin-center before:transition-transform hover:before:scale-x-100">
                        About
                    </a>
                </li>
                <li>
                    <a href="#skills" className="text-custom-gray relative block px-3 py-2 transition hover:text-sunny-yellow dark:hover:text-sunny-yellow before:content-[''] before:absolute before:inset-x-0 before:bottom-0 before:h-0.5 before:bg-sunny-yellow before:scale-x-0 before:origin-center before:transition-transform hover:before:scale-x-100">
                        Skills
                    </a>
                </li>
                <li>
                    <a href="#projects" className="text-custom-gray relative block px-3 py-2 transition hover:text-sunny-yellow dark:hover:text-sunny-yellow before:content-[''] before:absolute before:inset-x-0 before:bottom-0 before:h-0.5 before:bg-sunny-yellow before:scale-x-0 before:origin-center before:transition-transform hover:before:scale-x-100">
                        Projects
                    </a>
                </li>
                <li>
                    <a href="#codingprofiles" className="text-custom-gray relative block px-3 py-2 transition hover:text-sunny-yellow dark:hover:text-sunny-yellow before:content-[''] before:absolute before:inset-x-0 before:bottom-0 before:h-0.5 before:bg-sunny-yellow before:scale-x-0 before:origin-center before:transition-transform hover:before:scale-x-100">
                        Coding Profiles
                    </a>
                </li>
                <li>
                    <a href="#experience" className="text-custom-gray relative block px-3 py-2 transition hover:text-sunny-yellow dark:hover:text-sunny-yellow before:content-[''] before:absolute before:inset-x-0 before:bottom-0 before:h-0.5 before:bg-sunny-yellow before:scale-x-0 before:origin-center before:transition-transform hover:before:scale-x-100">
                        Experience
                    </a>
                </li>
                <li>
                    <a href="#contact" className="text-custom-gray relative block px-3 py-2 transition hover:text-sunny-yellow dark:hover:text-sunny-yellow before:content-[''] before:absolute before:inset-x-0 before:bottom-0 before:h-0.5 before:bg-sunny-yellow before:scale-x-0 before:origin-center before:transition-transform hover:before:scale-x-100">
                        Contact
                    </a>
                </li>
            </ul>
        </nav>
    );
};

export default Navbar;
