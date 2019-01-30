$(document).ready(function(){
  $("#content2").hide();

  $(".du").click(function() {
    $("#content").hide("slow");
    $("#content2").show("slow");
  });
  $(".unu").click(function() {
    $("#content").show("slow");
    $("#content2").hide("slow");
  });
});
