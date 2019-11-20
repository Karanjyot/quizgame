var q1El = document.getElementById("qone");
var q2El = document.getElementById("qtwo");
var q3El = document.getElementById("qthree");
var q4El = document.getElementById("qfour");
var quesEl = document.getElementById("ques")
var timerEl = document.getElementById("timer");
var h1El = document.getElementById("h1tag");
var listgroupEl = document.querySelector(".list-group");
var startEl = document.getElementById("start");
var playagainEl = document.getElementById("playagain");
var highscoresEl = document.getElementById("highscores");
var highscorelistEl = document.getElementById("jumbotronhighscores");
var highscoresfinishEl = document.getElementById("highscoresfinish");
var audiowrongEl = document.getElementById("audiowrong");
var audiocorrectEl = document.getElementById("audiocorrect");
var counter = 75;

var scorearr = []

init()


function init() {

    var scoress = JSON.parse(localStorage.getItem("high"));

    if (scoress !== null) {
        scorearr = scoress;
    }
}

function storeScores() {

    localStorage.setItem("high", JSON.stringify(scorearr));
}


document.getElementById("jumbotronid").style.display = "none";
document.getElementById("jumbotronfinish").style.display = "none";
highscorelistEl.style.display = "none";

// start button event listener

startEl.addEventListener("click", function () {
    document.getElementById("jumbotronid").style.display = "block";

    function timeIt() {
        counter--
        timerEl.innerText = counter

        if (counter === 0 || counter < 0) {

            document.getElementById("jumbotronfinish").style.display = "block";
            document.getElementById("jumbotronid").style.display = "none";
            document.getElementById("gameover").innerHTML = "Game Over! You ran out of time."
        }

    }
    timeint = setInterval(timeIt, 1000);
    document.getElementById("jumbotronstart").style.display = "none";
    highscorelistEl.style.display = "none";
    audiocorrectEl.play();
});

// Main function to select questions from array
function main() {

    if (questions.length === 0) {

        document.getElementById("gameover").innerHTML = "Game Over! Your final score was: " + counter;
        document.getElementById("jumbotronfinish").style.display = "block";
        document.getElementById("jumbotronid").style.display = "none";
        clearInterval(timeint);
    }

    i = Math.floor(Math.random() * questions.length)
    quesEl.innerHTML = questions[i].title;
    q1El.innerHTML = questions[i].choices[0]
    q2El.innerHTML = questions[i].choices[1]
    q3El.innerHTML = questions[i].choices[2]
    q4El.innerHTML = questions[i].choices[3]
};

main();



//event listeners for answers/questions

q1El.addEventListener("click", function () {

    if (q1El.innerHTML === questions[i].answer) {
        questions.splice(i, 1);
        main();
        audiocorrectEl.play();


    } else {

        counter = counter - 15;
        audiowrongEl.play();


    }
});

q2El.addEventListener("click", function () {

    if (q2El.innerHTML === questions[i].answer) {
        questions.splice(i, 1);
        main();
        audiocorrectEl.play();
    } else {

        counter = counter - 15;
        audiowrongEl.play();
    }
});


q3El.addEventListener("click", function () {

    if (q3El.innerHTML === questions[i].answer) {
        questions.splice(i, 1);
        main();
        audiocorrectEl.play();


    } else {

        counter = counter - 15;
        audiowrongEl.play();
    }
});

q4El.addEventListener("click", function () {

    if (q4El.innerHTML === questions[i].answer) {
        questions.splice(i, 1);
        main();
        audiocorrectEl.play();

    } else {

        counter = counter - 15;
        audiowrongEl.play();
    }
});


// play again event listener

playagainEl.addEventListener("click", function () {
    window.location.reload();
    audiowrongEl.pause();

});

// highscores on first page 
highscoresEl.addEventListener("click", function () {
    highscorelistEl.style.display = "block";

    for (var i = 0; i < scorearr.length; i++) {


        var newscore = scorearr[i];
        var newli = document.createElement("li")
        newli.className = "list-group-item list-group-item-primary"
        var textnode = document.createTextNode(newscore);
        newli.appendChild(textnode);
        document.getElementById("highscorelist").appendChild(newli);
        storeScores()
        console.log(scorearr);
    }
}, { once: true });

//high scores on last page 
highscoresfinishEl.addEventListener("click", function () {

    highscorelistEl.style.display = "block";
    scorearr.push(counter);
    scorearr.sort(function (a, b) { return b - a });
    scorearr.length = 5;

    for (var i = 0; i < scorearr.length; i++) {

        var newscore = scorearr[i];
        var newli = document.createElement("li")
        newli.className = "list-group-item list-group-item-primary"
        var textnode = document.createTextNode(newscore);
        newli.appendChild(textnode);
        document.getElementById("highscorelist").appendChild(newli);
        storeScores()
        console.log(scorearr);
    }
}, { once: true });









