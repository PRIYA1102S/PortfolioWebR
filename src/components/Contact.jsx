
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMobileAlt, faEnvelope, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
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

function Contact() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });
    const [errors, setErrors] = useState({});
    const [isLoading, setIsLoading] = useState(false);

    // Using the useInView hook to monitor element visibility
    const { ref, inView } = useInView({
        triggerOnce: false,
        threshold: 0.5 // Trigger when 50% visible
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!validateForm()) {
            return;
        }

        setIsLoading(true);
        console.log('Form Data Submitted:', formData);

        setTimeout(() => {
            setIsLoading(false);
            alert('Form submitted successfully!');
            resetForm();
        }, 2000);
    };

    const resetForm = () => {
        setFormData({
            name: '',
            email: '',
            subject: '',
            message: ''
        });
    };

    const validateForm = () => {
        let valid = true;
        let errors = {};

        if (!formData.name) {
            errors.name = 'Name is required';
            valid = false;
        }
        if (!formData.email) {
            errors.email = 'Email is required';
            valid = false;
        }
        if (!formData.subject) {
            errors.subject = 'Subject is required';
            valid = false;
        }

        setErrors(errors);
        return valid;
    };

    return (
        <div className="bg-navy-dark min-h-screen flex flex-col items-center justify-center pt-12">
            <motion.div className="text-center" variants={textVariants} ref={ref} initial="hidden" animate={inView ? 'visible' : 'hidden'}>
                <motion.h1 className="text-4xl font-bold pt-20 mt-12 mb-5 text-sunny-yellow" variants={textVariants}>
                    CONTACT
                </motion.h1>
                <motion.h2 className="text-custom-gray text-2xl" variants={textVariants} initial="initial" animate="animate">
                    Questions? {"Let's Talk!"}
                </motion.h2>
                <motion.div className="space-y-4 mt-10" variants={textVariants} initial="initial" animate="animate">
                    {/* Mobile Number */}
                    <motion.div className="flex font-bold justify-center items-center text-sunny-yellow" variants={textVariants} initial="initial" animate="animate">
                        <FontAwesomeIcon icon={faMobileAlt} className="mr-2" />
                        <span className="text-custom-gray">+91 8114455640</span>
                    </motion.div>

                    {/* Email Address */}
                    <motion.div className="flex font-bold justify-center items-center text-sunny-yellow" variants={textVariants} initial="initial" animate="animate">
                        <FontAwesomeIcon icon={faEnvelope} className="mr-2" />
                        <span className="text-custom-gray">ps7701124@gmail.com</span>
                    </motion.div>

                    {/* Location */}
                    <motion.div className="flex font-bold justify-center items-center text-sunny-yellow" variants={textVariants} initial="initial" animate="animate">
                        <FontAwesomeIcon icon={faMapMarkerAlt} className="mr-2" />
                        <span className="text-custom-gray">Police Quarters, No.165 Gayatri Mandir Road, Alwar (Rajasthan)</span>
                    </motion.div>
                </motion.div>
            </motion.div>
            <motion.div className="flex flex-col items-center justify-center p-4" variants={textVariants} ref={ref} initial="hidden" animate={inView ? 'visible' : 'hidden'}>
                <form className="w-full max-w-lg" onSubmit={handleSubmit}>
                    <motion.div className="flex flex-wrap -mx-3 mb-6" variants={textVariants} initial="initial" animate="animate">
                        <motion.div className="w-full px-3 mb-6 md:mb-0" variants={textVariants} initial="initial" animate="animate">
                            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="name">
                                Name
                            </label>
                            <input className={`appearance-none block w-full bg-gray-200 text-gray-700 border ${errors.name ? 'border-red-500' : 'border-gray-200'} rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white`} id="name" type="text" placeholder="Enter your name" name="name" value={formData.name} onChange={handleChange} />
                            {errors.name && <p className="text-red-500 text-xs italic">{errors.name}</p>}
                        </motion.div>
                        <motion.div className="w-full px-3" variants={textVariants} initial="initial" animate="animate">
                            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="email">
                                Email
                            </label>
                            <input className={`appearance-none block w-full bg-gray-200 text-gray-700 border ${errors.email ? 'border-red-500' : 'border-gray-200'} rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white`} id="email" type="email" placeholder="email@example.com" name="email" value={formData.email} onChange={handleChange} />
                            {errors.email && <p className="text-red-500 text-xs italic">{errors.email}</p>}
                        </motion.div>
                    </motion.div>
                    <motion.div className="flex flex-wrap -mx-3 mb-6" variants={textVariants} initial="initial" animate="animate">
                        <motion.div className="w-full px-3" variants={textVariants} initial="initial" animate="animate">
                            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="subject">
                                Subject
                            </label>
                            <input className={`appearance-none block w-full bg-gray-200 text-gray-700 border ${errors.subject ? 'border-red-500' : 'border-gray-200'} rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white`} id="subject" type="text" placeholder="Enter subject" name="subject" value={formData.subject} onChange={handleChange} />
                            {errors.subject && <p className="text-red-500 text-xs italic">{errors.subject}</p>}
                        </motion.div>
                    </motion.div>
                    <motion.div className="flex flex-wrap -mx-3 mb-6" variants={textVariants} initial="initial" animate="animate">
                        <motion.div className="w-full px-3" variants={textVariants} initial="initial" animate="animate">
                            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="message">
                                Message
                            </label>
                            <textarea className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="message" rows="4" placeholder="Your message" name="message" value={formData.message} onChange={handleChange}></textarea>
                        </motion.div>
                    </motion.div>
                    <motion.div className="flex flex-wrap -mx-3 mb-6" variants={textVariants} initial="initial" animate="animate">
                        <motion.div className="w-full px-3" variants={textVariants} initial="initial" animate="animate">
                            <button className="shadow bg-sunny-yellow hover:bg-sunny-yellow focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded" type="submit" disabled={isLoading}>
                                {isLoading ? 'Sending...' : 'Send Message'}
                            </button>
                        </motion.div>
                    </motion.div>
                </form>
            </motion.div>
        </div>
    );
}

export default Contact;
