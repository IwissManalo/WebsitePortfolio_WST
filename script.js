// Smooth scrolling functionality is handled by the CSS property `scroll-behavior: smooth;`
// No JavaScript is needed for smooth scrolling in this case, but you could use this snippet for custom scroll behavior if required.

// Example if you'd like to add custom scroll effects:

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});
