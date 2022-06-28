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
   If you make £${TARGETPROFIT} in profit you Win!. Happy Harvesting!`, "assets/images/welcome-screen-and play-buttn.jpg", "Game Introduction image", "Play Game");
  const GAME = new Screens("game");
  const WIN = new Screens("win", "Congratulations! You Won!", "You reached your target profit. How will you spend it? Feel free to play again or quit", "assets/images/welcome-screen-and play-buttn.jpg", "Win image", "New Game");

  nextScreen = "game"; // Tempararily only the game screen will be shown....  //The Welcome Screen is the first screen to display

  selectScreen( // The top level screen flow function is called.
    screen, nextScreen, 
    WELCOME, INTRO, GAME, WIN, 
    MONOLOGUEDISPLAY, GAMEDISPLAY);
}

/**
 * This top level function controls the screen flow of the game 
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
function selectScreen(screen, nextScreen, 
  WELCOME, INTRO, GAME, WIN, 
  MONOLOGUEDISPLAY, GAMEDISPLAY) {

    screen = setScreen(screen, nextScreen, // sets the screen view to Monologue or Game, and sets the screen object
      WELCOME, INTRO, GAME, WIN, 
      MONOLOGUEDISPLAY, GAMEDISPLAY);

    displayScreen(screen, nextScreen,  // displays content on the screen or loads the game
      WELCOME, INTRO, GAME, WIN,
      MONOLOGUEDISPLAY, GAMEDISPLAY);

    setEventListeners(screen, nextScreen, // sets event listeners and waits for user input
      WELCOME, INTRO, GAME, WIN, 
      MONOLOGUEDISPLAY, GAMEDISPLAY );
  }

// Main Screen Functions

/**
 * Sets variable 'screen' to the relevant object 
 * according to the value of 'nextScreen'
 * @param {*} screen 
 * @param {*} nextScreen 
 */
function setScreen(screen, nextScreen, 
  WELCOME, INTRO, GAME, WIN, 
  MONOLOGUEDISPLAY, GAMEDISPLAY) {

  switch(nextScreen) {
    case 'game':
      MONOLOGUEDISPLAY.style.display = "none";
      GAMEDISPLAY.style.removeProperty('display');
      nextScreen = "game";
      screen = GAME;
      return screen;
    case 'welcome':
      MONOLOGUEDISPLAY.style.removeProperty('display');
      GAMEDISPLAY.style.display = "none";
      screen = WELCOME;
      return screen;
    case 'intro':
      MONOLOGUEDISPLAY.style.removeProperty('display');
      GAMEDISPLAY.style.display = "none";
      screen = INTRO;
      return screen;
    case 'win':
      MONOLOGUEDISPLAY.style.removeProperty('display');
      GAMEDISPLAY.style.display = "none";
      screen = WIN;
      return screen;
    }
}

/**
 * Displays all text, images and other elements 
 * according to the value of 'nextScreen'.
 * If next screen is "game", the Game is loaded and run
 * @param {*} screen 
 * @param {*} nextScreen 
 */
function displayScreen(screen, nextScreen, 
  WELCOME, INTRO, GAME, WIN,
  MONOLOGUEDISPLAY, GAMEDISPLAY) {

    if (nextScreen === "game") { 
      loadGame(screen, nextScreen, // Load the Game and run the main game loop
        WELCOME, INTRO, GAME, WIN, 
        MONOLOGUEDISPLAY, GAMEDISPLAY);
    } else {

      populateScreen(screen, nextScreen); // enter screen flow 
    }
}

// Event Listener Functions

/**
 * Calls event listener functions for  buttons and nav elements
 * @param {*} nextScreen 
 */
function setEventListeners(screen, nextScreen,
  WELCOME, INTRO, GAME, WIN, 
  MONOLOGUEDISPLAY, GAMEDISPLAY) {

  setEventListenersButtons(screen, nextScreen,
    WELCOME, INTRO, GAME, WIN, 
    MONOLOGUEDISPLAY, GAMEDISPLAY); // calls function which adds event listners to buttons
  setEventListenersNav(screen, nextScreen, 
    WELCOME, INTRO, GAME, WIN, 
    MONOLOGUEDISPLAY, GAMEDISPLAY); // calls function which adds event listners to nav elements
}

/**
 * Sets event listeners to buttons according to the value of nextScreen
 * @param {*} screen 
 * @param {*} nextScreen 
 * @param {*} WELCOME 
 * @param {*} INTRO 
 * @param {*} GAME 
 * @param {*} WIN 
 * @param {*} MONOLOGUEDISPLAY 
 * @param {*} GAMEDISPLAY 
 */
function setEventListenersButtons(screen, nextScreen,
  WELCOME, INTRO, GAME, WIN, 
  MONOLOGUEDISPLAY, GAMEDISPLAY) {

  let button1 = document.getElementById(screen.btn1id);
  let button2 = document.getElementById(screen.btn2id);
  
  if (nextScreen === "welcome") { // for welcome screen
      button1.addEventListener("click", function() { // when button1 is clicked , the intro event function is called
        intro(screen, nextScreen, 
        WELCOME, INTRO, GAME, WIN, 
        MONOLOGUEDISPLAY, GAMEDISPLAY);
      });
  } else if (screen.name === "intro") { // for intro screen
      button1.addEventListener('click', function() { // when button1 is clicked , the game event function is called
        game(screen, nextScreen, 
        WELCOME, INTRO, GAME, WIN, 
        MONOLOGUEDISPLAY, GAMEDISPLAY);
      });
      button2.addEventListener('click', function() {  // when button2 is clicked , the welcome event function is called
        welcome(screen, nextScreen, 
        WELCOME, INTRO, GAME, WIN, 
        MONOLOGUEDISPLAY, GAMEDISPLAY);
      });
  } else if (screen.name === "win") { // for win screen
        button1.addEventListener('click', function() { //when button1 is clicked , the game event function is called
          game(screen, nextScreen, 
          WELCOME, INTRO, GAME, WIN, 
          MONOLOGUEDISPLAY, GAMEDISPLAY);
        });
        button2.addEventListener('click', function() {  // when button2 is clicked , the welcome event function is called
          welcome(screen, nextScreen, 
          WELCOME, INTRO, GAME, WIN, 
          MONOLOGUEDISPLAY, GAMEDISPLAY);
      });
  }
}

/**
 * Sets event listeners to nav elements
 * @param {*} screen 
 * @param {*} nextScreen 
 * @param {*} WELCOME 
 * @param {*} INTRO 
 * @param {*} GAME 
 * @param {*} WIN 
 * @param {*} MONOLOGUEDISPLAY 
 * @param {*} GAMEDISPLAY 
 */
 function setEventListenersNav(screen, nextScreen, 
  WELCOME, INTRO, GAME, WIN, 
  MONOLOGUEDISPLAY, GAMEDISPLAY) {
  let navElements = document.getElementsByClassName("nav-elements"); // the nav elements are stored in the htmlCollection navElements
  for (let navElement of navElements) { // The nav elements collection are iterated through
    navElement.addEventListener("click", function() {
      if (this.getAttribute("nav-type") === "nav-quit") { //If Quit is clicked in the welcome() is called and the Welcome Screen is displayed
        welcome(screen, nextScreen, // welcome() is called
        WELCOME, INTRO, GAME, WIN, 
        MONOLOGUEDISPLAY, GAMEDISPLAY);
      } else if (this.getAttribute("nav-type") === "nav-newgame") { //If New Game is clicked in the welcome() is called and the Welcome Screen is displayed
        game(screen, nextScreen, // game() is called
        WELCOME, INTRO, GAME, WIN, 
        MONOLOGUEDISPLAY, GAMEDISPLAY);
      };
    });
  };
}

// Screen Display Utility Functions

/**
 * Populates the screen with text, image and buttons
 * by using  data from the screen object 
 * to set attributes on DOM elements.
 * Adds event listenres onclick to buttons which set nextScreen
 * Returns nextScreen
 * @param {*} screen 
 * @returns 
 */
 function populateScreen(screen, nextScreen) {

  populateScreenText(screen); // Loads relevant text on screen
  loadImage(screen); // Loads relevenat image on screen
  populateScreenButtons(screen, nextScreen); // Gives buttons the relevant properties
}

/**
 * Add text to h1 and p elements in Dispaly Screen
 * @param {*} screen 
 */
 function populateScreenText(screen) {

  document.getElementById("screen-title").innerText = screen.title; // h1 element
  document.getElementById("screen-msg").innerText = screen.msg; // p element
}

/**
 * Checks for image inside container of object.
 * If present, removes image
 * Loads object related images into relevant image container
 * @param {*} screen 
 */
 function loadImage(screen) {

  let image = document.getElementById(screen.imgcontainer).getElementsByTagName("img");
    
  while (image[0] != undefined ){ // checks if an image is present in wrraper
      image[0].remove(); // if present, imahe is removed
    } 
  image = document.createElement('img'); // create image element 
  image.src = screen.imgsrc; // set image src path
  image.setAttribute("id", screen.imgid); // set image id
  document.getElementById(screen.imgcontainer).appendChild(image); // put image in wrapper in the DOM
}

/**
 *  * Gets button data from screen object
 * Shows or hides button 2 as required
 * Adds eventListners to buttons
 * sets nextScreen.
 * retuens nextScreen
 * @param {*} screen 
 * @param {*} nextScreen 
 * @returns 
 */
 function populateScreenButtons(screen, nextScreen) {
  let button1 = document.getElementById(screen.btn1id);
  let button2 = document.getElementById(screen.btn2id);
  
  if (nextScreen === "welcome") { // for welcome screen
      button1.innerText = screen.btn1txt; // set button1 text
      if (button2.style.display) { // Is the button already hidden? If so, do nothing
      } else {
        button2.style.display = "none"; // otherwise, hide the button
      }
    } else if (nextScreen === "intro") { // for intro screen
      button1.innerText = screen.btn1txt; // set button1 text
      button2.innerText = screen.btn2txt; // set button2 text
        if (button2.style.display) { //Is  button2 already hidden?
          button2.style.removeProperty('display');  // If so, show button2
        } else { // button2 is showing: do nothing
        }
    }  else if (nextScreen === "win") { // for win screen
        button1.innerText = screen.btn1txt; // set button1 text
        button2.innerText = screen.btn2txt; // set button2 text
        if (button2.style.display) { //Is  button2 already hidden?
          button2.style.removeProperty('display'); // If so, show button2
        } else { // button2 is showing: do nothing
        }
    }
}

// Event Functions

/**
  * displays the Welcome Screen by
  * setting nextScreen to "welcome"
  * calling 
  * 
  * @param {*} screen 
  * @param {*} nextScreen 
  * @param {*} WELCOME 
  * @param {*} INTRO 
  * @param {*} GAME 
  * @param {*} WIN 
  * @param {*} MONOLOGUEDISPLAY 
  * @param {*} GAMEDISPLAY 
*/
function welcome(screen, nextScreen, 
  WELCOME, INTRO, GAME, WIN, 
  MONOLOGUEDISPLAY, GAMEDISPLAY) {

    nextScreen = "welcome";
    selectScreen(screen, nextScreen, 
      WELCOME, INTRO, GAME, WIN, 
      MONOLOGUEDISPLAY, GAMEDISPLAY);
}

/** displays the Intro Screen by setting nextScreen to "intro"
 * and calling selectScreen()
 * 
 * @param {*} screen 
 * @param {*} nextScreen 
 * @param {*} WELCOME 
 * @param {*} INTRO 
 * @param {*} GAME 
 * @param {*} WIN 
 * @param {*} MONOLOGUEDISPLAY 
 * @param {*} GAMEDISPLAY 
 */
function intro(screen, nextScreen, 
  WELCOME, INTRO, GAME, WIN, 
  MONOLOGUEDISPLAY, GAMEDISPLAY) {

    nextScreen = "intro";
    selectScreen(screen, nextScreen, 
      WELCOME, INTRO, GAME, WIN, 
      MONOLOGUEDISPLAY, GAMEDISPLAY);
}

/** displays the Game Screen by setting nextScreen to "game"
 * and calling selectScreen()
 * 
 * @param {*} screen 
 * @param {*} nextScreen 
 * @param {*} WELCOME 
 * @param {*} INTRO 
 * @param {*} GAME 
 * @param {*} WIN 
 * @param {*} MONOLOGUEDISPLAY 
 * @param {*} GAMEDISPLAY 
 */
function game(screen, nextScreen, 
  WELCOME, INTRO, GAME, WIN, 
  MONOLOGUEDISPLAY, GAMEDISPLAY) {

  nextScreen = "game";
  selectScreen(screen, nextScreen, 
    WELCOME, INTRO, GAME, WIN, 
    MONOLOGUEDISPLAY, GAMEDISPLAY);
}

/** displays the Win Screen by setting nextScreen to "win"
 * and calling selectScreen()
 * 
 * @param {*} screen 
 * @param {*} nextScreen 
 * @param {*} WELCOME 
 * @param {*} INTRO 
 * @param {*} GAME 
 * @param {*} WIN 
 * @param {*} MONOLOGUEDISPLAY 
 * @param {*} GAMEDISPLAY 
 */
 function win(screen, nextScreen, 
  WELCOME, INTRO, GAME, WIN, 
  MONOLOGUEDISPLAY, GAMEDISPLAY) {
    console.log("win() has been called");

  nextScreen = "win";
  selectScreen(screen, nextScreen, 
    WELCOME, INTRO, GAME, WIN, 
    MONOLOGUEDISPLAY, GAMEDISPLAY);
}

// Game Functions

function loadGame(screen, nextScreen, 
  WELCOME, INTRO, GAME, WIN, 
  MONOLOGUEDISPLAY, GAMEDISPLAY) {
    console.log("loadGame() has been called");

  let gameResult = null;

  gameResult = runGame();

  if (gameResult === "win") {
    console.log("You have won the Game!");


    win(screen, nextScreen, 
      WELCOME, INTRO, GAME, WIN, 
      MONOLOGUEDISPLAY, GAMEDISPLAY);
  }
}

function runGame(gameResult) {
  console.log("runGame() has been called")

  gameResult = "";

  return gameResult;
}