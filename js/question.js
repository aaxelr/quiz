/* ~~~~KLASSER~~~~ */

//klass för enskild fråga.
class Question {
  constructor() {
    this.question;
    this.answers; 
    this.correctAnswers;
  }

  //metod som hämtar 10 frågor (ändra limit=10 för annat antal? kanske spara hela arrayen och hämta frågor en i taget.)
  //alt. lägg in en variable (let nrOfQuestions = 'limit=(userinput)')
  getQuestions() { //fetch().then().then().catch();
    fetch('https://quizapi.io/api/v1/questions?apiKey=dZrVAc1e2qq2imLf6b1UtP5578YvhW84BKvYbgTE&category=code&limit=10')
      .then(response => response.json())
      .then(data => {
        this.question = data[i].question;
        this.answers = data[i].answers;
        this.correctAnswers = data[i].correct_answers;
      });
  }


}

//klass för samling av quizfrågor 5-10. överflödig?
//kanske flytta metoden getQuestions till class Questions
class Questions {
  constructor(noOfQuestions) {


  }
}

//klass innehållandes array med rätt svar och HTMLCollection med användares svar.
class Correct {
  constructor() {
    this.arrayWithCorrectAnswers;
    this.HTMLColWithUserAnswers;
  }

  //metod som ska jämföra användarens svar med facit
  checkAnswers(users, correct) {

  }
}

/* ---------------------------------------------------------------- */
let q1 = new Question();

q1.getQuestions();


