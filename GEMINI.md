# Gemini Agent Instructions for FlyRank Frontend Capstone

This `GEMINI.md` file provides specific guidelines for the Gemini agent when working within the `flyrank-frontend-capstone` project. Adhering to these instructions will ensure consistency, efficiency, and alignment with project goals.

## Project Overview

This repository is organized as a multi-portal workspace containing two main applications:

1. **`instructor-portal`**: An instructor-facing application built with React 19, Vite, TypeScript, and Oxlint.
2. **`student-portal`**: A student-facing portal with booking and contact flows built with Next.js 16 (App Router), React 19, Tailwind CSS v4, TypeScript, and ESLint.

## Core Mandates & Conventions

1. **Framework Separation:**
   - **`instructor-portal`**: Single-Page Application (SPA) using Vite. Entry point is `src/main.tsx` and `src/App.tsx`. Component styles use CSS files colocated with components.
   - **`student-portal`**: Next.js App Router application. Routes, layouts, and server/client page components reside under `src/app/`. Do not introduce Vite-style `App.tsx` or `main.tsx` files here. Global styles are defined in `src/app/globals.css` with Tailwind CSS v4.
2. **Prioritize Existing Patterns:** Always analyze and adhere to existing code patterns, architectural choices, and styling conventions in each portal.
3. **TypeScript First:** Ensure all new code and modifications are type-safe and leverage TypeScript's features. Avoid any use of `any` unless absolutely necessary and justified.
4. **Component-Based Architecture:** Follow a component-based architecture with small, reusable components:
   - In `instructor-portal`, components reside under `src/components/`.
   - In `student-portal`, feature-specific components reside under `src/components/booking/` and `src/components/ContactForm/`, and shared UI primitives reside under `src/components/ui/`.
5. **Styling:**
   - In `instructor-portal`, observe existing CSS structure colocated with components.
   - In `student-portal`, use Tailwind CSS utility classes, design tokens in `globals.css`, or component-scoped CSS Modules (`*.module.css`).
6. **Testing:** Include appropriate tests (unit or integration) to ensure correctness and prevent regressions.
7. **Accessibility:** As detailed in `WORKFLOW.md`, prioritize accessibility. Ensure UI elements are semantically correct, keyboard navigable, and have adequate color contrast.
8. **Dependencies:** Before introducing new libraries, verify if functionality can be achieved with existing dependencies or vanilla TypeScript.
9. **No Unnecessary Comments:** Add comments sparingly, focusing on _why_ complex logic is implemented.

## Development Process

- **Understand:** Before making changes, thoroughly understand the existing code related to the task.
- **Plan:** Propose a concise plan for significant changes.
- **Implement:** Apply changes following the conventions above.
- **Verify:** Run existing tests and builds. Ensure linting and type checks pass across both portals.
