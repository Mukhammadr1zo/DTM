const express = require('express')
const { getFaculties } = require('./controller.js')

const router = express.Router()

router.get('/faculties/:faculty_id', getFaculties)

module.exports = router