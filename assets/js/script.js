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
  let currentScreen = null;

  //Initialse Objects
  const WELCOME = new Screens("welcome", "Welcome to Logging-In", "You may be a LumberJack or LumberJackie, but are you O.K.? Play Logging-In to find out!", "assets/images/welcome-intro.png", "Welcome image", "New Game");
  const INTRO = new Screens("intro", "Harvest your logs!", `Are you ready to harvest your Forest, build up your stock of Logs and sell them at your Lumber-Camp?
   If you make £${TARGETPROFIT} in profit you Win!. Happy Harvesting!`, "assets/images/welcome-intro.png");
  const GAME = new Screens("game");
  const WIN = new Screens("win", "Congratulations! You Won!", "You reached your target profit. How will you spend it? Feel free to play again or quit", "assets/images/welcome-intro.png", "Win image");
  const SCREENCOLLECTION = [WELCOME, INTRO, GAME, WIN];

  //Display Welcome Screen and begin Game Flow
  currentScreen = WELCOME;
  loadScreen(currentScreen, GAMEDISPLAY, MONOLOGUEDISPLAY);

// Initialise event listners for nav menu funtionality
  activateNavMenu(SCREENCOLLECTION, currentScreen, GAMEDISPLAY, MONOLOGUEDISPLAY);
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
  }
}

/**
 *  * Populates the screen elements h1, p, button, and img in the DOM with data from the Screens 
 * objects
 * @param {*} Screens 
 */
function populateScreen(Screens) {
  document.getElementById("screen-title").innerText = Screens.title;
  document.getElementById("screen-msg").innerText = Screens.msg;
  loadImage(Screens);
  populateButtons(Screens);
}

/**
 * Gets button data from Screens object
 * @param {*} Screens 
 */
function populateButtons(Screens) {
  document.getElementById(Screens.btn1id).innerText = Screens.btn1txt;
}

/**
 * Writes button 1 text to DOM
 * @param {*} Screens 
 */
function loadButton1(Screens) {
  document.getElementById(Screens.btn1id).innerText = Screens.btn1txt;
}

/**
 * Displays hidden Button 2
 * Writes button 2 text to DOM
 * @param {*} Screens 
 */
function loadButton2(Screens) {
  let button = document.getElementById(Screens.btn1id);
  button.style.removeProperty('display');
  button.innerText = Screens.btn1txt;
}

/**
 * Checks for image inside container of object.
 * If present, removes image
 * Loads object related images into relevant image container
 * @param {*} Screens 
 */
function loadImage(Screens) {
  let image = document.getElementById(Screens.imgcontainer).getElementsByTagName("img");
    
  while (image[0] != undefined ){
      console.log("there is an image: removing")
      image[0].remove();
    } 
  image = document.createElement('img');
  image.src = Screens.imgsrc;
  image.setAttribute("id", Screens.imgid);
  document.getElementById(Screens.imgcontainer).appendChild(image);
  image = document.getElementById(Screens.imgcontainer).getElementsByTagName("img");
}

/**
 * Loads the relevant screen
 * @param {*} Screens 
 * @param {*} GAMEDISPLAY 
 * @param {*} MONOLOGUEDISPLAY 
 */
function loadScreen(Screens, GAMEDISPLAY, MONOLOGUEDISPLAY) {
  setDisplay(Screens, GAMEDISPLAY, MONOLOGUEDISPLAY);
  populateScreen(Screens);
}

// Nav Functions

/**
 * When called the Game screen is loaded and the main game loop is run
 * @param {*} SCREENCOLLECTION 
 * @param {*} currentScreen 
 * @param {*} GAMEDISPLAY 
 * @param {*} MONOLOGUEDISPLAY 
 */
function newGame(SCREENCOLLECTION, currentScreen, GAMEDISPLAY, MONOLOGUEDISPLAY) {
  loadScreen(SCREENCOLLECTION[2], GAMEDISPLAY, MONOLOGUEDISPLAY); //GAME
  currentScreen = SCREENCOLLECTION[2];
  //loadGame();
}

/**
 * In the Nav Bar, when quit is clicked,  main() is called
 * so the page is reset to the Welcome screen.
 * When New Game is clicked, the Game screen is displayed,
 * and the main game loop is called. 
 * @param {*} SCREENCOLLECTION 
 * @param {*} currentScreen 
 * @param {*} GAMEDISPLAY 
 * @param {*} MONOLOGUEDISPLAY 
 */
function activateNavMenu(SCREENCOLLECTION, currentScreen, GAMEDISPLAY, MONOLOGUEDISPLAY) {
  let navElements = document.getElementsByClassName("nav-elements");
  for (let navElement of navElements) {
    navElement.addEventListener("click", function() {
          if (this.getAttribute("nav-type") === "quit") {
            main();
          } else if (this.getAttribute("nav-type") === "newgame") {
            newGame(SCREENCOLLECTION, currentScreen, GAMEDISPLAY, MONOLOGUEDISPLAY);
          } else {
          }
      });
  };
}

