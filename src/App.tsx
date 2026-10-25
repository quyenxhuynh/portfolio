import { useEffect } from 'react';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import Home from './sections/Home';
import About from './sections/About';
import Experience from './sections/Experience';
import Teaching from './sections/Teaching';
import Education from './sections/Education';
import Projects from './sections/Projects';
import type { NavItem } from './types';
import './App.css';

const NAV_ITEMS: NavItem[] = [
  { id: 'home', label: 'Home', href: '#home' },
  { id: 'about', label: 'About', href: '#about' },
  { id: 'experience', label: 'Experience', href: '#experience' },
  { id: 'teaching', label: 'Teaching', href: '#teaching' },
  { id: 'education', label: 'Education', href: '#education' },
  { id: 'projects', label: 'Projects', href: '#projects' },
];

function App() {
  // The page renders after the browser's own hash jump, so jump to deep links here
  useEffect(() => {
    const sectionId = decodeURIComponent(window.location.hash.slice(1));
    if (sectionId) {
      document.getElementById(sectionId)?.scrollIntoView({ block: 'start' });
    }
  }, []);

  return (
    <div className="app">
      <a className="skip-link" href="#main-content">Skip to content</a>
      <Navigation items={NAV_ITEMS} />
      <main id="main-content" tabIndex={-1}>
        <Home />
        <About />
        <Experience />
        <Teaching />
        <Education />
        <Projects />
      </main>
      <Footer />
    </div>
  );
}

export default App;
