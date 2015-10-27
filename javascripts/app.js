$(document).ready(function() {

  /*
    Test code to generate a human player and an sid player
   */
  console.log(Human);
  var buzz = new Human();
  console.log(buzz)
  buzz.setWeapon(new WarAxe());
  buzz.generateClass();  // This will be used for "Surprise me" option
  console.log(buzz.toString());

  var sid = new Villian();
  sid.generateClass();
  sid.setWeapon(new BroadSword());
  console.log(sid.toString());

  /*
    Test code to generate a spell
   */
  var spell = new Sphere();
  console.log("spell: ", spell.toString());


  /*
    END OF TEST CODE

    Show the initial view that accepts player name
   */
  $("#player-setup").show();
  var playerName = $("#player-name").val();


  /*
    When any button with card__link class is clicked,
    move on to the next view.
   */
  $(".card__link").click(function(e) {
    var nextCard = $(this).attr("next");
    var moveAlong = false;

    switch (nextCard) {
      case "card--class":
        moveAlong = ($("#player-name").val() !== "");
        break;
      case "card--character":
        moveAlong = ($("#player-name").val() !== "");
        break;
      case "card--battleground":
        moveAlong = ($("#player-name").val() !== "");
        break;
      case "card--end":
        moveAlong = ($("#player-name").val() !== "");
        break;

    }

    if (moveAlong) {
      $(".card").hide();
      $("." + nextCard).show();
    }
  });

  $(".choice").click(function(e) {
    var x = new window[$(this).children()[1].innerHTML]();
    console.log(x);
    var message = "<img src='images/" + x.name + ".jpg' class='charphoto'><div class='messageText'><h1>" + x.name + "</h1><p>" + x.name + " has " + x.healthBonus + " health points." + " He also has " + x.strengthBonus + " strength. To save strength and restore some health, you can choose to hide, but remember ... you only have three hides to use!</p></div>";
    console.log(message);
    $("#printMessage").html(message);
  });



  /*
    When the back button clicked, move back a view
   */
  $(".card__back").click(function(e) {
    var previousCard = $(this).attr("previous");
    $(".card").hide();
    $("." + previousCard).show();
    printMessage.remove(message);
  });



 $("#attack-button").click(function(e){
  var hDamage ="";
  var vDamage ="";
  var battlestring =""; 
  $("#battleground").append("<div class='" + "'>" + battlestring + "asdfasdf</div>");

});


var hideButton = $('#hide-button')
 
 hideButton.click(function(e) {
  var tally = ($(this).data('clicks') || 0) + 1;
  if ( tally < 3 ) {
    $(this).data('clicks', tally);
    console.log(tally);
  } else {
  $("#grayedOut").prop("disabled", true);
  $("#grayedOut").addClass("disable");
  }
});

hideButton.click(function(e) {
  var recoverHealth = 5;
  // var addHealth = new window[$(this).healthBonus() + recoverHealth;
  console.log (recoverHealth);
});
  // var recoverHealth = $(this.healthBonus) + 5;
  // var notification = "<div>You have gained 5 health points back.  You now have </div>";
  // console.log(recoverHealth);

 });





















