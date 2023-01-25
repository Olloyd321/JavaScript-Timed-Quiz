var timerEL = document.getElementById("count-down-number") ;
var startTimerbutton = document.getElementById("start-timer-button");
var askQuestion = document.getElementById("question");
var answerboxes = document.getElementById("answerboxes");
var answer1 = document.getElementById("answerChoice1");
var answer2 = document.getElementById("answerChoice2");
var answer3 = document.getElementById("answerChoice3");
var answer4 = document.getElementById("answerChoice4");
var questionIndex = 0;
var quizInProgress = false;
var timeRemaining = 60;
var gameOver = false;
var rightOrWrong = document.getElementById("wrong/right");
var currentScore = 0;
var storedHighScores = currentScore;

var afterButtonclickFormat = document.getElementById('clickHeader');

var questionsWithAnswers = [
    {   
        correct: 'var',
        question:'Which of the following keywords is used to define a variable in Javascript?"',
        answer1: 'define',
        answer2: 'object',
        answer3: 'var',
        answer4: 'none of these',
    },
        
    {
        correct: 'getElementbyId()',
        question:'Which of the following methods is used to access HTML elements using Javascript?',
        answer1: 'getElementbyId()',
        answer2: 'grabElementbyId()',
        answer3: 'defineElementbyId()',
        answer4: 'none of these',
    },

    {
        correct: 'ignores the statement',
        question:'Upon encountering empty statements, what does the Javascript Interpreter do?',
        answer1: 'your computer crashes',
        answer2: 'returns an error statement',
        answer3: 'ignores the statement',
        answer4: 'none of these',
    },

    {
        correct: 'clearInterval',
        question:'How to stop an interval timer in Javascript?',
        answer1: 'STOP',
        answer2: 'timerEnd',
        answer3: 'intervalEnd',
        answer4: 'clearInterval',
    }

]

function displayQuestion(){
    askQuestion.textContent=questionsWithAnswers[questionIndex].question
}

function displayAnswers(){
    answer1.textContent=questionsWithAnswers[questionIndex].answer1
    answer2.textContent=questionsWithAnswers[questionIndex].answer2
    answer3.textContent=questionsWithAnswers[questionIndex].answer3
    answer4.textContent=questionsWithAnswers[questionIndex].answer4
}

function displayHighScores(){
    if (gameOver===true){
        // TO DO: load highscores from local storage and display.
        var storedHighScores = JSON.parse(localStorage.getItem(currentScore))
    }
}

function clickFormat(){
    afterButtonclickFormat.textContent=""
}

function displayRightOrWrong(message){
    rightOrWrong.textContent=message;

}

function buttonClick(){
    quizInProgress = true;
    countdown();
    displayQuestion();
    displayAnswers();
    clickFormat();
}

function checkResponse(event){
    console.log(event.target.textContent)
    if (quizInProgress==true)
    {
    var correctAnswerText = questionsWithAnswers[questionIndex].correct;
    if (correctAnswerText===event.target.textContent){
        if (questionIndex === 3){
            quizInProgress=false;
            gameOver=true;
            var scores = localStorage.getItem("highScores");
            if (scores){ 
                scores.push(currentScore);   
                localStorage.setItem("highScores", JSON.stringify(scores));        
            }
            else {
                localStorage.setItem("highScores", JSON.stringify([currentScore]));
            }
            displayHighScores();
            displayRightOrWrong("Game over!");
            localStorage.getItem(scores)
            // console.log(scores);
        }
        else{
        questionIndex++;
        currentScore++;
        displayQuestion();
        displayAnswers();
        displayRightOrWrong("Correct!");
        displayHighScores();
        }
    }
        else {
            timeRemaining-=10;
            currentScore--;
            displayRightOrWrong("Wrong, try again! -1 point and 10 seconds taken off the clock!");
            }
       
    }

    if (gameOver){
        quizInProgress=false
        displayRightOrWrong("GAME OVER!");
    } 
}

// this function is the countdown timer
function countdown(){

var countingTime = setInterval(function (){
    if (timeRemaining > 1){
    timerEL.textContent = timeRemaining + ' Seconds left';
    timeRemaining--;
    } else if(timeRemaining === 1){
        timerEL.textContent = timeRemaining + ' Second left';
        timeRemaining--;
    } else {
        timerEL.textContent = '';
        clearInterval(countingTime);
        quizInProgress=false;
        gameOver=true;
        return
    }
},1000)
}


startTimerbutton.addEventListener("click", buttonClick)
timerEL.addEventListener("click", countdown)


answer1.addEventListener("click", checkResponse)
answer2.addEventListener("click", checkResponse)
answer3.addEventListener("click", checkResponse)
answer4.addEventListener("click", checkResponse)