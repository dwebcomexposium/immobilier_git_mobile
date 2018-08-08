;(function ($) {

  $(document).ready(function () {

    /*$('.body-mobile #zone2 > .list-articles:first-of-type .grid-la-list').slick({
     infinite: true,
     slidesToScroll: 1,
     arrows: true,
     centerMode: true,
     slidesToShow: 1,
     centerPadding: '60px'
     });

     $('.body-mobile #zone2 > .list-articles:first-of-type .swiper-wrapper.slider-content').slick({
     infinite: true,
     slidesToScroll: 1,
     arrows: true,
     centerMode: true,
     slidesToShow: 1,
     centerPadding: '60px'

     });*/
  });


  var slick_config = {
    infinite: true,
    slidesToScroll: 1,
    arrows: true,
    centerMode: true,
    slidesToShow: 1,
    centerPadding: '60px'
  };

  $(function () {
    $('.body-mobile #zone2 > .list-articles:first-of-type .swiper-wrapper.slider-content,' +
      '.body-mobile #zone2 > .list-articles:first-of-type .grid-la-list,' +
      '.fake-selector').slick(slick_config);

    $('.list-articles.events .cxp-swiper .swiper-wrapper').removeClass('swiper-wrapper').slick({
      infinite: true,
      slidesToShow: 1,
      centerMode: true,
      centerPadding: '20px',
    });

  });


})(jQuery);
