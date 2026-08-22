import React from 'react';
import './About.css';

const About: React.FC = () => {
  const skills = [
    'C#', '.NET', 'Python',
    'HTML/CSS', 'JavaScript', 'TypeScript',
    'React', 'Vite', 'Next.JS',
  ];

  return (
    <section id="about" className="about">
      <div className="about__container">
        <div className="about__header">
          <h2 className="section-title">About Me</h2>
        </div>
        
        <div className="about__content">
          <div className="about__text">
            <h3 className="about__heading">Who I Am</h3>
            <p>
              I am a Seattle-based software engineer building AI-native classification systems at
              Microsoft. My core strengths are enterprise AI, production ML platforms, and scalable
              backend systems.
            </p>
            <p>
              I focus on turning complex data and governance workflows into trustworthy automated
              classification experiences that teams can adopt.
            </p>
            <ul className="about__impact-list">
              <li>Build AI-native classification capabilities for enterprise data workflows.</li>
              <li>Designed ML pipelines covering ingestion, training, validation, and deployment.</li>
              <li>Led labs and mentored assistants, strengthening communication and leadership.</li>
            </ul>
          </div>
          
          <div className="about__skills">
            <h3 className="about__heading">Skills & Technologies</h3>
            <div className="skills-grid">
              {skills.map((skill, index) => (
                <div key={index} className="skill-item">
                  <span className="skill-name">{skill}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;