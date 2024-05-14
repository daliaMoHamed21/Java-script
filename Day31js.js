function calculation() {
  var firstNumber = parseFloat(prompt("Enter First Number"));
  var operation = prompt("Enter the operation (sum, subtract, multiply, divide):");
  var secondNumber = parseFloat(prompt("Enter Second Number"));
  var result;

  switch (operation.toLowerCase()) {
    case 'sum':
        result = firstNumber + secondNumber;
        break;
    case 'subtract':
        result = firstNumber - secondNumber;
        break;
    case 'multiply':
        result = firstNumber * secondNumber;
        break;
    case 'divide':
        if (secondNumber === 0) {
            result = "Cannot divide by zero!";
        } else {
            result = firstNumber / secondNumber;
        }
        break;
    default:
        result = "Invalid operation!";
        break;
}

alert("Result: " + result);
}
calculation();
  
