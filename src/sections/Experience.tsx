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
        'Supported a Django migration to improve reliability and long-term maintainability.',
        'Improved accessibility and UI quality for a platform used by thousands of UVA students.',
        'Shipped navigation and usability enhancements that reduced friction in course discovery.',
        'Collaborated in an iterative product workflow with engineers and student stakeholders.'
      ],
      technologies: ['Django', 'Python', 'HTML/CSS', 'Tailwind']
    },
    {
      id: 'exp-2021-msft',
      title: 'Software Engineer',
      company: 'Microsoft',
      period: '2021 - 2023',
      description: [
        'Built Azure ML pipeline infrastructure for end-to-end model lifecycle management.',
        'Implemented data extraction, training, validation, and scoring workflows.',
        'Created automated model promotion gates against last-known-good baselines.',
        'Enabled daily production pipeline schedules and reduced manual MLOps overhead.'
      ],
      technologies: ['Python', 'C#', 'PySpark', 'Hadoop']
    },
    {
      id: 'exp-2023-msft',
      title: 'Software Engineer II',
      company: 'Microsoft',
      period: '2023 - Present',
      description: [
        'Build AI-native classification capabilities for enterprise data and governance workflows.',
        'Develop scalable services that enable trustworthy automated data classification.',
        'Partner across engineering and product to turn complex classification needs into usable features.',
        'Maintain multi-tenant architecture with strong isolation and compliance controls.'
      ],
      technologies: ['C#', 'Python', 'pandas', 'NumPy']
    },
    // Add new experiences here at the end - they will appear at the top when displayed
  ];

  return (
    <section id="experience" className="experience">
      <div className="experience__container">
        <div className="experience__header">
          <p className="section-label">02 / Where I've been</p>
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