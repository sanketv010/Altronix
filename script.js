document.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar');
    const homeSection = document.getElementById('home');
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    const sectionTop = homeSection.offsetTop;
    const sectionHeight = homeSection.offsetHeight;

    // Check if scroll position is within the home section
    if (scrollTop >= sectionTop && scrollTop <= sectionTop + sectionHeight) {
        // Display navbar with animation
        navbar.style.opacity = '1';
        navbar.style.height = '40px'; // Adjust height as needed
    } else {
        // Hide navbar with animation
        navbar.style.opacity = '0';
        navbar.style.height = '0';
    }
});

document.addEventListener('scroll', function() {
    const aboutSection = document.getElementById('about-us');
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    const sectionTop = aboutSection.offsetTop;
    const sectionHeight = aboutSection.offsetHeight;
    const scrollProgress = (scrollTop - sectionTop) / sectionHeight * 100; // Convert progress to percentage

    // Adjust background position based on scroll progress
    aboutSection.querySelector('.about-heading').style.backgroundPosition = scrollProgress + '% 0';

    // Change heading text color based on scroll progress and background position
    const heading = aboutSection.querySelector('.about-heading h1');
    if (scrollProgress <= 50 && scrollProgress >= 0) {
        heading.style.color = 'white'; // Change color to white if progress is between 0% and 50%
    } else if (scrollProgress > 50 && scrollProgress <= 100) {
        heading.style.color = 'black'; // Change color to black if progress is between 50% and 100%
    }
    
});
document.addEventListener('scroll', function() {
    const aboutSection = document.getElementById('contact-us');
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    const sectionTop = aboutSection.offsetTop;
    const sectionHeight = aboutSection.offsetHeight;
    const scrollProgress = (scrollTop - sectionTop) / sectionHeight * 100; // Convert progress to percentage

    // Adjust background position based on scroll progress
    aboutSection.querySelector('.contact-heading').style.backgroundPosition = scrollProgress + '% 0';

    // Change heading text color based on scroll progress and background position
    const heading = aboutSection.querySelector('.contact-heading h1');
    if (scrollProgress <= 50 && scrollProgress >= 0) {
        heading.style.color = 'white'; // Change color to white if progress is between 0% and 50%
    } else if (scrollProgress > 50 && scrollProgress <= 100) {
        heading.style.color = 'black'; // Change color to black if progress is between 50% and 100%
    }
    
});
document.addEventListener('scroll', function() {
    const aboutSection = document.getElementById('event');
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    const sectionTop = aboutSection.offsetTop;
    const sectionHeight = aboutSection.offsetHeight;
    const scrollProgress = (scrollTop - sectionTop) / sectionHeight * 100; // Convert progress to percentage

    // Adjust background position based on scroll progress
    aboutSection.querySelector('.events-heading').style.backgroundPosition = scrollProgress + '% 0';

    // Change heading text color based on scroll progress and background position
    const heading = aboutSection.querySelector('.event-heading h1');
    if (scrollProgress <= 50 && scrollProgress >= 0) {
        heading.style.color = 'white'; // Change color to white if progress is between 0% and 50%
    } else if (scrollProgress > 50 && scrollProgress <= 100) {
        heading.style.color = 'black'; // Change color to black if progress is between 50% and 100%
    }
    
});