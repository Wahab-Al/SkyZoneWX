//#region Imports:
const express = require('express')
const path = require('path')
const app = express()
const weatherRouter = require('../src/routes/weatherRoute')
//#endregion

const port = process.env.PORT || 5000

//#region TO USE THE STATIC FILES AS STYLE.CSS 
   app.use('/public', express.static(path.join(__dirname, '../public')))
//#endregion

//#region TO DEFINED DYNAMIC PAGES:
app.set('view engine', 'hbs')
app.set('views', path.join(__dirname, '../views'));
const partial = path.join(__dirname, '../partials')

// custom helper:
const hbs = require('hbs')
hbs.registerPartials(partial)
hbs.registerHelper('lt', (a, b) => a < b); 
hbs.registerHelper('gte', (a, b) => a >= b);
//#endregion

app.use('/', weatherRouter);

//#region 404 BAD REQUEST:
   app.use((req, res) => {
      res.status(404).send('<h1>❌ 404 called page not found..</h1>', { url: req.originalUrl })
   })
//#endregion


app.listen(port, ()=>{
   console.log('====================================');
   console.log(`🔥 Server running on port ${port}`)
   console.log('====================================');
})