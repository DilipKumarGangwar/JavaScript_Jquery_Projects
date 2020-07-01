function quizStartFn(e){
  
    e.preventDefault();
    let name = document.querySelector("#name").value;
    sessionStorage.setItem("username",name);
    location.href ="quiz.html";

}