//Predict #1

function greeting(){
        return "Hello";
        console.log("World");
    }
    var word = greeting();
    console.log(word);

//prediction: Hello World
//console: I was wrong. It was just "Hello". I think this is because return is before console.log within the function. 

//Predict #2:

function add(num1, num2){
        console.log("Summing Numbers!");
        console.log("num1 is: " + num1);
        console.log("num2 is: " + num2);
        var sum = num1 + num2;
        return sum;
    }
    var result1 = add(3,5);
    var result2 = add(4,7);
    console.log(result1);
    console.log(result2);

//prediction: Summing Numbers!, num1 is: 3, num2 is: 5, 8, Summing Numbers!, num1 is: 4, num2 is: 7, 11.
//console: I was wrong. It said "Summing Numbers!, num1 is: 3, num2 is: 5, Summing Numbers!, num1 is: 4, num2 is: 7, 
// 8, 11". I'm wondering if return comes last if it's last in the function or if I'm just not understanding the
// direction of a loop within a function. 

//Predict #3:

function highFive(num){
        for(var i=0; i<num; i++){
            if(i == 5){
                console.log("High Five!");
            }
            else{
                console.log(i);
            }
        }
    }

//prediction: I think the console will be blank because the function was never called. 
//console: I was correct!