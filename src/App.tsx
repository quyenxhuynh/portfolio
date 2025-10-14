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

function App() {
  const navItems: NavItem[] = [
    { id: 'home', label: 'Home', href: '#home' },
    { id: 'about', label: 'About', href: '#about' },
    { id: 'experience', label: 'Experience', href: '#experience' },
    { id: 'teaching', label: 'Teaching', href: '#teaching' },
    { id: 'education', label: 'Education', href: '#education' },
    { id: 'projects', label: 'Projects', href: '#projects' },
  ];

  return (
    <div className="app">
      <Navigation items={navItems} />
      <main>
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
