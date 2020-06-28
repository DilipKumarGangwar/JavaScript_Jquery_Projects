function quizStartFn(e){
  
    e.preventDefault();
    console.log("hello");
    let name = document.querySelector("#name").value;
    console.log("name");
    sessionStorage.setItem("username",name);
    location.href ="quiz.html";

}