let menuBtn = document.querySelector('#menu_btn');
let navbar = document.querySelector('.header .flex .navbar');

menuBtn.onclick = () =>{
    menuBtn.classList.toggle('bi-times');
    navbar.classList.toggle('active');
}






var swiper = new Swiper(".swiper", {
   
    direction: 'vertical',
    loop: true,

   pagination: {
     el: ".swiper-pagination",
     
   },
    navigation: {
        nextE1: '.swiper-button-next',
        prevE1: '.swiper-button-prev',
    },
     scrollbar: {
        e1: '.swiper-scrollbar',
     },
 });



 var swiper = new Swiper(".mySwiper", {
    cssMode: true,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    pagination: {
      el: ".swiper-pagination",
    },
    mousewheel: true,
    keyboard: true,

    breakpoints: {
      640: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      768: {
        slidesPerView: 4,
        spaceBetween: 40,
      },
      1024: {
        slidesPerView: 5,
        spaceBetween: 50,
      },
    },
  });
  















