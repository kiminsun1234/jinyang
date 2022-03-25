$(document).ready(function(){
    scroll();
    slide();
    sec_top();
    scrolltext();
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
function scrolltext(){
    var $sub_01 = $(".sub_01");
        $list_01 = $(".list_01");
        $list_02 = $(".standard");
        $offset = 500;
        $sub_01off = $sub_01.offset().top - $offset;
        $list_01off = $list_01.offset().top - $offset;
        $list_02off = $list_02.offset().top - $offset;
        console.log($list_02off);
    $(window).scroll(function(){
        if($(this).scrollTop() > $sub_01off){
            $sub_01.find(".sub_introsm").addClass("animate");
        };
        if($(this).scrollTop() > $list_01off){
            $list_01.find("div").addClass("right");
        };
        if($(this).scrollTop() > $list_02off){
            $list_02.find("div").addClass("left");
        };
    });
}