//Array Algos #1

var array=[6,3,5,1,2,4];
var sum=0
for (let i = 0; i < array.length; i++) {
    sum+=arr[i]
    console.log('Num:', arr[i], 'Sum:', sum)
}

//console: Num: 6 Sum: 6, Num: 3 Sum: 9, Num: 5 Sum: 14, Num: 1 Sum: 15, Num: 2 Sum: 17, Num: 4 Sum: 21

//Array Algos #2

var array=[6,3,5,1,2,4];
for (let i = 0; i < array.length; i++) {
    array[i]=array[i]*i
}
console.log(array)

//console: [0,3,10,3,8,20]