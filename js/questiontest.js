//vilka klasser behöver jag?
//en övergripande class varifrån allt körs

class Questions {
	constructor() {
		this.setup(); //för att köra funktion vid instansiering av class
	}
	setup() {
		console.log("Setting up...");
	}

}


class SingleQuestion {
	constructor() {

	}

}

class Player {

}

//testfråga

let quizzz = JSON.stringify([{
	qid: 23,
	q: "vad blablabla, osv?",
	a: "si och så, etc.",
	b: "onödig info"
}, {
	qid: 12,
	q: "nu då?",
	a: "jodå",
	b: "överflödig fakta"
}]);

console.log(quizzz);