const textTime = document.getElementById("clock");
const circleText = document.getElementById("circle-one");

function makeCircles(){
    for (let i = 0; i<100; i + 90){
        let dateObj = new Date()
        let newDate = new Date(dateObj.getTime() + i*60000);
        let hh = newDate.getHours();
        let mm = newDate.getMinutes();
        //let ss = newDate.getSeconds();
        let session ="AM";
        //if(hh == 0){
        //    hh = 12;
        //} else if(hh > 12){
        //    hh = hh - 12;
        //    session = "PM";
         }//
      
         hh = (hh < 10) ? "0" + hh : hh;
         mm = (mm < 10) ? "0" + mm : mm;
         //ss = (ss < 10) ? "0" + ss : ss;
         let newTime =  `${hh}:${mm} ${session}`;
         circleText.textContent += newTime;
    
    }
 makeCircles();

 //function texto(){
 //circleText.textContent += "time";}

//texto();















/*function currentTime() {
    let date = new Date(); 
    let hh = date.getHours();
    let mm = date.getMinutes();
    let ss = date.getSeconds();
    let session ="AM"
    if(hh == 0){
        hh = 12;
    }
    if(hh > 12){
        hh = hh - 12;
        session = "PM";
     }
  
     hh = (hh < 10) ? "0" + hh : hh;
     mm = (mm < 10) ? "0" + mm : mm;
     ss = (ss < 10) ? "0" + ss : ss;
     let time =  `${hh}:${mm}:${ss} ${session}`
     textTime.textContent = time

    let t = setTimeout(function(){ currentTime() }, 1000);
    
    
}

currentTime()

function circle() {
    let oldDateObj = new Date(); 
    //let newDateObj = new Date(oldDateObj.getTime() + 90*60000);
    let hoursFirstCicle = newDateObj.getHours();
    let minutesFirstCicle = newDateObj.getMinutes();
    let secondsFirstCicle = newDateObj.getSeconds();
    let timeFirstCicle = `${hoursFirstCicle}:${minutesFirstCicle}:${secondsFirstCicle}`; 

    circleOne.textContent = timeFirstCicle;
}
circle()*/

