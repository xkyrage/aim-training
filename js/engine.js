import { gameConfig } from "./menu.js";


let MAX_TARGETS = 3;
let GAME_DURATION = 60;

let scene, camera, renderer, raycaster, mouse;
let targets = [];

let score = 0;
let hits = 0;
let misses = 0;

let timeLeft = GAME_DURATION;
let gameActive = false;
let timerInterval;

let bestScore = localStorage.getItem("bestScore") || 0;

let targetSpeed = 0.01;

// SOUND
const shootSound = new Audio("asset/sound/shoot.mp3");
const hitSound = new Audio("asset/sound/hit.mp3");
const missSound = new Audio("asset/sound/miss.mp3");
const endSound = new Audio("asset/sound/notification.mp3");

// CROSSHAIR
const crosshairSettings = {
  thickness: 2,
  length: 8,
  gap: 6
};

function createCrosshair() {

  const crosshair = document.getElementById("crosshair");
  crosshair.innerHTML = "";

  const dirs = ["top","bottom","left","right"];

  dirs.forEach(dir => {

    const line = document.createElement("div");
    line.style.position = "absolute";
    line.style.background = "white";

    if(dir === "top" || dir === "bottom"){

      line.style.width = crosshairSettings.thickness + "px";
      line.style.height = crosshairSettings.length + "px";

      let y = dir === "top"
        ? -(crosshairSettings.gap + crosshairSettings.length)
        : crosshairSettings.gap;

      line.style.left = "50%";
      line.style.top = `calc(50% + ${y}px)`;
      line.style.transform = "translateX(-50%)";

    } else {

      line.style.width = crosshairSettings.length + "px";
      line.style.height = crosshairSettings.thickness + "px";

      let x = dir === "left"
        ? -(crosshairSettings.gap + crosshairSettings.length)
        : crosshairSettings.gap;

      line.style.top = "50%";
      line.style.left = `calc(50% + ${x}px)`;
      line.style.transform = "translateY(-50%)";
    }

    crosshair.appendChild(line);
  });

}

createCrosshair();

init();
animate();

window.addEventListener("startGame", startGame);

function init(){

  scene = new THREE.Scene();

  camera = new THREE.PerspectiveCamera(
    75,
    window.innerWidth / window.innerHeight,
    0.1,
    1000
  );

  camera.position.z = 5;

  renderer = new THREE.WebGLRenderer({alpha:true});
  renderer.setSize(window.innerWidth, window.innerHeight);
  document.body.appendChild(renderer.domElement);

  const ambientLight = new THREE.AmbientLight(0xffffff,0.5);
  scene.add(ambientLight);

  const dirLight = new THREE.DirectionalLight(0xffffff,1.2);
  dirLight.position.set(2,2,5);
  scene.add(dirLight);

  raycaster = new THREE.Raycaster();
  mouse = new THREE.Vector2(0,0);

  window.addEventListener("mousemove",(event)=>{

    const crosshair = document.getElementById("crosshair");

    crosshair.style.left = event.clientX + "px";
    crosshair.style.top = event.clientY + "px";

    mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
    mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;

  });

  document.addEventListener("mousedown", shoot);

  // GLOBAL BUTTON HANDLER (RETRY + MENU FIX)
  document.addEventListener("click",(e)=>{

    if(e.target.id === "retryBtn"){
      resetGame();
    }

    if(e.target.id === "menuBtn"){
      backToMenu();
    }

  });

  updateUI();
}

function startGame(){

  MAX_TARGETS = gameConfig.targets;
  GAME_DURATION = gameConfig.sessionTime;

  score = 0;
  hits = 0;
  misses = 0;

  targetSpeed = 0.01;

  timeLeft = GAME_DURATION;
  gameActive = true;

  targets.forEach(t => scene.remove(t));
  targets = [];

  spawnInitialTargets();

  updateUI();

  document.getElementById("resultOverlay").style.display = "none";
  document.getElementById("mainMenu").style.display = "none";

  document.body.style.cursor = "none";
  document.getElementById("crosshair").style.display = "block";

  startTimer();
}

function spawnInitialTargets(){

  for(let i=0;i<MAX_TARGETS;i++){
    spawnTarget();
  }

}

function spawnTarget(){

  let size = Math.max(0.15,0.4 - score * 0.005);

  const geo = new THREE.SphereGeometry(size,32,32);

  const mat = new THREE.MeshStandardMaterial({
    color:0xff0000,
    roughness:0.4,
    metalness:0.2
  });

  const target = new THREE.Mesh(geo,mat);

  let valid = false;

  while(!valid){

    target.position.x = (Math.random()-0.5)*3;
    target.position.y = (Math.random()-0.5)*2;
    target.position.z = 0;

    valid = true;

    for(let t of targets){

      if(target.position.distanceTo(t.position) < 0.8){
        valid = false;
        break;
      }

    }

  }

  scene.add(target);
  targets.push(target);

}

function shoot(){

  if(!gameActive) return;

  shootSound.currentTime = 0;
  shootSound.play();

  raycaster.setFromCamera(mouse,camera);

  const intersects = raycaster.intersectObjects(targets);

  if(intersects.length > 0){

    const hit = intersects[0].object;

    flashTarget(hit);

    scene.remove(hit);

    targets = targets.filter(t => t !== hit);

    score++;
    hits++;

    targetSpeed = 0.01 + score * 0.0005;

    hitSound.currentTime = 0;
    hitSound.play();

    spawnTarget();

  } else {

    score--;
    misses++;

    missSound.currentTime = 0;
    missSound.play();

  }

  updateUI();

}

function flashTarget(target){

  const original = target.material.color.getHex();

  target.material.color.set(0xffffff);

  setTimeout(()=>{
    target.material.color.set(original);
  },100);

}

function updateUI(){

  document.getElementById("score").innerText = score;
  document.getElementById("hits").innerText = hits;
  document.getElementById("misses").innerText = misses;
  document.getElementById("time").innerText = timeLeft;

  let total = hits + misses;

  let acc = total > 0
    ? ((hits / total) * 100).toFixed(0)
    : 100;

  document.getElementById("accuracy").innerText = acc + "%";

  const bestEl = document.getElementById("bestScore");
  if(bestEl) bestEl.innerText = bestScore;

}

function startTimer(){

  clearInterval(timerInterval);

  timerInterval = setInterval(()=>{

    if(!gameActive) return;

    timeLeft--;

    document.getElementById("time").innerText = timeLeft;

    if(timeLeft <= 0) endGame();

  },1000);

}

function endGame(){

  gameActive = false;
  clearInterval(timerInterval);

  let total = hits + misses;

  let acc = total > 0
    ? ((hits / total) * 100).toFixed(1)
    : 0;

  if(score > bestScore){

    bestScore = score;
    localStorage.setItem("bestScore",bestScore);

  }

  localStorage.setItem("lastAccuracy",acc + "%");

  document.getElementById("finalScore").innerText = score;
  document.getElementById("finalAccuracy").innerText = acc + "%";

  endSound.currentTime = 0;
  endSound.play();

  document.getElementById("resultOverlay").style.display = "flex";

  document.body.style.cursor = "default";
  document.getElementById("crosshair").style.display = "none";

}

function resetGame(){

  clearInterval(timerInterval);

  score = 0;
  hits = 0;
  misses = 0;

  timeLeft = GAME_DURATION;
  targetSpeed = 0.01;

  targets.forEach(t => scene.remove(t));
  targets = [];

  document.getElementById("resultOverlay").style.display = "none";

  spawnInitialTargets();

  updateUI();

  gameActive = true;

  document.body.style.cursor = "none";
  document.getElementById("crosshair").style.display = "block";

  startTimer();
}

function backToMenu(){

  location.reload();

}
function animate(){

  requestAnimationFrame(animate);

  targets.forEach(t=>{

    t.position.x += (Math.random()-0.5)*targetSpeed;
    t.position.y += (Math.random()-0.5)*targetSpeed;

  });

  renderer.render(scene,camera);

}