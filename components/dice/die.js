
class Die{
	constructor(){
		this.dieFaces = [1,2,3,'heart','energy','punch'];
		this.currentFace = -1;
		this.domElement = null;
		this.handleClick = this.handleClick.bind(this);
	}
	getCurrentDieFace(){
		if( this.currentFace === -1){
			return '?';
		}
		return this.dieFaces[ this.currentFace ];
	}
	render(){
		this.domElement = $("<div>",{
			'class': 'die',
			text: this.getCurrentDieFace(),
			on: {
				click: this.handleClick
			}
		});
		return this.domElement;
	}
	handleClick(){
		console.log('die was clicked');
	}
}