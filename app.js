const path = require('path')
const express = require('express')
const hbs = require('hbs')
const loadChannels = require('./src/loadChannel')

const app = express()
const port = process.env.PORT || 3000
// Define path for Express
const publicDirPath = path.join(__dirname, '/public')
const viewPath = path.join(__dirname, '/templates/views')
const partialsPath = path.join(__dirname, '/templates/partials')

// SetUp Handlebars engine and views location
app.set('view engine', 'hbs')
app.set('views', viewPath)
hbs.registerPartials(partialsPath)

// Set up Static directory to serve
app.use(express.static(publicDirPath))

app.get('', (req, res) => {
    const channel = loadChannels()
    res.render('index', {
        title: 'Radio App',
        name: 'Shashank',
        channelList: channel,
        listExist: true
    })
})

app.get('/listChannel', (rew, res) => {
    const channel = loadChannels()
    if (channel.length === 0) {
        return res.send({
            error: 'No channel found'
        })
    }
    res.send({
       channel
    })
})

app.get('/about', (req, res) => {
    res.render('about', {
        title: 'About me',
        name: 'Shashank'
    })
})

app.get('*', (req, res) => {
    res.render('404', {
        title: '404',
        name: 'Shashank',
        errorMessage: 'Page not found'
    })
})

// Start the server
app.listen(port, () => {
    console.log('Server is up on port ', port)
})