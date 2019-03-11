
class DiceContainer{
	constructor( diceRollCallback , diceDomAreas ){
		this.callback = diceRollCallback;
		this.diceCount = 6;
		this.maximumRolls = 3;
		this.currentlyRemainingRolls = this.maximumRolls;
		this.dice = [];
		this.selectedDice = [];
		this.domElements = diceDomAreas;
		this.handleDieClick = this.handleDieClick.bind( this );
		this.rollAllSelectedDice = this.rollAllSelectedDice.bind( this );
		for( var i =0; i< this.diceCount; i++){
			this.createDie();
		}
		this.attachEventHandlers();
	}
	attachEventHandlers(){
		this.domElements.rollButton.click( this.rollAllSelectedDice );
	}
	createDie(){
		var die = new Die( this.handleDieClick );
		this.dice.push( die );
		var diceDomElement = die.render();
		this.domElements.diceArea.append( diceDomElement );
	}
	resetDiceRoll(){
		this.currentlyRemainingRolls = this.maximumRolls;
	}
	rollAllSelectedDice(){
		if(this.currentlyRemainingRolls === this.maximumRolls){
			this.selectedDice = this.dice.slice();
			this.dice.forEach( die => die.select() );
		} 
		if( this.currentlyRemainingRolls===0){

			console.warn('current player cannot roll any more');
			return false;
		}
		this.currentlyRemainingRolls -= 1;
		for( var dieIndex = 0; dieIndex < this.selectedDice.length; dieIndex++){
			var currentDie = this.selectedDice[dieIndex];
			currentDie.roll();
		}
		if(this.currentlyRemainingRolls===0){
			var diceFaces = [];
			for( var diceIndex = 0; diceIndex < this.dice.length; diceIndex++){
				var currentDie = this.dice[ diceIndex ];
				var currentFace = currentDie.getCurrentDieFace();
				diceFaces.push( currentFace );
				currentDie.unselect();
			}
			this.selectedDice = [];
			this.callback( diceFaces );
		}

	}
	handleDieClick( die ){
		var diePosition = this.selectedDice.indexOf(die)
		if(  diePosition === -1){
			die.select();
			this.selectedDice.push(die);
		} else {
			this.selectedDice.splice( diePosition, 1);
			die.unselect();
		}
	}
}



