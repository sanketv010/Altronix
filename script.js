//Progress Bar For About Us Section

document.addEventListener('scroll', function () {
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
document.addEventListener('scroll', function () {
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
document.addEventListener('scroll', function () {
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
window.addEventListener('scroll', function () {
  // Get the navbar element
  const navbar = document.querySelector('.navbar');

  // Check scroll position
  if (window.scrollY > 0) {
      navbar.classList.add('navbar-hidden');
  } else {
      navbar.classList.remove('navbar-hidden');
  }
});

document.addEventListener("DOMContentLoaded", function () {
  const topTextElement = document.getElementById("typewriter-text-top");
  const bottomTextElement = document.getElementById("typewriter-text-bottom");

  const topText = "Welcome To";
  const quotes = [
      "Artificial Intelligence is the new electricity. – Andrew Ng",
      "Machine learning is the science of getting computers to act without being explicitly programmed. – Andrew Ng",
      "The goal of machine learning is to build systems that can learn from data. – Yann LeCun",
      "The future of AI is being built by engineers and researchers, not by science fiction writers. – Rodney Brooks",
      "The new spring in AI is the most significant development in computing in my lifetime. – Alan Kay",
      "Just as electricity transformed industries in the past century, AI is poised to do the same in the 21st. – Jensen Huang",
      "By far, the greatest danger of Artificial Intelligence is that people conclude too early that they understand it. – Eliezer Yudkowsky",
      "Artificial Intelligence would be the ultimate version of Google. – Larry Page",
      "Artificial Intelligence, deep learning, machine learning — whatever you’re doing if you don’t understand it — learn it. – Mark Cuban",
      "The development of full artificial intelligence could spell the end of the human race. – Stephen Hawking",
      "Artificial Intelligence is not a product of natural evolution, but a product of human creation. – Unknown",
      "The most difficult thing about the evolution of artificial intelligence is our inability to realize how close we are to the future we imagine. – Unknown",
      "Artificial Intelligence is no match for natural stupidity. – Unknown",
      "We are entering a new world. The technologies of machine learning, speech recognition, and natural language understanding are reaching a nexus of capability. – Satya Nadella",
      "The real question is, when will we draft an artificial intelligence bill of rights? What will that consist of? And who will get to decide that? – Gray Scott",
      "Machine learning is becoming a reality for almost every sector. – Sundar Pichai",
      "Artificial Intelligence is neither artificial nor intelligent. – Unknown",
      "The AI does not hate you, nor does it love you, but you are made out of atoms which it can use for something else. – Eliezer Yudkowsky",
      "Artificial Intelligence will reach human levels by around 2029. Follow that out further to, say, 2045, we will have multiplied the intelligence, the human biological machine intelligence of our civilization a billion-fold. – Ray Kurzweil",
      "The brain is not a computer, and we should stop thinking of it as one. – Gary Marcus"
  ];

  displayStaticText(topTextElement, topText);
  typeWriterBottom(bottomTextElement, quotes, 500); // Start changing quotes for the bottom text
});

function displayStaticText(element, text) {
  element.textContent = text; // Set the text content only once
}

function typeWriterBottom(element, quotes, speed) {
  let currentIndex = 0;
  function type() {
      const quote = quotes[currentIndex];
      let i = 0;
      function innerType() {
          if (i < quote.length) {
              element.textContent += quote.charAt(i);
              i++;
              setTimeout(innerType, speed / 10); // Dividing the speed to make the change smoother
          } else {
              setTimeout(() => {
                  element.textContent = ""; // Clear the text after displaying
                  currentIndex = (currentIndex + 1) % quotes.length; // Move to the next quote
                  type(); // Start typing the next quote
              }, speed);
          }
      }
      innerType();
  }
  type();
}


function toggleNav() {
  var nav = document.querySelector('.navbar ul');
  nav.classList.toggle('show');
}