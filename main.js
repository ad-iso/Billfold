"use strict";

const express = require("express"),
    app = express(),
    homeController = require("./controllers/homeController"),
    errorController = require("./controllers/errorController"),
    membersController = require("./controllers/membersController"),
    layouts = require("express-ejs-layouts"),
    mongoose = require("mongoose");

    const Member = require("./models/members")
    mongoose.connect(
        "mongodb+srv://ad_iso:Ceaser02ish@cluster0.pvakz.mongodb.net/members?retryWrites=true&w=majority", {useNewUrlParser: true, useUnifiedTopology: true});
    const db = mongoose.connection;

    db.once("open", () => {
        console.log(`Sucessfully connected to mondoDB using mongoose`);
    });

app.set("port", process.env.PORT || 3000);
app.set("view engine", "ejs");

app.use(express.static("public"));
app.use(layouts);
app.use(
    express.urlencoded({
        extended: false
    })
);
app.use(express.json());

app.get("/", (req, res) => {
    res.render("index")
});
app.use(homeController.logRequestPaths);

app.get("/credit", homeController.showCreditCards);
app.get("/insurance", homeController.showInsurance);
app.get("/investing", homeController.showInvesting);
app.get("/loans", homeController.showLoans);
app.get("/mortgages", homeController.showMortgages);

app.get("/join", membersController.getMembershipPage);
app.get("/members", membersController.getAllMembers);
app.post("/members", membersController.saveMember);




app.use(errorController.respondNoResourceFound);
app.use(errorController.respondInternalError);


app.listen( app.get("port"), () => {
    console.log(`Server running at http://localhost:${app.get("port")}`);
});