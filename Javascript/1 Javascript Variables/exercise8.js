var drivingAge = 15
var currentAge= 30
var age= prompt("How old are you?")

function testAge(age){
	if(age >= drivingAge){
		console.log("Do it")
	}
	else{
		console.log("Stop that")
	}
}

console.log(currentAge>=drivingAge)
true



// Second Try

var drivingAge = 15
var currentAge= 30
var age= prompt("How old are you?")
console.log(age)

function testAge(age){
	if(age >= drivingAge){
		console.log("Do it")
	}
	else{
		console.log("Stop that")
	}
}

testAge(age)