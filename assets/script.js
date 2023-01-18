var timer = document.getElementById(count-down-number);


function countdown()
var timeRemaining = 30;


var countingTime = setInterval(function (){
    if (timeRemaining > 1){
    timer.textContent = timeRemaining + 'Seconds left';
    timeRemaining--;
    } else if(timeRemaining === 1){
        timer.textContent = timeRemaining + 'Second left';
        timeRemaining--;
    } else {
        timer.textContent = '';
        clearInterval(countingTime);
        
    }
    
},1000)

function showTime(){}