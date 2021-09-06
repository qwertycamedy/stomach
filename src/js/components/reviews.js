if(document.querySelector('.reviews__slider')) {
  new Swiper('.reviews__slider', {
    spaceBetween: 30,
    allowTouchMove: false,
    pagination: {
      el: '.reviews__slider-pagination',
      clickable: true,
    },
  });
}