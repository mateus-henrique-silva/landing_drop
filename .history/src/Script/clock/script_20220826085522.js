let to = new Date("oct 30 2022 18:00:0");
function uptade() {
  let from = new Date();
  diff = to - from;
  (day = setTwoDigit(Math.floor(diff / 1000 / 60 / 60 / 24))),
    (hour = setTwoDigit(Math.floor(diff / 1000 / 60 / 60) % 24)),
    (minute = setTwoDigit(Math.floor(diff / 1000 / 60) % 60)),
    (sec = setTwoDigit(Math.floor(diff / 1000) % 60)),
    document.qu("day").innerText = day;
  document.qu("hour").innerText = hour;
  document.qu("minute").innerText = minute;
  document.qu("sec").innerText = sec;
}
