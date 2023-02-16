const quizData = [
  {
    question: "In what year was Formula 1 founded?",
    a: "1923",
    b: "1935",
    c: "1950",
    d: "1960",
    correct: "c",
  },
  {
    question: "Who has the most wins in Formula 1",
    a: "Michael Schumacher",
    b: "Lewis Hamilton",
    c: "Sebastian Vettel",
    d: "Alain Prost",
    correct: "b",
  },
  {
    question: "Who has the most Grand Prix Entries",
    a: "Fernado Alonso",
    b: "Kimi Raikkonen",
    c: "Rubens Barrichello",
    d: "Lewis Hamilton",
    correct: "a",
  },
  {
    question: "Which constructor has the most World Championships",
    a: "McLaren",
    b: "Williams",
    c: "Ferrari",
    d: "Mercedes",
    correct: "c",
  },
  {
    question: "What driver has spent the most time in Formula 1",
    a: "Riccardo Patrese",
    b: "Jenson Button",
    c: "Graham Hill",
    d: "Rubens Barrichello",
    correct: "d",
  },
];
const answerEls = document.querySelectorAll(".answer");
const questionEl = document.getElementById("question");
const a_text = document.getElementById("a-text");
const b_text = document.getElementById("b-text");
const c_text = document.getElementById("c-text");
const d_text = document.getElementById("d-text");
const submitBtn = document.getElementById("submit");
let currentQuiz = 0;
let score = 0;

loadQuiz();

function loadQuiz() {
  deselectAnswers();
  const currentQuizData = quizData[currentQuiz];
  questionEl.innerText = currentQuizData.question;
  a_text.innerText = currentQuizData.a;
  b_text.innerText = currentQuizData.b;
  c_text.innerText = currentQuizData.c;
  d_text.innerText = currentQuizData.d;
}

function getSelected() {
  let answer = undefined;
  answerEls.forEach((answerEl) => {
    if (answerEl.checked) {
      answer = answerEl.id;
    }
  });
  return answer;
}

// unchecks answers on next question
function deselectAnswers() {
  answerEls.forEach((answerEl) => {
    answerEl.checked = false;
  });
}

submitBtn.addEventListener("click", () => {
  // check the answer
  const answer = getSelected();
  if (answer) {
    if (answer === quizData[currentQuiz].correct) {
      score++;
    }
    currentQuiz++;
    if (currentQuiz < quizData.length) {
      loadQuiz();
    }
  }
});
