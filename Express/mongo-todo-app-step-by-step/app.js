var express 		= require('express'),
	//require express
	app				= express(),
	//assigned its executed value to the variable app
	mongoose		= require('mongoose'),
	//require mongoose
	port			=   process.env.PORT || 3000;
	//assigning the var port to 3000 (if running local server)
	

mongoose.connect('mongodb://localhost/todo-step-by-step');
//connect our database, and at the same time create a new collection called todo-step-by-step

app.listen(port,()=>{
	console.log("Server running on port", port)
})
//create a server that runs in port 3000