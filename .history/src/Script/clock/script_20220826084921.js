let day = document.getElementById("day").innerHTML;
let hour = document.getElementById("hour").innerHTML;
let minute = document.getElementById("minute").innerHTML;

let to = new Date('agust 30 2022 18:00:0');
function uptade(){
    let from = new Date();
    diff = to-from;
    day = setTwoDigit(Math.floor(diff/1000))
}