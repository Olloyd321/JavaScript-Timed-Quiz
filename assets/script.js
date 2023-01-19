var timerEL = document.getElementById("count-down-number") ;
var startTimerbutton = document.getElementById("start-timer-button")

startTimerbutton.addEventListener("click", buttonClick)
timerEL.addEventListener("click", countdown)

function buttonClick(){
    console.log("buttonClick")
    countdown()
}

function countdown(){
var timeRemaining = 60;
var countingTime = setInterval(function (){
    if (timeRemaining > 1){
    timerEL.textContent = timeRemaining + 'Seconds left';
    timeRemaining--;
    } else if(timeRemaining === 1){
        timerEL.textContent = timeRemaining + 'Second left';
        timeRemaining--;
    } else {
        timerEL.textContent = '';
        clearInterval(countingTime);
        return
    }
},1000)
}