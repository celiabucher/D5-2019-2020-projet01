


$(document).ready(function() {
  $('.go-below').on('click', function() { // Au clic sur un élément
    var page = $(this).attr('href'); // Page cible
    var speed = 750; // Durée de l'animation (en ms)
    $('html, body').animate( { scrollTop: $(page).offset().top }, speed ); // Go
    return false;
  });
  $('.go-top').on('click', function() { // Au clic sur un élément
    var page = $(this).attr('href'); // Page cible
    var speed = 750; // Durée de l'animation (en ms)
    $('html, body').animate( { scrollTop: $(page).offset().top }, speed ); // Go
    return false;
  });

  $(".carousel").slick({
    dots: true,
    speed: 500
  });
  
  $(".hamburger").click(function(){
    $(".hamburger").toggleClass("is-active");
    $(".menu").toggleClass('is-active');
  });
});
