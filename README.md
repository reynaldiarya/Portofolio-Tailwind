# Portofolio Tailwind

A high-performance, responsive personal portfolio website built with modern CSS utility-first architecture.

<p align="center">
  <img src="https://img.shields.io/badge/version-1.0.0-blue.svg" />
  <img src="https://img.shields.io/badge/Tailwind_CSS-3.4-38B2AC.svg" />
  <a href="LICENSE">
    <img alt="License" src="https://img.shields.io/badge/license-MIT-yellow.svg" target="_blank" />
  </a>
  <a href="https://codecov.io/gh/reynaldiarya/Portofolio-Tailwind">
    <img src="https://codecov.io/gh/reynaldiarya/Portofolio-Tailwind/branch/main/graph/badge.svg" />
  </a>
</p>

## Description

Portofolio Tailwind is a streamlined personal branding platform designed for developers and creatives to showcase their professional journey. It leverages a utility-first CSS approach to ensure exceptional performance, rapid customization, and a seamless user experience across all device types. By eliminating bloated traditional CSS frameworks, this project provides a clean foundation for presenting skills, projects, and professional milestones with a focus on typography and visual clarity.

## Features

- **Utility-First Architecture** - Engineered using Tailwind CSS 3 for maximum design flexibility and minimal bundle sizes
- **Fully Responsive Design** - Optimized viewing experience across mobile, tablet, and desktop environments
- **Typography Focused** - Features a curated font pairing of Kaushan Script for accents and Inter for readability
- **Production-Ready Build Process** - Includes automated CSS minification and purging of unused styles for peak performance
- **Modern Development Workflow** - Integrated with PostCSS and Autoprefixer for cross-browser compatibility
- **Dark Mode Support** - Structured to easily implement and extend theme variations

## Tech Stack

- **Frontend**: HTML5, Vanilla JavaScript
- **Styling**: Tailwind CSS 3.4
- **CSS Processing**: PostCSS, Autoprefixer
- **Build Tools**: npm scripts

## Installation Guide

### Prerequisites

- Node.js 18.0.0 or higher
- npm 9.0.0 or higher

### Steps

1. Clone the repository
```bash
git clone https://github.com/reynaldiarya/Portofolio-Tailwind.git
cd Portofolio-Tailwind
```

2. Install development dependencies
```bash
npm install
```

3. Start the development environment (Tailwind CLI in watch mode)
```bash
npm run dev
```

4. Open the application in your browser
```text
Open public/index.html
```

## Configuration

The project uses a standard Tailwind CSS configuration file.

### Tailwind Customization

Modify `tailwind.config.js` to extend the theme or add custom font families:

```javascript
module.exports = {
  content: ['./public/**/*.{html,js}'],
  theme: {
    extend: {
      // Add custom colors or spacing here
    },
    fontFamily: {
      'title' : ['"Kaushan Script"'],
      'body': ['"Inter"'],
    },
  },
}
```

### Build Optimization

To generate a minified production build of the styles:
```bash
npm run build
```

## Usage

### Structure Overview

- **Header/Navigation**: Responsive menu with smooth scrolling links
- **Hero Section**: High-impact introduction with branding
- **About/Skills**: Detailed presentation of professional capabilities
- **Project Showcase**: Grid-based display for portfolio items
- **Contact**: Actionable call-to-speed elements

### Adding New Projects

To add a project, navigate to the projects section in `public/index.html` and replicate the project card structure:

```html
<div class="project-card">
  <!-- Project details -->
</div>
```

## Project Structure

```text
/
├── public/
│   ├── index.html            # Main entry point and application structure
│   └── assets/
│       └── css/style.css     # Compiled and minified production CSS
├── src/
│   └── css/
│       └── input.css         # Source CSS with Tailwind directives
├── package.json              # Build scripts and dependency management
├── tailwind.config.js        # Tailwind CSS theme and plugin configuration
└── postcss.config.js         # PostCSS processor configuration
```

## Scripts / Commands

| Command | Description |
|---------|-------------|
| `npm run dev` | Compiles CSS and starts Tailwind CLI in watch mode |
| `npm run build` | Generates a minified, production-ready CSS bundle |
| `npm install` | Installs all required development dependencies |

## Contributing

Contributions to improve the design or performance are welcome.

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/improvement`)
3. Commit your changes (`git commit -m 'Improve project card layout'`)
4. Push to the branch (`git push origin feature/improvement`)
5. Open a Pull Request

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for detailed terms and conditions.

## Author

Reynaldi Arya
