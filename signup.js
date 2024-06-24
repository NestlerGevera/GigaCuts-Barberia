// function validateForm() {
//     // Get the values of the input fields
//     var email = document.getElementById('email').value;
//     var reemail = document.getElementById('reemail').value;
//     var password = document.getElementById('pword').value;
//     var repassword = document.getElementById('repword').value;

//     // Check if any field is empty
//     if (email === "" || reemail === "" || password === "" || repassword === "") {
//         alert("Please fill in all fields.");
//         return false;
//     }

//     // Check if the email and re-entered email match
//     if (email !== reemail) {
//         alert("Email and Re-entered Email do not match. They should be the same.");
//         return false; // Prevent form submission
//     }

//     // Check if the password and re-entered password match
//     if (password !== repassword) {
//         alert("Password and Re-entered Password do not match. They should be the same.");
//         return false; // Prevent form submission
//     }

//     // If all fields are valid, alert the user and redirect to login.html
//     alert("Sign up complete. Redirecting to login page.");
//     window.location.href = "login.html";
//     return false; // Prevent default form submission for redirect to take place
// }

function togglePassword(fieldId) {
    var field = document.getElementById(fieldId);
    var type = field.getAttribute("type") === "password" ? "text" : "password";
    field.setAttribute("type", type);
}

// Existing validateForm function
function validateForm() {
    var email = document.getElementById('email').value;
    var reemail = document.getElementById('reemail').value;
    var password = document.getElementById('pword').value;
    var repassword = document.getElementById('repword').value;

    if (email === "" || reemail === "" || password === "" || repassword === "") {
        alert("Please fill in all fields.");
        return false;
    }

    if (email !== reemail) {
        alert("Email and Re-entered Email do not match. They should be the same.");
        return false;
    }

    if (password !== repassword) {
        alert("Password and Re-entered Password do not match. They should be the same.");
        return false;
    }

    alert("Sign up complete. Redirecting to login page.");
    window.location.href = "login.html";
    return false;
}

