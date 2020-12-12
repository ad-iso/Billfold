"use strict";

const httpStatus = require("http-status-codes");

exports.respondNoResourceFound = (req, res) => {
    let errorCode = httpStatus.NOT_FOUND;
    res.status(errorCode);
    res.render("error");
};

exports.respondInternalError = (req, res) => {
    let errorCode = httpStatus.INTERNAL_SERVER_ERROR;
    console.log(`ERROR occured: ${error.stack}`);
    res.status(errorCode);
    res.send(`${errorCode} | Sorry our application is experiencing a problem`)
};