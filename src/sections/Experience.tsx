import React from 'react';
import type { ExperienceItem } from '../types';
import './Experience.css';

const Experience: React.FC = () => {
  // Experiences are listed from oldest to newest for easier maintenance
  // They will be reversed for display so newest appears first
  const experiences: ExperienceItem[] = [
    {
      id: 'exp-2021-tcf',
      title: 'Developer',
      company: 'theCourseForum',
      period: 'Jan - May 2021',
      description: [
        'Supported a Django migration to improve reliability and long-term maintainability.',
        'Improved accessibility, navigation, and course discovery for a platform used by thousands of UVA students.'
      ],
      technologies: ['Django', 'Python', 'HTML/CSS', 'Tailwind']
    },
    {
      id: 'exp-2021-msft',
      title: 'Software Engineer',
      company: 'Microsoft',
      period: '2021 - 2023',
      description: [
        'Built the Azure ML pipeline end to end, covering data extraction, training, validation, and scoring.',
        'Replaced weekly, hand-run training and testing scripts with automated daily production pipelines.',
        'Created promotion gates that only ship a model when it beats the last-known-good baseline, cutting manual review from each release.',
        'Engineered high-volume data access between C# services and Python training code.'
      ],
      technologies: ['Python', 'C#', 'Azure ML', 'PySpark', 'Hadoop']
    },
    {
      id: 'exp-2023-msft',
      title: 'Software Engineer II',
      company: 'Microsoft',
      period: '2023 - Present',
      description: [
        'Build AI-native classification services that help enterprises organize and govern their data, now in private preview with 20 enterprise tenants.',
        'Added an embedding-model layer to the classification pipeline to reduce false positives.',
        'Led synthetic data generation for benchmarking classification quality: 10,000 samples per model across 10 document types and 8 languages.',
        'Maintain a multi-tenant architecture that classifies billions of documents a day, with strong tenant isolation and compliance controls.'
      ],
      technologies: ['C#', 'Python', 'Embeddings', 'pandas', 'NumPy']
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
          {[...experiences].reverse().map((exp) => (
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