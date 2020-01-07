const handler = document.querySelector("#handler");
const input = document.querySelector("#input");
const userScore = document.querySelector("#user-score")
const userTime = document.querySelector("#user-time");
const highscoreList = document.querySelector("#highscore-list");

console.log(score);
let time = localStorage.getItem("time");
let newScore = localStorage.getItem("score");


userScore.textContent = "Score: " + newScore;
userTime.textContent = "Time: " + time;
let scoreArray;
console.log(JSON.parse(localStorage.getItem("highscores")));

if(JSON.parse(localStorage.getItem("highscores")) !== null)
{ 
    scoreArray = JSON.parse(localStorage.getItem("highscores"))

    for (let i = 0; i < scoreArray.initials.length; i++) {
        let element = document.createElement("li");
        element.setAttribute("class", "highscore-entry");
        element.textContent = (scoreArray.initials[i] + " Score: " + scoreArray.score[i] + " Time: " + scoreArray.time[i]);
        highscoreList.append(element);
        console.log(element);
    }
}else
{
    scoreArray = {
        initials : [],
        score : [],
        time : []
    };  
}


handler.addEventListener("click", function handler(obj){
    if(obj.target.id === "submit-btn")
    {
        let element = document.createElement("li");
        element.setAttribute("class", "highscore-entry");
        element.textContent = (input.value + " " + userScore.textContent + " " + userTime.textContent);
        console.log(element);
        highscoreList.append(element);
        scoreArray.score.push(newScore)
        scoreArray.time.push(time);
        scoreArray.initials.push(input.value);
        console.log(scoreArray);
        localStorage.setItem("highscores", JSON.stringify(scoreArray));
    }else if(obj.target.id === "clear-btn")
    {
        let elements = document.querySelectorAll(".highscore-entry");
        elements.forEach(e => {
            e.remove();
        });
        localStorage.removeItem("highscores");
    }else if(obj.target.id === "retake-btn")
    {
        window.location = "start.html";
    }
})