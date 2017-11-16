
// write a foreach loop that compares the numbers of the two arrays with each other and returns true if they are the same and false if they are not.
//it should do a strict check to check that they are also of the same type
//so the below arrays should return


var arr = [10,20,30, '55']
var arr2 = [100,20,20, 55]

arr.forEach(function(item, i){
	console.log(arr2[i] === arr[i])
})

// Notes:
// Get true or false with the colsole.log
// item is the value (element) in each position of the array
// index is the position in the array
// === Checks type as well