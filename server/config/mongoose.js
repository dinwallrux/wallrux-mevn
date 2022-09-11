const mongoose = require('mongoose')
const logger = require('./logger')
const { mongo, env } = require('./vars')

// Exit application on error
mongoose.connection.on('error', (err) => {
    logger.error(`MongoDB connection error: ${err}`);
    process.exit(-1);
});

// print mongoose logs in dev env
if (env === 'development') {
    mongoose.set('debug', true);
}

exports.connect = () => {
    // configure database and mongoose
    // mongoose.set("useCreateIndex", true)
    mongoose
        .connect(mongo.uri, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        })
        .then(() => {
            logger.info('Database is connected')
        })
    return mongoose.connection
}