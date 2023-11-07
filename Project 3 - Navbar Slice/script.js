const open = document.getElementById('open');
const close = document.getElementById('close');
const container = document.querySelector('.container');
const logo = document.querySelector('.logo');
const navItems = document.querySelectorAll('nav ul li');

open.addEventListener('click', () => {
    container.classList.add('show-nav');
    logo.classList.remove('hidden');
    logo.classList.add('visible');

    // use nth child selectors to delay the transition of each nav item
    navItems[0].style.transitionDelay = '0.1s';
    navItems[1].style.transitionDelay = '0.2s';
    navItems[2].style.transitionDelay = '0.3s';
    logo.style.transitionDelay = '0.4s';
});

close.addEventListener('click', () => {
    container.classList.remove('show-nav');
    logo.classList.remove('visible');

    // Delay the addition of the 'hidden' class to the logo until the transition is complete
    logo.addEventListener('transitionend', function handler() {
        // Only run this function once
        logo.removeEventListener('transitionend', handler);

        logo.classList.add('hidden');
    });

    // Reverse transition delays for closing of navbar
    navItems[0].style.transitionDelay = '0.4s';
    navItems[1].style.transitionDelay = '0.3s';
    navItems[2].style.transitionDelay = '0.2s';
    logo.style.transitionDelay = '0.1s';
});