# Daniel Caamal Herrera - Portfolio

A modern, minimalist portfolio website showcasing my work as a Full Stack Developer and Data Engineer.

## 🚀 Features

- **Modern Design**: Clean, minimalist interface with smooth animations
- **Responsive**: Optimized for all devices and screen sizes
- **Fast Performance**: Built with Next.js 14 and optimized for speed
- **Interactive**: Smooth animations and micro-interactions using Framer Motion
- **Accessible**: WCAG compliant with proper focus management
- **SEO Optimized**: Meta tags and structured data for better search visibility

## 🛠️ Tech Stack

- **Framework**: Next.js 14 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **UI Components**: NextUI
- **Icons**: React Icons
- **Deployment**: Docker & Vercel ready

## 📦 Installation & Setup

### Prerequisites

- Node.js 18+ 
- npm or yarn
- Docker (optional, for containerized deployment)

### Local Development

1. **Clone the repository**
   ```bash
   git clone https://github.com/danielcaamal/portfolio-app.git
   cd portfolio-app
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

### Docker Deployment

1. **Build and run with Docker Compose**
   ```bash
   docker-compose up --build
   ```

2. **Or build and run manually**
   ```bash
   # Build the image
   docker build -t portfolio-app .
   
   # Run the container
   docker run -p 3000:3000 portfolio-app
   ```

## 🏗️ Project Structure

```
src/
├── app/
│   ├── _components/     # Shared components
│   ├── _utils/         # Utility functions
│   ├── about/          # About page
│   ├── contact/        # Contact page
│   ├── projects/       # Projects page
│   ├── resume/         # Resume page
│   ├── globals.css     # Global styles
│   ├── layout.tsx      # Root layout
│   └── page.tsx        # Home page
├── public/
│   ├── images/         # Project images
│   └── files/          # Static files (CV, etc.)
```

## 🎨 Design System

### Colors
- **Primary**: Sky Blue (#0ea5e9)
- **Accent**: Orange (#f97316)
- **Background**: Dark gradient
- **Text**: White and gray variations

### Typography
- **Font**: Inter (Google Fonts)
- **Code**: JetBrains Mono
- **Weights**: 300-900

### Components
- **Glass Effect**: Backdrop blur with transparency
- **Cards**: Rounded corners with hover effects
- **Buttons**: Gradient backgrounds with animations
- **Navigation**: Sticky header with smooth transitions

## 📱 Pages

### Home
- Hero section with animated introduction
- Social media links
- Call-to-action button

### About
- Personal introduction
- Professional journey
- Key statistics

### Projects
- Project showcase with image galleries
- GitHub and live demo links
- Detailed descriptions

### Resume
- Skills with progress bars
- Work experience timeline
- Education history
- Downloadable CV

### Contact
- Service offerings
- Contact information
- Social media links

## 🚀 Deployment

### Vercel (Recommended)
1. Connect your GitHub repository to Vercel
2. Deploy automatically on push to main branch
3. Custom domain configuration available

### Docker
1. Build the Docker image
2. Deploy to any container platform
3. Health checks included

### Static Export
```bash
npm run build
```
The static files will be generated in the `out/` directory.

## 🔧 Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📞 Contact

- **Email**: danielcaamal97@gmail.com
- **LinkedIn**: [Daniel Caamal Herrera](https://www.linkedin.com/in/daniel-caamal-herrera/)
- **GitHub**: [danielcaamal](https://github.com/danielcaamal)

---

Made with ❤️ using Next.js & TypeScript
