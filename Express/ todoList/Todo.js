
var mongoose  = require('mongoose'),
	//require mongoose
	  Schema    = mongoose.Schema,
	//assign the schema propreties to the variable schema
	  TodosSchema = new Schema({
		  todo:{
		  	type:String, unique:true
		   }
	});

//create the todoSchema with todos, which are strings and are unique
    var Todos = mongoose.model("Todos", TodosSchema)
//assign the schema to a variable called Todos.
    module.exports = Todos
//export Todos



//var mongoose = require('mongoose'),
////Require Mongoose
//Schema = mongoose.Schema,
//
//TodoSchema = new Schema({
//    todo:{
//        type:String, 
//        unique:true}
//});
//
//var Todos = mongoose.model('Todos', TodoSchema)
//
//module.exports = Todos