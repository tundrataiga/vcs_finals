$("#lotosas-1").fadeIn(500);

$(".slider").scroll(function() {
  var pos = $(".slider").scrollTop();
  if (pos < 200) {
    hideAll("lotosas-1");
    $("#lotosas-1").fadeIn(500);
  }
  if (pos > 200 && pos < 800) {
    hideAll("lotosas-2");
    $("#lotosas-2").fadeIn(500);
  }
    if (pos > 800 && pos < 1600) {
    hideAll("lotosas-3");
    $("#lotosas-3").fadeIn(500);
  }
});

function hideAll(exceptMe) {
  $(".slider").each(function(i) {
    if ($(this).attr("id") == exceptMe) return;
    $(this).show();
  });
}