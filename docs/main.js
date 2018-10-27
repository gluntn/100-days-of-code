var bar = document.getElementById("days-left-percent-bar");
var days_left = document.getElementById("days-left");
var projects = document.getElementById("projects");

days_left.innerText = "Day " + howLongLeft() + "/100";
bar.style.width = howLongLeft() + "%";

fetch('https://wislos.github.io/100-days-of-code/projects.json')
  .then(res => res.json())
  .then(json => {
    projects.innerHTML = "";
    json.forEach(project => {
      projects.innerHTML +=
      "<li class='project'>" +
      "<a href='"+project.url + "' rel=''>"+project.name + "</a>" +
      "<p>" + project.note + "<br>" + "Started " + project.start;
    });
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