
//write a forEach loop that loops through this example array and prints out the type of each element


var arr = [{name:'Pedrito'}, ['Banana'],false,34,'hello',null,undefined]
​
​
for(var ele of arr){
    console.log(typeof ele)
}

// Alternate
var arr = [{name:'Pedrito'}, ['Banana'],false,34,'hello',null,undefined]


arr.forEach(function(item){
	console.log('element', typeof item)

})
