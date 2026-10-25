import type { ContactLink } from '../types';

// Shown in the hero and the footer
export const CONTACT_LINKS: ContactLink[] = [
  { id: 'github', label: 'GitHub', href: 'https://github.com/quyenxhuynh' },
  { id: 'linkedin', label: 'LinkedIn', href: 'https://www.linkedin.com/in/quyenxhuynh/' },
  { id: 'email', label: 'Email', href: 'mailto:quyenxhuynh@gmail.com' },
];

// Web links open in a new tab; mailto links don't
export const isExternal = (href: string) => href.startsWith('http');
