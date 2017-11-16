
//#1create a for loop that prints out the numbers from 1 to 100

for(var i = 0; i < 101; i++){
console.log(i)
}

//#2 create a for loop that prints out the numbers from 100 to 0

for(var i = 100; i >= 0; i--){
console.log(i)
}

//#3 create a  while loop  that checks the numbers from 0 to 100 and for each iteration 
//if the number is not divisible by 2, should print false, and if it is it should print true

var num = 0

while (num < 100){
	console.log(num % 2 == 0);
	num ++;
}

//#4 create a forEach loop that goes through an array like this one in the example and prints out the index and the array element in the same console.log.
//next to each element and index add a semantic string, like for example 
//'element' for the element and 'idex' for the index

var fruit = ['banana', 'orange', 'pineapple'];

fruit.forEach(function(item, index){
console.log('element', item);
console.log('index', index);
});

// Facier

fruit.forEach(function(item, index){
console.log('The element for', item, 'is index #', index);
});


//#5 write a forEach loop that loops through this example array and checks if the type of each element is a string, 
//if it is it prints true, 
//and if it isn't it prints out false, 
//at the same time it needs to print out the indexes of all iterations so that we can see which of them returned true!

var arr = ['banana',['hello'],12,true]

arr.forEach(function(ele, i) {
        console.log(typeof ele == 'string', i)
    });

// TING Version

var arr = ['banana',['hello'],12,true]

arr.forEach(function(ele, i) {
        if (ele.constuctor == String) {
                console.log(true, i)
        } else {
                console.log(false, i)

//#6 write a forEach loop that loops through this example array and prints out the type of each element

var arr = [{name:'Pedrito'}, ['Banana'],false,34,'hello',null,undefined]
​
for(var ele of arr){
    console.log(typeof ele)
};

// Alternate
var arr = [{name:'Pedrito'}, ['Banana'],false,34,'hello',null,undefined]


arr.forEach(function(item){
	console.log('element', typeof item)

})

//#7 create a forEach loop  that loops thought the array below and for each iteration if the element is divisible by 2, if it is it should print true, and if it isn't it should print false

var arr =[1435,656,3234,96747458]

arr.forEach(function(item){
	console.log(item % 2 == 0);
})

//#8 Write a forOf loop that goes through the given array and prints out each element
//you should also concatenate each element with a sentence...
//example
//if the name is mike it should console.log

var arr  = ['mike','peter','luke','pedro','george','antonello']

arr.forEach(function(item){
	console.log('Hello ' + item + ',how are you today?')

});

// Alternate

arr.forEach(function(item){
	console.log(`Hello ${item}, how are you today?`)

});

//#9 write a forOf loop that loops through the following array and sums the numbers up in a variable called sum, once the loop is finished you can console.log the following message:
//"the the sum of the elements in the array is (here the actual sum)" 

var arr = [1,4,55,77,44,66,44,55];
var sum = 0

for (var item of arr) {
	sum = item + sum
};

console.log(`The sum of the elements in the array is ${sum}`)

// FOR EACH Alternate
var arr = [1,4,55,77,44,66,44,55];
var sum = 0

arr.forEach(function(item){
	sum = item + sum
})       

console.log(`The sum of the elements in the array is ${sum} after`) 


//#10 write a forOf loop that loops through the following array and sums the numbers up in a variable called sum, once the loop is finished you can console.log the following message:
//"the the sum of the elements in the array is (here the actual sum)" 

var arr = [1,4,55,77,44,66,44,55];
var sum = 0

for (var item of arr) {
	sum = item + sum
};

console.log(`The sum of the elements in the array is ${sum}`)

// FOR EACH Alternate
var arr = [1,4,55,77,44,66,44,55];
var sum = 0

arr.forEach(function(item){
	sum = item + sum
})       

console.log(`The sum of the elements in the array is ${sum} after`) 


// /#11write a forEach loop that goes through the array using the method push taking the elements of arr and placing them inside the arr2

var arr =['john','mike','robert','peter','luke']
var arr2= []

arr.forEach(function(item){
	arr2.push(item)
	});

console.log(arr2)


//#12 Still using the foreach loop and two arrays push the numbers of arr to arr2 and multiply them by two on the way!

//starting point

var arr = [2,3,65,22]
var arr2 = []

arr.forEach(function(item){
	arr2.push(item * 2) 
	});

console.log(arr2)

//#13 add the elements of arr to arr2 using the concat method
var arr = [1,2,3,4,5,65,23,6,'hello']
var arr2  =[]

arr2= arr.concat(arr2);

console.log(arr2);


// #14 write a foreach loop that compares the numbers of the two arrays with each other and returns true if they are the same and false if they are not.
//it should do a strict check to check that they are also of the same type
//so the below arrays should return
var arr = [10,20,30, '55']
var arr2 = [100,20,20, 55]

arr.forEach(function(item, i){
	console.log(arr2[i] === arr[i])
});

// Notes:
// Get true or false with the colsole.log
// item is the value (element) in each position of the array
// index is the position in the array
// === Checks type as well

//#15 Do the same exercise, but ignore the type.

var arr = [10,20,30, '55']
var arr2 = [100,20,20, 55]

arr.forEach(function(item, i){
	console.log(arr2[i] == arr[i])
});

//#16 Using arr.includes loop through one of the array and check if it contains the element of the other array...
//it should console.log true if it does and false if it doesn't

var arr = [10,20,30, '55']
var arr2 = [100,20,20, 55]

arr2.forEach(function(item){
	console.log(arr.includes(item))
});

// NOTE : It is .includes if its in the array , not the exact position. 

//#17 take the original string which will contain some upper case characters, then create a new variable which needs to contain all the caracter of the original string but all have to be lowercase, once you are done console.log the new variable

//Use //a loop //push //join

	var original =`Antonello LIKEs PlaYing GaMeS`
	var newOriginal = []

	for (var i=0; i < original.length; i++) {
	  newOriginal.push(original[i].toLowerCase())
	};

	newOriginal=newOriginal.join('');

	"antonello likes playing games"

// #18 TAKE THE BELOW STRING AND REVERSE THE ORDER OF THE LETTERS SO THAT IT MAKES SENSE;
//CONSOLE.LOG THE REVERSED LONG SENTENCE

	var str = 'reeb dloc fo tnip ecin a htiw dna oyam htiw seotatop deirf peed evol I'
	var newStr = []

	for (var i=str.length; i >= 0; i--) {
		newStr.push(str[i])
	};

	newStr = newStr.join('');

// What is heppening 

	// Result: 
	// (71) [undefined, "I", " ", "l", "o", "v", "e", " ", "d", "e", "e", "p", " ", "f", "r", "i", "e", "d", " ", "p", "o", "t", "a", "t", "o", "e", "s", " ", "w", "i", "t", "h", " ", "m", "a", "y", "o", " ", "a", "n", "d", " ", "w", "i", "t", "h", " ", "a", " ", "n", "i", "c", "e", " ", "p", "i", "n", "t", " ", "o", "f", " ", "c", "o", "l", "d", " ", "b", "e", "e", "r"]
	// ResultsExplained: The individualized elements are put into a new declared variable array called newStr.

	// Then, combine them:

		newStr = newStr.join('')

// #19 you need to convert a name into an abbreviated form (initials), meaning that you take the first letter of the surname, make sure it is capitalized, and add a dot.

var name = "Bernardo Guerra"
var splitName= name.split(" ")

console.log();

var splitName= name.split(" ")
var splitNameResult= []

// splitName[1][0] element, position within element
splitNameResult.push(splitName[0],splitName[1][0]])



console.log(splitNameResult.toString().split(',').join(' ') + ".")

var firstName= "Bernardo"
var lastName = "Guerra"


var shortenedName = []

for(var i=0,i < original.length; i++){
	abbN
}

// #19 Solution

var fullName = 'Berni War'

var name1 = fullName.split(' ')
var newName =[]

newName.push(name1[0],name1[1][0])

console.log(newName.toString().split(',').join(' ') + ".")

// Another way
var name="Berni War"
var fullName = name.split(' ');
var firstName= fullName[0];
var secondName= fullName[1][0];
var newName= `${firstName} ${secondName}.`
console.log(newName)

///////////////////////////////////////////////

var fullName = 'Berni War'
var name1 = fullName.split(' ')
console.log(name1[0]+" "+ name1[1][0]+".")


//Ex20
var arr = [
            //monday
            '10003', 
            //tuesday
            '46733', 
            //wednesday
            '45833', 
            //thursday
            '3534', 
            //friday
            '57354',
            //satuy
            '45334',
            //sunday
            '34856'
            
    ]

var arr2 = [];
for(ele of arr){
	// Number makes the string into a number
	arr2.push(Number(ele));
};

var sum = 0;
for(i = 0; i < arr.length; i ++ ){
	sum += (arr2[i]);
} ;

var expenses = Math.round(sum * 0.0089/arr.length);
console.log('you spent an average of ' + expenses +'  per day in you trip to Japan')


// Alternate
var arr = [
        //monday
        '10003',
        //tuesday
        '46733',
        //wednesday
        '45833',
        //thursday
        '3534',
        //friday
        '57354',
        //satuy
        '45334',
        //sunday
        '34856'

];

var total = 0;
arr.forEach(function(i) {
    total = total + Number(i)*0.0089
});

var dailyExp = Math.round(total/arr.length);

console.log(`you spent an average of ${dailyExp
} per day in you trip to Japan.`);

