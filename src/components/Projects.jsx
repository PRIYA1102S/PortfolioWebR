import { useState, useEffect } from 'react';
import ProjectCard from './ProjectCard';

const projects = [
    {
        title: 'My Portfolio',
        description: 'Developed using React.js and Tailwind CSS.',
        link: '#',
    },
    {
        title: 'Weather APP',
        description: 'Developed using HTML, CSS, and Javascript. It shows how to use the OpenWeather Map API to display current weather details along with humidity and wind speed. It also dynamically changes the background image to reflect the searched location.',
        link: 'https://weather-app-priya1102s.vercel.app/'
    },
    {
        title: 'Personal Portfolio',
        description: 'Developed using HTML, CSS, and Javascript.',
        link: 'https://personal-portfolio-priya1102s.vercel.app/?#projects'
    },
    {
        title: 'DRUM KIT APP',
        description: 'Developed using HTML, CSS, and Javascript. Learn how to play the drum digitally.',
        link: 'https://drum-kit-pi-one.vercel.app/'
    },
];

const Projects = () => {
    const [current, setCurrent] = useState(0);

    useEffect(() => {
        const intervalId = setInterval(() => {
            setCurrent((prevCurrent) => (prevCurrent + 1) % projects.length);
        }, 3000); // Change card every 3000 milliseconds (3 seconds)

        return () => clearInterval(intervalId);
    }, []);

    return (
        <div className="bg-navy-dark min-h-screen flex flex-col items-center justify-center px-4 py-8 pt-12">
            <div className="text-center pt-20 mt-12 mb-8">
                <h1 className="text-4xl font-bold text-sunny-yellow">
                    PROJECTS
                </h1>
            </div>
            <div className="container max-w-4xl p-5 bg-navy-light rounded-lg shadow-xl">
                <div>
                    <div className="transition-opacity duration-500 ease-in-out">
                        <ProjectCard key={projects[current].title} project={projects[current]} />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Projects;
