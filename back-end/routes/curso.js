const controller = require('../controllers/curso')
const express = require('express')

const router = express.Router()

router.post('/', controller.novo) //Create

module.exports = router 