var year = document.getElementById("year");
var month = document.getElementById("month");
var day = document.getElementById("day");
var submit = document.getElementById("image");

//output variables
var output__year = document.getElementById("display-years");
var output__month = document.getElementById("display-month");
var output__day = document.getElementById("display-day");

//error placeholder declaration
var errorMessageDay = document.getElementById("error_message_day");
var errorMessageMonth = document.getElementById("error_message_month");
var errorMessageYear = document.getElementById("error_message_year");

const currentDate = new Date();

day.addEventListener("input", () => {
  nextFunction();
});

month.addEventListener("input", () => {
  nextFunction();
});

submit.addEventListener("click", (e) => {
  errorMessageDay.innerText = "";
  errorMessageMonth.innerText = "";
  errorMessageYear.innerText = "";

  if (day.value == "" || month.value == "" || year.value == "") {
    e.preventDefault();
    if ((day.value = "")) {
      errorMessageDay.innerHTML = "This field is required";
    }
    if ((month.value = "")) {
      errorMessageMonth.innerHTML = "This field is required";
    }
    if ((year.value = "")) {
      errorMessageYear.innerHTML = "This field is required";
    }
  } else if (year.value > currentDate.getFullYear()) {
    e.preventDefault();
    errorMessageYear.innerHTML = "Must be in the past";
    year.value = "";
  } else if (month.value > 12) {
    e.preventDefault();
    errorMessageMonth.innerHTML = "Must be a valid month";
    month.value = "";
  } else if (day.value > 31) {
    e.preventDefault();
    errorMessageDay.innerHTML = "Must be a valid date";
    day.value = "";
  } else {
    calculateDate(year.value, month.value, day.value);
  }
});
function calculateDate(year, month, day) {
  if (month > currentDate.getMonth() + 1) {
    output__year.textContent = currentDate.getFullYear() - year - 1;
  } else if (
    month == currentDate.getMonth() + 1 &&
    day > currentDate.getDate()
  ) {
    output__year.textContent = currentDate.getFullYear() - year;
  } else {
    output__year.textContent = currentDate.getFullYear() - year;
  }
}
