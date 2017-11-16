Source Material : https://paper.dropbox.com/doc/Block-04-Conditionals-ZQGHJ4n2mtXLvGlBhwfQE

EXERCISE 0

//=======================EXERCISE0======================================//
    //Take the following variables and make sure they are NOT:
    //undefined
    //an empty string
    //false
    //null

// Answer
        var a =  '';
        var b ;
        var c = null;
        var d = false ;
        var e = 'false';
        var f = "hello";
        var g = "true";

var ab =[a,b,c,d,e,f,g];

ab.forEach(function(item){
    if (item){
        console.log('Thanks');
    } else {
        console.log('please provide us with valid data');
    }
});

// Function Alternative

        var a =  '';
        var b ;
        var c = null;
        var d = false ;
        var e = 'false';
        var f = "hello";
        var g = "true";

var check = str => {
    if( str ) {
    console.log('valid data provided')
}else{
    console.log ('please provide us with valid data')
}
}

// INNEFICIENT WAY
        var a =  '';
        var b ;
        var c = null;
        var d = false ;
        var e = 'false';
        var f = "hello";
        var g = "true";
          
            if (a){
                console.log('valid data provided');
            } else {
                console.log('please provide us with valid data');
            };

              if (b){
                console.log('valid data provided');
            } else {
                console.log('please provide us with valid data');
            };

              if (c){
                console.log('valid data provided');
            } else {
                console.log('please provide us with valid data');
            };

              if (d){
                console.log('valid data provided');
            } else {
                console.log('please provide us with valid data');
            };

              if (f){
                console.log('valid data provided');
            } else {
                console.log('please provide us with valid data');
            };

              if (g){
                console.log('valid data provided');
            } else {
                console.log('please provide us with valid data');
            };
    
    //if they are undefined you should console.log a message as follows:
    //please provide us with valid data.
    //if the variable is none of the above it should console.log('valid data provided')

EXERCISE 1

    //using if statements check if you are older than John who is 43
    //if you are the oldest it should console.log:
    
    //`I am the oldest! I am "myAge" and John is "JohnAge" years old
    
    // in case John is the oldest it should console.log the following message:
    
    //actually John is older than I! because I am "myAge" and John is "JohnAge" years old`
    
    //in both cases you should replace "myAge" and "JohnAge" with the actual ages


// Answer
var meAge= 30
var johnAge=43

    if (johnAge > meAge){
console.log(`John is older. Because I am ${myAge} and John is ${johnAge} years old`);
    } else {
        console.log(`I am the oldest. I am ${meAge} years old and John is ${johnAge} years old`)
    };

EXERCISE 2

    //write a forEach loop that loops through the array below and if the number is even it console.log 'it is even' if the number is odd it console.log it is odd,
    //in case the array element is not a number it should console.log 'invalid data provided'
    //array 

// Result

var arr = [1,5,9,33,65,122,66,['banana']];

arr.forEach(function(item){
    if (typeof item == 'number'){
        if (item % 2 === 0){
            console.log('Even')
        }
        else { 
            console.log('Odd');
        }
    } else {
        console.log("invalid Data Provided");
    }
});

// Make sure the element is a number first. 


EXERCISE 3

    //write a forEach loop that loops through the given array and check if the typeof the element is a string and if it is it pushes it to the provided empty array.
    //once done you should console.log the following message replacing the variables
    //(what's in capital letters) with actual data.
    //
    //there are NUMBER of strings in this new array :ARR2
    
    var arr = 
    [
            'banana',
            ['banana'],
            {banana:'banana'},
            false,
            true,
            'cheese',
            12,
            -32,
            'salame'
    ]
    // var arr2= []
    var stringAmmount = 0

    arr.forEach(function(item){
    if (typeof item == 'string'){
         // arr2.push(item);
         stringAmmount++;
        }});

    console.log(`There are ${stringAmmount} of strings in this new array : arr2 =[ ${arr2}]`)

EXERCISE 4 Go Over

    // Create a loop that goes through a string and checks how many occurrencies of commas and question marks there are in it.
    //then console.log in a sentence like the one below replacing the variables with actual data
    
    //there is COMMAS comma and QUESTION-MARKS question marks in this sentence
    
    var str = 'hello, how are you today? I am not bad and you?'

    var questionMark = []
    var comas = []

    str=str.split('')

    str.forEach(function(item){
        if( item == ',')
        {
           questionMark.push(item);
        } else if (item == '?'){
            comas.push(item)
        }
    });
       
    console.log(`There are ${comas.length} comma marks and ${questionMark.length} question marks in this sentence`)

    // Alternative 
        var str = 'hello, how are you today? I am not bad and you?'

        var questionMark = 0
        var comas = 0

        str=str.split('')

        str.forEach(function(item){
        if (item == ',') {
            comas++;
            }
            else if (item == '?') {
            questionMark++;
            }    
            });
                       
        console.log(`There are ${comas} comma marks and ${questionMark} question marks in this sentence`)

    // Learning : Previous Wrong Result : 
            // There are undefined comma marks and undefined question marks in this sentence
            // Tried changing Attempts : 
            //     1.Tried to change var questionMark = []var comas = []
    // Solution : Changed the ${comas,length} to ${comas} as they are not fetching information to the array. 
        //expected output
        //there is 1 comma and 2 question marks in this sentence



EXERCISE 5 
    //extends the previous exercise by counting the occurrencies of commas and question marks, only this time your loop should be able to check these 2 sentences and if there is only one occurrency, it should say "there is", and if there are more than one it should say "there are" and also use plural in the end of commas/question marks
    var str = 'hello, how are you today? I am not bad and you?'
    //expected output
    //there is 1 comma and 2 question marks in this sentence

    var str1 = 'hello, how, are, you today? I am not bad and you?'
    //expected output
    //there are 3 commas and there are 2 question marks and

    // Answer 
    var str1 = 'hello, how, are, you today?';
    var totalComma = 0;
    var totalQuest = 0;
    var isAre = 'is';
    var commas = '';
    var quests = '';

    for (var i = 0; i < str1.length; i++) {
      if (str1[i] === ',') {
        totalComma ++;
      } else if (str1[i] === '?') {
        totalQuest ++;
      }
    }

    if (totalComma > 1) 

    { isAre = 'are';
      commas = 's';
    }

    if (totalQuest > 1) {
      quests = 's';
    }

    console.log(`there ${isAre} ${totalComma} comma${commas} and ${totalQuest} question mark${quests} in this sentence`);



EXERCISE 6
//Count the capitals in the word and console.log them, as well as their count
    
// Answer

    var str = 'Antonello Sanna Likes videoGames'
    var str2 = []

    str=str.split('')

    str.forEach(function(item){
        if(typeof item == 'string'){
            if(item == item.toUpperCase() && item !== ' '){
                str2.push(item)
            }
        }});

    console.log(`${str2} There are ${str2.length} capitals in this word`)

// Alternate by Ting (Not Finish)

    fucntion checkAndCount(word){
        var word = var,split('')
        i.forEach(function(ele){
            if(ele.toUppercase() ==ele && ele!== " "){

            }
        })
        for (letter of str2){
            console.log(letter)
        }
    }

    console.log()



    // Learning: 
        // -Needed to add && item !== ' ', and not forget to declare the item. 
             // This is needed because .toUpperCase has a big that counts empty spaces as Upper case strings. 
        // -When a string you have to split into an array then put back together to propperly process 
        // -This is how you check if something is a string : typeof item == 'string')
        // -How to get the uppercase characters: item == item.toUpperCase()

    //expected outputvar str = 'Antonello Sanna Likes videoGames'
    // A
    // S 
    // L 
    // G 
    // there are 4 capitals in this word

EXERCISE 7 Go Over

    ///with a foreEach loop that goes through the given array, and if the element can be converted to a number then console.log the element converted to a number.
    //in case  the element cannot be converted then it should console.log the following message replacing ELE with the actual element

    // Answer
        var str=['banana','34','68', [12], {number:14},'one','two','14', 54]

        str.forEach(function(item){
              if( Number(item)){
                console.log(Number(item))
              } else {
                console.log(`${item} cannot be converted to a number`)
              }
          })


    // Result:
        //        banana cannot be converted to a number
        // VM1350:5 34
        // VM1350:5 68
        // VM1350:5 12
        // VM1350:7 [object Object] cannot be converted to a number
        // VM1350:7 one cannot be converted to a number
        // VM1350:7 two cannot be converted to a number
        // VM1350:5 14
        // VM1350:5 54
        // undefined
    // Learning:
        // How do you find out if a number: Number(item)
   

EXERCISE 8 
    // find the minors and remove them from the club entry list...
    
    // You have a list of ages of people who want to join the opening of your new club, check if they are at least 21 and not older than 65.
    //create an array of approved ages  where you place all ages that meets our criteria.
    //then console.log the message shown in the expected output.
    //You can use a loop of your choice for this one!
    
    var approved = []
    var ages = [12,33,12,43,99,11,5,21,43]

    ages.forEach(function(age){
        if(age >= 21 && age <=65){
            approved.push(age);
        }
    });
    
    console.log(`There are ${approved.length} people in the list and the ages are: ${approved}`)

    //expected output 
    //there are 4 people in the list and the ages are 33,43,21,43
    // Learning;
        // Do not neet to add approved++ if not needed. We are not counting a number but an array.  


EXERCISE 9 Go Over

    //Create an empty array (arr) and then create a loop that loops through another array (numbers), it takes all odd numbers smaller than 30 and pushes them in our arr, once done, console.log the message as per expected output.
    
    var numbers = [12,33,12,43,99,11,5,21,43]
    var numbers2 = []

    numbers.forEach(function(item){
        if(item % 2 !== 0 && item < 30){
         numbers2.push(item)
        }});
    console.log(`There are ${numbers2.length} odd numbers under 30 in our array :${numbers2}`)
    
// Solution Not:
// Check the .length spellings. 
// Was missing numbers.forEach before the function. 


//expected output
//There are 3 odd numbers under 30 in our array  (3) [11, 5, 21]

EXERCISE 10 Go Over

    ///write a foreach Loop that goes through the array, and checks the lenght of each string in the array and console.log it, please bare in mind that the array contains also non string element, you should count how many 
    //non-string elements there are.
    //After the loop console.log the message as per expected output.
    
    //var arr = ['mario','john',34,true,'banana']
    //there are NUM non string elements in our array and these are ELEMENTS

// Answer helped by Ting

var arr = ['mario','john',34,true,'banana']
var nonString = []
var howLong = []

arr.forEach(function(ele){
    if(typeof ele !== "string"){
        nonString.push(ele)
    }else {
        howLong.push(ele.length)
    }
});

console.log(`the lengths of the strings are ${howLong}, there are ${nonString.length} non string elements in our array and these are ${nonString}`)

// Notes:
// You can push the length of an element as in the example : push(ele.length)

// Previous Wrong Answer : Rework it. 

            var arr = ['mario','john',34,true,'banana']

            arr.forEach(function(item){
            if (string(item)){
                console.log(str.length(item))
            // } else {
            //     console.log('please provide us with valid data');
            // }
        }});

EXERCISE 11 Not Finished & Go Over

    // create an empty array called bool
    //create a variable called maxCapacity
    //and assign to it a value of 5
    // loop through the provided array and every time you find a boolean push it to our bool array until you reach the maxCapacity.
    //then console.log a message as per expected output

// Answer  
    var arr  = ['mike','john',true, false,12,true,false]
    var bool = []
    var maxCapacity = 5

    arr.forEach(function(item){
        if(typeof item == 'boolean' && bool.length <6 ){
            bool.push(item)
    }});

    console.log(`We filled up our max capacity of ${maxCapacity} with the following booleans ${bool}`)

    // Response
    // var bool = [1,2,3,false,'false']
    // we filled up our max capacity of 5 with the following booleans true,false,true,false

// Answer by Ross
        
        var arr = ['mike', 'john', true, false, 12, true, false];
        var bool = [];
        var maxCapacity = 5;

        arr.forEach(function(el) {
          if (bool.length < maxCapacity && typeof el == 'boolean') {
            bool.push(el);
          }
        })

        console.log(bool); 

EXERCISE 12 Go Over Ross Version

    //write a forEach loop that goes through the array and looks for duplicates.
    //you need one array with the unique numbers 
    //(also these who were double before removing the duplicates)
    
    //one array only with the removed duplicated
    
    //the original array should be left untouched..
    
var arr = [ mike','jason','peter','robert','mike','jason','jenny','jane'];
    
    arr.forEach(function(i){
        if(){

        }
    })
console.log(`there are ${.length} elements in the array of values and these are ${}mike,jason,peter,robert,jenny,jane and there are ${2} elements in the array of duplicates and these are ${mike,jason} `)    

// Answer by Ting
    var arr = ['mike','jason','peter','robert','mike','jason','jenny','jane']
    var arr_sorted = arr.sort()
    var duplicates = []
    var noKidding = []
    for (var i = 0; i < arr_sorted.length; i++) {
        if (arr_sorted[i] !== arr_sorted[i+1]) {
            noKidding.push(arr_sorted[i])           
        }else {
            duplicates.push(arr_sorted[i])
        }
    }   
    console.log(`there are ${noKidding.length} elements in the array of values and these are ${noKidding} and there are ${duplicates.length} elements in the array of duplicates and these are ${duplicates} `)

// Answer by Ting Alternative
    var arr = ['mike','jason','peter','robert','mike','jason','jenny','jane']
    var arr_sorted = arr.sort()
    var duplicates = []
    var noKidding = []
    arr_sorted.forEach(function(ele,i) {
        if(arr_sorted[i] !== arr_sorted[i+1]){
            noKidding.push(arr_sorted[i])
        }else {
            duplicates.push(arr_sorted[i])
        }
    })  
    console.log(`there are ${noKidding.length} elements in the array of values and these are ${noKidding} and there are ${duplicates.length} elements in the array of duplicates and these are ${duplicates} `)
    Add Comment Collapse


// Answer by Ross
    var arr = ['mike', 'jason', 'peter', 'robert', 'mike', 'jason', 'jenny', 'jane'];
    var unique = [];
    var removed = [];
    var uniqueCounter = 0;
    var removeCounter = 0;

    arr.forEach(function(el) {
      if (unique.indexOf(el) == -1) { // if search never occurs
        unique.push(el);
      } else {
        removed.push(el);
      }
    })

    console.log(`there are ${unique.length} elements in
      the array of values and these are ${unique} and there
      are ${removed.length} elements in the array of duplicates and
      these are ${removed}`);
    Add Comment Collapse

    //expected output
    //there are 6 elements in the array of values and these are mike,jason,peter,robert,jenny,jane and there are 2 elements in the array of duplicates and these are mike,jason 

EXERCISE 13 Needs Previous Not Finished & Go Over
// extend the previous exercise by making sure to return only the unique elements of the array only this time
// all items of the returned array must be numbers bigger than 10.

Example
var arr = [ 
            10, 44, 55 ,66 , 77 , 55 , 44 ,
            3 , 3 , 3 , 4 , 5 , 6 , 54 , 
            "antonello", "33", "£", "66"
]

// Answer by Ross
 var arr = [
  10, 44, 55, 66, 77, 55, 44,
  3, 3, 3, 4, 5, 6, 54,
  "antonello", "33", "£", "66"
];


var unique = [];

arr.forEach(function(el) {
    // can also: for(typeof el == 'number')
  if (el = Number(el)) {
    if (unique.indexOf(el) == -1 && el > 10) {
      unique.push(el);
    }
  }
});

console.log('unique: ', unique);

Note .indexOf checks an array by lookin within the array and letting you know if what you are looking for is there. 
for example :

    var arr = ['bob','mary','john']
arr.indexOf('mary')
Results: 1 . One means there is one threre. 
Zero means its not there

//expected output :

//[10, 44, 55, 66, 77, 54, 33]

EXERCISE 14 Not Finished & Go Over
    //take this wonderful string below and get rid of all numbers elements so that it can finally display a meaningful sentence!
var str = 'I1L2o34895748957v4e53489573456B7an34534543758349758a9n5434598579357376a958783495743987585'

str=str.split('');

str.forEach(function(item){
if(== text){
    print it
}
})

// Answer by Ting

    var str = 'I1L2o34895748957v4e53489573456B7an34534543758349758a9n5434598579357376a958783495743987585'
    var num = str.split('')
    var noNum = []
    var final = []
    
// Step number 1, remove all the numbers and push them into the new array noNum by pushing each element or str
    num.forEach(function(ele){
        if (!Number(ele)) {
            noNum.push(ele)
        }
    })
    for (var i in noNum) {
        if (noNum[i].toUpperCase() == noNum[i]){
            // Here we are adding a space before caputal letters because if not the sentence would be all together. 
            final.push(' ' + noNum[i])
        }else {
            final.push(noNum[i])
        }
    }
    console.log(final.join(''))

// Answer by Ross
    
    var str = 'I1L2o34895748957v4e53489573456B7an34534543758349758a9n5434598579357376a958783495743987585'
    var output = [];

    for (var i = 0; i < str.length; i++) {
      if (!Number(str[i])) {
        output.push(str[i]);
      }
    }

    output.splice(1, 0, ' ');
    output.splice(6, 0, ' ');

    var newOutput = output.join('');

    console.log(newOutput);
    //expected output 
    //I Love Banana



EXERCISE 15 Go Over

    Guess My Number game You are going to try to build a Guess My Number game with JavaScript

    ----------

    The essence of this game is that computer randomly guesses some number and a player has to guess it with limited number of guesses. 

    ----------
    Requirements:
    - game should generate a random number in a given range (1-100, for example)
    - player should be told the range of possible numbers and how many guesses they have
    - game should display a prompt with input field for a number
    - after each guess game should tell:
      - number is too big (if the number from user is greater than the guessed number)
      - number is too small (if the number is smaller than the guessed number)
    - If player could guess the number than the game should give a message about that and render text/image confirming the win
    - if player couldn’t guess the number with given amount of guesses then the game stops and tells the number which was guessed
    ----------
    Help
    - Use built-in JavaScript method to create a random number
    - Remember to define number of guesses first
    - Use loop to repeat prompts asking user for a number
    - Use conditionals to check if the numbers match
    - the range, 0 - 10, if you put 100 it will be 1 - 100
    ------

// Answer by Ting

    var fun = ()=>{
    var randNum=(min, max)=>Math.floor(Math.random()*(max - min + 1))+min;
    var num = randNum(1,100)
    var welcome = alert('Welcome to "Guess the number game!"')

    for(var guesses_left = 5; guesses_left>=0; guesses_left--){
    if (guesses_left > 0) {
        var guess = prompt("Enter a number between 1 and 100! You have 5 chances in total :)")
        if (guess == num ) {
            alert('Congratulations! You win!')
            return;
        }else if (guess > num) {
            alert(`Oops, the number is too big!'You have ${guesses_left - 1} guesses left. `)
        }else if (guess < num) {
            alert(`Oops, the number is too small!'You have ${guesses_left - 1} guesses left. `)
        }
    }else {
        alert('You lose! Try it again!')
    }
    }
    }
    fun()

// Answer by Ting Advanced

    // Note : This variable is also a function! Notice the opening of a curly bracket. 
        var fun = ()=>{

        var randNum=(min, max)=>Math.floor(Math.random()*(max - min + 1))+min;

        // alert and prompt is a javascript method. 
        var welcome = alert('Welcome to "Guess the number game!"')
        var num     = prompt('Enter the range in which you want to play the game. For example"1,100".')
        // You turn them into a javascript method : Number
        // You are splitting this because when you are gettin the response from the text bog its a string with 2 numbers, and you split them then use the first one[0] or the second one[1]
        var numMin  = Number(num.split(',')[0])
        var numMax  = Number(num.split(',')[1])
        // randNum is not considered a method because its a variable declared earlier. 
        var num2    = randNum(numMin,numMax);

            for(var guesses_left = 5; guesses_left>=0; guesses_left--){
                if (guesses_left > 0) {
                    var guess = prompt(`Enter a number between ${numMin} and ${numMax}! You have 5 chances in total :)`)
                    }
                    if (guess == num2 ) {
                        alert('Congratulations! You win!')
                        return;
                    }else if (guess > num2) {
                        alert(`Oops, the number is too big!'You have ${guesses_left - 1} guesses left. `)
                    }else if (guess < num2) {
                        alert(`Oops, the number is too small!'You have ${guesses_left - 1} guesses left. `)
                    }else {
                        alert('You lose! Try it again!')
                    }
                }
        }

        fun()

// Answer by Ross
    var guessedCorrectly = false;
    var randNum = Math.floor(Math.random() * 100) + 1;
    var playerGuess;
    var allowedGuesses = 5;
    var message = "Guess a number between 1 and 100 ... you only have 5 guesses!";

    do {
      playerGuess = parseInt(prompt(message));
      allowedGuesses--;
      if (isNaN(playerGuess) || playerGuess < 1 || playerGuess > 100) // check for illegal entry
        message = "sorry I dont recognise that entry, try again... you have " + allowedGuesses;
      else if (playerGuess > randNum)
        message = "number is too big, you have " + allowedGuesses + " guesses left";
      else if (playerGuess < randNum)
        message = "number is too low, you have " + allowedGuesses + " guesses left";
      else {
        guessedCorrectly = true;
        alert("YOU WIN !! - great guess");
        break;
      }
    } while (allowedGuesses > 0);
    if (!guessedCorrectly) {
      alert("YOU LOSE !! - sorry, you didn't guess correctly... the correct number was " + randNum);
    }

// can this be added? ...

// var randNum=(min, max)=>Math.floor(Math.random()*(max - min + 1))+min;

//var randNum(0,100);

