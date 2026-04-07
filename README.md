<img width="1573" height="340" alt="image" src="https://github.com/user-attachments/assets/efbf69f2-215f-4f96-a08a-82854f149cd8" />

![Version](https://img.shields.io/badge/version-0.7.0-blue) ![Status](https://img.shields.io/badge/status-active-success) ![License](https://img.shields.io/badge/license-MIT-green) ![Made with](https://img.shields.io/badge/made%20with-Three.js-orange) ![Platform](https://img.shields.io/badge/platform-web-lightgrey) ![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen)

# Simple FPS aim trainer
A lightweight browser-based FPS aim trainer built with **Three.js**, featuring **Valorant-style crosshair**, hit feedback, stats tracking, and dynamic difficulty.
[![Sponsor on GitHub](https://dabuttonfactory.com/button.png?t=Click+To+Play&f=Roboto-Bold&ts=28&tc=fff&hp=45&vp=20&w=1000&h=50&c=11&bgt=unicolored&bgc=f00)](https://aim-training-flame.vercel.app/)
---

## Features

### Core Gameplay

* 3D targets with lighting (real depth feel)
* 3 simultaneous targets
* Moving targets with increasing speed
* Miss penalty system (score -1)

### Shooting System

* Raycasting hit detection (accurate FPS logic)
* Hit / miss / shoot sound effects
* Hit flash effect on target

### Crosshair (Valorant-style)

* Adjustable:

  * Thickness
  * Length
  * Gap
  * Outline
* Clean + customizable UI-based rendering

### Game Mode

* 60-second timed session
* End-game summary (score & accuracy)
* "Play Again" restart system

### Stats Tracking

* Score
* Hits / Misses
* Accuracy %
* 🏆 Best score (saved in localStorage)
* 📈 Session history (last runs)

### Visual Effects

* Transparent canvas over custom background
* 3D lighting (ambient + directional)
* Hit flash feedback

---

## Tech Stack

* **Three.js** (3D rendering)
* **Vanilla JavaScript**
* **HTML + CSS**
* **LocalStorage API**

---

## 📂 Project Structure

```
aim-trainer/
│
├── index.html
├── asset/
│   ├── img/
│   │   └── grid-background.jpg
│   └── sound/
│       ├── shoot.mp3
│       ├── hit.mp3
│       └── miss.mp3
│
└── README.md
```

---

## ▶How to Run

### Option 1 (Simple and Super Easy)

Just open:

```
index.html
```

### Option 2 (Recommended - local server)

Use VS Code Live Server or:

```bash
npx serve .
```

---

## Controls

| Action  | Input             |
| ------- | ----------------- |
| Aim     | Mouse movement    |
| Shoot   | Left click        |
| Restart | Play Again button |

---

## Crosshair Settings (Example)

```js
const crosshairSettings = {
  thickness: 2,
  length: 8,
  gap: 6,
  outline: true,
  outlineThickness: 2
};
```

---

## Data Persistence

Stored locally in browser:

* Best Score
* Last session history

---

## 📸 Preview
> Initial prototype
<img width="1356" height="585" alt="image" src="https://github.com/user-attachments/assets/51bc6f5b-6358-4224-a387-7de43c3ffd3a" />
> Stable version release
<img width="1374" height="640" alt="image" src="https://github.com/user-attachments/assets/7721d48f-a3c3-4fb1-b465-e867d0925ae6" />


---

## Learning Purpose

This project demonstrates:

* 3D interaction with Three.js
* Raycasting (FPS hit detection)
* Game loop & animation
* UI + DOM + Canvas integration
* Local storage usage

---

# Improvement Roadmap

## Phase 1 – Gameplay Polish

* [x] Hit marker (Valorant style X)
* [x] Different target types (fast / small / tracking)

---

## Phase 2 – Advanced Training Modes

* [x] Gridshot mode (like 3D Aim Trainer)
* [ ] Flick training mode
* [ ] Tracking mode (smooth moving targets)
* [ ] Reaction time mode

---

## Phase 3 – Analytics System

* [ ] Accuracy over time graph
* [ ] Heatmap of misses
* [ ] Session comparison
* [ ] Export stats (JSON)

---

## Phase 4 – Settings UI

* [ ] Full settings panel (like Valorant)
* [ ] Sensitivity converter (DPI → in-game sens)
* [ ] Crosshair editor UI
* [ ] Audio Toggle On/Off
---

## Phase 5 – Deployment & Backend

* [ ] Deploy to Vercel / Netlify
* [ ] User accounts (login system)
* [ ] Cloud leaderboard
* [ ] Save stats online

---

## Phase 6 – Visual Upgrade

* [ ] Bloom/glow effects refinement
* [ ] Particle effects on hit
* [ ] Better UI (glassmorphism / neon theme)
* [ ] Animated background

---

## Phase 7 – AI Training

* [ ] Adaptive difficulty (AI adjusts speed)
* [ ] Skill rating system
* [ ] Personalized training suggestions

---

# Author

**xkysoft interactive 2026**
Tegar Ibrahim

---

# Support

If you like this project:

* ⭐ Star the repo
* 🍴 Fork it
* 🚀 Improve it

---

# 📜 License

MIT License (free to use & modify)

---
