// function validateForm() {
//     var email = document.getElementById('email').value;
//     var password = document.getElementById('pword').value;

//     if (email === "" || password === "") {
//         alert("Please fill in all fields.");
//         return false;
//     }

//     // Simulating successful login for demonstration
//     alert("Login successful");

//     // Redirecting user to another page
//     window.location.href = "index.html";

//     return false; // Returning false to prevent the form from submitting
// }

function togglePassword(fieldId) {
    var field = document.getElementById(fieldId);
    var type = field.getAttribute("type") === "password" ? "text" : "password";
    field.setAttribute("type", type);
}

// Existing validateForm function
function validateForm() {
    var email = document.getElementById('email').value;
    var password = document.getElementById('pword').value;

    if (email === "" || password === "") {
        alert("Please fill in all fields.");
        return false;
    }

    // Simulating successful login for demonstration
    alert("Login successful");

    // Redirecting user to another page
    window.location.href = "index.html";

    return false; // Returning false to prevent the form from submitting
}
