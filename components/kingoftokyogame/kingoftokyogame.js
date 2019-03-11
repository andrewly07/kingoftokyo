
class KingOfTokyoGame{
	constructor( areaData, monsterData ){
		this.areas = {
			tokyoLocations: {
				tokyo: $(areaData.tokyoLocation),
				bay: $(areaData.tokyoBayLocation)
			},
			diceDomAreas: {
				main: $(areaData.diceDomElements.main),
				diceArea: $(areaData.diceDomElements.diceArea),
			},
			monsterContainer: $(areaData.monsterArea)
		}
		this.allMonsters = [];
		this.handleDiceRoll = this.handleDiceRoll.bind( this );
		this.diceController = new DiceContainer( this.handleDiceRoll, this.areas.diceDomAreas.diceArea );
		this.createAllMonsters( monsterData );

	}
	handleDiceRoll( diceResult ){
		console.log(diceResult);
	}
	createAllMonsters( monsterData ){
		for( var monsterIndex = 0; monsterIndex < monsterData.length; monsterIndex++){
			var currentMonsterData = monsterData[monsterIndex];
			this.createMonster( currentMonsterData );
		}
	}
	createMonster( data ){
		var monster = new Monster( data );
		this.allMonsters.push( monster );
		var monsterDom = monster.render();
		this.areas.monsterContainer.append( monsterDom );
	}

}
