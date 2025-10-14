import React from 'react';
import './Home.css';

const Home: React.FC = () => {
  return (
    <section id="home" className="home">
      <div className="home__container">
        <div className="home__content">
          <h1 className="home__title">
            Hi, I'm <span className="home__name">Quyen</span>!
          </h1>
          <h2 className="home__subtitle">Software Engineer</h2>
          <p className="home__description">
            I build enterprise AI solutions and machine learning infrastructure at scale. 
            From Azure ML pipelines to Copilot integration, I create intelligent systems 
            that solve real-world problems and deliver business value.
          </p>
          <div className="home__cta">
            <a href="#projects" className="btn btn--primary">
              View My Work
            </a>
            <a href="#about" className="btn btn--secondary">
              Learn More
            </a>
          </div>
        </div>
        <div className="home__visual">
          <div className="home__avatar">
            {/* Placeholder for profile image */}
            <div className="home__avatar-placeholder">
              👩🏻‍💻
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;