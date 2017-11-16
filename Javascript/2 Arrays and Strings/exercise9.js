
//using array.concat create a new array called arr2 which takes all properties from arr
// then remove the last one using splice.
//last thing console.log arr2

var arr = ['Breaking bad','WestWorld','Psych','Games of Thrones','Gotham','Spartacus','Dexter','Office']

//expected output arr2 = ['Breaking bad','WestWorld','Psych','Games of Thrones','Gotham','Spartacus','Dexter']

var arr2 = arr.concat()

arr2.splice(-1,1)

