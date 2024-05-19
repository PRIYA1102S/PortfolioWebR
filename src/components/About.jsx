import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGraduationCap } from '@fortawesome/free-solid-svg-icons';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const textVariants = {
    hidden: {
        x: -500,
        opacity: 0,
    },
    visible: {
        x: 0,
        opacity: 1,
        transition: {
            duration: 1,
            staggerChildren: 0.1,
        },
    },
};

const About = () => {
    // Using the useInView hook to monitor element visibility
    const { ref, inView } = useInView({
        triggerOnce: false,
        threshold: 0.5 // Trigger when 50% visible
    });

    return (
        <div className="bg-navy-dark min-h-screen flex flex-col justify-center items-center ">
            <div className="mt-5 p-8 bg-navy-dark rounded-lg shadow-lg max-w-5xl">
                <motion.div className="max-w-2xl" variants={textVariants} ref={ref} initial="hidden" animate={inView ? 'visible' : 'hidden'}>
                    <motion.h1 variants={textVariants} initial="hidden" animate={inView ? 'visible' : 'hidden'} className="text-4xl font-bold text-center mb-8 text-sunny-yellow">
                        ABOUT ME
                    </motion.h1>
                    <motion.div variants={textVariants} initial="hidden" animate={inView ? 'visible' : 'hidden'} className="text-center text-lg font-medium space-y-6">
                        <motion.p variants={textVariants} initial="hidden" animate={inView ? 'visible' : 'hidden'} className="text-custom-gray">
                            Hi, Folks! I embarked on my programming journey during my academic years at
                            <span className="inline-block ml-2 text-sunny-yellow">
                                <FontAwesomeIcon icon={faGraduationCap} />
                            </span>
                            Banasthali Vidyapith, Jaipur.
                        </motion.p>
                        <motion.p variants={textVariants} initial="hidden" animate={inView ? 'visible' : 'hidden'} className="text-custom-gray">
                            My favorite part of programming is the <span className="text-sunny-yellow">problem-solving</span> aspect. I have an interest in Backend also.
                        </motion.p>
                        <motion.p variants={textVariants} initial="hidden" animate={inView ? 'visible' : 'hidden'} className="text-custom-gray">
                            I am proficient in a variety of analytical tools and languages, including <span className="text-sunny-yellow">Java, C, C++, MySql, PostgreSQL, Postman, SpringBoot, HTML, CSS3, JavaScript, React.js, Git, GitHub, Adobe XD, Figma, and Bootstrap.</span>
                        </motion.p>
                        <motion.p variants={textVariants} initial="hidden" animate={inView ? 'visible' : 'hidden'} className="text-custom-gray">
                            Through hands-on projects and internships, I have honed my abilities in frontend development, demonstrating expertise in coding, algorithm development, and high-performance computing.
                        </motion.p>
                    </motion.div>
                </motion.div>
            </div>
        </div>
    );
}

export default About;
