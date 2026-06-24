# BD Screens

A lightweight streaming video service demo: browse networks, subscribe to services, and explore shows, seasons, and episodes.

## Features

- Home page with service overview
- Streaming network list and shows per network
- Service subscriptions and subscribed content view
- Show, season, and episode pages
- Recommendations on the subscription page: Top rated on Netflix, Popular today, Recomend in Comedy
- Responsive UI with mobile navigation menu
- Toast notifications for subscriptions and watch actions

## Tech Stack

- [React](https://react.dev/) 17
- [React Router DOM v5](https://www.npmjs.com/package/react-router-dom/v/5.3.0)
- [SCSS Modules](https://create-react-app.dev/docs/adding-a-sass-stylesheet/)
- [Axios](https://www.npmjs.com/package/axios)
- [The Movie Database API](https://developers.themoviedb.org/3/getting-started)
- [react-toastify](https://www.npmjs.com/package/react-toastify)
- [react-lazy-load-image-component](https://www.npmjs.com/package/react-lazy-load-image-component)
- [Prop Types](https://www.npmjs.com/package/prop-types)

## Getting Started

```bash
npm install
npm start
```

The app will open at [http://localhost:3000](http://localhost:3000).

## Scripts

| Command | Description |
| --- | --- |
| `npm start` | Start the dev server |
| `npm run build` | Create a production build |
| `npm test` | Run tests |
| `npm run lint:js` | Run ESLint |
| `npm run deploy` | Deploy to Netlify |

## Project Structure

```
src/
├── components/   # UI components
├── pages/        # Page components
├── Context/      # React Context (networks and subscriptions)
├── Utils/        # API client and network data
└── styles/       # SCSS breakpoints
```

## API

Movie and TV show data comes from the TMDB API. The API key is configured in `src/Utils/MovieAPI.jsx`.

## Deployment

The project is built with Create React App and can be deployed to Netlify (`netlify.toml` is configured for SPA routing).
