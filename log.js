document.addEventListener('DOMContentLoaded', function () {
    const loginForm = document.getElementById('loginForm');
    const usernameInput = document.getElementById('username');
    const passwordInput = document.getElementById('password');
    loginForm.addEventListener('submit', function (event) {
        if (usernameInput.value.trim() === '' || passwordInput.value.trim() === '') {
            alert('Please enter both username and password.');
            event.preventDefault(); 
        }
    });
});

