# Gemini Agent Instructions for FlyRank Frontend Capstone

This `GEMINI.md` file provides specific guidelines for the Gemini agent when working within the `flyrank-frontend-capstone` project. Adhering to these instructions will ensure consistency, efficiency, and alignment with project goals.

## Project Overview

This is a frontend application likely built with React and Vite, as indicated by the file structure and previous diffs. It appears to include components for forms and general UI. The primary focus is on building a responsive and interactive user interface.

## Core Mandates & Conventions

1.  **Prioritize Existing Patterns:** Always analyze and adhere to existing code patterns, architectural choices, and styling conventions found in the project. For example, if React functional components with hooks are used, continue that pattern.
2.  **TypeScript First:** The project uses TypeScript. Ensure all new code and modifications are type-safe and leverage TypeScript's features to improve code quality. Avoid any use of `any` unless absolutely necessary and justified.
3.  **Component-Based Architecture:** Follow a component-based architecture. Components should be small, reusable, and have clear responsibilities.
4.  **Styling:** Observe the existing CSS structure and naming conventions. If new styles are needed, integrate them consistently with `App.css`, `ContactForm.css`, or create new, appropriately scoped CSS modules if a pattern for them emerges.
5.  **Testing:** When implementing new features or fixing bugs, include appropriate tests (unit or integration) to ensure correctness and prevent regressions. Identify and use the project's chosen testing framework (e.g., Vitest, React Testing Library).
6.  **Accessibility:** As detailed in `WORKFLOW.md`, prioritize accessibility. Ensure new UI elements are semantically correct, keyboard navigable, and have adequate color contrast.
7.  **Dependencies:** Before introducing new libraries or frameworks, verify if a similar functionality can be achieved with existing project dependencies or vanilla JavaScript/TypeScript. If a new dependency is truly needed, ensure it's a widely accepted and maintained library.
8.  **No Unnecessary Comments:** Add comments sparingly. Focus on explaining *why* complex logic is implemented, rather than *what* the code does (which should be self-evident).
9.  **File Structure:** Maintain the existing file and folder structure. For example, new components related to `ContactForm` should ideally reside within `src/components/ContactForm`.

## Development Process

-   **Understand:** Before making changes, thoroughly understand the existing code related to the task.
-   **Plan:** Propose a concise plan for significant changes.
-   **Implement:** Apply changes following the conventions above.
-   **Verify:** Run existing tests and add new ones as needed. Ensure linting and type checks pass.

This document serves as a living guide. If new conventions or architectural decisions are made, this file should be updated accordingly.
