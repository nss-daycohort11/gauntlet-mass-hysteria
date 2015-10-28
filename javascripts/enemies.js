var Sid = function() {
  this.health = this.health + 20;
  this.name = "Sid";
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
  this.name = "Lotso";
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
  this.name = "StinkyPete";
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
  this.name = "PixarLawyers";
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
  this.name = "Scud";
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

Scud.prototype = new Villian();

var Zurg = function() {
  this.health = this.health + 20;
  this.name = "Scud";
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

Scud.prototype = new Villian();

