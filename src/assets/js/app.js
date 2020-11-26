jQuery(function () {
    initSlider();
    initNav();
});
function initNav(){
    $('.button-container').click(function (event){
        $('.button-container,.main_nav').toggleClass('active')
    });
}
function initSlider() {
    $(".home_page_header_slider").slick({
        dots: true,
    });
    $('.main_photo_gallery').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        fade: true,
        asNavFor: '.gallery_nav'
    });
    $('.gallery_nav').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        asNavFor: '.main_photo_gallery',
        dots: false,
        focusOnSelect: true,
        nextArrow: '.holder_btn_next_prev .btn_next',
        prevArrow: '.holder_btn_next_prev .btn_prev',
        responsive: [
            {
                breakpoint: 996,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            }

        ]
    });
    $('.section_blog-slider').slick({
        slidesToShow: 5,
        slidesToScroll: 1,
        asNavFor: '.section_blog-slider',
        dots: false,
        focusOnSelect: true,
        nextArrow: false,
        prevArrow: false,
        autoplay: true,
        responsive: [
            {
                breakpoint: 1500,
                settings: {
                    slidesToShow: 5,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 996,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }

        ]
    });
}