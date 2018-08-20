$(document).ready(function() {
  $("#new-place").submit(function(event) {
    event.preventDefault();

    var place = $("input#new-destination").val();
    var time = $("input#new-time").val();
    var reason = $("input#new-why").val();

    var myVisit = new Visit(place, time, reason);

    $("ul#places").append("<li><span class='location'>" + myVisit.place + "</span></li>")

    $(".location").last().click(function(){
      $("#show-visit").show();
      $("#show-visit h2").text(myVisit.place);
      $(".place").text(myVisit.place);
      $(".time").text(myVisit.time);
      $(".why").text(myVisit.reason);
    });

    $("input#new-destination").val("");
    $("input#new-time").val("");
    $("input#new-why").val("");
  });
});

function Visit (place, time, reason) {
  this.place = place;
  this.time = time;
  this.reason=reason;
}
