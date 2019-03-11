$(document).ready( initializeGame );

var game = null;
function initializeGame(){
	var areaData = {
		'tokyoLocation' : '#tokyo',
		'tokyoBayLocation': '#tokyoBay',
		'diceDomElements': {
			'main': '.diceContainer',
			'diceArea': '.diceHolder'

		}
		'monsterArea': '.monsterContainer',

	}
	game = new KingOfTokyoGame(areaData, monsterData);
}