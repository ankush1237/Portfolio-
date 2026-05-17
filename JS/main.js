let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('fa-xmark');
    navbar.classList.toggle('active');
    // prevent body scroll when nav is open
    document.body.classList.toggle('modal-open', navbar.classList.contains('active'));
};

// Close nav when a link is tapped (mobile UX)
document.querySelectorAll('.navbar a').forEach(link => {
    link.addEventListener('click', () => {
        menuIcon.classList.remove('fa-xmark');
        navbar.classList.remove('active');
        document.body.classList.remove('modal-open');
    });
});

// Active nav link + sticky header
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    let scrollY = window.scrollY;

    sections.forEach(sec => {
        let secTop = sec.offsetTop - 150;
        let secHeight = sec.offsetHeight;
        let secId = sec.getAttribute('id');

        if (scrollY >= secTop && scrollY < secTop + secHeight) {
            navLinks.forEach(link => link.classList.remove('active'));
            const activeLink = document.querySelector('header nav a[href="#' + secId + '"]');
            if (activeLink) activeLink.classList.add('active');
        }
    });

    let header = document.querySelector('header');
    header.classList.toggle('sticky', scrollY > 100);
};

// ── Modal Logic ───────────────────────────────────────────
const readMoreBtns = document.querySelectorAll('.read-more-btn');
const overlays = document.querySelectorAll('.modal-overlay');

readMoreBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
        e.stopPropagation();
        const targetId = btn.getAttribute('data-modal');
        const overlay = document.getElementById(targetId);
        if (!overlay) return;
        overlays.forEach(o => o.classList.remove('active'));
        overlay.classList.add('active');
        document.body.classList.add('modal-open');
    });
});

overlays.forEach(overlay => {
    overlay.addEventListener('click', (e) => {
        if (e.target === overlay) closeAllModals();
    });
});

document.querySelectorAll('.modal-close').forEach(btn => {
    btn.addEventListener('click', closeAllModals);
});

document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeAllModals();
});

function closeAllModals() {
    overlays.forEach(o => o.classList.remove('active'));
    document.body.classList.remove('modal-open');
}

// ── ScrollReveal ──────────────────────────────────────────
ScrollReveal({ distance: '80px', duration: 2000, delay: 200 });
ScrollReveal().reveal('.home-content, .heading', { origin: 'top' });
ScrollReveal().reveal('.home-img, .services-container, .portfolio-box, .contact-box', { origin: 'bottom' });
ScrollReveal().reveal('.home-contact h1, .about-img', { origin: 'left' });
ScrollReveal().reveal('.home-contact p, .about-content', { origin: 'right' });

// ── Typed.js ──────────────────────────────────────────────
const typed = new Typed('.multiple-text', {
    strings: [
        'Mechanical Engineering Student',
        'TnP Core Team Member',
        'Web Developer',
        'Team Velocity Member',
    ],
    typeSpeed: 45,
    backSpeed: 30,
    backDelay: 800,
    loop: true,
    smartBackspace: true,
});
