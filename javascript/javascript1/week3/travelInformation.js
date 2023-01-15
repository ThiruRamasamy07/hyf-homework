
function calspeed(travelInformation)
{
  let time= (travelInformation.destinationDistance/travelInformation.speed);
  return time
}
const travelInformation = {
    speed: 50,
    destinationDistance: 432,
  };
let travelTime = calspeed(travelInformation);
//let intime= travelTime.gethours();
console.log(timeConvert(travelTime)); // 8 hours and 38 minutes

function timeConvert(travelTime) {
    var num = travelTime*60;
    var hours = (num / 60);
    var rhours = Math.floor(hours);
    var minutes = (hours - rhours) * 60;
    var rminutes = Math.round(minutes);
    return " Time takes to reach the destination is: " + rhours + " hour(s) and " + rminutes + " minute(s).";
    }
    
   // console.log(timeConvert(200));