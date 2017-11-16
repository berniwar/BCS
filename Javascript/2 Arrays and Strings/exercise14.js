
// Using the string methods split and join remove the "," from the below string
var str = 'I,Really,Like,Pizza'
//then console.log the modified string which should ideally look like:
//expected output : I Really Like Pizza"

var splitStr = str.split(",");

console.log(str.split(","))

console.log(splitStr.join(" "))

// Shorter

console.log(str.split(",").join(" "))

