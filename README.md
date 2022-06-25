# Logging-In
## A Game for LumberJacks and LumberJackies: You may be a LumberJack , but are you O.K. ?
You can play Logging-In [here.](https://mikerae.github.io/logging-in-game/)

## Development Stage 1: Minimum Viable Product
### Scope
After the initial consultation with my mentor, it was decided to plan  development in stages.
The first stage aims to fullfill all pass critera for the Code-Institue Portfolio Project 2, and presents the game in its simplest form.  
### Use of Libraries
It was advised, given the ambitious scope of the various develpment stages, and limited time resouce to make full use of libries, eg Bootstrap and JQuery etc.
After consideration it was decided not to use libraries for stage 1. The rationale is after feedback from the assesment of Portfolio Project 1 there was room for improvement in UXD, HTML and CSS. It is hoped that this improvement can be made through stage 1 without resorting to the use of libraries. This use of raw HTML CSS and JavaScript can be demonstrated and assesed up to the final commit for Stage 1.

The one exception was the use of a dropdown help menu via bootstrap.

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

## Deployment
At the appropriate stage in development, the GitHub repository was deployed to GitHub Pages for public viewing via the GitHub server. The main repository was selected and an http link was generated and displaed in the repository Readme.md.

## Bugs and Resolutions
### Image does not display in #display-img-wrapper in js
The path was tested by hard coding an img element withing the wrapper div. The image loaded.
Next, the css stlye link was tested by hard coding it into the <img> element. It wqas found that a class identifiyer was used instead of an id identifyer. When corrected the style was applied correctly.
Next, the <img> element was deleated in the html file. The image did not load => the bug is in function: populateScreen() or the object: WELCOME.
Next, the object: WELCOME was tested.
Resolution: The css identifyer was incorrectly applied to object Screens. A class identifer was used in the css file and the setAttribute, but an id identifyer was needed. The Screens key was changed to cssid for clarification, the identifyer in the css file was changed from .screen-image to #screen-image and the function line in loadImage(Screens) was changed to image.setAttribute("id", Screens.cssid)
### Multiple images display in the welcome screen when Nav item 'Quit' is clicked
The loadImage() function was ammended to check for the presence of a live <img> in the HTMLcollections list for the image container. If found, it was removed until hHTMLcollection was empty. Then the required image was loaded using values from the Screens object.
This funcionality will become signifcant during the main game loop.
### Buttons not populating with text or event - Bug 1
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
