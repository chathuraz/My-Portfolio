# Chathura Sajeewa - Portfolio Website

A beautiful, responsive portfolio website showcasing my work as a Software Engineer specializing in mobile & web applications, AI solutions, and network development.

## Features

- ✨ Modern and clean design with NotebookLM-inspired aesthetic
- 📱 Fully responsive
- 🌙 Dark mode support
- ⚡ Fast performance with Next.js 14
- 🎨 Beautiful gradient text animations
- 📧 Contact form with Web3Forms integration
- 🎯 Sections: Hero, About, Skills, Experience, Projects, Education, Achievements, Contact

## About Me

Passionate software engineer specializing in developing scalable mobile & web applications, AI solutions, and network development. Experienced in collaborating with global teams and proficient in Flutter, Firebase, and modern web technologies.

### Highlights

- 🏆 **Hackathon Finalist** - Top 10 in Netcom 2024 & 2025
- 🌟 **Open Source Contributor** - Led UI transformation for ViMusic (Kotlin)
- 🎓 **Student** - BSc (Hons) Computing & IS at Sabaragamuwa University
- 💼 **Role** - Software Engineer Intern

## Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. Install dependencies:

```bash
npm install
```

2. Run the development server:

```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser

## Customization

### Update Personal Information

1. **Hero Section** (`src/components/Hero.tsx`):
   - Replace "Your Name" with your name
   - Update the tagline and description

2. **About Section** (`src/components/About.tsx`):
   - Update the bio text
   - Modify the Quick Facts

3. **Skills Section** (`src/components/Skills.tsx`):
   - Add or remove skills based on your expertise

4. **Experience Section** (`src/components/Experience.tsx`):
   - Replace with your actual work experience

5. **Projects Section** (`src/components/Projects.tsx`):
   - Add your real projects
   - Update GitHub and live demo links

6. **Education Section** (`src/components/Education.tsx`):
   - Add your educational background
   - Update certifications

7. **Contact Section** (`src/components/Contact.tsx`):
   - Update email, phone, and location
   - Update social media links

### Styling

The project uses Tailwind CSS. Customize colors and styles in:
- `tailwind.config.ts` - Theme configuration
- `src/app/globals.css` - Global styles

## Building for Production

```bash
npm run build
npm start
```

## Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Import your repository on [Vercel](https://vercel.com)
3. Deploy with one click

### Other Platforms

- Netlify
- AWS Amplify
- GitHub Pages (with static export)

## Tech Stack

- **Framework:** Next.js 14
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Icons:** Lucide React
- **Animations:** Custom CSS animations
- **Contact Form:** Web3Forms

## Project Structure

```
Portfolio/
├── src/
│   ├── app/
│   │   ├── layout.tsx
│   │   ├── page.tsx
│   │   └── globals.css
│   └── components/
│       ├── Navbar.tsx
│       ├── Hero.tsx
│       ├── About.tsx
│       ├── Skills.tsx
│       ├── Experience.tsx
│       ├── Projects.tsx
│       ├── Education.tsx
│       ├── Achievements.tsx
│       ├── Contact.tsx
│       └── Footer.tsx
├── public/
├── package.json
├── tsconfig.json
├── tailwind.config.ts
└── next.config.js
```

## License

MIT License - feel free to use this template for your own portfolio!

## Support

If you have any questions or need help customizing your portfolio, feel free to open an issue.
