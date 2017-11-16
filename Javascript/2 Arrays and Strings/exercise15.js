
//Still using split and join remove the unwanted characters from our word so that it will be just banana, then console.log word
var word = 'ba_*!*_na_*!*_na';

var splitWord = word.split("_*!*_");

console.log(word.split("_*!*_"));

splitWord = splitWord.join("");

console.log(splitWord)

// Shorter
word= word.split("_*!*_").join('')
