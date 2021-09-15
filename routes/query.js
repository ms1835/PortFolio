const express = require('express')
const { addQuery } = require('../controllers/query')
const router = express.Router()


router.post('/query',addQuery)


module.exports = router