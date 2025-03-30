//  ================ Show Menu ================ 
const _navMenu = document.getElementById('_navMenu');
const _navToggle = document.getElementById('_navToggle');
const _navClose = document.getElementById('_navClose');

//  ------- Show Menu -------
if (_navToggle) {
  _navToggle.addEventListener('click', () => {
    _navMenu.classList.add('show-Menu');
  });
}

//  ------- Hide Menu -------
if (_navClose) {
  _navClose.addEventListener('click', () => {
    _navMenu.classList.remove('show-Menu');
  });
}



// ================ Remove Mobile Menu ================
const navLink = document.querySelectorAll('.nav-Link');

const linkAction = () => {
  const _navMenu = document.getElementById('_navMenu');

  // when we click on each navigation link (nav-Link), it will remove show-Menu class
  _navMenu.classList.remove('show-Menu');
};
navLink.forEach(n => n.addEventListener('click', linkAction));



// ================ Add Header Shadow ================
const headerShadow = () => {
  const header = document.getElementById('header');

  // Add one more class to header if the bottom offset is greater than 50 viewport (half of the viewport)
  this.scrollY >= 50 ? header.classList.add('header-Shadow')
    : header.classList.remove('header-Shadow');
};
window.addEventListener('scroll', headerShadow);



// ================ Show Scrollup ================
const scrollUp = () => {
  const scrollUp = document.getElementById('_Scrollup');

  // when the scroll is higher than 350 viewport height then add one more class 'show-Scroll' to the anchor tag with the 'Scrollup' class
  this.scrollY >= 350 ? scrollUp.classList.add('show-Scroll')
    : scrollUp.classList.remove('show-Scroll');
};
window.addEventListener('scroll', scrollUp);



// ================ Scroll Sections Active Link ================
const Sections = document.querySelectorAll('section[id]');

const scrollActive = () => {
  const scrollDown = window.scrollY;

  Sections.forEach(current => {
    const sectionHeight = current.offsetHeight,
      sectionTop = current.offsetTop - 58,
      sectionId = current.getAttribute('id'),
      sectionClass = document.querySelector('.nav-Menu a[href*=' + sectionId + ']');

    if (scrollDown > sectionTop && scrollDown <= sectionTop + sectionHeight) {
      sectionClass.classList.add('active-Link');
    }
    else {
      sectionClass.classList.remove('active-Link');
    }
  });
};
window.addEventListener('scroll', scrollActive);



// ================ EmailJS ================
const contactForm = document.getElementById('_contactForm');
const contactMsg = document.getElementById('_contactMsg');

const sendEmail = (e) => {
  e.preventDefault();

  // serviceID - templateID - #form - publicKey
  emailjs.sendForm('', '', '#_contactForm', '').then(() => {
    // Show sent message
    contactMsg.textContent = 'Message sent successfully ✅';

    // Remove message after five seconds
    setTimeout(() => {
      contactMsg.textContent = '';
    }, 5000);

    // Clear input fields
    contactForm.reset();
  }, () => {
    // Show error message
    contactMsg.textContent = 'Message not sent (service error) ❌';
  });
};
contactForm.addEventListener('submit', sendEmail);



// ================ Scroll Reveal Animation ================
const sr = ScrollReveal({
  origin: 'top',
  distance: '60px',
  duration: 2500,
  delay: 300,
  // reset: true             //repeat Animations
});

sr.reveal(`.home-Data, .about-Details, .delivery-Content, .contact-Form`, { distance: '100px', origin: 'right' });
sr.reveal(`.home-Plate`, { delay: 500, distance: '90px', origin: 'bottom' });
sr.reveal(`.home-Burger`, { delay: 1000, distance: '75px', duration: 2000 });
sr.reveal(`.home-Coffee`, { delay: 1500, distance: '75px', duration: 1600 });
sr.reveal(`.home-Variety, .home-Offer, .about-Company, .footer-Copy`);
sr.reveal(`.about-Image, .recipe-Wrapper, .delivery-Image-1, .contact-Data`, { distance: '100px', origin: 'left' });
sr.reveal(`.chef-Card, .menu-Card, .contact-Follow, .footer-Content, .footer-Social, .footer-Navigation`, { interval: 160 });
sr.reveal(`.recipe-Card`, { interval: 100, origin: 'right' });