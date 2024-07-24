const express = require('express')
const app = express()
require('dotenv').config()
const morgan = require('morgan')
const cors = require('cors')
const bodyParser = require('body-parser')
const router = require('./Router/router')
const port = process.env.PORT
const mongoose = require('mongoose')

// Middleware setup
app.use(cors());
app.use(bodyParser.json());
app.use(morgan('dev'));
//use router :
app.use('/auth', router)
//This middleware parses JSON request bodies
app.use(express.json()); 

mongoose.connect('mongodb://localhost:27017/booking')
app.listen(port , () => console.log(`the server run on ${port}`))