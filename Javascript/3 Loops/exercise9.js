
//write a forOf loop that loops through the following array and sums the numbers up in a variable called sum, once the loop is finished you can console.log the following message:
//"the the sum of the elements in the array is (here the actual sum)" 

var arr = [1,4,55,77,44,66,44,55];
var sum = 0

for (var item of arr) {
	sum = item + sum
}

console.log(`The sum of the elements in the array is ${sum}`)

// FOR EACH Alternate
var arr = [1,4,55,77,44,66,44,55];
var sum = 0

arr.forEach(function(item){
	sum = item + sum
})       

console.log(`The sum of the elements in the array is ${sum} after`) 