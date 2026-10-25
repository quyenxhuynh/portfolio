import React from 'react';
import { CONTACT_LINKS, isExternal } from '../data/contact';
import './Footer.css';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer__container">
        <p className="footer__text">
          Made with love from Seattle • {currentYear}
        </p>
        <ul className="footer__links" aria-label="Find me online">
          {CONTACT_LINKS.map((link) => (
            <li key={link.id}>
              {isExternal(link.href) ? (
                <a
                  className="footer__link"
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`${link.label} (opens in a new tab)`}
                >
                  {link.label}
                </a>
              ) : (
                <a className="footer__link" href={link.href}>{link.label}</a>
              )}
            </li>
          ))}
          <li>
            <a className="footer__link" href="#home">Back to top <span aria-hidden="true">&uarr;</span></a>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;