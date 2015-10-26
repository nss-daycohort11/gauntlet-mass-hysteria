var Sid = function() {
  this.health = this.health + 20;
  this.species = "Sid";
  this.allowedClasses = ["Buzz", "Jessie", "Rex"];

  this.generateClass = function() {
    // Get a random index from the allowed classes array
    var random = Math.round(Math.random() * (this.allowedClasses.length - 1));

    // Get the string at the index
    var randomClass = this.allowedClasses[random];

    // Composes the corresponding player class into the player object
    this.class = new window[randomClass]();
    return this.class;
  }
};

Sid.prototype = new Villian();

var Lotso = function() {
  this.health = this.health + 20;
  this.species = "Lotso";
  this.allowedClasses = ["Buzz", "Jessie", "Rex"];

  this.generateClass = function() {
    // Get a random index from the allowed classes array
    var random = Math.round(Math.random() * (this.allowedClasses.length - 1));

    // Get the string at the index
    var randomClass = this.allowedClasses[random];

    // Composes the corresponding player class into the player object
    this.class = new window[randomClass]();
    return this.class;
  }
};

Lotso.prototype = new Villian();

var StinkyPete = function() {
  this.health = this.health + 20;
  this.species = "StinkyPete";
  this.allowedClasses = ["Buzz", "Jessie", "Rex"];

  this.generateClass = function() {
    // Get a random index from the allowed classes array
    var random = Math.round(Math.random() * (this.allowedClasses.length - 1));

    // Get the string at the index
    var randomClass = this.allowedClasses[random];

    // Composes the corresponding player class into the player object
    this.class = new window[randomClass]();
    return this.class;
  }
};

StinkyPete.prototype = new Villian();

var PixarLawyers = function() {
  this.health = this.health + 20;
  this.species = "PixarLawyers";
  this.allowedClasses = ["Buzz", "Jessie", "Rex"];

  this.generateClass = function() {
    // Get a random index from the allowed classes array
    var random = Math.round(Math.random() * (this.allowedClasses.length - 1));

    // Get the string at the index
    var randomClass = this.allowedClasses[random];

    // Composes the corresponding player class into the player object
    this.class = new window[randomClass]();
    return this.class;
  }
};

PixarLawyers.prototype = new Villian();

var Scud = function() {
  this.health = this.health + 20;
  this.species = "Scud";
  this.allowedClasses = ["Buzz", "Jessie", "Rex"];

  this.generateClass = function() {
    // Get a random index from the allowed classes array
    var random = Math.round(Math.random() * (this.allowedClasses.length - 1));

    // Get the string at the index
    var randomClass = this.allowedClasses[random];

    // Composes the corresponding player class into the player object
    this.class = new window[randomClass]();
    return this.class;
  }
};

Zurg.prototype = new Villian();

var Zurg = function() {
  this.health = this.health + 20;
  this.species = "Scud";
  this.allowedClasses = ["Buzz", "Jessie", "Rex"];

  this.generateClass = function() {
    // Get a random index from the allowed classes array
    var random = Math.round(Math.random() * (this.allowedClasses.length - 1));

    // Get the string at the index
    var randomClass = this.allowedClasses[random];

    // Composes the corresponding player class into the player object
    this.class = new window[randomClass]();
    return this.class;
  }
};

Zurg.prototype = new Villian();

