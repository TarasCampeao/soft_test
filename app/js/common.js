$(document).ready(function() {
	//$('body').addClass('main');

    $(".mobile_ul").mPageScroll2id();

    $('.open-popup-link').magnificPopup({
      type: 'inline',
      midClick: true,
      mainClass: 'mfp-fade'
    });

    $(".customscroll_3").mCustomScrollbar({
      theme:"inset-dark"
    });

    $('#menu_button').on('click', function ( event ) {
      event.preventDefault();
      $('body').toggleClass('no-scroll');
      $('.modal_menu').toggleClass('show_menu');
      $('#menu_button').toggleClass('effect_close');
      $('.logo, .page_list_header, .find_menu').toggleClass('opacity_hide');
      $('.main-part').toggleClass('border_out');
    });

    $(function (f) {
        f(window).scroll(function () {
            f('header')[(f(this).scrollTop() > 10 ? "add" : "remove") + "Class"]("adaptive_height");
        });
    });



});


