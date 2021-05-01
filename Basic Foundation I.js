//#1 - FUNCTION Get 1 to 255

function buildArray(){
    var arr = []
    for(var i = 1; i <= 255; i++){    
        arr.push(i);
    }
        console.log(arr);
}
console.log(buildArray(i));

//#2 - Get sum of evens to 1000

function sumArray(){
    var sum=0;
    for(let num=0; num<=1000; num++){
        if (num%2==0) {
            sum+=num
        } 
    }
        console.log(sum)
}
console.log(sumArray());

//#3 - Get sum of odds to 5000

function sumOddsArray() {
    var sum=0;
    for(let num=0; num<=5000; num++){
        if (num%2==1) {
            sum+=num
        } 
    }
        console.log(sum)
}
console.log(sumOddsArray());

// #4 - Get sum of array values

function iterate(numArr){
    var sum = 0;
    for (var i = 0; i < numArr.length; i++){
        sum = sum + numArr[i];
    }
    return sum;
}
console.log(iterate([1,5,7,8]));

// #5 - Find max in array

function findMax(numArr){
    var max = numArr[0]; 
    for (var i = 0; i < numArr.length; i++){ 
        if (numArr[i] > max){
            max = numArr[i];
        }
    }
    return max;
}
console.log(findMax([3,35,-16,2]));

//#6 find average in array through function

function findAverage(numArr) {
    var avg = 0;
    var sum=0;
    for (let i = 0; i < numArr.length; i++){
        sum = sum + numArr[i];
    }
    avg = sum / numArr.length;
    return avg;
}
console.log(findAverage([2,4,6,8,10]));

//#7 - Create array of all odds from 1-50

function oddArray() {
    var array=[];
    for (let i = 1; i < 50; i+=2) {
        array.push(i);
    }
    return array;
}
console.log(oddArray());


// #8 - Array of greater values than Y

function greaterThanArr(arr, y){
    var counter = 0;
    for (var i = 0; i < arr.length; i++){
        if (arr[i] > y){
            counter++;
        }
    }
    return counter;
}
console.log(greaterThanArr([1,5,6,9], 5));

// #9 - Array of squared values

function squaredValues(arr){
    for (var i = 0; i < arr.length; i++){
        arr[i] = arr[i]*arr[i];
    }
}
squaredValues([6,3,15,9]);

// #10 - Array with zeros for negatives 

function swapNegatives(arr){
    for (var i = 0; i < arr.length; i++){
        if (arr[i] < 0){
            arr[i] = 0;
        }
    }
    console.log(arr);
}
swapNegatives([-5,2,-9,3,1]);

// #11 - Min/Max/Average of array

function maxMinAvg(arr){
    var sum = 0;
    var max = arr[0];
    var min = arr[0];
    for (var i = 0; i < arr.length; i++){
        sum = sum + arr[i];
        if (arr[i] > max){
            max = arr[i];
        }
        else if (arr[i] < min){
            min = arr[i];
        }
    }
    var newArr = [];
    newArr.push(max);
    newArr.push(min);
    var avg = sum/arr.length
    newArr.push(avg);
    return newArr;
}
console.log(maxMinAvg([2,1,5,10]));

// #12 - Swap 1st and last value in array

function swap(arr){
    var temp = arr[arr.length-1];
    arr[arr.length-1] = arr[0];
    arr[0] = temp;
}
var tester = [1,4,10,-2];
swap(tester);
console.log(tester);

// #13 - Replace negative with 'Dojo'

function dojoSwap(arr) {
    for (var i = 0; i < arr.length; i++){
            if (arr[i] < 0){
                arr[i] = "Dojo";
            }
        }
        console.log(arr);
    }
    dojoSwap([-15,0,6,-7,8,-9]);