const themeToggle = document.getElementById('themeToggle');
const body = document.body;
const year = document.getElementById('year');

if (year) {
    year.textContent = new Date().getFullYear();
}

if (localStorage.getItem('theme') === 'dark') {
    body.classList.add('dark-theme');
}

if (themeToggle) {
    themeToggle.addEventListener('click', () => {
        body.classList.toggle('dark-theme');

        if (body.classList.contains('dark-theme')) {
            localStorage.setItem('theme', 'dark');
        } else {
            localStorage.setItem('theme', 'light');
        }
    });
}