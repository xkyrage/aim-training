# Changelog

All notable changes to this project will be documented in this file.

The format is based on Keep a Changelog  
and this project follows Semantic Versioning (SemVer).

---
## [0.8.0] - 2026-04-09
### Menu System & Session Improvements
Added:
- Main Menu modal displayed when the page loads
- Game configuration controls:
- Target count slider (1–6 targets)
- Session timer slider (10–60 seconds)
- Result Overlay after session ends
- Retry button to restart the session immediately
- Back to Menu button
- Crosshair UI system
- Session sound effects (shoot, hit, miss, end notification)
Improved:
- Menu UI layout for better visual consistency
- Result overlay styled to match main menu appearance
- Target spawn system improved to prevent overlapping targets
- Target speed scaling based on score
- UI updates for score, hits, misses, accuracy, and timer
Fixed:
- Result overlay appearing when the page first loads
- Game always starting with default values instead of menu settings
- Retry button not triggering a new session
- Menu button not resetting the game properly
- Last Accuracy statistic not updating correctly
- Best Score not saving correctly due to localStorage string parsing
- Menu statistics not refreshing after a session ends
Changed:
- Back to Menu button now performs a full page reload to reset game state and refresh menu statistics automatically Stats System

Session results now store:

- Best Score
- Last Accuracy

Saved using browser `localStorage`.

## [0.7.0] - 2026-04-07
### Added
- Valorant-style crosshair system:
  - Adjustable thickness
  - Adjustable gap
  - Optional outline
- Footer:
  - xkysoft interactive 2026 tegar ibrahim

### Improved
- Crosshair visual now matches FPS competitive style
- UI polish for better readability

---

## [0.6.0] - 2026-04-07
### Added
- Best score saved via localStorage
- Stats history (recent runs)
- Difficulty scaling:
  - Targets shrink over time
  - Targets move faster as score increases
- Hit marker (Valorant-style feedback)

### Improved
- Game progression feels more dynamic
- Better player feedback loop

---

## [0.5.0] - 2026-04-07
### Added
- Sound system:
  - Shoot sound
  - Hit sound
  - Miss sound
- 60-second timed mode
- End-game summary:
  - Final score
  - Accuracy display
- Play Again button

### Fixed
- Pointer/cursor issues after game ends
- Button event handling bugs

---

## [0.4.0] - 2026-04-07
### Added
- Multiple targets (3 simultaneous targets)
- Target respawn system
- Miss penalty (score -1)

### Improved
- Target placement avoids overlap

---

## [0.3.0] - 2026-04-07
### Added
- 🖱️ Mouse-based aiming (no FPS camera)
- Custom crosshair element
- Static background with moving cursor

### Changed
- Replaced camera rotation system with cursor-based aiming

---

## [0.2.0] - 2026-04-07
### Added
- Basic shooting system using raycasting
- Score tracking:
  - Score
  - Hits
  - Misses
  - Accuracy

### Fixed
- Background not visible (transparent renderer fix)

---

## [0.1.0] - 2026-04-07
### Initial Release
- Basic Three.js setup
- Single static target
- Click-to-hit mechanic
- Simple UI (score + accuracy)