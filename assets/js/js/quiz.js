const startButton = document.getElementById('start-btn');
const optionsContainer = document.getElementById('options-container');
const option0Button = document.getElementById('option-0');
option0Button.addEventListener('click', () => { checkAnswer(0); });
const option1Button = document.getElementById('option-1');
option1Button.addEventListener('click', () => { checkAnswer(1); });
const option2Button = document.getElementById('option-2');
option2Button.addEventListener('click', () => { checkAnswer(2); });
const option3Button = document.getElementById('option-3');
option3Button.addEventListener('click', () => { checkAnswer(3); });
const playAgainButton = document.getElementById('play-again-btn');


startButton.addEventListener('click', () => {
  console.log('Test start button.');
  startButton.style.display = 'none';
  optionsContainer.style.display = 'block';
  nextQuestion();
});

let questionCounter = 0;
let score = 0;

function incrementScore(points) {
  score += points;
  document.getElementById('score-counter').innerText = `Current Score: ${score}/5`;
}

function nextQuestion() {

  if (questionCounter >= 5) {
    console.log('Quiz over');
    document.getElementById('quiz-question').innerText = 'Quiz over! Your final score is ' + score + '/5';
    document.getElementById('options-container').style.display = 'none';
    document.getElementById('play-again-btn').style.display = 'block';
    return;
  }

   document.getElementById('question-counter').innerText = `Question Number: ${questionCounter + 1}/5`;

  const currentQuestion = quizQuestions[questionCounter];
  document.getElementById('quiz-question').innerText = currentQuestion.question;
  document.getElementById('option-0').innerText = currentQuestion.options[0];
  document.getElementById('option-1').innerText = currentQuestion.options[1];
  document.getElementById('option-2').innerText = currentQuestion.options[2];
  document.getElementById('option-3').innerText = currentQuestion.options[3];
}

function checkAnswer(selectedOption) {
  const correctAnswer = quizQuestions[questionCounter].answer;
  if (selectedOption === correctAnswer) {
    incrementScore(1);
    console.log('Correct answer.');
  } else {
    console.log('Wrong answer.');
  }
  questionCounter++;
  nextQuestion();
}

function endGame() {
  document.getElementById('quiz-question').innerText = `Quiz Over! Your final score is ${score}/5`;
  optionsContainer.style.display = 'none';
  playAgainButton.style.display = 'block';
}

playAgainButton.addEventListener('click', () => {
  playAgainButton.style.display = 'none';
  optionsContainer.style.display = 'block';
  questionCounter = 0;
  score = 0;
  nextQuestion();
});

const quizQuestions = [
  {
    answer: 0,
    options: [
      "Tony Scott", "Ridley Scott", "Steven Spielberg", "James Cameron"
    ],
    question: "Who directed the original Top Gun film?"
  },
  {
    answer: 2,
    options: ["Iceman", "Ghost", "Maverick", "Viper"],
    question: "What was Tom Cruise's character's call sign in Top Gun?"
  },
  {
    answer: 0,
    options: ["Kelly McGillis", "Meg Ryan", "Nicole Kidman", "Julia Roberts"],
    question: "Who played the role of Charlie in Top Gun?"
  },
  {
    answer: 3,
    options: ["Sky High", "Fighter School", "Navy Pilot Academy", "TOPGUN"],
    question: "What is the name of the flight school in Top Gun?"
  },
  {
    answer: 2,
    options: ["F-16 Falcon", "F-22 Raptor", "F-14 Tomcat", "F-15 Eagle"],
    question: "What type of aircraft does Maverick primarily fly in Top Gun?"
  },
  {
    answer: 1,
    options: ["Val Kilmer", "Anthony Edwards", "Michael Ironside", "Tom Skerritt"],
    question: "Who played the role of Goose in Top Gun?"
  },
  {
    answer: 1,
    options: ["Shot down", "Ejector seat accident", "Engine failure", "Explosion on the ground"],
    question: "How does Goose die in Top Gun?"
  },
  {
    answer: 1,
    options: ["Eye of the Tiger", "Take My Breath Away", "Stairway to Heaven", "We Will Rock You"],
    question: "What famous song is associated with Top Gun?"
  },
  {
    answer: 1,
    options: ["Tony Scott", "Joseph Kosinski", "James Cameron", "Christopher Nolan"],
    question: "Who is directing Top Gun: Maverick?"
  },
  {
    answer: 2,
    options: ["10 years", "20 years", "30 years", "40 years"],
    question: "How many years after the original does Top Gun: Maverick take place?"
  },
  {
    answer: 0,
    options: ["Goose's son", "A new instructor", "An antagonist pilot", "Maverick's son"],
    question: "What role does Miles Teller play in Top Gun: Maverick?"
  },
  {
    answer: 0,
    options: ["Hans Zimmer", "John Williams", "Alan Silvestri", "Danny Elfman"],
    question: "Who composed the score for Top Gun: Maverick?"
  },
  {
    answer: 0,
    options: ["Yes", "No"],
    question: "Is the F-14 Tomcat featured in Top Gun: Maverick?"
  },
  {
    answer: 1,
    options: ["Maverick only", "Maverick and Iceman", "Maverick, Iceman, and Viper", "Maverick and Charlie"],
    question: "Which original characters return in Top Gun: Maverick?"
  },
  {
    answer: 3,
    options: ["F-35 Lightning II", "F-22 Raptor", "F-18 Super Hornet", "All of the above"],
    question: "What new aircraft are introduced in Top Gun: Maverick?"
  },
  {
    answer: 1,
    options: ["Tom Hanks", "Tom Cruise", "Brad Pitt", "Johnny Depp"],
    question: "Who plays the character Maverick in Top Gun?"
  },
  {
    answer: 0,
    options: ["San Diego", "Los Angeles", "Seattle", "San Francisco"],
    question: "What city hosts the majority of the Top Gun flight training?"
  },
  {
    answer: 0,
    options: ["Drone warfare", "International conflict", "Retirement of Maverick", "Reunion of old pilots"],
    question: "What is the main premise of Top Gun: Maverick?"
  },
  {
    answer: 3,
    options: ["An old rival", "A new recruit", "A government official", "Unknown"],
    question: "Who is the main antagonist in Top Gun: Maverick?"
  }
];
