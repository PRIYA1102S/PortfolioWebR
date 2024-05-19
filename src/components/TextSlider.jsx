import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';


const TextSlider = ({ texts, interval = 3000 }) => {
    const [current, setCurrent] = useState(0);

    useEffect(() => {
        const id = setInterval(() => {
            setCurrent((current) => (current + 1) % texts.length);
        }, interval);

        return () => clearInterval(id);
    }, [texts.length, interval]);

    return (
        <div className="flex justify-center items-center h-16">
            <p className="text-center font-bold text-4xl">{texts[current]}</p>
        </div>
    );
};

TextSlider.propTypes = {
    texts: PropTypes.arrayOf(PropTypes.string).isRequired,
    interval: PropTypes.number,
};

export default TextSlider;
