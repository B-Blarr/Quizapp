let currentQuestion = 0;

function init() {
   let refQuestionCard = document.getElementsByClassName("card")[0];
    
        refQuestionCard.innerHTML = questionRender();      
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
}

function answer(answer) {
   
        if (questions[currentQuestion].right_answer == answer) {
            document.getElementById(answer).classList.add('bg-success');
            
        }else
            document.getElementById(answer).classList.add('bg-danger');
            
  
}