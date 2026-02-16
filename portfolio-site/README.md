# André Diniz - Portfolio Website

A modern, responsive portfolio website showcasing my work as a Full-Stack Developer.

## Features

✨ **Professional Design**
- Clean, modern interface
- Smooth animations and transitions
- Fully responsive (mobile, tablet, desktop)
- SEO optimized

🎯 **Sections**
- Hero section with intro and CTAs
- About me section
- Skills showcase (Frontend, Backend, Tools)
- Featured projects with live demos
- Contact section with multiple ways to reach out

📱 **Social Links**
- LinkedIn profile
- GitHub (add yours)
- Fiverr profile (add yours)
- Direct email contact

## Tech Stack

- **React 18** - UI framework
- **TypeScript** - Type safety
- **Tailwind CSS** - Styling
- **Lucide React** - Icons
- **Vite** - Build tool

## Quick Start

### Prerequisites
- Node.js 18+
- npm or yarn

### Installation

1. Navigate to the project folder

2. Install dependencies:
```bash
npm install
```

3. **IMPORTANT: Update your links** (see Customization section below)

4. Run development server:
```bash
npm run dev
```

5. Open http://localhost:5173

### Build for Production

```bash
npm run build
```

## Customization Guide

Before deploying, update these items in `src/App.tsx`:

### 1. Social Links (Lines 45-65)
```typescript
// Replace with your actual URLs:
href="https://github.com/YOUR_GITHUB"  // Your GitHub username
href="https://www.fiverr.com/YOUR_FIVERR_USERNAME"  // Your Fiverr profile
```

### 2. Project Demo URL (Line 17)
```typescript
liveUrl: "#", // Replace with your deployed dashboard URL
// Example: liveUrl: "https://sales-dashboard-andre.vercel.app"
```

### 3. Project Screenshot (Line 18)
Replace the placeholder image with a screenshot of your dashboard:
```typescript
image: "https://images.unsplash.com/..." 
// Replace with: "/assets/dashboard-screenshot.png"
// Or use a direct URL to your screenshot
```

### 4. About Me Text (Lines 87-96)
Customize the about section to reflect your personal story and experience.

### 5. Add More Projects
When you build more projects, add them to the `projects` array (Lines 12-20):
```typescript
const projects = [
  {
    title: "Your New Project",
    description: "Description here",
    tech: ["React", "Node.js"],
    liveUrl: "https://...",
    image: "/path/to/image.png"
  },
  // ... more projects
];
```

## Deployment

### Deploy to Vercel (Recommended)

1. Install Vercel CLI:
```bash
npm install -g vercel
```

2. Deploy:
```bash
vercel
```

3. Follow prompts and your site will be live!

### Deploy to Netlify

1. Build the project:
```bash
npm run build
```

2. Drag the `dist` folder to Netlify

Or use CLI:
```bash
npm install -g netlify-cli
netlify deploy
```

## Connecting Everything Together

Once both sites are deployed:

1. **Portfolio Site** → Main landing page (this project)
2. **Dashboard Demo** → Linked from portfolio's project section

Update the `liveUrl` in your portfolio to point to your deployed dashboard!

## Project Structure

```
portfolio-site/
├── src/
│   ├── App.tsx           # Main component with all sections
│   ├── main.tsx          # Entry point
│   └── index.css         # Global styles
├── public/
│   └── assets/           # Put your images here
├── index.html
├── package.json
└── README.md
```

## Tips for Great Portfolio

📸 **Screenshots**
- Take high-quality screenshots of your projects
- Use a tool like [screely.com](https://screely.com) for nice mockups
- Save them in `/public/assets/`

🎨 **Customization**
- Change the color scheme in Tailwind classes
- Blue (`bg-blue-500`) → Your favorite color
- Adjust animations in `tailwind.config.js`

✍️ **Content**
- Keep descriptions concise and clear
- Focus on what technologies you used
- Highlight what makes each project unique

🔗 **Links**
- Test all your links before deploying
- Make sure Fiverr and LinkedIn URLs are correct
- Add your GitHub if you have public repos

## SEO

The site includes basic SEO meta tags in `index.html`:
- Title: "André Diniz | Full-Stack Developer"
- Description with relevant keywords
- Viewport settings for mobile

Consider adding:
- Open Graph tags for social media sharing
- Google Analytics (if you want to track visitors)

## License

MIT - Feel free to use as template for your own portfolio!

## Next Steps

1. ✅ Deploy your dashboard first
2. ✅ Get the live URL
3. ✅ Update the `liveUrl` in this portfolio
4. ✅ Deploy this portfolio
5. ✅ Use the portfolio URL everywhere (Fiverr, LinkedIn, resume)

Good luck! 🚀
