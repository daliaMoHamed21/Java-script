function login() {
    var userName = prompt("Enter your username:");
    var password, message;

    if (userName !== null) {
        password = prompt("Enter your password:");

        if (password !== null) {
            if (userName === "admin" && password === "421$$") {
                message = "Welcome Login successful.";

            } else if (userName !== "admin" && password !== "421$$") {
                message = "Both username and password are incorrect.";

            } else if (userName !== "admin") {
                message = "Username is incorrect.";
                
            } else {
                message = "Password is incorrect.";
            }
        } else {
            message = "Login canceled (password).";
        }
    } else {
        message = "Login canceled (username).";
    }

    if (message) {
        alert(message);
    }
}

login();
