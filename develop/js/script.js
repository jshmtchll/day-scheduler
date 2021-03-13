//displays the current date/time in <header>
let time = moment();
$("#today").text(moment().format("dddd, MMMM Do YYYY"));
$('#currenttime').text(moment().format('h:mm a'));






























//hr animation
jQuery(document).ready(function($){
    setTimeout(function(){
        $('.trans--grow').addClass('grow');
    }, 275);
});
