
class DiceContainer{
	constructor( diceRollCallback , dieContainer ){
		this.callback = diceRollCallback;
		this.diceCount = 6;
		this.maximumRolls = 3;
		this.dice = [];
		this.dieContainer = $(dieContainer);
		for( var i =0; i< this.diceCount; i++){
			this.createDie();
		}
	}
	createDie(){
		var die = new Die();
		this.dice.push( die );
		var diceDomElement = die.render();
		this.dieContainer.append( diceDomElement );
	}
}