let to = new Date("agust 30 2022 18:00:0");
function uptade() {
  let from = new Date();
  diff = to - from;
  (day = setTwoDigit(Math.floor(diff / 1000 / 60 / 60 / 24))),
    (hour = setTwoDigit(Math.floor(diff / 1000 / 60 / 60) % 24)),
    (minute = setTwoDigit(Math.floor(diff / 1000 / 60) % 60)),
    (sec = setTwoDigit(Math.floor(diff / 1000) % 60)),
    document.getElementById("day").innerHTML;
  document.getElementById("hour").innerHTML;
  document.getElementById("minute").innerHTML;
  document.getElementById("sec").innerHTML;
}
