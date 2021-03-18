$(document).ready(function(){
    $('.review__slider').slick({
        infinite: true,
        draggable: false,
        slidesToShow: 1,
        slidesToScroll: 1
    });
    
    document.querySelector(".slick-prev").innerHTML = '<i class="far fa-chevron-right"></i>';
    document.querySelector(".slick-next").innerHTML = '<i class="far fa-chevron-left"></i>';
});