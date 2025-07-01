# GitHub Copilot Custom Instructions for safe-link

## Project Overview
- Type: React + TypeScript web app
- Tooling: Vite, Tailwind CSS, Vitest, ESLint
- Main directory: `src/`

## Coding Standards
- Use TypeScript for all source code.
- Follow functional React component patterns.
- Use Tailwind CSS for styling; avoid inline styles.
- Validate URLs and domains using utility functions in `src/utils/`.
- Keep components small, focused, and reusable.
- Prefer named exports over default exports.

## Testing
- Write tests for all components and utilities.
- Use Vitest for unit and integration tests (see `tests/`).
- Place new tests in the appropriate `tests/` subfolder.

## Linting & Formatting
- Follow ESLint rules as configured in `eslint.config.js`.
- Use Prettier formatting conventions if present.

## File/Folder Structure
- Place new React components in `src/components/`.
- Place new utilities in `src/utils/`.
- Place assets in `src/assets/`.
- Update `README.md` for significant changes.

## Commit & PR Guidelines
- Write clear, descriptive commit messages.
- Reference ticket numbers from `_tickets/` when relevant.
- Ensure all tests pass before submitting a PR.

## Security & Best Practices
- Never expose sensitive data or secrets.
- Validate and sanitize all user input.
- Follow best practices for accessibility (a11y).

---
These rules guide AI agents and contributors for consistent, high-quality contributions to the safe-link project.

