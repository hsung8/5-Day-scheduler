var nowtime = moment().format("HH");
var nowtimeInt = parseInt(nowtime);
var saveBtn = $(".saveBtn");

$("#row-9").attr("data-time", moment("9:00 am", "h:mm a").format("HH"));
$("#row-10").attr("data-time", moment("10:00 am", "h:mm a").format("HH"));
$("#row-11").attr("data-time", moment("11:00 am", "h:mm a").format("HH"));
$("#row-12").attr("data-time", moment("12:00 pm", "h:mm a").format("HH"));
$("#row-1").attr("data-time", moment("1:00 pm", "h:mm a").format("HH"));
$("#row-2").attr("data-time", moment("2:00 pm", "h:mm a").format("HH"));
$("#row-3").attr("data-time", moment("3:00 pm", "h:mm a").format("HH"));
$("#row-4").attr("data-time", moment("4:00 pm", "h:mm a").format("HH"));
$("#row-5").attr("data-time", moment("5:00 pm", "h:mm a").format("HH"));
$("#row-6").attr("data-time", moment("6:00 pm", "h:mm a").format("HH"));
$("#row-7").attr("data-time", moment("7:00 pm", "h:mm a").format("HH"));
$("#row-8").attr("data-time", moment("8:00 pm", "h:mm a").format("HH"));



$(document).ready(function () {

    display();

    var today = moment().format("dddd, MMMM Do");
    $("#currentDay").text(today);

    for (var j = 1; j <= 12; j++) {
        var inputTime = $("#" + j + "Row").attr("data-time");
        var inputTimeInt = parseInt(inputTime);
        console.log(inputTimeInt);

        var selector = $("#row-" + j)

        if (nowtimeInt === inputTimeInt){
            selector.addClass("present");
            
        }

        if (nowtimeInt > inputTimeInt){
            selector.addClass("past");
        }

        if (nowtimeInt < inputTimeInt){
            selector.addClass("future");
        }

    }

  
    saveBtn.on("click", function () {
        var hour = $(this).attr("data-hour");
        var plan = $("#row-" + hour).val();
        localStorage.setItem(hour, plan);

    });


    function display() {
        for (var i = 1; i <= 12; i++) {
            $("#row-" + i).val(localStorage.getItem(i));
        }
    }


});