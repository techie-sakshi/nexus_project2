function validateSignUpForm() {
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;
    var confirmPassword = document.getElementById('passwords').value;

    // Your existing validation logic
    if (username.trim() === '') {
        alert('Please enter a username.');
        return false;
    }

    if (password.trim() === '') {
        alert('Please enter a password.');
        return false;
    }

    if (confirmPassword.trim() === '') {
        alert('Please confirm your password.');
        return false;
    }

    if (password !== confirmPassword) {
        alert('Passwords do not match.');
        return false;
    }

    alert('Signup successful!'); 
    window.location.href = 'log.html';
    return true;
}