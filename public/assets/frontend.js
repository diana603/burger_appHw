$(document).ready(function () {
    // body...

    $('#submit-button').on('click', function () {

        var burgerData = {
            burger_name: $('#new_burger').val().trim()
        }

        // Send the POST request to create a burger. 
        $.ajax("/burger/create", {
            type: "POST",
            data: burgerData
        }).then(function () {
            console.log("created new burger");
            // Reload the page to get the updated list
            location.reload();
        });
    });

    $('.devoured-button').on('click', function () {

        var devourData = {
            id: $(this).attr('data-id')
        }

        // Send the POST request to devour a burger. 
        $.ajax("/burger/devoured", {
            type: "POST",
            data: devourData
        }).then(function () {
            // Reload the page to get the updated list
            location.reload();
        });

    });
});