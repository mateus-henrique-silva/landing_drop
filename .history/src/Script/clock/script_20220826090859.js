let to = new Date("oct 30 2022 18:00:0");
function uptade() {
  let from = new Date();
  diff = to - from;

  (day = setTwoDigit(Math.floor(diff / 1000 / 60 / 60 / 24))),
    (hour = setTwoDigit(Math.floor(diff / 1000 / 60 / 60) % 24)),
    (minute = setTwoDigit(Math.floor(diff / 1000 / 60) % 60)),
    (sec = setTwoDigit(Math.floor(diff / 1000) % 60)),
    (document.querySelector("#day").innerText = day);
  document.querySelector("#hour").innerText = hour;
  document.querySelector("#minute").innerText = minute;
  document.querySelector("#sec").innerText = sec;
}

let interval = setInterval(uptade, 1000);
function setTwoDigit(argument){
    return argument>9?argument:argument
}