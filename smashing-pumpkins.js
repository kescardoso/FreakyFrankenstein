$(function () {
  $("#pumpkin-1").click(function () {
    $("#pumpkin-whole").show(fast);
    $("#pumpkin-half").fadeIn(500).fadeOut(500);
    $("#pumpkin-smashed").fadeIn(500);
    $("#image1").show(500);
  });
  $("#pumpkin-2").click(function () {
    $("#image2").fadeIn(1000);
  });
  $("#pumpkin-3").click(function () {
    $("#image3").fadeIn(1000);
  });
  $("#pumpkin-4").click(function () {
    $("#image4").fadeIn(1000);
  })
  $("#pumpkin-5").click(function () {
    $("#image5").fadeIn(1000);
  });
  $("#pumpkin-6").click(function () {
    $("#image6").fadeIn(1000);
  })
})