const hourEl = document.getElementById("hours");
const minuteEL = document.getElementById("minutes");
const secondEl = document.getElementById("seconds");
const ampmEl = document.getElementById("ampm");

updateClock();

function updateClock() {
  let h = new Date().getHours();
  let m = new Date().getMinutes();
  let s = new Date().getSeconds();

  if(h < 10) {
    h = "0" + h;
  }

  if(m < 10) {
    m = "0" + m;
  }

  if(s < 10) {
    s = "0" + s;
  }
  hourEl.innerText = h;
  minuteEL.innerText = m;
  secondEl.innerText = s;

  
}