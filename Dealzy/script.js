document.addEventListener('DOMContentLoaded', function () {

    // Preloader
    document.getElementById('preloader').style.display = 'flex';
    window.onload = function() {
        document.getElementById('preloader').style.display = 'none';
    };

    // Sticky Header
    window.addEventListener('scroll', function() {
        const header = document.querySelector('.header');
        header.classList.toggle('sticky', window.scrollY > 50);
    });

    // Back to Top Button
    const backToTopBtn = document.getElementById("backToTopBtn");
    window.onscroll = function() {
        if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
            backToTopBtn.style.display = "block";
        } else {
            backToTopBtn.style.display = "none";
        }
    };

    // Dark Mode Toggle
    const body = document.body;
    const darkModeToggle = document.getElementById('darkModeToggle');

    darkModeToggle.addEventListener('click', function() {
        body.classList.toggle('dark-mode');
        // You might also want to save the user's preference to localStorage
    });

    // Add this toggle inside your nav or a suitable place in your HTML
    // <button id="darkModeToggle">Toggle Dark Mode</button>

});

function scrollToTop() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

// Navigation Toggle
function toggleNav() {
    const navLinks = document.getElementById('navLinks');
    navLinks.classList.toggle('active');
}
