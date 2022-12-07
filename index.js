const awakeBtn = document.getElementById('awake-btn');
const circles = document.getElementById("circles")
const formatBtn = document.getElementById("format-btn")
let numbers = [];
let n = 60000;
circles.innerHTML =`<li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li>`;
let clockOption = true;

let currentTime = document.getElementById("current-time")
function clock(){
  let time = new Date()
  let hh = time.getHours()
  let mm = time.getMinutes()
  let ss = time.getSeconds()
  if(hh<10){
    hh = "0" + hh
  }
  if(mm<10){
    mm = "0" + mm
  }
  if(ss<10){
    ss = "0" + ss
  }
  currentTime.textContent = `${hh}:${mm}:${ss}`
  
}

setInterval(clock, 1000);

formatBtn.addEventListener("click", function(){
  if(clockOption){
    clockOption = false;
  
    //formatBtn.textContent="24 HOURS"
  }else{
    clockOption = true;
    //formatBtn.textContent="12 HOURS"
  }
  counter();
})
function counter(){
  numbers = [];
  let counter = 0;
  while (counter < 1440) {
    let nn = counter*n;
    numbers.push(nn);
    counter += 90;
  }
  if(clockOption){
    render();
  }else{
    renderTwentyFour();
  }
}
function render(){
  let setTime = Date.parse(new Date);
  let tex = '';
  for(let i = 0; i<numbers.length; i++){
    let cicle =  numbers[i] + setTime;
    let cicleCompleted = new Date(cicle)
    let hh = cicleCompleted.getHours();
    let mm = cicleCompleted.getMinutes();
    let session = "am"
    if(hh>12){
      hh-= 12
      session="pm"
    } if (hh==12){
      session="pm"
    }if (hh<10){
      hh = "0"+hh
    }
    if(mm<10){
      mm = "0"+mm
    }
    tex = tex + ` <li> ${hh} : ${mm}  ${session}</li> `;
    }
    circles.innerHTML = tex;
}
function renderTwentyFour(){
  let setTime = Date.parse(new Date);
  let tex = '';
  for(let i = 0; i<numbers.length; i++){
    let cicle =  numbers[i] + setTime;
    let cicleCompleted = new Date(cicle)
    let hh = cicleCompleted.getHours();
    let mm = cicleCompleted.getMinutes();
    
    if (hh<10){
      hh = "0"+hh
    }
    if(mm<10){
      mm = "0"+mm
    }
    tex = tex + ` <li> ${hh} : ${mm} </li> `;
    }
    circles.innerHTML = tex;
}

