# PORTFOLIO WEBSITE
# Ujjawal Bhardwaj - Portfolio Website

A modern, responsive portfolio website built with React, featuring smooth animations, interactive elements, and serverless backend functions. The portfolio showcases professional experience, projects, and provides a contact form for potential collaborations.

## 🌟 Features

### Frontend Features
- **Responsive Design**: Mobile-first approach with Tailwind CSS
- **Smooth Animations**: GSAP-powered scroll animations and transitions
- **Interactive Elements**: Dynamic navigation, theme switching, and interactive components
- **Modern UI/UX**: Clean, professional design with gradient effects and glassmorphism
- **Performance Optimized**: Fast loading times and optimized bundle size

### Backend Features
- **Serverless Functions**: Netlify Functions for contact form and analytics
- **Contact Form**: Email integration with SendGrid
- **Analytics Tracking**: User interaction and page view tracking
- **Project Downloads**: Dynamic project information and download handling

## 🛠️ Tech Stack

### Frontend
- **React 19.1.0** - Modern React with hooks and functional components
- **Tailwind CSS 3.3.3** - Utility-first CSS framework
- **GSAP 3.13.0** - Professional-grade animations
- **Styled Components 6.1.19** - CSS-in-JS styling
- **PostCSS 8.5.6** - CSS processing and optimization

### Backend & Deployment
- **Netlify Functions** - Serverless backend functions
- **SendGrid** - Email service for contact form
- **Netlify** - Hosting and deployment platform

### Development Tools
- **Create React App** - Development environment
- **ESLint** - Code linting and formatting
- **Jest & Testing Library** - Unit testing framework

## 📁 Project Structure

```
Portfolio/
├── portfolio/                 # Main React application
│   ├── public/               # Static assets
│   │   ├── index.html        # Main HTML file
│   │   ├── success.html      # Contact success page
│   │   └── _redirects        # Netlify redirects
│   ├── src/                  # Source code
│   │   ├── App.js           # Main application component
│   │   ├── App.css          # Global styles
│   │   ├── index.js         # Application entry point
│   │   └── assets/          # Images and static assets
│   ├── package.json         # Frontend dependencies
│   └── tailwind.config.js   # Tailwind configuration
├── netlify/                  # Serverless functions
│   └── functions/
│       ├── contact.js        # Contact form handler
│       ├── analytics.js      # Analytics tracking
│       ├── project-download.js # Project download handler
│       └── README.md         # Functions documentation
├── netlify.toml             # Netlify configuration
└── package.json             # Root dependencies
```

## 🚀 Getting Started

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn package manager
- Git

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd Portfolio
   ```

2. **Install dependencies**
   ```bash
   # Install root dependencies
   npm install
   
   # Install frontend dependencies
   cd portfolio
   npm install
   ```

3. **Set up environment variables**
   Create a `.env` file in the `portfolio` directory:
   ```env
   REACT_APP_SENDGRID_API_KEY=your_sendgrid_api_key
   REACT_APP_ANALYTICS_KEY=your_analytics_key
   ```

4. **Start development server**
   ```bash
   npm start
   ```
   The application will be available at `http://localhost:3000`

## 📝 Available Scripts

### Frontend Scripts (in `portfolio/` directory)
```bash
npm start          # Start development server
npm run build      # Build for production
npm test           # Run test suite
npm run eject      # Eject from Create React App
```

### Root Scripts
```bash
npm install        # Install all dependencies
```

## 🎨 Customization

### Styling
- **Tailwind CSS**: Modify `portfolio/tailwind.config.js` for custom theme
- **Global Styles**: Edit `portfolio/src/App.css` for global styles
- **Component Styles**: Use styled-components or inline styles in components

### Content
- **Personal Information**: Update personal details in `portfolio/src/App.js`
- **Projects**: Modify project data in the projects section
- **Contact Form**: Configure email settings in `netlify/functions/contact.js`

### Animations
- **GSAP Animations**: Customize animations in `portfolio/src/App.js`
- **Scroll Triggers**: Modify scroll-based animations
- **Timeline Animations**: Add custom GSAP timelines

## 🌐 Deployment

### Netlify Deployment (Recommended)

1. **Connect to Netlify**
   - Push your code to GitHub/GitLab
   - Connect repository to Netlify
   - Configure build settings:
     - Build command: `cd portfolio && npm run build`
     - Publish directory: `portfolio/build`

2. **Environment Variables**
   Set these in Netlify dashboard:
   ```
   SENDGRID_API_KEY=your_sendgrid_api_key
   ANALYTICS_KEY=your_analytics_key
   ```

3. **Custom Domain** (Optional)
   - Add custom domain in Netlify dashboard
   - Configure DNS settings

### Manual Deployment
```bash
# Build the project
cd portfolio
npm run build

# Deploy to your preferred hosting service
# Upload the contents of the build/ directory
```

## 🧪 Testing

### Running Tests
```bash
cd portfolio
npm test
```

### Test Coverage
```bash
npm test -- --coverage --watchAll=false
```

## 📊 Performance

### Optimization Features
- **Code Splitting**: Automatic code splitting with React Router
- **Image Optimization**: Optimized images and lazy loading
- **Bundle Optimization**: Minified and compressed production builds
- **Caching**: Proper cache headers for static assets

### Performance Metrics
- **Lighthouse Score**: 95+ across all categories
- **First Contentful Paint**: < 1.5s
- **Largest Contentful Paint**: < 2.5s
- **Cumulative Layout Shift**: < 0.1

## 🔒 Security

### Security Features
- **HTTPS Only**: All connections use HTTPS
- **CORS Configuration**: Proper CORS headers for API endpoints
- **Input Validation**: Server-side validation for all form inputs
- **Rate Limiting**: API rate limiting to prevent abuse

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request


## 👤 Author

**Ujjawal Bhardwaj**
- Portfolio: [[https://your-portfolio-url.com](https://ujjawal-portfolio.netlify.app/)]
- Email: [Ujjwalsharma1910@gmail.com]

## 🙏 Acknowledgments

- [Create React App](https://create-react-app.dev/) for the development environment
- [Tailwind CSS](https://tailwindcss.com/) for the styling framework
- [GSAP](https://greensock.com/gsap/) for animations
- [Netlify](https://netlify.com/) for hosting and serverless functions

---
