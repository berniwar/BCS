
//Using arr.includes loop through one of the array and check if it contains the element of the other array...
//it should console.log true if it does and false if it doesn't

var arr = [10,20,30, '55']
var arr2 = [100,20,20, 55]

arr2.forEach(function(item){
	console.log(arr.includes(item))
})

// WRONG
// arr.includes(function(item){
// 	console.log(arr2[item])
// })

