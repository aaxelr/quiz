//------KLASS för själva spelet.
//Hanterar användarinput
//input från inputfält
//knapptryck
class Quiz { //?
    constructor(playerNumberOfQuestions, name) {
        this.numberOfQuestions = playerNumberOfQuestions;
        this.player = new Player(name);
        this.questions = new Questions();
        this.playedQuestion = []; //array med id från respektive fråga, för att förhindra att samma fråga kommer igen, om spelaren vill spela igen.
    }

    welcomePlayer(name) {
        welcome.innerText = `Welcome, ${this.player.name}`;
    }

    setupQuestions() {
        this.questions.getQuestions(this.numberOfQuestions);
    }
    

}

//------DOMContentLoaded
document.addEventListener('DOMContentLoaded', () => {
    
    //------HTML-element
    let startBtn = document.getElementById('startBtn');
    let welcome = document.getElementById('welcome');
    let nrOfQuestionsInput = document.getElementById('nrOfQuestionsInput');
    let nameInput = document.getElementById('nameInput');

    //------Eventlyssnare
    startBtn.addEventListener('click', () => {
        let quiz = new Quiz(nrOfQuestionsInput.value, nameInput.value);
        quiz.welcomePlayer(nameInput.value);
        quiz.setupQuestions(quiz.numberOfQuestions);
        console.log(quiz);
    });

});