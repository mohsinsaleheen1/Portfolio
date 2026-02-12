/* ----- ADD SHADOW ON NAVIGATION BAR WHILE SCROLLING ----- */
window.onscroll = function() {headerShadow()};
function headerShadow() {
  let navHeader = document.querySelector(".header");
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop >  50) {
    navHeader.style.boxShadow = "0 1px 6px rgba(0, 0, 0, 0.1)";
  } else {
    navHeader.style.boxShadow = "none";
    navHeader.style.backgroundColor = "rgba(232, 241, 245, 0.555)";
    navHeader.style.backdropFilter = "blur(3px)";
  }
}

let mobileNav = document.querySelector(".mobile-navbar-btn");
let navbarLink = document.querySelectorAll(".navbar-link");
let navHeader = document.querySelector(".header");
const toggleNavbar = () => {
  navHeader.classList.toggle("active");
};
function Seeproject(){
  animateprojectsection()
}
function letTalk(){
  animatecontactsection();
}
function contactme(){
  animatecontactsection();
}
navbarLink.forEach((e) => {
  e.addEventListener("click", () => {
    if(e.classList.contains('home-link')){
      animatehomesection();
    }else if (e.classList.contains('about-link')){
      animateaboutsection();
    }else if(e.classList.contains('project-link')){
      animateprojectsection();
    }else if(e.classList.contains('contact-link')){
      animatecontactsection();
    }else if(e.classList.contains('services-link')){
      animateservicesection();
    }
    navHeader.classList.toggle("active");
  });
});
mobileNav.addEventListener("click", () => toggleNavbar());
function animatehomesection(){
  const tl= gsap.timeline({defaults:{duration:3}})
    tl.fromTo('.home-section-container-1',{x:-100,opacity:0},{x:0,opacity:1});
    tl.fromTo('.home-section-container-2',{x:100,opacity:0},{x:0,opacity:1},'<')
}
function animateaboutsection(){
  const tl= gsap.timeline({defaults:{duration:3}})
    tl.fromTo('.about-section-container-1',{x:-100,opacity:0},{x:0,opacity:1});
    tl.fromTo('.about-section-container-2',{x:100,opacity:0},{x:0,opacity:1},'<')
}
function animateprojectsection(){
  const tl= gsap.timeline({defaults:{duration:3}})
  tl.fromTo('.project-card',{y:-100,opacity:0},{y:0,opacity:1});
}
function animatecontactsection(){
  const tl= gsap.timeline({defaults:{duration:3}});
  tl.fromTo('.input-fields',{y:-100,opacity:0},{y:0,opacity:1});
  tl.fromTo('.textarea-field',{y:-100,opacity:0},{y:0,opacity:1},'<');
}
function animateservicesection(){
  const tl = gsap.timeline({defaults:{duration:3}});
  tl.fromTo('.services-card',{y:-100,opacity:0},{y:0,opacity:1});
}
// ========================================================
// ---------------Submit Form detail in Email--------------
// ========================================================
let modal = document.getElementById("modal");
const scripturl='https://script.google.com/macros/s/AKfycbzNE3ddYwUcAChs_vvXFjZJ5byUWPh2aat-WUTC6zIim9A_HEFp1sOxYcQn3C_0zic6Rg/exec';
const form = document.forms['contact-form']
form.addEventListener('submit',e => {
  e.preventDefault()
  fetch(scripturl,{method: 'POST', body: new FormData(form)})
  .then(response =>  modal.classList.remove('hide'),
  modal.classList.add('show'))
  .catch(error => alert(error))
})
const btnclose=()=>{
  modal.classList.remove('show');
  modal.classList.add('hide');
  window.location.reload();
}