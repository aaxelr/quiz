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
                }
            }

            //slice:ar bort "_correct" från de rätta svaren så elementen ska få samma utseende som de i player.answers.
            let corrAnswer = Object.keys(question.correct_answers).map(answer => answer.slice(0, 8));

            //gör instanser av Question av varje fråge-objekt, som pushas till questionArray
            this.questionArray.push(new Question(question.id, question.question, question.multiple_correct_answers, question.answers, question.correct_answers));
            
            //gör om formatet på correctAnswersArray från objekt till array till sträng.
            this.correctAnswersArray.push(corrAnswer); //pushar en array med det/de rätta svaren till array.

        }
    }
}