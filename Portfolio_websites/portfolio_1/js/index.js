/* Toggle Icon*/
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('fa-x');
    navbar.classList.toggle('active');
};

let sections = document.querySelectorAll('section');
let navlinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height) {
            navlinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });
        }
    });
    /* A navbar fixed*/


    let header = document.querySelector('header');

    header.classList.toggle('sticky', window.scrollY > 100);

    /* Removing Toggle Icon*/

    menuIcon.classList.remove('fa-x');
    navbar.classList.remove('active');

};

/* Scroll Reveal Feature*/
ScrollReveal({
     reset: true,
     distance : '80px',
     duration: 2000,
     delay: 200 
});

ScrollReveal().reveal('.home-content, .heading', { origin: 'top' });
ScrollReveal().reveal('.home-img, .services-container, .portfolio-box, .contact form', { origin: 'bottom' });
ScrollReveal().reveal('.home-container h1, .about-img', { origin: 'left' });
ScrollReveal().reveal('.home-container h1, .about-container', { origin: 'right' });


/* Adding a TYping feature from typed.js*/
const typed = new Typed('.multiple-text', {
    strings: ['Data Analyst', 'Technical Writer', 'Frontend Developer'],
    typeSpeed: 100,
    backSpeed: 100,
    delaySpeed: 50,
    loop: true
})
