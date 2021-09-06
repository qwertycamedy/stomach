if (document.querySelector('.specialists')) {
  new Swiper('.specialists__slider-container', {
    slidesPerView: 1,
    spaceBetween: 100,
    pagination: {
      el: '.specialists__slider-pagination',
      clickable: true,
    },  
    breakpoints: {
      781: {
        slidesPerView: 2,
        spaceBetween: 80
      },
      1299: {
        slidesPerView: 3,
        spaceBetween: 100
      },
      1500: {
        slidesPerView: 3,
        spaceBetween: 194
      }
    }
  });
}

if (document.querySelector('.our-specialists')) {
  new Swiper('.our-specialists__slider-container', {
    slidesPerView: 1,
    spaceBetween: 100,
    navigation: {
      nextEl: '.specialists__slider-arrow-next',
      prevEl: '.specialists__slider-arrow-prev',
    },  
    breakpoints: {
      781: {
        slidesPerView: 2,
        spaceBetween: 80
      },
      1299: {
        slidesPerView: 3,
        spaceBetween: 100
      },
      1500: {
        slidesPerView: 3,
        spaceBetween: 194
      }
    }
  });
}


if (document.querySelector('.spec-cert')) {
  new Swiper('.spec-cert__slider', {
    effect: 'fade',
    fadeEffect: {
      crossFade: true
    },

    pagination: {
      el: '.spec-cert__slider-fraction',
      type: 'custom',
      renderCustom: function (swiper, current, total) {
        return current + '<span class="spec-cert__slider-fraction-span">|</span>' + total;
      }
    },



    navigation: {
      nextEl: '.spec-cert__slider-arrow-next',
      prevEl: '.spec-cert__slider-arrow-prev',
    },
  });
}

if (document.querySelector('.spec-rev')) {
  new Swiper('.spec-rev__slider', {
    allowTouchMove: false,
    spaceBetween: 30,
    pagination: {
      el: '.spec-rev__slider-pagination',
      clickable: true,
    },
  });
}
