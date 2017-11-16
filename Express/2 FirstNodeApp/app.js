

var	express = require('express');
var app     = express();
var port    = 3000;

	app.get('/', function(req,res){
		res.send(`<h1>Hello</h1>`)
	});

	app.get('/About', function(req,res){
		res.send(`<h2> I am Berni</h2>`)
	});

	app.get('/About/:person', (req,res)=>{
		var person = req.params.person
		res.send(`<h2> ${person}</h2>`)

	});

	app.listen(port,function(){
		console.log(`listening on port ${port}`)
	}); 

