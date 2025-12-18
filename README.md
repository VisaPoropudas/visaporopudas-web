# Visa Poropudas - Professional Portfolio

A modern, responsive professional homepage built with Next.js, React, and Tailwind CSS.

## Features

- 🌐 **Multilingual Support**: English and Finnish language support with next-intl
- 🎨 **Dark/Light Mode**: Theme toggle with system preference detection
- 📱 **Mobile-First Design**: Fully responsive layout optimized for all devices
- ✨ **Smooth Animations**: Framer Motion for engaging transitions
- 🎯 **Professional UI**: Clean, modern design with react-bootstrap-icons
- 🎠 **Projects Carousel**: Interactive Swiper carousel showcasing GitHub projects
- 🔥 **Firebase Ready**: Configured for Firebase hosting deployment

## Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: JavaScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: React Bootstrap Icons
- **Carousel**: Swiper.js
- **Internationalization**: next-intl
- **Theme**: next-themes

## Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/visaporopudas-web.git
cd visaporopudas-web
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

## Project Structure

```
visaporopudas-web/
├── app/                    # Next.js app directory
│   ├── [locale]/          # Internationalized routes
│   └── globals.css        # Global styles
├── components/            # React components
│   ├── layout/           # Header, Footer, Navigation
│   ├── sections/         # Page sections
│   └── ui/               # Reusable UI components
├── data/                 # Static data files
│   ├── projects.js       # GitHub projects data
│   ├── skills.js         # Skills and expertise
│   └── content.js        # General content and links
├── messages/             # Translation files
│   ├── en.json          # English translations
│   └── fi.json          # Finnish translations
└── public/              # Static assets
    ├── images/          # Image files
    ├── logo.svg         # Logo
    └── favicon.svg      # Favicon
```

## Customization

### Update Personal Information

1. **Social Links**: Edit `data/content.js` to update your social media profiles and email
2. **Projects**: Modify `data/projects.js` to add your GitHub projects with descriptions
3. **Skills**: Update `data/skills.js` to showcase your AI and web development skills
4. **Education & Certificates**: Add your credentials in `data/content.js`

### Add Images

- Replace placeholder images in `public/images/placeholders/`
- Add your profile photo as `public/images/profile.jpg`
- Add project screenshots matching the names in `data/projects.js`

### Translations

- Edit `messages/en.json` for English content
- Edit `messages/fi.json` for Finnish content

## Build for Production

```bash
npm run build
```

This creates an optimized static export in the `out/` directory, ready for Firebase hosting.

## Firebase Deployment

1. Install Firebase CLI:
```bash
npm install -g firebase-tools
```

2. Initialize Firebase:
```bash
firebase init hosting
```

3. Build and deploy:
```bash
npm run build
firebase deploy
```

## License

ISC License - feel free to use this template for your own portfolio!

## Contact

Visa Poropudas - [LinkedIn](https://www.linkedin.com/in/visaporopudas)

---

Built with ❤️ using Next.js, React & Tailwind CSS
