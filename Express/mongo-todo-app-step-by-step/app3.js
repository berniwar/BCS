var express 		= require('express'),
	//require express
	app				= express(),
	//assigned its executed value to the variable app
	mongoose		= require('mongoose'),
	//require mongoose
	port			=   process.env.PORT || 3000,
	//assigning the var port to 3000 (if running local server)
	Todos			=  require('./app2.js');
	//require the Todos model that we created
mongoose.connect('mongodb://localhost/todo-step-by-step');
//connect our database, and at the same time create a new collection called todo-step-by-step


//create home page to display all todos
app.get('/home',(req,res)=>{
	res.send(`<h1>Welcome Home</h1>`)
})

//add your first todo!

app.post('/home/add/:todo',(req,res)=>{
	var todo = req.params.todo;
	//assign req.params.todo to a variable called todo
	Todos.create(todo,(err, done)=>{
		//add a new item to our model Todos
		//add a callback, first argument is always an error
		//check if there is an error and return console.log
		//if no error console.log success and the new created todo
		if(err) return console.log('err', err)
		console.log('succesfully saved', done)
	})
	res.redirect('/todos')
	//redirect the user to the route '/todos' which we still need to create oops!
	
})


app.listen(port,()=>{
	console.log("Server running on port", port)
})
//create a server that runs in port 3000