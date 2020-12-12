"use strict";

exports.showCreditCards = (req, res) => {
    res.render("credit_cards");
}

exports.showInsurance = (req, res) => {
    res.render("insurance");
}

exports.showInvesting = (req, res) => {
    res.render("investing");
}
exports.showLoans = (req, res) => {
    res.render("loans");
}

exports.showMortgages = (req, res) => {
    res.render("mortgages");
}

exports.logRequestPaths = (req, res, next) => {
    console.log(req.url);
    next();
}