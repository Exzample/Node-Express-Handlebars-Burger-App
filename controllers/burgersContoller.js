//TODO require express
const express = require("express");
//TODO create 'ROUTER' variable express.Router();
const router = express.Router();
//TODO require models.burger.js
const burger = require("../models/burger.js");

//! router.get, router.post, router.put will be the paths that we need to set up//

//TODO set up your .get call  for the ("/" path)
//! the call back function will take in (req, res) //
//? If someone doesn't navigate all the way to "/burgers" path we will redirect them to the burgers path
router.get("/", (req, res) => {
    res.redirect("/burgers");
});

// TODO set up get call for ("/burgers") 
//! this should post all burgers in our #burgers table on the page// 
router.get("/burgers", (req, res) => {
    //? express cb res by calling burger.all function in the burger.js models folder//
    burger.all( (burgerData) => {
        //? Render the "index.handlebars template"; Define what variable we will display as burgerData. In this case all burger data will be stored in the burgerData variable. (see config orm.js to review the query)
        res.render("index", { burger_data: burgerData });
    });
});

//TODO set up post call when the user enters a new burger //
//? We will CREATE the #burgers table with each new input from the user//
router.post("/burgers/create", (res, req ) => {
    //! This will be burger.create query//
    burger.create(req.body.burger_name, (res) {
        console.log(res);
        // redirect the page to ("/") path;
        res.redirect("/");
    });
});

//TODO set up PUT call that we'll use when the user wants to modify an existing burger//
router.put("/burgers/:id", ( req, req ) => {
    //? we will UPDATE the burger title using the burger.id
    burger.update(req.params.id, (res) => {
        console.log(res);
        //?Send a 200 response for if the burger was successfully updated//
        res.sendStatus(200);
    });
});

//! export router //
module.exports = router;