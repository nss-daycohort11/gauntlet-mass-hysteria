/*
  Base function for a player, or enemy, class (profession)
 */
var Toy = function() {
  this.intelligenceBonus = 0;
  this.magical = false;

  this.toString = function() {
    return this.name;
  }
};

Toy.prototype = new Hero();

var Human = function() {
  this.healthBonus = 20;
  this.strengthBonus = 10;
};
Human.prototype = new Toy();


var Buzz = function() {
  this.name = "Buzz";
  this.healthBonus = this.healthBonus + 25;
  this.strengthBonus = this.strengthBonus + 30;
};
Buzz.prototype = new Human();


var Woody = function() {
  this.name = "Woody";
  this.healthBonus = this.healthBonus + 20;
  this.strengthBonus = this.strengthBonus + 10;
};
Woody.prototype = new Human();

var BoPeep = function() {
  this.name = "BoPeep";
  this.healthBonus = this.healthBonus + 20;
  this.strengthBonus = this.strengthBonus + 10;
};
BoPeep.prototype = new Human();


var Jessie = function() {
  this.name = "Jessie";
  this.healthBonus = this.healthBonus + 35;
  this.strengthBonus = this.strengthBonus + 20;
};
Jessie.prototype = new Human();


var Barbie = function() {
  this.name = "Barbie";
  this.healthBonus = this.healthBonus + 10;
  this.strengthBonus = this.strengthBonus + 40;
};
Barbie.prototype = new Human();


/*
    ANIMAL CLASSES
      - Rex
      - Ham
      - Slinky
      - Bullseye
 */
var Animal = function() {
  this.name = "Amimal";
  this.magical = true;
  this.healthBonus = this.healthBonus + 10;
  this.strengthBonus = this.strengthBonus + 20;
  this.intelligenceBonus = this.intelligenceBonus + 20;
};
Animal.prototype = new Toy();


var Rex = function() {
  this.name = "Rex";
  this.healthBonus = this.healthBonus + 5;
  this.strengthBonus = this.strengthBonus - 10;
  this.intelligenceBonus = this.intelligenceBonus + 20;
};
Rex.prototype = new Animal();


var Hamm = function() {
  this.name = "Hamm";
  this.healthBonus = this.healthBonus - 15;
  this.strengthBonus = this.strengthBonus - 25;
  this.intelligenceBonus = this.intelligenceBonus + 40;
};
Hamm.prototype = new Animal();


var Slinky = function() {
  this.name = "Slinky";
  this.strengthBonus = this.strengthBonus - 10;
  this.intelligenceBonus = this.intelligenceBonus + 10;
};
Slinky.prototype = new Animal();


var Bullseye = function() {
  this.name = "Bullseye";
  this.healthBonus = this.healthBonus - 5;
  this.strengthBonus = this.strengthBonus - 20;
  this.intelligenceBonus = this.intelligenceBonus + 30;
};
Bullseye.prototype = new Animal();


/*
    STEALTH CLASSES
      - Thief
      - Ninja
      - Assassin
 */

