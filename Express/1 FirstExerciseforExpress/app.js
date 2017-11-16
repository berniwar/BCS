
// Exercise 1
        var express = require(`express`);
        var app    = express();
        var port   = 3001;

        var lang   ={

        	NL : `Hallo Wereld`,
            HI : `नमस्ते दुनिया`,
            FR :`Bonjour le monde`,
            ES :`Hola Mundo`,
            IT :`Ciao Mondo`,
            CH :`你好，世界`,
            JP :`こんにちは世界`,
            AR :`مرحبا بالعالم`,
            EN :`Hello world`,
            NL : `Hello world`, 
            HI : `नमस्ते दुनिया`,
        }
        app.get('/',(req,res)=>{
        	res.send(`${lang['EN']}`)
        })

        app.get('/home/:lang/:name/about',(req,res)=>{ 
        	var key = req.params.lang
            // var x   = req.params.name
        	if(key in lang == false){
        		key = 'EN'
        	}
        	res.send(`${lang[key]}`)
        })

        app.listen(port, ()=>{
        	console.log(`Server running on port ${port}`)
        })
// Exercise 2
        //Add a new route
            app.get ('/home/:newLang/:newPhrase', function (req, res) {
            
            var newLang = req.params.newLang
            var newPhrase = req.params.newPhrase.split('_').join(' ')
             
        //Add a new language 
            if (!(newLang in lang)) {
                lang[newLang] = newPhrase 
                res.send('New language added, thanks!')
        //Selete a exsiting language
            }else if (newLang in lang && req.params.newPhrase == 'remove'){
                res.send('Language deleted!')
                delete lang[newLang]
        //Update a language
            }else if (newLang in lang && newPhrase !== lang[newLang]){
                res.send('Language updated!')
                lang[newLang] = newPhrase
            }
        })
            