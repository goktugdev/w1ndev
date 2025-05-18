const searchForm = document.querySelector(".search-form");

//! Buttons
const searchBtn = document.querySelector("#search-btn");

searchBtn.addEventListener("click", function(){
    searchForm.classList.toggle("active");
    document.addEventListener("click",function(e){
        if(!e.composedPath().includes(searchBtn) 
        && !e.composedPath().includes(searchForm)){
            searchForm.classList.remove("active");
        }
    })
})

const header = document.querySelector(".header");
const closeInspectBtn = document.querySelector("#kapat");
const resim1 = document.getElementById('InspectPhoto1');
const resim2 = document.getElementById('InspectPhoto2');

closeInspectBtn.addEventListener("click", function(){
    header.classList.toggle("disabled");
})

resim1.addEventListener("click", function(){
    header.classList.toggle("disabled");
})

resim2.addEventListener("click", function(){
    header.classList.toggle("disabled");
})

const popup = document.getElementById('popup');
const popupIcerik = document.getElementById('popup-icerik');
const kapat = document.getElementById('kapat');

resim1.addEventListener('click', function() {
    popup.style.display = 'block';
    popupIcerik.src = resim1.src;
});

resim2.addEventListener('click', function() {
    popup.style.display = 'block';
    popupIcerik.src = resim2.src;
});

kapat.addEventListener('click', function() {
    popup.style.display = 'none';
});

$(document).ready(function () {
    // Slider için gerekli kod
    $(".slider").slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 10000,  // Otomatik oynatma süresi (ms cinsinden)
        infinite: false,
        dots: true,
        arrows: true,
        prevArrow: '<button type="button" class="slick-prev"></button>',
        nextArrow: '<button type="button" class="slick-next"></button>',
        cssEase: 'ease-in',
        pauseOnDotsHover: true
    });
});
