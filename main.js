document.addEventListener("DOMContentLoaded", function(e) {
    
});

var swiper = new Swiper(".mySwiper", {
    effect: "coverflow",
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: "auto",
    coverflowEffect: {
        rotate: 0,
        stretch: 0,
        depth: 200,
        modifier: 1,
        slideShadows: true,
    },
    loop: true
});

function toggleMenu(){
    const menuToggle = document.querySelector(".toggle");
    const navigation = document.querySelector(".navigation")
    menuToggle.classList.toggle("active")
    navigation.classList.toggle("active")
}


var swiperCard = new Swiper(".mySwiperCard", {
    slidesPerView: 3,
    spaceBetween: 30,
    freeMode: true,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
});