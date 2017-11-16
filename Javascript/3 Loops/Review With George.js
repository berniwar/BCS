/* "Write a program that prints the numbers from 1 to 100.
But for multiples of three print “Fizz” instead of the number and for the multiples of five print “Buzz”.
For numbers which are multiples of both three and five print “FizzBuzz”." */
//1. loop through 1 to 100
//2. check if a number divisble by 3
//3. check for 5
//4. check for 5 AND 3


for(ele=1;ele <= 100;ele++){

	if (ele%3==0 && ele%5==0 {
		console.log('Fizzbuzz')
	}

	else if (ele%3==0){
		console.log('Fizz')
	}
	
	else if (ele%5==0){
		console.log('Buzz')
	} 

	else{
		console.log(ele))
	}

}


// function calc (a,b,c){

// 	if(c=="+"){
// 		return a+b;
// 	} 
// 		if (c=="-"){
// 		return a-b;
// 	} 
// 		if (c=="*"){
// 		return a*b;
// 	} 
// 		if (c=="/"){
// 		return a/b;
// 	}
// 	 else {
// 		console.log(`Your input is not valid`)
// 	}}

// calc (1,10,"+")

// function numberToString(a){
// 	return a = a.toString()
// }
// numberToString(10)

// function numberToString(a){
// 	return ''+ a
// }
// numberToString(10)

// function numberToString(a){
// 	return ''+ a
// }
// numberToString(10)

// function numberToString(a){
// 	return `${a}`
// }
// numberToString(10)


// function noIva(a){
//   return a/1.21
// }

// noIva(121)

// function oppositeNumber(a){
// 	return a *- 1
// }

// oppositeNumber(10)

// write a function which takes two argument: name and the language and it
returns a personalized greeting in the selected language 
If no language is provided it defaults to English. 

var language={
	english: 'Welcome',
	czech: 'Vitejte',
	danish: 'Velkomst',
	dutch: 'Welkom',
	estonian: 'Tere tulemast',
	finnish: 'Tervetuloa',
	flemish: 'Welgekomen',
	french: 'Bienvenue',
	german: 'Willkommen',
	irish: 'Failte',
	italian: 'Benvenuto',
	latvian: 'Gaidits',
	lithuanian: 'Laukiamas',
	polish: 'Witamy',
	spanish: 'Bienvenido',
	swedish: 'Valkommen',
	welsh: 'Croeso'
}


print greeting and name
with language being inside the object. 
check if language is not provided default to english
if language is provided but not in the list, default to english. 

		function greeting(name,language){

			var key = Object.keys(language)
			var value = Object.values(language)

			var languageObject={
			english: 'Welcome',
			czech: 'Vitejte',
			danish: 'Velkomst',
			dutch: 'Welkom',
			estonian: 'Tere tulemast',
			finnish: 'Tervetuloa',
			flemish: 'Welgekomen',
			french: 'Bienvenue',
			german: 'Willkommen',
			irish: 'Failte',
			italian: 'Benvenuto',
			latvian: 'Gaidits',
			lithuanian: 'Laukiamas',
			polish: 'Witamy',
			spanish: 'Bienvenido',
			swedish: 'Valkommen',
			welsh: 'Croeso'
		}
				for (var key in languageObject){
					if (key == language){
						return name , value
				} else {
					return `something went wrong`
				}
			}}

		greeting("bob", "spanish")

// Reworked Another Way

	function greeting(name,language){
	
	var languageObject = {
			english: 'Welcome',
			czech: 'Vitejte',
			danish: 'Velkomst',
			dutch: 'Welkom',
			estonian: 'Tere tulemast',
			finnish: 'Tervetuloa',
			flemish: 'Welgekomen',
			french: 'Bienvenue',
			german: 'Willkommen',
			irish: 'Failte',
			italian: 'Benvenuto',
			latvian: 'Gaidits',
			lithuanian: 'Laukiamas',
			polish: 'Witamy',
			spanish: 'Bienvenido',
			swedish: 'Valkommen',
			welsh: 'Croeso'
		}
	// print greeting and name

		if (language == undefined || languageObject[language] == undefined ){

		return  languageObject.english + name

		}
			// with language being inside the object. 
		else 
		{

			return (languageObject[language] +" "+ name)
		}}

// check if language is not provided default to english

// Gives me the key


// Gives me the value 

languageObject[language]

}
	// if language is provided but not in the list, default to english. 

		greeting("bob", "spanish")

}










































