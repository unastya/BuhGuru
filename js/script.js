$(document).ready(function() {
  $('.item-faq__title').click(function(event) {
    $(this).toggleClass('active').next().slideToggle(300);
  });
});

var knowledgeSwiper = new Swiper('.knowledge__slider', {
  slidesPerView: 3.3,
  spaceBetween: 0,
  slidesPerGroup: 1,
  
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
});

// $(document).ready(function() {
//   $('.header__burger').click(function(event) {
//       $('.header__burger,.header__menu').toggleClass('active');
//       $('body').toggleClass('lock');
//   });
// });

