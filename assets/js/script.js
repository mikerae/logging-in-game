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
  class Screens {
    constructor(name, title, msg, img) {
      this.name = name;
      this.title = title;
      this.msg = msg;
      this.img = img;
    }
  }

  // Initialise CONSTANTS
  const TARGETPROFIT = 10000;
  const MONOLOGUEDISPLAY = document.getElementById("displayScreen-wrapper");
  const GAMEDISPLAY = document.getElementById("displayGame-wrapper");
  const WELCOME = new Screens("welcome", "Welcome to Logging-In", "You may be a LumberJack or LumberJackie, but are you O.K.?", "#");
  const INTRO = new Screens("intro", "Harvest your logs!", `Ar you ready to harvest your Forest, build up your stock of Logs and sell them at your Lumber-Camp?
   If you make £${TARGETPROFIT} in profit you Win!. Happy Harvesting!`, "#");
  const GAME = new Screens("game", "", "", "");
  const WIN = new Screens("win", "Congratulations! You Won!", "You reached your target profit. How will you spend it? Feel free to play again or quit", "#");


  // Initialise local variables

  //Initialse Objects

  //Display Welcome Screen
  setDisplay(WIN, GAMEDISPLAY, MONOLOGUEDISPLAY);
}

// Screen Utility Functions

/**
 * Toggels the display between Monologue screens 
 * (welcome, intro, win) and Game screen
 */
function setDisplay(Screens, GAMEDISPLAY, MONOLOGUEDISPLAY) {
  switch (Screens.name) {
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