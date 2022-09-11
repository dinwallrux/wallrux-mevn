const express = require('express')
const PORT = process.env.PORT || 4000
const morgan = require('morgan')
const cors = require('cors')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const app = express()

const userRoutes = require('./api/user/routes/user')
const shopRoutes = require('./app/routes/shop.routes')
const db = require('./app/models')

// configure database and mongoose
// mongoose.set("useCreateIndex", true)
mongoose
	.connect(db.url, { 
		useNewUrlParser: true,
		useUnifiedTopology: true
	})
	.then(() => {
		console.log('Database is connected')
	})
	.catch(err => {
		console.log({ database_error: err })
	}) 
// db configuration ends here

// registering cors
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
// configure body-parser ends here

app.use(morgan('dev'))

//define first route
app.get('/', (req, res) => {
	console.log('Hello MEVN Soldier')
})

var corsOptions = {
	origin: 'http://localhost:3000',
	optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
}

app.use('/user', cors(corsOptions), userRoutes)
require('./app/routes/shop.routes')(app)

app.listen(PORT, () => {
	console.log(`App is running on ${PORT}`)
})