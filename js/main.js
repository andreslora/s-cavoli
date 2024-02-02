$(document).ready(function () {
  
  $("#buttonMenu").on("click", function () {
    $(".main-menu").toggleClass("open");
  });   

  $('.form-newsletter').submit(function(event){
    event.preventDefault(); 
    $('.message-sent').removeClass('hidden');
  });

  $(window).scroll(function(){
    if ($(this).scrollTop() > 100) {
        $('.btn-up').fadeIn();
    } else {
        $('.btn-up').fadeOut();
    }
  });

  $('.btn-up').click(function(){
    $('html, body').animate({scrollTop : 0},800);
    return false;
  });

  var currentYear = new Date().getFullYear();
  $("#yearPlaceholder").text(currentYear);
});



