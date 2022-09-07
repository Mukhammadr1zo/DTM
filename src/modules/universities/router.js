const express = require('express')
const { getUniversities } = require('./controller.js')

const router = express.Router()

router.get('/universities', getUniversities)

module.exports = router