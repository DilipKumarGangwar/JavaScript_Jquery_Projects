let count=120; //120 sec
let time = setInterval(()=>
{
   let min = Math.floor(count / 60);
   let sec = count % 60; 
   console.log(min, sec);
   let formatted_min = min <10 ? ("0" + min ): min;
   let formatted_sec = sec <10 ? ("0" + sec ): sec;  
   document.querySelector("#timeleft").innerHTML=formatted_min + ":" + formatted_sec;
   count--;

   if(count === 0)
   {
       
        alert("Time Up");
        location.href="finalScore.html";
       
   }
},1000);


