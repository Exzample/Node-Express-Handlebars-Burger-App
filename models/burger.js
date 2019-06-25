//TODO set ORM variable requiring our orm.js file //
const orm = require("../config/orm.js");
//TODO create a burger object that will return all burgers in #burgers table//
let burger = {

    all: (cb) => {
        //? when the page loads we want to populate the page with all burgers in our burgers table//
        orm.all("burgers", (res) => {
            cb(res);
        });
    },

    //TODO we'll need a create function that updates our #burgers table when a new one is added from the submit form//
    create: (name, cb) => {
        //? When a user enters a new burger name we will insert the new values {burgers.name : user input} {devoured: False}
        orm.create("burgers", ["burger_name", "devoured"],[name, false], cb);
    },
    
    //TODO we'll need an UPDATE function that modifies existing data in our burgers table //
     update: (id, cb) => {
        var condition = "id=" + id;
        orm.update("burgers", { devoured: true }, condition, cb);
    }
};

//TODO export burger object
module.exports = burger;
