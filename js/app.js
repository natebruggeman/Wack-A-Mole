

$('#start').on('click', () =>{
	console.log('button works');
	game.setTimer();
	game.setRandom();

});



const game = {
	time: 30,
	P1score: 0,
	P2score: 0,

	setTimer(){
		//Timer starts at 30 seconds counting down, changing DOM as it goes. 
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
	},

	setRandom(){

		const randomNumber = Math.floor(Math.random() * 25 + 1)
		console.log(randomNumber);

		const $buttonSelect = $('button').eq(randomNumber)
		$buttonSelect.css('background-color', 'red')


	}


}












