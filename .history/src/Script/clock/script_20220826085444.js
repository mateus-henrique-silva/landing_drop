let to = new Date("c 30 2022 18:00:0");
function uptade() {
  let from = new Date();
  diff = to - from;
  (day = setTwoDigit(Math.floor(diff / 1000 / 60 / 60 / 24))),
    (hour = setTwoDigit(Math.floor(diff / 1000 / 60 / 60) % 24)),
    (minute = setTwoDigit(Math.floor(diff / 1000 / 60) % 60)),
    (sec = setTwoDigit(Math.floor(diff / 1000) % 60)),
    document.getElementById("day").innerHTML = day;
  document.getElementById("hour").innerHTML = hour;
  document.getElementById("minute").innerHTML = minute;
  document.getElementById("sec").innerHTML = sec;
}
