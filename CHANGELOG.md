# Changelog

All notable changes to this project will be documented in this file.

The format is based on Keep a Changelog  
and this project follows Semantic Versioning (SemVer).

---

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