$(document).ready(function() {
  $(".clickable").click(function() {
    $("#walrus-showing").slideToggle(3000);
    $("#walrus-hidden").slideToggle(3000);
  });
  $(".reveal").click(function() {
    $("#cereal-showing").fadeToggle(1000);
  });
  //colors page
  $("button#green").click(function() {
    $("body").removeClass();
    $("body").addClass("green-background");
  });

  $("button#yellow").click(function() {
    $("body").removeClass();
    $("body").addClass("yellow-background");
  });

  $("button#red").click(function() {
    $("body").removeClass();
    $("body").addClass("red-background");
  });
});
