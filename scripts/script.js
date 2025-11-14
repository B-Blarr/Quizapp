let currentQuestion = 0;

function init() {
   let refQuestionCard = document.getElementsByClassName("card")[0];
    
        refQuestionCard.innerHTML = questionRender();      
}

function questionRender() {
    return `
    <h5 class="card-title">${questions[currentQuestion].question}</h5>

          <div class="card mb-2">
            <div class="card-body">${questions[currentQuestion].answer_1}</div>
          </div>
          <div class="card mb-2">
            <div class="card-body">${questions[currentQuestion].answer_2}</div>
          </div>
          <div class="card mb-2">
            <div class="card-body">${questions[currentQuestion].answer_3}</div>
          </div>
          <div class="card mb-2">
            <div class="card-body">${questions[currentQuestion].answer_4}</div>
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