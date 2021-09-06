if(document.querySelector('.our-works__slider-container')) {
  new Swiper('.our-works__slider-container', {
    spaceBetween: 30,
    pagination: {
      el: '.our-works__slider-pagination',
      clickable: true,
    },
  });
}