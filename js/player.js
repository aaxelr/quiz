//------KLASS för spelare

//Player.answers pushas med användarens svar.
//Player.score pushas med 1 om svaret är rätt och 0 om svaret är fel när Quiz.checkAnswer i main.js körs.
//[0] för att fråga 1 ska ha index 1.
class Player {
    constructor(name = "stranger") {
        this.name = name;
        this.answers = [0];
        this.score = [0];
    }
}