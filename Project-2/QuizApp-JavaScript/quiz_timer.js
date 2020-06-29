let count=8; //7200sec=2 hr sec
let time = setInterval(()=>
{
   let hour=  Math.floor(count /(60 * 60));
   let min = Math.floor((count % (60 * 60))/60);
   let sec = Math.floor((count % (60 * 60))%60);

  
   console.log(hour,min, sec);
   //let formatted_hour = min <10 ? ("0" + hour ): hour;
   let formatted_min = min <10 ? ("0" + min ): min;
   let formatted_sec = sec <10 ? ("0" + sec ): sec;  
   document.querySelector("#timeleft").innerHTML=hour + ":" + formatted_min + ":" + formatted_sec;
   count--;

   if(count === 0)
   {
       
        alert("   Time Up!!");
        location.href="finalScore.html";
       
   }
},1000);


