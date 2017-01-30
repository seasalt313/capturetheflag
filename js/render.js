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
