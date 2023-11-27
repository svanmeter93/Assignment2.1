// create code.js page
function func1()
{
    alert("A function has been created");
}

function playAGame ()
{
    // create variables - this will generate a number 1-6
    var die1 = Math.ceil(Math.random() * 6);
    var die2 = Math.ceil(Math.random() * 6);
    
    // this will deisgnate a spot for the variable to go. It will also create text for the answer
    document.getElementById ("ran1").innerHTML = "1st Random number = " + die1;
    document.getElementById ("ran2").innerHTML = "2nd Random number = " + die2;

    // create a variable that will add the two numbers
    var sum = die1 + die2;
    // designate a spot for var sum to go
    document.getElementById ("sum1").innerHTML = "Total = " + sum;

    
    // create a function that will determine if the user wins or loses
    // the first part of the if function will see if the sum variable equals 7 or 11
    if ((sum == 7) || (sum == 11))
    {
        // if th sum variable does equal 7 or 11 and will tell the user they lost
        document.getElementById ("result").innerHTML = sum + "? Craps - You Lose!";
    }
    // If the two numbers do not equal 7 or 11. 
    // It will try to determine if the 1st and 2nd number are equal
    // and and if the firt number is even. 
    else if ((die1 == die2) && (die1 % 2 == 0))
    {
        // if this part of the function is true. I will generate a "You Won!" message for the user
        document.getElementById ("result").innerHTML = "You Won!";
    }
    // last part of this if function is to create a "you pushed!" message for the user
    else
    {
        document.getElementById ("result").innerHTML = "You Pushed!";
    }
   
}
