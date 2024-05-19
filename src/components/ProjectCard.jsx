import PropTypes from 'prop-types';

function ProjectCard({ project }) {
    return (
        <div className="my-4 pt-8 opacity-0 animate-fadeIn">
            <h5 className="text-2xl font-bold text-bluei mb-2">{project.title}</h5>
            <p className="text-custom-gray mb-2">{project.description}</p>
            <a href={project.link} className="text-sunny-yellow hover:text-sunny-yellow text-sm font-medium mb-8">View Project</a>
        </div>
    );
}

ProjectCard.propTypes = {
    project: PropTypes.shape({
        title: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
        link: PropTypes.string.isRequired
    }).isRequired
};

export default ProjectCard;

