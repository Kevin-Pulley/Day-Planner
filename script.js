//updates current time and date when page is loaded
$(document).ready(function () {
    let dateParagraph = $("#currentDay");
    let todaysDate = moment().format('llll');
    dateParagraph.text(todaysDate);

});


//clear local storage and update time and date when CLEAR ALL button is clicked.
$("#clear").click(function () {
    localStorage.clear();
    location.reload()
});

let textArea1 = document.querySelector("#note1");
let save1 = document.querySelector("#saveNote1");
//retrieves previously stored data to display into text area
textArea1.value = localStorage.getItem("input1");
// when save is clicked stores what is entered by user in text area.
save1.addEventListener("click", saveLS1);
// sets user input of textarea to local storage
function saveLS1() {
    localStorage.setItem("input1", textArea1.value);
};

let textArea2 = document.querySelector("#note2");
let save2 = document.querySelector("#saveNote2");
//retrieves previously stored data to display into text area
textArea2.value = localStorage.getItem("input2");
// when save is clicked stores what is entered by user in text area.
save2.addEventListener("click", saveLS2);
// sets user input of textarea to local storage
function saveLS2() {
    localStorage.setItem("input2", textArea2.value);
};

let textArea3 = document.querySelector("#note3");
let save3 = document.querySelector("#saveNote3");
//retrieves previously stored data to display into text area
textArea3.value = localStorage.getItem("input3");
// when save is clicked stores what is entered by user in text area.
save3.addEventListener("click", saveLS3);
// sets user input of textarea to local storage
function saveLS3() {
    localStorage.setItem("input3", textArea3.value);
};

let textArea4 = document.querySelector("#note4");
let save4 = document.querySelector("#saveNote4");
//retrieves previously stored data to display into text area
textArea4.value = localStorage.getItem("input4");
// when save is clicked stores what is entered by user in text area.
save4.addEventListener("click", saveLS4);
// sets user input of textarea to local storage
function saveLS4() {
    localStorage.setItem("input4", textArea4.value);
};

let textArea5 = document.querySelector("#note5");
let save5 = document.querySelector("#saveNote5");
//retrieves previously stored data to display into text area
textArea5.value = localStorage.getItem("input5");
// when save is clicked stores what is entered by user in text area.
save5.addEventListener("click", saveLS5);
// sets user input of textarea to local storage
function saveLS5() {
    localStorage.setItem("input5", textArea5.value);
};

let textArea6 = document.querySelector("#note6");
let save6 = document.querySelector("#saveNote6");
//retrieves previously stored data to display into text area
textArea6.value = localStorage.getItem("input6");
// when save is clicked stores what is entered by user in text area.
save6.addEventListener("click", saveLS6);
// sets user input of textarea to local storage
function saveLS6() {
    localStorage.setItem("input6", textArea6.value);
};

let textArea7 = document.querySelector("#note7");
let save7 = document.querySelector("#saveNote7");
//retrieves previously stored data to display into text area
textArea7.value = localStorage.getItem("input7");
// when save is clicked stores what is entered by user in text area.
save7.addEventListener("click", saveLS7);
// sets user input of textarea to local storage
function saveLS7() {
    localStorage.setItem("input7", textArea7.value);
};

let textArea8 = document.querySelector("#note8");
let save8 = document.querySelector("#saveNote8");
//retrieves previously stored data to display into text area
textArea8.value = localStorage.getItem("input8");
// when save is clicked stores what is entered by user in text area.
save8.addEventListener("click", saveLS8);
// sets user input of textarea to local storage
function saveLS8() {
    localStorage.setItem("input8", textArea8.value);
};

let textArea9 = document.querySelector("#note9");
let save9 = document.querySelector("#saveNote9");
//retrieves previously stored data to display into text area
textArea9.value = localStorage.getItem("input9");
// when save is clicked stores what is entered by user in text area.
save9.addEventListener("click", saveLS9);
// sets user input of textarea to local storage
function saveLS9() {
    localStorage.setItem("input9", textArea9.value);
};

let currentHour = moment().hour()

$("textarea").each(function (index) {
    let hour = $(this).attr("data-hour")

    //set css styling to text-area
    if (parseInt(hour) < parseInt(currentHour)) {
        $(this).addClass("past");
        $(this).removeClass("future");
        $(this).removeClass("present");
    } else if (parseInt(hour) === parseInt(currentHour)) {
        $(this).addClass("present")
        $(this).removeClass("future");
        $(this).removeClass("past");
    } else if (parseInt(hour) > parseInt(currentHour)) {
        $(this).addClass("future")
        $(this).removeClass("past");
        $(this).removeClass("present");
    }
});
