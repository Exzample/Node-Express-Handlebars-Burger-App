//TODO set ORM variable requiring our orm.js file //
const orm = require("../config/orm.js");
//TODO create a burger object that will return all burgers in #burgers table//
let burger = {

    all: (cb) {
        orm.all("burgers", (res) => {
            cb(res);
        });
    },

    //TODO we'll need a create function that updates our #burgers table when a new one is added from the submit form//
    create: (name, cb) => {
        orm.create("burgers", ["burger_name", "devoured"],[name, false], cb);
    },
    
    //TODO we'll need an UPDATE function that modifies existing data in our burgers table //
    update: (id,cb) => {
        let condition = "id=" + id;
        orm.update("burgers", { devoured: true }, condition, cb);
    }
};

//TODO export burger object
module.exports = burger;
