function func1()
{
    alert("A function has been created");
}

function playAGame ()
{
    var die1 = Math.ceil(Math.random() * 6);
    var die2 = Math.ceil(Math.random() * 6);
 
    document.getElementById ("ran1").innerHTML = "1st Random number = " + die1;
    document.getElementById ("ran2").innerHTML = "2nd Random number = " + die2;

    var sum = die1 + die2;
    document.getElementById ("sum1").innerHTML = "Total = " + sum;

    
    // How do I do say or/and in a function?
    if ((sum == 7) || (sum == 11))
    {
        document.getElementById ("result").innerHTML = sum + "? Craps - You Lose!";
    }
    else if ((die1 = die2) && (die1 % 2))
    {
        document.getElementById ("result").innerHTML = "You Won!";
    }
    else
    {
        document.getElementById ("result").innerHTML = "You Pushed!";
    }
    // else()
    // {

    // }
}
// How to refresh page when page is repushed?