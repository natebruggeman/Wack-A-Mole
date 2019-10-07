

$('#start').on('click', () =>{
	console.log('button works');
	game.setTimer();

});



const game = {
	time: 30,
	P1score: 0,
	P2score: 0,

	setTimer(){

		const $timer = $('#timer')

		const interval = setInterval(() => {
			if(this.time === 0){
				clearInterval(interval)


				} else {
					this.time--
					$timer.text(`Timer: ${this.time}`)
				}

			}
		,1000)
	}
}

