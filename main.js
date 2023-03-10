document.addEventListener("DOMContentLoaded", function (e) {
    const infosCard = [
        {
            id: 2322,
            description: "Coca Cola Zero Açúcar",
            img: "img/cocacola2.png",
            price: "R$ 5,00"
        }, {
            id: 2323,
            description: "Coca Cola Diet",
            img: "img/cocacola3.png",
            price: "R$ 6,00"
        },
        {
            id: 2324,
            description: "Coca Cola Coffee",
            img: "img/cocacola4.png",
            price: "R$ 7,50"
        },
        {
            id: 2325,
            description: "Coca Cola Vannila",
            img: "img/cocacola5.png",
            price: "R$ 6,00"
        },
        {
            id: 2326,
            description: "Coca Cola Energy",
            img: "img/cocacola6.png",
            price: "R$ 10,00"
        }
    ]

    cardClone(infosCard)
    pageScroll()
});

function pageScroll(){
    var header = document.querySelector('header');
    
    window.onscroll = function () {
        if (window.pageYOffset > 80) {
            header.style.position = "fixed";
            header.style.top = 0;
            header.style.background = "rgba(0,0,0,0.6)";
            header.style.backdropFilter = "saturate(180%) blur(20px)"
            header.style.zIndex = "100000"
            header.style.height = "80px"
        } else {
            header.style.position = "absolute";
            header.style.top = 80;
            header.style.background = "transparent";
            header.style.backdropFilter = "none"
        }
    }
}

let swiper = new Swiper(".mySwiper", {
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

function cardClone(infosCloneCard) {
    let contentCardSwiper = document.querySelector(".card-swiper-content")
    let cardShopping = document.querySelector('.cards')

    infosCloneCard.map(infos => {
        const newCard = cardShopping.cloneNode(true)
        newCard.setAttribute("id", infos.id)
        newCard.querySelector("img").src = infos.img
        newCard.querySelector("h4").innerHTML = infos.description
        newCard.querySelector(".price").innerHTML = infos.price
        contentCardSwiper.appendChild(newCard)
    })
}

function toggleMenu() {
    const menuToggle = document.querySelector(".toggle");
    const navigation = document.querySelector(".navigation")
    menuToggle.classList.toggle("active")
    navigation.classList.toggle("active")
}


let swiperCard = new Swiper(".mySwiperCard", {
    slidesPerView: 3,
    spaceBetween: 30,
    freeMode: true,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
});

function addShopping(contentShopping){
    let productId = contentShopping.parentElement.parentElement.parentElement.parentElement.id
    let dataShopping = {
        description: contentShopping.parentElement.parentElement.children[0].children[0].innerHTML,
        price: contentShopping.parentElement.parentElement.children[0].children[1].innerHTML,
        img: contentShopping.parentElement.parentElement.parentElement.children[0].children[0].src
    }
    localStorage.setItem(productId, JSON.stringify(dataShopping))
    updateInfoShopping(localStorage)
    contentShopping.innerHTML = "Adicionado"
    contentShopping.previousElementSibling.style.display = "inline-block"
}

function removeShopping(contentRemoveShopping){
    let productId = contentRemoveShopping.parentElement.parentElement.parentElement.parentElement.id
    localStorage[productId] ? localStorage.removeItem(productId) : alert("Produto não encontrado")
    updateInfoShopping(localStorage)
    contentRemoveShopping.nextElementSibling.innerHTML = "Adicionar ao carrinho"
    contentRemoveShopping.style.display = "none"
}

function updateInfoShopping(allProducts){
    let shopping = document.getElementById("shopping")
    if (allProducts.length > 0) {
        for (let index = 0; index < allProducts.length; index++) {
            setTimeout(function(){
                shopping.innerHTML = index + 1
            }, 500 * index)
        }
    }else{
        setTimeout(function(){
            shopping.innerHTML = 0
        }, 500 * 2)
    }
}