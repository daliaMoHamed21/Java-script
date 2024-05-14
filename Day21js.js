while(true){
    var userInput=prompt("Enter your age please");

    if (userInput ===null ||isNaN(userInput)){
        break;
    }
    let age =parseInt(userInput);
    if (age >=0){
        if (age >=1 && age<=10){
            alert("You are a child.");
        } else if (age >= 11 && age <= 18) {
            alert("You are a teenager.");
        } else if (age >= 19 && age <= 50) {
            alert("You are a grown up.");
        } else {
            alert("You are old.");
        }
    } else {
        alert("Please enter a positive number for your age.");
    }

}

 
