document.getElementById('loginForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    if (username === 'admin' && password === 'admin123') {
        alert('Login successful!');
        window.location.href = 'students.html';
    } else {
        alert('Invalid username or password');
    }
});
