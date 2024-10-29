const $scrollToTopButton = $("#scroll-to-top");
  
$("#menu-toggle").on("click", function() {
  $("#mobile-menu").toggleClass("hidden");
}); 

// Show the button when scrolled down 200px
$(window).on("scroll", function() {
  if ($(this).scrollTop() > 100) {
    $scrollToTopButton.css("display", "flex");
  } else {
    $scrollToTopButton.css("display", "none");
  }
});

// Scroll to the top smoothly
$scrollToTopButton.on("click", function() {
  $("html, body").animate({ scrollTop: 0 }, "smooth");
});