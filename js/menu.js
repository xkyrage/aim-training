export const gameConfig = {
  targets: 4,
  sessionTime: 60
};

const menu = document.getElementById("mainMenu");

const targetSlider = document.getElementById("targetSlider");
const timeSlider = document.getElementById("timeSlider");

const targetValue = document.getElementById("targetValue");
const timeValue = document.getElementById("timeValue");

const startBtn = document.getElementById("startGameBtn");


// Initialize slider defaults
targetSlider.value = gameConfig.targets;
timeSlider.value = gameConfig.sessionTime;

targetValue.textContent = gameConfig.targets;
timeValue.textContent = gameConfig.sessionTime + "s";


// Targets slider
targetSlider.addEventListener("input", () => {

  gameConfig.targets = parseInt(targetSlider.value);
  targetValue.textContent = targetSlider.value;

});


// Time slider
timeSlider.addEventListener("input", () => {

  gameConfig.sessionTime = parseInt(timeSlider.value);
  timeValue.textContent = timeSlider.value + "s";

});


// Start game
startBtn.addEventListener("click", () => {

  menu.style.display = "none";

  window.dispatchEvent(new Event("startGame"));

});


// Load stats ONLY when page loads
function loadMenuStats(){

  const best = localStorage.getItem("bestScore") || 0;
  const lastAcc = localStorage.getItem("lastAccuracy") || "0%";

  document.getElementById("menuBest").textContent = best;
  document.getElementById("menuAccuracy").textContent = lastAcc;

}


// Run only once
window.addEventListener("DOMContentLoaded", loadMenuStats);