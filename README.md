# Logging-In
## A Game for LumberJacks and LumberJackies using JavaScript
You can play Logging-In [here.](https://mikerae.github.io/logging-in-game/)

## UXD
### Strategy
![UXD Strategy](assets/images/uxd-strategy.png)
### Scope: Development Stage 1
![UXD Scope Development Stage: 1/1](assets/images/uxd-scope-dev1-1.png)
![UXD Scope Development Stage: 1/2](assets/images/uxd-scope-dev1-2.png)
### Scope: Development Stage 2
![UXD Scope Development Stage: 2](assets/images/uxd-scope-dev2.png)
### Scope: Development Stage 3
![UXD Scope Development Stage: 3](assets/images/uxd-scope-dev3.png)
### Scope: Development Stage 4
![UXD Scope Development Stage: 4](assets/images/uxd-scope-dev4.png)
### Scope: Development Stage 5
![UXD Scope Development Stage: 5](assets/images/uxd-scope-dev5.png)
### Scope: Development Stage 6
![UXD Scope Development Stage: 6](assets/images/uxd-scope-dev6.png)
### Scope: Development Stage 7
![UXD Scope Development Stage: 7](assets/images/uxd-scope-dev7.png)
### Scope: Development Stage 8
![UXD Scope Development Stage: 8/1](assets/images/uxd-scope-dev8-1.png)
![UXD Scope Development Stage: 8/1](assets/images/uxd-scope-dev8-2.png)
### Scope: Development Stage 9
![UXD Scope Development Stage: 9/1](assets/images/uxd-scope-dev9-1.png)
![UXD Scope Development Stage: 9/1](assets/images/uxd-scope-dev9-2.png)
### Scope: Development Stage 10
![UXD Scope Development Stage: 10](assets/images/uxd-scope-dev10.png)
### Scope: Development Stage 11
![UXD Scope Development Stage: 11](assets/images/uxd-scope-dev11.png)
### Structure
![UXD Structure](assets/images/uxd-structure.png)
### Skeleton
![UXD Skeleton Home Screen](assets/images/uxd-skeleton-home.png)
![UXD Skeleton Intro Screen](assets/images/uxd-skeleton-intro.png)
![UXD Skeleton Game Screen](assets/images/uxd-skeleton-home.png)
![UXD Skeleton Win Screen](assets/images/uxd-skeleton-intro.png)
![UXD Skeleton Loose: Time Out Screen](assets/images/uxd-skeleton-lose-time.png)
![UXD Skeleton Loose: Burn Screen](assets/images/uxd-skeleton-lose-burn.pmg.png)
### Surface
![UXD Surface Design Reference](assets/images/uxd-surface-1.png)
![UXD Surface Game Map Tiles: Dev Stage 1](assets/images/uxd-surface-2.png)
![UXD Surface Overlays](assets/images/uxd-surface-3.png)
![UXD Surface Screen Element Concepts](assets/images/uxd-surface-4.png)
![UXD Surface Welcome/Intro, Win Screen Display Images](assets/images/uxd-surface-5.png)
![UXD Surface Lose Screen Display Images](assets/images/uxd-surface-6.png)
![UXD Surface Fonts](assets/images/uxd-surface-7.png)
## Screen Flow Logic
![Screen Flow Logic 1](assets/images/screen-flow-logic-1.png)
![Screen Flow Logic 2](assets/images/screen-flow-logic-2.png)
## Development Stage 1: Minimum Viable Product
### Scope
After the initial consultation with my mentor, it was decided to plan  development in stages.
The first stage aims to fullfill all pass critera for the Code-Institue Portfolio Project 2, and presents the game in its simplest form.  
### Use of Libraries
It was advised, given the ambitious scope of the various develpment stages, and limited time resouce to make full use of libries, eg Bootstrap and JQuery etc.
After consideration it was decided not to significantly use libraries for stage 1. The rationale is after feedback from the assesment of Portfolio Project 1 there was room for improvement in UXD, HTML and CSS. It is hoped that this improvement can be made through stage 1 without resorting to the use of libraries. This use of raw HTML CSS and JavaScript can be demonstrated and assesed up to the final commit for Stage 1.

### UXD Resposnive Design
Guidence on building a responsive Grid View was obtained from [W3 Schools](https://www.w3schools.com/css/css_rwd_grid.asp).

For this project it was decided to design from the smallest screen upwards.
Three columns with 15px padding were used for extra small screens:

![Extra Small Screens](/assets/images/3-columns-xsm.png)

Twelve narrow columns were used for small screens:

![Small Screens](/assets/images/12-columns-sm.png)
Twelve wider columns were used for larger screens:

![Larger Screens](/assets/images/12-columns-lg.png)

The Outer Wrapper in the index.html file is set to the width and height of the viewport. It ensures that all elements within it are contained within the user's screen size, and forms the foundation to the sites responsiveness.

All elements underneath the Navbar are contained within one of two display wrappers. These wrappers are styled with 12 columns for small to large screens and 3 columns for extra small sceens. The width of these columns are a fraction of the width of the screen. These columns form the layout grid for all elements within these display sections.

Using columns on this way ensures that as the width of the screen changes, so do all the elemnts contained within. The elements remain in proportion to each other as they change size.

### Origonal Art Work
All art work was created for this project by Sarah Rae and is used with permission and gratitude. All copyrights for the artwork are owned and reserved by Sarah Rae.  

## Development
### Git Hub Repository
A repository for this project was created on GitHub using a template from the Code Institute. This created a development environment in GitPod containing all the resources needed for project development.
### IDE
The Integrated Development Environment used was Git Pod which is a web browser deployment of the VS Code IDE.
### Version Tracking: Git Commit
Git Commit was used extensively to incrementally record each atomic development step. The use of Summary Lines and Body text in these commits helps towards keeping the purpose and detail of each commit easily understandable.
### Version Tracking: Code Comments
Comments were used extensively in HTML, CSS and JS files to clearly mark each section of code in order to facilitate future maintenece and development.
### Git Push: GitHub 
The project was incrementally pushed to GitHub, ensuring that all commits were stored on GitHub.
### Local Web Page viewing
A local python HTTP server was deployed via the GitPod terminal and the project was viewed in a local browser tab during all stages of development.git push
### Creating 12 Column Grid Layout
box-sizing: boarder-box was used to ensure all grid boxes as sized to include padding and border.
12 classes were created for elements with widths of 1/12 of the screen width i.e. 100%/12 = 8.33%.
Each column floats left, has padding of 15px and for layout puropses initially has a border. The css attribute selector "[attribute*=value]" was used to target all classes (attribute) with value "col-" in order to apply this styling.
Column classes were applied to the html Nav and DisplayScreen sections.
### External Resources
The following refference sites were used extensivly throughout development:
- ![Mozila MDN website](https://developer.mozilla.org/en-US/)
- ![StackOverflow](https://stackoverflow.com/)
- ![W3Schools](https://www.w3schools.com/)
Other sites were used via goole searches as required.




## Deployment
At the appropriate stage in development, the GitHub repository was deployed to GitHub Pages for public viewing via the GitHub server. The main repository was selected and an http link was generated and displaed in the repository Readme.md.

## Bugs and Resolutions
### Image does not display in #display-img-wrapper in js
#### Outcome: Resolved
The path was tested by hard coding an img element withing the wrapper div. The image loaded.
Next, the css stlye link was tested by hard coding it into the <img> element. It wqas found that a class identifiyer was used instead of an id identifyer. When corrected the style was applied correctly.
Next, the <img> element was deleated in the html file. The image did not load => the bug is in function: populateScreen() or the object: WELCOME.
Next, the object: WELCOME was tested.
Resolution: The css identifyer was incorrectly applied to object Screens. A class identifer was used in the css file and the setAttribute, but an id identifyer was needed. The Screens key was changed to cssid for clarification, the identifyer in the css file was changed from .screen-image to #screen-image and the function line in loadImage(Screens) was changed to image.setAttribute("id", Screens.cssid)
### Multiple images display in the welcome screen when Nav item 'Quit' is clicked
#### Outcome: Resolved
The loadImage() function was ammended to check for the presence of a live <img> in the HTMLcollections list for the image container. If found, it was removed until hHTMLcollection was empty. Then the required image was loaded using values from the Screens object.
This funcionality will become signifcant during the main game loop.
### Buttons not populating with text or event - Bug 1
#### Outcome: Resolved
Console error shows: Uncaught ReferenceError: WELCOME is not defined
    at populateButtons (script.js:144)
    at populateScreen (script.js:117)
    at loadScreen (script.js:78)
    at main (script.js:49)
The screen toggled corectlt, the image was loaded and text was correctly loaded, therefore the problems begin at populateButtons.
WELCOME was tested be defined using console.log(Screens) at the start of the function populateButtons().
WELCOME is corerectly passed into populateButtons().
It became clear that the condition (Screens === WELCOME) needed to be repaced by (Screens.name === "welcome"). This corrected the first level of error so that text loaded into the botton. The other similar conditions in the function were ammended accordingly.
### Buttons not populating with text or event - Bug 2
#### Outcome: Resolved
The eventListener to load the next screen when button 1 was clicked did not work. Console.log(Event) was undifined.
```Button1.addEventListener("onclick", function()...```
After checking the syntax of th onclick was changed to:
```Button1.addEventListener("click", function()...```
Console.log(Event) returned an event.
```script.js:147 ƒ Event() { [native code] }```
The next page still did not load.
The varriable nextScreen was tested with at the end of populateButtons().
```console.log(nextScreen);``` returned undefined, but should have returned "intro".
The varriable nextScreen was tested with at the  eventListener of populateButtons().
```
if (Screens.name === "welcome") {
      button1.innerText = Screens.btn1txt;
      button1.addEventListener("click", function() {
        nextScreen = "intro";
        console.log(nextScreen);
```
Console.log(nextScreen) was not called => the eventListener funtion was not called. The syntax of the eventListener was checked.

The Logic of the screen flow was reconsidered and it was decided to redesign the flow og the program. A temporary file temporarycode.js was created and contents of script.js was copied.
Here is the commit message for this stage of development:

```
The button eventListener action were not working because the flow
logic of the progam is flawed.
A summary of the redesigned flow is as follows:

After initialisation selectScreen(......) is called.
Its behaviour is controled by the value of nextScreen.
selectScreen(.....) calls the following:
  setScreen(....) sets the screen object
  displayScreen(....) callls all the screen utilityies
  setEventListeners(....) adds event Listeners to screen and nav buttons

Event functions are then called as screen or nav buttons are preeed.

Event functions are:
  quit()  sets nextScreen to "welcome' and calls selectScreen()
  playNow() sets nextScreen to "intro' and calls selectScreen()
  newGame() sets nextScreen to "game' and calls selectScreen()
  win() sets nextScreen to "win' and calls selectScreen()

  The initialisegame() function and rungame() main game loop are called
  within displayScreen() when nextscreen = "game" and selectScreen() is
  called.
  ```
### Screen Flow rebuild bug 1
#### Outcome: Resolved
The rebuild progressed well untill the screen display utilities (except button content and event listeners) were copied and ammended. The screen object was  undefined.
Solution: In the setScreen funtion the 'break' instruction was replaced with 'return screen', and screen was set to receive this functions output. 
### Display Issues
#### Outcome: Resolved
The positioning is messed up in smaller screen sizes.
This is caused by incomplete understanding of flex and flexbox, and mixing an older layout technique using floats and clears.
More research is needed to gain a better understanding of these features.
The full screen gadient is currently a background image which does not load on the  gitHub pages server.
The gradient image was replaced with "background: liniar-gradient" to solve the issue.
### Functions only return one value
#### Outcome: Resolved
For the function sellLogs(stockProfit, SELLLOGS), I needed a fucntion which, when called by an event, would sell the current stock of logs for a profit,  increase the profit variable and decrease the logsInstock variable. This is not possible directly in JavaScript because a function can only return one value. The work-around was to combine the profit and logsInStock variables int one object "stockProfit".
The function applied its calculations to the stockprofit.profit and stockprofit.logsInStock and returned the stockProfit object.
### TARGETPROFIT  became 'undefined'
#### Outcome: Resolved
The order of function arguments was checked for when the functions were defined and when they were called.
Inconsistencies were found. Once corrected, the issue was resolved.
### tiles became 'undefined'
#### Outcome: Resolved
The order of function arguments was checked for when the functions were defined and when they were called.
Inconsistencies were found. Once corrected, the issue was resolved.
### Map overpoulates with tile images when multiple New Games are started
#### Outcome:Resolved
Each time a new game is called, the map populates in addaition to the tiles already created.
When the DOM is inspected, the tile divs show multiple tile images.
The conditional test for presence of a tile image in the container div was faulty. The position of the setting code was included inside
an else statement.
```
if (document.getElementById(_mapKey).children.length !== 0) { // if there is already an image element present, remove it
    document.getElementById(_mapKey).removeChild;
  } else {
  let image = document.createElement('img'); // crreate an image element in the DOM
  image.setAttribute("class", "tile-img"); // set its class to "title-img"
  image.setAttribute("src", _elMap.get(_mapKey).kind.src); // set image src path
  document.getElementById(_mapKey).appendChild(image);/// put image in wrapper in the DOM
  }
```
### LumberJackie not displaying
#### Outcome: Resolved
Transfering the above fix to displayLumberJackie() caused LumberJackie to not be displayed.
Using Dev Tools it was established that a LumberJackie was not in the DOM in tile a1 => it had not been created.
This function did not need the above conditional test for image existence. It only needed to test for id "lumberJackie" in the DOM:
```
if (document.getElementById("lumber-jackie")) 
```
Once this was in place, and the code to create the image was encapsulated in an else statement, the image displayed.
### Maptile images dont populate after Welecome/Intro buttons are pressed but do populate when New game is selected in the nav bar
#### Outcome: Resolved
There were inconsistencies in the args passed to one function, causing some constants to be undefined. These were corrected.
### Map Grid shows horizontal gaps between rows
#### Outcome: Resolved
When the grid sizes are turned on, for a particular screen size, columns show 61.09px and rows show 65.09 px. They should be equal.
The attribute display:flex was added to the class 'tile' which ficked the issue.

## Testing
Testing took place constantly throughout devenlopment as functions were built and deployed.
Console.log() was used to check the condition of variables.
The Chrome Develpoer tools debugger was used to identifie errors.
Break points wee used to inspect the progression of the script.

### Human Testing and Development Feedback
After consultation with Sarah Rae the following changes were made:
  Fonts from Google Fonts were chosen:
    "Press Start 2P"   for larger heading text
    "Orbitron" for body text
  the Welcome image was upgraded.
  the Display Screen text was placed under the image
  the Display Screen Header h1 element was removed
  the quit button under the image was removed
