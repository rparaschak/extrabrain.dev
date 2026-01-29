## Project Overview

AstroWind is a production-ready template built with **Astro 5.0** and **Tailwind CSS**. It provides pre-built components (widgets) for creating professional websites, landing pages, and blogs with excellent performance and SEO.

> **📖 Component Reference**: For detailed documentation on all available widgets and components, see [`.guidelines/components.md`](.guidelines/components.md)

## Key rules you MUST follow
- Prefer creating reusable components instead of inline implementation

## Key Directories

```
src/
├── components/widgets/     # Main UI components (Hero, Features, etc.)
├── components/ui/         # Base UI elements (Button, Form, etc.)
├── components/common/     # Shared components (Image, Metadata, etc.)
├── layouts/              # Page layouts (PageLayout, LandingLayout, MarkdownLayout)
├── pages/               # Route pages and blog system
├── data/post/           # Blog post content (Markdown/MDX)
├── utils/               # Utility functions
├── config.yaml          # Site configuration
└── navigation.ts        # Header/footer navigation
```

## Development Commands

IMPORTANT: After each task run `npm run fix && npm run check && npm run build` to make sure project builds

- `npm run dev` - Start development server (localhost:4321)
- `npm run build` - Build production site
- `npm run check` - Run type checking and linting
- `npm run fix` - Auto-fix ESLint and Prettier issues

