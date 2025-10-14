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
      </div>
    </footer>
  );
};

export default Footer;