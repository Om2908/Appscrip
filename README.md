# Product Listing Page (PLP) - mettä muse

A responsive Product Listing Page built with Next.js, featuring Server-Side Rendering (SSR), SEO optimization, and integration with FakeStoreAPI.

## Features

- ✅ **Server-Side Rendering (SSR)** - Products are fetched server-side for optimal performance and SEO
- ✅ **Responsive Design** - Fully responsive for mobile, tablet, and desktop
- ✅ **SEO Optimized** - Includes proper meta tags, schema markup, and semantic HTML
- ✅ **Clean Code Structure** - Well-organized component architecture
- ✅ **Minimal Dependencies** - Uses only essential packages
- ✅ **Accessibility** - ARIA labels and semantic HTML elements

## Tech Stack

- **Framework**: Next.js 16 (App Router)
- **Language**: JavaScript (React)
- **Styling**: CSS Modules
- **API**: FakeStoreAPI for product data

## Project Structure

```
plp-app/
├── src/
│   ├── app/
│   │   ├── layout.js          # Root layout with SEO metadata
│   │   ├── page.js             # Main PLP page (SSR)
│   │   ├── globals.css         # Global styles
│   │   └── page.module.css     # Page-specific styles
│   └── components/
│       ├── Header/             # Header component
│       ├── Hero/               # Hero section with H1
│       ├── FilterSidebar/      # Filter sidebar (client component)
│       ├── ProductGrid/        # Product grid (client component)
│       ├── ProductListing/     # Wrapper for filters + grid
│       └── Footer/             # Footer component
├── public/                     # Static assets
└── netlify.toml               # Netlify deployment config
```

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

## Deployment to Netlify

1. Push your code to a GitHub repository named `Appscrip-task-[your-name]`

2. Go to [Netlify](https://www.netlify.com/) and sign in

3. Click "Add new site" → "Import an existing project"

4. Connect your GitHub repository

5. Configure build settings:
   - **Build command**: `npm run build`
   - **Publish directory**: `.next`

6. Click "Deploy site"

The `netlify.toml` file is already configured for Next.js deployment.

## SEO Features

- **Page Title**: "Discover Our Products - mettä muse | Handcrafted Artisan Products"
- **Meta Description**: Optimized description with keywords
- **H1 Tag**: "DISCOVER OUR PRODUCTS" in Hero section
- **H2 Tag**: Description text in Hero section
- **Schema Markup**: JSON-LD structured data for CollectionPage and Product items
- **Image Alt Text**: Descriptive alt text for all product images
- **Semantic HTML**: Proper use of `<article>`, `<section>`, `<nav>`, etc.

## Code Quality

- **Naming Convention**: camelCase for variables, PascalCase for components
- **Component Structure**: Modular, reusable components
- **CSS Modules**: Scoped styling to prevent conflicts
- **Minimal DOM**: Efficient rendering with Next.js Image optimization
- **Accessibility**: ARIA labels and semantic HTML

## Responsive Breakpoints

- **Desktop**: > 1024px (4-column grid)
- **Tablet**: 768px - 1024px (3-column grid)
- **Mobile**: < 768px (2-column grid, collapsible filters)

## API Integration

The page fetches products from [FakeStoreAPI](https://fakestoreapi.com/) using Next.js Server Components with ISR (Incremental Static Regeneration) set to 1 hour revalidation.

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

This project is created for Appscrip assessment purposes.
