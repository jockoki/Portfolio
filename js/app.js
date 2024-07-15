// Dark - Light Mode

let darkModeEnabled = localStorage.getItem('darkModeEnabled') === 'true';

const toggleDarkMode = () => {
    darkModeEnabled = !darkModeEnabled; // Cambia el estado

    if (darkModeEnabled) {
        document.body.classList.add('dark-mode');
        document.documentElement.classList.add('dark-mode');
        localStorage.setItem('darkModeEnabled', 'true');
    } else {
        document.body.classList.remove('dark-mode');
        document.documentElement.classList.remove('dark-mode');
        localStorage.setItem('darkModeEnabled', 'false');
    }
};

document.addEventListener('DOMContentLoaded', () => {
    const darkModeButton = document.getElementById('darkModeButton');
    darkModeButton.checked = darkModeEnabled;
    toggleDarkMode(); // Aplica el modo oscuro inicial

    darkModeButton.addEventListener('change', toggleDarkMode);
});

// Menu

const hamburger = document.querySelector('.hamburger');
const navList = document.querySelector('nav ul');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navList.classList.toggle('active'); 
});

// Multipler Text

const typed = new Typed('.multiple', {
    strings: ['Diseñador Web', 'Desarrollador Front-end', 'Programador Back-end'],
    typedSeepd: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true
});

// Header shadow on scroll

const header = document.querySelector('header');

window.addEventListener('scroll', () => {
    header.style.boxShadow = window.scrollY > 0
    ? `0 2px 4px rgba(var(--bg-light-color-rgb), .1)`
    : `none`;
});

// Scroll section active link

let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () =>{
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height){
            navLinks.forEach(link => {
                link.classList.remove('active');
            });
            document.querySelector('header nav ul li a[href="#' + id + '"]').classList.add('active');
        }
    });
};

navLinks.forEach(link => {
    link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navList.classList.remove('active');
    });
});