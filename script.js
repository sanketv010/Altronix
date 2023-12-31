//Progress Bar For About Us Section

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

//Progress Bar For Contact Us Section
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

//Progress Bar For Events Section
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


//Scrolling Effect For Navbar
window.addEventListener('scroll', function() {
    // Get the navbar element
    const navbar = document.querySelector('.navbar');
  
    // Check scroll position
    if (window.scrollY > 0) {
      navbar.classList.add('navbar-hidden');
    } else {
      navbar.classList.remove('navbar-hidden');
    }
  });
  
