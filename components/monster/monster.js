
class Monster{
	constructor( data ){
/*
		'name': 'Space Penguin',
		'images': {
			large: 'images/spacepenguin2.jpg',
			small: 'images/spacepenguin.jpg'
		}
*/
		this.largeImage = data.images.large
		this.data = {
			'name': data.name,
			'avatar': data.images.small,
			'heart': 10,
			'victory': 0,
			'energy': 0
		}
		this.domElements = {
			container: null,
			avatar: null,
			name: null,
			cardContainer: null,
			stats: {
				heart: null,
				victory: null,
				energy: null
			}
		};
	}
	updateStat( stat, value ){
		var validStats = ['name','avatar','heart','victory','energy'];
		if(validStats.indexOf(stat)===-1){
			
			return;
		}
		var target = null;
		switch( stat ){
			case 'name':
				this.domElements.name.text(value);
				return;
			case 'avatar':
				this.domElements.avatar.css('background-image', `url(${value})`);
				return;
			case 'heart':
			case 'victory':
			case 'energy':
				this.domElements.stats[stat].text(value);
				break;
			default: 
				console.warn('cannot change stat '+stat);
				return;
		}
	}
	render(){
		var baseTemplate = $("#templates > .monsterCard").clone();
		this.domElements.container = baseTemplate;
		this.domElements.avatar = baseTemplate.find('.avatar');
		this.domElements.name = baseTemplate.find('.name');
		this.domElements.cardContainer = baseTemplate.find('.cardContainer');
		this.domElements.stats = {
			heart: baseTemplate.find('.heart > .statNumber'),
			victory: baseTemplate.find('.victory > .statNumber'),
			energy: baseTemplate.find('.energy > .statNumber'),
		}
		for( var key in this.data){
			this.updateStat(key, this.data[key]);
		}
		return this.domElements.container;
	}
}
/*
<div class="monsterCard">
		<div class="avatarContainer">
			<div class="avatar" style="background-image:url(images/spacepenguin.jpg)"></div>
		</div>
		<div class="infoContainer">
			<div class="name">Space Penguin</div>
			<div class="cardContainer"></div>
			<div class="statsContainer">
				<div class="stat heart">
					<div class="iconImage">
						<img src="images/heart.png">
					</div>
					<div class="statNumber">10</div>
				</div>
				<div class="stat victory">
					<div class="iconImage">
						<img src="images/victory.png">
					</div>
					<div class="statNumber">0</div>
				</div>
				<div class="stat victory">
					<div class="iconImage">
						<img src="images/energy.png">
					</div>
					<div class="statNumber">0</div>
				</div>
			</div>
		</div>
	</div>
*/

