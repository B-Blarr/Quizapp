let currentQuestion = 0;
let correctAnswers = 0;
let AUDIO_SUCCESS = new Audio('.//assets/sounds/right_answer.wav');
let AUDIO_FAIL = new Audio('.//assets/sounds/wrong_answer.wav');
let quizModal;

function init() {
   let refQuestionCard = document.getElementsByClassName("card")[0];
    
        refQuestionCard.innerHTML = questionRender();
        document.getElementsByClassName("btn")[0].disabled = true;
        document.querySelectorAll(".quiz-answer").disabled = false; 
        showProgressBar();
    
}

function questionRender() {
    return `
    <h5 class="card-title">${questions[currentQuestion].question}</h5>

          <div class="card quiz-answer mb-2" onclick="answer(1)">
            <div id="1" class="card-body">${questions[currentQuestion].answer_1}</div>
          </div>
          <div class="card quiz-answer mb-2" onclick="answer(2)">
            <div id="2" class="card-body">${questions[currentQuestion].answer_2}</div>
          </div>
          <div class="card quiz-answer mb-2" onclick="answer(3)">
            <div id="3" class="card-body">${questions[currentQuestion].answer_3}</div>
          </div>
          <div class="card quiz-answer mb-2" onclick="answer(4)">
            <div id="4" class="card-body">${questions[currentQuestion].answer_4}</div>
          </div>
          <div class="question-footer">
            <span>
            <b>${currentQuestion + 1}</b> von <b>${questions.length}</b> Fragen
            </span>
            <button onclick="nextQuestion()" type="button" class="btn btn-secondary">Nächste Frage</button>
          </div>`
}

function nextQuestion() {
   currentQuestion++;
   if (currentQuestion >= questions.length) {
    openDialog();
    return;
}else
{
   init();
}
}

function answer(answer) {
        document.getElementsByClassName("btn")[0].disabled = false;
        document.querySelectorAll(".quiz-answer").disabled = true;
        if (questions[currentQuestion].right_answer == answer) {
            document.getElementById(answer).classList.add('bg-success');
            correctAnswers++;
            AUDIO_SUCCESS.play();

        }else
        {
            document.getElementById(answer).classList.add('bg-danger');
            document.getElementById(questions[currentQuestion].right_answer).classList.add('bg-success');
            AUDIO_FAIL.play();
        }
}



document.addEventListener('DOMContentLoaded', function () {
  const modalElement = document.getElementById('quiz-modal');
  quizModal = new bootstrap.Modal(modalElement); // Bootstrap-Objekt bauen
});

function openDialog() {
    quizModal.show();
    modalNumbers();
}

function modalNumbers() {
   let answersNumbers = document.getElementById("answers-numbers");
   answersNumbers.innerHTML = questions.length;
   let refCorrectAnswers = document.getElementById("correct-answers");
   refCorrectAnswers.innerHTML = correctAnswers;
}

function showProgressBar() {
 let refProgressBar = document.getElementById("progress-bar");
 let percent = ((currentQuestion +1) / questions.length) *100;
 refProgressBar.innerHTML = percent + "%";
 document.getElementById("progress").style.width = percent + "%";
}

function newBegin() {
  currentQuestion = 0;
  correctAnswers = 0;
  init();
}