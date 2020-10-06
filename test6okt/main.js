const jsonQuestions = [{
    "id": 641,
    "question": "What does PEAR stand for?",
    "description": null,
    "answers": {
      "answer_a": "PHP Export and Application Repository.",
      "answer_b": "PHP Extension and Application Repository.",
      "answer_c": "PHP External and Application Repository.",
      "answer_d": null,
      "answer_e": null,
      "answer_f": null
    },
    "multiple_correct_answers": "false",
    "correct_answers": {
      "answer_a_correct": "false",
      "answer_b_correct": "true",
      "answer_c_correct": "false",
      "answer_d_correct": "false",
      "answer_e_correct": "false",
      "answer_f_correct": "false"
    },
    "correct_answer": "answer_a",
    "explanation": null,
    "tip": null,
    "tags": [{
      "name": "PHP"
    }],
    "category": "Code",
    "difficulty": "Hard"
  },
  {
    "id": 632,
    "question": "How can PHP and Javascript interact?",
    "description": null,
    "answers": {
      "answer_a": "PHP and Javascript cannot directly interact since PHP is a server side language and Javascript is a client-side language.",
      "answer_b": "They  interact via the browser",
      "answer_c": "They interact through services such as Apache or Nginx",
      "answer_d": null,
      "answer_e": null,
      "answer_f": null
    },
    "multiple_correct_answers": "false",
    "correct_answers": {
      "answer_a_correct": "true",
      "answer_b_correct": "false",
      "answer_c_correct": "false",
      "answer_d_correct": "false",
      "answer_e_correct": "false",
      "answer_f_correct": "false"
    },
    "correct_answer": "answer_a",
    "explanation": null,
    "tip": null,
    "tags": [{
      "name": "PHP"
    }],
    "category": "Code",
    "difficulty": "Medium"
  },
  {
    "id": 512,
    "question": "Text within <EM> … </EM> tag is displayed as ________",
    "description": null,
    "answers": {
      "answer_a": "bold",
      "answer_b": "indented",
      "answer_c": "list",
      "answer_d": "italic",
      "answer_e": null,
      "answer_f": null
    },
    "multiple_correct_answers": "false",
    "correct_answers": {
      "answer_a_correct": "false",
      "answer_b_correct": "false",
      "answer_c_correct": "false",
      "answer_d_correct": "true",
      "answer_e_correct": "false",
      "answer_f_correct": "false"
    },
    "correct_answer": "answer_a",
    "explanation": null,
    "tip": null,
    "tags": [{
      "name": "HTML"
    }],
    "category": "Code",
    "difficulty": "Easy"
  },
  {
    "id": 522,
    "question": "Which attribute you’ll use with the TD tag to merge two cells horizontally?",
    "description": null,
    "answers": {
      "answer_a": "merge=colspan2",
      "answer_b": "merge=row2",
      "answer_c": "colspan=2",
      "answer_d": "rowspan=2",
      "answer_e": null,
      "answer_f": null
    },
    "multiple_correct_answers": "false",
    "correct_answers": {
      "answer_a_correct": "false",
      "answer_b_correct": "false",
      "answer_c_correct": "true",
      "answer_d_correct": "false",
      "answer_e_correct": "false",
      "answer_f_correct": "false"
    },
    "correct_answer": "answer_a",
    "explanation": null,
    "tip": null,
    "tags": [{
      "name": "HTML"
    }],
    "category": "Code",
    "difficulty": "Medium"
  },
  {
    "id": 507,
    "question": "Which is not a domain name extension",
    "description": null,
    "answers": {
      "answer_a": ".mil",
      "answer_b": ".com",
      "answer_c": ".int",
      "answer_d": ".org",
      "answer_e": null,
      "answer_f": null
    },
    "multiple_correct_answers": "false",
    "correct_answers": {
      "answer_a_correct": "true",
      "answer_b_correct": "false",
      "answer_c_correct": "false",
      "answer_d_correct": "false",
      "answer_e_correct": "false",
      "answer_f_correct": "false"
    },
    "correct_answer": "answer_a",
    "explanation": null,
    "tip": null,
    "tags": [{
      "name": "HTML"
    }],
    "category": "Code",
    "difficulty": "Medium"
  }
]

//---KLASSER---

class Game {
  constructor(nrOfQuestions = 5) {
    this.nrOfQuestions = nrOfQuestions;
    this.round = 1;
    this.startBtn = document.getElementById("startBtn");
    this.contentWrapper = document.getElementById("contentWrapper");

  }

  startGame() { //???

    this.startBtn.innerHTML = "Good luck :)";
    this.startBtn.setAttribute("disabled", "");

  }

  showNextQuestion() {

    if (this.round < this.nrOfQuestions) {

      console.log(this.round);
      console.log(this.nrOfQuestions);
      this.appendQuestionElement(); //appenda fråga
      this.round++;

    } else {

      console.log("game over");
      this.endGame();

    }
  }

  createElement() {

    let newDiv = document.createElement("div");
    newDiv.className = "questoinDiv";
    newDiv.innerHTML = "NY fRÅGA";
    return newDiv;

  }

  appendQuestionElement() {

    this.contentWrapper.append(this.createElement());

  }

  endGame() {
    console.log("GAME OVER!");

  }
}

class Player {
  constructor(name) {
    this.name = name;
    this.score = 0;
  }

  welcomePlayer(name) {
    console.log(`Welcome, ${name}!`);
  }
}

//---GET ELEMENT---
//let startBtn = document.getElementById("startBtn");
//let nextQuestionBtn = document.createElement("button", )




document.addEventListener("DOMContentLoaded", () => {

  //------EVENT LISTENERS------


  /* Startar spelet*/
  startBtn.addEventListener("click", () => {

    let nrOfQuestionsInput = document.getElementById("nrOfQuestionsInput").value;
    let nameInput = document.getElementById("nameInput").value;

    let newGame = new Game(nrOfQuestionsInput);
    let newPlayer = new Player(nameInput);

    newGame.startGame();
    newGame.showNextQuestion();
    newPlayer.welcomePlayer(newPlayer.name);

  });








});