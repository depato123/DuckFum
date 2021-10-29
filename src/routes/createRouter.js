const express = require('express')
const router = express.Router()
const { createView } = require('../controllers/createController')


router.get('/', createView)

module.exports = router
