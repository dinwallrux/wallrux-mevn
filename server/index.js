const { port } = require('./config/vars')
const mongoose = require('./config/mongoose')
const logger = require('./config/logger')
const app = require('./config/express')

mongoose.connect()

//define first route
app.get('/', (req, res) => {
	console.log('Hello MEVN Soldier')
	return res.send('The app is running')
})

app.listen(port, () => {
	logger.info(`App is running on ${port}`)
})

module.exports = app