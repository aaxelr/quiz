//------KLASSER

//------för enskild fråga.
class Question {
    constructor(id, question, mutlipleChoice, answers, correctAnswers) {
        this.questionId = id; //skulle kunna användas av metod av klassen Quiz i main.js för att se till att spelaren inte får samma frågor om hen vill spela igen.
        this.question = question;
        this.multipleChoice = mutlipleChoice; //true eller false, används för att bestämma om frågorna ska skapas med checkbox eller radio-knapp.
        this.answers = answers;
        this.correctAnswers = correctAnswers;
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
                } else {
                    console.log(trueAnswer);
                    trueAnswer = trueAnswer.slice(0,8); //slice:ar på rätt ställe, men när jag hämtar senar
                    //question.correct_answers.trueAnswer.slice(0,8); //ger undefined
                    //question.correct_answers[trueAnswer].slice(0,8); //uncaught in promise
                    console.log(trueAnswer);
                }
            }

            //gör instanser av Question av varje fråge-objekt, som pushas till questionArray
            this.questionArray.push(new Question(question.id, question.question, question.multiple_correct_answers, question.answers, question.correct_answers));
            //gör om formatet på correctAnswersArray från objekt till array till sträng.
            this.correctAnswersArray.push(Object.keys(question.correct_answers)); //pushar en array med det/de rätta svaren till array, men vill kunna ändra namn mha string.slice()

        }
    }

    /* formatCorrectAnswers(arr) {
        for (let element of arr) {
            if (element !== 0) {
                for (let innerElement of element) {
                    innerElement = innerElement.slice(0, 8);
                    console.log(innerElement);
                }
                
            }
        }
    } */
}