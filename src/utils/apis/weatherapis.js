require('dotenv').config()

// Mapbox token:
const geocodeToken = process.env.MAPBOX_TOKEN

// Weatherapi key:
const forecastKey = process.env.WEATHER_KEY

module.exports = {
    geocodeToken,
    forecastKey
}