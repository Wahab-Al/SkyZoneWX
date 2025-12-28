const express = require('express')
const app = express()
const port = process.env.PORT || 5000

//#region TO USE THE STATIC FILES AS STYLE.CSS 
   const path = require('path')
   app.use('/public', express.static(path.join(__dirname, '../../public')))
//#endregion

//#region TO DEFINED DYNAMIC PAGES:
app.set('view engine', 'hbs')
//#endregion

//#region ROUTES:
app.get('/search', (request, response)=>{
   response.render('weatherOfSearchedLocation', {
      // TO BE CONTINUE ...
   })
})
//#endregion





app.listen(port, ()=>{
   console.log('====================================');
   console.log(`🔥 Server running on port ${port}`)
   console.log('====================================');
})