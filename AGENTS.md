# AGENTS.md - Development Guidelines for Agentic Coding

This file contains comprehensive guidelines for agentic coding agents working in this Astro-based portfolio repository.

## Project Overview

- **Framework**: Astro 3.0.7 (Static Site Generator)
- **Language**: TypeScript with partial JavaScript adoption
- **Styling**: Tailwind CSS 3.3.3 with custom color palette
- **Package Manager**: pnpm (evidenced by pnpm-lock.yaml)
- **Module System**: ES Modules (type: "module" in package.json)
- **Content Language**: Spanish (primary)
- **Project Type**: Personal portfolio website

## Build & Development Commands

```bash
# Development
pnpm dev              # Start development server
pnpm start            # Alias for dev

# Production
pnpm build            # Build for production
pnpm preview          # Preview production build

# Astro CLI
pnpm astro <command>  # Run Astro CLI commands
```

**Note**: No testing framework is currently configured. When adding tests, set up appropriate test commands.

## Code Structure & Organization

### Directory Structure
```
src/
├── components/          # Reusable UI components
│   ├── Hero/           # Hero section components
│   ├── Projects/       # Projects section components
│   ├── Experence/     # Experience section components
│   └── Skills/         # Skills section components
├── icons/              # SVG icon components
│   └── skills/         # Technology-specific icons
├── layouts/            # Page layout templates
├── pages/              # Route pages
├── data/               # Data files (mixed .ts and .js)
└── env.d.ts           # TypeScript environment definitions
```

### Import Conventions
- **Path Aliases**: Use `@/` prefix for src directory imports (e.g., `@/components/Header.astro`)
- **Relative Imports**: Use within component directories (e.g., `./HeroBadge.astro`)
- **Named Exports**: Preferred for data and utilities
- **Default Exports**: Used for main components and layouts

## Coding Conventions

### File Naming
- **Components**: PascalCase (e.g., `HeroText.astro`, `Layout.astro`)
- **Data Files**: camelCase (e.g., `projects.ts`, `experience.js`)
- **Icons**: PascalCase with "Icon" suffix (e.g., `LocationIcon.astro`)
- **Utilities**: camelCase or kebab-case (be consistent)

### TypeScript Guidelines
- **Interfaces**: Use `I` prefix for interfaces (e.g., `IProject`)
- **Type Safety**: Prefer TypeScript over JavaScript for new code
- **Mixed Languages**: Existing codebase has mixed TS/JS - gradually migrate to TS
- **Path Aliases**: Configured in tsconfig.json (`@/*` → `src/*`)

### Astro Component Patterns
```astro
---
// Frontmatter script block
import Component from "@/components/Component.astro";
interface Props {
  title: string;
  description?: string;
}
const { title, description = "" } = Astro.props;
---

<!-- HTML-like template -->
<div class="tailwind-classes">
  <h1>{title}</h1>
  {description && <p>{description}</p>}
</div>

<style>
  /* Component-specific styles */
  .custom-class {
    property: value;
  }
</style>
```

### Styling Guidelines
- **Tailwind CSS**: Use utility classes extensively
- **Custom Colors**: Use defined color palette:
  - `one`: "#1f2024" (dark background)
  - `two`: "#003b8e" (dark blue)
  - `three`: "#1564BF" (primary blue)
  - `four`: "#5e91f2" (light blue)
  - `five`: "#92b8ff" (lightest blue)
  - `gris`: "#6b7280" (gray)
- **Responsive Design**: Mobile-first approach with `md:` breakpoints
- **Global Styles**: Define in Layout.astro with `is:global`

### Icon Component Patterns
```astro
<svg
  {...Astro.props}
  xmlns="http://www.w3.org/2000/svg"
  fill="none"
  viewBox="0 0 24 24"
  stroke-width="1.5"
  stroke="currentColor"
>
  <!-- SVG paths -->
</svg>
```

## Data Management

### TypeScript Data Structures
```typescript
export interface IProject {
  name: string;
  image: string;
  repository: string;
  deploy: string;
  description: string;
  stack: string[];
  status: "Activo" | "En Pausa" | "Finalizado";
}

export const projects: IProject[] = [
  // Data array
];
```

### JavaScript Data Files
- Existing data files use JavaScript exports
- Maintain consistency with existing patterns
- Consider migrating to TypeScript for type safety

## Component Architecture

### Feature-Based Organization
- Group related components in feature directories
- Keep components focused and reusable
- Use composition over inheritance

### Props Destructuring
```astro
---
const { title, description, className = "" } = Astro.props;
---
```

### Conditional Rendering
```astro
{condition && <Component />}
{condition ? <ComponentA /> : <ComponentB />}
```

## Language & Content

### Spanish Language Support
- **HTML Lang**: `lang="es-co"` in Layout.astro
- **Content**: Primary language is Spanish
- **Comments**: Can be in Spanish or English
- **Variable Names**: Use English for code consistency

### Accessibility
- Use semantic HTML elements
- Include `sr-only` classes for screen readers
- Add appropriate ARIA labels when needed
- Support `prefers-reduced-motion` for animations

## Performance Guidelines

### Astro Best Practices
- Use islands architecture for interactive components
- Minimize client-side JavaScript
- Optimize images and assets
- Leverage Astro's static site generation

### Tailwind Optimization
- Use utility classes efficiently
- Avoid unnecessary custom CSS
- Leverage Tailwind's purging in production

## Development Workflow

### Before Making Changes
1. Read existing code patterns in the relevant directory
2. Check for similar components to maintain consistency
3. Understand the TypeScript interfaces and data structures
4. Review existing styling patterns

### Code Quality
- **No Linting**: Currently no ESLint configuration - write clean code manually
- **No Formatting**: No Prettier configuration - maintain consistent formatting
- **No Testing**: No test framework - consider adding tests for critical components

### Git Workflow
- Use conventional commit messages when possible
- Focus on single features per commit
- Test changes manually before committing

## Missing Development Tools (Recommendations)

### High Priority
1. **ESLint Configuration**: Add for code quality
2. **Prettier Configuration**: Add for consistent formatting
3. **TypeScript Strict Mode**: Enable better type checking
4. **Testing Framework**: Add Vitest or Jest for component testing

### Medium Priority
1. **Pre-commit Hooks**: Add Husky for automated checks
2. **Type Checking**: Add `tsc --noEmit` to build process
3. **Bundle Analysis**: Add bundle analyzer for optimization

## Common Patterns

### Import Statements
```astro
---
// External dependencies
import { SomeClass } from "external-package";

// Internal components (path aliases)
import Component from "@/components/Component.astro";
import Icon from "@/icons/Icon.astro";

// Relative imports
import LocalComponent from "./LocalComponent.astro";

// Data imports
import { projects } from "@/data/projects";
---
```

### Component Composition
```astro
---
import Header from "@/components/Header.astro";
import Footer from "@/components/Footer.astro";
import MainContent from "./MainContent.astro";
---
<Layout title="Page Title">
  <Header />
  <MainContent />
  <Footer />
</Layout>
```

### Error Handling
- Currently no formal error handling patterns
- Use TypeScript interfaces to prevent data errors
- Add validation for user inputs when needed
- Consider adding error boundaries for robust applications

## Deployment

### Build Process
- `pnpm build` creates static files in `dist/`
- Use `pnpm preview` to test production build locally
- Deploy static files to hosting platform

### Environment Variables
- Use Astro's environment variable handling
- Store sensitive data in `.env` files
- Reference with `import.meta.env.VARIABLE_NAME`

## Security Considerations

- No user authentication in current codebase
- Validate external API responses
- Sanitize user-generated content
- Use HTTPS in production
- Keep dependencies updated

## Conclusion

This codebase follows a clean, minimal approach with Astro and Tailwind CSS. While it lacks some development tooling, the code structure is well-organized and follows consistent patterns. When making changes, prioritize maintaining the existing conventions while gradually improving type safety and code quality.

Focus on writing clean, maintainable code that follows the established patterns in this repository.