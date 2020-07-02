/* Imports */
const express = require('express')
const test = require('../controller/test')

/* Router - Handles HTTP requests*/
const router = express.Router()

router.route('/test').get(test.test)

module.exports = router