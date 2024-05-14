var firstNumber = prompt("Enter the first number:");
var secondNumber = prompt("Enter the second number:");
var thirdNumber = prompt("Enter the third number:");

// Convert user inputs to numbers
firstNumber = parseFloat(firstNumber);
secondNumber = parseFloat(secondNumber);
thirdNumber = parseFloat(thirdNumber);

if (!isNaN(firstNumber) && !isNaN(secondNumber) && !isNaN(thirdNumber)) {
    var largestNumber = Math.max(firstNumber, secondNumber, thirdNumber);
    console.log("The largest number is: " + largestNumber);
} else {
    console.log("Invalid input. Please enter valid numbers.");
    alert("Invalid input. Please enter valid numbers.")
}
