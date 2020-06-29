//get end date till which you want the countdown to count

let end = new Date("29 june 2021 10:57:00").getTime();

let counter = setInterval(function(){


//code for countdown


let now = new Date();

//get leftover time in millsec

let timediff = end - now;

//calculate days, hours, min, sec left



let days = Math.floor(timediff/(1000*60*60*24));

let hours =  Math.floor((timediff%(1000*60*60*24))/ (1000*60*60));

let minutes =  Math.floor((timediff%(1000*60*60))/ (1000*60));

let seconds =  Math.floor((timediff%(1000*60))/ (1000));

//write on the box
document.querySelector(".countdown").innerHTML = days +"Days " + hours + "h " + minutes + "m " + seconds +"s";

if(timediff < 0)
{
    clearInterval(counter);
    document.querySelector(".countdown").innerHTML = "Wait is over Now :)"   //here you can say redirect to some other page as per need
}

}
,1000);

