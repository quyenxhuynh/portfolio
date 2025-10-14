# Portfolio Website

A modern, responsive portfolio website built with React, Vite, and TypeScript. Features a single-page application with smooth scrolling navigation between sections.

## Features

- ✨ **Modern Tech Stack**: Built with React 18, TypeScript, and Vite for fast development
- 🎯 **Single Page Application**: Smooth scrolling navigation between sections
- 📱 **Fully Responsive**: Optimized for desktop, tablet, and mobile devices
- 🎨 **Clean Design**: Modern UI with gradient backgrounds and smooth animations
- ⚡ **Performance Optimized**: Fast loading times with Vite's build optimization
- 🛡️ **Type Safe**: Full TypeScript implementation for better code quality

## Sections

- **Home**: Hero section with introduction and call-to-action buttons
- **About**: Personal information and skills showcase
- **Experience**: Professional timeline with detailed work history
- **Projects**: Portfolio of development projects with live demos and source code

## Getting Started

### Prerequisites

- Node.js (version 16 or higher)
- npm or yarn

### Installation

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd portfolio
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

4. Open your browser and visit `http://localhost:5173`

## Available Scripts

- `npm run dev` - Start the development server
- `npm run build` - Build the project for production
- `npm run preview` - Preview the production build locally
- `npm run lint` - Run ESLint for code quality checks

## Customization

### Personal Information

Update the following files with your personal information:

1. **src/sections/Home.tsx**: Update name, title, and description
2. **src/sections/About.tsx**: Update bio, skills, and personal details
3. **src/sections/Experience.tsx**: Update work experience and achievements
4. **src/sections/Projects.tsx**: Update project information, links, and descriptions

### Styling

- **Global styles**: `src/index.css` and `src/App.css`
- **Component styles**: Each section has its own CSS file for easy customization
- **Color scheme**: Update CSS custom properties in `src/index.css` for theme changes

### Adding New Sections

1. Create a new component in `src/sections/`
2. Add the corresponding CSS file
3. Update the navigation in `src/App.tsx`
4. Add the section to the navigation items array

## Project Structure

```
src/
├── components/          # Reusable components
│   └── Navigation.tsx   # Main navigation component
├── sections/            # Page sections
│   ├── Home.tsx        # Hero section
│   ├── About.tsx       # About me section
│   ├── Experience.tsx  # Work experience timeline
│   └── Projects.tsx    # Projects showcase
├── types/              # TypeScript type definitions
├── utils/              # Utility functions
└── App.tsx             # Main application component
```

## Deployment

### Build for Production

```bash
npm run build
```

The build artifacts will be stored in the `dist/` directory.

### Deploy to Netlify, Vercel, or GitHub Pages

This project is ready to be deployed to any static hosting service:

- **Netlify**: Connect your repository and set build command to `npm run build` and publish directory to `dist`
- **Vercel**: Import your repository and Vercel will automatically detect the Vite configuration
- **GitHub Pages**: Use GitHub Actions to build and deploy the `dist` folder

## Technologies Used

- **React 18** - UI library
- **TypeScript** - Type safety
- **Vite** - Build tool and development server
- **CSS3** - Styling with modern features
- **ESLint** - Code quality and linting

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

This project is open source and available under the [MIT License](LICENSE).
