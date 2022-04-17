//sets the current day at the top of the page
var currentDay = moment().format("MMMM Do YYYY");
$("#currentDay").text(currentDay);

// variables 
var saveBtn = $(".saveBtn");

// color code the blocks to see if its past, present, past hour

function timeColorBlock() {
    var hour = moment().hours();

    $(".time-block").each(function() {
        var currentHour = parseInt($(this).attr("id"));

        // console.log(this);

        if (currentHour > hour) {
            $(this).addClass("future");
        } else if (currentHour === hour) {
            $(this).addClass("present");
        } else {
            $(this).addClass("past");
        }

    });
};

timeColorBlock();

//can save button - text added to the text block 

// you can see it in local storage
