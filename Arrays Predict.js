//predict 1

var arr = [8,6,7,5,3,0,9]
for(var i = 0; i < arr.length; i++){    
    console.log(arr[i]);
}

//prediction: console will read 8, 6, 7, 5, 3, 0, 9.
//console: 8, 6, 7, 5, 3, 0, 9

//predict 2

var arr = [7,3,8,4,2,0,1];
for(var i = 0; i < arr.length; i++){ 
    if(arr[i] % 2 == 0){
        console.log(arr[i]);
    } 
    else{
        console.log("That is odd!");
    }
}

//prediction: console will read That is odd!, That is odd!, 8, 4, 2, 0, That is odd!
//console: That is odd!, That is odd!, 8, 4, 2, 0, That is odd!

//predict 3:

var arr = [1,3,8,-5,0,-2,4,-1];
var newArr = [];
for(var i = 0; i< arr.length; i++){
    if(arr[i] < 0){
        newArr.push(arr[i]);
        arr[i] = arr[i] * -1;
    }
    else if(arr[i] == 0){
        arr[i] = "Zero";
    }
    else{
        arr[i] = arr[i] * -1;
    }
}
console.log(arr);
console.log(newArr);

//prediction: console will read [-1,3,8,-5,0,-2,4,-1], [], [-1,-3,8,-5,0,-2,4,-1],[],[-1,-3,-8,-5,0,-2,4,-1],[],[-1,-3,-8,5,0,-2,4,-1],[-5],[-1,-3,-8,5,Zero,-2,4,-1],[-5],[-1,-3,-8,5,Zero,2,4,-1],[-5,-2],[-1,-3,-8,5,Zero,-2,-4,-1],[-5,-2],[-1,-3,-8,5,Zero,-2,4,1],[-5,-2,-1]
//console:[-1,-3,-8,5,"Zero",2,-4,1], [-5,-2,-1] -- I was wrong. The console didn't read until the loop was completed. 