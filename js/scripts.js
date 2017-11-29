$(document).ready(function() {
  $("form#appts").submit(function(event) {
    var name = $("#name").val();
    var date = $("#date").val();
    var description = $("#description").val();
    var timeStart = $("#timeStart").val();
    var timeEnd = $("#timeEnd").val();

    $(".name").text(name);
    $(".date").text(date);
    $(".timeStart").text(timeStart);
    $(".timeEnd").text(timeEnd);
    $(".description").text(description);
    $("#confirmationPanel").toggle();
    event.preventDefault();
  });
});
