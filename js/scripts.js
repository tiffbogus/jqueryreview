$(document).ready(function() {
  $("#blanks form").submit(function(event) {
    var icecreamInput = $("input#icecream").val();
    var musicInput = $("input#music").val();
    var movieInput= $("input#movie").val();
    var colorInput = $("input#color").val();
    var seasonInput = $("input#season").val();
    var dinosaurInput = $("input#dinosaur").val();

    $(".icecream").text(icecreamInput);
    $(".music").text(musicInput);
    $(".movie").text(movieInput);
    $(".color").text(colorInput);
    $(".season").text(seasonInput);
    $(".dinosaur").text(dinosaurInput);

    $("#favelist").show();

    event.preventDefault();
  });
});
