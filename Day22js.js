while (true) {
    var userInput = prompt("Enter a string:");

    // Check if user clicked Cancel or entered an empty string
    if (userInput === null || userInput.trim() === "") {
        break; 
    }

    // Convert the string to lowercase to make the comparison case-insensitive
    let lowercaseString = userInput.toLowerCase();

    // Initialize counts for each vowel to 0
    let countA = 0, countE = 0, countI = 0, countO = 0, countU = 0;

    // Loop through each character in the string and count the vowels
    for (let i = 0; i < lowercaseString.length; i++) {
        switch (lowercaseString[i]) {
            case 'a':
                countA++;
                break;
            case 'e':
                countE++;
                break;
            case 'i':
                countI++;
                break;
            case 'o':
                countO++;
                break;
            case 'u':
                countU++;
                break;
            default:
                continue;
        }
    }

    // Display the counts of each char
    console.log(`a=${countA} e=${countE} i=${countI} o=${countO} u=${countU}`);
    alert(`a=${countA} e=${countE} i=${countI} o=${countO} u=${countU}`)
}
