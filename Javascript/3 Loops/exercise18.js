
// TAKE THE BELOW STRING AND REVERSE THE ORDER OF THE LETTERS SO THAT IT MAKES SENSE;
//CONSOLE.LOG THE REVERSED LONG SENTENCE

var str = 'reeb dloc fo tnip ecin a htiw dna oyam htiw seotatop deirf peed evol I'
var newStr = []

for (var i=str.length; i >= 0; i--) {
	newStr.push(str[i])
}

// Result: 
// (71) [undefined, "I", " ", "l", "o", "v", "e", " ", "d", "e", "e", "p", " ", "f", "r", "i", "e", "d", " ", "p", "o", "t", "a", "t", "o", "e", "s", " ", "w", "i", "t", "h", " ", "m", "a", "y", "o", " ", "a", "n", "d", " ", "w", "i", "t", "h", " ", "a", " ", "n", "i", "c", "e", " ", "p", "i", "n", "t", " ", "o", "f", " ", "c", "o", "l", "d", " ", "b", "e", "e", "r"]
// ResultsExplained: The individualized elements are put into a new declared variable array called newStr.

// Then, combine them:
newStr = newStr.join('')