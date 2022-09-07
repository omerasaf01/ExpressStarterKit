var createError = require('http-errors');
var express = require('express');
var path = require('path');
var logger = require('morgan');
var settings = require("./settings.json");
var HomeController = require("./Controllers/HomeController");

var app = express();

app.use("/api/", HomeController)

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(function(req, res, next) {
  next(createError(404));
});

app.use(function(err, req, res, next) {
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};
  
  res.status(err.status || 500);
  res.render('error');
});

app.listen(parseInt(settings.port), () => {
  console.log(settings.port + " Dinleniyor");
});

module.exports = app;