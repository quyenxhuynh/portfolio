import React, { useState, useEffect, useRef } from 'react';
import type { NavItem } from '../types';
import { smoothScrollTo } from '../utils/scroll';
import './Navigation.css';

interface NavigationProps {
  items: NavItem[];
}

const Navigation: React.FC<NavigationProps> = ({ items }) => {
  const [activeSection, setActiveSection] = useState<string>('home');
  const [isScrolled, setIsScrolled] = useState<boolean>(false);
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const navRef = useRef<HTMLElement>(null);
  const toggleButtonRef = useRef<HTMLButtonElement>(null);
  const firstMenuLinkRef = useRef<HTMLAnchorElement>(null);

  useEffect(() => {
    let animationFrameId = 0;

    const handleScroll = () => {
      if (animationFrameId) {
        return;
      }

      animationFrameId = window.requestAnimationFrame(() => {
        const nextIsScrolled = window.scrollY > 50;
        setIsScrolled((prev) => (prev === nextIsScrolled ? prev : nextIsScrolled));
        animationFrameId = 0;
      });
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (animationFrameId) {
        window.cancelAnimationFrame(animationFrameId);
      }
    };
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        let bestEntry: IntersectionObserverEntry | null = null;

        for (const entry of entries) {
          if (!entry.isIntersecting) {
            continue;
          }

          if (!bestEntry || entry.intersectionRatio > bestEntry.intersectionRatio) {
            bestEntry = entry;
          }
        }

        if (bestEntry?.target?.id) {
          const nextActiveSection = bestEntry.target.id;
          setActiveSection((prev) => (prev === nextActiveSection ? prev : nextActiveSection));
        }
      },
      {
        root: null,
        rootMargin: '-42% 0px -42% 0px',
        threshold: 0,
      },
    );

    items.forEach((item) => {
      const element = document.getElementById(item.id);
      if (element) {
        observer.observe(element);
      }
    });

    return () => {
      observer.disconnect();
    };
  }, [items]);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768) {
        setIsMenuOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  useEffect(() => {
    if (!isMenuOpen || window.innerWidth > 768) {
      document.body.style.overflow = '';
      return;
    }

    document.body.style.overflow = 'hidden';
    firstMenuLinkRef.current?.focus();

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setIsMenuOpen(false);
        toggleButtonRef.current?.focus();
        return;
      }

      if (event.key !== 'Tab') {
        return;
      }

      const menuRoot = navRef.current;
      if (!menuRoot) {
        return;
      }

      const focusableElements = menuRoot.querySelectorAll<HTMLElement>(
        'button:not([disabled]), a[href], [tabindex]:not([tabindex="-1"])',
      );

      if (!focusableElements.length) {
        return;
      }

      const firstElement = focusableElements[0];
      const lastElement = focusableElements[focusableElements.length - 1];
      const activeElement = document.activeElement as HTMLElement | null;

      if (!event.shiftKey && activeElement === lastElement) {
        event.preventDefault();
        firstElement.focus();
      }

      if (event.shiftKey && activeElement === firstElement) {
        event.preventDefault();
        lastElement.focus();
      }
    };

    const handlePointerDown = (event: MouseEvent) => {
      const target = event.target as Node;
      if (navRef.current && !navRef.current.contains(target)) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    document.addEventListener('mousedown', handlePointerDown);

    return () => {
      document.body.style.overflow = '';
      document.removeEventListener('keydown', handleKeyDown);
      document.removeEventListener('mousedown', handlePointerDown);
    };
  }, [isMenuOpen]);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const sectionId = href.substring(1); // Remove the '#'
    smoothScrollTo(sectionId);
    setIsMenuOpen(false);
  };

  return (
    <nav aria-label="Main navigation" className={`navigation ${isScrolled ? 'navigation--scrolled' : ''}`} ref={navRef}>
      <div className="navigation__container">
        <div className="navigation__top-row">
          <div className="navigation__logo">
            <a href="#home" onClick={(e) => handleNavClick(e, '#home')}>
              Quyen Huynh
            </a>
          </div>
          <button
            ref={toggleButtonRef}
            type="button"
            className={`navigation__toggle ${isMenuOpen ? 'navigation__toggle--open' : ''}`}
            aria-label="Toggle navigation menu"
            aria-expanded={isMenuOpen}
            aria-controls="navigation-menu"
            onClick={() => setIsMenuOpen((prev) => !prev)}
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
        <ul id="navigation-menu" className={`navigation__list ${isMenuOpen ? 'navigation__list--open' : ''}`}>
          {items.map((item) => (
            <li key={item.id} className="navigation__item">
              <a
                ref={item.id === items[0]?.id ? firstMenuLinkRef : undefined}
                href={item.href}
                aria-current={activeSection === item.id ? 'location' : undefined}
                className={`navigation__link ${
                  activeSection === item.id ? 'navigation__link--active' : ''
                }`}
                onClick={(e) => handleNavClick(e, item.href)}
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navigation;