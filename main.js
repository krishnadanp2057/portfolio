let menuIcon=document.querySelector('#menu-icon');
let navbar=document.querySelector('.nav-bar');

menuIcon.onclick=()=>{
    menuIcon.classList.toggle('fa-xmark');
    navbar.classList.toggle('active')
}

let section=document.querySelectorAll('section');
let navlinks=Document.querySelectorAll('header nav a')

Window.onscroll= ()=>{
    section.forEach(sec =>{
        let top=Window.scrolly;
        let offset=sec.offsetTop -150;
        let height=sec.offsetHeight;
        let id=sec.getAttribute('id');
   
    if(top >= offset && top < offset + height){
        navlinks.forEach.apply(link => {
            link.classList.remove('active');
            Document.querySelector('header nav a[href*='+ id+']');
        })
    }
   })
let header=Document.querySelector('header');
header.classList.toggle('sticky',window.scrolly >100);

menuIcon.classList.remove('fa-xmark');
navbar.classList.remove('active');
};

/*---------scroll revial    -----*/
ScrollReveal({ 
    distance:'80px',
    duration:2000,
    delay:200,

});
ScrollReveal().reveal('.home-content,heading', {origin:'top' });
ScrollReveal().reveal('.service-container,portfolio-box,contact form', {origin:'buttom'});
ScrollReveal().reveal('.home-contact h1,.about-img', {origin:'left' });
ScrollReveal().reveal('.home-contact p,.about-content', {origin:'right'});