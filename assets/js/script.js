// Wait for the DOM to finish loading before running the Main  wrapper function
document.addEventListener("DOMContentLoaded", main());

/**
 * Intialise all CONSTANTS, top level variables, classes and objects.
 * Ensure all varriables have local scope.
 * Ensure all varriables have local scope.
 * Call the Wecome Screen.
 * Reset the game when called.
 */
function main() {
  // Initialsie Classes of Objects

  // Initialise CONSTANTS
  const SCREENS = ["welcome", "intro", "game", "win"];
  const MONOLOGUEDISPLAY = document.getElementById("displayScreen-wrapper");
  const GAMEDISPLAY = document.getElementById("displayGame-wrapper");

  // Initialise local variables
  let screen = SCREENS[0]; // sets screen as 'welcome'

  //Initialse Objects

  //Display Welcome Screen
  setDisplay(screen, GAMEDISPLAY, MONOLOGUEDISPLAY);
}

// Screen Utility Functions

/**
 * Toggels the display between Monologue screens 
 * (welcome, intro, win) and Game screen
 */
function setDisplay(screen, GAMEDISPLAY, MONOLOGUEDISPLAY) {
  switch (screen) {
    case 'game':
      MONOLOGUEDISPLAY.style.display = "none";
      GAMEDISPLAY.style.removeProperty('display');
      break;
    case 'welcome':
    case 'intro':
    case 'win':
      MONOLOGUEDISPLAY.style.removeProperty('display');
      GAMEDISPLAY.style.display = "none";
      break;
    default:
      alert("Im sorry, there is a problem with the game! Contact Mike for assistance");
  }
}