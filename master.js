document.querySelectorAll('.toggle-link').forEach(link => {
    link.addEventListener('click', function(event) {
        event.preventDefault();
        const target = this.getAttribute('data-toggle');
        if (target === 'signin') {
            document.getElementById('login-section').style.display = 'none';
            document.getElementById('signin-section').style.display = 'block';
        } else {
            document.getElementById('login-section').style.display = 'block';
            document.getElementById('signin-section').style.display = 'none';
        }
    });
});