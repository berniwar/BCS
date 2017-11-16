

var p1Button     = document.querySelector("#p1");
var p2Button     = document.getElementById("p2");
var buttons      = document.querySelectorAll('button');
var resetButton  = document.querySelector("#reset")
var p1Display    = document.querySelector("#p1Display");
var p2Display    = document.getElementById("p2Display");
// Why does this input not need a #?
var numInput     = document.querySelector('input');
var winningScoreDisplay = document.querySelector('p span');
var p 			 = document.querySelector('p');
var p1Score      = 0 ;
var p2Score      = 0 ; 
var gameOver     = false ; 
var winningScore = 5 ;    

p1Button.addEventListener('click', function(){
	if(!gameOver){
		p1Score++;
		if(p1Score === winningScore){
			p1Display.classList.add('winner');
			gameOver = true;
			}
			p1Display.textContent = p1Score;
		}
	});


p2Button.addEventListener('click', function(){
	if(!gameOver){
		p2Score++;
		if(p2Score === winningScore){
			p2Display.classList.add('winner')
			gameOver = true;
			}
			p2Display.textContent = p2Score;	
		}
	});

resetButton.addEventListener('click',function(){
	reset();
});

function reset(){
	p1Score= 0 ;
	p2Score= 0 ;
	p1Display.textContent = 0;
	p2Display.textContent = 0;
	p1Display.classList.remove('winner');
	p2Display.classList.remove('winner');
	gameOver = false; 
};

numInput.addEventListener('change', function(){
 	winningScoreDisplay.textContent = this.value;
 	winningScore = Number(this.value);
 	reset();
});

for(var i = 0 ; i < buttons.length ; i++){
	buttons[i].addEventListener('mouseover', function(){
	this.classList.add('selected');
  });

	buttons[i].addEventListener('mouseout', function(){
	this.classList.add('notSelected');
  });
};

// Not working/Broke the app? 

$("button").on("mouseover", function(){
	$(this).css('font-weight', 'bold');
});

$("button").on("mouseleave", function(){
	$(this).css("font-weight", "normal");
});