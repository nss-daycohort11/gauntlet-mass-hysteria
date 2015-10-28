$(document).ready(function() {

  /*
    Test code to generate a human player and an sid player
   */
  // console.log(Human);
  var activeHero = new Hero();
  // console.log(buzz)
  activeHero.setWeapon(new WarAxe());
  // x.generateClass();  // This will be used for "Surprise me" option
  // console.log(buzz.toString());

  var activeVillian = new Villian();
  activeVillian.generateClass();
  activeVillian.setWeapon(new BroadSword());
  // console.log(sid.toString());

  var currentHHealth = activeHero.health+activeHero.healthBonus;
  var currentVHealth = activeVillian.health+activeVillian.healthBonus;


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

        // clearInput();
    }

    // function clearInput() {
    //   playerName.val = "";
    //   console.log(playerName.val);
    // } 

    if (moveAlong) {
      $(".card").hide();
      $("." + nextCard).show();
    }

  });

  $(".choice").click(function(e) {
    var x= new window[$(this).children()[1].innerHTML]();
    var message = "<img src='images/" + x.name + ".jpg' class='charphoto'><div class='messageText'><h1>" + x.name + "</h1><p>" + x.name + " has the following traits:</p><ul><li>Health: " + x.healthBonus + "</li><li>Strength: " + x.strengthBonus + "</li><li>Weapon of Choice: " + x.weapon + "</li></ul><p>To save strength and restore some health, you can choose to hide, but remember ... you only have three hides to use!</p></div>";
    console.log(message);
    $("#printMessage").html(message);
    // CreateOpponent();
  });



  /*
    When the back button clicked, move back a view
   */
  $(".card__back").click(function(e) {
    var previousCard = $(this).attr("previous");
    $(".card").hide();
    $("." + previousCard).show();
    // printMessage.remove(message);
  });


$("#launch-game").click(function(e){
  $("#battletext").html(Opponent + "strikes! Make your move, player:")
})


 $("#attack-button").click(function(e){
    var battlestring =""; 
    var y = Math.random();
      
      // The two variables below will be modified to reflect a more complex battle algorithm.
      var hDamage = 2;
      var vDamage = 2;
      // console.log(x.healthBonus);
    if (y < .33){
      currentHHealth = currentHHealth - hDamage;
      $("#battletext").append("<div class='" + "'> Your health has been reduced to " + activeHero.healthBonus + "</div><div class='" + "'> You failed to injure the enemy. Their health remains strong at " + currentVHealth);
    }
    else if (y < .66){
      currentVHealth = currentVHealth - vDamage;
      $("#battletext").append("<div class='" + "'> The weakness of the enemy prevails. Your health remains " + currentHHealth + "</div><div class='" + "'> Your pathetic enemy's health has been reduced to " +currentVHealth);
    }
    else if (y < 1){
      currentHHealth = currentHHealth - hDamage;
      currentVHealth = currentVHealth - vDamage;
      $("#battletext").append("<div class='" + "'> Your health has been reduced to " + currentHHealth+ "</div><div class='" + "'> Your enemy's health has been reduced to " + currentVHealth);
    }

});


var hideButton = $('#hide-button')

var numClicks = 3
 
// Limit number of clicks on hide to 3

 hideButton.click(function(e) {
  var tally = ($(this).data('clicks') || 0) + 1;
  numClicks = numClicks - 1;
  console.log(numClicks);
  if ( tally < 3 ) {
    $(this).data('clicks', tally);
    console.log(tally);

  } else {
    hideButton.hide();
  }
 
});

 // Determines gained health, adds to current health and notifies player

hideButton.click(function(e) {
  console.log(currentHHealth);
  var recoverHealth = 5;
  currentHHealth = recoverHealth + currentHHealth;
  console.log (currentHHealth);

        $("#battletext").append("<div class='" + "'> You've regained 5 health points, your current health is now " + currentHHealth + "</div><div class='" + "'> You now have " + numClicks + " hides left </div>");

  });


// Play Again
  $("#playAgain").click(function(e) {
    window.location.href= "../index.html";

  })

 });





















