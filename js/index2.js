$(document).ready(function(){
    scroll();
    slide();
    sec_top();
});

function scroll(){
    $(window).scroll(function(){
        var $top = $(window).scrollTop();
        if($top != 0){
            $("header").addClass("active");
        }else{
            $("header").removeClass("active");
        }
    });
};
function slide(){
    var $width = $(window).width();
    var swiper = new Swiper(".mySwiper", {
        loop: true,
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
        breakpoints: {
            // when window width is >= 320px
            670: {
              slidesPerView: 1,
              spaceBetween: 20
            },
            671: {
              slidesPerView: 2
            },
            1024: {
              slidesPerView: 3
            }
        },
        autoplay: {
            delay: 1000,
        }
    });    
};
function sec_top(){
    $("a").click(function(e){
        e.preventDefault();
        var $href = $(this).attr("href");
        var $height = $("header").height();
        var $offset = $($href).offset().top-$height;
        $("html").stop().animate({scrollTop:$offset},1000);
    });
}