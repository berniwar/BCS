EXERCISE 1

    Write a multylanguage HelloWorld app with Express. To do so you need to use
    req.params property to get the lanaguage the user wants the message to be printed in. Make sure that if the URL does not specify any language then the app will default to English.
    For this exercise and all the next to come your app will listen to localhost:3001 instead of checking for a file in a folder like we have done so far.
    Example of usage:
        > URL Message
        > /NL Hallo Wereld
        > /HI नमस्ते दुनिया
        > /FR Bonjour le monde
        > /ES Hola Mundo
        > /IT Ciao Mondo
        > /CH 你好，世界
        > /JP こんにちは世界
        > /AR مرحبا بالعالم
        > /EN Hello world
        > / NL: Hello world, HI: नमस्ते दुनिया, ..., EN: Hello world.
    Set Up Steps:
    npm init
    npm install --save express (you might need to do sudo)
    in package.json add the following
    "scripts": {
    "start": "nodemon server.js",
    },
    now, when your code is ready, you should be able to use npm start to launch your app
    remember to set the app to listen to localhost:3001

    // Solution by Ross

    var express = require('express');
    var app = express();
    var port = 3001;

    var language = {
              EN: 'Hello world',
              NL: 'Hallo Wereld',
              HI: 'नमस्ते दुनिया',
              FR: 'Bonjour le monde',
              ES: 'Hola Mundo',
              IT: 'Ciao Mondo',
              JP: '你好，世界',
              AR: 'こんにちは世界'
            };

    app.get('/:lang?',(req, res)=>{  // ? makes this parameter optional. no route defined for home url
      // console.log('language[req.params.lang]',language[req.params.lang]);
      // console.log('language.EN',language.EN);
      var message = language[req.params.lang] || language.EN;
      //message in browser
      res.send(`<h1>${message}</h1>`);
    });

    app.listen(port, ()=> {
      //server check
      console.log("server is up and running on port ", port);
    });

    // Solution by Ting 1-5

        var express = require('express')
        var app = express()
        var port = 3001


        //Ex1-4

        var greetings = {
                NL: 'Hallo Wereld',
                HI: 'नमस्ते दुनिया',
                FR: 'Bonjour le monde',
                ES: 'Hola Mundo',
                IT: 'Ciao Mondo',
                CH: '你好，世界',
                JP: 'こんにちは世界',
                AR: 'مرحبا بالعالم',
                EN: 'Hello world'
            }

        app.get('/home/:lan', function (req, response) {
            var passedData = req.params.lan
            if(passedData == undefined){
                passedData = 'EN'
            }

            for(var lan in greetings){
                if (passedData == lan){
                    var greeting = greetings[lan]
                }else if (!(passedData in greetings)) {
                    greeting = 'Language not found, you can add a new language!'
                }   
            }
        response.send(`${greeting}`) // <= This will appear in your browser
        })




        //Add a new route
        app.get ('/home/:newLang/:newPhrase', function (req, res) {
            var newLang = req.params.newLang
            var newPhrase = req.params.newPhrase.split('_').join(' ')
             
            //add a new language 
            if (!(newLang in greetings)) {
                greetings[newLang] = newPhrase 
                res.send('New language added, thanks!')
                //delete a exsiting language
            }else if (newLang in greetings && req.params.newPhrase == 'remove'){
                res.send('Language deleted!')
                delete greetings[newLang]
                //update a language
            }else if (newLang in greetings && newPhrase !== greetings[newLang]){
                res.send('Language updated!')
                greetings[newLang] = newPhrase
            }
            
        })

EXERCISE 5

        Write an app, following the API of the bank server you aready created in part1/block6/challenge6. The server needs to be able to create accounts and for a single account we should be able to deposit, withdraw, get the balance and delete the account.
        Working app: https://bcs-bank-app.herokuapp.com
        API:
    | URL (String)                    | Return (String)                                  | Comments                                                 |
    | ------------------------------- | ------------------------------------------------ | -------------------------------------------------------- |
    | /account/new/:accountID/:amount | account nr :accountID created with :amount euros | POST; it must be unique no matter the number of calls    |
    | /:accountID/withdraw/:amount    | :amount euros taken from account nr :accountID   | POST; if :accountID not found return "Account not found" |
    | /:accountID/deposit/:amount     | :amount euros added to account nr :accountID     | POST; if :accountID not found return "Account not found" |
    | /:accountID/balance             | The balance of account nr :accountID is ## euros | GET; if :accountID not found return "Account not found"  |
    | /:accountID/delete              | Account nr :accountID deleted                    | POST; if :accountID not found return "Account not found" |
   
   // | /*                              | 404 resource not found                           | What to do in case we match anything else                |

    //By Ting

        var bankAccount = function(id,totalNum){
          this.id = id,
          this.total = totalNum ,
          this.set = function(num){
            this.total = num
          },
          this.clear = function(){
            this.total = 0
          },
          this.withdraw = function(amount){
            this.total -= amount 
          },
          this.deposit = function(amount){
            this.total += amount
          },
          this.balance = function(){
            return this.total
          }
        }

        var newAccount
        var DB = [] //to stoce all the account information
        var ID = [] //to store all the accound ids..

        app.post(('/account/new/:accountID/:amount'), function(req, res){
            
            var accountId = req.params.accountID 
            var amount = Number(req.params.amount) // amount in the url will be string.
            
            DB.forEach(function(account){
                ID.push(account.id)
            })
            // check if the ID is unique
            if (ID.includes(accountId)){
                    res.send(`This id is already taken. Please choose another one!`)    
            }else{
                newAccount = new bankAccount(accountId, amount)
                DB.push(newAccount)
                ID.push(accountId)
                res.send(`account nr ${accountId} created with ${amount} euros`)
            }

        })

        app.post(('/:accountID/withdraw/:amount'),function(req,res){
            var accountId = req.params.accountID
            var amount = Number(req.params.amount)

            DB.forEach(function(account){
                if (accountId == account.id){
                    account.withdraw(amount)
                    res.send(`${amount} euros taken from account nr ${accountId}`)
                }else if (accountId !== account.id){
                    res.send(`Account not found`)
                }
                
            })
        })

        app.post(('/:accountID/deposit/:amount'),function(req,res){
            var accountId = req.params.accountID
            var amount = Number(req.params.amount)

            DB.forEach(function(account){
                if (accountId == account.id){
                    account.deposit(amount)
                    res.send(`${amount} euros added to account nr ${accountId}`)
                }else if (accountId !== account.id){
                    res.send(`Account not found`)
                }
                    
            })
            
        })

        app.get(('/:accountID/balance'),function(req,res){
            var accountId = req.params.accountID
            var amount = Number(req.params.amount)

            DB.forEach(function(account){
                if (accountId == account.id){
                    account.balance()
                    res.send(`The balance of account nr ${accountId} is ${newAccount.balance()} euros`)
                }else if (accountId !== account.id){
                    res.send(`Account not found`)
                }   
            })
            
            
        })

        app.post(('/:accountID/delete'),function(req,res){
            var accountId = req.params.accountID
            
            DB.forEach(function(account){
                if (accountId == account.id){
                    account == undefined
                    res.send(` Account nr ${accountId} deleted`)
                }else if (accountId !== account.id){
                    res.send(`Account not found`)
                }   
            })
            
        })

        app.get(('/*'),function(req,res){
            res.send(`404 resource not found`)
        })






        app.listen(port,()=> {
            console.log("server is up and running on port ", port)
        })


// EXERCISE 2

//     Extend the previous exercise and add the possibility to add a new language.
//     Example of usage:
//         > URL Message
//         > /DE Hello World in DE not found
//         > /DE/Hallo_Welt DE added with message "Hallo Welt"
//         > /DE Hallo Welt
//     Note:
//     Pay attention to the fact that the URL is encoded to ASCII code so it only accepts most common English charactes and not spaces. That is why we use the underscore instead of a space! For more information about the encoding of URL you can visit the W3Schools source.

// EXERCISE 3 

//     Extend the previous exercise and add the possibility to remove a language. In fact let's make the app start with no language saved in memory..
//     Example of usage:
//         > URL Message
//         > /DE Hello World in DE not found
//         > /DE/Hallo_Welt DE added with message "Hallo Welt"
//         > /DE Hallo Welt
//         > /DE/remove DE removed
//         > /DE Hello World in DE not found

// EXERCISE 4

//     Extend the previous exercise and add the possibility to update a language.
//     Example of usage:
//         > URL Message
//         > /DE Hello World in DE not found
//         > /DE/HalloWelt DE added with message "HalloWelt"
//         > /DE HalloWelt
//         > /DE/Hallo_Welt Action fobidden, DE is already present in the system
//         > /DE/update/Hallo_Welt DE updated from "HalloWelt" to "Hallo Welt"
//     Note:
//     By completing this exercise you will have your first CRUD app! Congratulations!


