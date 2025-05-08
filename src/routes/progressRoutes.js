const express = require('express')
const router = express.Router()
const { createProgress } = require('../controllers/progressController')

router.post('/', createProgress)

module.exports = router
