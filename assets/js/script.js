// Wait for the DOM to finish loading before running the Main  wrapper function
document.addEventListener("DOMContentLoaded", main());

/**
 *  * Intialise all CONSTANTS, top level variables, classes and objects.
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
      this.btn2id = "btn-2"
      this.btn2txt = "Quit";
      this.imgcontainer = "display-img-wrapper";
      this.imgid = "screen-image";
    }
  }

  // Initialise CONSTANTS
  const TARGETPROFIT = 10000;
  const MONOLOGUEDISPLAY = document.getElementById("displayScreen-wrapper");
  const GAMEDISPLAY = document.getElementById("displayGame-wrapper");

  // Initialise block variables
  let Screen = null;
  let nextScreen = "";

  //Initialse Objects
  const WELCOME = new Screens("welcome", "Welcome to Logging-In", "You may be a LumberJack or LumberJackie, but are you O.K.? Play Logging-In to find out!", "assets/images/welcome-screen-and play-buttn.jpg", "Welcome image", "New Game");
  const INTRO = new Screens("intro", "Harvest your logs!", `Are you ready to harvest your Forest, build up your stock of Logs and sell them at your Lumber-Camp?
   If you make £${TARGETPROFIT} in profit you Win!. Happy Harvesting!`, "assets/images/welcome-screen-and play-buttn.jpg");
  const GAME = new Screens("game");
  const WIN = new Screens("win", "Congratulations! You Won!", "You reached your target profit. How will you spend it? Feel free to play again or quit", "assets/images/welcome-screen-and play-buttn.jpg", "Win image");

  nextScreen = "welcome"; // The Welcome Screen is the first screen to display

  selectScreen( // The top level screen flow function is called.
    screen, nextScreen, 
    WELCOME, INTRO, GAME, WIN, 
    MONOLOGUEDISPLAY, GAMEDISPLAY);
  
}

/**
 * This top level function cotrols the screen flow of the game 
 * according to the value of nextScreen.
 * It calls the following 
 * setScreen() sets screen object varriable to the next screen object
 * displayScreen() populates all the screen elements defined in the screen object
 * setEventListners() adds event listeners to all buttons and nav elements.
 * 
 * The game flow is then controled by the event functions called by these evnts.
 * @param {*} screen 
 * @param {*} nextScreen 
 * @param {*} WELCOME 
 * @param {*} INTRO 
 * @param {*} GAME 
 * @param {*} WIN 
 * @param {*} MONOLOGUEDISPLAY 
 * @param {*} GAMEDISPLAY 
 */
function selectScreen (screen, nextScreen, 
  WELCOME, INTRO, GAME, WIN, 
  MONOLOGUEDISPLAY, GAMEDISPLAY) {
    console.log("selectScreen is called");

    setScreen(screen, nextScreen);
    displayScreen(screen, nextScreen);
    setEventListeners(nextScreen);
  }

  function setScreen(screen, nextScreen) {
    console.log("setScreen is called");
  }
  function displayScreen(screen, nextScreen) {
    console.log("displayScreen is called");
  }

  function setEventListeners(nextScreen) {
    console.log("setEventListenersis called");
  }