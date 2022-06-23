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
    constructor(name, title, msg, imgsrc, imgalt, btn1txt) {
      this.name = name;
      this.title = title;
      this.msg = msg;
      this.imgsrc = imgsrc;
      this.imgalt = imgalt;
      this.btn1id = "btn-1";
      this.btn1txt = btn1txt;
      this.imgcontainer = "#display-img-wrapper";
      this.imgcssid = "screen-image";
    }
  }

  // Initialise CONSTANTS
  const TARGETPROFIT = 10000;
  const MONOLOGUEDISPLAY = document.getElementById("displayScreen-wrapper");
  const GAMEDISPLAY = document.getElementById("displayGame-wrapper");

  // Initialise local variables
  let currentScreen = null;

  //Initialse Objects
  const WELCOME = new Screens("welcome", "Welcome to Logging-In", "You may be a LumberJack or LumberJackie, but are you O.K.?", "assets/images/welcome-intro.png", "Welcome image", "New Game");
  const INTRO = new Screens("intro", "Harvest your logs!", `Are you ready to harvest your Forest, build up your stock of Logs and sell them at your Lumber-Camp?
   If you make £${TARGETPROFIT} in profit you Win!. Happy Harvesting!`, "assets/images/welcome-intro.png");
  const GAME = new Screens("game", "", "", "", "");
  const WIN = new Screens("win", "Congratulations! You Won!", "You reached your target profit. How will you spend it? Feel free to play again or quit", "assets/images/welcome-intro.png", "Win image");

  //Display Welcome Screen and begin Game Flow
  currentScreen = WELCOME;
  loadScreen(currentScreen, GAMEDISPLAY, MONOLOGUEDISPLAY)
  //console.log(currentScreen.btn1txt);
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
 * Populates the screen elements h1, p, button, and img in the DOM with data from the Screens 
 * objects
 */
function populateScreen(Screens) {
  document.getElementById("screen-title").innerText = Screens.title;
  document.getElementById("screen-msg").innerText = Screens.msg;
  loadImage(Screens);
  populateButtons(Screens);
}

function populateButtons(Screens) {
  document.getElementById(Screens.btn1id).innerText(Screens.btn1txt);
  console.log(Screens.btn1txt);
}

function loadImage(Screens) {
  let image = document.createElement('img');
  image.src = Screens.imgsrc;
  image.setAttribute("id", Screens.imgcssid);
  document.querySelector(Screens.imgcontainer).appendChild(image);
}

function loadScreen(Screens, GAMEDISPLAY, MONOLOGUEDISPLAY) {
  setDisplay(Screens, GAMEDISPLAY, MONOLOGUEDISPLAY);
  populateScreen(Screens);
}