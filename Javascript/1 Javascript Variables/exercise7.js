var a=3;
var b=123;
var c=545;
var d=34;
var e=6634;
var f=876;

console.log(a % 2 === 0);
false

console.log(b % 2 === 0);
false

console.log(e % 2 ===0);
true

// More Advanced

	function evenOrOdd(number){
		if(number % 2==0){
			console.log(true)
		}
		else{
			console.log(false)
		}
	}

	evenOrOdd(a)
	evenOrOdd(b)
	evenOrOdd(c)
	evenOrOdd(d)
	evenOrOdd(e)
	evenOrOdd(f)


