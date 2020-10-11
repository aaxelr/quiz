//------KLASSER

//------för enskild fråga.
class Question {
  constructor(id, question, mutlipleChoice, answers, correctAnswers ) {
    this.questionId = id;
    this.question = question; //själva frågan
    this.multipleChoice = mutlipleChoice; //true eller false
    this.answers = answers; //objekt med svarsalternativ
    this.correctAnswers = correctAnswers; //det/de egenskaperna med booleanska värdena true. !!!FIXA i Questions.getQuestions
  }

  createQuestionElement() {

    //div som omsluter allt
    //p för fråga
    //ul med li för varje svarsalternativ

  }
}

//------ för samling av quizfrågor 5-10.
class Questions {
  constructor() {
    this.questionArray = [0];
    this.correctAnswersArray = [0]; //samlar de rätta svaren för alla frågor i quizet.
  }

  //metod som hämtar 5-10 (5 default) frågor
  async getQuestions(userNumberOfQuestions = 5) { //fetch().then().then().catch();
    await fetch(`https://quizapi.io/api/v1/questions?apiKey=dZrVAc1e2qq2imLf6b1UtP5578YvhW84BKvYbgTE&category=code&limit=${userNumberOfQuestions}`)
      .then(response => response.json())
      .then(data => {
        for (let question of data) {

          for (let answer in question.answers) {
            if (question.answers[answer] === null) {
              console.log(`removing ${answer}: ${question.answers[answer]}`);
              delete question.answers[answer];
            }
          }

          for (let trueAnswer in question.correct_answers) {
            if (question.correct_answers[trueAnswer] !== "true") {
              console.log(`removing ${trueAnswer}: ${question.correct_answers[trueAnswer]}`);
              delete question.correct_answers[trueAnswer];
            }
          }

          this.questionArray.push(new Question(question.id, question.question, question.multiple_correct_answers, question.answers, question.correct_answers));
        }
      });
  }



  /* ---------------------------------------------------------------- */

  //q1.getQuestions();

  //async function möjliggör senare await funktion VAR SKA DEN LIGGA? 
  //VAR lägga eventlyssnare?

  //lös så att hämtade svaret skapar en instans av Question för varje objekt i array
  //filtrera bort null-svar.
  /* const values = Object.values(user);
console.log(values); // ["John", 29]
 */
}

//------------------------------------