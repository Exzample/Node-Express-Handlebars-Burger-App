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