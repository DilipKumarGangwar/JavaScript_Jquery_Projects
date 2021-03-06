let questionlist = [
    {
        "question":"What is the name of Entrance Exam for M.Tech?",
        "option1" : "GATE",
        "option2" : "CAT",
        "option3" : "MAT",
        "option4" : "None of these",
        "answer"  : "1"
    
    }
    ,
    
    {
        "question":"Who developed C?",
        "option1" : "Larry Page",
        "option2" : "Dennis Ritchie",
        "option3" : "Thomas Elva",
        "option4" : "None of these",
        "answer"  : "2"
    
    },
    
    {
        "question":"Full form of JSON?",
        "option1" : "Javascript object name",
        "option2" : "Javascript object notation",
        "option3" : "Java object notation",
        "option4" : "None of these",
        "answer"  : "2"
    
    },

    {
        "question":"Which company owns Snapdragon Processor ?",
        "option1" : "Media Tek",
        "option2" : "Samsung",
        "option3" : "Qualcomm",
        "option4" : "None of these",
        "answer"  : "3"
    
    }
]

const container = document.querySelector(".container");
const questionField = document.querySelector(".question");
const opt1 = document.querySelector("#opt1");
const opt2 = document.querySelector("#opt2");
const opt3 = document.querySelector("#opt3");
const opt4 = document.querySelector("#opt4");

const prevbtn = document.querySelector("#prevbtn");
const nextbtn = document.querySelector("#nextbtn");
const result = document.querySelector("#result");
let questionIndex=0;
let score =0;
let totalQuestions = questionlist.length;

let username = sessionStorage.getItem("username");
//let quizcompletiontime = sessionStorage.getItem("username");
document.querySelector("#welcomename").innerHTML = username;
sessionStorage.setItem("TotalScore",score);          //initially set it to 0




function loadPrev(){
    console.log("prev=",questionIndex);
  if(questionIndex === 1){

      prevbtn.style.visibility="hidden";
      questionIndex--;

  }
  else{
    prevbtn.style.visibility="visible";
    questionIndex--;
  }

  if(questionIndex != totalQuestions-1  ){
    nextbtn.textContent = "Next";

}

  nextQuestion(questionIndex);



}




function loadNext(){
    console.log("next=",questionIndex);
    prevbtn.style.visibility="visible";


    //check if any option is selected 
    let selectedOption = document.querySelector("input[type=radio]:checked")
    if(!selectedOption){
        alert("Please select any option");
        return;
    }

    //check base cases
    let answer = selectedOption.value ;   //it can 1,2,3,4
   
    if(answer === questionlist[questionIndex].answer)  // if correct answer
    {
        score+=10;
        sessionStorage.setItem("TotalScore",score);
        

    }

    selectedOption.checked=false;       //so that this answer doesnot remain for next question, so this selection should be cleared should be cleared
    questionIndex++;
    console.log("update=",questionIndex);
    if(questionIndex === totalQuestions-1  ){
       
        nextbtn.textContent = "Finish";

    }

    if(questionIndex === totalQuestions  ){
        sessionStorage.setItem("Time",`${min} min:${sec} sec`);
        location.href="finalScore.html"

        return ;

    }




    nextQuestion(questionIndex);


}

//end of function


//it loads next Question from Question list
function nextQuestion(questionIndex){
   // console.log("index=" + questionIndex)  ;  
    let question_to_load_ref = questionlist[questionIndex];
    let question_to_load = question_to_load_ref.question;
    console.log(question_to_load_ref.option1);

    //set the question

    questionField.textContent = "Q" + (questionIndex+1) + '. ' + question_to_load;
    opt1.textContent = question_to_load_ref.option1;
    opt2.textContent = question_to_load_ref.option2;
    opt3.textContent = question_to_load_ref.option3;
    opt4.textContent = question_to_load_ref.option4;  


} //end of fn


//prevbtn.style.visibility="hidden";


nextQuestion(questionIndex);   //manually call for first time
