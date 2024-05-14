function convertTo12HourClock(hour) {
    if (hour === 0) {
        return '12AM';
    } else if (hour === 12) {
        return '12PM';
    } else if (hour < 12) {
        return hour + 'AM';
    } else {
        return (hour - 12) + 'PM';
    }
}

// Get user input for hour
let userInput = prompt('Enter the hour in 24-hour format (0-23):');
let userHour = parseInt(userInput);

// Validate the input
if (!isNaN(userHour) && userHour >= 0 && userHour <= 23) {
    let convertedTime = convertTo12HourClock(userHour);
    alert(`Converted time: ${convertedTime}`);
} else {
    alert('Invalid input. Please enter a number between 0 and 23.');
}
