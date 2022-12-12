const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const cookieSecret = process.env.COOKIESECRET || 'SoftUni';
const trimBody = require('./trimBody')
module.exports = (app) => {
    app.use(express.json());
    app.use(trimBody())
    app.use(cookieParser(cookieSecret));

    app.use(express.static(path.resolve(__basedir, 'static')));

    // app.use(errorHandler(err, req, res, next));
};
