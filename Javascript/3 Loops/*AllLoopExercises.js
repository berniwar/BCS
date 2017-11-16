
//#1create a for loop that prints out the numbers from 1 to 100

for(var i = 0; i < 101; i++){
console.log(i)
}

//#2 create a for loop that prints out the numbers from 100 to 0

for(var i = 100; i >= 0; i--){
console.log(i)
}

//#3 create a  while loop  that checks the numbers from 0 to 100 and for each iteration 
//if the number is not divisible by 2, should print false, and if it is it should print true

var num = 0

while (num < 100){
	console.log(num % 2 == 0);
	num ++;
}
