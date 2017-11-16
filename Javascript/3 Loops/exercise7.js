//create a forEach loop  that loops thought the array below and for each iteration if the element is divisible by 2, if it is it should print true, and if it isn't it should print false

var arr =[1435,656,3234,96747458]

arr.forEach(function(item){
	console.log(item % 2 == 0);
})