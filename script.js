document.addEventListener('DOMContentLoaded', function() {
    document.querySelectorAll('header a').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);

            document.querySelectorAll('section').forEach(section => {
                section.classList.add('hidden');
            });

            document.getElementById(targetId).classList.remove('hidden');

            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    });

    // Show the home section by default
    document.getElementById('home').classList.remove('hidden');
});