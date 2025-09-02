interface Project {
    title: string;
    description: string;
    technologies: string[];
    image: string;
    link: string;
}

function ProjectContainer({ project }: { project: Project }) {
    return (
        <div className="project">
            <h3 className="project-title">{project.title}</h3>
            <a href={project.link} target="_blank" rel="noopener noreferrer">
                <img loading="lazy" className="project-image" src={project.image} alt={project.title} />
            </a>
            <div className="project-info">
                <p>{project.description}</p>
                <br />
                <p className="project-technologies">Technologies: </p>
                <p>{project.technologies.join(", ")}</p>
                <a href={project.link} target="_blank" rel="noopener noreferrer">View Project <span className="arrow-icon">→</span></a>
            </div>
        </div>
    )
}

export default ProjectContainer;