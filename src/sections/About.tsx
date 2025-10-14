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
              I'm a Software Engineer at Microsoft with a passion for building intelligent systems 
              and enterprise AI solutions. My expertise spans machine learning infrastructure, 
              Azure ML pipelines, and AI integration platforms like Copilot for Purview.
            </p>
            <p>
              From leading teaching labs at UVA to developing anomaly detection systems at Microsoft, 
              I've consistently focused on creating technology that solves real problems. I have 
              experience in both academic and enterprise environments, with a track record of 
              building scalable ML systems and mentoring teams.
            </p>
            <p>
              My goal is to leverage artificial intelligence and machine learning to create 
              enterprise solutions that deliver measurable business impact and improve how 
              organizations manage and understand their data.
            </p>
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