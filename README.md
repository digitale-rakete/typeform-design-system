# Typeform Design System

A modern, Typeform-inspired design system built with Next.js 16, featuring animated LordIcon integrations, 3D effects, and a responsive layout optimized for interactive applications.

## 🚀 Features

- **Next.js 16.0.4** with Turbopack for lightning-fast development
- **React 19.2.0** with latest features and optimizations
- **Tailwind CSS v3.4.1** for utility-first styling
- **Animated LordIcon Integrations** - 9 custom animated icons throughout the landing page
- **Framer Motion** for smooth, physics-based animations
- **Three.js 3D Effects** with Antigravity integration
- **Fully Responsive** design across all devices
- **TypeScript** for type-safe development
- **Dark Mode Ready** with CSS custom properties

## 🎨 Tech Stack

### Frontend Framework
- **Next.js** 16.0.4 (with Turbopack)
- **React** 19.2.0
- **React DOM** 19.2.0
- **TypeScript** 5.x

### Styling
- **Tailwind CSS** 3.4.1
- **PostCSS** 8.5.6
- **Autoprefixer** 10.4.23
- **Framer Motion** 12.23.24

### UI Components & Libraries
- **@lordicon/react** 1.11.0 - Animated Lottie icons
- **@radix-ui/react-accordion** 1.2.12
- **Lucide React** 0.554.0 - Icon library
- **clsx** 2.1.1 - Class name utilities
- **tailwind-merge** 3.4.0 - Tailwind class merging

### 3D & Animation
- **@react-three/fiber** 9.5.0
- **Three.js** 0.182.0
- **Lottie-web** 5.13.0

### State Management & Data Fetching
- **Zustand** 5.0.8 - State management
- **@tanstack/react-query** 5.90.11 - Data fetching

### Forms
- **react-hook-form** 7.66.1

## 📦 Installation

```bash
# Clone the repository
git clone https://github.com/digitale-rakete/typeform-design-system.git

# Navigate to project directory
cd typeform-design-system

# Install dependencies
npm install
```

## 🛠️ Development

```bash
# Start the development server
npm run dev

# Build for production
npm run build

# Start production server
npm start

# Run linter
npm run lint
```

The development server will start at [http://localhost:3000](http://localhost:3000)

## 🎯 LordIcon Integration

This project features custom animated LordIcon integrations throughout the landing page:

### Customer Journey Phase Icons (5 icons)
- **Research** - Analysis icon with color customization
- **Setup** - Project management icon
- **Go Live** - Rocket launch animation
- **Qualify** - Review and validation icon
- **Optimize** - Customer service icon

### Multi-Channel Outreach Icons (4 icons)
- **Email** - Envelope mail animation
- **LinkedIn** - LinkedIn logo with branding
- **Landing Page** - Web advertising icon
- **Ads** - Marketing campaign icon

### Implementation Details

All LordIcon icons are implemented using native web components via `React.createElement()` to bypass TypeScript JSX type checking while maintaining full React compatibility. Icons feature:

- Dynamic color customization per section
- Loop animations for continuous engagement
- Emoji fallbacks for graceful degradation
- SSR-compatible implementation with 'use client' directive

## 🚀 Deploying to Vercel

### Quick Deploy

1. **Go to Vercel Dashboard**: [https://vercel.com/new](https://vercel.com/new)

2. **Import Repository**:
   - Click "Add New Project"
   - Select "Import Git Repository"
   - Choose `digitale-rakete/typeform-design-system`

3. **Configure Project** (auto-detected):
   - Framework Preset: **Next.js**
   - Root Directory: `./`
   - Build Command: `npm run build`
   - Output Directory: `.next`
   - Install Command: `npm install`
   - Node.js Version: 20.x

4. **Deploy**:
   - Click "Deploy"
   - Wait for build to complete (2-5 minutes)

5. **Access Your Site**:
   - Production URL: `https://typeform-design-system.vercel.app`
   - Or your custom domain

### Continuous Deployment

- **Production**: Every push to `master` branch triggers automatic deployment
- **Preview**: Pull requests automatically get preview deployments
- **Instant Rollbacks**: One-click rollback to any previous deployment

### Environment Variables

No environment variables are required for this project. All configurations are included in the codebase.

## 📁 Project Structure

```
typeform-design-system/
├── app/                      # Next.js App Router
│   ├── layout.tsx           # Root layout
│   ├── page.tsx             # Home page
│   └── globals.css          # Global styles & CSS variables
├── components/              # React components
│   ├── CustomerJourney/     # Customer journey section components
│   ├── sections/            # Landing page sections
│   ├── ui/                  # Reusable UI components
│   └── LordIcon.tsx         # LordIcon wrapper component
├── lib/                     # Utility functions and data
│   └── customer-journey-data.ts  # Journey data with icon IDs
├── types/                   # TypeScript type definitions
│   └── lordicon.d.ts        # LordIcon type declarations
├── public/                  # Static assets
├── next.config.ts           # Next.js configuration
├── tailwind.config.ts       # Tailwind CSS configuration
├── tsconfig.json            # TypeScript configuration
└── package.json             # Dependencies and scripts
```

## 🎨 Design System

### Color Palette

The design system uses CSS custom properties for theming:

```css
--bg-primary: #1a1025        /* Deep purple background */
--bg-elevated: #2a1f3d       /* Elevated surface */
--text-primary: #e2e2e2      /* Primary text */
--accent-purple: #c084fc     /* Purple accent */
--accent-blue: #60a5fa       /* Blue accent */
--accent-gold: #e6b500       /* Gold accent */
```

### Typography

- **Primary Font**: Inter (Google Fonts)
- **Monospace Font**: JetBrains Mono (Google Fonts)

### Animations

- Framer Motion for component animations
- LordIcon Lottie animations for icons
- Three.js for 3D particle effects
- Smooth scroll-triggered animations

## 🔧 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 📝 Git Workflow

### Commit History

All commits follow conventional commit standards:
- `feat:` New features
- `fix:` Bug fixes
- `docs:` Documentation changes
- `style:` Code style changes
- `refactor:` Code refactoring

### Recent Commits

```
b90c3bf fix: Downgrade to Tailwind CSS v3 to resolve Turbopack Windows error
50e3911 feat: Update LordIcon IDs for all non-functioning icons
1247ea2 feat: Integrate Antigravity 3D animation and ShinyText for Hero section
6fb9ac3 fix: Use React.createElement for lord-icon custom element
dd524dd fix: Switch to native lord-icon web component
```

## 🐛 Known Issues

### Turbopack + Tailwind CSS v4 on Windows

Earlier versions of this project encountered a critical Turbopack error with Tailwind CSS v4 on Windows. This has been resolved by downgrading to Tailwind CSS v3.4.1, which is fully compatible with Turbopack and Next.js 16.

### Google Fonts Warnings

Non-critical warnings about Google Fonts downloads may appear in development. The app uses fallback fonts automatically if external fonts fail to load.

## 🤝 Contributing

This is a private project for the digitale-rakete organization. If you have access and would like to contribute:

1. Create a feature branch (`git checkout -b feature/amazing-feature`)
2. Commit your changes (`git commit -m 'feat: Add amazing feature'`)
3. Push to the branch (`git push origin feature/amazing-feature`)
4. Open a Pull Request

## 📄 License

Private - All rights reserved by digitale-rakete organization.

## 🔗 Links

- **GitHub Repository**: [https://github.com/digitale-rakete/typeform-design-system](https://github.com/digitale-rakete/typeform-design-system)
- **Vercel Deployment**: [To be deployed]
- **Organization**: [digitale-rakete](https://github.com/digitale-rakete)

## 🆘 Support

For issues, questions, or feature requests, please open an issue on the GitHub repository.

---

Built with ❤️ by digitale-rakete team
