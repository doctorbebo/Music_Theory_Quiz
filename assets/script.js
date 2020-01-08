let answerList = document.querySelector("#answer-list")
let questionText = document.querySelector("#question");
let scoreText = document.querySelector("#score");
let timerText = document.querySelector("#timer");
let container = document.querySelector(".container");


timerText.textContent = timer;
let timerid = setInterval(updateTimer,1000);
let questionIndex = 0;

function displayQuestion()
{
    questionText.textContent = test[questionIndex].question;

    answerList.innerHTML = "";
    for (let i = 0; i < test[questionIndex].answers.length; i++) {
        let e = document.createElement("p");
        e.setAttribute("class", "answer");
        e.textContent = test[questionIndex].answers[i];
        answerList.appendChild(e);
    }
}
function updateScore()
{
    score++;
    scoreText.textContent = score;
}
function updateTimer()
{
    timer--;
    timerText.textContent = timer;
    if(timer <= 0)
    {
        endQuiz();
    }
}





answerList.addEventListener("click", function answerSelector(target)
{
    if(target.target.textContent == test[questionIndex].correctAnswer)
    {
        updateScore();
        if(questionIndex == test.length-1)
        {
            endQuiz();
        }else
        {
            questionIndex++;
            displayQuestion();
        }
    }
    else 
    {
        for (let i = 0; i < test[questionIndex].answers.length; i++) {
            const element = test[questionIndex].answers[i];
            if(target.target.textContent == element)
            {
                timer -= 15;
            }
            
        }
    }
});

function endQuiz(){
    localStorage.setItem("time", timer);
    window.location = "highscore.html";
}


updateScore();
displayQuestion();
