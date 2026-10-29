# Midterm — Web Technologies

- **Name:** Muhammad Ammar Khalid
- **Roll number:** FA24-BCS-137
- **N:** 37
- **BP:** 637px (600 + 37)
- **H:** 259 ((37 × 7) mod 360) → accent `hsl(259, 70%, 45%)`
- **K:** 4 ((37 mod 3) + 3)
- **Add-to-cart limit:** 3 ((37 mod 4) + 2)
- **Delivery date range:** 2026-10-29 to 2026-12-05 (exam date + 37 days)

## Files changed

Project files are in `midterm/assignment-2/`; this README is in `midterm/`.

- `assignment-2/index.html` — mega-menu, mobile accordion, cart icon link, mini-cart container, script link
- `assignment-2/product.html` — same header changes, fixed the `🎁z` typo
- `assignment-2/styles.css` — mega-menu, accordion, mini-cart, breakpoint and checkout form styles
- `assignment-2/checkout.html` (new) — checkout form
- `assignment-2/script.js` (new) — cart badge, mini-cart, add limit
- `README.md` (new) — this file

## Task 1 — Mega-menu

I added a "Shop by Category" item to the existing navbar in `index.html` and
`product.html`. From 637px up it opens a full-width panel with 4 columns, each a
`<ul>` with a visible `<h2>` heading and 4 links. It uses `:hover` and
`:focus-within` with no JavaScript, so it opens with Tab alone, stays open while
the pointer moves into the panel, and closes when focus leaves. The panel is
`position:absolute` against the navbar, so it never pushes content down, and the
header has `z-index:1100`, so it sits above the product grid and card hover
effects. I replaced Bootstrap's `d-xl-*` utilities with CSS at 637px so the
layout switches at my BP. Below BP the same 4 groups appear in the hamburger menu
as four independent `<details>`/`<summary>` accordions, closed by default. I also
fixed the `🎁z` typo in `product.html`.

## Task 2 — Checkout form

`checkout.html` has two fieldsets (Contact, Delivery) with legends, and every
control has a label joined with `for`/`id`. Phone uses
`pattern="03[0-9]{2}-[0-9]{7}"`; the delivery date uses `min="2026-10-29"` and
`max="2026-12-05"`. Errors use `:user-invalid`, so nothing is red on page load.
From 637px the fieldsets sit side by side with labels in a left grid column
(`display:contents` on each field); below that it is one column with labels above
inputs. The submit button is full width at every size. The cart icon links to this
page. All checkout styles are in `styles.css`, in the section labelled for Task 2.

## Task 3 — Cart badge and mini-cart

`script.js` (plain JavaScript) reads each product's name and price from its card
and pushes it into a `cart` array. The badge shows `cart.length`. Clicking the
cart icon toggles a mini-cart with Remove buttons, and the total is computed with
`reduce()`. Each product can be added at most 3 times; after that its button reads
"Limit reached" and is disabled until one is removed. The cart icon is an `<a>` to
checkout and the script calls `preventDefault()` so it toggles the panel; the
panel also has a Checkout link.

## AI tools used

Codex, Claude
