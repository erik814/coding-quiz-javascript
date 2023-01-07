let questionTitle = "";
let option1 = "";
let option2 = "";
let option3 = "";
let option4 = "";
let answer = "";
let displayTimer= "";

let score = 0;
let timeLeft = 5;
let questionIndex = 0;
let countDown = "";

let currentQuestion = document.getElementById("displayedQuestion");
let currentOptions = document.getElementById("displayedOptions");

var displayCorrect = document.createElement("p");
displayCorrect.textContent = ("");
document.body.appendChild(displayCorrect);

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

    {
        questionTitle: "Question 2",
        option1: "option 5",
        option2: "option 6",
        option3: "option 7",
        option4: "option 8",
        answer: option4,
    },
];

// var displayCorrect = document.createElement("p");
// displayCorrect.textContent = ("");
// document.body.appendChild(displayCorrect);

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

        if(timeLeft <= 0 || questionIndex === questions.length){
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
    //}
}



function correct(){

    score += 10;
    document.getElementById("score").textContent = score;

    timeLeft += 10;
    displayCorrect.textContent = ("That's right, smartypants!");

    setTimeout(function(){
        document.querySelectorAll("p").innerHTML = ""
        clearQuestion();
    },1500)
}

function incorrect(){

    score -= 5;
    document.getElementById("score").textContent = score;

    timeLeft -= 10;
    displayCorrect.textContent = ("Mmmmm, not quite...");

    setTimeout(function(){
        document.querySelectorAll("p").innerHTML = ""
        clearQuestion();
    },1500)
}



function clearQuestion(){
    document.getElementById("displayedQuestion").innerHTML = "";
    document.getElementById("displayedOptions").innerHTML = "";
    displayCorrect.textContent = ("");

    questionIndex++

    if(timeLeft > 0 && questionIndex < questions.length){
        nextQuestion()
    }
}


function gameOver(){
    console.log("gameover")
    console.log(document.body.children)

    document.getElementById("displayedQuestion").innerHTML = "";
    document.getElementById("displayedOptions").innerHTML = "";
    
    console.log(document.getElementById("displayedOptions").innerHTML)

    let reinstateH1 = document.createElement("h1");
    reinstateH1.textContent = ("Game Over!");
    document.getElementById("initial-container").appendChild(reinstateH1);

    document.getElementById("displayedQuestion").innerHTML = "Final Score: " + score;

    let initialsField = document.createElement("input");
    initialsField.type = "text";
    initialsField.className

}

