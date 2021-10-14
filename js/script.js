// new Swiper('.slider-tab__news', {
//   pagination: {
//     el: '.swiper-pagination',
//     clickable: true,
//   },
//         scrollbar: {
//           el: '.swiper-scrollbar',
//           draggable: true,
//         },
//         grabCursor: true,
//         slidesPerView: 3.5,
//         slidesPerGroup: 1,
//         loop: true,
// });



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
    el: ".swiper-pagination",
    clickable: true,
  },
});

