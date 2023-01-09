let questionTitle = "";
let option1 = "";
let option2 = "";
let option3 = "";
let option4 = "";
let answer = "";
let displayTimer = "";
let nameAndScore = [];
let nameAndScoreContainer = [];

let score = 0;
let timeLeft = 3;
let questionIndex = 0;
let countDown = "";

let currentQuestion = document.getElementById("displayedQuestion");
let currentOptions = document.getElementById("displayedOptions");
let gameOverDiv = "";
let nsObject = {}

var displayCorrect = document.createElement("p");
displayCorrect.setAttribute("id", "correctPtag")
displayCorrect.textContent = ("");
document.body.appendChild(displayCorrect);

let questions = [
    {
        questionTitle: "How would you say two conditions are strictly equal?",
        option1: "!=",
        option2: "===",
        option3: "==",
        option4: "!==",
        answer: "===",
    },

    {
        questionTitle: "What does math.random do?",
        option1: "Randomizes a set of numbers",
        option2: "Provides a random number from 0-100",
        option3: "Provides a random number from 0 up to, but not including, 1",
        option4: "Provides a random number from 1-10",
        answer: "Provides a random number from 0 up to, but not including, 1",
    },

    {
        questionTitle: "What is a method?",
        option1: "An object within a function",
        option2: "An array within a function",
        option3: "A function within an array",
        option4: "A function within an object",
        answer: "A function within an object",
    },

    {
        questionTitle: "What type of data is either true or false?",
        option1: "boolean",
        option2: "string",
        option3: "binary",
        option4: "number",
        answer: "boolean",
    },

    {
        questionTitle: "Variables declared at the top of the code are part of what scope?",
        option1: "function",
        option2: "unified",
        option3: "global",
        option4: "main",
        answer: "global",
    },

    {
        questionTitle: "Multiple pieces of data stored in one variable is called what?",
        option1: "method",
        option2: "multiple variable",
        option3: "boolean",
        option4: "array",
        answer: "array",
    },
];





// This is where the process begins

document.getElementById("startButton").addEventListener("click", start);

function start (){
    
    document.getElementById("initial-container").style.display = 'none';
    
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

console.log(document.body)

function clickListener(){
    document.body.addEventListener("click", function(e){
        if(e.target.textContent === questions[questionIndex].answer){
            correct();
        } else if(e.target.textContent === questions[questionIndex].option1 || e.target.textContent === questions[questionIndex].option2 || e.target.textContent === questions[questionIndex].option3 || e.target.textContent === questions[questionIndex].option4) {
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
    currentQuestion.innerHTML = "";
    currentOptions.innerHTML = "";
    displayCorrect.textContent = ("");

    questionIndex++

    if(timeLeft > 0 && questionIndex < questions.length){
        nextQuestion()
    }
}


function gameOver(){
    currentQuestion.innerHTML = "";
    currentOptions.innerHTML = "";
    document.getElementById("timer").innerHTML = "";
    document.getElementById("score").innerHTML = "";
    displayCorrect.style.padding = "0";

    let gameOverDiv = document.createElement("div");
    gameOverDiv.setAttribute("id", "gameoverdiv");
    document.body.appendChild(gameOverDiv);

    let gameOverText = document.createElement("h1");
    gameOverText.textContent = "Game Over!";
    gameOverDiv.appendChild(gameOverText);

    let finalScoreText = document.createElement("h2");
    finalScoreText.textContent = "Final Score: " + score;
    gameOverDiv.appendChild(finalScoreText);

    takeInitials();
}



function takeInitials(){

    let inputSubmitContainer = document.createElement("div");
    inputSubmitContainer.setAttribute("id", "inputSubmitContainer");
    document.body.appendChild(inputSubmitContainer);

    let gameOverPtag = document.createElement("p");
    gameOverPtag.textContent = "Please submit your initials";
    inputSubmitContainer.appendChild(gameOverPtag);

    let textInputField = document.createElement("textarea");
    textInputField.setAttribute("id", "textInputField");
    textInputField.textContent = "";
    inputSubmitContainer.appendChild(textInputField);
    console.log(inputSubmitContainer);

    let submitButton = document.createElement("button");
    submitButton.setAttribute("id", "submitButton");
    submitButton.textContent = "Submit";
    inputSubmitContainer.appendChild(submitButton);

    
    // setup leaderboard

    var leaderBoardDiv = document.createElement("div");
    document.body.appendChild(leaderBoardDiv);

    var leaderBoardHeader = document.createElement("h2");
    leaderBoardHeader.textContent = "High Scores";
    leaderBoardDiv.appendChild(leaderBoardHeader);

    var leaderBoardDisplay = document.createElement("div");
    leaderBoardDisplay.setAttribute("id", "ul")
    leaderBoardDiv.appendChild(leaderBoardDisplay);

    //pull from storage and display

    var nameAndScore = JSON.parse(localStorage.getItem("nameAndScore")) || [];
    var leaderBoardLi = document.createElement("p");
    leaderBoardDisplay.appendChild(leaderBoardLi);

    nameAndScoreContainer.push(nameAndScore);



    leaderBoardDiv.style.display = "none";



    textInputField.addEventListener('keydown', function(e){
        console.log(e);
    })

    inputSubmitContainer.addEventListener('click', function(e){
        e.preventDefault();
        console.log(e.target)
        if(e.target === submitButton){

            inputSubmitContainer.innerHTML = "";

            var nsObject = {
                player: textInputField.value,
                score: score
            };
            
            console.log(nsObject)

            nameAndScore.push(nsObject);
            localStorage.setItem("nameAndScore", JSON.stringify(nameAndScore));

            leaderBoardDiv.style.display = "block";

            for(var i = 0; i < nameAndScore.length; i++){
                var pTag = document.createElement("p");
                pTag.textContent = nameAndScore[i].player + " - " + nameAndScore[i].score;
                leaderBoardDisplay.appendChild(pTag);
            }

        }
    });
}