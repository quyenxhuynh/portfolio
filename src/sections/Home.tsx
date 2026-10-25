import React from 'react';
import './Home.css';

const Home: React.FC = () => {
  return (
    <section id="home" className="home">
      <div className="home__container">
        <div className="home__content">
          <p className="home__kicker">Seattle, WA / Software Engineer II at Microsoft</p>
          <h1 className="home__title">
            Hi, I'm <span className="home__name">Quyen Huynh.</span>
          </h1>
          <p className="home__subtitle">An engineer with a teaching background.</p>
          <p className="home__description">
            At Microsoft, I build AI systems that help teams classify their data.
            My work has also taken me into programming labs, office hours, and
            mentoring other teaching assistants. This is a little of both sides of me.
          </p>
          <div className="home__cta">
            <a href="#projects" className="btn btn--primary">
              Explore my projects <span aria-hidden="true">&rarr;</span>
            </a>
            <a href="#about" className="btn btn--secondary">
              A little about me
            </a>
          </div>
        </div>
        <aside className="home__note" aria-labelledby="home-note-title">
          <p className="home__note-label">Another part of my story</p>
          <h2 id="home-note-title">From office hours<br />to production systems.</h2>
          <p>
            Before my work in enterprise AI, I led introductory programming labs
            at UVA. Teaching is part of my engineering story, too.
          </p>
          <a href="#teaching">My teaching experience <span aria-hidden="true">&rarr;</span></a>
        </aside>
      </div>
    </section>
  );
};

export default Home;