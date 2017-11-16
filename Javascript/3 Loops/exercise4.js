
//create a forEach loop that goes through an array like this one in the example and prints out the index and the array element in the same console.log.
//next to each element and index add a semantic string, like for example 
//'element' for the element and 'idex' for the index

var fruit = ['banana', 'orange', 'pineapple']

fruit.forEach(function(item, index){
console.log('element', item)
console.log('index', index)
})

// Facier

fruit.forEach(function(item, index){
console.log('The element for', item, 'is index #', index)
})