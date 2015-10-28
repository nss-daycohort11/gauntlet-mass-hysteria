/*
  Define the base object for any player of Gauntlet,
  whether a human player or a Villian.
 */
var Player = function(name) {
  this.species = null;
  this.class = null;
  this.weapon = null;
  this.name = "Beggar";
  this.healthBonus = 0;
  this.strengthBonus = 0;
  
  this.playerName = name || "unknown adventurer";
  this.health = Math.floor(Math.random() * 40 + 50);
  this.limbs = ["head", "neck", "arm", "leg", "torso"];
  this.skinColor = "gray";
  this.skinColors = [this.skinColor];
  this.strength = 90;
  this.intelligence = 90;

  this.attack = function () {
  if (this.id === "player") {
    villian.health -= this.damage();
  } else {
    Hero.health -= this.damage();
  }

  this.damage = function () {
      var damage = Math.floor(Math.random() * 14)
      return damage
    }
    

}





  this.toString = function() {
    var output = [this.playerName,
      ": a ",
      this.skinColor,
      " skinned ",
      this.species,
      " ",
      this.class,
      " with ",
      this.health,
      " health. ",
      // (this.class.magical) ? "Able to cast " : " Wielding a ",
      // this.weapon.toString(),
      "!"
    ].join("");
    return output;
  };
};

Player.prototype.setWeapon = function(newWeapon) {
  this.weapon = newWeapon;
}

Player.prototype.generateClass = function() {
  // Get a random index from the allowed classes array
  var random = Math.round(Math.random() * (this.allowedClasses.length - 1));

  // Get the string at the index
  var randomClass = this.allowedClasses[random];

  // Composes the corresponding player class into the player object
  this.class = randomClass;

  // Add the health bonus
  this.health += this.class.healthBonus;
  return this.class;
};

/*
  Define the base properties for a human in a 
  constructor function.
 */
var Hero = function() {
  var randomSkin;

  this.species = "Hero";
  this.intelligence = this.intelligence + 20;

  this.skinColors.push("brown", "red", "white", "disease");
  randomSkin = Math.round(Math.random() * (this.skinColors.length-1));
  this.skinColor = this.skinColors[randomSkin];

  this.allowedClasses = ["Buzz", "Jessie", "Woody", "Barbie"];
};
Hero.prototype = new Player();


/*
  Define the base properties for a Villian in a 
  constructor function.
 */
var Villian = function() {
  this.health = this.health - 5;
  this.intelligence = this.intelligence -20;
  this.strength = this.strength + 30;
  this.allowedClasses = ["Sid", "Lotso", "Stinky Pete", "Pixar Lawyers"];
};

Villian.prototype = new Player();

