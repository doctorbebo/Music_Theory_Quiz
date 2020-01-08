let startButton = document.querySelector("#start-btn");
let viewHighScore = document.querySelector("#view-highscore");
let instructions = document.querySelector("#instructions")

instructions.textContent = "This is a basic music theory quiz. You will have " + timer + " seconds of time to answer " + test.length +  " questions. Good luck";

localStorage.removeItem("time");

startButton.addEventListener("click", function fn(){
    // load test
    console.log("start button clicked");
    window.location = "quiz.html";
})

viewHighScore.addEventListener("click", function fn(){
    // load test
    console.log("start button clicked");
    window.location = "highscore.html";
})