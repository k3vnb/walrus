$(document).ready(function() {
  $(".clickable").click(function() {
    $("#walrus-showing").slideToggle(3000);
    $("#walrus-hidden").slideToggle(3000);
  });
  $(".reveal").click(function() {
    $("#cereal-showing").fadeToggle(1000);
  });
});
