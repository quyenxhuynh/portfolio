import React from 'react';
import { CONTACT_LINKS, isExternal } from '../data/contact';
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
          <p className="home__subtitle">I build AI systems that help enterprises classify and govern their data.</p>
          <p className="home__description">
            At Microsoft, I work across the whole path, from the pipelines that
            train and validate models to the multi-tenant services that put them
            in front of customers. I'm at my best owning a system end to end.
          </p>
          <div className="home__cta">
            <a href="#projects" className="btn btn--primary">
              Explore my projects <span aria-hidden="true">&rarr;</span>
            </a>
            <a href="#about" className="btn btn--secondary">
              About me
            </a>
          </div>
          <ul className="home__links" aria-label="Find me online">
            {CONTACT_LINKS.map((link) => (
              <li key={link.id}>
                {isExternal(link.href) ? (
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`${link.label} (opens in a new tab)`}
                  >
                    {link.label} <span aria-hidden="true">↗</span>
                  </a>
                ) : (
                  <a href={link.href}>{link.label}</a>
                )}
              </li>
            ))}
          </ul>
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