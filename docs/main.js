var bar = document.getElementById("days-left-percent-bar");
var days_left = document.getElementById("days-left");

days_left.innerText = "Day " + howLongLeft() + "/100";
bar.style.width = howLongLeft() + "%";

fetch('https://github.com/wislos/100-days-of-code/blob/master/docs/projects.json')
  .then(res => res.json())
  .then(json => {
    console.log(json);
});

function howLongLeft() {
  var today = new Date(2018, 9, 27);
  return datediff(today, new Date()) + 1;
}

function datediff(first, second) {
  // Take the difference between the dates and divide by milliseconds per day.
  // Round to nearest whole number to deal with DST.
  return Math.round((second-first)/(1000*60*60*24));
}