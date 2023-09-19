$(document).ready(function(){

  $('.menu-click').click(function(){
    $('.accordion-area').addClass('slide-hide');
    $('.accordion-contain').addClass('slide-menu')

  }); 
  $('.hidden').click(function(){
    $('.accordion-area').removeClass('slide-hide');
    $('.accordion-contain').removeClass('slide-menu')
  })


  $('.accordion-box:first').addClass('active');
	// $('.accordion-box:first').children('.acc-trigger').children('i').addClass('fa-minus');
	// $('.accordion-box:first').children('.acc-trigger').addClass('selected').next('.acc-container').show();

  $('.acc-trigger').click(function(event){
      if($(this).hasClass('selected')){
        $(this).removeClass('selected');
        $(this).children('i').removeClass('fa-minus');
        $(this).next().slideUp();
        $(this).parent().addClass('active');
      }else{
        $('.acc-trigger').removeClass('selected');
        $(this).addClass('selected');
        $('.acc-trigger').children('i').removeClass('fa-minus');
        $(this).children('i').addClass('fa-minus');
        $('.acc-trigger').next().slideUp();
        $(this).next().slideDown();
        $('.accordion-box').removeClass('active');
        $(this).parent().addClass('active');
      }
  })
})
// preloder 
// $(window).load(function() {
// 	$(".preloder").delay(1000).fadeOut("fast");
// 	$(".loder").delay(1000).fadeOut("fast");
// });
// swiper slider
var swiper = new Swiper(".banner-container", {
    effect: "fade",
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },

  });
var swiper = new Swiper(".rts-wooden", {
    spaceBetween: 30,
    effect: "coverflow",
    loop:true,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });

// init Isotope
