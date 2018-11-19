//console.log('Tekst for output')
const express = require('express')
const app = express()
const routes = require('./routes/index')

app.get('/hello',(req, res) => {
    console.log('Output fra Express')
    res.send('Output fra Express via res.send')
})

app.use('/', routes)
app.listen('4040')
//module.exports = app