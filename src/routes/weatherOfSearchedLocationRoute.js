//#region Imports:
const express = require('express')
const router = express.Router()
const searchedLoctionController = require('../controllers/searchedLocationController')
//#endregion

//#region searched location router:
router.get('/', searchedLoctionController.renderSearchedLoction)
//#endregion

module.exports = router