var rocks = 0;

function rockClick(number){
  rocks = rocks + number;
  document.getElementById("rocks").innerHTML = rocks;
};

var miners = 0;
function buyMiner(){
    var minerCost = Math.floor(10 * Math.pow(1.1,miners));     //works out the cost
    if(rocks >= minerCost){                                   //checks that the player can afford
        miners = miners + 1;                                   //increases number of miners
      	rocks = rocks - minerCost;                          //removes the rocks spent
        document.getElementById('miners').innerHTML = miners;  //updates the number of miners for the user
        document.getElementById('rocks').innerHTML = rocks;  //updates the number of rocks for the user
    };
    var nextCost = Math.floor(10 * Math.pow(1.1,miners));       //works out the cost of the next miner
    document.getElementById('minerCost').innerHTML = nextCost;  //updates the miner cost for the user
};

//

let last_time = null;
let total_time = 0;
setInterval(function gameLoop() {
  const current_time = Date.now();
  if (last_time === null) {
    last_time = current_time;
  }
  const delta_time = current_time - last_time;
  total_time += delta_time;
  last_time = current_time;
  updateMyGame(delta_time, total_time);
}, 1000 / 60);

// calculate starting currency based on total_time and rates

const currency_display = document.getElementById("rocks")
let miner_rate_per_second = 1;

function updateMyGame(delta_time, total_time) {
  rocks += ((miners * miner_rate_per_second) / 1000) * delta_time;
  currency_display.textContent = rocks.toFixed(2);
}
