let clock = document.getElementById("clock")
let min = document.getElementById("min")
let sec = document.getElementById("sec")


let null_clock = 00; //ЧАСЫ
let null_min = 0; // МИНУТЫ
let null_sec = 00; //СЕКУНДЫ

setInterval(() => {
  clock.innerHTML = null_clock;
  min.innerHTML = null_min;
  sec.innerHTML = null_sec;
  null_sec++
  if (null_sec >= 60) {
    null_min++
    null_sec = 0;
  } else if (null_min >= 60) {
    null_min++
    null_clock = 0;
  } else if (null_clock >= 60) {
    null_clock = 0;
  }
}, 1000);