let count=30; // 15 min *60 =900 sec 
let quizcomplete_time = document.querySelector("#timeleft").innerHTML;
//console.log("quizcomplete_timdde : ",quizcomplete_time);
let hour;
let min;
let sec;
let time = setInterval(()=>
{
    hour=  Math.floor(count /(60 * 60));
    min = Math.floor((count % (60 * 60))/60);
    sec = Math.floor((count % (60 * 60))%60);

  
   console.log(hour,min, sec);
   //let formatted_hour = min <10 ? ("0" + hour ): hour;
   let formatted_min = min <10 ? ("0" + min ): min;
   let formatted_sec = sec <10 ? ("0" + sec ): sec;  
  // document.querySelector("#timeleft").innerHTML=hour + ":" + formatted_min + ":" + formatted_sec;
  
  // console.log("quizcomplete_timdhhde : ",quizcomplete_time);
   count--;

   if(count === 0)
   {
       
        alert("   Time Up!!");
        location.href="finalScore.html";
       
   }
},1000);


