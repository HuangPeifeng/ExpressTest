const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const swagger = require('./swagger');

const users = require('./routes/users');

const app = express();

/** Swagger */
swagger(app);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser())

app.use('/api/users', users);

module.exports = app;
