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
  const GRASSMAP = ['a2', 'a6',
    'b1', 'b2', 'b3', 'b6', 'b7',
    'c1', 'c2', 'c3', 'c4', 'c5', 'c6', 'c7', 'c8',
    'd1', 'd4', 'd5', 'd6',
    'e1', 'e2','e5', 'e6',
    'f1', 'f4',
    'g1', 'g3',
    'h1', 'h2', 'h3'];
  const FORESTMAP = ['a3', 'a4', 'a5', 'a7', 'a8',
    'b4', 'b5', 'b8',
    'd2', 'd3', 'd7', 'd8',
    'e3', 'e6','e7', 'e8',
    'f2', 'f3', 'f5', 'f6', 'f7', 'f8',
    'g2', 'g4', 'g5', 'g6', 'g7', 'g8',
    'h4', 'h5', 'h6', 'h7', 'h8'];
  const LUMBERCAMPMAP = ['a1'];

  // Initialise block variables
  let Screen = null; // This object is of the class Screens
  let nextScreen = ""; // nextScreen controls the screen flow of the game

  //Initialse Objects
  const WELCOME = new Screens("welcome", "", "", "assets/images/welcome-screen-background.png", "Welcome image", "New Game");
  const INTRO = new Screens("intro", "", `Are you ready to harvest your Forest, build up your stock of Logs and sell them at your Lumber-Camp? \n
   If you make £${TARGETPROFIT} in profit you Win!`, "assets/images/welcome-screen-background.png", "Game Introduction image", "Play Game");
  const GAME = new Screens("game");
  const WIN = new Screens("win", "Congratulations! You Won!", "You reached your target profit. How will you spend it? Feel free to play again or quit", "assets/images/win-screen.png", "Win image", "New Game");

  nextScreen = "welcome"; //The Welcome Screen is the first screen to display

  selectScreen( // The top level screen flow function is called.
  screen, nextScreen, 
  WELCOME, INTRO, GAME, WIN, 
  MONOLOGUEDISPLAY, GAMEDISPLAY, TARGETPROFIT, 
  HARVESTFOREST, SELLLOGS, 
  GRASSMAP, FORESTMAP, LUMBERCAMPMAP);
}

/**
 *  * This top level function controls the screen flow of the game 
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
 * @param {*} TARGETPROFIT 
 * @param {*} HARVESTFOREST 
 * @param {*} SELLLOGS 
 * @param {*} GRASSMAP 
 * @param {*} FORESTMAP 
 * @param {*} LUMBERCAMPMAP 
 */
function selectScreen(screen, nextScreen, 
  WELCOME, INTRO, GAME, WIN, 
  MONOLOGUEDISPLAY, GAMEDISPLAY, TARGETPROFIT, 
  HARVESTFOREST, SELLLOGS, 
  GRASSMAP, FORESTMAP, LUMBERCAMPMAP) {

    screen = setScreen(screen, nextScreen, // sets the screen view to Monologue or Game, and sets the screen object
      WELCOME, INTRO, GAME, WIN, 
      MONOLOGUEDISPLAY, GAMEDISPLAY);

    displayScreen(screen, nextScreen, // displays the next screen
      WELCOME, INTRO, GAME, WIN, 
      MONOLOGUEDISPLAY, GAMEDISPLAY, TARGETPROFIT, 
      HARVESTFOREST, SELLLOGS, 
      GRASSMAP, FORESTMAP, LUMBERCAMPMAP);

    // sets event listeners and waits for user input
      setEventListeners(screen, nextScreen, 
        WELCOME, INTRO, GAME, WIN, 
        MONOLOGUEDISPLAY, GAMEDISPLAY, TARGETPROFIT, 
        HARVESTFOREST, SELLLOGS, 
        GRASSMAP, FORESTMAP, LUMBERCAMPMAP);
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
  MONOLOGUEDISPLAY, GAMEDISPLAY, TARGETPROFIT, 
  HARVESTFOREST, SELLLOGS, 
  GRASSMAP, FORESTMAP, LUMBERCAMPMAP) {
    console.log("displayScreen has been called");

    if (nextScreen === "game") { // Load the Game and run the main game loop
      loadGame(screen, nextScreen, 
        WELCOME, INTRO, GAME, WIN, 
        MONOLOGUEDISPLAY, GAMEDISPLAY, TARGETPROFIT, 
        HARVESTFOREST, SELLLOGS, 
        GRASSMAP, FORESTMAP, LUMBERCAMPMAP);
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
  MONOLOGUEDISPLAY, GAMEDISPLAY, TARGETPROFIT, 
  HARVESTFOREST, SELLLOGS, 
  GRASSMAP, FORESTMAP, LUMBERCAMPMAP) {

  setEventListenersButtons(screen, nextScreen, 
    WELCOME, INTRO, GAME, WIN, 
    MONOLOGUEDISPLAY, GAMEDISPLAY, TARGETPROFIT, 
    HARVESTFOREST, SELLLOGS, 
    GRASSMAP, FORESTMAP, LUMBERCAMPMAP); // calls function which adds event listners to buttons
  setEventListenersNav(screen, nextScreen, 
    WELCOME, INTRO, GAME, WIN, 
    MONOLOGUEDISPLAY, GAMEDISPLAY, TARGETPROFIT, 
    HARVESTFOREST, SELLLOGS, 
    GRASSMAP, FORESTMAP, LUMBERCAMPMAP); // calls function which adds event listners to nav elements
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
  MONOLOGUEDISPLAY, GAMEDISPLAY, TARGETPROFIT, 
  HARVESTFOREST, SELLLOGS, 
  GRASSMAP, FORESTMAP, LUMBERCAMPMAP) {

  let button1 = document.getElementById(screen.btn1id);
  
  if (nextScreen === "welcome") { // for welcome screen
      button1.addEventListener("click", function() { // when button1 is clicked , the intro event function is called
        intro(screen, nextScreen, 
          WELCOME, INTRO, GAME, WIN, 
          MONOLOGUEDISPLAY, GAMEDISPLAY, TARGETPROFIT, 
          HARVESTFOREST, SELLLOGS, 
          GRASSMAP, FORESTMAP, LUMBERCAMPMAP);
      });
  } else if (screen.name === "intro") { // for intro screen
      button1.addEventListener('click', function() { // when button1 is clicked , the game event function is called
        game(screen, nextScreen, 
          WELCOME, INTRO, GAME, WIN, 
          MONOLOGUEDISPLAY, GAMEDISPLAY, TARGETPROFIT, 
          HARVESTFOREST, SELLLOGS, 
          GRASSMAP, FORESTMAP, LUMBERCAMPMAP);
      });
  } else if (screen.name === "win") { // for win screen
        button1.addEventListener('click', function() { //when button1 is clicked , the game event function is called
          game(screen, nextScreen, 
            WELCOME, INTRO, GAME, WIN, 
            MONOLOGUEDISPLAY, GAMEDISPLAY, TARGETPROFIT, 
            HARVESTFOREST, SELLLOGS, 
            GRASSMAP, FORESTMAP, LUMBERCAMPMAP);
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
  MONOLOGUEDISPLAY, GAMEDISPLAY, TARGETPROFIT, 
  HARVESTFOREST, SELLLOGS, 
  GRASSMAP, FORESTMAP, LUMBERCAMPMAP) {
  let navElements = document.getElementsByClassName("nav-elements"); // the nav elements are stored in the htmlCollection navElements
  for (let navElement of navElements) { // The nav elements collection are iterated through
    navElement.addEventListener("click", function() {
      if (this.getAttribute("nav-type") === "nav-quit") { //If Quit is clicked in the welcome() is called and the Welcome Screen is displayed
        welcome(screen, nextScreen, 
          WELCOME, INTRO, GAME, WIN, 
          MONOLOGUEDISPLAY, GAMEDISPLAY, TARGETPROFIT, 
          HARVESTFOREST, SELLLOGS, 
          GRASSMAP, FORESTMAP, LUMBERCAMPMAP);
      } else if (this.getAttribute("nav-type") === "nav-newgame") { //If New Game is clicked in the welcome() is called and the Welcome Screen is displayed
        game(screen, nextScreen, 
          WELCOME, INTRO, GAME, WIN, 
          MONOLOGUEDISPLAY, GAMEDISPLAY, TARGETPROFIT, 
          HARVESTFOREST, SELLLOGS, 
          GRASSMAP, FORESTMAP, LUMBERCAMPMAP);
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
  MONOLOGUEDISPLAY, GAMEDISPLAY, TARGETPROFIT, 
  HARVESTFOREST, SELLLOGS, 
  GRASSMAP, FORESTMAP, LUMBERCAMPMAP) {

    nextScreen = "welcome";
    selectScreen(screen, nextScreen, 
      WELCOME, INTRO, GAME, WIN, 
      MONOLOGUEDISPLAY, GAMEDISPLAY, TARGETPROFIT, 
      HARVESTFOREST, SELLLOGS, 
      GRASSMAP, FORESTMAP, LUMBERCAMPMAP);
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
  MONOLOGUEDISPLAY, GAMEDISPLAY, TARGETPROFIT, 
  HARVESTFOREST, SELLLOGS, 
  GRASSMAP, FORESTMAP, LUMBERCAMPMAP) {

    nextScreen = "intro";
    selectScreen(screen, nextScreen, 
      WELCOME, INTRO, GAME, WIN, 
      MONOLOGUEDISPLAY, GAMEDISPLAY, TARGETPROFIT);
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
  MONOLOGUEDISPLAY, GAMEDISPLAY, TARGETPROFIT, 
  HARVESTFOREST, SELLLOGS, 
  GRASSMAP, FORESTMAP, LUMBERCAMPMAP) {

  nextScreen = "game";
  selectScreen(screen, nextScreen, 
    WELCOME, INTRO, GAME, WIN, 
    MONOLOGUEDISPLAY, GAMEDISPLAY, TARGETPROFIT, 
    HARVESTFOREST, SELLLOGS, 
    GRASSMAP, FORESTMAP, LUMBERCAMPMAP);
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
  MONOLOGUEDISPLAY, GAMEDISPLAY, TARGETPROFIT, 
  HARVESTFOREST, SELLLOGS, 
  GRASSMAP, FORESTMAP, LUMBERCAMPMAP) {
    console.log("win() has been called");

  nextScreen = "win";
  selectScreen(screen, nextScreen, 
    WELCOME, INTRO, GAME, WIN, 
    MONOLOGUEDISPLAY, GAMEDISPLAY, TARGETPROFIT, 
    HARVESTFOREST, SELLLOGS, 
    GRASSMAP, FORESTMAP, LUMBERCAMPMAP);
}

// Game Functions

/**
 * Initialises the game, then runs the main game loop by using uvent listeners.
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
  MONOLOGUEDISPLAY, GAMEDISPLAY, TARGETPROFIT, 
  HARVESTFOREST, SELLLOGS, 
  GRASSMAP, FORESTMAP, LUMBERCAMPMAP) {
    console.log("loadGame() has been called");

    // Initilise Variables
  let gameResult = null; // resets the game result
  let stockProfit = {logsInStock: 0, profit: 0}; // this object contains the Game Info and is needed because JavaScript does not support functions returning multiple values.
  let elMap = new Map(); // Map object containing all game tiles maped to DOM grid
  let grassTiles = {}; //
  let forestTiles = {};
  let lumberCampTiles = {};
  let tiles = []; // Array of  map tiles: "kind" to be specified

  class Grass {
    constructor() {
      this.type = 'grass';
      this.src = "assets/images/grass-tile.jpg";
      this.actions = "";
      this.messages = "";
    }
  }

  class LogCamp {
    constructor() {
      this.type = 'LogCamp';
      this.src = "assets/images/log-camp-tile.jpg";
      this.actions = "Sell Logs";
      this.messages = "Sell your logs and make some profit";
    }

    /**
     * Sells logs in stock and generate profit = logsInStock * SELLLOGS
     * LogsInStock is set to 0
     * Profit is added to current profit
     * @param {*} stockProfit 
     * @param {*} SELLLOGS 
     * @returns 
     */
    sellLogs(stockProfit, SELLLOGS) {
      let saleProfit = stockProfit.logsInStock * SELLLOGS;
      stockProfit.logsInStock = 0;
      stockProfit.profit += saleProfit;
      return stockProfit;
    }
  }

  displayGameInfo(stockProfit, TARGETPROFIT); // display Game ino in the info bar

  createMap(elMap, GRASSMAP, FORESTMAP, LUMBERCAMPMAP, HARVESTFOREST,
    grassTiles, forestTiles, lumberCampTiles, tiles);
  /*console.log("elMap is: ", elMap);*/

  //Tempory code to allow game flow during development
  //stockProfit.logsInStock = harvestForest(stockProfit, HARVESTFOREST); // A forest is harvested and the logs are added to logsInStock 

  // Temporary code to allow game flow during development
  //stockProfit = sellLogs(stockProfit, SELLLOGS);

  //stockProfit.logsInStock = harvestForest(stockProfit, HARVESTFOREST);

  displayGameInfo(stockProfit, TARGETPROFIT); // display Game ino in the info bar



  // Get End Game Data
  gameResult = checkProfit(stockProfit, TARGETPROFIT); // Checks if the Target Profit has been made
  console.log("game Result is: ", gameResult)

  // End Game Test
  if (gameResult === "win") { // if the game is won.... which it is!
    console.log("You have won the Game!");

    win(screen, nextScreen, 
      WELCOME, INTRO, GAME, WIN, 
      MONOLOGUEDISPLAY, GAMEDISPLAY, TARGETPROFIT, 
      HARVESTFOREST, SELLLOGS, 
      GRASSMAP, FORESTMAP, LUMBERCAMPMAP);
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
 * Displays the profit, logs in stock and target profit to the screen
 * @param {S} stockProfit 
 * @param {*} TARGETPROFIT 
 */
function displayGameInfo(stockProfit, TARGETPROFIT) {
  console.log("displayGameInfo has been called");

  document.getElementById("logs").innerText = stockProfit.logsInStock;
  document.getElementById("profit").innerText = stockProfit.profit;
  document.getElementById("target-profit").innerText = TARGETPROFIT;
}

// Map Functions

function createMap(elMap, GRASSMAP, FORESTMAP, LUMBERCAMPMAP, HARVESTFOREST,
  grassTiles, forestTiles, lumberCampTiles, tiles) {
  console.log("createMap() has been called");

  // create map keys from Screen map ids
  let node = document.getElementById("map").firstElementChild; // sets the first mapgrid element as a node
  let mapKeys = []; // array to hold mapKeys

  while (node) { // itterates through all elMap divs and populates mapKeys with ids
    mapKeys.push(node.id);
    node = node.nextElementSibling;
  }

  tiles = createRawTiles(mapKeys, tiles); // an array of tile objects is created

  setForest(tiles, "b1", HARVESTFOREST); // use this function to set a forest to a particular tile

}

/**
 * Creates a collection of raw tiles (tiles which have yet to be given a kind eg Forest, Grass or Lumbercamp)
 * @param {*} mapKeys 
 * @param {*} tiles 
 * @returns 
 */
function createRawTiles(mapKeys, tiles) {
  console.log("createRawTiles has been called");
  // Tiles Class
  class Tiles {
    constructor(loc, currentTile, kind, position, edge, movement, movementTxt) {
      this.loc = loc; // map ref
      this.currentTile = currentTile; //boolean
      this.kind = kind; // forest, grass or lumberCamp
      this.position = position; //'top edge' etc
      this.edge = edge; // boolean
      this.movement = movement; // Available movement {move-up: boolean, move-right: boolean etc}
      this.movementTxt = movementTxt; // {"Move Up", "Move Right"} etc
    }
  }

  let tile = {};
  // Create Array of  Tile Objects
  mapKeys.forEach(function(element) {
    if (element === "h1") { // top left corner tile
      tile = new Tiles("h1", false, {}, "top-left-corner", true, {"up": false, "right": true, "down": true, "left": false}, ["Move Right","Move Down"]);
    } else if (element === "h8") { //top right corner tile
      tile = new Tiles("h8", false, {}, "top-right-corner", true, {"up": false, "right": false, "down": true, "left": true}, ["Move Down", "Move Left"]);
    } else if (element === "a1") { // bottom left corner tile. This is the current tile at the start of the game
      tile = new Tiles("a1", true, {}, "bottom-left-corner", true, {"up": true, "right": true, "down": false, "left": false}, ["Move Up", "Move Right"]);
    } else if (element === "a8") { //bottom right corner tile
      tile = new Tiles("a8", false, {}, "bottom-right-corner", true, {"up": true, "right": false, "down": false, "left": true}, ["Move up", "Move Left"]);
    } else if (element.charAt(0) === "h") { //top edge tiles
      tile = new Tiles(element, false, {}, "top-edge", true, {"up": false, "right": true, "down": true, "left": true}, ["Move right", "Move down", "Move Left"]);
    } else if (element.charAt(1) === "8") { //right edge tiles
      tile = new Tiles(element, false, {}, "right-edge", true, {"up": true, "right": false, "down": true, "left": true}, ["Move up", "Move down", "Move Left"]);
    } else if (element.charAt(0) === "a") { //bottom edge tiles
      tile = new Tiles(element, false, {}, "bottom-edge", true, {"up": true, "right": true, "down": false, "left": true}, ["Move up", "Move right", "Move Left"]);
    } else if (element.charAt(1) === "1") { //bottom edge tiles
      tile = new Tiles(element, false, {}, "bottom-edge", true, {"up": true, "right": true, "down": false, "left": true}, ["Move up", "Move right", "Move Left"]);
    } else { // inner tiles
      tile = new Tiles(element, false, {}, "inner", false, {"up": true, "right": true, "down": true, "left": true}, ["Move up", "Move right", "Move down", "Move Left"]);
    }; 
  
    tiles.push(tile); //add each tile object to tiles array
  });
  return tiles;
}

function setForest(tiles, tileId, HARVESTFOREST, stockProfit) {
  console.log("setForest is called");

  class Forest {
    constructor() {
      this.type = 'forest';
      this.src = "assets/images/forest-tile.jpg";
      this.actions = "Harvest Forest";
      this.messages = `Harvest the Forest in the Actions Menu. You will make ${HARVESTFOREST}  logs.`
    }

    /**
     * Adds harvested logs to LogsInStock when a Forest is harvested
     * The amount of logs a forest yeilds is set by HARVESTFOREST
     * @param {*} logsInStock 
     * @param {*} HARVESTFOREST 
     * @returns 
     */
    harvestForest(stockProfit, HARVESTFOREST) {
      stockProfit.logsInStock = stockProfit.logsInStock + HARVESTFOREST;
      return stockProfit.logsInStock;
    }
  }
  let forestTile = tiles.find(item => item.loc === tileId);
  let forest = new Forest();
  console.log("forestTile is:", forestTile);
  console.log("forest is:", forest);
  console.log("forestTile.kind is:", forestTile.kind);

}
