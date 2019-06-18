const connnection = require("./connection.js");


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
    return arr.toString();
}

//TODO create global function to store burgerData into an array//

function dataToSQL(data) {
    //! I took this from the solution file, not sure how I would have figured this out without it
    //TODO Create blank array to hold the data from the querries
    let arr = [];

    //? Loop through our response AKA: data
    for( var key in data) {
        //TODO push() each key and data[key] into the new array
        arr.push(key + "=" + data[key]);
    }
    // return the new array as string
    return arr.toString();
}

// TODO create an "orm" object that holds the query sentax for ALL, CREATE & UPDATE//
let orm = {
    all: (tableInput, cb) {
        let queryString = "SELECT * FROM " + tableInput + ";";
        connection.query( queryString, (err, res) => {
            if(err) {
                throw err;
            }
            cb(result);
        });
    } ,
    create: (table, cols, vals, cb) => {
        let queryString = "INSERT INTO " + table;

        queryString += " ("
        queryString += cols.toString();
        queryString += ") "
        queryString += "VALUES ("
        queryString += printQuestionMarks(vals.length);
        queryString += ") ";

        connection.query(queryString, vals, (err, res) => {
            if (err) {
                throw (err);
            }
            cb(res);
        });
    },
    
    update: (table, objColVals, condition, cb ) => {
        let queryString = "UPDATE " + table;

        queryString += " SET "
        queryString += dataToSQL(objColVals);
        queryString += " WHERE "
        queryString += condition;

        console.log(queryString);
        connection.query(queryString, (err, res) => {
            if (err) {
                throw err;
            }
            cb(res);
        });
    };
};

module.exports = orm;