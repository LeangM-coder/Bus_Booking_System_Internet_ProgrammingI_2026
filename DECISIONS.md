# DECISIONS

Short record of design choices for the Bus Ticket Booking System, with the reason
and what was given up. Newest decisions at the bottom. "Status" means whether I still
agree with it or it needs a second look.

## D-001: Vue 3 + Vite, plain JavaScript, `<script setup>`
- **Why:** The proposal says Vue. Vite is the standard Vue 3 tool now and starts fast
  with `npm run dev`. `<script setup>` keeps components short.
- **Instead of:** Vue CLI (no longer recommended), Nuxt (too much for this size),
  TypeScript (extra learning on top of Spring Boot and Vue).
- **Cost:** No type checking, so mistakes in props or data shapes only show up at runtime.
- **Status:** OK. Can add TypeScript later if it helps.

## D-002: vue-router in history mode (`/search`, not `/#/search`)
- **Why:** Cleaner URLs, and nicer for sharing a ticket link.
- **Cost:** Refreshing a deep link only works if the server falls back to `index.html`.
  Vite dev does this by itself, but Spring Boot or nginx must be set up for it.
- **Status:** Revisit in Stage 8 when I decide how to host the build. Hash mode is the
  fallback if it becomes a problem.

## D-003: One global CSS file, no UI library
- **Why:** The wireframes are black and white and simple. A library would fight that
  look, and writing the CSS myself is better practice for Internet Programming I.
- **Cost:** Class names are global, so I have to avoid clashes myself. Some styling is
  repeated between pages.
- **Status:** OK for now. Split into scoped styles if the file gets hard to manage.

## D-004: No Pinia yet, only a tiny reactive `session` object
- **Why:** The only shared state right now is "who is logged in", and it is fake.
  One `reactive({ user })` is enough for the navbar.
- **Cost:** Will need replacing when JWT login arrives (Stage 3).
- **Status:** Revisit in Stage 3. Booking state (trip, seats) may need a store then.

## D-005: All sample data lives in `src/data/mock.js`
- **Why:** Screens are static for check-1. One file means one place to replace with API
  calls later, and no fake data hidden inside components.
- **Cost:** Some views copy the data into local `ref`s so Edit/Cancel can change the
  screen. Those changes are lost on refresh, which is intended.
- **Status:** OK. Delete the file piece by piece as real endpoints appear.

## D-006: No route guards yet
- **Why:** There is no real login, so a guard would only be pretend security.
  Admin and Staff pages can be opened by typing the URL during this stage.
- **Cost:** The "admin pages only open for admins" rule from the proposal is NOT met yet.
- **Status:** Must do in Stage 3 (router `beforeEach` + backend role checks). The backend
  must enforce it too; the frontend guard is only for convenience.

## D-007: Mobile first
- **Why:** The proposal says most people book from a phone. Base styles are for a narrow
  screen, with changes at about 640px (trip cards, seat page), 760px (admin sidebar) and
  900px (admin forms).
- **Status:** OK. Still needs a check on a real phone.

## D-008: Seat layout and naming
- **Why:** 2+2 layout from the wireframe, seats named by row and letter (`3A`, `3B`, `3C`,
  `3D`) with the aisle between B and C. Easy to read and easy to store as a string.
- **Assumption (not in the SRS):** at most 5 seats per booking. I picked this to keep the
  UI simple; it needs a business decision.
- **Status:** Open. The real seat list should come from the `seats` table, not be
  generated in the component.

## D-009: Routes and Schedules share one admin screen
- **Why:** The wireframe has one screen with a table and an "Add Schedule" form. The
  sidebar still shows both menu items and both open the same screen.
- **Open question:** The ERD has separate `routes` and `trips` tables, so a real "manage
  routes" screen (add a city pair) may be needed. This screen only picks From/To.
- **Status:** Open. Decide when the ERD is final.

## D-010: Payment is simulated and labelled as such
- **Why:** Same as the proposal: a real gateway needs approval. Each method shows a
  "Simulated" tag and the page says no real money is charged.
- **Status:** OK for the prototype.

## D-011: Git habits
- Conventional-style commit messages (`feat(frontend): ...`, `chore: ...`), one screen
  or one concern per commit.
- Commits made with AI help carry a `Co-authored-by: Claude` line, and the details are
  in `AI_LOG.md`.
- Milestones are tagged (`check-1`, ...).
