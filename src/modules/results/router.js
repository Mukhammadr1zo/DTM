const express = require('express')
const { postResults, getHighestResults, getResults, getResultById } = require('./controller.js')

const router = express.Router()

router.get('/results', getResults)
router.get('/highest/results', getHighestResults)
router.get('/result/:result_id', getResultById)
router.post('/result', postResults)

module.exports = router