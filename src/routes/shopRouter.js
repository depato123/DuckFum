const express = require('express')
const router = express.Router()
const { shopView } = require('../controllers/shopController')


router.get('/', shopView)

module.exports = router
