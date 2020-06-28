let counter = setInterval(function(){


//code for countdown


//get end date till which you want the countdown to count

let end = new Date("30 june 2021 13:00:00").getTime();

let now = new Date();

//get leftover time in millsec

let timediff = end - now;

//calculate days, hours, min, sec left



let days = Math.floor(timediff/(1000*60*60*24));

let hours =  Math.floor((timediff%(1000*60*60*24))/ (1000*60*60));

let minutes =  Math.floor((timediff%(1000*60*60))/ (1000*60));

let seconds =  Math.floor((timediff%(1000*60))/ (1000));

//write on the box
document.querySelector(".countdown").innerHTML = days +"days " + hours + "h " + minutes + "m " + seconds +"s";


}
,1000);

