
//using array.push take the third and fifth elements of arr and push them to a new variable called arr2

// Psych and Gotham

//then console.log arr2


var arr = ['Breaking bad','WestWorld','Psych','Games of Thrones','Gotham','Spartacus','Dexter','Office']

//expected output arr2 = ["Psych", "Gotham"]

arr2=[] 

arr2.push(arr[2])
arr2.push(arr[4])

// Better Way
arr2=[] 

arr2.push(arr[2],arr[4])