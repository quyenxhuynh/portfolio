import React from 'react';
import './Teaching.css';

interface TeachingItem {
  id: string;
  title: string;
  course: string;
  institution: string;
  period: string;
  description: string[];
}

const Teaching: React.FC = () => {
  const teachingExperience: TeachingItem[] = [
    {
      id: 'teach-1',
      title: 'Lab Lead & Teaching Assistant',
      course: 'CS 1110: Introduction to Programming',
      institution: 'University of Virginia',
      period: 'Fall 2019 - Spring 2021',
      description: [
        'Led computer science laboratory sessions and lectures for undergraduate students',
        'Supervised and mentored multiple Teaching Assistants as Lead TA',
        'Adapted teaching methods for remote learning during COVID-19 pandemic',
        'Provided comprehensive student support through office hours and personalized feedback'
      ]
    },
    {
      id: 'teach-2',
      title: 'Undergraduate Teaching Assistant',
      course: 'CDS 130: Computing for Scientists',
      institution: 'George Mason University',
      period: 'Spring 2025',
      description: [
        'Supported students in practical scientific computing and data analysis techniques',
        'Held regular office hours for experimental data analysis and scientific modeling',
        'Graded assignments on scientific presentations, data ethics, and problem-solving',
        'Helped students develop proficiency with scientific research software systems'
      ]
    }
  ];

  return (
    <section id="teaching" className="teaching">
      <div className="teaching__container">
        <div className="teaching__header">
          <h2 className="section-title">Teaching Experience</h2>
        </div>
        
        <div className="teaching-grid">
          {teachingExperience.map((item) => (
            <div key={item.id} className="teaching-card">
              <div className="teaching-header">
                <div className="teaching-title-section">
                  <h3 className="teaching-title">{item.title}</h3>
                  <h4 className="teaching-course">{item.course}</h4>
                  <p className="teaching-institution">{item.institution}</p>
                </div>
                <span className="teaching-period">{item.period}</span>
              </div>
              
              <div className="teaching-content">
                <ul className="teaching-description">
                  {item.description.map((desc, idx) => (
                    <li key={idx}>{desc}</li>
                  ))}
                </ul>
                
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Teaching;