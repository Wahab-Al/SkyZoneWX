//#region Imports & Api keys
const { MAPBOX_TOKEN, WEATHER_KEY } = require('./apis/weatherapis')
const axios = require('axios')
//#endregion

const getWeatherInofs = async(city) =>{
  try {
    // url:
    const geocodeUrl = `https://api.mapbox.com/geocoding/v5/mapbox.places/${encodeURIComponent(
      city)}.json?access_token=${MAPBOX_TOKEN}`
      const response = await axios.get(geocodeUrl)

      //#region handle errors:
      if(!response.data || !response.data.features.length){
        throw new Error(`location: ${city} not found`)
      }
      //#endregion

      const [longitude, latitude] = response.data.features[0].center

      // url:
      const weatherapiUrl = `https://api.weatherapi.com/v1/current.json?key=${WEATHER_KEY}&q=${latitude},${longitude}`
      const responseFromWeatherApi = await axios.get(weatherapiUrl)

    //#region handle errors: 
    if(responseFromWeatherApi.data && responseFromWeatherApi.data.Error){
      throw new Error(responseFromWeatherApi.data.error.message)
    }
    //#endregion

    //#region get results:
    return {
      cityName: responseFromWeatherApi.data.location.name,
      temperatureCelsius : responseFromWeatherApi.data.current.temp_c,
      weatherCondition: responseFromWeatherApi.data.current.condition.text,
      weatherIcon: responseFromWeatherApi.data.current.condition.icon,
      latitude: responseFromWeatherApi.data.location.lat,
      longitude: responseFromWeatherApi.data.location.lon,
    }
    //#endregion

  } catch (error) {
    throw new Error(error.message || "Unable to connect to service");
  }
}

module.exports = getWeatherInofs