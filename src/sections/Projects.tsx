import React from 'react';
import type { Project } from '../types';
import './Projects.css';

const Projects: React.FC = () => {
  const projects: Project[] = [
    {
      id: '1',
      title: 'Card Simulator',
      description: 'A web-based card game simulator built with Electron, React, and TypeScript. Features include tracking card statistics and user performance.',
      technologies: ['React', 'TypeScript', 'Vite', 'Tailwind CSS', 'Mantine UI'],
      // githubUrl: 'https://github.com/quyenxhuynh/electron-forge-template',
      imageUrl: '/images/card-simulation.png',
      emoji: '⚡'
    },
    {
      id: '2',
      title: 'AI Connect Four',
      description: 'Intelligent Connect Four game with AI opponent using minimax algorithm with alpha-beta pruning. CS 4710 (Artificial Intelligence) course project at UVA.',
      technologies: ['Python', 'AI/ML', 'Minimax Algorithm', 'Game Theory'],
      githubUrl: 'https://github.com/quyenxhuynh/ai-connect4',
      imageUrl: '/images/ai-connect4.png',
      emoji: ''
    },
    {
      id: '3',
      title: 'Wordle Replica',
      description: 'An recreation of the popular Wordle word-guessing game with clean UI and game mechanics matching the original experience, with added features.',
      technologies: ['JavaScript', 'HTML/CSS', 'Game Logic', 'Responsive Design'],
      githubUrl: 'https://github.com/quyenxhuynh/wordle-replica',
      imageUrl: '/images/wordle-replica.png',
      emoji: '🖋️'
    },
    {
      id: '4',
      title: 'Finder',
      description: 'CS 3240 (Advanced Software Development) group project - a web application for connecting users with shared interests and activities.',
      technologies: ['HTML', 'CSS', 'JavaScript', 'Web Development'],
      githubUrl: 'https://github.com/quyenxhuynh/finder',
      imageUrl: '/images/finder.png',
      emoji: '🔍'
    },
    {
      id: '5',
      title: 'invit.io',
      description: 'CS 4640 (Programming Languages for Web Applications) project - an event invitation and management platform built with modern web technologies.',
      technologies: ['PHP', 'Web Development', 'Database Design'],
      githubUrl: 'https://github.com/quyenxhuynh/invit.io',
      imageUrl: '/images/invit-io.png',
      emoji: '🎉'
    },
    {
      id: '6',
      title: 'MCU Database',
      description: 'CS 4750 (Database Systems) project - a comprehensive database system for managing and exploring Marvel Cinematic Universe information.',
      technologies: ['JavaScript', 'Database Systems', 'SQL', 'Web Development'],
      githubUrl: 'https://github.com/quyenxhuynh/mcu',
      imageUrl: '/images/mcu-database.png',
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