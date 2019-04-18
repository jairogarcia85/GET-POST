//imports
const express = require('express')
const hbs = require('hbs')
const bodyParser = require('body-parser')
//defs
const app = express()

// middlewares
app.set('views', `${__dirname}/views`);
app.set('view engine', 'hbs');
app.use(bodyParser.urlencoded({ extended: true }))
app.use(fakeMiddleware)

function fakeMiddleware(req, res, next) {
  console.log("myFakeMiddleware was called!")
  req.bodyFake = {
    ironchelas: true,
    pizza: false
  }
  next()
}

// routes
app.use('/' /* prefijo del router */, require('./routes'))

//listen
app.listen(3000, console.log('running'))