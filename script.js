const initialHash = window.location.hash.substring(1);
if (initialHash) {
    localStorage.setItem('currentSection', initialHash);
    showSection(initialHash); // Call showSection directly
} else {
    // If no hash, load 'about' section
    localStorage.setItem('currentSection', 'about');
    showSection('about');
}

function showSection(sectionId) {
    const contentSections = document.querySelectorAll('.content-section');
    const heroSection = document.getElementById('about-hero-section');

    contentSections.forEach(section => {
        section.style.display = 'none';
    });

    const targetSection = document.getElementById(sectionId);
    if (targetSection) {
        targetSection.style.display = 'block';

        if (sectionId === 'about') {
            heroSection.style.display = 'block';
        } else {
            heroSection.style.display = 'none';
        }
        window.scrollTo(0, 0); // Force scroll to top
        if(document.readyState === 'complete'){
            localStorage.setItem('currentSection', sectionId);
            window.location.hash = sectionId;
        }
    } else {
        // Load 'about' section if target section not found
        localStorage.setItem('currentSection', 'about');
        showSection('about');
    }
}

document.addEventListener('DOMContentLoaded', function() {
    const navLinks = document.querySelectorAll('nav ul li a');

    document.addEventListener('click', function(e) {
        if (e.target.matches('nav ul li a')) {
            e.preventDefault();
            const sectionId = e.target.getAttribute('data-section');
            showSection(sectionId);
        } else if (e.target.getAttribute('href') && e.target.getAttribute('href').startsWith("#")) {
            const sectionId = e.target.getAttribute('href').substring(1);
            showSection(sectionId);
        }
    });

    window.addEventListener('beforeunload', function() {
        localStorage.setItem('scrollPosition', window.scrollY);
    });

    // Add hashchange event listener
    window.addEventListener('hashchange', function() {
        const newHash = window.location.hash.substring(1);
        if (newHash) {
            showSection(newHash);
        }
    });
});