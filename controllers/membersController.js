const Member = require("../models/members.js");

exports.getAllMembers= (req, res, next) => {
    Member.find({})
    .then((members) => {
        res.render("members", {
            members: members
        });
    })
    .catch((error) =>{
        console.log(error.message);
        return [];
        })
        .then(() => {
            console.log("promise completed")
        });
};

exports.getMembershipPage = (req, res) => {
    res.render("join");
};

exports.saveMember = (req, res) => {
    let newMember = new Member({
        firstName: req.body.firsName,
        lastName: req.body.lastName,
        email:req.body.email,
        phone: req.body.phone
    });

    newMember.save()
        .then( ()=> {
            res.render("thanks")
        })
        .catch(error => {
            if(error) res.send(error);
        });
};
