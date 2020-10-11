//------KLASSER

//------för enskild fråga.
class Question {
    constructor(id, question, mutlipleChoice, answers, correctAnswers) {
        this.questionId = id;
        this.question = question; //själva frågan
        this.multipleChoice = mutlipleChoice; //true eller false
        this.answers = answers; //objekt med svarsalternativ
        this.correctAnswers = correctAnswers; //det/de egenskaperna med booleanska värdena true.
    }
}

//------ för samling av quizfrågor 5-10.
class Questions {
    constructor() {
        this.questionArray = [0];
        this.correctAnswersArray = [0]; //samlar de rätta svaren för alla frågor i quizet.
    }

    //metod som hämtar 5-10 (5 default) frågor
    async getQuestions(userNumberOfQuestions = 5) {
        let response = await fetch(`https://quizapi.io/api/v1/questions?apiKey=dZrVAc1e2qq2imLf6b1UtP5578YvhW84BKvYbgTE&category=code&limit=${userNumberOfQuestions}`);
        let data = await response.json();
        for (let question of data) {

            //Tar bort svar med värdet null.
            for (let answer in question.answers) {
                if (question.answers[answer] === null) {
                    delete question.answers[answer];
                }
            }

            //tar bort alla correct_answer med värdet false
            for (let trueAnswer in question.correct_answers) {
                if (question.correct_answers[trueAnswer] !== "true") {
                    delete question.correct_answers[trueAnswer];
                }
            }

            //gör instanser av Question av varje fråge-objekt, som pushas till questionArray
            this.questionArray.push(new Question(question.id, question.question, question.multiple_correct_answers, question.answers, question.correct_answers));
            this.correctAnswersArray.push(question.correct_answers);
            //this.correctAnswersArray.push(Object.keys(question.correct_answers));
        }
    };
}