
check the following and console.log true if they are arrays and false if they are not, you will need to research a bit as this hasn't been covered.

var one   = {name:'antonello'}
var two   = ['name', 'antonello']
var three = [[],[],{},"antonello",3,function(){}]

Array.isArray(one)

Array.isArray(two)

Array.isArray(three)

// Advanced Not Finalized ERROR

function tOf(whatever) {
	if (whatever.constructor == Array) {
		console.log(true);
	}} else{
		console.log(false)
	}
}
