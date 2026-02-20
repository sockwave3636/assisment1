# EIRA Ayurveda Website

A modern, responsive website for EIRA Ayurveda built with Next.js, TypeScript, and Tailwind CSS.

## Features

- 🎨 Modern, clean UI with improved visual hierarchy
- 📱 Fully responsive design (mobile + desktop)
- 🎯 Brand-inspired color scheme (green/primary tones)
- ⚡ Fast performance with Next.js
- 🔍 SEO-friendly structure
- ♿ Accessible components

## Pages

- **Home** (`/`) - Hero section, journey steps, features, testimonial, and CTA
- **Packages** (`/packages`) - Wellness package listings
- **How It Works** (`/how-it-works`) - Detailed journey explanation
- **Download** (`/download`) - App download page

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

### Build for Production

```bash
npm run build
npm start
```

## Tech Stack

- **Next.js 14** - React framework
- **TypeScript** - Type safety
- **Tailwind CSS** - Styling
- **Lucide React** - Icons

## Project Structure

```
├── app/
│   ├── globals.css       # Global styles
│   ├── layout.tsx        # Root layout
│   ├── page.tsx          # Homepage
│   ├── packages/         # Packages page
│   ├── how-it-works/     # How it works page
│   └── download/         # Download page
├── components/
│   ├── Navbar.tsx        # Navigation component
│   └── Footer.tsx        # Footer component
└── public/               # Static assets
```

## Color Scheme

The design uses a brand-inspired color palette:
- **Primary Green**: `#3a8d5a` - Main brand color
- **Accent Orange**: `#f17713` - Accent color
- **Neutral Grays**: For text and backgrounds

## Customization

- Colors can be adjusted in `tailwind.config.ts`
- Content can be modified in respective page files
- Components are reusable and can be customized as needed
