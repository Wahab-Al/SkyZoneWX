//#region Imports:
const express = require('express')
const router = express.Router()
const weatherController = require('../controllers/weatherController')
//#endregion

//#region Home Page Router:
router.get('/', weatherController.renderHomePage)
//#endregion


module.exports = router