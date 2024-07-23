// let menuIcon = document.querySelector('#menu-icon');
// let navbar =document.querySelector('.navbar');


// menuIcon.onclick= () =>{
//     menuIcon.classList.toggle("fa-solid fa-x");
//     navbar.classList.toggle('active');
// }
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    // menuIcon.classList.toggle("fa-solid");
    menuIcon.classList.toggle("fa-xmark");
    navbar.classList.toggle('active');
}






let sections = document.querySelector('section')
let navLinks = document.querySelector('header nav a')

// window.onscroll = ()=>{
//     sections.forEach(sec => {
//         let top = window.scrollY;
//         let offset = sec.offsetTop -150;
//         let height = sec.offsetHeight;
//         let id = sec.getAttribute('id');

//         if(top >= offset && top < offset + height){
//             navLinks.forEach.apply(links=>{
//                 links.classList.remove('active')
//                 document.querySelector('header nav a [href*='+ id + ']').classList.add('active');

//             })
//         }
//     });
// }
// Assuming sections and navLinks are defined somewhere in your code


window.onscroll = () => {
    let scrollY = window.scrollY;

    sections.forEach(sec => {
        let secTop = sec.offsetTop - 150;
        let secHeight = sec.offsetHeight;
        let secId = sec.getAttribute('id');

        if (scrollY >= secTop && scrollY < secTop + secHeight) {
            navLinks.forEach(link => {
                link.classList.remove('active');
            });
            // Find the corresponding navigation link and add 'active' class to it
            document.querySelector('header nav a[href="#' + secId + '"]').classList.add('active');
        }
    });
};



let header = document.querySelector('header');
header.classList.toggle('sticky',window.scrollY > 100);



menuIcon.classList.remove('fa-xmark')
navbar.classList.remove('active');


// ScrollReveal({ 
//     distance:'80px',
//     duration:2000,
//     delay:200,

// });

// ScrollReveal().reveal('.home-content, heading', { origin:'top'});
// ScrollReveal().reveal('.home-img, .services-container,portfolio-box,.contact-box ', { origin:'bottom'});
// ScrollReveal().reveal('.home-contact h1 , .about-img ', { origin:'left'});
// ScrollReveal().reveal('.home-contact p , .about-content ', { origin:'right'});




// const typed = new Typed('.multiple-text',{
//     strings:['Student At VNIT Mechanical Enginnering','Web Devoloper','Learner'],
//     typeSpeed:70,
//     backSpeed:70,
//     backDelay:1000,
//     loop:true,
// })
// ScrollReveal initialization with options
ScrollReveal({
    distance: '80px',
    duration: 2000,
    delay: 200
});

// Revealing elements with different origins
ScrollReveal().reveal('.home-content, .heading', { origin: 'top' });
ScrollReveal().reveal('.home-img, .services-container, .portfolio-box, .contact-box', { origin: 'bottom' });
ScrollReveal().reveal('.home-contact h1, .about-img', { origin: 'left' });
ScrollReveal().reveal('.home-contact p, .about-content', { origin: 'right' });

// Typed.js initialization
const typed = new Typed('.multiple-text', {
    strings: ['Student At VNIT Mechanical Engineering', 'Web Developer', 'Learner'],
    typeSpeed: 80,
    backSpeed: 80,
    backDelay: 1000,
    loop: true
});
