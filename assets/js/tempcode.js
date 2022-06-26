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
  let currentScreen = null;
  let nextScreen = "";

  //Initialse Objects
  const WELCOME = new Screens("welcome", "Welcome to Logging-In", "You may be a LumberJack or LumberJackie, but are you O.K.? Play Logging-In to find out!", "assets/images/welcome-screen-and play-buttn.jpg", "Welcome image", "New Game");
  const INTRO = new Screens("intro", "Harvest your logs!", `Are you ready to harvest your Forest, build up your stock of Logs and sell them at your Lumber-Camp?
   If you make £${TARGETPROFIT} in profit you Win!. Happy Harvesting!`, "assets/images/welcome-screen-and play-buttn.jpg");
  const GAME = new Screens("game");
  const WIN = new Screens("win", "Congratulations! You Won!", "You reached your target profit. How will you spend it? Feel free to play again or quit", "assets/images/welcome-screen-and play-buttn.jpg", "Win image");
  const SCREENCOLLECTION = [WELCOME, INTRO, GAME, WIN];

  currentScreen = WELCOME; // The Welcome Screen is the first screen to display
  
  //while (currentScreen !== WELCOME) {
    nextScreen = loadScreen(currentScreen, nextScreen, SCREENCOLLECTION, GAMEDISPLAY, MONOLOGUEDISPLAY);
    //console.log(nextScreen);
      if (nextScreen === "welcome") {
        currentScreen = WELCOME;
      };
//  }
  //main()
}
  
// Screen Flow Management Functions

/**
 * Main Screen Flow Function
 * Loads the relevant screen based on currentScreen
 * and returns the next screen} Screens 
 * @param {*} nextScreen 
 * @param {*} SCREENCOLLECTION 
 * @param {*} GAMEDISPLAY 
 * @param {*} MONOLOGUEDISPLAY 
 * @returns 
 */
 function loadScreen(Screens, nextScreen, SCREENCOLLECTION, GAMEDISPLAY, MONOLOGUEDISPLAY) {
    // Initialise event listners for nav menu funtionality
    activateNavMenu(nextScreen, SCREENCOLLECTION, GAMEDISPLAY, MONOLOGUEDISPLAY);
  if (nextScreen === "game") {
    toggleDisplay(Screens, GAMEDISPLAY, MONOLOGUEDISPLAY); // show game screen/ hide dispaly screen
    game(); // initialise game and run game loop
  } else {
    toggleDisplay(Screens, GAMEDISPLAY, MONOLOGUEDISPLAY); // hide game screen/ show display screen
    nextScreen = populateScreen(Screens); // enter screen flow 
    return nextScreen;
  }
}

/**
 *  * Toggels the display between Monologue screens 
 * (welcome, intro, win) and Game screen
 * @param {*} Screens 
 * @param {*} GAMEDISPLAY 
 * @param {*} MONOLOGUEDISPLAY 
 */
function toggleDisplay(Screens, GAMEDISPLAY, MONOLOGUEDISPLAY) {
  switch (Screens.name) {
    case 'game':
      MONOLOGUEDISPLAY.style.display = "none";
      GAMEDISPLAY.style.removeProperty('display');
      nextScreen= game();
      break;
    case 'welcome':
    case 'intro':
    case 'win':
      MONOLOGUEDISPLAY.style.removeProperty('display');
      GAMEDISPLAY.style.display = "none";
  }
}

/**
 * Populates the screen with text, image and buttons
 * by using  data from the Screens object 
 * to set attributes on DOM elements.
 * Adds event listenres onclick to buttons which set nextScreen
 * Returns nextScreen
 * @param {*} Screens 
 * @returns 
 */
function populateScreen(Screens, nextScreen) {
  populateScreenText(Screens); // Loads relevant text on screen
  loadImage(Screens); // Loads relevenat image on screen
  nextScreen = populateButtons(Screens, nextScreen); // Gives buttons the relevant properties
  return nextScreen;
}

/**
 * Add text to h1 and p elements in Dispaly Screen
 * @param {*} Screens 
 */
function populateScreenText(Screens) {
  document.getElementById("screen-title").innerText = Screens.title; // h1 element
  document.getElementById("screen-msg").innerText = Screens.msg; // p element
}

/**
 *  * Gets button data from Screens object
 * Shows or hides button 2 as required
 * Adds eventListners to buttons
 * sets nextScreen.
 * retuens nextScreen
 * @param {*} Screens 
 * @param {*} nextScreen 
 * @returns 
 */
function populateButtons(Screens, nextScreen) {
  let button1 = document.getElementById(Screens.btn1id);
  let button2 = document.getElementById(Screens.btn2id);
  
  if (Screens.name === "welcome") { // for welcome screen
      button1.innerText = Screens.btn1txt; // set button1 text
      button1.addEventListener("click", function() { // when button1 is clicked , prepare to show intro screen
        nextScreen = "intro";
      });
      /* if (button2.style.display) { // Is the button already hidden? If so, do nothing
      } else {
        button2.style.display = "none"; // otherwise, hide the button
      } */
    } /* else if (Screens.name === "intro") { // for intro screen
      button1.innerText = Screens.btn1txt;
      button1.addEventListener('click', function() { // when button1 is clicked , prepare to show game screen
        nextScreen = "game";
      });
      if (button2.style.display) { //Is  button2 already hidden?
        button2.style.removeProperty('display');  // If so, show button2
      } else { //the button is showing: do nothing
      }
      button2.innerText = Screens.btn2txt; // set button2 text
      button2.addEventListener('click', quit); // when button2 is clicked , run quit function and reset the whole game
    }  else if (Screens.name === "win") { // for win screen
        button1.innerText = Screens.btn1txt;
        button1.addEventListener('click', function() { // when button1 is clicked , prepare to show win screen
        nextScreen = "game";
        });
      if (button2.style.display) { //Is  button2 already hidden?
        button2.style.removeProperty('display'); // If so, show button2
      } else { //the button is showing: do nothing
      }
      button2.innerText = Screens.btn2txt; // set button2 text
      button2.addEventListener('click', quit); // when button2 is clicked , run quit function and reset the whole game
    } */
  console.log(nextScreen);
  return nextScreen;
}

/**
 * Checks for image inside container of object.
 * If present, removes image
 * Loads object related images into relevant image container
 * @param {*} Screens 
 */
function loadImage(Screens) {
  let image = document.getElementById(Screens.imgcontainer).getElementsByTagName("img");
    
  while (image[0] != undefined ){ // checks if an image is present in wrraper
      image[0].remove(); // if present, imahe is removed
    } 
  image = document.createElement('img'); // create image element 
  image.src = Screens.imgsrc; // set image src path
  image.setAttribute("id", Screens.imgid); // set image id
  document.getElementById(Screens.imgcontainer).appendChild(image); // put image in wrapper in the DOM
}


// Nav Functions

/**
 * When called the Game screen is loaded and the game wrapper  is called.
 * @param {*} SCREENCOLLECTION 
 * @param {*} currentScreen 
 * @param {*} GAMEDISPLAY 
 * @param {*} MONOLOGUEDISPLAY 
 */
function newGame(SCREENCOLLECTION, currentScreen, nextScreen, GAMEDISPLAY, MONOLOGUEDISPLAY) {
  loadScreen(SCREENCOLLECTION[2], currentScreen, nextScreen, GAMEDISPLAY, MONOLOGUEDISPLAY); //GAME
  currentScreen = SCREENCOLLECTION[2];
  game();
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
            newGame(SCREENCOLLECTION, currentScreen, nextScreen,GAMEDISPLAY, MONOLOGUEDISPLAY);
          } else {
          }
      });
  };
}

// Game functions

/**
 * This wrapper function loads the game 
 * and then starts the main game loop
 * @param {*} nextScreen 
 * @returns 
 */
function game(nextScreen) {
  nextScreen = "win"
  alert("You Won!")
  return nextScreen;
}

