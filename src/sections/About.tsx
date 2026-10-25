import React from 'react';
import './About.css';

const About: React.FC = () => {
  const skills = [
    'C#', '.NET', 'Python',
    'SQL', 'PySpark', 'pandas',
    'Azure ML', 'TypeScript', 'React',
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
            <h3 className="about__heading">The model is only one piece.</h3>
            <p>
              I'm Quyen, a software engineer based in Seattle. At Microsoft, I work
              on AI-native classification: services that help enterprises organize
              and govern their data automatically. Most of the work isn't the model.
              It's making the whole system dependable enough that teams can act on
              what it tells them.
            </p>
            <p>
              Before that, I built the ML pipeline infrastructure behind those
              models, including promotion gates that only ship a new model when it
              beats the last known good one. It taught me to treat safeguards and
              automation as part of the product, not an afterthought.
            </p>
            <p>
              I do my best work when I own a problem end to end: shaping the design,
              working through trade-offs with product and partner teams, and helping
              the people around me get up to speed.
            </p>
            <p>
              Outside of work, I'm usually traveling, hunting down new foods, or at a
              concert. Recent shows: Ariana Grande, Bruno Mars, Olivia Rodrigo, and
              more. I'm always learning something, whether it's science or a new
              language, and I've played a handful of instruments over the years.
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