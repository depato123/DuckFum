const express = require('express')
const router = express.Router()
const { detalleView } = require('../controllers/detalleController')


router.get('/', detalleView)

module.exports = router
