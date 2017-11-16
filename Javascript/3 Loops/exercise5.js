
//write a forEach loop that loops through this example array and checks if the type of each element is a string, 
//if it is it prints true, 
//and if it isn't it prints out false, 
//at the same time it needs to print out the indexes of all iterations so that we can see which of them returned true!

var arr = ['banana',['hello'],12,true]

arr.forEach(function(ele, i) {
        console.log(typeof ele == 'string', i)


// TING Version

var arr = ['banana',['hello'],12,true]

arr.forEach(function(ele, i) {
        if (ele.constuctor == String) {
                console.log(true, i)
        } else {
                console.log(false, i)
        }