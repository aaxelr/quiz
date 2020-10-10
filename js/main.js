//klass för själva spelet.
//Hanterar användarinput
//input från inputfält
//knapptryck
class Quiz { //?
    constructor(playerNumberOfQuestions, name) {
        this.numberOfQuestions = playerNumberOfQuestions;
        this.player = new Player(name);
        this.questions = new Questions();
    }

    welcomePlayer(name) {
        welcome.innerText = `Welcome, ${this.player.name}`;

    }

    setupQuestions() {
        this.questions.getQuestions(this.numberOfQuestions);
    }

}


document.addEventListener('DOMContentLoaded', () => {
    let startBtn = document.getElementById('startBtn');
    let welcome = document.getElementById('welcome');
    let nrOfQuestionsInput = document.getElementById('nrOfQuestionsInput');
    let nameInput = document.getElementById('nameInput');

    startBtn.addEventListener('click', () => {
        let quiz = new Quiz(nrOfQuestionsInput.value, nameInput.value);
        console.log(quiz);
        quiz.welcomePlayer(nameInput.value);
        quiz.setupQuestions(quiz.numberOfQuestions);

    });

});