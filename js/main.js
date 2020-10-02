//klass för själva spelet.
class Quiz { //?
    constructor() {
        this.noOfQuestions; //5-10
        //this.points;
    }


}

//check players name && email is unique to prevent multiple tries?

let enterName; //skapa html-element med namnformulär där namn ska skickas till Player-klassen?


document.addEventListener('DOMContentLoaded', () => {
    let startBtn = document.getElementById('startBtn');
    
    startBtn.addEventListener("click", () => {
        console.log("då kör vi igång");
        //vid tryck ska innehållet i content ändras.
        //nytt element mha createElement?
        //ändra innerHTML?

    });

});