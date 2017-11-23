var colors         = [
    "rgb(206, 0, 88)",
    "rgb(206, 0, 88)",
	"rgb(206, 0, 88)",
	"rgb(206, 0, 88)",
	"rgb(206, 0, 88)",
	"rgb(254, 221, 0)",
];
// generateRandomColors(6);

var squares        = document.querySelectorAll('.square');
var pickedColor    = colors[3];
var colorDisplay   = document.getElementById("colorDisplay");
var messageDisplay = document.querySelector('#message');

colorDisplay.textContent = pickedColor;

// Add event Listeners to the display
for (var i = 0 ; i < squares.length; i++){
	// Add initial color to the square
	squares[i].style.background = colors[i];
	// Add click listeners to the squares
	squares[i].addEventListener("click", function(){
	// Grab Color of Clicked square
		var clickedColor = this.style.background;
		// Compare color to Clicked Color
		console.log(clickedColor)
		console.log(pickedColor)
		if(clickedColor === pickedColor){
				messageDisplay.textContent="Correct";
				changeColors(clickedColor);
				} 
				else { 
					this.style.background= '#232323';
					messageDisplay.textContent="Try Again";
			}
		});
	}

function changeColors(color){
	for(var i=0, i< squares.length, i++){
		squares[i].style.background= color;
	}
}

function pickedColor(){
	Math.random()
}