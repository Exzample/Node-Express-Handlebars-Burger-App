//TODO create a document .ready function that will select the value of the $('.devour-form') and store it in our DB when submitted
//? The call back function should take an event
$(document).ready( ( ) => {
    
    $(".devour-form").on("submit", () => {
        //! You will need to prevent default behavior of the (event)
        event.preventDefault();
        //? burger_id = the value of the nested div with class of burger_id
        let burger_id = $(this).children(".burger_id").val();
        // Log to console so I can validate that the value stored in burger_id is what I was expecting
        console.log(burger_id);
        //TODO create a get call to return the data served at the /burgers/:id endpoint
        $.get({
            method: "PUT",
            // ! We'll pass in the specific id that the user wants to view
            url: "/burgers/"+burger_id
        }).then( (err, data) => {
            if(err) {
                //? If the update fails we will get an error message in console
                console.error(err);
            }
            //? Reloads the current page with the response data we got from the /burgers/:id endpoint
            location.reload();
        });
    });
});



//TODO create a ajax "PUT" call that will return data from out /burgers (path)

//TODO when we receive a resoponse from the /burgers our call back function will take in (data) and reload the page to display the devoured burger in the correct column//
