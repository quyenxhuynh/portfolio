import { lazy, Suspense } from 'react';
import Navigation from './components/Navigation';
import Home from './sections/Home';
import About from './sections/About';
import type { NavItem } from './types';
import './App.css';

const Experience = lazy(() => import('./sections/Experience'));
const Teaching = lazy(() => import('./sections/Teaching'));
const Education = lazy(() => import('./sections/Education'));
const Projects = lazy(() => import('./sections/Projects'));
const Footer = lazy(() => import('./components/Footer'));

const NAV_ITEMS: NavItem[] = [
  { id: 'home', label: 'Home', href: '#home' },
  { id: 'about', label: 'About', href: '#about' },
  { id: 'experience', label: 'Experience', href: '#experience' },
  { id: 'teaching', label: 'Teaching', href: '#teaching' },
  { id: 'education', label: 'Education', href: '#education' },
  { id: 'projects', label: 'Projects', href: '#projects' },
];

function App() {
  return (
    <div className="app">
      <Navigation items={NAV_ITEMS} />
      <main>
        <Home />
        <About />
        <Suspense fallback={null}>
          <Experience />
          <Teaching />
          <Education />
          <Projects />
        </Suspense>
      </main>
      <Suspense fallback={null}>
        <Footer />
      </Suspense>
    </div>
  );
}

export default App;
