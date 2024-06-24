function validateForm() {
    var verificationCode = document.getElementById('verification-code').value;

    if (verificationCode !== 'code123') {
        alert("The verification code is not correct.");
        return false; // Prevent form submission
    }

    // If the verification code is correct
    alert("Verification successful!");

    // Redirecting user to another page
    window.location.href = "index.html";

    return false; // Allow form submission
}