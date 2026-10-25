import React from 'react';
import './Footer.css';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer__container">
        <p className="footer__text">
          Made with love from Seattle • {currentYear}
        </p>
        <a className="footer__link" href="#home">Back to top <span aria-hidden="true">&uarr;</span></a>
      </div>
    </footer>
  );
};

export default Footer;