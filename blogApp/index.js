const express= require("express");
const app = express();


// initialize Port 
require("dotenv").config();
const PORT = process.env.PORT || 3000;

// middleware
app.use(express.json());

const blogRoutes = require("./routes/blog");

// mount
app.use("/api/v1",blogRoutes);

// db connection
const connectWithDB = require('./config/database');
connectWithDB();

// start the server
app.listen(PORT,()=>{
    console.log(`listening on port: ${PORT}`);
})

// default route
app.get('/',(req, res) => {
    res.send("<h1>Homepage<h1/>")
})

