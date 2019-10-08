//adds players names to the DOM



const enterName1 = prompt("Enter your name Player 1!", "Name")
const $name1 = $("#player1")
const $turn = $("#turn")
if (enterName1 != null){
	$name1.text(enterName1)
	$turn.text(enterName1 + `'s turn`)
}

const enterName2 = prompt("Enter your name Player 2!", "Name")
const $name2 = $("#player2")
if (enterName2 != null){
	$name2.text(enterName2)
}











$('#start').on('click', () =>{
	console.log('button works');
	// game.setTimer();
	game.setRound();

});

$('.numb').on('click', (e) => {
  console.log(e.target)

  const color = $(e.target).css('backgroundColor')
  game.scoreRandom(color)
  // const blank = $(e.target).css('background-color', 'white')

})


const game = {
	time: 30,
	P1score: 0,
	P2score: 0,
	round: 1, 
	turn: 1,


	setTimer(){
		//Timer starts at 30 seconds counting down, changing DOM as it goes. 
		const $timer = $('#timer')
		//when 0, clears timer, makes all buttons white
		const interval = setInterval(() => {
			if(this.time === 0){
				
				$('.numb').css('background-color', 'white');
				
				// console.log(this.turn);
				// $('#turn').text(enterName2 + `'s turn!`);
				clearInterval(interval);
				this.turn++;

				// if timer is not 0, make all buttons white. then set a random
				} else {
					this.time--
					$timer.text(`Timer: ${this.time}`)
					$('.numb').css('background-color', 'white')
					game.setRandom()
				}

			}
		,1000)
	},

	setRandom(){

		//generates a random number 1-25 and turns that corresponding button red
		const randomNumber = Math.floor(Math.random() * 25)
		console.log(randomNumber);

		const $buttonSelect = $('.numb').eq(randomNumber)
		$buttonSelect.css('background-color', 'red')

	},


	//if turn is even (p2) and button is red give points to p2, if turn in not even give to p1
	scoreRandom(color){
		if (this.turn % 2 === 0 && color === 'rgb(255, 0, 0)'){
			this.P2score += 1;
			console.log("p2 score");

			} else if (this.turn % 2 === 0 && color !== 'rgb(255, 0, 0)'){
			this.P2score -= 1;	

			} else if (color === 'rgb(255, 0, 0)'){
			this.P1score += 1;
			console.log("P1 score");

		    } else {
		    this.P1score -= 1;	
		    }
		$('#score1').text(`Score: ${this.P1score}`)
		$('#score2').text(`Score: ${this.P2score}`)
	},


	setRound(){
		if(this.turn === 1){
			this.setTimer()
			this.setRandom()
			console.log("yeah buddy1 ");
			} else if (this.turn === 2){
			this.time = 30	
			this.setTimer()	
			console.log("yeah buddy2 ");
			
			} else {
			this.setTimer()	
			console.log("what");
			}

		}

	

}























	// scoreRandom(color){
	// 	//if background is red and clicked we'll score +1 if it's clicked and not red we'll subtract one

	// 	if(color === 'rgb(255, 0, 0)'){
	// 		this.P1score += 1;
		
	// 		} else {
	// 		this.P1score -= 1;
	// 		}
	// 	$('#score1').text(`Score: ${this.P1score}`)
	// }
