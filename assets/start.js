let startButton = document.querySelector("#start-btn");
let viewHighScore = document.querySelector("#view-highscore");
let instructions = document.querySelector("#instructions")

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