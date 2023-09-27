let menu = document.querySelector('.menu-icon');
let navbar = document.querySelector('.menu')


menu.onclick = () => {
    navbar.classList.toggle('active')
    menu.classList.toggle('open');
}


var swiper = new Swiper(".trending-content", {
    slidesPerView: 1,
    spaceBetween: 10,
    pagination: {
        el: ".swiper-paginations",
        clickable: true,
    },
    autoplay:{
        delay:5000,
        disableOnInteraction: false,
    },
    breakpoints:{
        640: {
            slidesPerView: 2,
            spaceBetween: 10,
        },
        768: {
            slidesPerView: 4,
            spaceBetween: 15,
        },
        1068: {
            slidesPerView: 4,
            spaceBetween: 20,
        },
    },
  });