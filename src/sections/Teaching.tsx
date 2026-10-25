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

interface VolunteerItem {
  id: string;
  role: string;
  organization: string;
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
        'Led programming labs and mini-lectures for undergraduate cohorts.',
        'Supervised and mentored other teaching assistants as lead TA.',
        'Adapted labs and support workflows for remote learning during COVID-19.',
        'Provided office hours and actionable student feedback each week.'
      ]
    },
    {
      id: 'teach-2',
      title: 'Undergraduate Teaching Assistant',
      course: 'CDS 130: Computing for Scientists',
      institution: 'George Mason University',
      period: 'Spring 2025',
      description: [
        'Supported students in scientific computing and practical data analysis.',
        'Held office hours focused on modeling, debugging, and experiment workflows.',
        'Graded work on scientific communication, ethics, and analytical rigor.',
        'Helped students become fluent with core research software tools.'
      ]
    }
  ];

  const volunteering: VolunteerItem[] = [
    {
      id: 'volunteer-1',
      role: 'Interview & Career Mentor',
      organization: 'CodePath'
    },
    {
      id: 'volunteer-2',
      role: 'Teaching Assistant',
      organization: 'TEALS'
    },
    {
      id: 'volunteer-3',
      role: 'Food Distribution Assistant',
      organization: 'University District Food Bank'
    },
    {
      id: 'volunteer-4',
      role: 'Medical Center Support',
      organization: 'Kaiser Permanente'
    }
  ];

  return (
    <section id="teaching" className="teaching">
      <div className="teaching__container">
        <div className="teaching__header">
          <p className="section-label">03 / Sharing what I know</p>
          <h2 className="section-title">Teaching &amp; Mentoring</h2>
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

        <div className="teaching-volunteer">
          <h3 className="teaching-volunteer__title">Volunteer</h3>
          <ul className="teaching-volunteer__list">
            {volunteering.map((item) => (
              <li key={item.id} className="teaching-volunteer__item">
                {item.role} · <span>{item.organization}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Teaching;
