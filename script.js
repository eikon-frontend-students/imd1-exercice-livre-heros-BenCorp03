let currentScene = "introduction";

const titleEl = document.getElementById("scene-title");
const imageEl = document.getElementById("scene-image");
const textEl = document.getElementById("scene-text");
const choicesEl = document.getElementById("choices");
const bgm = document.getElementById("bgm");
const jumpscareEl = document.getElementById("jumpscare");
const flashEl = document.getElementById("flash");

function startGame() {
  document.getElementById("start-screen").style.display = "none";
  document.getElementById("game").style.display = "block";

  bgm.volume = 0.5;
  bgm.play();

  showScene(currentScene);
}

document.getElementById("start-screen").addEventListener("click", () => {
  startGame();
  randomVectorLightning();
});

function showScene(name) {
  const scene = scenes[name];
  currentScene = name;

  if (scene.isEnding) {
    triggerJumpscare(() => renderScene(scene));
  } else {
    renderScene(scene);
  }
}

function renderScene(scene) {
  titleEl.textContent = scene.title;
  imageEl.src = scene.image;
  textEl.innerHTML = scene.text;

  choicesEl.innerHTML = "";
  scene.choices.forEach((choice) => {
    const btn = document.createElement("button");
    btn.textContent = choice.text;
    btn.onclick = () => showScene(choice.go);
    choicesEl.appendChild(btn);
  });
}

function triggerJumpscare(callback) {
  const img = jumpscareEl.querySelector("img");
  img.style.animation = "none";
  void img.offsetWidth;
  img.style.animation = "jumpscareZoom 0.6s ease-out";

  flashEl.style.opacity = "1";
  jumpscareEl.style.opacity = "1";
  jumpscareEl.style.pointerEvents = "auto";

  const scream = new Audio("audio/jumpscare.mp3");
  scream.volume = 1.0;
  scream.play();

  setTimeout(() => {
    flashEl.style.opacity = "0";
    jumpscareEl.style.opacity = "0";
    jumpscareEl.style.pointerEvents = "none";
    img.style.animation = "none";
    callback();
  }, 1000);
}

const thunder = new Audio("audio/thunder.mp3");
thunder.volume = 0.6;
thunder.preload = "auto";

function triggerVectorLightning() {
  const eclairs = document.querySelectorAll(".eclair");
  if (eclairs.length === 0) return; // sécurité

  const randomIndex = Math.floor(Math.random() * eclairs.length);
  const chosen = eclairs[randomIndex];

  chosen.style.opacity = "1";

  // Joue le son déjà préchargé
  thunder.currentTime = 0;
  thunder.play();

  setTimeout(() => {
    chosen.style.opacity = "0";
  }, 300);
}

function randomVectorLightning() {
  const delay = Math.random() * 10000 + 5000; // 5–15s
  setTimeout(() => {
    if (document.getElementById("game").style.display === "block") {
      triggerVectorLightning();
    }
    randomVectorLightning();
  }, delay);
}
