let userRole = "Enrolled Member";
let accessMessage;

if (userRole === "Employee") {
    accessMessage = "Access granted to Dietary Services.";

} else if (userRole === "Enrolled Member") {
    accessMessage = "Access granted to Dietary Services and one-on-one interaction with a dietician.";

} else if (userRole === "Subscriber") {
    accessMessage = "Partial access granted to Dietary Services only.";

} else if (userRole === "Non-Subscriber") {
    accessMessage = "Please enroll or subscribe first to avail this facility.";

} else {
    accessMessage = "Invalid user role.";
}

console.log("User Role:", userRole);
console.log("Access Message:", accessMessage);

let isLoggedIn = true;
let loginMessage;

if (isLoggedIn) {
    loginMessage = "User is successfully logged in.";
} else {
    loginMessage = "Please log in first.";
}

console.log("Login Status:", loginMessage);

let userCategory;

switch (userRole) {
    case "Employee":
        userCategory = "Employee Access";
        break;

    case "Enrolled Member":
        userCategory = "Premium Dietary Member";
        break;

    case "Subscriber":
        userCategory = "Basic Subscriber";
        break;

    case "Non-Subscriber":
        userCategory = "Guest User";
        break;

    default:
        userCategory = "Unknown Category";
}

console.log("User Category:", userCategory);

let isAuthorized = true;

let authorizationStatus = isAuthorized
    ? "Authorized User"
    : "Unauthorized User";

console.log("Authorization Status:", authorizationStatus);