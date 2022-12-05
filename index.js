const textTime = document.getElementById("clock");
const circleText = document.getElementById("circle-one");

function makeCircles(){
    for (let i = 0; i<1440; i + 90){
        let dateObj = new Date()
        let newDate = dateObj.getTime() + i*60000;
        console.log(newDate)
        /*let hh = newDate.getHours();
        let mm = newDate.getMinutes();
        
        let session ="AM";
        if(hh === 0){
            hh = 12;
        } else if(hh > 12){
            hh = hh - 12;
            session = "PM";
        }
      
         hh = (hh < 10) ? "0" + hh : hh;
         mm = (mm < 10) ? "0" + mm : mm;
         let newTime =  `${hh}:${mm} ${session} - `;
         circleText.textContent += newTime;*/
    
    }
}
 makeCircles();

