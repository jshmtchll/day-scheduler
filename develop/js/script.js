//displays the current date/time in <header>
let time = moment();
$("#today").text(moment().format("dddd, MMMM Do YYYY"));
$('#currenttime').text(moment().format('h:mm a'));
let current = time.hours();


let nine = $("#9");
let ten = $("#10");
let eleven = $("#11");
let twelve = $("#12");
let one = $("#13");
let two = $("#14");
let three = $("#15");
let four = $("#16");
let five = $("#17");


//each time block is color-coded to indicate whether it is in the past,
//function to tell wheather past presenty future
function pastOrPresent() {
    

    $(".time-block").each(function() {
        let currentHour = parseInt($(this)[0].id);

        if (currentHour < current) {
            $(this).addClass("past");
        }
        else if (currentHour === current) {
            $(this).addClass("present");
        }
        else {
            $(this).addClass("future");
        }

        console.log(currentHour);
    })

}

pastOrPresent();


























//hr animation
jQuery(document).ready(function($){
    setTimeout(function(){
        $('.trans--grow').addClass('grow');
    }, 325);
});
