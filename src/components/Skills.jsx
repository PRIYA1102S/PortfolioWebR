import SkillCard from './SkillCard';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const containerVariants = {
    hidden: {
        opacity: 0,
        x: -100
    },
    visible: {
        opacity: 1,
        x: 0,
        transition: {
            duration: 0.5,
            when: "beforeChildren",
            staggerChildren: 0.1
        }
    }
};

const itemVariants = {
    hidden: {
        x: -10,
        opacity: 0
    },
    visible: {
        x: 0,
        opacity: 1,
        transition: {
            duration: 0.5
        }
    }
};

const Skills = () => {
    const { ref, inView } = useInView({
        triggerOnce: false,  // Now it will trigger every time the element comes into view
        threshold: 0.3        // Triggers when 30% of the element is visible
    });

    const skills = [
        { name: "C", proficiency: 80, logoUrl: './c.png' },
        { name: "C++", proficiency: 80, logoUrl: './icons8-c++-48.png' },
        { name: "Java", proficiency: 70, logoUrl: './icons8-java-48.png' },
        { name: "MySQL", proficiency: 80, logoUrl: './sql.png' },
        { name: "HTML5", proficiency: 80, logoUrl: './icons8-html-5-48.png' },
        { name: "CSS3", proficiency: 80, logoUrl: './icons8-css3-48.png' },
        { name: "Javascript", proficiency: 70, logoUrl: './icons8-javascript-48.png' },
        { name: "React.js", proficiency: 75, logoUrl: './react.png' },
        { name: "TailwindCss", proficiency: 60, logoUrl: './icons8-tailwind-css-48.png' },
        { name: "AdobeXD", proficiency: 80, logoUrl: './icons8-adobe-xd-48.png' },
        { name: "Figma", proficiency: 80, logoUrl: './icons8-figma-48.png' },
    ];

    return (
        <motion.div ref={ref} variants={containerVariants} initial="hidden" animate={inView ? "visible" : "hidden"}
            className="bg-navy-dark min-h-screen flex flex-col items-center pt-12">
            <motion.h1 variants={itemVariants} className="text-4xl font-bold text-sunny-yellow mb-4">
                SKILLS
            </motion.h1>
            <motion.p variants={itemVariants} className="text-custom-gray mb-8">
                HOVER OVER A SKILL FOR CURRENT PROFICIENCY
            </motion.p>
            <motion.div variants={containerVariants} className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 px-4 mt-8">
                {skills.map(skill => (
                    <SkillCard key={skill.name} skill={skill.name} proficiency={skill.proficiency} logoUrl={skill.logoUrl} />
                ))}
            </motion.div>
        </motion.div>
    );
};

export default Skills;

