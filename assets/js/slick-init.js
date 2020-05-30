$(document).ready(function () {
    //for(var i;i < 8;i++) {
    //    $('.slick-container')
    //    .append($('<div><img src="/assets/images/container_6/' + i + '.jpg" /></div>'));
    //}

    $('.slick-slideshow').slick({
        adaptiveHeight: true,
        autoplay: true,
        autoplaySpeed: 2000,
        cssEase: 'linear',
        dots: false,
        fade: true,
        infinite: true,
    });

    $('.slick-autoplay').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
      });
    
});
