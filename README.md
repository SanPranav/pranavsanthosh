# Pranav Santhosh Portfolio

A premium, modern portfolio website built with React showcasing a minimal and elegant design.

## Quick Setup

### 1. Install Dependencies
```bash
npm install
```

### 2. Configure Contact Form (Required)
The contact form uses EmailJS to send emails. See **[SETUP.md](SETUP.md)** for detailed instructions.

**Quick version:**
1. Create account at [emailjs.com](https://www.emailjs.com/)
2. Create `.env` file with your credentials:
```bash
REACT_APP_EMAILJS_SERVICE_ID=your_service_id
REACT_APP_EMAILJS_TEMPLATE_ID=your_template_id
REACT_APP_EMAILJS_PUBLIC_KEY=your_public_key
```

### 3. Add Your Profile Photo (Optional)
Place your headshot as `/public/images/profile.jpg` (800x800px recommended)

### 4. Start Development Server
```bash
npm start
```

Visit `http://localhost:3000` 

---

## Design Philosophy

- **Minimal & Clean**: Focus on content with generous whitespace
- **Modern Aesthetics**: Black background (#000000) with soft pastel blue accent (#AFCBFF)
- **Refined Typography**: Strong hierarchy and elegant font choices
- **Smooth Interactions**: Subtle transitions (150-250ms) and hover states
- **Accessibility First**: WCAG compliant with high contrast ratios

## Architecture

### Folder Structure

```
src/
├── components/          # Reusable UI components
│   ├── Button/
│   ├── Card/
│   ├── Input/
│   ├── Navbar/
│   ├── Textarea/
│   └── index.js
├── pages/              # Page components
│   ├── Home/
│   ├── About/
│   ├── Work/
│   ├── Blog/
│   ├── Contact/
│   └── index.js
├── styles/             # Global styles
│   ├── variables.css   # CSS variables
│   ├── reset.css       # CSS reset
│   ├── typography.css  # Typography utilities
│   └── layout.css      # Layout utilities
├── App.js              # Main app component
├── App.css             # App styles
└── index.js            # Entry point
```

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

```bash
# Install dependencies
npm install

# Start development server
npm start

# Build for production
npm run build
```

The application will run on `http://localhost:3000`

## Features

### Components

- **Button**: Primary, secondary, and ghost variants with size options
- **Card**: Glass-morphism style cards with hover effects
- **Navbar**: Responsive navigation with mobile menu
- **Input/Textarea**: Styled form inputs with focus states

### Pages

- **Home**: Hero section with navigation cards
- **About**: Journey and academic excellence showcase
- **Work**: Project portfolio with tech stack tags
- **Blog**: Blog posts with metadata and tags
- **Contact**: Contact form and information cards

## Color Palette

- **Background**: `#000000` (Black)
- **Accent**: `#AFCBFF` (Soft Pastel Blue)
- **Text Primary**: `#FFFFFF` (White)
- **Text Secondary**: `#A0A0A0` (Light Gray)

## Performance

- No inline styles - all CSS in dedicated files
- Component-based architecture for reusability
- Optimized transitions and animations
- Lazy loading ready

## Responsive Design

- Mobile-first approach
- Breakpoints at 768px and 968px
- Touch-friendly interactive elements
- Collapsible mobile navigation

## Technologies

- **React 18**: Modern React with hooks
- **React Router 6**: Client-side routing
- **Framer Motion**: Scroll animations and transitions
- **Recharts**: Data visualization (skill radar chart)
- **EmailJS**: Contact form email delivery
- **CSS Modules**: Scoped styling
- **Clean Architecture**: Separation of concerns

## Code Standards

- **No inline styling**: All styles in CSS files
- **BEM-like naming**: Consistent class naming convention
- **Component modularity**: Reusable, single-responsibility components
- **Accessibility**: Semantic HTML and ARIA labels

## License

Private portfolio project for Pranav Santhosh

## Contact

- Email: Pranavs22638@gmail.com
- LinkedIn: [pranav-santhosh](https://www.linkedin.com/in/pranav-santhosh-830316340/)
- GitHub: [SanPranav](https://github.com/SanPranav)

---

Built with <3 using React and modern web technologies
