
const getWeatherInfos = require('../../public/js/getWeatherInfos')


const renderSearchedLoction = async (request, response) =>{
  const city = request.query.city
  if(!city){
    return response.status(400).render('weatherOfSearchedLocation', {error: 'City is required'})
  }
  try {
    const fetchedLocationData = await getWeatherInfos(city)
    response.render('weatherOfSearchedLocation', {
      title:'Sky Zone XW🌤️🌍',
      fetchedLocationData
    })
  } catch (error) {
    response.status(400).render('weatherOfSearchedLocation', {error: error.message})
  }
}

module.exports = { renderSearchedLoction }