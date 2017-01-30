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
