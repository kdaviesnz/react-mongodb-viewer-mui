var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
const authMongoRouter = require('./routes/mongo');
const collectionsRouter = require('./routes/collections')
const documentsRouter = require('./routes/documents')

var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);

// Set up auth router
app.use('/api/auth/mongo', authMongoRouter);

// Set up collections router
app.use('/api/collections', collectionsRouter)

// Set up documents router
app.use('/api/documents', documentsRouter)

module.exports = app;
