const sname=document.getElementById("sname");
const lbstu=document.getElementById("lbstu");
const father=document.getElementById("fname");
const lbfather=document.getElementById("lbfather");
const email=document.getElementById("email");
const lbemail=document.getElementById("lbemail");
const mobile=document.getElementById("mobile");
const lbmobile=document.getElementById("lbmobile");
const age=document.getElementById("age");
const lbage=document.getElementById("lbage");
const gender=document.getElementById("gender");
const lbgender=document.getElementById("lbgender");
const addr=document.getElementById("addr");
const lbaddr=document.getElementById("lbaddr");
const city=document.getElementById("city");
const lbcity=document.getElementById("lbcity");
const pin=document.getElementById("pin");
const lbpin=document.getElementById("lbpin");
const state=document.getElementById("state");
const lbstate=document.getElementById("lbstate");

const msg=document.getElementById("msg");

const userList=document.getElementById("userList");



$(document).ready(function(){  //call ready when whole HTML page is loaded

    
    $("#btn1").click(function(){


      let status = validate();
      if(status == true){
        const l= document.createElement("li");
        l.appendChild(document.createTextNode(
            `${sname.value}: ${fname.value}: ${email.value}`));
        
        //write 
        userList.appendChild(l); 

        sname.value=""
        email.value =""
      }
      
    });


    $("#btn2").click(function(){
          // $("#myform")[0].reset();               this also works
          $("#myform").trigger("reset");

    });

    function validate(){
          if(sname.value.length =="" || sname.value.length<3)
          {
              printTopMsg();
              lbstu.classList.add("Error");
              lbstu.innerHTML ="Invalid ";

              setTimeout(()=> lbstu.remove(),5000);
              return false;
          }
          if(father.value.length =="" || fname.value.length<3)
          {
              printTopMsg();
              lbfather.classList.add("Error");
              lbfather.innerHTML ="Invalid ";

              setTimeout(()=> lbfather.remove(),5000);
              return false;
          }
          if(email.value.length =="" ||  email.value.length < 12 || !isEmailFormatValid())
          {
              printTopMsg();
              lbemail.classList.add("Error");
              lbemail.innerHTML ="Invalid ";

              setTimeout(()=> lbemail.remove(),5000);
              return false;
          }

          if( isNaN(mobile.value) || !isMobileNoValid() )      
          {
              printTopMsg();
              lbmobile.classList.add("Error");
              lbmobile.innerHTML ="Invalid ";

              setTimeout(()=> lbmobile.remove(),5000);
              return false;
          }

          if(age.value.length =="")
          {
              printTopMsg();
              lbage.classList.add("Error");
              lbage.innerHTML ="Invalid ";

              setTimeout(()=> lbage.remove(),5000);
              return false;
          }

         
          if(($("input[type=radio]:checked").length === 0))
          {
              
              printTopMsg();
              lbgender.classList.add("Error");
              lbgender.innerHTML ="Invalid ";

              setTimeout(()=> lbgender.remove(),5000);
              return false;
          }

          if(!(addr.value.length >=20 && addr.value.length <=100))
          {
              printTopMsg();
              lbaddr.classList.add("Error");
              lbaddr.innerHTML ="Invalid ";

              setTimeout(()=> lbaddr.remove(),5000);
              return false;
          }

          if(city.value.length =="")
          {
              printTopMsg();
              lbcity.classList.add("Error");
              lbcity.innerHTML ="Invalid ";

              setTimeout(()=> lbcity.remove(),5000);
              return false;
          }
          if(pin.value.length =="" || isNaN(pin.value))
          {
              printTopMsg();
              lbpin.classList.add("Error");
              lbpin.innerHTML ="Invalid ";

              setTimeout(()=> lbpin.remove(),5000);
              return false;
          }

          if(state.value.length =="")
          {
              printTopMsg();
              lbstate.classList.add("Error");
              lbstate.innerHTML ="Invalid ";

              setTimeout(()=> lbstate.remove(),5000);
              return false;
          }
          return true;
   
    }

    function printTopMsg(){

        msg.classList.add("Error");
        msg.innerHTML ="Please Enter all fields Correctly";

        setTimeout(()=> msg.remove(),5000);
        //setTimeout(function(){msg.remove},2000);

    }

    function isEmailFormatValid(){
        var regex=/^([a-zA-Z0-9 \. -]+)@([a-zA-Z-]+).([a-z]{2,10})(.[a-z]{2,5})?$/;
         if(regex.test(email.value))
         {
             return true;
         }
         return false;
    }

    function isMobileNoValid(){

        var regex = /^[6-9]\d{9}$/;

        if(regex.test(mobile.value))
        {
            return true;
        }
        return false;
    }
    
});