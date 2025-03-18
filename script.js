document.addEventListener('DOMContentLoaded', function() {
    const navLinks = document.querySelectorAll('nav ul li a');
    const contentSections = document.querySelectorAll('.content-section');
    const heroSection = document.getElementById('about-hero-section'); // Get the hero section

    function showSection(sectionId) {
        contentSections.forEach(section => {
            section.style.display = 'none';
        });

        document.getElementById(sectionId).style.display = 'block';

        // Show/hide hero based on sectionId
        if (sectionId === 'about') {
            heroSection.style.display = 'block';
        } else {
            heroSection.style.display = 'none';
        }
    }

    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const sectionId = this.getAttribute('data-section');
            showSection(sectionId);
        });
    });

    // Show the "About Us" section and hero on page load
    showSection('about');
});