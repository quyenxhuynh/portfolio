# Portfolio Website

A modern, responsive portfolio website built with React, Vite, and TypeScript. Features a single-page application with smooth scrolling navigation between sections. Live at [quyenhuynh.com](https://quyenhuynh.com).

## Features

- ✨ **Modern Tech Stack**: Built with React 19, TypeScript, and Vite for fast development
- 🎯 **Single Page Application**: Smooth scrolling navigation between sections
- 📱 **Fully Responsive**: Optimized for desktop, tablet, and mobile devices
- 🎨 **Clean Design**: White and charcoal surfaces, a muted green accent, generous spacing, and responsive project grids
- ⚡ **Performance Optimized**: Lazy-loaded sections and WebP project images
- 🛡️ **Type Safe**: Full TypeScript implementation for better code quality

## Sections

- **Home**: Hero section with introduction and call-to-action buttons
- **About**: Personal information and skills showcase
- **Experience**: Professional timeline with detailed work history
- **Teaching**: Teaching roles, mentoring, and volunteer work
- **Education**: Degrees and continued learning
- **Projects**: Side projects with links to their source code

## Getting Started

### Prerequisites

- Node.js 20 or higher
- [pnpm](https://pnpm.io) 9

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/quyenxhuynh/portfolio.git
   cd portfolio
   ```

2. Install dependencies:
   ```bash
   pnpm install
   ```

3. Start the development server:
   ```bash
   pnpm dev
   ```

4. Open your browser and visit `http://localhost:5173`

## Available Scripts

- `pnpm dev` - Start the development server
- `pnpm build` - Type-check and build the project for production
- `pnpm preview` - Preview the production build locally
- `pnpm lint` - Run ESLint for code quality checks

## Customization

### Personal Information

Update the following files with your personal information:

1. **src/sections/Home.tsx**: Update name, title, and description
2. **src/sections/About.tsx**: Update bio, skills, and personal details
3. **src/sections/Experience.tsx**: Update work experience and achievements
4. **src/sections/Teaching.tsx**: Update teaching roles and volunteer work
5. **src/sections/Education.tsx**: Update degrees and coursework
6. **src/sections/Projects.tsx**: Update project information, links, and descriptions

### Project Images

Project screenshots live in `public/images/` as WebP files, about 1200px wide. The full-size originals are kept in `originals/images/`, which isn't deployed.

### Styling

- **Global styles**: `src/index.css` and `src/App.css`
- **Component styles**: Each section has its own CSS file for easy customization
- **Color scheme**: Update CSS custom properties in `src/App.css` for theme changes
- **Accessibility**: Keyboard-visible focus states, a skip-to-content link, an accessible mobile menu, and reduced-motion support

### Adding New Sections

1. Create a new component in `src/sections/`
2. Add the corresponding CSS file
3. Render the section in `src/App.tsx`
4. Add the section to the `NAV_ITEMS` array in `src/App.tsx`

## Project Structure

```
public/
├── CNAME                # Custom domain for GitHub Pages
└── images/              # Project screenshots (WebP)
src/
├── components/          # Reusable components
│   ├── Navigation.tsx   # Main navigation and mobile menu
│   └── Footer.tsx       # Page footer
├── sections/            # Page sections
│   ├── Home.tsx         # Hero section
│   ├── About.tsx        # About me section
│   ├── Experience.tsx   # Work experience timeline
│   ├── Teaching.tsx     # Teaching, mentoring, and volunteering
│   ├── Education.tsx    # Education history
│   └── Projects.tsx     # Projects showcase
├── types/               # TypeScript type definitions
├── utils/               # Utility functions
└── App.tsx              # Main application component
```

## Deployment

Every push to `main` builds the site and deploys it to GitHub Pages via the workflow in `.github/workflows/deploy.yml`. In the repo's **Settings → Pages**, the source must be **GitHub Actions** and the custom domain `quyenhuynh.com`. The domain lives in those settings, not in a file. The deploy stops if any `[TODO` placeholders remain in `src/`.

To build locally:

```bash
pnpm build
```

The build artifacts will be stored in the `dist/` directory.

## Technologies Used

- **React 19** - UI library
- **TypeScript** - Type safety
- **Vite** - Build tool and development server
- **CSS3** - Styling with modern features
- **ESLint** - Code quality and linting

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
