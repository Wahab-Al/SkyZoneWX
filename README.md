# SkyZoneWX:
A server-side rendered weather app that chains two external APIs Mapbox for geocoding and WeatherAPI for real-time conditions.

[![License](https://img.shields.io/badge/license-MIT-blue.svg)](LICENSE)
[![Node.js](https://img.shields.io/badge/Node.js-339933?logo=node.js&logoColor=white)](https://nodejs.org/)
[![Express](https://img.shields.io/badge/Express-000000?logo=express&logoColor=white)](https://expressjs.com/)
[![Handlebars](https://img.shields.io/badge/Handlebars-f0772b?logo=handlebarsdotjs&logoColor=white)](https://handlebarsjs.com/)
[![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?logo=javascript&logoColor=black)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
[![npm version](https://img.shields.io/npm/v/your-package-name.svg)](https://www.npmjs.com/package/your-package-name)
[![Axios](https://img.shields.io/badge/Axios-HTTP_Client-purple?logo=axios&logoColor=white)](https://axios-http.com)
[![Bootstrap](https://img.shields.io/badge/Bootstrap-563D7C?logo=bootstrap&logoColor=white)](https://getbootstrap.com)
[![SweetAlert2](https://img.shields.io/badge/SweetAlert2-JS%20popup%20library-purple?style=flat-square)](https://sweetalert2.github.io/)
[![Docker](https://img.shields.io/badge/Docker-Container%20Platform-blue?style=flat-square&logo=docker)](https://www.docker.com/)

**[Live Demo →](https://skyzonewx.onrender.com/)**

---

## The Problem

Two API calls need to be chained: first geocode the location, then fetch the weather for those coordinates.

---

## The Solution

The server acts as a secure proxy. The browser never sees the API keys it submits a city name, the Express server geocodes it via Mapbox, passes the coordinates to WeatherAPI, and renders the result server-side with Handlebars before sending HTML back to the client.

```
Browser (city name input)
    │
    ▼
Express server
    ├─→ Mapbox API (geocoding: city name → lat/lng + display name)
    └─→ WeatherAPI (weather data for those coordinates)
    │
    ▼
Handlebars renders the result → HTML response to browser
```

No API keys in the client. No separate frontend build step.

---

## Architecture

```
.
├── src/
│   └── app.js            # Server entry Express setup, routes, API calls
├── views/                # Handlebars page templates
├── partials/             # Reusable HBS partials (header, footer, etc.)
├── public/               # Static assets (CSS, images)
├── dockerfile            # Container definition
└── .dockerignore
```

Handlebars was chosen over a React frontend specifically to keep rendering server-side, simpler deployment, no build step, and the API proxy pattern works naturally without needing a separate backend endpoint.

---

## Tech Decisions

| Decision | Why |
|---|---|
| **Server-side rendering** over client-side SPA | Keeps API keys off the browser entirely, no separate backend needed |
| **Handlebars** over EJS | Cleaner separation between logic and templates; partials system works well for shared layout |
| **Mapbox** for geocoding | More reliable city-name resolution than relying on WeatherAPI's location search alone |
| **Axios** over fetch | Consistent error handling and response parsing in Node.js without extra polyfills |
| **Docker** | Makes deployment environment-agnostic, anyone can run the app with a single command using their own API keys |

---

## Run with Docker

No local setup needed — just Docker and your API keys:

```bash
docker pull wahab7/sky_zone_wx:latest

docker run -p 5000:5000 \
  -e WEATHER_KEY=your_weatherapi_key \
  -e MAPBOX_TOKEN=your_mapbox_token \
  wahab7/sky_zone_wx:latest
```

Then open `http://localhost:5000`.

---

## Local Setup

```bash
git clone https://github.com/Wahab-Al/SkyZoneWX.git
cd SkyZoneWX
npm install
```

Create a `.env` file:
```env
WEATHER_KEY=your_weatherapi_key
MAPBOX_TOKEN=your_mapbox_token
PORT=5000
```

```bash
node src/app.js
```

---

## Screenshots

![Home page](https://raw.githubusercontent.com/Wahab-Al/SkyZoneWX/99a2c99aac63cf256a219278dfd5915610681624/public/img/screenshots/homePage.png)
![Mobile View](https://raw.githubusercontent.com/Wahab-Al/SkyZoneWX/340b86ae96a4c016d18ae2f33e10d2a353ba7717/public/img/screenshots/mobileView.png)
![search feld page](https://raw.githubusercontent.com/Wahab-Al/SkyZoneWX/99a2c99aac63cf256a219278dfd5915610681624/public/img/screenshots/searchFeld.png)
![Loading page](https://raw.githubusercontent.com/Wahab-Al/SkyZoneWX/99a2c99aac63cf256a219278dfd5915610681624/public/img/screenshots/loadingPage.png)
![Weather Infos page](https://raw.githubusercontent.com/Wahab-Al/SkyZoneWX/99a2c99aac63cf256a219278dfd5915610681624/public/img/screenshots/weatherInfos.png)
![Error page](https://raw.githubusercontent.com/Wahab-Al/SkyZoneWX/99a2c99aac63cf256a219278dfd5915610681624/public/img/screenshots/error1.png)
![Error2 page](https://raw.githubusercontent.com/Wahab-Al/SkyZoneWX/99a2c99aac63cf256a219278dfd5915610681624/public/img/screenshots/error2.png)

---

## License

MIT
