
//take the original string which will contain some upper case characters, then create a new variable which needs to contain all the caracter of the original string but all have to be lowercase, once you are done console.log the new variable

//Use
//a loop
//push
//join

var original =`Antonello LIKEs PlaYing GaMeS`
var newOriginal = []

for (var i=0; i < original.length; i++) {
  newOriginal.push(original[i].toLowerCase())
}

newOriginal=newOriginal.join('')
"antonello likes playing games"