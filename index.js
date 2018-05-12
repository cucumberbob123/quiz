const express = require('express')
const app = express()

const port = 3000

const hbs = require('hbs')
app.set('view engine', 'hbs')

app.use(express.static('site'))

app.get('/api', (req, res) => {
    return res.render('index')
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