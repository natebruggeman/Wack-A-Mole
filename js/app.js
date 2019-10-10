//adds players names to the DOM

// open click starts everything 
$(".open").on("click",() =>{
	$(".popup, .popup-content").addClass("active");
	$(".open").addClass("active");
});


//submit button hides instructions and displays game, score, turn, etc. 
$("#submit-btn, .popup").on("click",()=>{
	const $name1 = $("#player1")
	const $name2 = $("#player2")
	const enterName1 = $("#input-box1").val()
	const enterName2 = $("#input-box2").val()
	$name1.text(enterName1)
	$name2.text(enterName2)

	$(".popup, .popup-content").hide()
	$("header, .container1, .container2").addClass("active");
	$('#turn').text(enterName1 + `'s turn!`);
});


// const enterName1 = $("#input-box1").val()
// const enterName2 = $("#input-box2").val()
const enterName1 = $("#player1")
const enterName2 = $("#player2")
console.log(enterName1);
console.log(enterName2);


//start button starts turn 1 and turn 2 once timer has hit zero
$('#start').on('click', () =>{
	game.setRound();

});


//listening for background color, and scoring if background is red 
$('.numb').on('click', (e) => {
  console.log(e.target)

  const color = $(e.target).css('backgroundColor')
  game.scoreRandom(color)
  // const blank = $(e.target).css('background-color', 'white')

})



$('#turn').text(enterName1.text() + `'s turn!`);

const game = {
	time: 5,
	P1score: 0,
	P2score: 0,
	round: 1, 
	turn: 1,


	setTimer(){

		//Timer starts at 30 seconds counting down, changing DOM as it goes. 
		const $timer = $('#timer')
		//when 0, clears timer, makes all buttons white
		const interval = setInterval(() => {

			if(this.time === 0 && this.turn === 2 && this.P1score === this.P2score){
				console.log('tie');
				$('#turn').text("Tie Game!");
				$('.numb').css('background-color', 'white');
				clearInterval(interval);


			} else if (this.turn ===  2 && this.time === 0 && this.P1score > this.P2score){
				console.log("P1 Wins!");
				$('#turn').text(enterName1.text() + " wins!");
				$('.numb').css('background-color', 'white');
				clearInterval(interval);


			} else if (this.turn ===  2 && this.time === 0 && this.P1score < this.P2score){
				console.log('P2 Wins!');
				$('#turn').text(enterName2.text() + " wins!");
				$('.numb').css('background-color', 'white');
				clearInterval(interval);

			
			}else if(this.time === 0){
				$('.numb').css('background-color', 'white');
				console.log(this.turn);
				$('#turn').text(enterName2.text() + `'s turn!`);
				clearInterval(interval);
				this.turn++;


				// if timer is not 0, make all buttons white. then set a random
			} else {
				this.time--
				$timer.text(`Timer: ${this.time}`)
				$('.numb').css('background-color', 'white')
				game.setRandom()
			}

		}, 1000)
	},

	setRandom(){

		//generates a random number 1-25 and turns that corresponding button red
		const randomNumber = Math.floor(Math.random() * 25)
		console.log(randomNumber);

		const $buttonSelect = $('.numb').eq(randomNumber)
		$buttonSelect.css('background-color', 'red')
		// $buttonSelect.css('background', 'url(https://venue-forum-prod.s3-us-west-2.amazonaws.com/_imported_profiles/_46596_michael-jackson-is-madman2-150x150.jpg)')

	},


	//if turn is even (p2) and button is red give points to p2, if turn is not even give to p1
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
			this.time = 5	
			this.setTimer()	
			console.log("yeah buddy2 ");
		} else {
		}
	},

	// setJack(){
	// 	const jackArray = [,]

	// 	const randNum = Math.floor(Math.random() * 4)


	// }


}


	



