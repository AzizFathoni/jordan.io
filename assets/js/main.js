/* ========== SHOW MENU ========== */
const showMenu = (toggleId, navId) => {
    const toggle = document.getElementById(toggleId),
    nav = document.getElementById(navId)

    //validate thate variabels exist
    if (toggle && nav){
        toggle.addEventListener('click', ()=>{
            // we add show-menu class to the div tag with the nav_menu class
           nav.classList.toggle('show-menu') 
        })
    }
}
showMenu('nav-toggle', 'nav-menu')

/* ========== REMOVE MENU MOBILE ========== */
const navLink = document.querySelectorAll('.nav_link')

function linkAction(){
    const navMenu = document.getElementById('nav-menu')
    //when we click on each nav_link, we remove the show-menu class
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

/* ========== SCROLL SECTION ACTIVE LINK ========== */
const sections = document.querySelectorAll('section[id]')

function scrollActive(){
    const scrollY = window.pageYOffset

    sections.forEach(current => {
        const sectionHeight = current.offsetHeight
        const sectionTop = current.offsetTop - 50;
        sectionId = current.getAttribute('id')

        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
            document.querySelector('.nav_menu a[href*=' + sectionId + ']').classList.add('active-link')
        }else{
            document.querySelector('.nav_menu a[href*=' + sectionId + ']').classList.remove('active-link')
        }
    })
}
window.addEventListener('scroll', scrollActive)

/* ========== CHANGE BACKGROUND HEADER ========== */
function scrollHeader(){
    const nav = document.getElementById('header')

    // when the scroll is greater than 200 viewport heigth, add the scroll-header class to the header tag
    if(this.scrollY >= 200) nav.classList.add('scroll-header');
    else nav.classList.remove('scroll-header')
}
window.addEventListener('scroll', scrollHeader)

/* ========== SHOW SCROLL TOP ========== */
function scrollTop(){
    const scrollTop = document.getElementById('scroll-top')

    // when the scroll is higher than 560 viewport heigth, add the show-scroll class to the tag with the scroll-top class
    if(this.scrollY >= 560) scrollTop.classList.add('show-scroll');
    else scrollTop.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollTop)

/* ========== SLIDESHOW ========== */
var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n){
    showSlides(slideIndex += n);
}

// Thumbnail image control
function currentSlide(n){
    showSlides(slideIndex = n);
}

function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("dot");
    if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slidesIndex = slides.length}
    for (i = 0; i <slides.length; i++){
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++){
        dots[i].className = dots[i].className.replace(" active","");
    }
    slides[slideIndex-1].style.display = "block";
    dots[slideIndex-1].className += " active"
}