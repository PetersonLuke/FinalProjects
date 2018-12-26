/*
    Name: Luke Peterson
    Date Created: 12/21/2018
    Most recent revision: 12/21/2018
*/

function validateForm()
{
    var name = document.forms["contactForm"]["name"].value;
    var email = document.forms["contactForm"]["email"].value;
    var phone = document.forms["contactForm"]["phone"].value;
    var monday = document.getElementById("monday").checked;
    var tuesday = document.getElementById("tuesday").checked;
    var wednesday = document.getElementById("wednesday").checked;
    var thursday = document.getElementById("thursday").checked;
    var friday = document.getElementById("friday").checked;
    var boolCheckBox = true;
    
    
    if (name == "")
    {
        alert("Please Enter your name.");
        return false;
    }
    
    if(email == "")
    {
        alert("Please Enter an Email adress.");
        return false;
    }
    
    if(phone == "")
    {
        alert("Please Enter a phone number.");
        return false;
    }
    
    switch (boolCheckBox)
    {
        case monday == boolCheckBox:
            break;
        
        case tuesday == boolCheckBox:
            break;
        
        case wednesday == boolCheckBox:
            break;
            
        case thursday == boolCheckBox:
            break;
            
        case friday == boolCheckBox:
            break;
            
        default:
        alert("Please pick some contact days.");
        return false;
    }
    
    alert("Thank you for your infomation!  We will contact you soon.")
    return true;
}