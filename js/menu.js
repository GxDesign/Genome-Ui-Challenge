// Trigger cupcake-to-menu animations

$(document).ready(function() {
  setTimeout(function() {
    $("#cupcake").toggleClass("bounce");
    $("#cc-shadow").toggleClass("bounce");
    setTimeout(function() {
      $("#cupcake").toggleClass("bounce");
      $("#cc-shadow").toggleClass("bounce");
    }, 1000);
    setTimeout(function() {
      $("#cupcake-container").toggleClass("active");
      $("#cupcake").toggleClass("buttons");
      $("#cupcake-container #title").toggleClass("active");
    }, 1200);
  }, 2000);
})





// ACTIVATE MINI MOBILE MENU

// Every time the window is scrolled ... fade in and out
$(window).scroll(function() {
  var bottom_of_object = $("section#three").offset().top + $("section#three").outerHeight();
  var bottom_of_window = $(window).scrollTop();

  //set trigger at 900px
  if (bottom_of_window > 900) {
    $("#mini-mobile-menu").addClass("active");
  } else {
    $("#mini-mobile-menu").removeClass("active");
  }
});
