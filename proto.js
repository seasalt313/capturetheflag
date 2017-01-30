function Team(name){
  this.name = name;
}

function Player(name, team){
  this.name = name;
  this.team = team;
}

function Runner(name){
  this.name = name;
  this.hasFlag = function(){
    return false;
  };
  this.frozen = false;
  return this;
}

Player.prototype = Runner.prototype;

function Chaser(name){
  this.name = name;
}

Player.prototype = Chaser.prototype;

window.addEventListener('load', function(){




})
