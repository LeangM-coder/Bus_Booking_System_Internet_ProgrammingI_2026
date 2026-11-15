# Bus Ticket Booking System

Web-based bus ticket booking for Cambodia (Internet Programming I project, ITC).
Passengers search trips, pick seats, pay (simulated) and get an e-ticket.
Admins manage buses, routes, schedules and reports. Bus staff check tickets.

## Status
**check-1:** static frontend screens only (Vue 3). No backend, no database, no real
login. All data comes from `frontend/src/data/mock.js`.

## Screens (routes)
| Route | Screen |
|---|---|
| `/` | Home: search form, popular routes |
| `/login`, `/register` | Login, Register |
| `/search` | Trip search results |
| `/trips/:id/seats` | Seat selection (2+2 seat map) |
| `/payment` | Payment (simulated) |
| `/ticket/:ref` | E-ticket |
| `/my-bookings` | Passenger dashboard |
| `/admin`, `/admin/buses`, `/admin/schedules` (`/admin/routes`), `/admin/bookings`, `/admin/reports` | Admin |
| `/staff` | Bus staff: trips, passengers, check ticket |

Login is fake: any email/password works. Pick Admin or Bus staff in the demo box on the
login page to see those screens.

## Run the frontend
```bash
cd frontend
npm install
npm run dev
```
Then open the URL Vite prints (usually http://localhost:5173).
Production build: `npm run build` (output in `frontend/dist`).

## Project notes
- `DECISIONS.md` - design choices and open questions
- `AI_LOG.md` - where AI helped and what was checked
- Needs Node.js 18 or newer.
