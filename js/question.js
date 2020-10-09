/* ~~~~KLASSER~~~~ */

//async function möjliggör senare await funktion VAR SKA DEN LIGGA? 
//VAR lägga eventlyssnare?

//------------------------------------
//klass för enskild fråga.
class Question {
  constructor(id, question, answers, correctAnswers) { //vad ska constuctor:n ta för parameter?
    this.questionId = id; //för att förhindra samma fråga flera ggr
    this.question = question;
    this.answers = answers; //objekt med svarsalternativ
    this.correctAnswers = correctAnswers; //det/de egenskaperna med booleanska värdena true.
  }

  createQuestionElement() {

    //div som omsluter allt
    //p för fråga
    //ul med li för varje svarsalternativ

  }
}

//klass för samling av quizfrågor 5-10.
class Questions {
  constructor() {
    this.questionArray = [];
  }

  //metod som hämtar 5-10 (5 default) frågor
  getQuestions(userNumberOfQuestions = 5) { //fetch().then().then().catch();
    fetch(`'https://quizapi.io/api/v1/questions?apiKey=dZrVAc1e2qq2imLf6b1UtP5578YvhW84BKvYbgTE&category=code&limit='${userNumberOfQuestions}`)
      .then(response => response.json())
      .then(data => { 
        //lös så att hämtade svaret skapar en instans av Question för varje objekt i array
        //filtrera bort null-svar.
        console.log(data);
      });
  }
}

/* ---------------------------------------------------------------- */
let q1 = new Questions();

q1.getQuestions();