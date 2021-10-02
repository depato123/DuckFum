const express = require('express')
const router = express.Router()
const { carritoView } = require('../controllers/carritoController')


router.get('/', carritoView)

module.exports = router
