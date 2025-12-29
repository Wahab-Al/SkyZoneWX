require('dotenv').config()

// Mapbox token:
const MAPBOX_TOKEN = process.env.MAPBOX_TOKEN

// Weatherapi key:
const WEATHER_KEY = process.env.WEATHER_KEY

module.exports = {
    MAPBOX_TOKEN,
    WEATHER_KEY
}