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

var opponent = {};
function CreateOpponent(){
  var y = Math.random();
  if (y<.33){
    opponent= new Sid();
  }
  else if (y<.66){
    opponent= new Lotso();
  }
  else if (y<1){
    opponent= new Scud();
  }  
return opponent;
}
CreateOpponent();

console.log(opponent.health, opponent.name);

  // var activeVillian = new Villian();
  // activeVillian.generateClass();
  // activeVillian.setWeapon(new BroadSword());
  // console.log(sid.toString());

  // var currentHHealth = activeHero.health+activeHero.healthBonus;
  // var currentVHealth = activeVillian.health+activeVillian.healthBonus;


  /*
    Test code to generate a spell
   */
  // var spell = new Sphere();
  // console.log("spell: ", spell.toString());


  /*
    END OF TEST CODE

    Show the initial view that accepts player name
   */
  $("#player-setup").show();
  $("#name-submit").click(function(e){
  playerName = $("#player-name").val();
});

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
var currentHHealth;
var currentHHealthBonus;
var currentName;
var x ={};
  $(".choice").click(function(e) {
      x= new window[$(this).children()[1].innerHTML]();
    var message = "<img src='images/" + x.name + ".jpg' class='charphoto'><div class='messageText'><h1>" + x.name + "</h1><p>" + x.name + " has the following traits:</p><ul><li>Health: " + x.healthBonus + "</li><li>Strength: " + x.strengthBonus + "</li><li>Weapon of Choice: " + x.weapon + "</li></ul><p>To save strength and restore some health, you can choose to hide, but remember ... you only have three hides to use!</p></div>";
    console.log(message);
    $("#printMessage").html(message);
    currentHHealth = x.health;
    currentHHealthBonus = x.healthBonus;
    currentName=x.name;
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


/*$("#launch-game").click(function(e){
  $("#battletext").html(opponent.name + " strikes! Make your move, player:")
})*/




 $("#attack-button").click(function(e){
    // var battlestring =""; 
    var y = Math.random();
      
      // The two variables below will be modified to reflect a more complex battle algorithm.
      var hDamage = (opponent.strength+opponent.strengthBonus)/5;
      hDamage = Math.floor(hDamage);
      var vDamage = (x.strength+x.strengthBonus)/3;
      vDamage = Math.floor(vDamage);
      // console.log(x.healthBonus);
    if (y < .33){
      x.health = x.health - hDamage;
      if (x.health <= 0){
        // Go to Game Over LOSER page
      }
      else if (opponent.health <= 0){
        // Go to Game Over Winner Page
      }  
      else $("#battletext").prepend("<div class='battleentry'><div>" + x.name + "'s health has been reduced to " + x.health + ", " + playerName + ". Not. Cool. </div><div>To make matters worse, you failed to injure stupid " + opponent.name + ", whose health remains strong at " + opponent.health + ".</div></div>")
    }
    else if (y < .66){
      opponent.health = opponent.health - vDamage;
      if (x.health <= 0){

      }
      else if (opponent.health <= 0){

      }
      else $("#battletext").prepend("<div class='battleentry'><div>" + opponent.name + "'s idiocy and clumsiness prevail, " + playerName + "!! " + x.name + " is remains untouched, but is amused. Health is at " + x.health + ".</div><div>The pathetic " + opponent.name + "'s health has been reduced to " + opponent.health+  ".</div></div>")
    }
    else if (y < 1){
      x.health = x.health - hDamage;
      opponent.health = opponent.health - vDamage;
      if (x.health <= 0){

      }
      else if (opponent.health <=0){

      }
      else $("#battletext").prepend("<div class='battleentry'><div>" + x.name+"'s health has been reduced to " + x.health+ ", " + playerName + ".</div><div>" +opponent.name + "'s health has been reduced to a mere " + opponent.health + ".</div></div>")
    };

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
  console.log(x.health);
  var recoverHealth = 5;
  x.health = x.health + recoverHealth;
  console.log (x.health);

        $("#battletext").prepend("<div class='battleentry'><div>You've regained 5 health points, your current health is now " + currentHHealth + "</div><div> You now have " + numClicks + " hides left.</div>");


  });


 });





















