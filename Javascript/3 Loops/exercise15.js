//Do the same exercise, but ignore the type.

var arr = [10,20,30, '55']
var arr2 = [100,20,20, 55]

arr.forEach(function(item, i){
	console.log(arr2[i] == arr[i])
})