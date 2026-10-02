"use strict"

const hourId = document.getElementById("hour");
const minuteId = document.getElementById("minute");
//const secondId = document.getElementById("second");
const ampmId = document.getElementById("ampm");
//const temperatureId = document.getElementById("temperature");
//const temperatureDot = document.getElementById("temperatureFloat");
const dateId = document.getElementById("date");
const monthNumber = document.getElementById("monthNumber");
const monthId = document.getElementById("month");
const yearId = document.getElementById("year");
//const humidityId = document.getElementById("humidity");

function months(index) {
  const months = ["JAN", "FEB", "MAR", "APR", "MAY", "JUN", "JUL", "AUG", "SEP", "OCT", "NOV", "DEC"];
  return months[index];
}

function currentTime() {
  const current = new Date();

  let hours = current.getHours();
  const minutes = current.getMinutes();
  const seconds = current.getSeconds();
  const ampm = hours >= 12 ? "PM" : "AM";
  hours = hours % 12 || 12;

  hourId.textContent = String(hours).padStart(2, "0");
  minuteId.textContent = String(minutes).padStart(2, "0");
  //secondId.textContent = String(seconds).padStart(2, "0");
  ampmId.textContent = ampm;

  const date = current.getDate();
  const monthIndex = current.getMonth();
  dateId.textContent = String(date).padStart(2, "0");
  monthNumber.textContent = String(monthIndex + 1).padStart(2, "0");
  monthId.textContent = months(monthIndex);
  yearId.textContent = current.getFullYear();
};

setInterval(() => {
  currentTime();
}, 1000);

currentTime();

