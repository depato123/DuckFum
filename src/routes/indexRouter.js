const express = require('express')
const router = express.Router()
const { homeView } = require('../controllers/indexController')


router.get('/', homeView)

module.exports = router
