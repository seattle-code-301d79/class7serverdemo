'use strict';

//import blah from 'blah'
require('dotenv').config();
const express = require('express');
const cors = require('cors');
const list = require('./dummyData.json');

const app = express();

app.use(cors());

const PORT = process.env.PORT


// set up routes

app.get('/test', handleGetTest);
app.get('/christmaslist', handleGetChristmasList);




function handleGetChristmasList(req, res) {
  res.status(200).send(list);
}

function handleGetTest(request, response) {
  response.send('your test worked!');
}


app.listen(PORT, () => console.log('server is listening on port ', PORT));