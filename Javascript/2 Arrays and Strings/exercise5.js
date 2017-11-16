
//using the splice method remove the first and last element of the below array.
//car and toothbrush
//then console.log the array.
var arr = ['car','soap','banana','tv','toothbrush']
//expected output arr = ['soap','banana','tv']

arr.splice(-1,1)
arr.splice(0,1)

// Another Way

arr.splice(arr.length -1 )

// Another Way

arr.splice(arr.indexOf('toothbrush'),1)


