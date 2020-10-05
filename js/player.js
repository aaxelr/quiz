
//klass för spelare
class Player {
    constructor(name, email) {
        this.name = name;
        this.email = email;
        this.userAnswers = [];
        this.score = 0;
    }
}

//userAnswers ska pushas med användarens svar.
//kanske bör svaren bestå av objekt med frågeID och rätt svar?
//så användaren kan svara på frågorna i valfri ordning??
//typ [{id: 3292, correctAnswer: answer_a},{id: 14, correctAnswer: answer_c}]

//spara användarsvar med localStorage??? 