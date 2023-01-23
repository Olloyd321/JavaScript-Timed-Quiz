var timerEL = document.getElementById("count-down-number") ;
var startTimerbutton = document.getElementById("start-timer-button");
var askQuestion = document.getElementById("question");
var answer = document.getElementById("answerboxes");
var answer1 = document.getElementById("answerChoice1")
var answer2 = document.getElementById("answerChoice2")
var answer3 = document.getElementById("answerChoice3")
var answer4 = document.getElementById("answerChoice4")

var afterButtonclickFormat = document.getElementById('clickHeader');

var questionsWithAnswers = [
    {
        question:'Which of the following keywords is used to define a variable in Javascript?"',
        answer1: 'define',
        answer2: 'object',
        answer3: 'var',
        answer4: 'none of these',
    },
        
    {
        question:'Which of the following methods is used to access HTML elements using Javascript?',
        answer1: 'getElementbyId()',
        answer2: 'grabElementbyId()',
        answer3: 'defineElementbyId()',
        answer4: 'none of these',
    },

    {
        question:'Upon encountering empty statements, what does the Javascript Interpreter do?',
        answer1: 'your computer crashes',
        answer2: 'returns an error statement',
        answer3: 'ignores the statement',
        answer4: 'none of these',
    },

    {
        question:'How to stop an interval timer in Javascript?',
        answer1: 'STOP',
        answer2: 'timerEnd',
        answer3: 'intervalEnd',
        answer4: 'clearInterval',
    }

]

function displayQuestion(){
    askQuestion.textContent=questionsWithAnswers[0].question
    askQuestion.textContent=questionsWithAnswers[0].question
    askQuestion.textContent=questionsWithAnswers[0].question
    askQuestion.textContent=questionsWithAnswers[0].question
}

function displayAnswers(){
    answer1.textContent=questionsWithAnswers[0].answer1
    answer2.textContent=questionsWithAnswers[0].answer2
    answer3.textContent=questionsWithAnswers[0].answer3
    answer4.textContent=questionsWithAnswers[0].answer4
}

function clickFormat(){
    afterButtonclickFormat.textContent=""
}

function buttonClick(){
    console.log("buttonClick");
    countdown();
    displayQuestion();
    displayAnswers();
    clickFormat();

}

// this function is the countdown timer
function countdown(){
var timeRemaining = 60;
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
        return
    }
},1000)
}


startTimerbutton.addEventListener("click", buttonClick)
timerEL.addEventListener("click", countdown)
