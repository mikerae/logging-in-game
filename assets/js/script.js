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
  class Screens { // This class of objects will contain data for screen maniplulation
    constructor(name, title, msg, imgsrc, imgalt, btn1txt) {
      this.name = name;
      this.title = title;
      this.msg = msg;
      this.imgsrc = imgsrc;
      this.imgalt = imgalt;
      this.btn1id = "btn-1";
      this.btn1txt = btn1txt;
      this.imgcontainer = "display-img-wrapper";
      this.imgid = "screen-image";
    }
  }

  // Initialise CONSTANTS
  const TARGETPROFIT = 10000; // The profit needed to win the game
  const HARVESTFOREST = 20; // The amount of logs produced when a Forest tile is harvested
  const SELLLOGS = 50; // The profit factor for selling logs ()
  const MONOLOGUEDISPLAY = document.getElementById("displayScreen-wrapper"); // The area of the screen used to display Monologe Screens eg welcome, intro, win etc.
  const GAMEDISPLAY = document.getElementById("displayGame-wrapper"); // The are if the screen displaying the main game area

  // Initialise block variables
  let Screen = null; // This object is of the class Screens
  let nextScreen = ""; // nextScreen controls the screen flow of the game

  //Initialse Objects
  const WELCOME = new Screens("welcome", "", "", "assets/images/welcome-screen-background.png", "Welcome image", "New Game");
  const INTRO = new Screens("intro", "", `Are you ready to harvest your Forest, build up your stock of Logs and sell them at your Lumber-Camp? \n
   If you make £${TARGETPROFIT} in profit you Win!`, "assets/images/welcome-screen-background.png", "Game Introduction image", "Play Game");
  const GAME = new Screens("game");
  const WIN = new Screens("win", "Congratulations! You Won!", "You reached your target profit. How will you spend it? Feel free to play again or quit", "assets/images/welcome-screen-background.png", "Win image", "New Game");

  nextScreen = "game"; // Tempararily only the game screen will be shown....  //The Welcome Screen is the first screen to display

  selectScreen( // The top level screen flow function is called.
    screen, nextScreen, 
    WELCOME, INTRO, GAME, WIN, 
    MONOLOGUEDISPLAY, GAMEDISPLAY, TARGETPROFIT, HARVESTFOREST, SELLLOGS);
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
  MONOLOGUEDISPLAY, GAMEDISPLAY, TARGETPROFIT, HARVESTFOREST, SELLLOGS) {

    screen = setScreen(screen, nextScreen, // sets the screen view to Monologue or Game, and sets the screen object
      WELCOME, INTRO, GAME, WIN, 
      MONOLOGUEDISPLAY, GAMEDISPLAY);

    displayScreen(screen, nextScreen,  // displays content on the screen or loads the game
      WELCOME, INTRO, GAME, WIN,
      MONOLOGUEDISPLAY, GAMEDISPLAY, TARGETPROFIT, HARVESTFOREST, SELLLOGS);

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
  MONOLOGUEDISPLAY, GAMEDISPLAY, TARGETPROFIT, HARVESTFOREST, SELLLOGS) {

    if (nextScreen === "game") { 
      loadGame(screen, nextScreen, // Load the Game and run the main game loop
        WELCOME, INTRO, GAME, WIN, 
        MONOLOGUEDISPLAY, GAMEDISPLAY, TARGETPROFIT, HARVESTFOREST, SELLLOGS);
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
  } else if (screen.name === "win") { // for win screen
        button1.addEventListener('click', function() { //when button1 is clicked , the game event function is called
          game(screen, nextScreen, 
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
  
  if (nextScreen === "welcome") { // for welcome screen
      button1.innerText = screen.btn1txt; // set button1 text

    } else if (nextScreen === "intro") { // for intro screen
      button1.innerText = screen.btn1txt; // set button1 text

    }  else if (nextScreen === "win") { // for win screen
        button1.innerText = screen.btn1txt; // set button1 text
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

/**
 * Initialises the game, then runs the main game loop 
 * by calling runGame().
 * It receives the gameResult and calls the appropriate outcome screen.
 * In this version the gameResult can only be "win".
 * @param {*} screen 
 * @param {*} nextScreen 
 * @param {*} WELCOME 
 * @param {*} INTRO 
 * @param {*} GAME 
 * @param {*} WIN 
 * @param {*} MONOLOGUEDISPLAY 
 * @param {*} GAMEDISPLAY 
 */
function loadGame(screen, nextScreen, 
  WELCOME, INTRO, GAME, WIN, 
  MONOLOGUEDISPLAY, GAMEDISPLAY, TARGETPROFIT, HARVESTFOREST, SELLLOGS) {
    console.log("loadGame() has been called");
    console.log("The Target profit needed is: ",TARGETPROFIT);

    // Initilise Variables
  let gameResult = null; // resets the game result
  let stockProfit = {logsInStock: 0, profit: 0}; // this object contains the Game Info and is needed because JavaScript does not support functions returning multiple values.
  let elMap = new Map();
  displayGameInfo(stockProfit, TARGETPROFIT); // display Game ino in the info bar

  elMap = createMap (elMap);
  console.log("elMap is: ",elMap);

  //Tempory code to allow game flow during development
  stockProfit.logsInStock = harvestForest(stockProfit, HARVESTFOREST); // A forest is harvested and the logs are added to logsInStock 

  // Temporary code to allow game flow during development
  stockProfit = sellLogs(stockProfit, SELLLOGS);

  displayGameInfo(stockProfit, TARGETPROFIT); // display Game ino in the info bar

// Get End Game Data
  gameResult = checkProfit(stockProfit, TARGETPROFIT); // Checks if the Target Profit has been made
  console.log("game Result is: ", gameResult)

// End Game Test
  if (gameResult === "win") { // if the game is won.... which it is!
    console.log("You have won the Game!");

    win(screen, nextScreen, // display the Win Screen and wait for user input
      WELCOME, INTRO, GAME, WIN, 
      MONOLOGUEDISPLAY, GAMEDISPLAY);
  }
}

/**
 * Checks to see if profit has reached TARGETPROFIT
 * and returns "win" if it has.
 * @param {*} profit 
 * @param {*} TARGETPROFIT 
 * @returns 
 */
function checkProfit(stockProfit, TARGETPROFIT) {
  console.log("checkProfit() has been called")

  return (stockProfit.profit >= TARGETPROFIT ? "win": null);
}

/**
 * Adds harvested logs to LogsInStock when a Forest is harvested
 * The amount of logs a forest yeilds is set by HARVESTFOREST
 * @param {*} logsInStock 
 * @param {*} HARVESTFOREST 
 * @returns 
 */
function harvestForest(stockProfit, HARVESTFOREST) {
  stockProfit.logsInStock = stockProfit.logsInStock + HARVESTFOREST;
  return stockProfit.logsInStock;
}

/**
 * Sells logs in stock and generate profit = logsInStock * SELLLOGS
 * LogsInStock is set to 0
 * Profit is added to current profit
 * @param {*} stockProfit 
 * @param {*} SELLLOGS 
 * @returns 
 */
function sellLogs(stockProfit, SELLLOGS) {
  let saleProfit = stockProfit.logsInStock * SELLLOGS;
  stockProfit.logsInStock = 0;
  stockProfit.profit += saleProfit;
  return stockProfit;
}
/**
 * Displays the profit, logs in stock and target profit to the screen
 * @param {S} stockProfit 
 * @param {*} TARGETPROFIT 
 */
function displayGameInfo(stockProfit, TARGETPROFIT) {
  console.log("displayGameInfo has been called")

  document.getElementById("logs").innerText = stockProfit.logsInStock;
  document.getElementById("profit").innerText = stockProfit.profit;
  document.getElementById("target-profit").innerText = TARGETPROFIT;
}

// Map Functions

function createMap(elMap) {
  console.log("createMap() has been called");

  // create map keys from Screen map ids
/*  let node = document.getElementById("map")[0].firstChild; // sets the first mapgrid element as a node
  let mapKeys = []; // array to hold mapKeys
  
  while (node) { // iterates through all elMap divs
    mapKeys += node.valueOf(id);
    node = node.nextSibling;
    console.log(mapKeys);
  }
    

  console.log(elMapIds);
  return elMap;*/
}