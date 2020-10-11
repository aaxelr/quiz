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

    /* getNumberOfQuestions() {

        this.numberOfQuestions = playerNumberOfQuestions;
    } */

    setupQuestions(numberOfQuestions) {
        this.questions = new Questions()
        this.questions.getQuestions(numberOfQuestions);
    }

    welcomePlayer() {
        welcome.innerText = `Welcome, ${this.player.name}`;
    }

    removeContent() {
        contentDiv.innerHTML = "";
    }

    async createQuestionElement(questionNr = 1) {
        let questionElement = document.createElement("p");
        let answersElement = document.createElement("ul");
        let testArray = this.questions.questionArray;
        console.log(testArray); //loggar array med alla frågor
        console.log(testArray[0]); //visar 0
        console.log(testArray[1]); //undefined
        console.table(testArray);
        console.log(typeof testArray);
        //questionElement.innerHTML = testArray[1].question;
        return questionElement;
    }

    showQuestion() {
        contentDiv.append(this.createQuestionElement());
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

    //Instansiera Quiz

    let quiz = new Quiz();

    //------Eventlyssnare
    startBtn.addEventListener("click", () => {
        quiz.createPlayer(nameInput.value)
        quiz.setupQuestions(nrOfQuestionsInput.value)
        quiz.welcomePlayer(nameInput.value);
        quiz.round++;
        quiz.createQuestionElement(1);

        console.log(quiz);
        console.log(quiz.questions);

    });

});