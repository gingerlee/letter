$(document).ready(function() {
  $(".form").submit(function(event) {
    var nameInput = $("input#inputName").val();
    $(".name").text(nameInput);


    $(".story").show();
    event.preventDefault();
  });
});
