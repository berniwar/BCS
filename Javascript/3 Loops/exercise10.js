
//Create a forEach loop that loops through the given array and multiplies each element inside it.
//The result should be assigned to a variable called sum.

var arr = [2,4,10]
var sum = 1

arr.forEach(function(item){
	sum = (item*sum)
})

console.log(`The result of multyplying each number of the array is ${sum}`)

