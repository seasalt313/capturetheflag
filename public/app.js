(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){

let Team = require('./team');
let Player = require('./player');
let Render = require('./render');



window.addEventListener('load', function(){
//Making two teams:
  let chasers = new Team("Chasers");
  let runners = new Team("Runners");

//Add members array:
  let chaserNames = ["Voldemort", "Snape", "Mad Eye Moody"];
  let runnerNames = ["Harry", "Ron", "Hermione", "Luna", "Mariam"];

//Add members and create teams:
  //Create Chasers Team
  for (let i = 0; i < chaserNames.length; i++) {
    let playerChaser = new Player(chaserNames[i])
    playerChaser.team = "chaser";
    chasers.add(playerChaser);
  }
  //Create Runners Team
  for (let i = 0; i < runnerNames.length; i++) {
    let playerRunner = new Player(runnerNames[i]);
    playerRunner.team = "runners";
    runners.add(playerRunner);
  }

  console.log(chasers.roster);
  console.log(chasers.name);
  console.log(chasers.roster[1].name);
  console.log(chasers.roster[1].tag(runners.roster[2]));

})

},{"./player":2,"./render":3,"./team":4}],2:[function(require,module,exports){
module.exports = function Player(name){
  this.name = name;
  this.team = null;
  this.frozen = false;
  this.hasFlag = false;

  this.tag = function(person){
    if (this.team === "chasers" && person.team === "runners") {
      console.log(person);
      return person.frozen = true;
    } else if (this.team === "runners" && person.team === "runners") {
      console.log(person);
      return person.frozen = false;
    }
  }


  return this;
}

},{}],3:[function(require,module,exports){
module.exports = function Render(){
  let select = document.querySelector("select");
  let addPlayer = document.querySelector("#addPlayer");
  let parent = document.querySelector(".ul");
  let button = document.querySelector("#addbtn")

  console.log("render");

  addbtn.addEventListener("click", function(){
    let child = document.createElement("li");
    child.innerHTML = Mustache.render(
          document.querySelector('#flag-template').innerHTML,
            {
              name: addPlayer.value,
              team: select.value
            });
        parent.appendChild(child);
console.log("button");
  })

}

},{}],4:[function(require,module,exports){
module.exports = function Team(name){
    this.name = name;
    this.roster = [];
    this.add = function(recruit){
        this.roster.push(recruit);
      }

    this.won = function(opponent){
      if (this.name = "chasers") {
        for (let i = 0; i < opponent.length; i++) {
          if (opponent[i].frozen === false) {
            return false;
          }
        }
      } else if (this.name === "runners") {
        for (let i = 0; i < this.length; i++) {
          if (this[i].hasFlag() === true) {
            console.log("Runners win!");
            return true;
          }
        }
      }
    }

    return this;
}

},{}]},{},[1]);
