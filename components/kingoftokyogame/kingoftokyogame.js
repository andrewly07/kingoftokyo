
class KingOfTokyoGame{
	constructor( areaData, monsterData ){
		this.areas = {
			tokyoLocations: {
				tokyo: $(areaData.tokyoLocation),
				bay: $(areaData.tokyoBayLocation)
			}
			diceDomAreas: {
				main: $(areaData.diceDomElements.main),
				diceArea: $(areaData.diceDomElements.diceArea),
			}
			monsterContainer: $(areaData.monsterArea)
		}
		this.allMonsters = [];
	}
	createMonster( data ){
		var monster = new Monster( data );
		this.allMonsters.push( monster );
	}
}

var monsterData = [
	{
		'name': 'Space Penguin',
		'images': {
			large: 'images/spacepenguin2.jpg',
			small: 'images/spacepenguin.jpg'
		}
	},
	{
		'name': 'Giga Zaur',
		'images': {
			large: 'images/gigazaurlarge.jpg',
			small: 'images/gigazaursmall.jpg'
		}
	}
];

	