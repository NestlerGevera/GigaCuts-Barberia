function validateForm() {
    var email = document.getElementById('email').value;
    var role = document.querySelector('input[name="role"]:checked');

    if (email === "" || !role) {
        alert("Please fill in all fields.");
        return false;
    }

    // Simulating sending a verification code
    alert("A verification code has been sent to your Gmail.");

    // Redirecting user to another page
    window.location.href = "verify.html";

    // Preventing the form from submitting for demonstration purposes
    return false;
}