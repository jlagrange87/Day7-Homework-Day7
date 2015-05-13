function* guessingGame() {
	var randomnumber=Math.floor(Math.random()*100);
	var guess = yield game.ask('Pick a number between 0 - 100');
	yield game.say('You chose ' + guess);
	yield game.say("Hmmmm, looks like...");
	

	while (parseInt(guess) !== randomnumber) {
		
		if (guess < randomnumber) {
			yield game.say ("Your number is too low, pick again loser!");
			guess = yield game.ask('Pick a number between 0 - 100... again.');
			yield game.say("Hmmmm, looks like...");
		}
		else if (guess > randomnumber) {
			yield game.say ("Your number is too high, quit being such a jerk!");
			guess = yield game.ask('Pick a number between 0 - 100... again.');
			yield game.say("Hmmmm, looks like...");
		}
		

	}
		yield game.say("YOU WIN! THE NUMBER WAS DEFINITELY " + randomnumber + "!");
		yield game.say("YOU'RE THE BEST AROUND, NOTHINS GONNA EVER KEEP YOU DOWN!");
		yield game.say("Seriously, thanks for playing!");
		yield game.say("Goodbye!");
}
