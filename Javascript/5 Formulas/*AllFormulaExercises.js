

Source Material : https://paper.dropbox.com/doc/Block-05-Functions-ekypbD1aJSgtlhid7hqD8

EXERCISE 1

    //write a function that takes two arguments, greeting and name.
    //inside the function also declare a variable called sentence and give it a value of 'how are you today?'
    //it should then console.log them in sequence.
    //see expected output...
    
    var greeting = 'how are you today?'

    function toGreet (name, greeting){
        return(`Hi ${name} ${greeting}`)
    }

    toGreet('Eddy',greeting)

    //expected output//
    
    //greeting name sentence
    //example
    //Hello Mike how are you today?

EXERCISE 2

    //Write a function called divide that takes two arguments, and divide the second with the first and console.log the result.
    
    function divide(a,b){
        return(b/a)
    }

    divide(2,5)

    //example 10 / 2 = 5
    //divide(10,2)
    //5

EXERCISE 3 Review

    //write a function called calc that takes 3 arguments the first 2 are numbers and the third is an aritmetic operator, so is either + , -, *, /
    // and it executes the appropriate operation according to the provided aritmetic operator.
    
    // Answer 
    + , -, *, /

    function calc (a,b,c){
        if(c == "+") {
            return a + b
        } else if(c == "-") {
            return a - b
        } else if (c == "*"){
            return a * b
        } else if ((c == "/")) {}
             return a / b
    };

    calc(10,2,"/")

    // make sure you test your function with all 4 aritmetic operations
    
    //EXAMPLES//
    //calc(10,2,'/')
    //5
    
    //calc(10,2,'+')
    //12
    
    //calc(10,2,'-')
    //8
    
    //calc(10,2,'*')
    //20

    // Learning Notes : Need to declare variables inside or outside? You do not need to declare variables at all 


EXERCISE 4 Review

    //extend our awesome calc function by adding some conditions...
    //in case the third arguments is  / or * and the second argument is not provided it should default to one.
    //in case the third arguments is +  or  - and the second argument is not provided it should default to zero.
    
        function calcOne (a,b,sign){
                if(sign == "+") {
                    return a + b
                } else if(sign == "-") {
                    return a - b
                } else if (sign == "*"){
                    return a * b
                } else if (sign == "/") {
                    return a / b
                }
                     
             };
        var calcTwo = function (a,b, sign) {
            
            if((!sign) && b == "+" || (!sign) && b == "-" ){
                sign = b ;
                b = 0;
            }else if((!sign) && b == '*' || (!sign) && b == '/'){
                sign = b; 
                b =1;
                
            }
            return calcOne(a,b,sign)
        }

            calcTwo(10,2,'/')

    //example
    //calc(10,"/")  //10
    //calc (30,"*") //30
    //calc (2,"+")  //2
    //calc (3,"-")  //3

    // Solution by Ross

            var calc = function(a, b, sign) {
          if (b == '/' && (!sign)) {
            b = 1;
            sign = '/';
          } else if (b == '*' && (!sign)) {
            b = 1;
            sign = '*';
          } else if (b == '+' && (!sign)) {
            b = 0;
            sign = '+';
          } else if (b == '-' && (!sign)) {
            b = 0;
            sign = '-';
          }
          return calcTwo(a, b, sign);
        };

        var calcTwo = function(a, b, sign) {
          if (sign == '+') {
            return a + b;
          } else if (sign == '-') {
            return a - b;
          } else if (sign == '*') {
            return a * b;
          } else if (sign == '/') {
            return a / b;
          }
        };

        calc(10, "/"); //10
        calc(30, "*"); //30
        calc(2, "+"); //2
        calc(3, "-"); //3

        // Solution by Ting

                function calc(a,b,c){
            if (b.length !== 0 && b !== '+' && b !== '-' && b !== '*' && b !== '/'){
                if (c == '+') {         
                    console.log(a + b)
                }else if ( c == '-') {
                    console.log(a + b)
                }else if (c == '*') {
                    console.log(a * b)  
                }else if (c == '/') {
                    console.log(a / b)
                }       
            }else if (b == '+' || b == '-') {
                console.log(a * 1)
            }else if (b == '*' || b == '/') {
                console.log(a + 0)
            }
        }
        calc(10,'/')
        calc(30,'*')
        calc(2,'+')
        calc(3,'-')

EXERCISE 5 Review
    
    // 1.Write a function that loops through the above arrays and check the typeof of each element 
    // 2.counts how many occurrencies of booleans and strings there are, 
    // 3.console.log their number 
    // 4.Make Sentence like : if the typeof the element is not a string nor a boolena it will be considered unknown.
    //examples

    // Results with Number/Counter

    var arr  = ['12','true','false','hello',12,true,undefined,false] 
    var arr2 = ["banana",'true',['ciao'],12,'gennaro olivieri',true]
    var arr3 = [12,13,54,true,'false']

    function checkTypeOf (a){
        var count        = 0;
        var booleanCount = 0;
        var stringCount  = 0;
        var unknownCount = 0;

        a.forEach(function(ele){
            if(typeof ele == 'boolean'){
                booleanCount++;
            } else if(typeof ele == 'string'){
                stringCount++;
            } else {
                unknownCount++
            }
            
        }) 
        console.log(`there are ${booleanCount} booleans and ${stringCount} strings in the array and ${unknownCount} unknown elements`)
    };

        // Solution by Ting

        var arr  = ['12','true','false','hello',12,true,undefined,false] 
        var arr2 = ["banana",'true',['ciao'],12,'gennaro olivieri',true]
        var arr3 = [12,13,54,true,'false']

        function checkTheArr(whatever) {
            var boolCounter = 0
            var strCounter = 0
            var unknownCounter = 0
            whatever.forEach(function(ele){
                if (typeof ele == 'boolean') {
                    boolCounter ++
                }else if (typeof ele == 'string') {
                    strCounter ++
                }else {
                    unknownCounter ++
                }
            }) 
            console.log(`there are ${boolCounter} booleans and ${strCounter} strings in the array and ${unknownCounter} unknown elements`) 
        }

        checkTheArr(arr)
        checkTheArr(arr2)
        checkTheArr(arr3)

        // Keep a close eye with you are properly closing 

    checkTypeOf(arr)
    checkTypeOf(arr2)
    checkTypeOf(arr3)

    // Result with Array

    var arr  = ['12','true','false','hello',12,true,undefined,false] 
    var arr2 = ["banana",'true',['ciao'],12,'gennaro olivieri',true]
    var arr3 = [12,13,54,true,'false']

    function checkTypeOf (a){
        var count        =[];
        var booleanCount =[];
        var stringCount  =[];
        var unknownCount =[];

        a.forEach(function(ele){
            if(typeof ele == 'boolean'){
                booleanCount.push(ele);
            } else if(typeof ele == 'string'){
                stringCount.push(ele);
            } else {
                unknownCount.push(ele)
            }
            
        }) 
        console.log(`there are ${booleanCount.length} booleans and ${stringCount.length} strings in the array and ${unknownCount.length} unknown elements`)
    };

    checkTypeOf(arr)
    checkTypeOf(arr2)
    checkTypeOf(arr3)

    // Correct Solution
    checkTypeOf(arr)
    //there are 2 booleans and 4 strings in the array and 3 unknown elements
    checkTypeOf(arr2)
    //there are 1 booleans and 3 strings in the array and 4 unknown elements
    checkTypeOf(arr3)
    //there are 1 booleans and 1 strings in the array and 3 unknown elements

EXERCISE 6 Review

    // 1. Write a function that takes 2 arguments
    //  a. first will be an array of == 'strings' 
    //  b.  minumun .length value
    // 2.Check if the length of each element in the array is at least as long 
    //  as the value of the second argument passed.(minumun length value)
    // 3.In the end console.log how many elements have a length equal or longer 
    //  than the minumun length value and are therefore approved and how many are not.
    

        var arr  = ['banana','salame','cheese','coke'] ;
        var arr1 = ['george','pane','mortadella','spaghetti','pesto'];
        var arr2 = ['bread','butter','peanuts','nutella'];
        var approvedArr = [];
        var rejectedArr = [];

    function checktwoArguments(a,number){

        a.forEach(function(ele){
            if(ele.length >= number){
                approvedArr.push(ele);
            } else {
                rejectedArr.push(ele);
            }
        })
            console.log(`There are ${approvedArr.length} approved items and ${rejectedArr.length} rejected items in the provided array`)
    };

    checktwoArguments(arr,5)

    // Expected output
    // then call your function as below and you should get the expected output
    checkLength(arr, 5)
    //expected output
    //there are 3 approved items and 1 rejected items in the provided array
    checkLength(arr1,7)
    //expected output
    //there are 2 approved items and 3 rejected items in the provided array
    checkLength(arr2,3)
    //expected output
    //there are 4 approved items and 0 rejected items in the provided array

    // Solution by B
        ar arr  = ['banana','salame','cheese','coke'] ;
            var arr1 = ['george','pane','mortadella','spaghetti','pesto'];
            var arr2 = ['bread','butter','peanuts','nutella'];
                

        function checkLength (array,length){
                var bueno = 0;
                var nobueno = 0;
            
            arr.forEach(function(ele){
                    if(ele.length >= length){
                        bueno++
                    } else {
                        nobueno++
                }
                       
              });
              console.log(`there are ${bueno} approved items and ${nobueno} rejected items in the provided array`);
        }
        Add Comment Collapse



        2 new messages since 10:18 AM
        Mark as read (esc)

        Message js_fullstack_bootcamp

        *bold* _italics_ ~strike~ `code` ```preformatted``` >quote
        Files

        // Solution by Ross
            var arr = ['banana', 'salame', 'cheese', 'coke'];
            var arr1 = ['george', 'pane', 'mortadella', 'spaghetti', 'pesto'];
            var arr2 = ['bread', 'butter', 'peanuts', 'nutella'];

            function checkLength(arr, len) {
              var approved = 0;
              var rejected = 0;
              arr.forEach(function(ele) {
                if (ele.length >= len) {
                  approved++;
                } else {
                  rejected++;
                }
              });
              console.log(`there are ${approved} approved items and ${rejected} rejected items in the provided array`);
            }

            // then call your function as below and you should get the expected output
            checkLength(arr, 5);


EXERCISE 7

    //write a function that tells you how old you are based on the date of birth passed.
    //this function will take 3 arguments day, month and year
    // you can use the day of today by simply writing it yourself, or if you feel brave enough you may want to use the Date object although we haven't covered that, so this would require some self research from your end.
    
    var age;
    var date = new Date();
    var currentMonth = date.getMonth()+1;
    var currentYear = date.getFullYear()

    function tellAge(day,month,year){
        if (month < currentMonth){

            age = currentYear - year 

        } else {
            age = currentYear - year -1 
        }
    };

    tellAge(2,8,1982)

    console.log(`you are ${age} years old`)

    //========================EXAMPLES========================
    //tellAge(2,8,1982)
    //you are 34 years old
    
    //tellAge(2,7,1982)
    //you are 35 years old
    
    //tellAge(28,7,1982)
    //you are 34 years old
    
    // Solution by Ting

            function tellAge(day,month,year) {
            var today = new Date()
            var dd = today.getDate()
            var mm = today.getMonth()+1
            var yy = today.getFullYear()

            // today = (dd,mm,yy)

            if (month > mm) {
                var age = yy - year -1 
                return age 
            }if (month < mm) {
                var age = yy - year 
                return age
            }if (month == mm) {
                if (day > dd) {
                    var age = yy - year -1
                    return age
                }if (day <= dd){
                    var age = yy - year
                    return age
                }
            }
        }
        tellAge(14,10,1990)
        tellAge(14,11,1990)
        tellAge(2,8,1982)

        // Note: Dont use else if when you are uusing Return. 

        // Solution by Ross

        function tellAge(birth_day, birth_month, birth_year) {
              var today_year  = 2017;
              var today_month = 10;
              var today_day   = 31;
              var age         = today_year - birth_year;
              // debugger;

              if (today_month < birth_month) {
                // if today_month is less than birth_month... reduce age by 1
                age--;
              }
              if (birth_month == today_month && today_day < birth_day) {
                // if months are equal and today is equal AND today is less than birth_day
                age--;
              }
              return age;
            }

            tellAge(27,11,1984);
            //you are 32 years old

            tellAge(2,11,1982);
            //you are 34 years old

            tellAge(2,7,1984);
            //you are 33 years old


//THIS IS AMAZING ABOVE IS THE DATE OBJECT

EXERCISE 8

    // write a function called checkAge
    // knowing that"
    // the age to drive is 16
    // the age for drinking is 21
    
    var age = 0
    var date = new Date();
    var currentMonth = date.getMonth()+1;
    var currentYear = date.getFullYear()

    function tellAge(day,month,year){
        if (month < currentMonth){

            age = currentYear - year 


        } else {
            age = currentYear - year -1 

        }
        return age 
    };

    var checkIf = function(day,month,year){
        
        age= tellAge(day,month,year);

        if(age <= 16){
            return `you can drive`
        }
        else if( age <=21){
            return `can drink and drive`
        } 
        else {
            return `too young`
    }}; 

        // Print Outside the Loop
    
        // console.log(`You are ${age} years old therefore old enough to drink and drive`)

        // console.log(`Sorry you are too young to drink or drive!`)


        checkIf(2,9,1995)
        checkIf(2,9,1999)
        checkIf(2,9,2005)

        // ANSWER BY TING 

                function tellAge(day,month,year) {
                var today = new Date()
                var dd = today.getDate()
                var mm = today.getMonth()+1
                var yy = today.getFullYear()
                today = (dd,mm,yy)
                if (month > mm) {
                    var age = yy - year -1 
                    return age 
                }if (month < mm) {
                    var age = yy - year 
                    return age
                }if (month == mm) {
                    if (day > dd) {
                        var age = yy - year -1
                        return age
                    }if (day <= dd){
                        var age = yy - year
                        return age
                    }
                }
            }

            function checkAge(day,month,year) {
                var age = tellAge(day,month,year)
                if (age >= 21){
                        console.log(`You are ${age} years old therefore old enough to drink and drive`)

                    }else if (age < 21 && age >= 16) {
                        console.log(`You are ${age} years old therefore old enough to drive but not drink`)
                    }else {
                        console.log('sorry you are too young to drink or drive!')
                    }
            }
            checkAge(2,9,1995)
            checkAge(2,9,1999)
            checkAge(2,9,2005)

            // SOLUTION BY ROSS

                var minDriveAge = 16;
                var minDrinkAge = 21;

                function tellAge(birth_day, birth_month, birth_year) {
                  var today_year = 2017;
                  var today_month = 10;
                  var today_day = 31;
                  var age = today_year - birth_year;
                  // debugger;
                  if (today_month < birth_month) {
                    // if today_month is less than birth_month... reduce age by 1
                    age--;
                  }
                  if (birth_month == today_month && today_day < birth_day) {
                    // if months are equal and today is equal AND today is less than birth_day
                    age--;
                  }
                  return age;
}
                function checkAge(birth_day, birth_month, birth_year) {

                  var personAge = tellAge(birth_day, birth_month, birth_year);
                  if (personAge < minDriveAge) {
                    return `sorry you are too young to drink or drive!`;
                  }
                  if (personAge >= minDriveAge && personAge < minDrinkAge) {
                    return `You are ${personAge} years old therefore old enough to drive but not to drink`;
                  }
                  if (personAge >= minDrinkAge) {
                    return `You are ${personAge} years old therefore old enough to drink and drive`;
                  }
                }

                checkAge(10, 11, 1995);
                //You are 21 years old therefore old enough to drink and drive
                checkAge(10, 11, 1999);
                //You are 17 years old therefore old enough to drive but not to drink
                checkAge(10, 11, 2005);
                //sorry you are too young to drink or drive!
    
    // check the age and output one of the following messages according with the age of the person. please replace the numbers with data from your variables.
    //EXAMPLES

    //checkAge(2,9,1995)
    //You are 21 years old therefore old enough to drink and drive
    
    //checkAge(2,9,1999)
    //You are 17 years old therefore old enough to drive but not to drink
    
    //checkAge(2,9,2005)
    //sorry you are too young to drink or drive!

EXERCISE 9

    //Write a function called  checkAge that checks how many days there are between now and the next birthday.
    //if the date of birth is today it should alert 
            // happy birhtday! 
    //if the date of birth is passed it should console.log
            // Sorry your birthday is passed for this year
    //otherwise it should console.log how many months and days there are between now and the next birthday.
    //in case there is less than 1 month between now and the next birthday it should ignore the month.
    
    var age = 0
    var date = new Date();
    var currentMonth = date.getMonth()+1;
    var currentYear = date.getFullYear()

    // This is not getting the right variable
    var days = Number(date.toLocaleDateString().split('/')[0])

    function tellAge(day,month,year){
        if (month < currentMonth){

            age = currentYear - year 


        } else {
            age = currentYear - year -1 

        }
        return age 
    };

// Work in Progress   
        var checkAge = function(day,month,year){
            if(days < 30){
                return`your birthday will be this month`
            } else if ( days > 30 && days < 60 ){
                return`your birthday will be soon`
        } else{
            return`your birthday is long away`
        }
        }

            checkAge(2,8,1982)
            checkAge(2,9,1982)
            checkAge(25,2,1982)

        //Examples:
        
        //checkAge(2,8,1982)
        //your birthday will be in 6 days
        
        //checkAge(2,9,1982)
        //your birthday will be in 1 months and 6 days
        
        //checkAge(25,2,1982)
        //your birthday is passed for this year

// Solution by Ting

        function daysInMonth(month, year) {
          return new Date(year, month, 0).getDate();
        }

        function checkAge(day,month,year) {
            var today = new Date()
            var dd = today.getDate()
            var mm = today.getMonth()+1
            var yy = today.getFullYear()
            today = [dd,mm,yy]
            

            if (month > mm && day > dd && month - mm > 1) {
                var monthsLeft = month - mm
                var daysLeft = day - dd
                console.log(`Your birthday will be in ${monthsLeft} months and ${daysLeft} days`)
            }else if(month > mm && day > dd && month - mm == 1) {
                var monthsLeft = month - mm
                var daysLeft = day - dd     
                console.log(`Your birthday will be in ${monthsLeft} month and ${daysLeft} days`)
            }else if (month > mm && day < dd ){
                var days = daysInMonth(mm, yy)
                var daysLeft = days - dd + day      
                console.log(`Your birthday will be in ${daysLeft} days`)    
            }else if (month < mm) {
                console.log('Sorry your birthday is passed for this year')
            }else if (month == mm) {
                if (day > dd) {
                    var daysLeft = day - dd            
                    console.log(`your birthday will be in ${daysLeft} days`)
                }else if(day < dd){         
                    console.log('Sorry your birthday is passed for this year')
                }else {         
                    console.log('Happy Birthday!')
                }
            }
        }
            checkAge(6,12,1990)


// Alternative solution by Ting

        function checkAge(day,month,year) {
            var today = new Date()
            var dd = today.getDate()
            var mm = today.getMonth()+1
            var yy = today.getFullYear()
            today = [dd,mm,yy]
            

            if (month > mm && day > dd && month - mm > 1) {
                var monthsLeft = month - mm
                var daysLeft = day - dd     
                console.log(`Your birthday will be in ${monthsLeft} months and ${daysLeft} days`)
            }else if(month > mm && day > dd && month - mm == 1) {
                var monthsLeft = month - mm
                var daysLeft = day - dd     
                console.log(`Your birthday will be in ${monthsLeft} month and ${daysLeft} days`)
            }else if (month > mm && day < dd && month == 3){
                var daysLeft = 31 - dd + day        
                console.log(`Your birthday will be in ${daysLeft} days`)
            }else if (month > mm && day < dd && month == 5){
                var daysLeft = 31 - dd + day        
                console.log(`Your birthday will be in ${daysLeft} days`)
            }else if (month > mm && day < dd && month == 7){
                var daysLeft = 31 - dd + day        
                console.log(`Your birthday will be in ${daysLeft} days`)
            }else if (month > mm && day < dd && month == 8){
                var daysLeft = 31 - dd + day        
                console.log(`Your birthday will be in ${daysLeft} days`)
            }else if (month > mm && day < dd && month == 10){
                var daysLeft = 31 - dd + day        
                console.log(`Your birthday will be in ${daysLeft} days`)
            }else if (month > mm && day < dd && month == 12){
                var daysLeft = 31 - dd + day        
                console.log(`Your birthday will be in ${daysLeft} days`)
            }else if (month > mm && day < dd && month == 4){
                var daysLeft = 30 - dd + day 
                console.log(`Your birthday will be in ${daysLeft} days`)
            }else if (month > mm && day < dd && month == 6){
                var daysLeft = 30 - dd + day           
                console.log(`Your birthday will be in ${daysLeft} days`)
            }else if (month > mm && day < dd && month == 9){
                var daysLeft = 30 - dd + day          
                console.log(`Your birthday will be in ${daysLeft} days`)
            }else if (month > mm && day < dd && month == 11){
                var daysLeft = 30 - dd + day           
                console.log(`Your birthday will be in ${daysLeft} days`)
            }else if(month > mm && day < dd && month == 2){
                var daysLeft = 28 - dd + day            
                console.log(`Your birthday will be in ${daysLeft} days`)
            }else if (month < mm) {
                console.log('Sorry your birthday is passed for this year')
            }else if (month == mm) {
                if (day > dd) {
                    var daysLeft = day - dd            
                    console.log(`your birthday will be in ${daysLeft} days`)
                }else if(day < dd){         
                    console.log('Sorry your birthday is passed for this year')
                }else {         
                    console.log('Happy Birthday!')
                }
            }
        }
        checkAge(14,10,1990)



EXERCISE 10

    //write a function called dollarsConverter which takes 2 arguments
    //The amount of cash to be converted
    // the currency we want to conver it to.
    // let's assume that the conversion for euro and pounds are as follow:
    //euro 1.2
    //pounds 1.5
    
    //please console.log the converted amount in a sentence as shown in the example below.
    
    // in the case the currency provided is not in the list it should display the following message:
    
    //wrong currency provided!
    
    //if no currency is provided at all it should display the following message:
    
    //currency needed for conversion!
    
    //You should use the built-in method Math.round to round up your result.
    //examples
    
    function dollarsConverter(number, currency){
        var euro = 
        var pound = 
    }

    if(){}
    console.log(`You will receive ${} pounds in exchange for your ${} dollars`)

    else(){}
    console.log(`Wrong currency provided!`)

    //dollarsConverter(100,'pounds')
    //You will receive 67 pounds in exchange for your 100 dollars
    
    //dollarsConverter(100,'euro')
    //You will receive 83 euro in exchange for your 100 dollars
    
    //dollarsConverter(100,' Japanese Yen')
    //wrong currency provided!

    // Solution by Ross
        var euroExch = 1.2;
        var poundExch = 1.5;


        function dollarsConverter(cash, cur) {
          if (!cur) {
            return `currency needed for conversion!`;
          }
          if (cur != 'euro' && cur != 'pounds') {
            return `wrong currency provided!`;
          }
          if (cash && cur) {
            // debugger
            if (cur == 'euro') {
              var totalEuro = Math.round(cash / euroExch);
              return `You will receive ${totalEuro} euro in exchange for your ${cash} dollars`;
            } else if (cur == 'pounds') {
              var totalPound = Math.round(cash / poundExch);
              return `You will receive ${totalPound} pounds in exchange for your ${cash} dollars`;
            }
          }
        }

        dollarsConverter(99, 'euro');
        dollarsConverter(99, 'pounds');
        dollarsConverter(100, ' Japanese Yen');
        dollarsConverter(99,);

EXERCISE 11

    // Write a function called runOnRange that runs a function through a range of numbers and console.log the result of the passed function
    // The function takes 2 arguments: the first is a function that can take one argument (that must be a number) and a second argument which is an object with 3 properties: start, end and an optional step.
    // If step is missing the step will be set to 1.
    

    function runOnRange (a,b,c,d){
        var addOne = function(num) {return num + 1}
    }

    runOnRange(addOne, {start: 10, end: 17, step: 3})
    runOnRange(addOne, {start: -6, end: -4})
    runOnRange(addOne, {start: 12, end: 12})
    runOnRange(addOne, {start: 23, end: 26, step: -1})
    runOnRange(addOne, {start: 23, end: 26, step: 0})

    // Example
    // var addOne = function(num) {return num + 1}
    // runOnRange(addOne, {start: 10, end: 17, step: 3})
    // // => 11 
    // // => 14 
    // // => 17 
    
    // runOnRange(addOne, {start: -6, end: -4})
    // // => -5 
    // // => -4 
    
    
    // runOnRange(addOne, {start: 12, end: 12})
    // // nothing should be console.logged in this case! 
    
    // runOnRange(addOne, {start: 23, end: 26, step: -1})
    // // nothing should be console.logged in this case! 
    
    // runOnRange(addOne, {start: 23, end: 26, step: 0})
    // // nothing should be console.logged in this case! 

    // Solution by Ting

        var addOne = function(num){return num + 1}
        function runOnRange(addOne, obj) {
            var start1 = addOne(obj.start)
            if (obj.step === undefined){
                obj.step = 1
            }if(obj.step <= 0){
                return
            }
            if(start1 + obj.step > obj.end ){
                return
            }
            for(var i = start1; i <= obj.end; i += obj.step){
                console.log(i)
            }
        }
        runOnRange(addOne, {start: 10, end: 17, step: 3})
        runOnRange(addOne, {start: -6, end: -4})
        runOnRange(addOne, {start: 12, end: 12})
        runOnRange(addOne, {start: 23, end: 26, step: -1})
        runOnRange(addOne, {start: 23, end: 26, step: 0})

        // Solution by ROss

            function runOnRange(addOne, obj) {
            function addOne() {
                return 1;
              };

              var start = obj.start + addOne();
              var end = obj.end;
              var step = obj.step;

              if (start == end) {
                return;
              }
              if (step <= 0) {
                return;
              }
              if (!step) {
                step = 1;
              }

              for (var i = start; i <= end; i += step) {
                console.log(i);
              }
            }

                runOnRange(addOne, {start: 10, end: 17, step: 3})
                runOnRange(addOne, {start: -6, end: -4})
                runOnRange(addOne, {start: 12, end: 12})
                runOnRange(addOne, {start: 23, end: 26, step: -1})
                runOnRange(addOne, {start: 23, end: 26, step: 0})

EXERCISE 12

    // Write a function called stringChop that chops a string into chunks of a given length. The function takes 2 arguments, the first one being the string to chop, and the second one a number that will be the size of you chunks.
    // Example
    // stringChop('w3resource'); //#=> ["w3resource"]
    // stringChop('w3resource',2); //#=> ["w3", "re", "so", "ur", "ce"] 
    // stringChop('w3resource',3); //#=> ["w3r", "eso", "urc", "e"]

    function stringChop(a,b){

    }

    stringChop('w3resource')
    stringChop('w3resource',2)
    stringChop('w3resource',3)

    // Answer by Ting

            function stringChop(string,len) {
            var chunks = []
            if(!len){
              return string
            }
            for (var i = 0 ; i < string.length; i += len){
                var str = string.slice(i, i + len) 
                chunks.push(str)
            }
            console.log(chunks)
        }

        stringChop('w3resource')
        stringChop('w3resource',2)
        stringChop('w3resource',3)


    // Answer by Ross

        function stringChop(str, chunk) {
          var result = [];
          for (var i = 0; i < str.length; i += chunk) {
            result.push(str.substr(i, chunk));
            // console.log('here', str);
          }
          return result;
        }

        stringChop('w3resource');
        stringChop('w3resource', 2);
        stringChop('w3resource', 3);

EXTRA CHALLENGE:

    // Rock-paper-scissors

    // Solution by Ting

    // 1 = rock , 2 = paper, 3 = scissors

            function rockPaperScissors() {
                var userScore = 0
                var computerScore = 0
                
                for (var i = 0; i >=0; i ++) {

                    var randNum=(min, max)=>Math.floor(Math.random()*(max - min + 1))+min;
                    var computer = randNum(1,3);
                    if (userScore == 3) {
                        console.log('Congrats!You are the winner!')
                        return
                    }if (computerScore == 3) {
                        console.log('The computer wins! Try again!')
                        return
                    }else {
                        var user = Number(prompt('Click the one you want!')) // enter a number between 1 and 3 for testing
                        if (computer == user) {
                            console.log('Tie, replay!')
                            console.log(userScore)
                            console.log(computerScore)
                        }else if (computer == 1 && user == 2) {
                            console.log('Good job! You win!')
                            userScore ++
                            console.log(userScore)
                            console.log(computerScore)
                        }else if (computer == 1 && user == 3) {
                            console.log('You lose!')
                            computerScore ++
                            console.log(userScore)
                            console.log(computerScore)
                        }else if (computer == 2 && user == 1) {
                            console.log('You lose!')
                            computerScore ++
                            console.log(userScore)
                            console.log(computerScore)
                        }else if (computer == 2 && user == 3) {
                            console.log('Good job! You win!')
                            userScore ++
                            console.log(userScore)
                            console.log(computerScore)
                        }else if (computer == 3 && user == 1) {
                            console.log('Good job! You win!')
                            userScore ++
                            console.log(userScore)
                            console.log(computerScore)
                        }else if (computer == 3 && user == 2) {
                            console.log('You lose!')
                            computerScore ++
                            console.log(userScore)
                            console.log(computerScore)
                        }

                    }
                    
                }

            }
            rockPaperScissors()


         // Solution by Ross

            function playGame(arg) {

              var userChoice = prompt("Do you choose rock, paper or scissors?");

              if (userChoice != 'rock' && userChoice != 'paper' && userChoice != 'scissors') {
                alert("didnt recognise your input");
                playGame();
              }

              var computerChoice = Math.random();
              if (computerChoice < 0.34) {
                computerChoice = "rock";
              } else if (computerChoice <= 0.67) {
                computerChoice = "paper";
              } else {
                computerChoice = "scissors";
              }

              alert("Computer choice is ..." + computerChoice);

              var compare = function(choice1, choice2) {
                if (choice1 === choice2) {
                  return "It's a tie!";
                }
                if (choice1 === "rock") {
                  if (choice2 === "scissors") {
                    // rock wins
                    return "You win!";
                  } else {
                    // paper wins
                    return "You lose!";
                  }
                }x
                if (choice1 === "paper") {
                  if (choice2 === "rock") {
                    // paper wins
                    return "You win!";
                  } else {
                    // scissors wins
                    return "You lose!";
                  }
                }
                if (choice1 === "scissors") {
                  if (choice2 === "rock") {
                    // rock wins
                    return "You lose!";
                  } else {
                    // scissors wins
                    return "You win!";
                  }
                }
              };
              // compare
              var results = compare(userChoice, computerChoice);
              // Display results
              alert(results);
              // play again?
              playAgain();

              function playAgain() {
                userChoice = prompt("Play again  (yes  or  no)");
                if (userChoice == 'yes') {
                  playGame(); // restart game
                } else if (userChoice == 'no') {
                  return;
                } else if (userChoice != 'yes' && userChoice != 'no') {
                  alert("didnt recognise your input");
                  playAgain();
                }
              }
            }
            playGame();





    // Requirements:
    // - The computer should choose randomly every turn
    // - The player can click on a picture representing the option and choose it.
    // - You should see if you won or lost at every turn
    // - in order to win the match the player or the computer needs to win twice.
    // - there need to be a score keeper to  show the current score of the player and the computer.
    // - In case both select the same option then is a draw and no points should be given out.
