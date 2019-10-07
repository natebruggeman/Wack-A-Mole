

$('#start').on('click', () =>{
	console.log('button works');
	game.setTimer();
	// game.setRandom();

});

$('button').on('click', (e) => {
  console.log(e.target)

  const color = $(e.target).css('backgroundColor')
  game.scoreRandom(color)
  const blank = $(e.target).css('background-color', 'white')
  // game.setRandom()

})


const game = {
	time: 30,
	P1score: 1,
	P2score: 0,

	setTimer(){
		//Timer starts at 30 seconds counting down, changing DOM as it goes. 
		const $timer = $('#timer')

		const interval = setInterval(() => {
			if(this.time === 0){
				clearInterval(interval)
				$('button').css('background-color', 'white')


				} else {
					this.time--
					$timer.text(`Timer: ${this.time}`)
					$('button').css('background-color', 'white')
					game.setRandom()


				}

			}
		,1000)
	},

	setRandom(){

		//generates a random number 1-25 and turns that corresponding button red
		const randomNumber = Math.floor(Math.random() * 25 + 1)
		console.log(randomNumber);

		const $buttonSelect = $('button').eq(randomNumber)
		$buttonSelect.css('background-color', 'red')

	},

	scoreRandom(color){
		//if background is red and clicked we'll score +1 if it's clicked and not red we'll subtract one

		if(color === 'rgb(255, 0, 0)'){
			this.P1score += 1;
		
			} else {
			this.P1score -= 1;
			}

		$('#score1').text(`Score: ${this.P1score}`)
		}


}












