import React from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import PropTypes from 'prop-types';

const experiences = [
    {
        id: 1,
        title: "DC Analyst",
        company: "Deloitte USI",
        duration: "Oct 2023 - May 2024",
        description: "Trained in Java, Java Core, Spring Boot, MySql, PostgreSQL, and Postman. As a backend developer, I worked on a mock project in which I used Postman, PostgreSQL, Git, Github, Java Core, and Springboot to implement CRUD operations and access APIs.",
    },
    {
        id: 2,
        title: "Frontend Developer Intern",
        company: "Kabadi Techno Private Limited",
        duration: "Jan 2023 - Jun 2023",
        description: "Developed a React.Js website utilizing hooks, fragments, and other React functionalities. Designed UI using Figma and integrated APIs across pages using AXIOS and Fetch. The website features an About Us, Join Us, Contact Us, FAQs, Forms, Sell Page, and an image slider.",
    },
    {
        id: 3,
        title: "Web Development Intern",
        company: "STUDIESZONE",
        duration: "Jun 2022 - Aug 2022",
        description: "Designed UI for Job Portals, including homepage, sign up, sign in, and user dashboard, using AdobeXD. Created a Frontend component for the EdTech platform using HTML, CSS, and Javascript, which comprises the Homepage, About Us, and Courses pages.",
    },
];

const ExperienceItem = ({ exp, index }) => {
    const controls = useAnimation();
    const { ref, inView } = useInView({
        triggerOnce: false,
        threshold: 0.5 // Adjust this value as needed to control when the animation triggers
    });

    React.useEffect(() => {
        if (inView) {
            controls.start("visible");
        } else {
            controls.start("hidden");
        }
    }, [inView, controls]); // Added controls to dependency array

    const variants = {
        visible: { opacity: 1, x: 0, transition: { type: 'spring', duration: 0.5 } },
        hidden: { opacity: 0, x: index % 2 === 0 ? -100 : 100 },
    };

    return (
        <motion.div
            ref={ref}
            initial="hidden"
            animate={controls}
            variants={variants}
            className={`relative w-full flex ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'} my-10 items-center`}
        >
            <div className="w-1/2 px-4">
                <div className="border-l-4 pl-4 border-sunny-yellow">
                    <h3 className="text-2xl font-bold text-sunny-yellow">{exp.title}</h3>
                    <p className="text-md text-gray-300 mb-2">{exp.company}</p>
                    <p className="text-sm text-gray-500">{exp.duration}</p>
                </div>
            </div>
            <div className="w-1/2 px-4 pb-8">
                <p className="text-custom-gray">{exp.description}</p>
            </div>
        </motion.div>
    );
};

// Defining prop types for ExperienceItem
ExperienceItem.propTypes = {
    exp: PropTypes.shape({
        title: PropTypes.string.isRequired,
        company: PropTypes.string.isRequired,
        duration: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired
    }).isRequired,
    index: PropTypes.number.isRequired
};

const Experience = () => {
    return (
        <div className="bg-navy-dark min-h-screen flex flex-col items-center justify-center pt-20">
            <div className="text-center space-y-4">
                <h1 className="text-5xl pt-20 font-bold text-sunny-yellow drop-shadow-lg animate-pulse">EXPERIENCE</h1>
                <h3 className="text-xl text-gray-300 italic">My professional timeline</h3>
            </div>

            <div className="relative w-full max-w-4xl px-4 py-10">
                {experiences.map((exp, index) => (
                    <ExperienceItem exp={exp} index={index} key={exp.id} />
                ))}
            </div>
        </div>
    );
};

export default Experience;
