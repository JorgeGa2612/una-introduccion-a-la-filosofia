document.getElementById('loginForm').onsubmit = function(event) {
    event.preventDefault();
    // Handle login logic here
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;
    console.log('User logged in with email:', email, 'and password:', password);
};

document.getElementById('register').onclick = function() {
    // Handle register logic here
    console.log('Register button clicked');
};

