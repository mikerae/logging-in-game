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
    constructor(name, title, msg, src, alt) {
      this.name = name;
      this.title = title;
      this.msg = msg;
      this.src = src;
      this.alt = alt;
      this.container = "#display-img-wrapper";
      this.styling = "screen-image";

    }
  }

  // Initialise CONSTANTS
  const TARGETPROFIT = 10000;
  const MONOLOGUEDISPLAY = document.getElementById("displayScreen-wrapper");
  const GAMEDISPLAY = document.getElementById("displayGame-wrapper");
  
  // Initialise local variables

  //Initialse Objects
  const WELCOME = new Screens("welcome", "Welcome to Logging-In", "You may be a LumberJack or LumberJackie, but are you O.K.?", "assets/images/welcome-intro.png", "Welcome image");
  const INTRO = new Screens("intro", "Harvest your logs!", `Are you ready to harvest your Forest, build up your stock of Logs and sell them at your Lumber-Camp?
   If you make £${TARGETPROFIT} in profit you Win!. Happy Harvesting!`, "assets/images/welcome-intro.png");
  const GAME = new Screens("game", "", "", "", "");
  const WIN = new Screens("win", "Congratulations! You Won!", "You reached your target profit. How will you spend it? Feel free to play again or quit", "assets/images/welcome-intro.png", "Win image");

  //Display Welcome Screen
  //setDisplay(WELCOME, GAMEDISPLAY, MONOLOGUEDISPLAY);
  //populateScreen(WELCOME);
  //console.log(WELCOME.src);
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

/**
 * Populates the screen elements h1, p, and img in the DOM with data from the Screens 
 * objects
 */
function populateScreen(Screens) {
  switch (Screens.name) {
    case 'welcome':
      document.getElementById("screen-title").innerText = Screens.title;
      document.getElementById("screen-msg").innerText = Screens.msg;
      loadImage(Screens);
      break
    case 'intro':

      break
    case 'win':

      break
    case 'game':
      break
    default:
      alert("Im sorry, there is a problem with the game! Contact Mike for assistance");
  }
}

function loadImage(Screens) {
  let image = document.createElement('img');
  image.src = src;
  image.setAttribute("class", Screens.styling);
  //document.querySelector(Screens.container).appendChild(image);
}