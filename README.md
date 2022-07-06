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
The first stage aims to fulfil all pass criteria for the Code-Institute Portfolio Project 2, and presents the game in its simplest form.  
### Use of Libraries
It was advised, given the ambitious scope of the various development stages, and limited time resource to make full use of libraries, eg Bootstrap and JQuery etc.
After consideration it was decided not to significantly use libraries for stage 1. The rationale is after feedback from the assessment of Portfolio Project 1 there was room for improvement in UXD, HTML and CSS. It is hoped that this improvement can be made through stage 1 without resorting to the use of libraries. This use of raw HTML CSS and JavaScript can be demonstrated and assesed up to the final commit for Stage 1.

### UXD Responsive Design
Guidance on building a responsive Grid View was obtained from [W3 Schools](https://www.w3schools.com/css/css_rwd_grid.asp).

For this project it was decided to design from the smallest screen upwards.
Three columns with 15px padding were used for extra small screens:

![Extra Small Screens](/assets/images/3-columns-xsm.png)

Twelve narrow columns were used for small screens:

![Small Screens](/assets/images/12-columns-sm.png)
Twelve wider columns were used for larger screens:

![Larger Screens](/assets/images/12-columns-lg.png)

The Outer Wrapper in the index.html file is set to the width and height of the viewport. It ensures that all elements within it are contained within the user's screen size, and forms the foundation to the sites responsiveness.

All elements underneath the Navbar are contained within one of two display wrappers. These wrappers are styled with 12 columns for small to large screens and 3 columns for extra small screens. The width of these columns are a fraction of the width of the screen. These columns form the layout grid for all elements within these display sections.

Using columns on this way ensures that as the width of the screen changes, so do all the elements contained within. The elements remain in proportion to each other as they change size.

### Original Art Work
All art work was created for this project by Sarah Rae and is used with permission and gratitude. All copyrights for the artwork are owned and reserved by Sarah Rae.  

## Development
### Git Hub Repository
A repository for this project was created on GitHub using a template from the Code Institute. This created a development environment in GitPod containing all the resources needed for project development.
### IDE
The Integrated Development Environment used was Git Pod which is a web browser deployment of the VS Code IDE.
### Version Tracking: Git Commit
Git Commit was used extensively to incrementally record each atomic development step. The use of Summary Lines and Body text in these commits helps towards keeping the purpose and detail of each commit easily understandable.
### Version Tracking: Code Comments
Comments were used extensively in HTML, CSS and JS files to clearly mark each section of code in order to facilitate future maintenance and development.
### Git Push: GitHub 
The project was incrementally pushed to GitHub, ensuring that all commits were stored on GitHub.
### Local Web Page viewing
A local python HTTP server was deployed via the GitPod terminal and the project was viewed in a local browser tab during all stages of development.git push
### Creating 12 Column Grid Layout
box-sizing: boarder-box was used to ensure all grid boxes as sized to include padding and border.
12 classes were created for elements with widths of 1/12 of the screen width i.e. 100%/12 = 8.33%.
Each column floats left, has padding of 15px and for layout purposes initially has a border. The css attribute selector "[attribute*=value]" was used to target all classes (attribute) with value "col-" in order to apply this styling.
Column classes were applied to the html Nav and DisplayScreen sections.
### External Resources
The following reference sites were used extensively throughout development:
- ![Mozila MDN website](https://developer.mozilla.org/en-US/)
- ![StackOverflow](https://stackoverflow.com/)
- ![W3Schools](https://www.w3schools.com/)
Other sites were used via goole searches as required.
### Global Scope, Lexical Scope, Closure, Block Scope, Function perameters
There were Several instances where variables within a function threw the error that they were not defined.
Initially, this was because the variable had not been passed into the function as a perameter. The fix was to pass it as a perameter.
However, this lead to the need to repetatively pass the same perameters to many functions.
After discussion and research it was suggested that there might be a better solution, perhaps using 'Closure'. After reaserch it became clear that 'closure' was a complex concept and not necessarily the way forward. However the concept of 'lexical scope' became increasingly visible.
A conversation with a Student Tutor (copied below) suggested that the only way to avoid repetatively passing multiple parameters into function was to initialise these variables with global scop, i.e. outside evrything. It was suggested that in the context of this game, the risk of global variables behaving unpredictably was negligable.

The variables in question were initialised as global, and the funtion perameters were cleaned up. The game continued to be developed.

However, further reasearch suggested that 'Lexical Scope' i.e. initialising variables within an enclosing function , and also having all the functions for which they needed to be visible within the same enclosing function would provide the solution [The solution needed was for these variables to be accesable to all called functions without passing them as perameters, but not accessable outside the enclosing function to prevent unpredictable behaviour].

The variables were put back inside the encapsulating function main(), and all of the game functions were also placed inside main().
Everything worked fine. Lexcal Scope provided the solution.
 ```
 Conversation with Code Institute
Started on July 5, 2022 at 02:34 PM Europe/Dublin time IST (GMT+0100)

---

02:34 PM | mikerae@me.com: Begin a Tutoring Session

02:34 PM | Operator: Please confirm that you have prepared for this session as per the steps on this page: https://code-institute-org.github.io/tutoring-info/guidelines/ 
 You should have: 
 - A clear description of your issue 
- A list of the debugging steps and research you have carried so far 
 Failure to answer all of the bots questions will result in this conversation being closed. 
 By clicking "I'm Prepared," you agree to these conditions.

02:34 PM | mikerae@me.com: I'm Prepared

02:34 PM | Operator: Your tutoring usage time for this week (in minutes): 1

02:34 PM | Operator: Please provide us with your Problem Statement. This is a clear description of the problem that you're currently facing. 
 At the very least, you need to tell us what should your code be doing, and what is it actually doing? 
 If you are getting an error, please send a screenshot. 
 If you are working on a particular file, which file is it, and which lines of code?

02:35 PM | mikerae@me.com: Tutor Assistance: Variable Scope 
Issue Description
JavaScripte: I want to access variables with block scope (let, const) which are declared in my top function ‘main()’ from within lower level functions without passing them as parameters through multiple subsidiary functions.
How do I access variables within functions which have been declared above that function but are not global (var), without passing them down the function chain as arguments? If I do not provide a variable as a function(argument) created above a function which I want to access within a function, I get an error: ‘argument’ : undefined. 
 Debugging / Research 
- Use of var not recommended; var has global scope and is accessible above the function in which it was declared. This is understood to lead to unpredictable results.
- let and const have block scope within the function in which they were declared.
- all js code is encapsulated in a “main” function so as to prevent visibility above the function main()
- Closure: research
 - youtube https://youtu.be/aHrvi2zTlaU
 - mob web docs https://developer.mozilla.org/en-US/docs/Web/JavaScript/Closures 
 - w3 School https://www.w3schools.com/js/js_function_closures.asp
 - JavaScript tutorial https://www.javascripttutorial.net/javascript-closure/

02:35 PM | Operator: What steps have you taken so far to resolve the issue, or to address current gaps in your knowledge? 
 Vague answers like "searched on Slack and Google" are not sufficient here. What specific steps have you taken? What code and debugging steps have you tried? What resources have you used (e.g. provide links to StackOverflow questions you have read)?

02:35 PM | mikerae@me.com: Debugging / Research 
- Use of var not recommended; var has global scope and is accessible above the function in which it was declared. This is understood to lead to unpredictable results.
- let and const have block scope within the function in which they were declared.
- all js code is encapsulated in a “main” function so as to prevent visibility above the function main()
- Closure: research
 - youtube https://youtu.be/aHrvi2zTlaU
 - mob web docs https://developer.mozilla.org/en-US/docs/Web/JavaScript/Closures 
 - w3 School https://www.w3schools.com/js/js_function_closures.asp
 - JavaScript tutorial https://www.javascripttutorial.net/javascript-closure/

02:35 PM | Operator: One final thing. Please share your code with us. 
 If you are working on Gitpod, please set your workspace to shared, and send us the link to it. If you are working on a course challenge, please send the name of the challenge.

02:37 PM | mikerae@me.com: mikerae-loggingingame-hrhcg0hrpxg

02:37 PM | Operator: Thank you. We will get back to you as soon as possible. You can see how busy tutoring currently is on this page: https://code-institute-org.github.io/tutoring-info/status/ 
 Note that if you have failed to sufficiently answer any of the above questions, tutors will have to re-ask you for the information, which will use up part of your weekly tutoring time allowance.

02:38 PM | John from Code Institute: Hi Mike, John here 
 I hope you are well 
 
 The short answer is, you can't

02:38 PM | John from Code Institute: Variables are scoped, and in order to use them in other functions, they'll need to be passed to those functions

02:39 PM | mikerae@me.com: ok ... thanks..... I was lead to to think that you can by experienced coders... but I can accept your answer

02:40 PM | John from Code Institute: If a variable has global scope, then it can be accessed within other functions

02:40 PM | John from Code Institute: If not, it needs to be passed to the relevant functions

02:40 PM | John from Code Institute: What is the scope of the project?

02:40 PM | John from Code Institute: And what sort of information are you looking to handle/manipulate?

02:41 PM | mikerae@me.com: my current understanding that the only way to give a variable global scope is to declare it using var. I also understand that this is not good practice

02:41 PM | John from Code Institute: You should be using either let or const

02:42 PM | mikerae@me.com: I want to access game constants at lower levels in the game, but want to declare them in one easily accessab;e place

02:43 PM | John from Code Institute: but the way to give a variable global scope is to declare it globally
﻿
﻿script.js >>
﻿
﻿let score = 0; <<< declared globally
﻿
﻿function incrementScore(conditionOne, conditionTwo) {
﻿if (conditionOne) {
﻿score ++; <<< updated within function scope
﻿}
﻿if (conditionTwo) {
﻿score = score + 2; <<< updated within function scope
﻿}
﻿}

02:44 PM | John from Code Institute: Potential issues with this are, what if in a separate function, score is manipulated again, and set to zero, either by accident or design. 
 
 For a smaller project, the implications are not that big

02:44 PM | John from Code Institute: as the codebase won't be huge, an issue like this is easily handled

02:45 PM | John from Code Institute: the advice against the use of global scope is given because most experienced coders are used to working with larger code bases

02:45 PM | John from Code Institute: where a globally declared variable being manipulated in different functions could have catastrophic results

02:45 PM | John from Code Institute: So it's all about, understanding the project, how large the code base is, and working accordingly

02:45 PM | mikerae@me.com: question: ..

02:46 PM | John from Code Institute: Should global scope variables be used? In practice from an industry standard, most often no (except for config/environment variables) 
 
 Can they be used? For a smaller project with a smaller code base, yes

02:48 PM | mikerae@me.com: If I encapsulate all my code within a top level function "main()' and declare a variable using let.... does that give it global scope within main() and functions called by main(); or is it only global if it is declared outside of any function..?

02:49 PM | John from Code Institute: It's only global if it is declared outside of any function scope.

02:50 PM | John from Code Institute: For small game constants, I'd say that using the global scope should be fine for your projects purposes. As you say, they are constants and I'm assuming you want to use them to set conditions for other game mechanics/conditions to compare against?

02:50 PM | mikerae@me.com: thats clear -thank you.... what about using closures then (I dont understand closures yet)?

02:51 PM | mikerae@me.com: yes: I am using my game constants as you describe...

02:52 PM | John from Code Institute: Oooh, that's a tricky topic - I think I'm best left linking you to this https://developer.mozilla.org/en-US/docs/Web/JavaScript/Closures

02:52 PM | John from Code Institute: to read and spend some time absorbing

02:54 PM | mikerae@me.com: Thanks very much , John. I will study closures further.... and thank you...you have opened my thinking to carefully using global variables.... I think this has helped me to proceed. Thank you.

02:57 PM | John from Code Institute: You're most welcome Mike. 
 
 I'll go ahead and close this conversation. 
 
 Have a splendid afternoon and the very best of luck with the project!

02:58 PM | Operator: Help John understand how they’re doing:

02:58 PM | Operator: Rate your conversation

02:58 PM | mikerae@me.com: Thanks John, you too

---
Exported from Code Institute on July 5, 2022 at 03:00 PM Europe/Dublin time IST (GMT+0100)
```





## Deployment
At the appropriate stage in development, the GitHub repository was deployed to GitHub Pages for public viewing via the GitHub server. The main repository was selected and an http link was generated and displayed in the repository Readme.md.

## Bugs and Resolutions
### Image does not display in #display-img-wrapper in js
#### Status: Resolved
The path was tested by hard coding an img element within the wrapper div. The image loaded.
Next, the css style link was tested by hard coding it into the <img> element. It was found that a class identifier was used instead of an id identifier. When corrected the style was applied correctly.
Next, the <img> element was deleted in the html file. The image did not load => the bug is in function: populateScreen() or the object: WELCOME.
Next, the object: WELCOME was tested.
Resolution: The css identifier was incorrectly applied to object Screens. A class identifier was used in the css file and the setAttribute, but an id identifier was needed. The Screens key was changed to cssid for clarification, the identifier in the css file was changed from .screen-image to #screen-image and the function line in loadImage(Screens) was changed to image.setAttribute("id", Screens.cssid)
### Multiple images display in the welcome screen when Nav item 'Quit' is clicked
#### Status: Resolved
The loadImage() function was amended to check for the presence of a live <img> in the HTMLcollections list for the image container. If found, it was removed until hHTMLcollection was empty. Then the required image was loaded using values from the Screens object.
This functionality will become significant during the main game loop.
### Buttons not populating with text or event - Bug 1
#### Status: Resolved
Console error shows: Uncaught ReferenceError: WELCOME is not defined
    at populateButtons (script.js:144)
    at populateScreen (script.js:117)
    at loadScreen (script.js:78)
    at main (script.js:49)
The screen toggled correctly, the image was loaded and text was correctly loaded, therefore the problems begin at populateButtons.
WELCOME was tested be defined using console.log(Screens) at the start of the function populateButtons().
WELCOME is correctly passed into populateButtons().
It became clear that the condition (Screens === WELCOME) needed to be replaced by (Screens.name === "welcome"). This corrected the first level of error so that text loaded into the button. The other similar conditions in the function were amended accordingly.
### Buttons not populating with text or event - Bug 2
#### Status: Resolved
The eventListener to load the next screen when button 1 was clicked did not work. Console.log(Event) was undefined.
```Button1.addEventListener("onclick", function()...```
After checking the syntax of the onclick was changed to:
```Button1.addEventListener("click", function()...```
Console.log(Event) returned an event.
```script.js:147 ƒ Event() { [native code] }```
The next page still did not load.
The variable nextScreen was tested with at the end of populateButtons().
```console.log(nextScreen);``` returned undefined, but should have returned "intro".
The variable nextScreen was tested with at the  eventListener of populateButtons().
```
if (Screens.name === "welcome") {
      button1.innerText = Screens.btn1txt;
      button1.addEventListener("click", function() {
        nextScreen = "intro";
        console.log(nextScreen);
```
Console.log(nextScreen) was not called => the eventListener function was not called. The syntax of the eventListener was checked.

The Logic of the screen flow was reconsidered and it was decided to redesign the flow og the program. A temporary file temporarycode.js was created and contents of script.js was copied.
Here is the commit message for this stage of development:

```
The button eventListener action were not working because the flow
logic of the program is flawed.
A summary of the redesigned flow is as follows:

After initialisation selectScreen(......) is called.
Its behaviour is controlled by the value of nextScreen.
selectScreen(.....) calls the following:
  setScreen(....) sets the screen object
  displayScreen(....) calls all the screen utilities
  setEventListeners(....) adds event Listeners to screen and nav buttons

Event functions are then called as screen or nav buttons are pressed.

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
#### Status: Resolved
The rebuild progressed well until the screen display utilities (except button content and event listeners) were copied and amended. The screen object was  undefined.
Solution: In the setScreen function the 'break' instruction was replaced with 'return screen', and screen was set to receive this functions output. 
### Display Issues
#### Status: Currently Unresolved: Fix before submission
The positioning is messed up in smaller screen sizes.
This is caused by incomplete understanding of flex and flexbox, and mixing an older layout technique using floats and clears.
More research is needed to gain a better understanding of these features.
The full screen gradient is currently a background image which does not load on the  gitHub pages server.
The gradient image was replaced with "background: liniar-gradient" to solve the issue.
### Functions only return one value
#### Status: Resolved
For the function sellLogs(stockProfit, SELLLOGS), I needed a fucntion which, when called by an event, would sell the current stock of logs for a profit,  increase the profit variable and decrease the logsInstock variable. This is not possible directly in JavaScript because a function can only return one value. The work-around was to combine the profit and logsInStock variables int one object "stockProfit".
The function applied its calculations to the stockprofit.profit and stockprofit.logsInStock and returned the stockProfit object.
### TARGETPROFIT  became 'undefined'
#### Status: Resolved
The order of function arguments was checked for when the functions were defined and when they were called.
Inconsistencies were found. Once corrected, the issue was resolved.
### tiles became 'undefined'
#### Status: Resolved
The order of function arguments was checked for when the functions were defined and when they were called.
Inconsistencies were found. Once corrected, the issue was resolved.
### Map overpoulates with tile images when multiple New Games are started
#### Status:Resolved
Each time a new game is called, the map populates in addition to the tiles already created.
When the DOM is inspected, the tile divs show multiple tile images.
The conditional test for presence of a tile image in the container div was faulty. The position of the setting code was included inside
an else statement.
```
if (document.getElementById(_mapKey).children.length !== 0) { // if there is already an image element present, remove it
    document.getElementById(_mapKey).removeChild;
  } else {
  let image = document.createElement('img'); // create an image element in the DOM
  image.setAttribute("class", "tile-img"); // set its class to "title-img"
  image.setAttribute("src", _elMap.get(_mapKey).kind.src); // set image src path
  document.getElementById(_mapKey).appendChild(image);/// put image in wrapper in the DOM
  }
```
### LumberJackie not displaying
#### Status: Resolved
Transferring the above fix to displayLumberJackie() caused LumberJackie to not be displayed.
Using Dev Tools it was established that a LumberJackie was not in the DOM in tile a1 => it had not been created.
This function did not need the above conditional test for image existence. It only needed to test for id "lumberJackie" in the DOM:
```
if (document.getElementById("lumber-jackie")) 
```
Once this was in place, and the code to create the image was encapsulated in an else statement, the image displayed.
### Maptile images don't populate after Welcome/Intro buttons are pressed but do populate when New game is selected in the nav bar
#### Status: Resolved
There were inconsistencies in the args passed to one function, causing some constants to be undefined. These were corrected.
### Map Grid shows horizontal gaps between rows
#### Status: Resolved
When the grid sizes are turned on, for a particular screen size, columns show 61.09px and rows show 65.09 px. They should be equal.
The attribute display:flex was added to the class 'tile' which fixed the issue.
### Tile Response to event Listeners is unacceptably slow
#### Status: Resolved
Currently, event listeners are attached to all tiles: but listeners are only needed for the current tile and adjacent tiles.
A set of adjacent tiles was generated and this will be used to set relevant event listeners. This improved performance.
### Next Tile Eventlistners In Actions Menu are not yet corresponding to new current tile
#### Status: Unresolved

## Testing
Testing took place constantly throughout development as functions were built and deployed.
Console.log() was used to check the condition of variables.
The Chrome Developer tools debugger was used to identify errors.
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
