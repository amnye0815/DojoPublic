Predict 1:

for(var num = 0; num < 15; num++){
    console.log(num);
}

    My prediction:  I believe the console will count from 0 to 14 by 1's.
    Console: Runs numbers 0-14. 

Predict 2:

for(var i = 1; i < 10; i+=2){
    if(i % 3 == 0){
        console.log(i);
    }
}

    My prediction: I believe the console will show 3 and then 9. 
    Console: Runs numbers 3 and 9. 

Predict 3:

for(var j = 1; j <= 15; j++){
    if(j % 2 == 0){
        j+=2;
    }
    else if(j % 3 == 0){
        j++;
    }
    console.log(j);
}

    My predicition: Console will show 4,8,10,14,16.
    Console: I was wrong. The console showed: 1, 4, 5, 8, 10, 11, 14, 16. 
    This is because I didn't realize that console.log was outside of the brackets for the if else/if statements. 