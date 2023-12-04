const mongoose = require('mongoose');

require("dotenv").config();

const connectWithDB = () =>{
    mongoose.connect(process.env.DATABASE_URL,{
        useNewUrlParser: true,
        useUnifiedTopology: true,
    }).then(() =>console.log("Connected to database"))
    .catch((error) =>{
        console.log("Failed to connect to database")
        console.log(error)
        process.exit(1);
    });
};
module.exports = connectWithDB;