let TotalScore =sessionStorage.getItem("TotalScore");
let candidateName = sessionStorage.getItem("username");
//let quizcompletetime = sessionStorage.getItem("QuizCompletionTime");
document.querySelector(".score").innerHTML = TotalScore;
document.querySelector(".candidatename").innerHTML = candidateName;
//document.querySelector(".quizcompletetime").innerHTML = quizcompletetime;

console.log(TotalScore , candidateName)