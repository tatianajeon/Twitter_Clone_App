const express = require('express')
const app = express()
const port = 3000
const path = require('path')

app.listen(port, () => {
    console.log(`Hello World app listening on port ${port}`)
    }) 



app.set('view engine', 'ejs')

const text ={
    sentence: 'testing',
    test: 'one two three',
}

app.get('/', (req, res) => {
    res.render('pages/home', {text:text})
  })
app.get('/login', (req, res) => {
    res.render('pages/login', {text:text})
  })
app.get('/profile', (req, res) => {
    res.render('pages/profile', {text:text})
  })
app.get('/register', (req, res) => {
    res.render('pages/register', {text:text})
  })





app.use(express.static(path.join(__dirname, 'public')))