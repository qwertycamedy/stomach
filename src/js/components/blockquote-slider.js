if(document.querySelector('.blockquote-slider')) {
  new Swiper('.blockquote-slider__container', {
    pagination: {
      el: '.blockquote-slider__pagination',
      clickable: true,
    },
  });
}