import React from 'react';
import type { Project } from '../types';
import './Projects.css';

const imagePath = (fileName: string) => `${import.meta.env.BASE_URL}images/${fileName}`;

const Projects: React.FC = () => {
  const projects: Project[] = [
    {
      id: '1',
      title: 'Card Simulator',
      description: 'My desktop card-game simulator pairs playing a hand with looking at the numbers: gameplay analytics and performance tracking.',
      technologies: ['React', 'TypeScript', 'Vite', 'Tailwind CSS', 'Mantine UI'],
      // githubUrl: 'https://github.com/quyenxhuynh/electron-forge-template',
      imageUrl: imagePath('card-simulation.png'),
      emoji: '⚡'
    },
    {
      id: '2',
      title: 'AI Connect Four',
      description: 'My take on Connect Four, with an AI opponent that searches ahead using minimax and alpha-beta pruning.',
      technologies: ['Python', 'AI/ML', 'Minimax Algorithm', 'Game Theory'],
      githubUrl: 'https://github.com/quyenxhuynh/ai-connect4',
      imageUrl: imagePath('ai-connect4.png'),
      emoji: ''
    },
    {
      id: '3',
      title: 'Wordle Replica',
      description: 'My recreation of Wordle, bringing together word-game logic, familiar mechanics, and a responsive interface.',
      technologies: ['JavaScript', 'HTML/CSS', 'Game Logic', 'Responsive Design'],
      githubUrl: 'https://github.com/quyenxhuynh/wordle-replica',
      imageUrl: imagePath('wordle-replica.png'),
      emoji: '🖋️'
    },
    {
      id: '4',
      title: 'Finder',
      description: 'A web project built around a simple idea: help people find activities they have in common.',
      technologies: ['HTML', 'CSS', 'JavaScript', 'Web Development'],
      githubUrl: 'https://github.com/quyenxhuynh/finder',
      imageUrl: imagePath('finder.png'),
      emoji: '🔍'
    },
    {
      id: '5',
      title: 'invit.io',
      description: 'An event-planning project that brings invitations, scheduling, and keeping track of attendees into one place.',
      technologies: ['PHP', 'Web Development', 'Database Design'],
      githubUrl: 'https://github.com/quyenxhuynh/invit.io',
      imageUrl: imagePath('invit-io.png'),
      emoji: '🎉'
    },
    {
      id: '6',
      title: 'MCU Database',
      description: 'A little Marvel, a little SQL. This project puts a relational database behind exploring and querying the Marvel universe.',
      technologies: ['JavaScript', 'Database Systems', 'SQL', 'Web Development'],
      githubUrl: 'https://github.com/quyenxhuynh/mcu',
      imageUrl: imagePath('mcu-database.png'),
      emoji: '🦸'
    }
  ];

  return (
    <section id="projects" className="projects">
      <div className="projects__container">
        <div className="projects__header">
          <div>
            <p className="section-label">05 / Selected projects</p>
            <h2 className="section-title">Things I've built</h2>
          </div>
          <p className="projects__intro">
            Not everything here is enterprise AI. There are games, tools for
            bringing people together, and a trip into the Marvel universe.
          </p>
        </div>
        
        <div className="projects-grid">
          {projects.map((project, index) => (
            <article key={project.id} className="project-card">
              <div className="project-image">
                {project.imageUrl ? (
                  <img 
                    src={project.imageUrl} 
                    alt={project.title}
                    loading="lazy"
                    decoding="async"
                    width={800}
                    height={450}
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.style.display = 'none';
                      if (target.nextSibling) {
                        (target.nextSibling as HTMLElement).style.display = 'flex';
                      }
                    }}
                    className="project-image-img"
                  />
                ) : null}
                <div className="project-image-placeholder" style={{display: project.imageUrl ? 'none' : 'flex'}}>
                  {project.emoji || '🚀'}
                </div>
              </div>
              
              <div className="project-content">
                <div className="project-heading">
                  <span className="project-number" aria-hidden="true">{String(index + 1).padStart(2, '0')}</span>
                  <h3 className="project-title">{project.title}</h3>
                </div>
                <p className="project-description">{project.description}</p>
                
                <div className="project-technologies">
                  {project.technologies.map((tech, idx) => (
                    <span key={idx} className="tech-tag">
                      {tech}
                    </span>
                  ))}
                </div>
                {(project.liveUrl || project.githubUrl) && (
                  <div className="project-links">
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="project-link"
                        aria-label={`Live demo of ${project.title} (opens in a new tab)`}
                      >
                        Live demo <span aria-hidden="true">&nearr;</span>
                      </a>
                    )}
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="project-link"
                        aria-label={`View code for ${project.title} (opens in a new tab)`}
                      >
                        View code <span aria-hidden="true">&nearr;</span>
                      </a>
                    )}
                  </div>
                )}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;