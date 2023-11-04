setInterval(()=>{

let hours = document.getElementById("hour");
let minutes = document.getElementById("minute");
let seconds = document.getElementById("second");
let ampm = document.getElementById("ampm");

let h = new Date().getHours();
let m = new Date().getMinutes();
let s = new Date().getSeconds();
let am = h >= 12 ? 'PM' : 'AM' ;

// Converting 24hr into 12hr clock
if(h>12){
    h = h - 12;
}

//Adding zero before the single digits
h = (h < 10) ? "0" + h : h;
m = (m < 10) ? "0" + m : m;
s = (s < 10) ? "0" + s : s;

hours.innerHTML = h + "<br><span>Hour</span>";
minutes.innerHTML = m + "<br><span>Minute</span>";
seconds.innerHTML = s + "<br><span>Second</span>";
ampm.innerHTML = am;

})
