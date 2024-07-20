let menu = document.querySelector('#menu-icon');
let navlist = document.querySelector('.navlist')

menu.onclick = () => {
  menu.classList.toggle ('bx-x');
  navlist.classList.toggle ('open');
};

const sr = ScrollReveal  ({
distance: '40px',
duration: 2500,
reset: true 

});

sr.reveal('.logo', {delay: 200, origin: 'left'});
sr.reveal('.right-content', {delay: 520, origin: 'right'});

sr.reveal('.hero-text h5', {delay: 600, origin: 'left'});
sr.reveal('.hero-text h1', {delay: 680, origin: 'right'});
sr.reveal('.hero-text p', {delay: 750, origin: 'right'});
sr.reveal('.main-hero', {delay: 860, origin: 'left'});

sr.reveal('.icons', {delay: 950, origin: 'top'});
sr.reveal('.hero-img', {delay: 1000, origin: 'right'});
sr.reveal('.scroll', {delay: 1000, origin: 'right'});
