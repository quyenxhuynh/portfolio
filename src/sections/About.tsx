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
          <p className="section-label">01 / The person behind the work</p>
          <h2 className="section-title">About Me</h2>
        </div>
        
        <div className="about__content">
          <div className="about__text">
            <h3 className="about__heading">A little more than a job title.</h3>
            <p>
              I'm Quyen, a software engineer based in Seattle. At Microsoft, I work
              on AI-native classification: helping teams organize enterprise data
              through automation they can trust. That means thinking about the
              whole system, not just the model.
            </p>
            <p>
              My work has covered the path from data ingestion to model training,
              validation, and deployment. I focus on what it takes to turn those
              pieces into something people can actually use.
            </p>
            <p>
              There's also a teaching chapter: leading programming labs, mentoring
              teaching assistants, and helping students work through problems in
              office hours. Alongside the systems I've built, that's part of the
              experience I bring to a team.
            </p>
          </div>
          
          <div className="about__skills">
            <h3 className="about__heading">Tools I work with</h3>
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