import React from 'react';
import type { Project } from '../types';
import './Projects.css';

const imagePath = (fileName: string) => `${import.meta.env.BASE_URL}images/${fileName}`;

const Projects: React.FC = () => {
  const projects: Project[] = [
    {
      id: '1',
      title: 'Card Simulator',
      description: 'Desktop card-game simulator with gameplay analytics and performance tracking.',
      technologies: ['React', 'TypeScript', 'Vite', 'Tailwind CSS', 'Mantine UI'],
      // githubUrl: 'https://github.com/quyenxhuynh/electron-forge-template',
      imageUrl: imagePath('card-simulation.png'),
      emoji: '⚡'
    },
    {
      id: '2',
      title: 'AI Connect Four',
      description: 'Connect Four game with a minimax + alpha-beta AI opponent for strategic play.',
      technologies: ['Python', 'AI/ML', 'Minimax Algorithm', 'Game Theory'],
      githubUrl: 'https://github.com/quyenxhuynh/ai-connect4',
      imageUrl: imagePath('ai-connect4.png'),
      emoji: ''
    },
    {
      id: '3',
      title: 'Wordle Replica',
      description: 'Polished Wordle clone with faithful mechanics and additional quality-of-life features.',
      technologies: ['JavaScript', 'HTML/CSS', 'Game Logic', 'Responsive Design'],
      githubUrl: 'https://github.com/quyenxhuynh/wordle-replica',
      imageUrl: imagePath('wordle-replica.png'),
      emoji: '🖋️'
    },
    {
      id: '4',
      title: 'Finder',
      description: 'Interest-matching web app designed to help users discover shared activities.',
      technologies: ['HTML', 'CSS', 'JavaScript', 'Web Development'],
      githubUrl: 'https://github.com/quyenxhuynh/finder',
      imageUrl: imagePath('finder.png'),
      emoji: '🔍'
    },
    {
      id: '5',
      title: 'invit.io',
      description: 'Event invitation and management platform with scheduling and attendee workflows.',
      technologies: ['PHP', 'Web Development', 'Database Design'],
      githubUrl: 'https://github.com/quyenxhuynh/invit.io',
      imageUrl: imagePath('invit-io.png'),
      emoji: '🎉'
    },
    {
      id: '6',
      title: 'MCU Database',
      description: 'Relational database project for exploring and querying Marvel universe data.',
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
          <h2 className="section-title">Projects</h2>
        </div>
        
        <div className="projects-grid">
          {projects.map((project) => (
            <div key={project.id} className="project-card">
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
                <div className="project-overlay">
                  <div className="project-links">
                    {project.liveUrl && (
                      <a 
                        href={project.liveUrl} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="project-link project-link--live"
                      >
                        Live Demo
                      </a>
                    )}
                    {project.githubUrl && (
                      <a 
                        href={project.githubUrl} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="project-link project-link--github"
                      >
                        View Code
                      </a>
                    )}
                  </div>
                </div>
              </div>
              
              <div className="project-content">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>
                
                <div className="project-technologies">
                  {project.technologies.map((tech, idx) => (
                    <span key={idx} className="tech-tag">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;