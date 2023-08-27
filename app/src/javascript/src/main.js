$(function () {

  $(".header__burger, .header__nav a").on("click", function () {
    $(".header__nav").toggleClass("header__nav--active");
  });

});
