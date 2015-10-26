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
      case "card--weapon":
        moveAlong = ($("#player-name").val() !== "");
        break;
    }

    if (moveAlong) {
      $(".card").hide();
      $("." + nextCard).show();
    }
  });

  /*
    When the back button clicked, move back a view
   */
  $(".card__back").click(function(e) {
    var previousCard = $(this).attr("previous");
    $(".card").hide();
    $("." + previousCard).show();
  });

});