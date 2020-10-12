//------KLASS för spelare
class Player {
    constructor(name = "stranger") {
        this.name = name;
        this.answers = [0]; //[0, "c", "f", "a", "e", "f"] //Player har svarat C på fråga 1, F på fråga 2, ...
        this.score = [0]; //[0, 1, 1, 0, 1, 0]; //fråga 0 = 0. fråga 1, 2, 4 är korrekta
    }
}

//Player.answers ska pushas med användarens svar.
//Player.score ska pushas med 1 om svaret är rätt och 0 om svaret är fel