const express = require('express')
const morgan = require('morgan')
const cors = require('cors')
const bodyParser = require('body-parser')
const routes = require('../api/routes/v1')

const app = express()

// registering cors
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.use(morgan('dev'))

var corsOptions = {
	origin: 'http://localhost:3000',
	optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
}
// enable CORS - Cross Origin Resource Sharing
app.use(cors(corsOptions))

app.use('/v1', routes)

module.exports = app