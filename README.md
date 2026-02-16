# SkyZoneWX: 🌤️🌍
is a Node.js project that allows users to get current weather information for any country or city they enter.

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


## Live Demo 🚀
#### [🌐Explore Live Site](https://skyzonewx.onrender.com/)

## Quick Start with Docker Hub: 🐳📦
docker pull wahab7/sky_zone_wx:v1 
#### ***Note: to run this project instantly without local setting, use following command:***
  docker run -p 5000:5000 -e WEATHER_KEY=YOUR WEATHER_KEY -e MAPBOX_TOKEN=YOUR_MAPBOX_TOKEN 
  
  wahab7/sky_zone_wx:latest


## Features: ✨
Users can input a city or country and receive real-time weather data.
Weather data is fetched from WeatherAPI.com.
Location data is enhanced with Mapbox.com.
Built using Node.js, Express, and Handlebars (HBS) for the frontend rendering.
Simple, clean, and responsive UI for easy user interaction.

## Tech Stack: 🛠️

#### Backend: ⚡
Node.js + Express

#### Frontend: 🖌️
Handlebars (HBS)

### APIs: 
WeatherAPI.com, Mapbox.com

## Usage: 🚀
Enter a city or country in the search bar.
Receive detailed weather information instantly.

## Screenshots: 📸
![Home page](https://raw.githubusercontent.com/Wahab-Al/SkyZoneWX/99a2c99aac63cf256a219278dfd5915610681624/public/img/screenshots/homePage.png)
![Mobile View](https://raw.githubusercontent.com/Wahab-Al/SkyZoneWX/340b86ae96a4c016d18ae2f33e10d2a353ba7717/public/img/screenshots/mobileView.png)
![search feld page](https://raw.githubusercontent.com/Wahab-Al/SkyZoneWX/99a2c99aac63cf256a219278dfd5915610681624/public/img/screenshots/searchFeld.png)
![Loading page](https://raw.githubusercontent.com/Wahab-Al/SkyZoneWX/99a2c99aac63cf256a219278dfd5915610681624/public/img/screenshots/loadingPage.png)
![Weather Infos page](https://raw.githubusercontent.com/Wahab-Al/SkyZoneWX/99a2c99aac63cf256a219278dfd5915610681624/public/img/screenshots/weatherInfos.png)
![Error page](https://raw.githubusercontent.com/Wahab-Al/SkyZoneWX/99a2c99aac63cf256a219278dfd5915610681624/public/img/screenshots/error1.png)
![Error2 page](https://raw.githubusercontent.com/Wahab-Al/SkyZoneWX/99a2c99aac63cf256a219278dfd5915610681624/public/img/screenshots/error2.png)

## License: 📄
MIT License

## Installation: 💾
```bash
git clone https://github.com/Wahab-Al/SkyZoneWX.git

## Navigate to the project directory: 📂
cd SkyZoneWX

## Run the application: ▶️
npm install

node src/app.js
