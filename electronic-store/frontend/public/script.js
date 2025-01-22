document.addEventListener('DOMContentLoaded', function () {
    const themeToggleButton = document.getElementById('theme-toggle');
    const body = document.body;
    const header = document.querySelector('header');
    const navLinks = document.querySelectorAll('.nav a');
    const themeSwitchButton = document.querySelector('.theme-switch button');

    themeToggleButton.addEventListener('click', function () {
        if (body.classList.contains('light-mode')) {
            body.classList.remove('light-mode');
            header.classList.remove('light-mode');
            navLinks.forEach(link => link.classList.remove('light-mode'));
            themeSwitchButton.classList.remove('light-mode');
            themeToggleButton.textContent = 'Switch to Light Mode';
        } else {
            body.classList.add('light-mode');
            header.classList.add('light-mode');
            navLinks.forEach(link => link.classList.add('light-mode'));
            themeSwitchButton.classList.add('light-mode');
            themeToggleButton.textContent = 'Switch to Dark Mode';
        }
    });
});