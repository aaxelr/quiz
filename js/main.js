//------KLASS för själva spelet.
class Quiz { //?
    constructor() {
        this.player;
        this.questions;
        //this.playedQuestion = []; //array med id från respektive fråga, för att förhindra att samma fråga kommer igen, om spelaren vill spela igen.
        this.round = 0;
    }

    createPlayer(name) {
        this.player = new Player(name)
    }

    welcomePlayer() {
        welcome.innerText = `Welcome, ${this.player.name}!`;
    }

    setupQuestions(numberOfQuestions) {
        this.questions = new Questions()
        this.questions.getQuestions(numberOfQuestions);
        return this.questions;
    }

    removeContent() {
        contentDiv.innerHTML = "";
    }

    //lägg till eventlyssnare på varje
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

    getUserAnswer(questionNr) {
        console.log("getUserAnswer");

        if (this.questions.questionArray[questionNr].multipleChoice === "true") {
            let checkboxes = Array.from(document.querySelectorAll('input[class="checkboxAnswer"]:checked'))
                .filter(function (checkbox) {
                    return checkbox.checked
                })
                .map(function (checkbox) {
                    return checkbox.id;
                })
            this.player.answers.push(checkboxes);
        } else {
            this.player.answers.push(document.querySelector('input[name="answer"]:checked').id);
        }
    }

    checkAnswer() {
        //if (this.questions.correctAnswersArray this.player.answers)/////////////////<====FORTSÄTT HÄR
        this.player.score
        //if this.player.answer == this.questions.correctAnswerArray push 1
    }

    getResult(playerScore) {
        playerScore = playerScore.reduce((acc, curr) => acc + curr, 0);
        return playerScore;
    }

    showResult(playerScore) {
        let resultP = document.createElement("p");
        resultP.innerText = `Total score: ${this.getResult(playerScore)}`;
        console.log("hårdkodat till 3");
        contentDiv.append(resultP);
    }

    /* restartQuiz() {
        //get new set of questions
    } */
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

    //Instansiera Quiz
    let quiz = new Quiz();

    //------Eventlyssnare
    startBtn.addEventListener("click", () => {
        quiz.createPlayer(nameInput.value)
        quiz.setupQuestions(nrOfQuestionsInput.value)
        quiz.welcomePlayer(nameInput.value);
        quiz.round++;
        console.log(quiz.questions);
        startBtn.setAttribute("disabled", "disabled");
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
            quiz.showResult(quiz.player.score);
            console.log("GAME OVER");
            console.log(quiz);
        } else if (quiz.round === quiz.questions.questionArray.length - 1) {
            quiz.showQuestion(quiz.round);
            quiz.round++;
            nextBtn.innerText = "End Quiz"
        } else {
            quiz.showQuestion(quiz.round);
            quiz.round++;
        }
    });

});