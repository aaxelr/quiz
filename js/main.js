//------KLASS för själva spelet.
class Quiz { //?
    constructor() {
        this.player;
        this.questions;
        this.playedQuestion = []; //array med id från respektive fråga, för att förhindra att samma fråga kommer igen, om spelaren vill spela igen.
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

        console.log(this.questions.questionArray[questionNr].multipleChoice);

        if (this.questions.questionArray[questionNr].multipleChoice === "true") {
            for (let answer in this.questions.questionArray[questionNr].answers) {

                let answerLiElement = document.createElement("li");
                answerLiElement.setAttribute("id", `li_${answer}`);
                answerLiElement.textContent = this.questions.questionArray[questionNr].answers[answer];

                let checkbox = document.createElement("input");
                checkbox.setAttribute("id", `answer_${answer}`);
                checkbox.setAttribute("type", "checkbox");

                answerLiElement.append(checkbox);

                answersUlElement.append(answerLiElement);
            }

        } else {
            for (let answer in this.questions.questionArray[questionNr].answers) {

                let answerLiElement = document.createElement("li");
                answerLiElement.setAttribute("id", `li_${answer}`);
                answerLiElement.textContent = this.questions.questionArray[questionNr].answers[answer];

                let radio = document.createElement("input");
                radio.setAttribute("id", `answer_${answer}`);
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

    getResult(playerScore) {
        playerScore = playerScore.reduce((acc, curr) => acc + curr, 0);
        return playerScore;
    }

    showResult(playerScore) {
        let resultP = document.createElement("p");
        resultP.innerText = `Total score: ${this.getResult(playerScore)}`;
        console.log("hårdkodat till 3");
        contentDiv.append(resultP);
        //tabell?
        //fråga | ditt svar | rätt svar
        //...
        //total
    }

    restartQuiz() {
     
        //get new set of questions
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

    //Instansiera Quiz
    let quiz = new Quiz();

    //------Eventlyssnare
    startBtn.addEventListener("click", () => {
        quiz.createPlayer(nameInput.value)
        quiz.setupQuestions(nrOfQuestionsInput.value)
        quiz.welcomePlayer(nameInput.value);
        quiz.round++;

        console.log(quiz.questions);
    });

    nextBtn.addEventListener("click", () => {
        quiz.removeContent();

        if (quiz.round === quiz.questions.questionArray.length) {
            quiz.showResult(quiz.player.score);
            console.log("GAME OVER");
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