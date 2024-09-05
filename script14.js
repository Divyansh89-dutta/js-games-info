const sunIcon = document.getElementById('sunIcon');
const moonIcon = document.getElementById('moonIcon');
const body = document.body;

document.getElementById('toggleMode').addEventListener('click', () => {
    if (body.classList.contains('dark-mode')) {
        body.classList.remove('dark-mode');
        body.classList.add('light-mode');
        sunIcon.classList.add('hidden');
        moonIcon.classList.remove('hidden');
    } else {
        body.classList.remove('light-mode');
        body.classList.add('dark-mode');
        moonIcon.classList.add('hidden');
        sunIcon.classList.remove('hidden');
    }
});
