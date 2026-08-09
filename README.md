# Red Dragon Events

A Create React App project built from the **Event Management Platform BRD** for Team Red Dragon.

## Team

- T. Adhis
- N. Sangeerthanan
- M. Sobika
- M. Sobiya
- K. Kirithis

## Included BRD requirements

- Reusable functional components written with arrow functions
- Independent RSVP state with `useState`
- Reusable search component using props and `onChange`
- Combined name, date, and event-type filters
- React Router routes for Explore Events and My Watchlist
- Lifted watchlist state with duplicate prevention using `.some()`
- `.map()`, `.filter()`, and `.some()` array methods
- Three-step registration modal managed by `useReducer`
- Global mock authentication using Context
- Promise-based mock API called with `async/await` inside `useEffect`
- Loading spinner while events load
- `events.json` and `eventTypes.json` data files
- Responsive desktop, tablet, and mobile design
- Full month calendar with previous, next, and Today controls
- Date selection with same-day event cards
- Event-to-calendar quick jump list
- Watchlist persistence using `localStorage` and `useEffect`

## Run without Vite

This project uses **Create React App / react-scripts**, not Vite.

```bash
cd red-dragon-events
npm install
npm start
```

Open `http://localhost:3000` in your browser.

## Other commands

```bash
npm test -- --watchAll=false
npm run build
```

## Demo instructions

1. Wait for the mock API loading animation.
2. Search for an event and combine it with the date/type filters.
3. Click **Mock login**.
4. Toggle RSVP on different cards to show independent local state.
5. Save events and open **My Watchlist**.
6. Open **Calendar**, click a date with an event, and use **Quick calendar jump**.
7. Click **Register** and complete the three-step reducer form.

> Note: The login and API are deliberately simulated because the BRD asks for mock functionality rather than a real backend.
