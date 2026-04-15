<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->

# Project Rules & Guidelines - Market Tools

## 1. Naming Conventions
- **Files:** Always use **snake-case** (with hyphens) for all file names (e.g., `font-transformer.tsx`, `main-navbar.ts`).
- **Directories:** Always use **snake-case** for folder names (e.g., `features/font-transformer`).
- **React Components:** Use **PascalCase** for component names in code, but the file name must remain **snake-case**.
  - *Correct:* File `font-card.tsx` -> `export const FontCard = () => {}`.

## 2. Architecture: Feature-Driven
- All core functionalities must be placed in `src/features/[feature-name]`.
- Each feature folder should follow this structure:
  - `components/`: UI components specific to this feature.
  - `hooks/`: Custom hooks for logic.
  - `utils/`: Helper functions and constants.
  - `types/`: TypeScript definitions.
  - `index.tsx`: The entry point for the feature.
- **Isolation:** Features should avoid importing internal components from other features. Use `src/components/shared` for common code.

## 3. Tech Stack & UI Style
- **Stack:** Next.js (App Router), Tailwind CSS, TypeScript, Shadcn/ui, Framer Motion.
- **UI Style: "Soft UI / Aesthetic"**
  - Design with rounded corners (`rounded-2xl` to `rounded-3xl`).
  - **Glassmorphism:** `bg-white/10` with `backdrop-blur-md` and `border-white/20`.
  - **Bento Grid:** Use for the main dashboard and tools display.
  - **Animations:** Use Framer Motion for all hover, entry, and state transitions.

## 4. Coding Standards
- Use Arrow Functions for components.
- Mobile-first responsive design.
