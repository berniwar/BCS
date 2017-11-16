
var express 		= require('express'),
	//require express
	app				= express(),
	//assigned its executed value to the variable app
	mongoose		= require('mongoose'),
	//require mongoose
	port			=   process.env.PORT || 3000,
	//assigning the var port to 3000 (if running local server)
	Todos			=  require('./Todo.js');
	//require the Todos model that we created
mongoose.connect('mongodb://localhost/todo-step-by-step');
//connect our database, and at the same time create a new collection called todo-step-by-step


//Create home page to display all todos
    app.get('/home',(req,res)=>{
	   res.send(`<h1>Welcome Home</h1>`)
})

//Add a Todo item

app.post('/home/add/:todo',(req,res)=>{
	var todo = {
		todo:req.params.todo
	}
	console.log(todo)
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

//Delete Todo item
    app.post('/home/delete/:todo',(req,res)=>{
        var todo = req.params.todo; 
        Todos.remove({todo:req.params.todo},(err,done)=>{
            if (err) return console.log('err',err)
            console.log('successfully removed',done)
        })
              res.end()
    })

//Update Todo item
            app.post('/home/update/:todo/:newtodo',(req,res)=>{
                var todo = {
                    todo:req.params.todo
                }
                //get the value from the url with req.params
                var newtodo = req.params.newtodo

                //get the value from the url with req.params

                Todos.find({},(err, foundIt)=>{
                    //find all todos
                    if(err || (!foundIt)){
                        //return if there is an error or nothing is found
                        return console.log("nothing found!", err)
                    }else{
                        //otherwise...
                        foundIt.map((item)=>{
                            //loop through the array that we get back from mongoose...
                            if(item.todo == todo.todo){
                                //check if any of them matches our req.params.todo
                                item.todo = newtodo
                                //if it does replace it with the new one!
                                item.save((err, success)=>{
            //save our updated item, if we don't all changes will be lost!!!!
                                    if(err) return console.log('err',err)
                                    else console.log("Yeah updated", success)
                                })

                            }else{
                                 console.log("no matches found!!!")
                            }
                        })
                    }
                })

            })

app.get('/home/todos',(req,res)=>{
console.log('here!')

    Todos.find({},(err,done)=>{
if(err) return console.log('err', err)
res.send(done)}

)})              

app.listen(port,()=>{
	console.log("Server running on port", port)
})
//    console.log('Server running on port', port) 
//})