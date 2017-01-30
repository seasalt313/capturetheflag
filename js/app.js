
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
