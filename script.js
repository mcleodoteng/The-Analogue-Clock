
function runClock(){
    
    // Declare and Initialize the inbuilt date function
    const todayDate = new Date(); //object of date()
    const second = todayDate.getSeconds();
    const minute = todayDate.getMinutes() + second/60;
    const hours = (todayDate.getHours() -12) + minute/60;

    console.log("Hour: " + hours + " Minute: " + minute + " Second: " + second);

    // Declare and Initialize your variables
    const secAngle = second * 6;//converting current time
    const minAngle = minute * 6;
    const hrsAngle = hours * 30; 

    // Declare and Initialize your variables
    const secondHand = document.getElementById("seconds");
    const minuteHand = document.getElementById("minutes");
    const hourHand = document.getElementById("hours");
    const trans = document.getElementById("face")
    
 

    // Set the transformation for each arm
    // hourHand.style.transform = `rotate(${hrsAngle})`;
    // minuteHand.style.transform = `rotate(${minAngle})`;
    // secondHand.style.transform = `rotate(${secAngle})`;
    // trans.style.transform = `transform-origin(${0, 0})`;

    //OR
    secondHand.setAttribute('transform', `rotate(${secAngle}, 244, 251)`);
    minuteHand.setAttribute('transform', `rotate(${minAngle}, 244, 251)`);
    hourHand.setAttribute('transform', `rotate(${hrsAngle}, 244, 251)`);
	
}
setInterval(runClock, 1000);
