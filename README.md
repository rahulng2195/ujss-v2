# UJSS Next.js 16 Conversion

This is a conversion of the UJSS Bootstrap HTML template to Next.js 16 (App Router).

## Features Converted

- ✅ Responsive Navigation Bar with dropdown menus
- ✅ Hero Banner Section (index-2.html style)
- ✅ Services Section
- ✅ About Section
- ✅ Counter Stats Section
- ✅ Footer with social links
- ✅ All assets (CSS, JS, images, fonts)
- ✅ Bootstrap 5.3 integration
- ✅ TypeScript support

## Project Structure

```
UJSS-nextjs/
├── app/
│   ├── layout.tsx          # Root layout with CSS and JS imports
│   ├── page.tsx            # Main homepage (index-2.html converted)
│   └── globals.css         # Global styles
├── components/
│   ├── Navbar.tsx          # Navigation component
│   ├── Banner.tsx          # Hero banner component
│   ├── Services.tsx        # Services section
│   ├── About.tsx           # About section
│   ├── Counter.tsx         # Counter stats section
│   ├── Footer.tsx          # Footer component
│   └── Preloader.tsx       # Loading preloader
├── public/
│   └── assets/             # All original theme assets
│       ├── css/            # Bootstrap & theme styles
│       ├── js/             # jQuery plugins & scripts
│       ├── img/            # Images
│       └── fonts/          # Icon fonts
├── package.json
├── tsconfig.json
└── next.config.js
```

## Installation

1. **Navigate to the project directory:**
   ```bash
   cd UJSS-nextjs
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

## Development

Run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Build for Production

```bash
npm run build
npm start
```

## Key Conversions

### 1. HTML to React Components
- All HTML sections are converted to reusable React components
- Used TypeScript for type safety
- Implemented Next.js 16 App Router structure

### 2. Image Optimization
- Used Next.js `Image` component for automatic optimization
- Images load faster with built-in lazy loading

### 3. Navigation
- Used Next.js `Link` component for client-side navigation
- Maintains all original dropdown functionality

### 4. Scripts & Styles
- All original CSS files are preserved in public/assets
- jQuery and plugins loaded via Next.js Script component
- Bootstrap 5.3 included

## Customization

### Adding More Pages
Create new page files in the `app` directory:
```typescript
// app/about/page.tsx
export default function About() {
  return <div>About Page</div>
}
```

### Modifying Components
Edit components in the `components` directory. All components use 'use client' directive for interactivity.

### Styling
- Main styles: `/public/assets/css/style.css`
- Responsive: `/public/assets/css/responsive.css`
- Dark theme: `/public/assets/css/theme-dark.css`

## Notes

- **jQuery Dependencies**: The original theme uses jQuery and plugins (Owl Carousel, Magnific Popup, etc.). These are loaded in the layout for compatibility.
- **Future Enhancement**: Consider replacing jQuery plugins with React alternatives for better performance:
  - Owl Carousel → Swiper React or react-slick
  - Magnific Popup → React Modal libraries
  - WOW.js → Framer Motion

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

Original template by HiBootstrap. Next.js conversion for client use.
