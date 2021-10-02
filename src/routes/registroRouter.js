const express = require('express')
const router = express.Router()
const { registroView } = require('../controllers/registroController')


router.get('/', registroView)

module.exports = router
