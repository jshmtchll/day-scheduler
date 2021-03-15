//displays the current date/time in <header>
let time = moment();
$("#today").text(moment().format("dddd, MMMM Do YYYY"));
$('#currenttime').text(moment().format('h:mm a'));
let current = time.hours();
//buttons
const save = $(".saveBtn");
const deleteBtn = $(".deletebtn");
let deleteBtnTxt = $("#deletetext");

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
function pastPresentFuture() {
    

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
// gets schedule from local storage and displays into the corresponding time blocks
function getSchedule() {
    $(".time-block").each(function() {
        let timeID = $(this).attr("id");
        let schedule = localStorage.getItem(timeID);

        if (schedule !== null) {
            $(this).children(".schedule").val(schedule);
        }
    });

}
//on save click the task is saved to the schedule
save.on("click", function() {
    let time = $(this).parent().attr("id");
    let schedule = $(this).siblings(".schedule").val();

    localStorage.setItem(time, schedule);
});

//clears the full schedule and reloads the page to show an empty schedule
deleteBtn.on("click", function() {
    localStorage.clear();
    location.reload();
    return false;
    
});


getSchedule();
pastPresentFuture();


//hr animation
jQuery(document).ready(function($){
    setTimeout(function(){
        $('.trans--grow').addClass('grow');
    }, 325);
});
