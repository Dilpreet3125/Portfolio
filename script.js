/* === Toggle mobile navbar === */
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('fa-xmark'); // Changes hamburger to 'X'
    navbar.classList.toggle('active');
};


/* === Typing animation for role === */
const typed = new Typed('.multiple-text', {
    strings: ['Full Stack Developer', 'Python Developer', 'ML Enthusiast'],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true
});


/* === Scroll-spy and Sticky Header === */
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');
let header = document.querySelector('.header');

window.onscroll = () => {
    // --- Sticky Header ---
    header.classList.add('sticky'); 

    // --- Active Nav Link on Scroll ---
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height) {
            // Remove active class from all links
            navLinks.forEach(links => {
                links.classList.remove('active');
            });
            // Add active class to the matching link
            document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
        };
    });
    
    // --- Close Mobile Nav on Scroll or Link Click ---
    menuIcon.classList.remove('fa-xmark');
    navbar.classList.remove('active');
};


/* ===============================================
    NEW: THEME TOGGLE LOGIC
===============================================
*/
let themeIcon = document.querySelector('#theme-toggle-icon');

// 1. Check for saved theme on page load
if (localStorage.getItem('theme') === 'dark') {
    document.body.classList.add('dark-theme');
    themeIcon.classList.add('fa-sun'); // Show sun icon
} else {
    themeIcon.classList.add('fa-moon'); // Show moon icon
}

// 2. Add click listener for the toggle
themeIcon.onclick = () => {
    // Toggle icon
    if (themeIcon.classList.contains('fa-moon')) {
        themeIcon.classList.remove('fa-moon');
        themeIcon.classList.add('fa-sun');
    } else {
        themeIcon.classList.remove('fa-sun');
        themeIcon.classList.add('fa-moon');
    }
    
    // Toggle theme class on body
    document.body.classList.toggle('dark-theme');
    
    // 3. Save preference to local storage
    if(document.body.classList.contains('dark-theme')) {
        localStorage.setItem('theme', 'dark');
    } else {
        localStorage.setItem('theme', 'light');
    }
};

/* ===============================================
    NEW: CLEAR FORM ON "BACK" BUTTON
===============================================
*/
window.addEventListener('pageshow', function (event) {
    // Check if the page was loaded from the back/forward cache
    if (event.persisted) {
        // Find the form and reset it
        let contactForm = document.querySelector('.contact-form');
        if (contactForm) {
            contactForm.reset();
        }
    }
});