// use mongoose ODM 
const mongoose = require('mongoose');
// connect mongoose to mongodb and use gameDB database
mongoose.connect('mongodb://localhost:27017/fruitsDB', { useNewUrlParser: true, useUnifiedTopology: true });
const db = mongoose.connection
db.on('error', console.error.bind('console', 'connection error:'))
db.once('open', () => {
    console.log("Server database connect!")
})