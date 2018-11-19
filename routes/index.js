const express = require('express')
const router = express.Router()
const token = require('../controllers/token')
//const tempvar = 'Lars Erik'
router.get('/getToken', token.getToken())
module.exports = router