function* guessingGame() {
	do {
	var randomnumber=Math.floor(Math.random()*100);
	console.log(randomnumber);
	var guess = yield game.ask('Pick a number between 0 - 100');
	yield game.say('You chose ' + guess + "!");
	yield game.say("Hmmmm, looks like...");
	

	while (parseInt(guess) !== randomnumber) {
		
		if (guess < randomnumber) {
			yield game.say ("Your number is too low, pick again!");
			guess = yield game.ask('Pick a number between 0 - 100... again.');
			yield game.say("Hmmmm, looks like...");
		}
		else if (guess > randomnumber) {
			yield game.say ("Your number is too high, try again champ!");
			guess = yield game.ask('Pick a number between 0 - 100... again.');
			yield game.say("Hmmmm, looks like...");
		}
		

	}

		var cont = yield game.choose (randomnumber + " is correct! Would you like to keep playing?", "Yes", "No");
	} while (cont == "Yes");
	yield game.say ("Ok, thanks for playing!");
}
