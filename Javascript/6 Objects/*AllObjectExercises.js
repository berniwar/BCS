

EXERCISE 1
    //FIX THE ABOVE CODE SO THAT IT DOESN'T THROW AN ERROR!
    //array 
    
    var names = ['jason', 'bourne'];
    var obj   = {};

    for (var i in names){
        obj[i]=names[i]
    };

    // Answer

            "bourne"
        obj

        {0: "jason", 1: "bourne"}

    // Simpler : 

    var names = ['jason', 'bourne'];
    var obj   = {};

    var obj = {

        name : names[0],
        lastname : names[1],
    }

        console.log(obj)

    // Answer


EXERCISE 3

    //Write a function called modifyObject that takes 3 arguments. 
    // the first argument is the object to which you are adding new data
    // the second argument is a key to be added
    // the third argument is the value to be associated with the key
    
    var obj = {a: 1, b: 2}//original object
    // var obj={};
    var function modifyingObject(obj){

        obj['c'] = 3
    }

    modifyingObject(obj)

    // alternative

  var obj = {a: 1, b: 2}

  var  modifyingObject = function (obj,key,number){
        obj[key] = number
    }
        modifyingObject(obj, 'c', 3) 

    //expected output 
    //{a: 1, b: 2, c: 3}  

EXERCISE 4

    //Write a function called addToList that takes one argument, an array of movie titles.
    //then create a new empty array called movieList.
    //loop through the array of movie titles and push them inside the movieList array as objects.
    //this object will have two key value pair:
    //id has to be an unique number of your choice (idealy the index)
    //then title which will be the title of the movie.
    //in the end console.log the movieList array.
    
    var movies = ['matrix','the dark knight','a beautiful mind','american pie']
    var movieList= []

    movies.forEach(function(ele, index)){
        //create an empty object every time the loop runs
        var obj = {title:ele, id:index}
        //add a key of title and a value of the element of the array
        obj['tittle'] = ele
        //add a key of id and a value of thew index
        obj['id'] = index
        //push the object
        movieList.push(obj)
    }

    addToList(movies)

    // Alternate

        var movies = ['matrix','the dark knight','a beautiful mind','american pie']
    var movieList= []

    movies.forEach(function(ele, index)){
        var obj = {title:ele, id:index}
        movieList.push(obj)
    }

    addToList(movies)


    // Alternate
    var addToList = function(){
          var movies = ['matrix','the dark knight','a beautiful mind','american pie']

          var movieList= []

        movies.forEach(function(ele, index){
            //create an empty object every time the loop runs
            var obj = {}
            //add a key of title and a value of the element of the array
            obj['tittle'] = ele
            //add a key of id and a value of thew index
            obj.id = index
            //push the object
            movieList.push(obj)
        })

    }

    console.log(addToList)

     addToList(movies)


        //EXAMPLE
    addToList(movies)
        //{title: "matrix", id: 0}
        //{title: "the dark knight", id: 1}
        //{title: "a beautiful mind", id: 2}
        //{title: "american pie", id: 3}

EXERCISE 5
    //write a for in loop that goes through the below object.
    // and prints out its elements next to a string that describes what the element is.
    //see example:
    
        var person = {
            name:'Antonello',
            surname:'Sanna',
            age:34,
            gender:'male'      
    }
    // for in loop 
    for(var whatever in person){
        console.log(`key ${whatever} value ${person[whatever]}`)
    }

    //EXAMPLE:
    //key name value Antonello
    //key surname value Sanna
    //key age value 34
    //key gender value male

EXERCISE 6 Go Over

    // Write a function called swap that takes one argument, an object, and returns another object where the key/value pairs have been swapped. The original object should not be modified.

    // Solution

    var obj = {a: 1, b: 2}
   

    var swap = function (obj){
        var obj2 = {};
        for(var key in obj){
            
            // What are we doing. We are assigning the key value of obj as 
            // obj[key]: is key value  of obj (1)
            // [obj [key]] turns it into a key
            // key : is the key of obj (a). There is no need for obj as its looping in obj
            // What you set here (this side of the squal sign) will always be the key !most important = what you set on this side is the key value
        
        // Note: 
        // Can we make alternatives of this. 

           obj2[obj[key]]= key
        }
        return obj2 
    }

    swap(obj)

    // Result : {1: "a", 2: "b"}1: "a"2: "b"__proto__: Object

EXERCISE 7 Go Over : Why does it give me the last point

    // Write a function called last that takes one argument, an object, and returns an object containing only the last key/value pair and does not modify the original object.

        var obj = {a: 1, b: 2}

    // This can be whatever because obj is pulled from within the function.
        var last = function(whatever){
             for(var key in whatever){
                // Adding the empty object within the for in loop will give you the last on
                // Do not forget to declare empty objects. 
                 var obj2 = {}
                // This obj pulls from outside the function
                 obj2[key]=obj[key]
             } 
             return obj2
         }  

            last(obj2)

        // Alternate

            // var obj = {a: 1, b: 2}

            //     for(var key in obj){
            //         obj2={}
            //         obj2[key]=obj[key]
            //     }

            // last(obj2)

            // // Note : Reset inside the loop to get the answer

EXERCISE 8
    // Write a function called sumAll that takes one argument, an object, and sums all it's values. If no object is provided or if the object is empty sumAll should return 0.
            var obj = {a: 1, b: 2, c: 2}
            var summed = 0 
            
           for (var key in obj){
            summed += obj[key];
           };

           console.log(summed)

    // Solution by Ross
        var obj = {a: 1, b: 2, c: 2};
        var sum = 0;

        function sumAll(obj) {
          if (!(obj) || null) {
            return 0;
          };
          for (var key in obj) {
            sum += obj[key];
          }
          return sum;
        }

        sumAll(obj) // 5
        //sumAll({}) // 0
        //sumAll() // 0

    // Solution by Ting 
        var obj = {a: 1, b: 2, c: 2}

        function sumAll(obj){
            var sum = 0
        if (!obj){
                return sum
            }
            else {
                    for (var key in obj) {
                        sum += obj[key]
                    }
                    return sum
                }
            }
            sumAll(obj)

EXERCISE 9 Go Over
    // Create a function called model. The model function allows you to control how you interact with a collection of objects that we call collection that are stored in the DB. Model imposes conditions on the properties of the collection, for example which keys are allowed.
    // In this exercise create a model function. This model uses the definitions of a predefined object called schema (you don't need to define it) to assert the keys that each object in a collection that are allowed. The model function can take 2 arguments: the first is an object with the type of the operation we want to execute on the db and the second is the data we need to execute it. For now we only define an operation called 'add'.
    
            var schema  = ["id", "name", "age"];
            var DB      = [];
            var unknown = [];
            
            var model = function(a,obj){   
                // for(var ele=0,ele < ele.length, ele++){

                for(var i=0,i < i.length, i++){

                if( ele == "id" || ele == "name" || ele == "age"){

                    DB [ele] = schema [ele]
                
                // DB.push(schema)?
            }

                // Seems like I need to add something that declares the new variable, unknown. 

                else(
                console.log(`${} was not added because not allowed by the schema`)
                    )
            }}

            model()

            // schema.forEach(function(a, obj)

    // Reworked

            var schema  = ["id", "name", "age"];
            var DB      = [];
            var unknown = [];

            //Steps: 
             var model = function(a,obj){  
                // for in loop:
                for(var key in schema){
                //    pass object to function

                //     run loop on object

                //     compare keys one my one to schema
                if(ele == "id" || ele == "name" || ele == "age"){
                //     if key exist , add to value pair to DB
                    DB [ele] = schema [ele]
                }
                //      if not, skip; 
                else (`Address was not added because not allowed by the schema`)
            }}

    // Soltion by Ross
        schema = ["id", "name", "age"]
        DB = [];
        // var newObj = {};

        function model(add, obj) {
            newObj = {};
          for (var key in obj) {
            schema.forEach(function(el){
              if (el == key) {
                // Go over this 
                newObj[key]= obj[key];
              }
            });
          }
          DB.push(newObj);
        }
        console.log(DB);

    // Solution by Ting

        var schema = ["id", "name", "age"]
        var DB = []

        function model(add, obj) {
            var add = function(whatever){
                DB.push(whatever) 
            }
            for(var key in obj){
                if(schema.includes(key)){
                    add({[key]:obj[key]})
                }
            }
            console.log(DB)
        }

        model("add", {id: 1, name: "Joe", age: 32, address: "Muntaner 262, Barcelona"})
        model("add", {id: 1, age: 32, address: "Muntaner 262, Barcelona"})

        model("add", {id: 1, age: 32, address: "Muntaner 262, Barcelona"})
        model("add", {id: 1, name: "Joe", age: 32, address: "Muntaner 262, Barcelona"})

    // Needed Answer

    model("add", {id: 1, name: "Joe", age: 32, address: "Muntaner 262, Barcelona"})
    DB // [{id: 1, name: "Joe", age: 32}] => Address was not added because not allowed by the schema 
    
    model("add", {id: 1, age: 32, address: "Muntaner 262, Barcelona"})
    DB // [{id: 1, age: 32}] => Address was not added because not allowed by the schema 

EXERCISE 10
    // Continuing the previous exercise, add the posibility to force the type of the value that can be set on a given property. In this case schema is an object and no longer an array. The allowed values are only "string", "number" and "boolean". If the value of a given property does not have the appropriate type, then the property will not be added to the new object in the db.
    // Example
    
                // schema = {id: "number", name: "string", age: "number", married: "boolean"};
                // DB = [];

                // var model = function(action,ele){ 

                // // for(var ele in schema){

                //     if( typeof ele == "id" || typeof ele == "name" || typeof ele == "age"){

                //         DB[ele]=schema[ele]

                //  } else ()

                //  }


                //     model("add", {id: 1, name: "Joe", age: "32", address: "Muntaner 262, Barcelona", married: "to Mary"})
                //     DB // [{id: 1, name: "Joe"}] => married and age not added because of the wrong type (why?)

    // Solution by Ting

            var schema = {id: "number", name: "string", age: "number", married: "boolean"}
            var DB = []
            
            function model(add, obj) {
                var add = function(whatever){
                    DB.push(whatever)
                }
                for (var key in obj){
                    var obj2 = {}
                    if (Object.keys(schema).includes(key) && typeof obj[key] === schema[key]) {
                        obj2[key] = obj[key]
                    }
                }
                add(obj2)
                return DB
            }

            model("add", {id: 1, name: "Joe", age: "32", address: "Muntaner 262, Barcelona", married: "to Mary"})

    // Solution by Ross

        // schema = {id: "number", name: "string", age: "number", married: "boolean"}
        // DB = [];

        // function model(add, obj) {
        // var newObj = {};

        // for (var key in obj) {
        //     if (key in schema && typeof obj[key] == schema[key])
        // {
        //      newObj[key] = obj[key]; }
        //     }
        //         DB.push(newObj);
        // }
            
        // model("add", {id: 1, name: "Joe", age: "32", address: "Muntaner 262, Barcelona", married: "to Mary"});

EXERCISE 11
    // Write 4 functions called bankAccount, withdraw, deposit and balance. They keep track of the amount added and removed from a bank account when called bankAccount function.
    //The bankAccount and balance functions takes no argument and withdraw and deposit
    // only take one argument.
    // Example
    
            bankAccount()
            
            withdraw(2)
            
            withdraw(5)
            
            deposit(4)
            
            deposit(1)
            
            balance() // -2

    // Solution by Ting
          var balance1 = 0
        function bankAccount(){
        
        withdraw = function(amount){
            balance1 -= amount
        },
        deposit = function(amount){
            balance1 += amount
        },
        balance = function(){
            console.log(balance1)
        }

        }

        
                    
        model("add", {id: 1, name: "pedro", age: "32", address: "Muntaner 262, Barcelona, Spain"}) 
        model("add", {name: 43, married: "asdfasdf"}) 
        model("add", {name: "43", married: true, age: 20})
                    

EXERCISE 12
    // Write a function called Slice Which extrapolates properties from an object and uses them for a newly created object. this function can take 3 arguments: the first is an object, the second and third are numbers.
    // The second argument indicates the position of the key/value pair we want to start taking properties from (slicing) and the third one indicates the end of the slicing. So for instance slice(0,2) refers to the positions 0 and 1 of the object having the following object: var obj = {a: 1, b: 2, c: 2} and calling the function slice with the arguments obj, 0, 2 should return {a: 1, b: 2}
    
    // Example:
    
    // slice(obj, 0,2) returns : {a: 1, b: 2}
    // We assume that, as it is common in computer science, the first element of an object is 0 and not 1.
    
    // If the third argument is not passed it should default to 1.
    
    // Solution by Ting 



    // Example
    
    var obj = {a: 1, b: 2, c: 2}
    
    var newObje = slice(obj, 0, 2)
    // newObje => {a: 1, b: 2} 
    
    var newObje = slice(obj, 2, 2)
    // newObje => {} 
    
    var newObje = slice(obj, 5, 2)
    // newObje => {} 
    
    var newObje = slice(obj, 0)
    // newObje => {a: 1} 
    
    
    var newObje = slice(obj, 0, 0)
    // newObje => {}
    

EXERCISE 13 Go Over
    // Write a function called sort that sorts the values of an object, which should all be numbers, from the 
    // smallest to the biggest. The function will return a new object of which the keys are the indexes going 
    // from 0 to n; where n is the number of properties of the object minus 1.

    obj = {a: 1, b: 20, c: 3, d: 4, e: 1, f: 4}
    sort(obj) // {0: 1, 1: 1, 2: 3, 3: 4, 4: 4, 5: 20}

    // Solution by Ross

         var obj = {a: 1, b: 2, c: 2,d:3,e:4};

                function splice(obj, pos, remain) {
                  if (arguments.length ==2) {
                    remain = 1;
                  }

                  var newObj={};

                  var count=0;

                  for (var p in obj) {
                    if( (count >= pos  && count<remain) || (pos !=0 && pos == remain && pos == count) )
                    newObj[p] = obj[p];
                    count++;
                  }
                 return newObj;
                }

        // Solution by Ting
        
        var obj = {a: 1, b: 2, c: 2}

        // In this exercise, a is the starting point, b is not the ending point, 
        //but the amount of the properties you want to take from the original object.

        function slice(obj, a, b) { 
            var arr = []
            var arr2 = []
            var obj2 = {}
            for(var key in obj) {
                arr.push({[key]:obj[key]})
            }
            if(b == undefined ){
                arr2.push(arr[a])
            }else{
                for(var i = 0; i < b; i++){
                    arr2.push(arr[a+i])
                }
            }
            for (var item of arr2 ) {
                for (var key in item) {
                    obj2[key] = item[key]
                }
            }
            return obj2
        }

        slice(obj,0,2)
        slice(obj,2,2)
        slice(obj,5,2)
        slice(obj,0)
        slice(obj,0,0)


        var newObje = splice(obj, 0,2);
        console.log(newObje);

EXERCISE 14
    Extend the functionality of the previous function Sort to include the possibility of having different types of sorting according to the arguments we pass. we need to be able to decide if sorting by keys or by value and if in ascending or descending order. please also note that the keys are letters and the values are numbers so should the sorting be by key it needs to sort alphabetically.
    Example
    var obj = {a: 1, b: 20, c: 3, d: 4, e: 1, f: 4}
    sort(obj,'keys','ascending')
    //Object {0: "a", 1: "b", 2: "c", 3: "d", 4: "e", 5: "f"}
    sort(obj,'keys','descending')
    //Object {0: "f", 1: "e", 2: "d", 3: "c", 4: "b", 5: "a"}
    sort(obj,'values','ascending')
    //Object {0: 1, 1: 1, 2: 3, 3: 4, 4: 4, 5: 20}
    sort(obj,'values','descending')
    //Object {0: 20, 1: 4, 2: 4, 3: 3, 4: 1, 5: 1}
    Note: should the second or the third argument be missing the function should console.log the folllowing message:"missing argument here!".

    // Solution by Ting

                function sort(obj){
                    var arr = []
                    var newObj = {}
            for (var key in obj) {
                    arr.push(obj[key])
                    arr = arr.sort((a, b)=> a-b)
                arr.forEach(function(num,i){
                    newObj[i] = num 
                })
            }
             return newObj
        }

        var obj = {a: 1, b: 20, c: 3, d: 4, e: 1, f: 4}
        sort(obj)

    // Solution by Ross


        obj = {a: 1, b: 20, c: 3, d: 4};

        function sort(obj) {

          var sortable = [];

          for(var key in obj) {
            sortable.push([key, obj[key]]);
          }

          sortable.sort(function(a,b){
            return a[1] - b[1]; // sorted values
          });

          var sortedObj = {};

          var counter=0;
          for(var k in sortable){
          sortedObj[counter] = sortable[k][1];
          counter++;
          }

         return sortedObj;
        }

        var returnedObj = sort(obj);
        console.log(returnedObj);


