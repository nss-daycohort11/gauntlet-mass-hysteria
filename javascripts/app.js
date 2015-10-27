$(document).ready(function() {

  /*
    Test code to generate a human player and an sid player
   */
  // console.log(Human);
  var activeHero = new Hero();
  // console.log(buzz)
  activeHero.setWeapon(new WarAxe());
  activeHero.generateClass();  // This will be used for "Surprise me" option
  // console.log(buzz.toString());

  var activeVillian = new Villian();
  activeVillian.generateClass();
  activeVillian.setWeapon(new BroadSword());
  // console.log(sid.toString());

  /*
    Test code to generate a spell
   */
  var spell = new Sphere();
  // console.log("spell: ", spell.toString());


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
  });



 $("#attack-button").click(function(e){
  var x = Math.random();
  console.log(x);
  if (0<x<.33){
    $("#battleground").append("<div class='" + "'> Your health has been reduced to" + activeHero.healthBonus.value + "</div><div class='" + "'> You failed to injure the enemy. Their health remains strong at " + activeVillian.healthBonus.value + "</div>");
  }
  else if (.33<x<.66){
    $("#battleground").append("<div class='" + "'> The weakness of the enemy prevails. Your health remains" + activeHero.healthBonus.value + "</div><div class='" + "'> Your pathetic enemy's health has been reduced to " + activeVillian.healthBonus.value + "</div>");
  }
  else if (x>.66){
    var hDamage = 2;
    var vDamage = 2;
    activeHero.healthBonus = activeHero.healthBonus - hDamage;
    activeVillian.healthBonus = activeVillian.healthBonus - hDamage;
    var battlestring =""; 
    $("#battleground").append("<div class='" + "'> Your health has been reduced to" + activeHero.healthBonus.value + "</div><div class='" + "'> Your enemy's health has been reduced to " + activeVillian.healthBonus.value + "</div>");
  }

});
});

