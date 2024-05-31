/*-------- Toggle Navbar ------*/


let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}

/*------ Scroll Section active ------*/

let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header .navbar a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height) {
            navLinks.forEach.apply(links => {
                links.classList.remove('active');
                document.querySelector('header .navbar a[href+=' + id + ']').classList.add('active');

            });
        };
    });


/* ----------- Sticky Navbar -----*/

let header = document.querySelector('header');
header.classList.toggle('sticky', window.scrollY > 100);

/*----------- remove toggle icon and navbar ------*/

menuIcon.classList.remove('bx-x');
navbar.classList.remove('active');

};

/*-------------- scroll reveal ----------*/

ScrollReveal({ 
    distance:'80px',
    duration:2000,
    delay:200,
});

ScrollReveal().reveal('.home-content, heading', { origin: 'top' });
ScrollReveal().reveal('.home-img, .skills-container, .portfolio-box, .contact form', { origin: 'bottom' });
ScrollReveal().reveal('.home-content h1, .about-img', { origin:'left' });
ScrollReveal().reveal('.home-content p, .about-content', { origin:'right' });

/*-------------- Typed js ----------*/

const typed = new Typed('.multiple-text', {
    strings:['Frontend Developer,', 'Web developer,'],
    typeSpeed:70,
    backSpeed:70,
    backDelay:1000,
    loop:true,
});