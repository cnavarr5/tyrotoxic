const express = require('express')
const pug = require('pug')
const app = express()
const path = require('path')
const port = 3100

app.set('views', path.join(__dirname, 'views'))  
app.use(express.static(path.join(__dirname, 'public')));
app.set('view engine', 'pug')

app.get('/', (req, res) => {
    res.render('index', {title: 'Tyrotoxic', msg: 'If this is red, things are working well'})
})

app.get('*', (req, res) => {
    res.send('Sorry, page does not exist')
})

console.log("Listening on port "+ port)
app.listen(port)