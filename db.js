import Mongoose from 'mongoose'

Mongoose.Promise = global.Promise
Mongoose.connect('mongodb://localhost/views', {useMongoClient: true})
