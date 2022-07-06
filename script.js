var today = moment();
var saveBtn = document.querySelector("savebtn")
var textarea = JSON.parse(localStorage.getItem("textarea"))
$("#currentDay").text(today.format("MMM Do YYYY"));



saveBtn.addEventListener ('click',function(event) {
event.preventDefault();
textarea();
})
