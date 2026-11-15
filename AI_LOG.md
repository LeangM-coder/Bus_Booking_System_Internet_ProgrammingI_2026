# AI_LOG

Honest record of where AI (Claude) helped on this project, what it produced, and what
was checked. Format per entry: date, what I asked, what the AI gave me, what was
verified, what is still on me to check.

Tool used for everything below: Claude (Anthropic), claude.ai chat.

---

## 2026-11-15 - UI wireframes (13 screens)
**Asked:** Low-fidelity Balsamiq-style wireframes for Home, Login, Register, Results,
Seat Selection, Payment, E-ticket, My Bookings, four Admin screens and a Bus Staff
screen. Mobile frames (375px) plus desktop for Admin, with flow arrows.

**AI gave me:** PNG images drawn with a Python script (hand-drawn font, grey boxes) plus
one overview sheet with the flow `Home -> Results -> Seats -> Payment -> E-ticket -> My Bookings`.

**Limits:** It could not open my Balsamiq Cloud link (needs a login), so the images are
not inside my Balsamiq project. I have to import them myself.

**AI decisions I did not specify** (so I should confirm them):
- two-row navbar on mobile so everything fits in 375px
- Bus Staff screen drawn for a phone
- cancel only on upcoming Confirmed bookings, with a "2 hours before departure" note
- all names, prices and references are made up

**Checked by AI:** looked at rendered images and fixed an overlapping label and a wrong
scale on the overview sheet.
**Still on me:** compare each screen against the SRS use cases.

## 2026-11-15 - Throw-away prototype (single HTML file with Vue from a script tag)
**Asked:** "static frontend".
**AI gave me:** a working click-through prototype (one `index.html`, `app.js`, `style.css`)
with its own login, seat booking and admin logic saved in localStorage.

**Outcome:** This is NOT in the repo. It did not match the proposal (Vue project) and it
had far more logic than a "static screens" milestone needs. I only reused its CSS and
the screen layouts. Not reused: its fake booking engine and localStorage code.

## 2026-11-15 - `frontend/` Vue 3 + Vite project (check-1)
**Asked:** Build the frontend in Vue from the proposal, runnable with `npm run dev` from a
fresh clone, static screens from the spec with no real data, `AI_LOG.md` and
`DECISIONS.md`, small commits, tag `check-1`.

**AI gave me:**
- project scaffold (Vite, vue-router) and `package-lock.json`
- 11 screens + navbar + `SeatMap` component, split into one commit per screen group
- `src/data/mock.js` with all sample data
- first drafts of this file, `DECISIONS.md` and `README.md`

**Something that went wrong:** one command created the folders with `{a,b}` shell
shorthand that the shell did not expand, so the first "app shell" commit was made
without its source files and did not build. The AI noticed on the next build, recreated
the files and amended that local commit before anything was pushed. Lesson: run the
build before committing, not after.

**Checked by AI (in its sandbox):**
- `npm run build` passes after every commit
- fresh `git clone` -> `npm ci` -> `npm run dev` starts, and a headless Chromium
  opened all 15 routes with no console errors
- clicked the whole flow Home -> Results -> Seats -> Payment -> E-ticket
- viewed screenshots of the seat page, ticket and admin reports

**Not checked:** Safari / Firefox / Edge, a real phone, keyboard use and screen readers,
Khmer text. The browser test used Chromium only.

**Still on me (tick when done):**
- [ ] run it myself on my laptop and click every screen
- [ ] check each screen against the SRS and fix wording that does not match
- [ ] decide the open questions at the bottom of `DECISIONS.md`
- [ ] read the code of one screen line by line so I can explain it in the demo

## 2026-11-15 - Docs
**Asked:** Real entries for `AI_LOG.md` and `DECISIONS.md`.
**AI gave me:** the drafts above. The "Status" lines in `DECISIONS.md` are the AI's
suggestions; I need to agree or change them.
