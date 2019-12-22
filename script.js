// create variables to reference all DOM elements we're working with
  const startScreen = document.querySelector("start-screen");
  const startButton = document.querySelector("start-game-btn");
  var quizContent = document.querySelector("quiz-content");
  var postGame = document.querySelector("post-game-screen");
  var userScore = document.querySelector("user-score");
  var playAgain = document.querySelector("play-again-btn");
  var questionIndex= document.querySelector("data-question-index");
var questions
 var timerId 

 function startbtnhandler (){
   clearInterval(timerId);
 };



// create variables for game logic
  var timerIntervalId
  var score
  var secondsLeft

  // (Look back at turoring session for this)
  function renderGame();


// create function to start game
startButton.addEventListener("click") 
  secondsLeft = setInterval(timerId, 30000)
  // set secondsLeft variable starting time (300 seconds = 5 minutes)
  // write secondsLeft to the page

  // reset score to 0
 
  function startGame() {
    startScreen.classList.remove("hide");
    postGame.classList.remove("hide");
    quizContent.classList.add("hide");

  // hide start-screen element && post-game-screen
  // show quiz-content element

  // display first question
  displayQuestion(0);

  // set timerIntervalId to setInterval function that decrements secondsLeft every second
  timerIntervalId = setInterval(function() {
    secondsLeft--;
    if (secondsLeft <= 0) {
      stopGame();
    }
  }, 1000);

// create function to display a question and possible choices
function displayQuestion(questionIndex) {
  
  // check if questionIndex in questions array doesn't exist
  if (!questions[questionIndex]) {
    // stop game, we've hit last question
    return stopGame();
  };
  
  // print question to the page
  questionIndex.textContent.append("body");
  // use data attribute to know which index the question is
 questions.getAttribute("data-question-index");
  // loop through choices and print out choices to the page (make them buttons)
  for (var i = 0; i < questions.length; i ++); {
  button = questions.textContent("button");
  }

};

// create function to handle users answering
function userAnswerHandle (){
// use event delegation to make sure button was clicked
button.addEventListener("click", function(event) {
  event.preventDefault();
  if (!choices === answer){
    return (userScore = secondsLeft - 100);
  }
  else {
    userScore = secondsLeft ++; 
  };
  
  // get index of next question (this question's index + 1)
nextQuestionIndex = questionIndex +1;
  // run displayQuestion(nextQuestionIndex)

displayQuestion(nextQuestionIndex)
};


  

// create a function to stop the game (either by answering all the questions or time has run out)
function endGame (){
  var timerInterval = setInterval(function() {
    secondsLeft--;

    if(secondsLeft === 0) {
      clearInterval(timerInterval);
      quizContent.classList.remove("hide");
      postGame.classList.add("hide");


}
  // clearInterval() to stop the timer
  // hide quiz-content element
  // show post-game-screen
  // print out user score

renderGame();

// add event listeners
  // start game button (for starting the game)
  startButton.addEventListener("click", function);
  // quizcontent (for answering a question) -> use event delegation
  quizContent.addEventListener.event.target.
  // play again button (for starting the game);
playAgain.addEventListener("click", function);