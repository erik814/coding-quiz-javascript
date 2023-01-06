let questionTitle = "";
let option1 = "";
let option2 = "";
let option3 = "";
let option4 = "";
let answer = "";
let displayTimer= "";

let score = 0;
let timeLeft = 10;
let questionIndex = 0;
let countDown = "";

let currentQuestion = document.getElementById("displayedQuestion");
let currentOptions = document.getElementById("displayedOptions");

let questions = [
    {
        questionTitle: "Who do we love most?",
        option1: "Chuck",
        option2: "Misfits",
        option3: "Sandra",
        option4: "Converse",
        answer: "Misfits",
    },

    {
        questionTitle: "Question 2",
        option1: "option 5",
        option2: "option 6",
        option3: "option 7",
        option4: "option 8",
        answer: option4,
    },
];



document.getElementById("startButton").addEventListener("click", start);

function start (){
    document.getElementById("initial-container").innerHTML = "";
    
    startTimer();
    showScore();
    clickListener();
    nextQuestion();
};



function startTimer (){  // starts and displays timer
    var displayTimer = document.createElement("div");
    document.getElementById("timer").appendChild(displayTimer);

    var countDown = setInterval(function(){
        displayTimer.textContent = ("Time Remaining: " + timeLeft);
        timeLeft--;

        if(timeLeft <= 0){  // stops timer when time runs out
            clearInterval(countDown);
            displayTimer.textContent = 0;
            gameOver();
        }
    }, 1000);

};



function showScore (){
    var displayScore = document.createElement("div");
    displayScore.textContent = ("Score: " + score);
    document.getElementById("score").appendChild(displayScore);
};



function clickListener(){
    document.body.addEventListener("click", function(e){
        if(e.target.textContent === questions[questionIndex].answer){
            correct();
        } else if (e.target.textContent === questions[questionIndex].option1 || e.target.textContent === questions[questionIndex].option2 || e.target.textContent === questions[questionIndex].option3 || e.target.textContent === questions[questionIndex].option4) {
            incorrect();
        }
    });

}



function nextQuestion(){

    console.log("nextquestion")
    console.log("index at nextquestion" + questionIndex)

    currentQuestion.textContent = questions[questionIndex].questionTitle;

    let displayOption1 = document.createElement("button")
    displayOption1.textContent = (questions[questionIndex].option1);
    currentOptions.appendChild(displayOption1);

    let displayOption2 = document.createElement("button")
    displayOption2.textContent = (questions[questionIndex].option2);
    currentOptions.appendChild(displayOption2);

    let displayOption3 = document.createElement("button")
    displayOption3.textContent = (questions[questionIndex].option3);
    currentOptions.appendChild(displayOption3);

    let displayOption4 = document.createElement("button")
    displayOption4.textContent = (questions[questionIndex].option4);
    currentOptions.appendChild(displayOption4);

}



function correct(){

    score += 10;
    document.getElementById("score").textContent = score;

    timeLeft += 10;

    var displayCorrect = document.createElement("p");
    displayCorrect.textContent = ("That's right, smartypants!");
    document.body.appendChild(displayCorrect);

    setTimeout(function(){
        clearQuestion();
    },1500)
}

function incorrect(){

    score -= 5;
    document.getElementById("score").textContent = score;

    timeLeft -= 10;

    var displayIncorrect = document.createElement("p");
    displayIncorrect.textContent = ("Mmmmm, not quite...");
    document.body.appendChild(displayIncorrect);

    setTimeout(function(){
        clearQuestion();
    },1500)
}



function clearQuestion(){
    document.getElementById("displayedQuestion").innerHTML = "";
    document.getElementById("displayedOptions").innerHTML = "";
    // document.querySelector("p").innerHTML = "";
    // add docmunet.body.children[] to target the created p specifically


    questionIndex++

    if(questionIndex === questions.length || timeLeft <= 0){
        gameOver();
    }else{
        nextQuestion();
    }
}


function gameOver(){
    console.log("gameover")
    console.log(document.body.children)

    // document.getElementById("timer").innerHTML = "";

    document.getElementById("displayedQuestion").innerHTML = "";
    document.getElementById("displayedOptions").innerHTML = "";
    document.querySelector("p").innerHTML = "";
    
    let reinstateH1 = document.createElement("h1");
    reinstateH1.textContent = ("Game Over!");
    document.getElementById("initial-container").appendChild(reinstateH1);



}