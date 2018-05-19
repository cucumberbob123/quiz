const express = require('express')
const app = express()

const port = 5000

const hbs = require('hbs')
app.set('view engine', 'hbs')

const cookieParser = require('cookie-parser')
app.use(cookieParser())

app.use(express.static('site'))

app.get('/api', (req, res) => {
    return res.render('index')
})

app.get('/api/user', (req, res) => {
    console.log(req.cookies)
    res.cookie('name', 'value',{
        maxAge: 1000 * 60 * 15,
        httpOnly: true,
    })
    return res.render('index')
})

app.get('/api/login', (req, res) => {
    console.log(req.body.username + req.body.password)
})

app.get('/api/subject/:subject', (req, res) => {
    const subject = req.params.subject
    try {
        const subjson = require(`./json/${subject}`)
        return res.json(subjson)
    } catch {
        return res.json({'error': '404 not found'})
    }
})

app.listen(port, () => {
    console.log(`listening on port ${port}`)
})