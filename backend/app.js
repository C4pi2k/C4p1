const express = require('express')
const bodyParser = require('body-parser');
const dotenv = require('dotenv').config();
const mongoose = require('mongoose');
const mongoStore = require('connect-mongo');

const app = express()
const port = process.env.PORT

mongoose.connect(process.env.MONGO_URL,
    { useNewUrlParser: true, useUnifiedTopology: true }
    ).catch(error => { console.log(`Error:${error}`)});

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, err => {
    if (err) {
        console.log(err);
    }
    console.log('Server listenign on port', port);
})