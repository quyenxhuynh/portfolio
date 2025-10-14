import React from 'react';
import type { EducationItem } from '../types';
import './Education.css';

const Education: React.FC = () => {
  // Education items in display order
  const education: EducationItem[] = [
    {
      id: 'edu-2018-uva',
      title: 'Bachelor of Arts in Computer Science',
      school: 'University of Virginia',
      period: 'August 2018 - May 2021',
      gpa: '3.7/4.0',
      coursework: [
        'Data Structures & Algorithms',
        'Software Development Methods',
        'Database Systems',
        'Web Programming',
        'Computer Systems & Organization',
        'Machine Learning Fundamentals'
      ]
    },
    {
      id: 'edu-2023-gmu',
      title: 'Transfer: Computational Data Science',
      school: 'George Mason University',
      period: 'August 2024 - December 2024',
      gpa: '4.0/4.0',
    },
    {
      id: 'edu-2023-scc',
      title: 'Transfer: Post-baccalaureate',
      school: 'Shoreline Community College',
      period: 'June 2025 - Present',
      gpa: '3.7/4.0',
    }
    // Add new education entries here
  ];

  return (
    <section id="education" className="education">
      <div className="education__container">
        <div className="education__header">
          <h2 className="section-title">Education</h2>
        </div>
        
        <div className="education-grid">
          {education.map((edu) => (
            <div 
              key={edu.id} 
              className={`education-item ${edu.title.toLowerCase().includes('bachelor') ? 'bachelor' : ''}`}
            >
              <div className="education-header">
                <h3 className="education-title">{edu.title}</h3>
                <span className="education-period">{edu.period}</span>
              </div>
              <h4 className="education-school">{edu.school}</h4>
              
              {edu.gpa && (
                <div className="education-gpa">
                  <strong>GPA: {edu.gpa}</strong>
                </div>
              )}
              
              {edu.coursework && edu.coursework.length > 0 && (
                <div className="education-section">
                  <h5 className="education-section-title">Coursework</h5>
                  <ul className="coursework-list">
                    {edu.coursework.map((course, idx) => (
                      <li key={idx}>{course}</li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;