let list = document.querySelector("#list");
let input = document.querySelector("#input");
let clear = document.querySelector(".clear");
let date = document.querySelector(".date");
let add_item = document.querySelector(".add-items");

let list_For_Local_Storage;
let id;

// Classes names
const CHECK = "fa-check-circle";
const UNCHECK = "fa-circle-thin";
const LINE_THROUGH = "lineThrough";



/*********************CLEAR/DELETE ALL TODOs FROM APP and LOCAL STORAGE******************** */

clear.addEventListener("click",function(){
   
      localStorage.clear();     //clear local storage
      location.reload();        //reload the document as it was initially without any To DO's . 
                                //It is like reload button in browser 


} );
    
/********************************************************* */

const options={weekday:"long",year:"numeric",month:"short",day:"numeric"};

date.innerHTML = new Date().toLocaleDateString("en-US", options);


/************************************************** */

add_item.addEventListener("click",function(){
      
        const toDO_Data = input.value;
        //console.log(toDO_Data);
        if(toDO_Data.trim().length !=0){
            addItemInToDo(toDO_Data,id,false,false);   //data,id,done,trash
        
       
            //prepare list/array to add in localstorage
            list_For_Local_Storage.push(
                {
                    name : toDO_Data,
                    id   : id,
                    done :false,
                    trash :false
                }
            );

            //add this item into localstorage
            localStorage.setItem("TODO",JSON.stringify(list_For_Local_Storage));
            
            id++;  // increment for next item to be added
           

         }   //end of if
        input.value="";


});

/*************************************************** */



/*************************************************** */




// Here, we will restore data from local storage(to show previous left over / not deleted TO DOs) when user reopen the app 

//1.fetch the data

const data_fetched_from_local_storage = localStorage.getItem("TODO");

//2.convert from string to JSON Object (Deserialise)

// Do checks if data is not empty
if(data_fetched_from_local_storage){
     list_For_Local_Storage = JSON.parse(data_fetched_from_local_storage);
     id = list_For_Local_Storage.length;

    // load Data to app using loop
    list_For_Local_Storage.forEach(function(item){          //item here is a object
        addItemInToDo(item.name, item.id,item.done,item.trash);

    });


}
else{                               //if there are no previous ToDos
    list_For_Local_Storage =[];
    id =0; 
}


/***************************************************** */

function addItemInToDo(toDO_Data,id,done,trash) {  //data,id,done,trash
    
    if(trash == true)
       return ;
       console.log(done);
       //else do this
    const DONE = done ? CHECK : UNCHECK;
    console.log(DONE);
    const LINE = done ? LINE_THROUGH : "";
    console.log(LINE);
    const item_to_add = `<li class="item">
    <i class="fa ${DONE} complete_incomplete" job="complete" id="${id}"></i>
    <p  class="text ${LINE}">${toDO_Data}</p>
    <i class="fa fa-trash delete_trash" job="delete" id="${id}"></i>
    </li>`
    ;
    

    const position = "beforeend";
    list.insertAdjacentHTML(position,item_to_add);
                                        
}


//called when new To DO item is added by user
document.addEventListener("keyup",function(event){
 
    if(event.keyCode == 13 )  //code for enter key
    {
         
        const toDO_Data = input.value;
        //console.log(toDO_Data);
        if(toDO_Data.trim().length !=0){
            addItemInToDo(toDO_Data,id,false,false);   //data,id,done,trash
        
       
            //prepare list/array to add in localstorage
            list_For_Local_Storage.push(
                {
                    name : toDO_Data,
                    id   : id,
                    done :false,
                    trash :false
                }
            );

            //add this item into localstorage
            localStorage.setItem("TODO",JSON.stringify(list_For_Local_Storage));
            
            id++;  // increment for next item to be added
           

         }   //end of if
        input.value="";
    }
    
});


function complete_The_ToDo(actual_target_ref){
      actual_target_ref.classList.toggle(CHECK);
      actual_target_ref.classList.toggle(UNCHECK);
      actual_target_ref.parentNode.querySelector(".text").classList.toggle(LINE_THROUGH);

      //update now in list, so that later it can be reflected in local storage

      if(list_For_Local_Storage[actual_target_ref.id].done )
          list_For_Local_Storage[actual_target_ref.id].done = false;
      else
          list_For_Local_Storage[actual_target_ref.id].done = true;


   

}

//deals with trash property. It removes the whole list
function  remove_The_ToDo(actual_target_ref){
     
     //get the list parent i.e  reference of "list_of_items" and the renove the desired list 
      actual_target_ref.parentNode.parentNode.removeChild(actual_target_ref.parentNode);
       
      //update in list
      list_For_Local_Storage[actual_target_ref.id].trash = true;
        


}


//User can click any To Do for status change, delete. This fn handles those
list.addEventListener("click",function(event){
    const actual_target_ref =  event.target;
    const jobType = event.target.attributes.job.value; //delet or complete


     if(jobType == "complete"){
           complete_The_ToDo(actual_target_ref);
     }
     else{              //delete
            remove_The_ToDo(actual_target_ref);
     }


     //set the list in local storage by converting JSON object list to string

     localStorage.setItem("TODO",JSON.stringify(list_For_Local_Storage));


});

