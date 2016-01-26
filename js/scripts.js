function Place (local,landmark,season,notes) {
  this.local= local;
  this.landmark = landmark;
  this.season = season;
  this.notes = notes;

  function resetFields(){
    $("input#new-first-name").val("");
    $("input#new-last-name").val("");
    $("input.new-street").val("");
    $("input.new-city").val("");
    $("input.new-state").val("");
  }
}

Place.prototype.fullLand = function () {
  return this.season + " in " + this.local;
}

$(document).ready(function() {


 $("form#new-local").submit(function(event) {
   event.preventDefault();

   var inputtedLocal = $("input#new-first-local").val();
   var inputtedLandmark = $("input#new-landmark").val();
   var inputtedSeason = $("input#new-season").val();
   var inputtedNotes = $("input#new-notes").val();
  var newLocal = new Place(inputtedLocal, inputtedLandmark, inputtedSeason, inputtedNotes);

   $("ul#locationList").append("<li><span class='contact'>" + newLocal.fullLand() + "</span></li>");

   $("input#new-first-local").val("");
   $("input#new-landmark").val("");
   $("input#new-season").val("");
   $("input#new-notes").val("");

   $(".contact").last().click(function(){
     $("#show-location").fadeToggle();
     $("#show-location h2").text(newLocal.fullLand());
     $(".first-location").text(newLocal.local);
     $(".season").text(newLocal.season);
     $(".landmarked").text(newLocal.landmark);
     $(".noted").text(newLocal.notes);

     $resetFields();
  });


});
});
