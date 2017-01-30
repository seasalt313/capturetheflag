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
