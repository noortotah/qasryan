//Import the mongoose module
const mongoose = require('mongoose');
//Set up default mongoose connection
const db = "mongodb+srv://noor:TITtI97L8Ls3vXC0@start-cluster.gd66x.mongodb.net/qasryan?w=majority";
// var mongoDB = `${process.env.MONGO_SERVER}/qasryan`;
// console.log(process.env.MONGO_SERVER)
mongoose.connect(db, {useNewUrlParser: true, useUnifiedTopology: true});

//Get the default connection
var dbConnect = mongoose.connection;

//Bind connection to error event (to get notification of connection errors)
dbConnect.on('connected', () => {
    console.log('database connected...');
});
dbConnect.on('error', console.error.bind(console, 'MongoDB connection error:'));


module.exports = dbConnect;
