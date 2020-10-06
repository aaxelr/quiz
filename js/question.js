/* ~~~~KLASSER~~~~ */

//async function möjliggör senare await funktion 

//klass för enskild fråga.
class Question {
  constructor() { //vad ska constuctor:n ta för parameter?
    this.quizId = 1; //++ för nytt eget id ??
    this.questionId = frågeID; //för att förhindra samma fråga flera ggr
    this.question;
    this.answers; //objekt med svarsalternativ
    this.correctAnswers; //det/de egenskaperna med booleanska värdena true.
  }
}

//klass för samling av quizfrågor 5-10.
//kanske flytta metoden getQuestions till class Questions???
class Questions {
  constructor(questionArray) {
    this.questionArray = [];
  }

  //metod som hämtar 10 frågor (ändra limit=10 för annat antal? kanske spara hela arrayen och hämta frågor en i taget.)
  //alt. lägg in en variable (let nrOfQuestions = 'limit=(userinput)')
  getQuestions() { //fetch().then().then().catch();
    fetch('https://quizapi.io/api/v1/questions?apiKey=dZrVAc1e2qq2imLf6b1UtP5578YvhW84BKvYbgTE&category=code&limit=10')
      .then(response => response.json())
      .then(data => {
        this.question = data.question;
        this.answers = data.answers;
        this.correctAnswers = data.correct_answers;
      });
  }
}

//klass innehållandes array med rätt svar och HTMLCollection med användares svar.

class Correct {
  constructor() {
    this.arrayWithCorrectAnswers; //borde hämtas från class Questions?
    this.HTMLColWithUserAnswers; //kommer från användarens input.
  }

  //metod som ska jämföra användarens svar med facit
  //lägg ev i question-klassen
  checkAnswers(users, correct) {
    //loopa igenom rätt svar med användares svar.
    //om facit[0] === användarSvar[0] får användaren poäng.

  }
}

/* ---------------------------------------------------------------- */
let q1 = new Question();

q1.getQuestions();