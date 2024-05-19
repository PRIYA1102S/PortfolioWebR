import PropTypes from 'prop-types';

function SkillCard({ skill, proficiency, logoUrl }) {
    return (
        <div className="relative w-32 h-32">
            <img src={logoUrl} alt={skill} className="w-full h-full object-cover rounded-full" />
            <div className="absolute inset-0 bg-custom-gray bg-opacity-75 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300 object-cover rounded-full">
                <span className="text-black text-xl font-semibold">{proficiency}%</span>
            </div>
        </div>
    );
}

SkillCard.propTypes = {
    skill: PropTypes.string.isRequired,
    proficiency: PropTypes.number.isRequired,
    logoUrl: PropTypes.string.isRequired
};

export default SkillCard;
