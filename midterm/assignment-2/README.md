# Midterm Submission

## Student details

- **Name:** Muhammad Ammar Khalid
- **Registration number:** FA24-BCS-137
- **N:** 37
- **Breakpoint (BP):** 637px
- **Accent hue (H):** 259 degrees
- **K:** 4
- **Exam date:** 2026-10-29

## Task 1 - Shop by Category mega-menu

I added four semantic category columns to the existing desktop navigation. The panel opens with hover or `:focus-within`, uses absolute positioning so it does not push the product grid, and stays above page content.

At widths below 637px, the same four groups are available as independent, closed-by-default `<details>` accordions inside the existing hamburger navigation. The accent heading color uses `hsl(259, 70%, 45%)`.

## Task 2 - HTML5 checkout validation

I added `checkout.html` with Contact and Delivery fieldsets, labels connected to every control, the requested phone pattern, and a delivery date constrained from 2026-10-29 through 2026-12-05.

`checkout.css` uses `:user-invalid` so messages and red borders appear only after interaction. The fieldsets become a two-column CSS Grid with label columns at BP and wider, and a single stacked layout below BP.

## Task 3 - JavaScript cart

I added `script.js` to read product names and prices directly from the existing cards, maintain an array cart, render a badge and mini-cart, calculate totals with `reduce()`, and remove items immediately.

Each product can be added at most three times (`(N mod 4) + 2`). Reaching the limit disables that product button and changes its text; removing one restores the button.

## Files changed

- `index.html` - desktop/mobile category navigation, cart panel mount, and script link.
- `product.html` - matching desktop/mobile category navigation and cart panel mount.
- `styles.css` - mega-menu, responsive breakpoint, accent color, and mini-cart styling.
- `checkout.html` - semantic checkout form and HTML5 constraints.
- `checkout.css` - responsive form grid and interaction-only validation styling.
- `script.js` - cart array, badge, mini-cart rendering, removal, totals, and per-product limits.
- `README.md` - this submission documentation.
- `../FA24-BCS-137-midterm.pdf` - required screenshots and pasted code evidence.

## AI tools used

- Codex
- Copilot SDK in VS Code
