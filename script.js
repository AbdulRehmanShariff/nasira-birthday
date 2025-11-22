// --- CONFIGURATION ---
const targetDate = new Date("November 24, 2025 00:00:00").getTime();

// --- ELEMENTS ---
const elDays = document.getElementById("d");
const elHours = document.getElementById("h");
const elMinutes = document.getElementById("m");
const elSeconds = document.getElementById("s");
const timerBox = document.getElementById("timer-box");
const statusText = document.getElementById("status-text");
const startBtn = document.getElementById("start-btn");
const nextBtn = document.getElementById("next-btn");
const uiContainer = document.getElementById("ui-container");
const fwAudio = document.getElementById("fw-audio");
const fwContainer = document.getElementById("firework-container");

// --- TIMER LOGIC ---
const timer = setInterval(() => {
  const now = new Date().getTime();
  const distance = targetDate - now;

  if (distance < 0) {
    // TIME IS UP!
    clearInterval(timer);
    unlockSurprise();
  } else {
    // KEEP COUNTING
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor(
      (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    elDays.innerText = String(days).padStart(2, "0");
    elHours.innerText = String(hours).padStart(2, "0");
    elMinutes.innerText = String(minutes).padStart(2, "0");
    elSeconds.innerText = String(seconds).padStart(2, "0");
  }
}, 1000);

// --- UNLOCK FUNCTION ---
function unlockSurprise() {
  // Hide timer, Show Start Button
  timerBox.style.display = "none";
  statusText.innerText = "It's time! Turn up your volume.";
  statusText.classList.replace("text-gray-400", "text-white");
  startBtn.classList.remove("hidden");
}

// --- FIREWORK SHOW LOGIC ---
startBtn.addEventListener("click", () => {
  // 1. Hide the UI immediately so we can see fireworks
  gsap.to(uiContainer, { opacity: 0, duration: 1 });

  // 2. Play Sound
  fwAudio.volume = 1.0;
  fwAudio.play().catch((e) => console.log("Audio blocked needs interaction"));

  // 3. Start Firework Loop (Lasts 20 seconds)
  let fwInterval = setInterval(() => {
    createFirework();
  }, 800); // New firework every 0.8 seconds

  // 4. After 20 Seconds... stop fireworks and show Next Button
  setTimeout(() => {
    clearInterval(fwInterval);

    // Bring UI back but different
    statusText.style.display = "none";
    startBtn.style.display = "none";

    uiContainer.style.opacity = 1; // Show card again
    nextBtn.classList.remove("hidden"); // Show Next Button
  }, 20000); // 20,000 ms = 20 seconds
});

nextBtn.addEventListener("click", () => {
  window.location.href = "celebrate.html";
});

// --- FIREWORK MAKER (Pure JS/CSS) ---
function createFirework() {
  // Pick random position
  const x = Math.random() * window.innerWidth;
  const y = Math.random() * (window.innerHeight / 2); // Top half only
  const color = `hsl(${Math.random() * 360}, 100%, 50%)`;

  // Create 30 particles
  for (let i = 0; i < 30; i++) {
    const particle = document.createElement("div");
    particle.classList.add("particle");
    particle.style.backgroundColor = color;
    particle.style.left = x + "px";
    particle.style.top = y + "px";
    fwContainer.appendChild(particle);

    // Explode out
    const angle = Math.random() * Math.PI * 2;
    const velocity = Math.random() * 150 + 50; // Spread distance

    gsap.to(particle, {
      x: Math.cos(angle) * velocity,
      y: Math.sin(angle) * velocity,
      opacity: 0,
      duration: 1.5,
      ease: "power2.out",
      onComplete: () => particle.remove(),
    });
  }
}

// --- DEV MODE: UNCOMMENT TO TEST NOW ---
// --- SECRET BACKDOOR FOR TESTING ---
// Nasira sees the timer (Locked)
// You see the surprise if you add ?mode=test to the URL

const urlParams = new URLSearchParams(window.location.search);
if (urlParams.has('test')) {
    console.log("Developer Mode: Unlocking Surprise...");
    unlockSurprise();
}

