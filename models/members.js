"use strict";

const mongoose = require("mongoose"),
    memberSchema = mongoose.Schema({
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true, 
        lowercase: true
    },
    phone: {
        type: Number,
        min: [10000, "Zip code too short"],
        max: 99999
    }

});

memberSchema.methods.getInfo = function() {
    return `First Name: ${this.firstName} Last Name: ${this.lastName} email: ${this.email} phone: ${this.phone}`;
};

memberSchema.methods.findLocalMembers = function(){
    return this.model("Subscriber")
    .find({zipCode: this.zipCode})
};

module.exports = mongoose.model("Member", memberSchema)

