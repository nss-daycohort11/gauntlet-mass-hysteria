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
    var message = "<div><h1>" + x.name + "</h1><p>Woody has " + x.healthBonus + " health points." + " He also has " + x.strengthBonus + " strength. To save strength and restore some health, you can choose to hide, but remember ... you only have three hides to use!</p></div>";
    console.log(message);
    $("#printMessage").append(message);
  });

// $(".card__hide").click(function(e) {

// })
  /*
    When the back button clicked, move back a view
   */
  $(".card__back").click(function(e) {
    var previousCard = $(this).attr("previous");
    $(".card").hide();
    $("." + previousCard).show();
  });

  var battle = $(".record");
  //function which records something in the battle record div, this will be used MANY TIMES later on. It takes an html string (string), and another string which will be a class name (css) so that I can make the rows in the battle record look different.
  var record = function (string, css) {
    battle.append("<div class='" + css + "'>" + string + "</div>");
  }

});

