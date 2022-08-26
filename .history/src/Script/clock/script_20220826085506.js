let to = new Date("oct 30 2022 18:00:0");
function uptade() {
  let from = new Date();
  diff = to - from;
  (day = setTwoDigit(Math.floor(diff / 1000 / 60 / 60 / 24))),
    (hour = setTwoDigit(Math.floor(diff / 1000 / 60 / 60) % 24)),
    (minute = setTwoDigit(Math.floor(diff / 1000 / 60) % 60)),
    (sec = setTwoDigit(Math.floor(diff / 1000) % 60)),
    document.getElementById("day").innerText = day;
  document.getElementById("hour").innerText = hour;
  document.getElementById("minute").innerText = minute;
  document.getElementById("sec").innerText = sec;
}
