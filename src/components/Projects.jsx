import React from 'react';
import { useNavigate } from 'react-router-dom';
import projects from '../data/Projects';
import './Projects.css';

const Projects = () => {
  const navigate = useNavigate();

  // const handleProjectClick = (id) => {
  //   navigate(`/projects/${id}`);
  // };

  return (
    <section id="projects">
      <h2>My Projects</h2>
      <div className="projects-grid">
        {projects.map((project) => (
          <div 
            key={project.id} 
            className="project-card"
            //onClick={() => handleProjectClick(project.id)}
          >
            <div className="project-image">
              <img src={project.image} alt={project.title} />
              <div className="project-links">
                {project.github && (
                  <a 
                    href={project.github} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <i className="fab fa-github"></i> Code
                  </a>
                )}
                {project.live && (
                  <a 
                    href={project.live} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <i className="fas fa-external-link-alt"></i> Live
                  </a>
                )}
              </div>
            </div>
            <div className="project-info">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <div className="project-tech">
                {project.technologies.map((tech, index) => (
                  <span key={index}>{tech}</span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;