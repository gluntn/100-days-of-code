var bar = document.getElementById("days-left-percent-bar");
var days_left = document.getElementById("days-left");

days_left.innerText = "Day " + howLongLeft() + "/100";
bar.style.width = howLongLeft() + "%";

// fetch('https://bioinfobot.github.io/data/2017-05.json')
//   .then(res => res.json())
//   .then(json => {
//     //json vaiable contains object with data
//   });

function howLongLeft() {
  var today = new Date(2018, 9, 27);
  return datediff(today, new Date()) + 1;
}

function datediff(first, second) {
  // Take the difference between the dates and divide by milliseconds per day.
  // Round to nearest whole number to deal with DST.
  return Math.round((second-first)/(1000*60*60*24));
}