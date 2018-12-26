var highestRoll = 0;    //value for highest rolled
var highestWon = 0;     //value for highest won
var totalRolls = 0;     //value for the total amount of rolls

//clean errors
function clearErrors()
{
    for (var loopCounter =0; loopCounter < document.forms["formLuckySeven"].elements.length; loopCounter++)
    {
        if (document.forms["formLuckySeven"].elements[loopCounter].parentElement.className.indexOf("has-") != -1)
        {
            document.forms["formLuckySeven"].elements[loopCounter].parentElement.className = "form-group";
        }
    }
}

//resets the form
function resetForm()
{
    clearErrors();
    document.forms["formLuckySeven"]["startingBetVal"].value = "";
    document.getElementById("results").style.display = "none";
    document.getElementById("submitButton").style.display = "none";
    document.forms["formLuckySeven"]["startingBetVal"].focus();
}

//called by validateItems after the button is pressed
function playLuckySevens()
{
    //sets public var's to 0
    highestRoll = 0;
    highestWon = 0;
    totalRolls = 0;
    
    var currentMoney = document.forms["formLuckySeven"]["startingBetVal"].value;    //gets the amount entered in
    var maxMoneyRoll = 0;
    var rollBeforeBroke = 0;
    var rollAtHighest = 0;
    
    //as long as there is still money
    while(currentMoney > 0)
    {
        var diceTotal = 0;
    
        //gets 2 random numbers from 1 - 6
        diceOne = Math.floor(Math.random() * 6) + 1;
        diceTwo = Math.floor(Math.random() * 6) + 1;
        
        //adds the 2 numbers
        diceTotal = diceOne + diceTwo;
        
        //checks to see if diceTotal is 7
        if(diceTotal == 7)
        {
            //if the total is 7 add 4 to the amount of money the player has
            currentMoney = currentMoney + 4;
            
            //checks to see if the max amount of money the player has is less than the current money
            if(maxMoneyRoll < currentMoney)
            {
                //if so makes maxMoneyRoll equel to the currentMoney
                maxMoneyRoll = maxMoneyRoll + currentMoney;
                
                //also make the rollAtHighes be equel to rollBeforeBroke
                rollAtHighest = rollAtHighest + rollBeforeBroke;
            }
        }
        //if the total is not 7
        else
        {
            //subtract 1 money from the currentMoney
            currentMoney = currentMoney - 1;
        }
        
        //add one to rollBeforeBroke
        rollBeforeBroke++;
    }
    
    //sets the text box to having a value of $0.00 again
    document.getElementById("startingBetVal").value = "$0.00";
    
    //sets the public vars to be the value of the private ones
    highestRoll = highestRoll + rollAtHighest;
    highestWon = highestWon + maxMoneyRoll;
    totalRolls = totalRolls + rollBeforeBroke;
}

//called by the play button
function validateItems() 
{
    //runs clearErrors()
    clearErrors();
    
    var startingBetVal = document.forms["formLuckySeven"]["startingBetVal"].value;
    
    //checks if the starting bet is less then or equel to 0
    if (startingBetVal <= 0)
    {
        //pop up an alert if so
        alert("Please enter a value greater than 0");
        document.forms["formLuckySeven"]["startingBetVal"].parentElement.className = "form-group has-error";
        document.forms["formLuckySeven"]["startingBetVal"].focus();
        return false;
    }
    
    //if everything is ok runs the playLuckySevens
    playLuckySevens();

    //displays text asking to play again,  displays the table with the starting bet, total rolls, highest money won, and the roll the highest money was won on
    document.getElementById("playAgain").innerText = "Please enter a new value to play again."
    document.getElementById("results").style.display = "block";
    document.getElementById("submitButton").innerText = "Play";
    document.getElementById("startingBet").innerText = "$" + Number(startingBetVal) + ".00";
    document.getElementById("rollsBeforeBroke").innerText = Number(totalRolls);
    document.getElementById("HighestWon").innerText = "$" + Number(highestWon) + ".00";
    document.getElementById("rollHighestCount").innerText = Number(highestRoll);
    
    return false;
}