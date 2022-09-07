const express = require('express')
const { getRegions } = require('./controller.js')

const router = express.Router()

router.get('/regions', getRegions)

module.exports = router