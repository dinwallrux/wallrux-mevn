const dbConfig = require('../../config/db')
const mongoose = require('mongoose')
const shop = require('./shop.model')(mongoose)

const db = {}
mongoose.Promise = global.Promise
db.mongoose = mongoose
db.url = dbConfig.database

db.shop = shop

module.exports = db