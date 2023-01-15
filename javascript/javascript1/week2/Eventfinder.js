Date.prototype.eventday = function(NumOfday)

 {
      
    todaydate1.setTime(this.getTime() + (NumOfday * 24 * 60 * 60 * 1000)); //get num of days and calculate with current time
    return todaydate1;   
 }
 const Week = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
 let todaydate1 = new Date(); //TODAY 's DATE
 let Tday=  Week[todaydate1.getDay()]; //Convert whole date to day
 let CalEday = todaydate1.eventday(3);//calculated event date fromt he function
 let eday= Week[CalEday.getDay()]; //convert event date to day
 console.log("Today is "+Tday+" and the event is on "+eday);