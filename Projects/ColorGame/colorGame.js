var colors = [
	"RGB(255 , 0 , 0)",
	"RGB(255 , 255 , 0)",
	"RGB(0 , 255 , 0)",
	"RGB(0 , 255 , 255)",
	"RGB(0 , 0 , 255)",
	"RGB(255 , 0 , 255)",
]

var squares     = document.querySelectorAll('.square');
var pickedColor = colors[3];
var colorDisplay= document.getElementById("colorDisplay");

colorDisplay.textContent = pickedColor;

// Add event Listeners to the display
for (var i =0 ; i < squares.length; i++){
	// Add initial color to the square
	squares[i].style.background = colors[i];
	// Add click listeners to the squares
	squares[i].addEventListener("click", function(){
	// Grab Color of Clicked square
		var clickedColor = this.style.background;
		// Compare color to Clicked Color
		if(clickedColor === pickedColor){
				alert("Correct!");
				} 
				else { 
					alert("Nope");
			}
		});
	}