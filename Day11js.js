//first name
var firstName=prompt("Enter your first Name");
//last name
var lastName=prompt("Enter your last name ");
//full name
var fullName=`${firstName} ${lastName}`;
confirm(`Is your ${fullName} ?`)

//Birth day
// Ask the user to enter their birth year
const birthYear = prompt("Please enter your birth year:");

// Convert birthYear to a number
const birthYearNumber = parseInt(birthYear);

// Calculate the age
const currentYear = new Date().getFullYear();
const age = currentYear - birthYearNumber;

//Welcome message 
alert(`Welcome ${fullName}! You are ${age} years old.`)