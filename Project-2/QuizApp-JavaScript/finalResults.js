let TotalScore =sessionStorage.getItem("TotalScore");
let candidateName = sessionStorage.getItem("username");

document.querySelector(".score").innerHTML = TotalScore;
document.querySelector(".candidatename").innerHTML = candidateName;

console.log(TotalScore , candidateName)