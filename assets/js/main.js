const navMenu = document.getElementById('nav-menu'),
    navClose = document.getElementById('nav-close'),
    navToggle = document.getElementById('nav-toggle');



navToggle.addEventListener("click", ()=>{
        navMenu.classList.add("show-menu")
});


navClose.addEventListener("click", ()=>{
    navMenu.classList.remove("show-menu")
})

/*=============== ADD BLUR HEADER ===============*/
const blurHeader = ()=>{
    const header = document.getElementById("header")
    //add a class if the bottom offset is greater than of the 
    this.scrollY >= 100 ? header.classList.add("blur-header")
                        : header.classList.remove("blur-header")
}
window.addEventListener("scroll", blurHeader);

// ========================Audio===========================================
const audio = document.getElementById('miMusica');
const playButton = document.getElementById('playButton');
const icon = playButton.querySelector('#volumen-play');

playButton.addEventListener('click', () => {
    if (audio.paused) {
        audio.play();
        icon.classList.remove('ri-play-fill');
        icon.classList.add('ri-pause-fill');
        
    } else {
        audio.pause();
        icon.classList.remove('ri-pause-fill');
        icon.classList.add('ri-play-fill');
    }
});


// ===================================swiper=======================================
const swiperTravel = new Swiper('.travel_swiper', {
    loop: true,
    spaceBetween:'32',
    grabCursor: true,
    slidesPerView: 'auto',
    centeredSlides: 'auto',

    pagination: {
      el: '.swiper-pagination',
      clickable:true,
    },
    breakpoints:{
        600:{
            slidesPerView: 2,
        },
        900:{
            slidesPerView: 3,
        },
    },
  });


// =============================DARK THEME
let darkmode = localStorage.getItem("darkmode");
const swichMode = document.getElementById("theme-switch");


const enableDarkmode = () => {
    document.body.classList.add('darkmode')
    localStorage.setItem('darkmode', 'active')
  }
  
  const disableDarkmode = () => {
    document.body.classList.remove('darkmode')
    localStorage.setItem('darkmode', null)
  }
  
  if(darkmode === "active") enableDarkmode()
  
  swichMode.addEventListener("click", () => {
    darkmode = localStorage.getItem('darkmode')
    darkmode !== "active" ? enableDarkmode() : disableDarkmode()
  });

  

// =============================revealScroll
function revealFuction(){

    window.sr = ScrollReveal({ duration:1350, distance: '250px',
        easing:'ease-out' });
    sr.reveal('.reveal-left', {origin:'left', reset:false});
    sr.reveal('.reveal-top', {origin:'top', reset:false});
    sr.reveal('.reveal-bottom', {origin:'bottom', reset:false});
    sr.reveal('.reveal-right', {origin:'right', reset:false});

    // sr.reveal('.reveal-right-5',{origin:'right', reset:false, delay:5000});

    sr.reveal('.reveal-reset-bottom', {origin:'bottom', reset:true});    
    sr.reveal('.reveal-reset-left', {origin:'left', reset:true});    
    sr.reveal('.reveal-reset-right', {origin:'right', reset:true});    
    sr.reveal('.reveal-reset-top', {origin:'top', reset:true});    

};

window.addEventListener('load', ()=>{
    revealFuction();
})