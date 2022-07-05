// Initialise Global CONSTANTS. These are set as global inorder for the game mechanics to be easily editable.

// Game Performance
const TARGETPROFIT = 10000; // The profit needed to win the game
const HARVESTFOREST = 20; // The amount of logs produced when a Forest tile is harvested
const SELLLOGS = 50; // The profit factor for selling logs ()

// Screen objects
const MONOLOGUEDISPLAY = document.getElementById("displayScreen-wrapper"); // The area of the screen used to display Monologe Screens eg welcome, intro, win etc.
const GAMEDISPLAY = document.getElementById("displayGame-wrapper"); // The are if the screen displaying the main game area

// Tile Collections
const GRASSMAP = ['a2', 'a6',
  'b1', 'b2', 'b3', 'b6', 'b7',
  'c1', 'c2', 'c3', 'c4', 'c5', 'c6', 'c7', 'c8',
  'd1', 'd4', 'd5', 'd6',
  'e1', 'e2','e4','e5', 'e6',
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
const LOGCAMP = ['a1'];

// Initialsie Class of Screen Objects
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

const WELCOME = new Screens("welcome", "", "", "assets/images/welcome-screen-background.png", "Welcome image", "New Game");
const INTRO = new Screens("intro", "", `Are you ready to harvest your Forest, build up your stock of Logs and sell them at your Lumber-Camp? \n
 If you make £${TARGETPROFIT} in profit you Win!`, "assets/images/welcome-screen-background.png", "Game Introduction image", "Play Game");
const GAME = new Screens("game");
const WIN = new Screens("win", "Congratulations! You Won!", "You reached your target profit. How will you spend it? Feel free to play again or quit", "assets/images/win-screen.png", "Win image", "New Game");


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
  // Initialise block variables
  let Screen = null; // This object is of the class Screens
  let nextScreen = ""; // nextScreen controls the screen flow of the game

  nextScreen = "welcome"; //The Welcome Screen is the first screen to display
  selectScreen(screen, nextScreen); // The top level screen flow function is called.
}

/**
 * *  * This top level function controls the screen flow of the game 
 * according to the value of nextScreen.
 * It calls the following 
 * setScreen() sets screen object varriable to the next screen object
 * displayScreen() populates all the screen elements defined in the screen object
 * setEventListners() adds event listeners to all buttons and nav elements.
 * 
 * The game flow is then controled by the event functions called by these evnts.
 * @param {*} screen 
 * @param {*} nextScreen 
 */
function selectScreen(screen, nextScreen) {
  screen = setScreen(screen, nextScreen); // sets the screen view to Monologue or Game, and sets the screen object
  displayScreen(screen, nextScreen); // displays the screen view
  setEventListeners(screen, nextScreen); // sets event listeners and waits for user input
}

// Main Screen Functions

/**
 * Sets variable 'screen' to the relevant object 
 * according to the value of 'nextScreen'
 * @param {*} screen 
 * @param {*} nextScreen 
 */
function setScreen(screen, nextScreen, ) {
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
function displayScreen(screen, nextScreen) {
    console.log("displayScreen has been called");

    if (nextScreen === "game") { // Load the Game and run the main game loop
      loadGame(screen, nextScreen);
    } else {
      populateScreen(screen, nextScreen); // enter screen flow 
    }
}

// Event Listener Functions

/**
 *  * Calls event listener functions for  buttons and nav elements
 * @param {*} screen 
 * @param {*} nextScreen 
 */
function setEventListeners(screen, nextScreen) {
  setEventListenersButtons(screen, nextScreen); // calls function which adds event listners to buttons
  setEventListenersNav(screen, nextScreen); // calls function which adds event listners to nav elements
}

/**
 *  * Sets event listeners to buttons according to the value of nextScreen
 * @param {*} screen 
 * @param {*} nextScreen 
 */
function setEventListenersButtons(screen, nextScreen) {
  let button1 = document.getElementById(screen.btn1id);
  if (nextScreen === "welcome") { // for welcome screen
      button1.addEventListener("click", function() { // when button1 is clicked , the intro event function is called
        intro(screen, nextScreen);
      });
  } else if (screen.name === "intro") { // for intro screen
      button1.addEventListener('click', function() { // when button1 is clicked , the game event function is called
        game(screen, nextScreen);
      });
  } else if (screen.name === "win") { // for win screen
        button1.addEventListener('click', function() { //when button1 is clicked , the game event function is called
          game(screen, nextScreen);
        });
  }
}

/**
 * * Sets event listeners to nav elements
 * @param {*} screen 
 * @param {*} nextScreen 
 */
 function setEventListenersNav(screen, nextScreen) {
  let navElements = document.getElementsByClassName("nav-elements"); // the nav elements are stored in the htmlCollection navElements
  for (let navElement of navElements) { // The nav elements collection are iterated through
    navElement.addEventListener("click", function() {
      if (this.getAttribute("nav-type") === "nav-quit") { //If Quit is clicked in the welcome() is called and the Welcome Screen is displayed
        welcome(screen, nextScreen);
      } else if (this.getAttribute("nav-type") === "nav-newgame") { //If New Game is clicked in the welcome() is called and the Welcome Screen is displayed
        game(screen, nextScreen);
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
  image.setAttribute("alt", screen.imgalt);
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
 * displays the Welcome Screen by setting nextScreen to "welcome"
 * and calling selectScreen()
 * @param {*} screen 
 * @param {*} nextScreen 
 */
function welcome(screen, nextScreen) {
    nextScreen = "welcome";
    selectScreen(screen, nextScreen);
}

/**
 * displays the Intro Screen by setting nextScreen to "intro"
 * and calling selectScreen()
 * @param {*} screen 
 * @param {*} nextScreen 
 */
function intro(screen, nextScreen) {
    nextScreen = "intro";
    selectScreen(screen, nextScreen);
}

/**
 * displays the Game Screen by setting nextScreen to "game"
 * and calling selectScreen()
 * @param {*} screen 
 * @param {*} nextScreen 
 */
function game(screen, nextScreen) {
  nextScreen = "game";
  selectScreen(screen, nextScreen);
}

/**
 * displays the Win Screen by setting nextScreen to "win"
 * and calling selectScreen()
 * @param {*} screen 
 * @param {*} nextScreen 
 */
 function win(screen, nextScreen) {
  nextScreen = "win";
  selectScreen(screen, nextScreen);
}

// Game Functions

/**
 * Initialises the game, then runs the main game loop by using uvent listeners.
 * It receives the gameResult and calls the appropriate outcome screen.
 * In this version the gameResult can only be "win".
 * @param {*} screen 
 * @param {*} nextScreen 
 */
function loadGame(screen, nextScreen) {
  console.log("loadGame() has been called");

  // Initilise Variables
  let gameResult = null; // resets the game result
  let stockProfit = {logsInStock: 0, profit: 0}; // this object contains the Game Info and is needed because JavaScript does not support functions returning multiple values.
  let gmMap = new Map(); // Map object containing all game tiles maped to DOM grid
  let tiles = []; // Array of  map tiles: "kind" to be specified
  let currentTileId = "a1"; // This is the current tile when the game is initialised
  let adjacentTiles = new Set();

  // Display Initialised Game
  gmMap = createMap(gmMap, tiles, currentTileId); // generates and displays game map
  displayCurrentTileActions(currentTileId, gmMap); // displays current tile actions in the Actions Window
  displayCurrentTileMessages(currentTileId, gmMap); // displays current tile messages in the Messages Window
  displayGameInfo(stockProfit); // display Game ino in the info bar

  //Tile Sets

  // Create a set of adjacent tiles to the current tile
  adjacentTiles = makeAdjacentTilesSet(currentTileId, gmMap);   // Create a set of adjacent tiles to the current tile
  console.log("adjacentTiles Set is: ",adjacentTiles);

  // Event Listeners
  setActionEventListners(currentTileId, gmMap, stockProfit);
  setTileEventListners(adjacentTiles, gmMap, currentTileId);

  // Get End Game Data
  gameResult = checkProfit(stockProfit); // Checks if the Target Profit has been made
  console.log("game Result is: ", gameResult)

  // End Game Test
  if (gameResult === "win") { // if the game is won.... which it is!
    console.log("You have won the Game!");

    win(screen, nextScreen);
  }
}

/**
 * Checks to see if profit has reached TARGETPROFIT
 * and returns "win" if it has.
 * @param {*} profit 
 * @param {*} TARGETPROFIT 
 * @returns 
 */
function checkProfit(stockProfit) {
  console.log("checkProfit() has been called")
  return (stockProfit.profit >= TARGETPROFIT ? "win": null);
}

/**
 * Displays the profit, logs in stock and target profit to the screen
 * @param {S} stockProfit 
 * @param {*} TARGETPROFIT 
 */
function displayGameInfo(stockProfit) {
  console.log("displayGameInfo has been called");

  document.getElementById("logs").innerText = stockProfit.logsInStock;
  document.getElementById("profit").innerText = stockProfit.profit;
  document.getElementById("target-profit").innerText = TARGETPROFIT;
}

// Map Creation Functions

/**
 * Creates An initial Map poulated with tile objects
 * Displays initial map images to DOM
 * Displays LumberJackie overlay to current tile in DOM
 * @param {*} gmMap 
 * @param {*} tiles 
 * @param {*} currentTileId 
 * @returns 
 */
function createMap(gmMap,tiles, currentTileId) {
  console.log("createMap() has been called");

  // create map keys from Screen map ids
  let node = document.getElementById("map").firstElementChild; // sets the first mapgrid element as a node
  let mapKeys = []; // array to hold mapKeys
  while (node) { // iterates through all DOM Map tile divs and populates mapKeys tile divs with ids
    mapKeys.push(node.id);
    node = node.nextElementSibling;
  }
  // Generate tile objects
  tiles = createRawTiles(mapKeys, tiles); // an array of tile objects is created
  tiles = setTiles(tiles); // sets all tiles with obects according to given object maps
  // set tile and overlay objects in game map object
  gmMap = setElMap(gmMap,tiles,mapKeys); // creates a map object gmMap 
  gmMap.forEach(displayMapTile); // displays all the tile images in the DOM map
  displayLumberJackie(currentTileId, gmMap); // displays LumberJackie overlay in current tile
  return gmMap;
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
    constructor(loc, currentTileId, kind, position, edge, movement, movementTxt) {
      this.loc = loc; // map ref
      this.currentTileId = currentTileId; //boolean
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
    } else if (element.charAt(1) === "1") { //left edge tiles
      tile = new Tiles(element, false, {}, "left-edge", true, {"up": true, "right": true, "down": true, "left": false}, ["Move up", "Move right", "Move down"]);
    } else { // inner tiles
      tile = new Tiles(element, false, {}, "inner", false, {"up": true, "right": true, "down": true, "left": true}, ["Move up", "Move right", "Move down", "Move Left"]);
    }; 
  
    tiles.push(tile); //add each tile object to tiles array
  });
  return tiles;
}

/**
 *  Sets a forest object to a given tile
 * @param {*} tiles 
 * @param {*} tileId 
 * @returns 
 */
function setForest(tiles, tileId) {
  console.log("setForest is called");

  class Forest {
    constructor() {
      this.type = 'forest';
      this.src = "assets/images/forest-tile.jpg";
      this.alt = "Forest Tile. Harvest your forest to make logs here";
      this.actions =["Harvest Forest"];
      this.messages = [`Harvest the Forest in the Actions Menu. You will make ${HARVESTFOREST}  logs.`];
    }

    /**
     * Adds harvested logs to LogsInStock when a Forest is harvested
     * The amount of logs a forest yeilds is set by HARVESTFOREST
     * @param {*} logsInStock 
     * @param {*} HARVESTFOREST 
     * @returns 
     */
    harvestForest(stockProfit) {
      console.log("harvestForest has been called");
      stockProfit.logsInStock = stockProfit.logsInStock + HARVESTFOREST;
      return stockProfit.logsInStock;
    }
  }
  let forestTile = tiles.find(item => item.loc === tileId);
  let forest = new Forest();
  forestTile.kind = forest;
  return forestTile;
}

/**
 * Sets a grass object to a given tile
 * @param {*} tiles 
 * @param {*} tileId 
 * @returns 
 */
function setGrass(tiles, tileId) {
  console.log("setGrass is called");

  class Grass {
    constructor() {
      this.type = 'grass';
      this.src = "assets/images/grass-tile.jpg";
      this.alt = "Grass Tile";
      this.actions = [];
      this.messages = ["Here is a lovely place for a picnick!"];
    }
  }
  let grassTile = tiles.find(item => item.loc === tileId);
  let grass = new Grass();
  grassTile.kind = grass;
  return grassTile;
}

/**
 * Sets a lofCamp object to a given tile
 * @param {*} tiles 
 * @param {*} tileId 
 * @returns 
 */
function setLogCamp(tiles, tileId) {
  console.log("setLogCamp is called");

  class LogCamp {
    constructor() {
      this.type = 'logCamp';
      this.src = "assets/images/log-camp-tile.jpg";
      this.alt = "Log Camp Tile: Sell your logs for profit here";
      this.actions = ["Sell Logs"];
      this.messages = ["Sell your logs and make some profit"];
    }

    /**
     * Sells logs in stock and generate profit = logsInStock * SELLLOGS
     * LogsInStock is set to 0
     * Profit is added to current profit
     * @param {*} stockProfit 
     * @param {*} SELLLOGS 
     * @returns 
     */
    sellLogs(stockProfit) {
      console.log("sellLogs has been called");
      let saleProfit = stockProfit.logsInStock * SELLLOGS;
      stockProfit.logsInStock = 0;
      stockProfit.profit += saleProfit;
      return stockProfit;
    }
  }
  let logCampTile = tiles.find(item => item.loc === tileId);
  let logCamp = new LogCamp();
  logCampTile.kind = logCamp;
  return logCampTile;
}

/**
 * sets each tile in tiles with an object according to the map arrays given
 * @param {*} tiles 
 * @returns 
 */
function setTiles(tiles) {
  console.log("setTiles is called");
  let map = [];
  map.push(GRASSMAP);
  map.push(FORESTMAP);
  map.push(LOGCAMP);
  
  for (let m of map) {
    if (m === GRASSMAP) {
      for (let g of GRASSMAP) {
        setGrass(tiles, g);
      }
    } else if (m === FORESTMAP) {
      for (let f of FORESTMAP) {
        setForest(tiles, f);
      }
    } else if (m === LOGCAMP) {
      for (let l of LOGCAMP) {
        setLogCamp(tiles, l);
      }
    }
  }
  return tiles;
}

/**
 * creates a map object gmMap with
 * keys: the DOM mapgrid ids
 * values: the game tiles
 * @param {*} gmMap 
 * @param {*} tiles 
 * @param {*} mapKeys 
 * @returns 
 */
function setElMap(gmMap, tiles, mapKeys) {
  console.log("setElMap is called");
  for (let mapKey of mapKeys) {
    let tile = tiles.find(item => item.loc === mapKey);
    gmMap.set (mapKey, tile);
  }
  return gmMap;
}

/**
 * displays tile object image in given tile
 * @param {*} _tile 
 * @param {*} _mapKey 
 * @param {*} _elMap 
 */
function displayMapTile(_tile, _mapKey, _elMap) {
  if (document.getElementById(_mapKey).children.length !== 0) { // if there is already an image element present, remove it
    document.getElementById(_mapKey).removeChild;
  } else {
  let image = document.createElement('img'); // crreate an image element in the DOM
  image.setAttribute("class", "tile-img"); // set its class to "tile-img"
  image.setAttribute("src", _elMap.get(_mapKey).kind.src); // set image src path
  image.setAttribute("alt", _elMap.get(_mapKey).kind.alt); // set image alt
  document.getElementById(_mapKey).appendChild(image);/// put image in wrapper in the DOM
  }
}

/**
 * Displays LumberJackie in the current tile
 * @param {*} currentTileId 
 * @param {*} gmMap 
 */
function displayLumberJackie(currentTileId, gmMap) {
  console.log("displayLumberJackie is called");
  console.log("In displayLumberJackie currentTileId is: ",currentTileId);
  let currentTile = gmMap.get(currentTileId);
  if (document.getElementById("lumber-jackie")) { // if there is already an image element present, remove it
    document.getElementById("lumber-jackie").remove();
  }
  let image = document.createElement('img'); // crreate an image element in the DOM
  image.setAttribute("id", "lumber-jackie"); // set its id to "lumber-jackie"
  image.setAttribute("src", "assets/images/lumberjackie.png"); // set image src path
  document.getElementById(currentTile.loc).appendChild(image); // put image in wrapper in the DOM
}

/**
 * Removes LumberJackie from DOM
 */
function removeLumberJackie() {
  console.log("removeLumberJackie is called");
    if (document.getElementById("lumber-jackie")) { // if there is already an image element present, remove it
      document.getElementById("lumber-jackie").remove();
    } 
}

/**
 * Displays LumberJackie in the tile provided by tileId
 * @param {*} tileId 
 * @param {*} gmMap 
 */
function hoverLumberJackie(tileId, gmMap) {
  let tile = gmMap.get(tileId);
      let image = document.createElement('img'); // create an image element in the DOM
      image.setAttribute("id", "lumber-jackie-hover"); // set its id to "lumber-jackie"
      image.setAttribute("src", "assets/images/lumberjackie.png"); // set image src path
      document.getElementById(tile.loc).appendChild(image); // put image in wrapper in the DOM
}

/**
 * Hides LumberJackie in the tile provided by tileId
 * @param {*} tileId 
 * @param {*} gmMap 
 */
function unHoverLumberJackie(tileId, gmMap) {
  let tile = gmMap.get(tileId);
      if (document.getElementById("lumber-jackie-hover")) { // if there is already an image element present, remove it
        document.getElementById("lumber-jackie-hover").remove();
      }
}

/**
 * Adds Actions for the current tile to the Actions Menu
 * @param {*} currentTileId 
 * @param {*} gmMap 
 */
function displayCurrentTileActions(currentTileId, gmMap) {
  console.log("displayCurrentTileActions is called");

  if (document.getElementById("actions-menu-list").children.length !== 0) { // if there are already any list elements present, remove them
    document.getElementById("actions-menu-list").innerHTML = "";
  }
  let elActionsMenuList = document.getElementById("actions-menu-list"); // gets Actions Menu unordered list element from the DOM
  let actionsMenuList = []; // creates a variable to store current tile actions
  actionsMenuList.push(gmMap.get(currentTileId).kind.actions); // gets actions list from the current tile and stores them in actionsMenuList
  for (let action of actionsMenuList){ // iterates through the actionsMenuList
    let listItem = document.createElement("li"); // creates a list element in the DOM
    listItem.innerText = action; // adds the action item to the inner text of the list element
    elActionsMenuList.appendChild(listItem); // Adds Action List Element to the DOM
  }
}

/**
 * Add Messages for the current tile to the Messages Window
 * @param {*} currentTileId 
 * @param {*} gmMap 
 */
function displayCurrentTileMessages(currentTileId, gmMap) {
  console.log("displayCurrentTileMessages is called");
  if (document.getElementById("messages").innerText !== "") { // if there are already any messages present, remove them
    document.getElementById("messages").innerHTML = "";
  } 
  let elMessages = document.getElementById("messages"); // gets Messages <p></p> element from the DOM
  let messages = ""; // creates a variable to store current tile messages
  messages = (gmMap.get(currentTileId).kind.messages); // gets messages  from the current tile and stores them in messages
  elMessages.innerText = messages; // adds the messages  to the inner text of the elMessages <p></p> element
  elMessages.append; // Adds Action List Element to the DOM
}

// Movement Functions

/**
 * Tests newTileId to see if it is adjecent to the currentTileId
 * @param {*} currentTileId 
 * @param {*} newTileId 
 * @returns 
 */
function isAdjacent(currentTileId, newTileId) {
  //console.log("isAdjacent is called");
  let x = newTileId[0].charCodeAt(); // converts newTile-1st charater to an ASCII number
  let y = newTileId[1].charCodeAt(); // converts newTile-2nd charater to an ASCII number
  let a = currentTileId[0].charCodeAt(); // converts currentTile-1st character to an ASCII number
  let b = currentTileId[1].charCodeAt(); // converts currentTile-2nd character to an ASCII number
  let xAxis = ((x >= (a-1)) && (x <= (a+1))); //compares allowed 1st characters
  let yAxis = ((y >= (b-1)) && (y <= (b+1))); //compares allowed 2nd characters
  return xAxis && yAxis; // If both 1st and 2nd characters are allowed, the newTile is adjacent and function retuen True
}

/**
 * Make a Set of adjacent tiles for a given tile id. Initially this would be the current tile, but it will also function
 * for use with a movement instruction
 * @param {*} currentTileId 
 * @param {*} gmMap 
 * @returns 
 */
function makeAdjacentTilesSet(currentTileId, gmMap) {
  console.log("makeAdjacentTilesSet is called");
  let adjacentTiles = new Set(); // creates an empty set to hold adjacent tile ( to be used with currentID and onmouseclick for movement)
  let a = currentTileId[0].charCodeAt(); // converts currentTile-1st character to an ASCII number
  let b = currentTileId[1].charCodeAt(); // converts currentTile-2nd character to an ASCII number
  let adjacentTileIds ={};
  let currentTile = gmMap.get(currentTileId);
  let upperTile = String.fromCharCode((a+1),b); //construct a string for upper tile id
  let rightTile = String.fromCharCode(a,(b+1)); //construct a string for right tile id
  let lowerTile = String.fromCharCode((a-1),b); //construct a string for lower tile id
  let leftTile = String.fromCharCode(a,(b-1)); //construct a string for left tile id
  adjacentTileIds = {"upperTile":upperTile, "rightTile":rightTile, "lowerTile":lowerTile, "leftTile":leftTile}; // populates adjacentTileIds with all possible adjecent tile ids
  console.log("currentTile.movementis: ",currentTile.movement);
  for (let [key,value] of Object.entries(currentTile.movement)) { // iterates through the curret tile movement object
    if (value === false) { // is there a movement set to false? If so, delete it from adjacentTileIds
      if (key === "up") {
        delete adjacentTileIds["upperTile"];
      } else if (key === "right") {
        delete adjacentTileIds["rightTile"];
      } else if (key === "down") {
        delete adjacentTileIds["lowerTile"];
      } else if (key === "left")  {
        delete adjacentTileIds["leftTile"];
      }
    }
  }
  for (let [_key,value] of Object.entries(adjacentTileIds)) {
    adjacentTiles.add(gmMap.get(value));
  }
  return adjacentTiles;
}

// Event Listeners

/**
 *  Add Event Listener to Actions menu based on the current tile.
 * If the Action Menu item is clicked, the associated action is fired.
 * @param {*} currentTileId 
 * @param {*} gmMap 
 * @param {*} stockProfit 
 */
function setActionEventListners(currentTileId, gmMap, stockProfit) {
  console.log("setActionEventListners is called");
  let currentTile = gmMap.get(currentTileId); // get current tile
  elActionsMenuList = document.getElementById("actions-menu-list"); // get DOM Actions Menu list
  elActionsMenuList.addEventListener("click", function() {
    if (currentTile.kind.type === "logCamp") {
      currentTile.kind.sellLogs(stockProfit, SELLLOGS);
    } else if (currentTile.kind.type === "forest"){
      currentTile.kind.harvestForest(stockProfit, HARVESTFOREST);
    } else if (currentTile.kind.type === "grass"){
    }
  });
}

/**
 * Creates Event lIstners which display and hide LumberJackie when the mouse moves over 
 * an adjacent square.
 * If an adjacent square is clicked, it becomes the new current square by calling the move() function.
 * @param {*} adjacentTiles 
 * @param {*} gmMap 
 * @param {*} currentTileId 
 */
function setTileEventListners(adjacentTiles, gmMap, currentTileId) {
  adjacentTiles.forEach((value) => { // For each of the tiles in the adjacent tile set:
    let tile = document.getElementById(value.loc); // the Tile id is stored
    tile.addEventListener("mouseover",function() { // a mouseover event listener is added to the tile div
      hoverLumberJackie(value.loc, gmMap); // LumberJackie is displayed
    }, false);
    tile.addEventListener("mouseout",function() { // a mouseout event listener is added to the tile div
      unHoverLumberJackie(value.loc, gmMap); // LumberJackie is hidden
    }, false);
    tile.addEventListener("click",function() { // a mouse click event listener is added to the tile div
      let nextTileId = event.target.parentElement.getAttribute("id");
      setTimeout(function() { // a delay of 1 second is set
        move(adjacentTiles, gmMap, currentTileId, nextTileId); // fter a short delay, LumberJackie moves to the chosen tile, ready to receive further instructions. Game displays are set for the new current tile
      }, 1000);
    }, false);
  });
}

function removeTileEventListners(adjacentTiles, gmMap, currentTileId) {
  console.log("removeTileEventListners is called");
  adjacentTiles.forEach((value) => { // For each of the tiles in the adjacent tile set:
    let tile = document.getElementById(value.loc); // the Tile id is stored
    tile.removeEventListener("mouseover",function() { // a mouseover event listener is removed from  the tile div
      hoverLumberJackie(value.loc, gmMap); // LumberJackie is displayed
    }, false);
    tile.removeEventListener("mouseout",function() { // a mouseout event listener is removed from  the tile div
      unHoverLumberJackie(value.loc, gmMap); // LumberJackie is hidden
    }, false);
    tile.removeEventListener("click",function() { // a mouse click event listener is removed from  the tile div
      let nextTileId = event.target.parentElement.getAttribute("id");
      setTimeout(function() { // a delay of 1 second is set
        move(adjacentTiles, gmMap, currentTileId, nextTileId); // fter a short delay, LumberJackie moves to the chosen tile, ready to receive further instructions. Game displays are set for the new current tile
      }, 1000);
    }, false);
  });

}

/**
 * This function provides movement around the whole grid.
 * Movement is verticle or horizontal and one square at a time
 * current tile event listners are removed
 * current tile status is set to false
 * LumberJackie is removed from the DOM
 * next tile status is set to true
 * LumberJackie is displayed in the new current tile
 * displays new current tile actions in the Actions Window
 * displays new current tile messages in the Messages Window
 * Create a set of adjacent tiles to the new current tile
 * set event listeners for the new adjacent tiles set
 * @param {*} adjacentTiles 
 * @param {*} gmMap 
 * @param {*} currentTileId 
 * @param {*} nextTileId 
 */
function move(adjacentTiles, gmMap, currentTileId, nextTileId) {
  console.log("move is called after a delay of 1 secs");
  removeTileEventListners(adjacentTiles, gmMap, currentTileId); // current tile event listners are removed
  let currentTile = gmMap.get(currentTileId); // current tile object is stored
  currentTile.currentTileId = false; // current tile status is set to false
  let nextTile = gmMap.get(nextTileId); // next tile object is stored
  removeLumberJackie(); // LumberJackie is removed from the DOM
  nextTile.currentTileId = true; // next tile status is set to true
  currentTileId = nextTileId; // next tile becomes current tile
  displayLumberJackie(currentTileId, gmMap); // LumberJackie is displayed in the new current tile
  displayCurrentTileActions(currentTileId, gmMap); // displays new current tile actions in the Actions Window
  displayCurrentTileMessages(currentTileId, gmMap); // displays new current tile messages in the Messages Window
  adjacentTiles = makeAdjacentTilesSet(currentTileId, gmMap);   // Create a set of adjacent tiles to the new current tile
  setTileEventListners(adjacentTiles, gmMap, currentTileId); // set event listeners for the new adjacent tiles set
}
