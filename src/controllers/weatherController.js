//#region Imports:
const getWeatherInofs = require('../../public/js/getWeatherInfos')
//#endregion

// Main cities:
const cities = ['Damascus','Berlin','New York','Sydney']

const renderHomePage = async (request, response)=>{
  try {
    const fetchWeatherInfosOfCities = cities.map(async city => {
      try {
        return await getWeatherInofs(city)
      } catch (error) {
        return { cityName: city, error: err.message }
      }
    })

    // store all results from fetchWeatherInfosOfCities till complete and finish: 
    const fetchedWeatherData = await Promise.all(fetchWeatherInfosOfCities)

    response.render('index', { 
      title:'Sky Zone XW🌤️🌍',
      fetchedWeatherData 
    })
  } catch (error) {
    response.status(400).render('index', {error: error.message})
  }
}

module.exports = { renderHomePage }