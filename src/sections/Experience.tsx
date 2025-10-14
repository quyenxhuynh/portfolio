import React from 'react';
import type { ExperienceItem } from '../types';
import './Experience.css';

const Experience: React.FC = () => {
  // Experiences are listed from oldest to newest for easier maintenance
  // They will be reversed for display so newest appears first
  const experiences: ExperienceItem[] = [
    {
      id: 'exp-2019-tcf',
      title: 'Developer',
      company: 'theCourseForum',
      period: '2021',
      description: [
        'Contributed to platform modernization by assisting with Django migration to improve system scalability and maintainability for the student community',
        'Enhanced website accessibility features and user interface components to provide better service for diverse student users accessing course information',
        'Developed improvements for a platform serving thousands of University of Virginia students seeking course reviews and academic planning resources',
        'Collaborated with team members to implement user experience enhancements that streamlined site navigation and functionality'
      ],
      technologies: ['Django', 'Python', 'HTML/CSS', 'Tailwind']
    },
    {
      id: 'exp-2021-msft',
      title: 'Software Engineer',
      company: 'Microsoft',
      period: '2021 - 2023',
      description: [
        'Designed and built Azure ML pipeline infrastructure to streamline machine learning model lifecycle management from data ingestion to production deployment',
        'Implemented comprehensive ML workflow including data extraction, model training, validation, and scoring processes to ensure model quality and performance',
        'Developed automated model publishing system with performance comparison logic to promote only models that outperform last-known-good baselines',
        'Established daily scheduled pipeline triggers enabling continuous model deployment and reducing manual intervention in ML operations workflow'
      ],
      technologies: ['Python', 'C#', 'PySpark', 'Hadoop']
    },
    {
      id: 'exp-2023-msft',
      title: 'Software Engineer II',
      company: 'Microsoft',
      period: '2023 - Present',
      description: [
        'Contributed to Copilot for Purview development by building enterprise AI capabilities that enable organizations to manage data governance and compliance across multiple tenants',
        'Currently developing intelligent anomaly detection agents to automatically identify and validate legitimate security alerts, reducing false positive investigation overhead',
        'Designed and implemented suggested prompts system that dynamically generates contextual AI responses, improving user interaction speed and response accuracy',
        'Built enterprise-scale solutions architected to serve multiple organizational tenants while maintaining data isolation and security compliance requirements'
      ],
      technologies: ['C#', 'Python', 'pandas', 'NumPy']
    },
    // Add new experiences here at the end - they will appear at the top when displayed
  ];

  return (
    <section id="experience" className="experience">
      <div className="experience__container">
        <div className="experience__header">
          <h2 className="section-title">Experience</h2>
        </div>
        
        <div className="timeline">
          {experiences.reverse().map((exp) => (
            <div key={exp.id} className="timeline-item">
              <div className="timeline-marker"></div>
              <div className="timeline-content">
                <div className="experience-card">
                  <div className="experience-header">
                    <h3 className="experience-title">{exp.title}</h3>
                    <span className="experience-period">{exp.period}</span>
                  </div>
                  <h4 className="experience-company">@ {exp.company}</h4>
                  
                  <ul className="experience-description">
                    {exp.description.map((desc, idx) => (
                      <li key={idx}>{desc}</li>
                    ))}
                  </ul>
                  
                  <div className="experience-technologies">
                    {exp.technologies.map((tech, idx) => (
                      <span key={idx} className="tech-tag">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;