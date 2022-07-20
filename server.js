const express = require('express')
const dotenv = require('dotenv')
const { connectDB } = require('./src/db')

const { graphqlHTTP } = require('express-graphql')
const schema = require('./src/graphql/schema')


dotenv.config()
const app = express()

// Connecting MongoDB
connectDB()

app.listen(process.env.PORT, () => {
    console.log(`Server now running on PORT ${process.env.PORT}`)
});

app.set('view engine', 'ejs')


// middleware
app.use("/graphql", graphqlHTTP({
    schema,
    graphiql: true
}))

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


