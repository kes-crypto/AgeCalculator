var year = document.getElementById("year");
var month = document.getElementById("month");
var day = document.getElementById("day");
var submit = document.getElementById("image");

var output__year = document.getElementById("display-years");
var output__month = document.getElementById("display-month");
var output__day = document.getElementById("display-day");

const answers = new Date();

day.addEventListener("input", () => {
  nextFunction();
});

month.addEventListener("input", () => {
  nextFunction();
});
