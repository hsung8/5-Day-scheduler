var nowtime = moment().format("HH");
var nowtimeInt = parseInt(nowtime);
var saveBtn = $(".saveBtn");

$("#9Row").attr("data-time", moment("9:00 am", "h:mm a").format("HH"));
$("#10Row").attr("data-time", moment("10:00 am", "h:mm a").format("HH"));
$("#11Row").attr("data-time", moment("11:00 am", "h:mm a").format("HH"));
$("#12Row").attr("data-time", moment("12:00 pm", "h:mm a").format("HH"));
$("#1Row").attr("data-time", moment("1:00 pm", "h:mm a").format("HH"));
$("#2Row").attr("data-time", moment("2:00 pm", "h:mm a").format("HH"));
$("#3Row").attr("data-time", moment("3:00 pm", "h:mm a").format("HH"));
$("#4Row").attr("data-time", moment("4:00 pm", "h:mm a").format("HH"));
$("#5Row").attr("data-time", moment("5:00 pm", "h:mm a").format("HH"));
$("#6Row").attr("data-time", moment("6:00 pm", "h:mm a").format("HH"));
$("#7Row").attr("data-time", moment("7:00 pm", "h:mm a").format("HH"));
$("#8Row").attr("data-time", moment("8:00 pm", "h:mm a").format("HH"));



$(document).ready(function () {

    display();

    var today = moment().format("dddd, MMMM Do");
    $("#currentDay").text(today);

    for (var j = 1; j <= 12; j++) {
        var inputTime = $("#" + j + "Row").attr("data-time");
        var inputTimeInt = parseInt(inputTime);
        console.log(inputTimeInt);

        if (nowtimeInt === inputTimeInt){
            $("#" + j + "Row").addClass("present");
            
        }

        if (nowtimeInt > inputTimeInt){
            $("#" + j + "Row").addClass("past");
        }

        if (nowtimeInt < inputTimeInt){
            $("#" + j + "Row").addClass("future");
        }

    }

  
    saveBtn.on("click", function () {
        var hour = $(this).attr("data-hour");
        var plan = $("#" + hour + "Row").val();
        localStorage.setItem(hour, plan);

    });


    function display() {
        for (var i = 1; i <= 12; i++) {
            $("#" + i + "Row").val(localStorage.getItem(i));
        }
    }


});