const connection = require("./connection.js");


//! Took this from the solution file//
function printQuestionMarks(num) {
    //TODO create empty array to store "?"
    var arr = [];
    //? Looping through the numArr we created so we can push "?" for each index position//
    for ( i = 0; i < num; i++) {
        //? Why are you pushing a "?" in the array?//
        arr.push("?");
    }
    //Todo return arr and convert it to string
    console.log(arr.toString());
    return arr.toString();
}

//TODO create global function to store burgerData into an array//

function dataToSQL(data) {
    //! I took this from the solution file, not sure how I would have figured this out without it
    //TODO Create blank array to hold the data from the querries
    let arr = [];

    //? Loop through our response AKA: data
    for( var key in data) {
        arr.push(key + "=" + data[key]);
        //TODO push() each key and data[key] into the new array
    }
    //! return the new array as string
    return arr.toString();
}

// TODO create an "orm" object that holds the query sentax for ALL, CREATE & UPDATE//
let orm = {
    all: (tableInput, cb) => {
        /*//TODO
        //!Query should be 
        //?"SELECT *
        //?FROM burgers;"
        */
        let queryString = "SELECT * FROM " + tableInput + ";";
        connection.query( queryString, (err, result) => {
            if(err) {
                throw err;
            }
            cb(result);
        });
    } ,
    create: (table, cols, vals, cb) => {
        /*//TODO
        //!Query should be 
        //?"INSERT INTO burgers ( 'burger_name', 'devoured')
        //? VALUES ( 'new_burger_name", "FALSE");
        */
        let queryString = "INSERT INTO " + table;

        queryString += " (";
        queryString += cols.toString();
        queryString += ") ";
        queryString += "VALUES (";
        queryString += printQuestionMarks(vals.length);
        queryString += ") ";

        console.log(queryString);

        connection.query(queryString, vals, (err, result) => {
            if (err) {
                throw (err);
            }
            cb(result);
        });
    },
    
    update: (table, objColVals, condition, cb) => {
      /*//TODO
        //!Query should be ...
        //?"UPDATE burgers ('devoured')
        //? SET (burgers.devoured = FALSE)
        //? WHERE burgers.id = burger.update.condition;
        */
      var queryString = "UPDATE " + table;

      queryString += " SET ";
      queryString += dataToSQL(objColVals);
      queryString += " WHERE ";
      queryString += condition;

      console.log(queryString);
      connection.query(queryString, (err, result) => {
        if (err) {
          throw err;
        }
        cb(result);
      });
    }
};

module.exports = orm;