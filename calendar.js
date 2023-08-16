const day = document.getElementById("day");
const date = document.getElementById("date");
const month = document.getElementById("month");
const year = document.getElementById("year");

const weekDays = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
const allMonths = ["January","February","March","April","May","June","July","August","September","October","November","December"]

const today = new Date();

console.log(today);

day.innerHTML = weekDays[today.getDay()] + ',';
date.innerHTML = today.getDate();
month.innerHTML = allMonths[today.getMonth()];
year.innerHTML = today.getFullYear();