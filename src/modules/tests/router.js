const express = require('express')
const { getTests } = require('./controller.js')

const router = express.Router()

router.get('/tests', getTests)

module.exports = router