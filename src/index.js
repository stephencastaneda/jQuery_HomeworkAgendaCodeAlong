import $ from "jquery";

$("li:lt(4)").hide().fadeIn(1500);

$("li").on("click", function () {
  $(this).remove();
});

$("#center").on("click", function () {
  $("body").addClass("center");
});

$("#dark").on("click", function () {
  $("body").toggleClass("dark");
});
