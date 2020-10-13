//------KLASS för själva spelet.
class Quiz { //?
    constructor() {
        this.player;
        this.questions;
        this.round = 0;
    }

    createPlayer(name) {
        this.player = new Player(name);
    }

    welcomePlayer() {
        welcome.innerText = `Welcome, ${this.player.name}!`;
    }

    setupQuestions(numberOfQuestions) {
        this.questions = new Questions();
        this.questions.getQuestions(numberOfQuestions);
        return this.questions;
    }

    removeContent() {
        contentDiv.innerHTML = "";
    }

    createQuestionElement(questionNr) {
        let questionPElement = document.createElement("p");
        questionPElement.textContent = this.questions.questionArray[questionNr].question;

        let answersUlElement = document.createElement("ul");

        for (let answer in this.questions.questionArray[questionNr].answers) {
            let answerLiElement = document.createElement("li");
            answerLiElement.setAttribute("id", `li_${answer}`);
            answerLiElement.textContent = this.questions.questionArray[questionNr].answers[answer];

            if (this.questions.questionArray[questionNr].multipleChoice === "true") {
                let checkbox = document.createElement("input");
                checkbox.setAttribute("id", answer);
                checkbox.setAttribute("class", "checkboxAnswer");
                checkbox.setAttribute("type", "checkbox");

                answerLiElement.append(checkbox);

                answersUlElement.append(answerLiElement);
            } else {
                let radio = document.createElement("input");
                radio.setAttribute("id", answer);
                radio.setAttribute("name", "answer");
                radio.setAttribute("type", "radio");

                answerLiElement.append(radio);

                answersUlElement.append(answerLiElement);
            }
        }

        questionPElement.append(answersUlElement);
        return questionPElement;
    }

    showQuestion(questionNr = 1) {
        contentDiv.append(this.createQuestionElement(questionNr));
    }

    //skapar array med det/de rätta svaren.
    //if tar hand om checkbox-fallen, else om radio-fallen.
    getUserAnswer(questionNr) {
        if (this.questions.questionArray[questionNr].multipleChoice === "true") {
            let checkboxes = Array.from(document.querySelectorAll('input[class="checkboxAnswer"]:checked'))
                .filter(function (checkbox) {
                    return checkbox.checked;
                })
                .map(function (checkbox) {
                    return checkbox.id;
                });
            this.player.answers.push(checkboxes);
        } else {
            this.player.answers.push(Array.of(document.querySelector('input[name="answer"]:checked').id));
        }
    }

    checkAnswer() {
        for (let i = 1; i < this.questions.questionArray.length; i++) {
            if (this.player.answers[i].toString() === this.questions.correctAnswersArray[i].toString()) {
                this.player.score.push(1);
                console.log(`från if ${this.player.answers[i]}`);
            } else {
                this.player.score.push(0);
                console.log(`från else ${this.player.answers[i]}`);
            }
        }
    }

    getResult(playerScore) {
        playerScore = playerScore.reduce((acc, curr) => acc + curr, 0);
        return playerScore;
    }

    showResult(playerScore) {
        let resultP = document.createElement("h2");
        resultP.innerText = `Total score: ${this.getResult(playerScore)}`;
        contentDiv.append(resultP);

        let restartBtn = document.createElement("button");
        restartBtn.setAttribute("type", "button");
        restartBtn.innerText = "Play Again!";
        restartBtn.addEventListener("click", () => {
            this.restartQuiz();
        })

        contentDiv.append(restartBtn);
    }

    restartQuiz() {
        localStorage.setItem('name', this.player.name)
        location.reload(); //fullösning
        
        this.player.name = localStorage.getItem('name');
        this.welcomePlayer();
        welcome.innerText = `Welcome back, ${this.player.name}`;
    }
}

//------DOMContentLoaded
document.addEventListener("DOMContentLoaded", () => {

    //------HTML-element
    let startBtn = document.getElementById("startBtn");
    let welcome = document.getElementById("welcome");
    let nrOfQuestionsInput = document.getElementById("nrOfQuestionsInput");
    let nameInput = document.getElementById("nameInput");
    let contentDiv = document.getElementById("contentDiv");

    let nextBtn = document.getElementById("nextBtn");

    //Instansierar Quiz
    let quiz = new Quiz();

    //------Eventlyssnare

    startBtn.addEventListener("click", () => {
        quiz.createPlayer(nameInput.value);
        quiz.setupQuestions(nrOfQuestionsInput.value);
        quiz.welcomePlayer(nameInput.value);
        quiz.round++;
        console.log(quiz);
        startBtn.disabled = true;
        nextBtn.disabled = false;
    });

    nextBtn.addEventListener("click", () => {
        if (quiz.round == 1) {
            nextBtn.innerText = "Next";
        }

        if (quiz.round > 1) {
            quiz.getUserAnswer(quiz.round - 1);
        }

        quiz.removeContent();

        if (quiz.round === quiz.questions.questionArray.length) {
            quiz.checkAnswer();
            quiz.showResult(quiz.player.score);
            console.log("GAME OVER");
            console.log(quiz);
            nextBtn.innerText = "Game Over";
            nextBtn.disabled = true;
        } else if (quiz.round === quiz.questions.questionArray.length - 1) {
            quiz.showQuestion(quiz.round);
            quiz.round++;
            nextBtn.innerText = "End Quiz";
        } else {
            quiz.showQuestion(quiz.round);
            quiz.round++;
        }
    });
});